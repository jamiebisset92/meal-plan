const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');
const foodDatabaseLoader = require('../../src/utils/food-database-loader');
const ReviewQueue = require('../review-queue');

// Load food database
let foodDatabase = null;
const reviewQueue = new ReviewQueue();

// Food database is already loaded as an instance
foodDatabase = foodDatabaseLoader;

// Get plan data for editing
router.get('/admin/plan/:planId', async (req, res) => {
    try {
        const { planId } = req.params;
        
        // Get plan from review queue
        const planItem = await reviewQueue.getPlanById(planId);
        if (!planItem) {
            return res.status(404).json({ error: 'Plan not found' });
        }
        
        // Parse HTML to extract meal data
        const htmlPath = path.join(__dirname, '../../public/plans', `${planId}.html`);
        const htmlContent = await fs.readFile(htmlPath, 'utf8');
        
        // Extract meal data from HTML
        console.log('🔧 About to extract meal data...');
        const mealData = await extractMealDataFromHTML(htmlContent);
        console.log('🔧 Meal data extracted:', { 
            trainingCount: mealData.training?.length,
            restCount: mealData.rest?.length,
            refeedCount: mealData.refeed?.length
        });
        
        res.json({
            id: planItem.id,
            clientName: `${planItem.clientData.first_name} ${planItem.clientData.last_name}`,
            clientEmail: planItem.clientData.email,
            createdAt: planItem.timestamp,
            targets: planItem.targets || {},
            meals: mealData,
            userData: planItem.clientData || {}
        });
        
    } catch (error) {
        console.error('Error loading plan:', error);
        res.status(500).json({ error: 'Failed to load plan' });
    }
});

// Update plan
router.post('/admin/update-plan/:planId', async (req, res) => {
    try {
        const { planId } = req.params;
        const { meals, approved } = req.body;
        
        // Get plan from review queue
        const planItem = await reviewQueue.getPlanById(planId);
        if (!planItem) {
            return res.status(404).json({ error: 'Plan not found' });
        }
        
        // Regenerate HTML with updated meals
        const updatedHTML = await generateUpdatedMealPlanHTML(planItem, meals);
        
        // Save updated HTML
        const htmlPath = path.join(__dirname, '../../public/plans', `${planId}.html`);
        await fs.writeFile(htmlPath, updatedHTML);
        
        // Update queue status
        if (approved) {
            await reviewQueue.approvePlan(planId);
        }
        
        res.json({ success: true, message: 'Plan updated successfully' });
        
    } catch (error) {
        console.error('Error updating plan:', error);
        res.status(500).json({ error: 'Failed to update plan' });
    }
});

// Get food database
router.get('/foods', async (req, res) => {
    try {
        const { search } = req.query;
        
        if (!foodDatabase) {
            return res.status(503).json({ error: 'Food database not loaded' });
        }
        
        let foods = foodDatabase.foods;
        
        // Filter by search term if provided
        if (search && search.length > 2) {
            const searchLower = search.toLowerCase();
            foods = foods.filter(food => 
                food.name.toLowerCase().includes(searchLower)
            ).slice(0, 20); // Limit to 20 results
        } else {
            foods = []; // Don't return all foods if no search
        }
        
        res.json(foods);
        
    } catch (error) {
        console.error('Error searching foods:', error);
        res.status(500).json({ error: 'Failed to search foods' });
    }
});

// AI suggestions endpoint
router.post('/admin/ai-suggestions', async (req, res) => {
    try {
        const { request, currentMeals, targets } = req.body;
        
        // Process AI request
        const suggestions = await generateAISuggestions(request, currentMeals, targets);
        
        res.json({ suggestions });
        
    } catch (error) {
        console.error('Error generating AI suggestions:', error);
        res.status(500).json({ error: 'Failed to generate suggestions' });
    }
});

// Get preview HTML
router.get('/admin/plan/:planId/preview', async (req, res) => {
    try {
        const { planId } = req.params;
        
        // Get plan from review queue
        const planItem = await reviewQueue.getPlanById(planId);
        if (!planItem) {
            return res.status(404).json({ error: 'Plan not found' });
        }
        
        const htmlPath = path.join(__dirname, '../../public/plans', `${planId}.html`);
        const htmlContent = await fs.readFile(htmlPath, 'utf8');
        
        res.send(htmlContent);
        
    } catch (error) {
        console.error('Error getting preview:', error);
        res.status(500).json({ error: 'Failed to get preview' });
    }
});

