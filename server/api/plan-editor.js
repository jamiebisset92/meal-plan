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
        const mealData = await extractMealDataFromHTML(htmlContent);
        
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
        // Extract meal data using regex patterns
        const mealPattern = /<div class="meal-card"[^>]*>[\s\S]*?<h3[^>]*>(.*?)<\/h3>[\s\S]*?<\/div>/g;
        const foodPattern = /<div class="food-item"[^>]*>[\s\S]*?<span class="food-name">(.*?)<\/span>[\s\S]*?<span class="food-amount">(.*?)<\/span>[\s\S]*?<span class="calories">([\d.]+)<\/span>[\s\S]*?<span class="protein">([\d.]+)g?<\/span>[\s\S]*?<span class="carbs">([\d.]+)g?<\/span>[\s\S]*?<span class="fats">([\d.]+)g?<\/span>/g;
        
        const meals = {
            training: [],
            rest: [],
            refeed: []
        };
        
        // For now, extract from training day only
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
        
    } catch (error) {
        console.error('Error extracting meal data:', error);
        return { training: [], rest: [], refeed: [] };
    }
}

// Helper function to generate updated meal plan HTML
async function generateUpdatedMealPlanHTML(planItem, updatedMeals) {
    // This would use your existing meal plan generation logic
    // For now, return a placeholder
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Updated Meal Plan - ${planItem.clientData.first_name} ${planItem.clientData.last_name}</title>
    </head>
    <body>
        <h1>Updated Meal Plan</h1>
        <pre>${JSON.stringify(updatedMeals, null, 2)}</pre>
    </body>
    </html>
    `;
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