// Helper function to extract meal data from HTML
async function extractMealDataFromHTML(htmlContent) {
    try {
        // Extract meal data from the Module-6 generated JavaScript object
        console.log('🚀 extractMealDataFromHTML called, HTML length:', htmlContent.length);
        
        // Find the start of mealPlanData object
        const mealDataStart = htmlContent.indexOf('const mealPlanData = {');
        if (mealDataStart === -1) {
            console.error('❌ Could not find mealPlanData declaration in HTML');
            return { training: [], rest: [], refeed: [] };
        }
        
        // Find the matching closing brace - we need to count braces
        let braceCount = 0;
        let inString = false;
        let escapeNext = false;
        let stringChar = '';
        let i = mealDataStart + 'const mealPlanData = '.length;
        
        for (; i < htmlContent.length; i++) {
            const char = htmlContent[i];
            
            if (escapeNext) {
                escapeNext = false;
                continue;
            }
            
            if (char === '\\') {
                escapeNext = true;
                continue;
            }
            
            if (!inString) {
                if (char === '"' || char === "'" || char === '`') {
                    inString = true;
                    stringChar = char;
                } else if (char === '{') {
                    braceCount++;
                } else if (char === '}') {
                    braceCount--;
                    if (braceCount === 0) {
                        // Found the end
                        break;
                    }
                }
            } else {
                if (char === stringChar && !escapeNext) {
                    inString = false;
                    stringChar = '';
                }
            }
        }
        
        if (braceCount !== 0) {
            console.error('❌ Could not find matching closing brace for mealPlanData');
            return { training: [], rest: [], refeed: [] };
        }
        
        // Extract the object string
        const objStart = htmlContent.indexOf('{', mealDataStart);
        const objEnd = i + 1;
        const mealDataStr = htmlContent.substring(objStart, objEnd);
        
        console.log('✅ Found mealPlanData object, length:', mealDataStr.length);
        
        // Parse the JavaScript object
        console.log('🔍 Raw meal data string length:', mealDataStr.length);
        console.log('🔍 First 100 chars:', mealDataStr.substring(0, 100));
        
        let mealPlanData;
        try {
            mealPlanData = eval('(' + mealDataStr + ')');
        } catch (evalError) {
            console.error('❌ Eval error:', evalError.message);
            // Try Function constructor as safer alternative
            try {
                mealPlanData = new Function('return ' + mealDataStr)();
            } catch (funcError) {
                console.error('❌ Function constructor error:', funcError.message);
                throw new Error('Could not parse meal plan data');
            }
        }
        
        console.log('🔍 Extracted meal plan data:', {
            hasTraining: !!mealPlanData.training,
            hasRest: !!mealPlanData.rest,
            hasRefeed: !!mealPlanData.refeed,
            trainingMealCount: mealPlanData.training?.meals?.length || 0
        });
        
        // Convert to the format expected by the meal editor
        const convertMeals = (dayData) => {
            if (!dayData || !dayData.meals) return [];
            
            return dayData.meals.map(meal => ({
                name: meal.name,
                foods: meal.foods.map(food => ({
                    name: food.name,
                    amount: food.amount,
                    calories: food.calories,
                    protein: food.protein,
                    carbs: food.carbs,
                    fats: food.fats
                }))
            }));
        };
        
        return {
            training: convertMeals(mealPlanData.training),
            rest: convertMeals(mealPlanData.rest),
            refeed: convertMeals(mealPlanData.refeed)
        };
        
    } catch (error) {
        console.error('Error extracting meal data from JavaScript object:', error);
        console.log('Falling back to HTML parsing...');
        
        // Fallback to old HTML parsing method
        try {
        const mealPattern = /<div class="meal-card"[^>]*>[\s\S]*?<h3[^>]*>(.*?)<\/h3>[\s\S]*?<\/div>/g;
        const foodPattern = /<div class="food-item"[^>]*>[\s\S]*?<span class="food-name">(.*?)<\/span>[\s\S]*?<span class="food-amount">(.*?)<\/span>[\s\S]*?<span class="calories">([\d.]+)<\/span>[\s\S]*?<span class="protein">([\d.]+)g?<\/span>[\s\S]*?<span class="carbs">([\d.]+)g?<\/span>[\s\S]*?<span class="fats">([\d.]+)g?<\/span>/g;
        
        const meals = {
            training: [],
            rest: [],
            refeed: []
        };
        
        let match;
        while ((match = mealPattern.exec(htmlContent)) !== null) {
            const mealHtml = match[0];
            const mealName = match[1];
            
            const foods = [];
            let foodMatch;
            while ((foodMatch = foodPattern.exec(mealHtml)) !== null) {
                foods.push({
                    name: foodMatch[1],
                    amount: foodMatch[2],
                    calories: parseFloat(foodMatch[3]),
                    protein: parseFloat(foodMatch[4]),
                    carbs: parseFloat(foodMatch[5]),
                    fats: parseFloat(foodMatch[6])
                });
            }
            
            meals.training.push({
                name: mealName,
                foods: foods
            });
        }
        
        return meals;
        } catch (fallbackError) {
            console.error('Fallback HTML parsing also failed:', fallbackError);
        return { training: [], rest: [], refeed: [] };
        }
    }
}

// Helper function to generate updated meal plan HTML
async function generateUpdatedMealPlanHTML(planItem, updatedMeals) {
    const { generateInteractiveHTML } = require('../../src/modules/Module-6-Interactive-HTML');
    const { generateSupplementSection } = require('../../src/modules/Module-5-Meal-Plan');
    
    // Extract necessary data
    const userData = planItem.clientData;
    const targets = planItem.targets || {};
    
    // Get supplements data if available
    let supplementsData = null;
    if (planItem.supplementsData) {
        supplementsData = planItem.supplementsData;
    } else {
        // Generate basic supplements based on tier
        const tier = userData.additionalSupplements || 'essentials_only';
        const supplementsModule57Data = {
            personalized_protocol: {
                age_optimized_daily_foundation: "Vitamin D3 3000IU + B-Complex + Magnesium 300mg PM",
                energy_vitality_stack: "Green Tea Extract 400mg AM + L-Carnitine 1000mg AM",
                recovery_sleep_stack: "Magnesium Glycinate 400mg PM + Melatonin 3mg before bed"
            },
            supplement_analysis: {
                tier_assignment: tier
            }
        };
        supplementsData = generateSupplementSection(supplementsModule57Data, userData);
    }
    
    // Process meals for the current day type
    const meals = updatedMeals.training || updatedMeals;
    
    // Generate the interactive HTML
    return generateInteractiveHTML(
        meals,
        targets,
        userData,
        null, // postWorkout
        null, // coffee
        null, // energyDrinks
        null, // snacks
        null, // alcohol
        supplementsData
    );
}

// Helper function to generate AI suggestions
async function generateAISuggestions(request, currentMeals, targets) {
    const suggestions = [];
    
    // Parse the request
    const requestLower = request.toLowerCase();
    
    // Handle common requests
    if (requestLower.includes('replace')) {
        const replaceMatch = requestLower.match(/replace\s+(\w+)\s+with\s+(\w+)/);
        if (replaceMatch) {
            const [, oldFood, newFood] = replaceMatch;
            suggestions.push({
                type: 'replace',
                description: `Replace ${oldFood} with ${newFood}`,
                oldFood,
                newFood,
                meals: findMealsWithFood(currentMeals, oldFood)
            });
        }
    }
    
    if (requestLower.includes('reduce carbs')) {
        const carbMatch = requestLower.match(/reduce carbs by (\d+)g?/);
        if (carbMatch) {
            const amount = parseInt(carbMatch[1]);
            suggestions.push({
                type: 'reduce_carbs',
                description: `Reduce carbohydrates by ${amount}g`,
                amount,
                suggestions: generateCarbReductionSuggestions(currentMeals, amount)
            });
        }
    }
    
    if (requestLower.includes('vegetarian')) {
        suggestions.push({
            type: 'make_vegetarian',
            description: 'Convert to vegetarian options',
            replacements: generateVegetarianReplacements(currentMeals)
        });
    }
    
    if (requestLower.includes('increase protein')) {
        const proteinMatch = requestLower.match(/increase protein by (\d+)g?/);
        if (proteinMatch) {
            const amount = parseInt(proteinMatch[1]);
            suggestions.push({
                type: 'increase_protein',
                description: `Increase protein by ${amount}g`,
                amount,
                suggestions: generateProteinAdditions(currentMeals, amount)
            });
        }
    }
    
    return suggestions;
}

// Helper functions for AI suggestions
function findMealsWithFood(meals, foodName) {
    const results = [];
    for (const [dayType, dayMeals] of Object.entries(meals)) {
        dayMeals.forEach((meal, mealIndex) => {
            meal.foods.forEach((food, foodIndex) => {
                if (food.name.toLowerCase().includes(foodName.toLowerCase())) {
                    results.push({
                        dayType,
                        mealIndex,
                        foodIndex,
                        meal: meal.name,
                        food: food.name
                    });
                }
            });
        });
    }
    return results;
}

function generateCarbReductionSuggestions(meals, targetReduction) {
    // Find high-carb foods that can be reduced
    const suggestions = [];
    let remainingReduction = targetReduction;
    
    for (const [dayType, dayMeals] of Object.entries(meals)) {
        dayMeals.forEach((meal, mealIndex) => {
            meal.foods.forEach((food, foodIndex) => {
                if (food.carbs > 20 && remainingReduction > 0) {
                    const reduction = Math.min(food.carbs * 0.5, remainingReduction);
                    suggestions.push({
                        dayType,
                        mealIndex,
                        foodIndex,
                        food: food.name,
                        currentAmount: food.amount,
                        suggestedReduction: reduction,
                        newAmount: calculateReducedAmount(food, reduction)
                    });
                    remainingReduction -= reduction;
                }
            });
        });
    }
    
    return suggestions;
}

function generateVegetarianReplacements(meals) {
    const meatToVeg = {
        'chicken': 'tofu',
        'beef': 'tempeh',
        'turkey': 'seitan',
        'salmon': 'mock salmon',
        'tuna': 'chickpea salad',
        'eggs': 'tofu scramble',
        'whey protein': 'pea protein'
    };
    
    const replacements = [];
    
    for (const [dayType, dayMeals] of Object.entries(meals)) {
        dayMeals.forEach((meal, mealIndex) => {
            meal.foods.forEach((food, foodIndex) => {
                const foodLower = food.name.toLowerCase();
                for (const [meat, veg] of Object.entries(meatToVeg)) {
                    if (foodLower.includes(meat)) {
                        replacements.push({
                            dayType,
                            mealIndex,
                            foodIndex,
                            original: food.name,
                            replacement: food.name.replace(new RegExp(meat, 'gi'), veg),
                            meal: meal.name
                        });
                        break;
                    }
                }
            });
        });
    }
    
    return replacements;
}

function generateProteinAdditions(meals, targetIncrease) {
    // Suggest protein-rich foods to add
    const proteinFoods = [
        { name: 'Greek Yogurt', amount: '150g', protein: 15, calories: 100 },
        { name: 'Protein Powder', amount: '30g', protein: 25, calories: 120 },
        { name: 'Cottage Cheese', amount: '100g', protein: 12, calories: 90 },
        { name: 'Hard Boiled Eggs', amount: '2 eggs', protein: 12, calories: 140 }
    ];
    
    const suggestions = [];
    let remainingProtein = targetIncrease;
    
    proteinFoods.forEach(food => {
        if (remainingProtein >= food.protein) {
            suggestions.push({
                food: food.name,
                amount: food.amount,
                protein: food.protein,
                calories: food.calories,
                suggestedMeal: 'Snack' // Or determine best meal
            });
            remainingProtein -= food.protein;
        }
    });
    
    return suggestions;
}

function calculateReducedAmount(food, carbReduction) {
    // Simple calculation - would be more sophisticated in production
    const carbRatio = carbReduction / food.carbs;
    const currentAmount = parseFloat(food.amount);
    const newAmount = currentAmount * (1 - carbRatio);
    return `${Math.round(newAmount)}g`;
}

module.exports = router;