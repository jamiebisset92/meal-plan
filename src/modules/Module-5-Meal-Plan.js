// ==================================================================================
// 💪 MODULE 58: MEAL PLAN GENERATION
// ==================================================================================
// World-Class Personalized Meal Planning with Mathematical Precision
// Tolerance: ±25 calories | Protein: Minimum | Carbs & Fiber: EXACT RANGE | Fats: Flexible
// Premium Experience Designed for High-Value Clients
// ==================================================================================

const foodDatabase = require('../utils/food-database-loader');
const MealTemplateService = require('../services/meal-template-service');

// Create template service instance
const templateService = new MealTemplateService();

class TruePrecisionEngine {
  constructor() {
    this.CALORIE_TOLERANCE = 25;
    this.PROTEIN_TOLERANCE = 5;
    this.CARB_TOLERANCE = 5;
    this.FIBER_TOLERANCE = 3;
    this.ADJUSTMENT_INCREMENT = 5;
    this.MAX_ADJUSTMENT_CYCLES = 8;
    this.foodUsageCount = {};
    this.diversityBonus = 1.5;
    this.initializeMealRules();
    this.initializeFoodPairings();
    this.foodDatabase = foodDatabase; // Load food database
  }

  initializeMealRules() {
    // Enhanced meal rules with training schedule integration
    this.mealRules = {
      breakfast: {
        preferredCarbs: ['fast', 'medium'],
        carbTiming: 'moderate',
        proteinTypes: ['lean', 'eggs', 'dairy'],
        fiberTarget: 'moderate',
        cookingTimePreference: 'fast' // Default, will be overridden by user data
      },
      lunch: {
        preferredCarbs: ['medium', 'slow'],
        carbTiming: 'high',
        proteinTypes: ['lean', 'fish'],
        fiberTarget: 'high',
        cookingTimePreference: 'simple'
      },
      dinner: {
        preferredCarbs: ['slow', 'vegetables'],
        carbTiming: 'low',
        proteinTypes: ['lean', 'fatty'],
        fiberTarget: 'high',
        cookingTimePreference: 'full'
      },
      snack: {
        preferredCarbs: ['fast'],
        carbTiming: 'low',
        proteinTypes: ['dairy', 'powder'],
        fiberTarget: 'low',
        cookingTimePreference: 'fast'
      }
    };
  }

  initializeFoodPairings() {
    return {
      // Classic protein + carb combinations that taste good together
      'chicken': ['rice', 'quinoa', 'sweet potato', 'pasta'],
      'beef': ['potato', 'sweet potato', 'rice', 'pasta'],
      'salmon': ['rice', 'quinoa', 'sweet potato', 'asparagus'],
      'turkey': ['rice', 'quinoa', 'sweet potato', 'wrap'],
      'tuna': ['rice', 'pasta', 'rice cakes', 'potato'],
      'egg': ['oats', 'bread', 'potato', 'rice'],
      'steak': ['potato', 'sweet potato', 'rice', 'quinoa'],
      'lamb': ['quinoa', 'sweet potato', 'rice', 'potato'],
      'pork': ['rice', 'potato', 'sweet potato', 'apple']
    };
  }

  buildPrecisionMealPlan(targets, userData, dayType = 'training') {
    console.log('🎯 PRECISION MEAL PLAN GENERATION WITH MODULE-58 ENHANCEMENTS...');
    
    // Module-58 Enhanced Analysis
    const trainingAnalysis = this.analyzeTrainingSchedule(userData);
    const cookingPreferences = this.analyzeCookingPreferences(userData);
    
    console.log('🏋️ Training Schedule Analysis:', trainingAnalysis);
    console.log('👨‍🍳 Cooking Preferences:', cookingPreferences);
    
    // Adjust targets based on training pattern
    const adjustedTargets = this.adjustTargetsForTrainingPattern(targets, trainingAnalysis, dayType);
    
    // Deep clone to avoid mutation
    const originalTargets = JSON.parse(JSON.stringify(adjustedTargets));
    
    console.log(`   Methodology: ${originalTargets.methodology || 'moderate'}`);
    console.log(`   Day Type: ${dayType}`);
    console.log(`   Carb Cycling Pattern: ${trainingAnalysis.carbCyclingPattern}`);
    console.log(`   Target: ${originalTargets.calories} calories (±25)`);
    console.log(`   Protein: ${originalTargets.protein}g minimum`);
    console.log(`   Carbs: ${originalTargets.hierarchical?.carb_range?.min}-${originalTargets.hierarchical?.carb_range?.max}g`);
    console.log(`   Fiber: ${originalTargets.hierarchical?.fiber_range?.min}-${originalTargets.hierarchical?.fiber_range?.max}g`);
    
    // Generate fixed components first
    let postWorkout = null;
    let coffee = null;
    let energyDrinks = null;
    
    console.log('🎯 Before post-workout generation:', JSON.stringify(originalTargets, null, 2));
    
    if (this.shouldIncludePostWorkout(userData, dayType)) {
      postWorkout = this.generatePostWorkoutNutrition(userData, originalTargets, dayType);
      console.log('🏋️ Post-workout object:', postWorkout);
      console.log('🎯 After post-workout generation:', JSON.stringify(originalTargets, null, 2));
    }
    
    if (this.shouldIncludeCoffee(userData)) {
      coffee = this.generateCoffeeNutrition(userData);
      console.log('☕ Coffee object:', coffee);
      console.log('🎯 After coffee generation:', JSON.stringify(originalTargets, null, 2));
    }
    
    if (this.shouldIncludeEnergyDrinks(userData)) {
      energyDrinks = this.generateEnergyDrinkNutrition(userData);
      console.log('⚡ Energy drinks object:', energyDrinks);
      console.log('🎯 After energy drinks generation:', JSON.stringify(originalTargets, null, 2));
    }
    
    // Generate meals with enhanced timing and complexity awareness
    console.log('🎯 Creating meals with cooking time preferences...');
    const meals = this.createEnhancedMeals(originalTargets, userData, dayType, trainingAnalysis, cookingPreferences);
    const tempTotals = this.calculateMealTotals(meals);
    
    // Generate snacks based on user preferences and nutritional gaps
    let snacks = null;
    if (this.shouldIncludeSnacks(userData)) {
      snacks = this.generateSnacksNutrition(userData, originalTargets, tempTotals);
      console.log('🍿 Snacks object:', snacks);
    }
    
    // Include alcohol if applicable
    let alcohol = null;
    if (this.shouldIncludeAlcohol(userData)) {
      alcohol = this.generateAlcoholNutrition(userData, originalTargets);
      console.log('🍺 Alcohol object:', alcohol);
    }
    
    // Module-58 Precision Adjustment Engine
    const finalMeals = this.runPrecisionAdjustmentEngine(meals, originalTargets, trainingAnalysis);
    
    // Return structured meal plan
    return {
      meals: finalMeals,
      postWorkout,
      coffee,
      energyDrinks,
      snacks,
      alcohol,
      supplements: userData.supplements || null,
      trainingAnalysis,
      cookingPreferences
    };
  }

  adjustTargetsForTrainingPattern(targets, trainingAnalysis, dayType) {
    const adjusted = JSON.parse(JSON.stringify(targets));
    
    // Implement carb cycling based on training pattern
    if (trainingAnalysis.carbCyclingPattern === 'aggressive') {
      if (dayType === 'training') {
        // High carb on training days
        adjusted.hierarchical.carb_range.min *= 1.1;
        adjusted.hierarchical.carb_range.max *= 1.15;
      } else if (dayType === 'rest') {
        // Low carb on rest days
        adjusted.hierarchical.carb_range.min *= 0.7;
        adjusted.hierarchical.carb_range.max *= 0.75;
      }
    } else if (trainingAnalysis.carbCyclingPattern === 'moderate') {
      if (dayType === 'training') {
        adjusted.hierarchical.carb_range.min *= 1.05;
        adjusted.hierarchical.carb_range.max *= 1.1;
      } else if (dayType === 'rest') {
        adjusted.hierarchical.carb_range.min *= 0.85;
        adjusted.hierarchical.carb_range.max *= 0.9;
      }
    }
    
    // Round to nearest 5g
    adjusted.hierarchical.carb_range.min = Math.round(adjusted.hierarchical.carb_range.min / 5) * 5;
    adjusted.hierarchical.carb_range.max = Math.round(adjusted.hierarchical.carb_range.max / 5) * 5;
    
    return adjusted;
  }

  createInitialMeals(targets, userData = {}, dayType = 'training') {
    console.log('🍽️ Creating initial meals with targets:', targets);
    const meals = [];
    const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];
    
    // Calculate calories per meal (excluding post-workout)
    const caloriesPerMeal = Math.floor(targets.calories / mealTypes.length);
    const proteinPerMeal = Math.floor(targets.protein / mealTypes.length);
    const carbsPerMeal = Math.floor(targets.hierarchical.carb_range.min / mealTypes.length);
    const fatPerMeal = Math.floor(targets.fat / mealTypes.length);

    console.log('🍽️ Per meal targets:', { caloriesPerMeal, proteinPerMeal, carbsPerMeal, fatPerMeal });

    mealTypes.forEach((mealType, index) => {
      console.log(`🍽️ Creating ${mealType} meal...`);
      const meal = {
        name: mealType.charAt(0).toUpperCase() + mealType.slice(1),
        foods: [],
        calories: 0,
        protein: 0,
        carbs: 0,
        fiber: 0,
        fats: 0
      };

      // Smart food selection based on meal type and categories
      this.addSmartFoodsToMeal(meal, mealType, caloriesPerMeal, proteinPerMeal, carbsPerMeal, fatPerMeal, userData, dayType);
      
      console.log(`🍽️ ${mealType} meal created with ${meal.foods.length} foods, ${meal.calories} calories`);
      meals.push(meal);
    });

    console.log('🍽️ All meals created:', meals.length);
    return meals;
  }

  addSmartFoodsToMeal(meal, mealType, targetCalories, targetProtein, targetCarbs, targetFat, userData = {}, dayType = 'training') {
    // Try template-based generation first
    try {
      // Map meal types to template meal types
      const templateMealTypeMap = {
        'breakfast': 'upon_waking',
        'lunch': 'day_meals',
        'dinner': 'dinner',
        'snack': 'snacks' // Use snack templates instead of null
      };
      
      const templateMealType = templateMealTypeMap[mealType];
      
      if (templateMealType) {
        console.log(`🎯 Attempting template-based generation for ${mealType}...`);
        
        const templateMeal = templateService.getMealForUser(
          userData,
          templateMealType,
          dayType,
          {
            calories: targetCalories,
            protein: targetProtein,
            carbs: targetCarbs,
            fat: targetFat
          }
        );
        
        if (templateMeal) {
          console.log(`✅ Using template for ${mealType}: ${templateMeal.name}`);
          
          // Convert template format to meal format
          meal.name = templateMeal.name || meal.name;
          
          // Check if template returns foods array directly (new format)
          if (templateMeal.foods && Array.isArray(templateMeal.foods)) {
            meal.foods = templateMeal.foods.map(food => ({
              name: food.name,
              amount: food.amount,
              calories: food.calories,
              protein: food.protein,
              carbs: food.carbs,
              fiber: food.fiber || 0,
              fats: food.fats || 0,
              checked: false
            }));
          } else {
            // Fallback to old components format
            meal.foods = [];
            
            // Add protein
            if (templateMeal.components && templateMeal.components.protein) {
              const protein = templateMeal.components.protein;
              console.log(`   Adding protein:`, protein);
              meal.foods.push({
                name: protein.name,
                amount: protein.amount,
                calories: protein.calories,
                protein: protein.protein,
                carbs: protein.carbs,
                fiber: protein.fiber || 0,
                fats: protein.fats || protein.fat || 0, // Handle both 'fats' and 'fat'
                checked: false
              });
            }
            
            // Add carbs
            if (templateMeal.components && templateMeal.components.carbs) {
              const carb = templateMeal.components.carbs;
              meal.foods.push({
                name: carb.name,
                amount: carb.amount,
                calories: carb.calories,
                protein: carb.protein,
                carbs: carb.carbs,
                fiber: carb.fiber || 0,
                fats: carb.fats || 0,
                checked: false
              });
            }
            
            // Add vegetables
            if (templateMeal.components.vegetables && templateMeal.components.vegetables.length > 0) {
              templateMeal.components.vegetables.forEach(veg => {
                meal.foods.push({
                  name: veg.name,
                  amount: veg.amount,
                  calories: veg.calories,
                  protein: veg.protein,
                  carbs: veg.carbs,
                  fiber: veg.fiber || 0,
                  fats: veg.fats,
                  checked: false
                });
              });
            }
            
            // Add fats
            if (templateMeal.components && templateMeal.components.fats) {
              const fat = templateMeal.components.fats;
              meal.foods.push({
                name: fat.name,
                amount: fat.amount,
                calories: fat.calories,
                protein: fat.protein,
                carbs: fat.carbs,
                fiber: fat.fiber || 0,
                fats: fat.fats || 0,
                checked: false
              });
            }
            
            // Add extras
            if (templateMeal.components.extras && templateMeal.components.extras.length > 0) {
              templateMeal.components.extras.forEach(extra => {
                meal.foods.push({
                  name: extra.name,
                  amount: extra.amount,
                  calories: extra.calories,
                  protein: extra.protein,
                  carbs: extra.carbs,
                  fiber: extra.fiber || 0,
                  fats: extra.fats,
                  checked: false
                });
              });
            }
          }
          
          // Update meal totals
          this.updateMealTotals(meal);
          
          // Store template ID for tracking
          meal.templateId = templateMeal.templateId;
          
          console.log(`📊 Converted meal has ${meal.foods.length} foods`);
          if (meal.foods.length > 0) {
            console.log(`   First food: ${meal.foods[0].name}`);
          }
          
          return; // Successfully used template
        }
      }
    } catch (error) {
      console.error(`Template generation failed for ${mealType}:`, error);
    }
    
    // Fallback to original logic
    console.log(`⚠️ Falling back to random generation for ${mealType}`);
    
    const usedCategories = new Set();
    const usedProteins = new Set();
    
    // Add protein source first
    this.addProteinToMeal(meal, mealType, targetProtein, usedProteins);
    
    // Add carb source
    this.addCarbToMeal(meal, mealType, targetCarbs, usedCategories);
    
    // Add fat source (CRITICAL - was missing!)
    this.addFatToMeal(meal, mealType, targetFat, usedCategories);
    
    // Add vegetables
    this.addVegetablesToMeal(meal, mealType, usedCategories);
    
    // Fine-tune portions to hit targets
    this.adjustMealPortions(meal, targetCalories, targetProtein, targetCarbs, targetFat);
  }

  addProteinToMeal(meal, mealType, targetProtein, usedProteins) {
    const proteinSources = this.foodDatabase.getProteinSources(15);
    console.log(`🥩 Adding protein to ${mealType}: Found ${proteinSources.length} protein sources`);
    
    // Filter based on meal type preferences
    let preferredProteins = proteinSources;
    if (mealType === 'breakfast') {
      // First try to find breakfast-specific proteins
      const breakfastProteins = proteinSources.filter(food => 
        food.name.toLowerCase().includes('egg') || 
        food.name.toLowerCase().includes('yogurt') ||
        food.name.toLowerCase().includes('cottage') ||
        food.name.toLowerCase().includes('greek yogurt') ||
        food.name.toLowerCase().includes('protein powder') ||
        food.name.toLowerCase().includes('whey')
      );
      
      // If we found breakfast proteins, use them, otherwise use all proteins
      preferredProteins = breakfastProteins.length > 0 ? breakfastProteins : proteinSources;
      console.log(`🥞 Breakfast proteins: ${preferredProteins.length} options (${breakfastProteins.length} breakfast-specific)`);
    }
    
    // Remove already used proteins that don't allow multiples
    const availableProteins = preferredProteins.filter(food => {
      if (!this.foodDatabase.canHaveMultiple(food.name)) {
        return !usedProteins.has(food.name);
      }
      return true;
    });
    
    if (availableProteins.length > 0) {
      const selectedProtein = availableProteins[Math.floor(Math.random() * availableProteins.length)];
      const amount = Math.min(150, Math.max(80, (targetProtein / selectedProtein.protein) * 100));
      
      meal.foods.push({
        name: selectedProtein.name,
        amount: `${Math.round(amount)}g`,
        calories: Math.round((amount / 100) * selectedProtein.calories),
        protein: Math.round((amount / 100) * selectedProtein.protein * 10) / 10,
        carbs: Math.round((amount / 100) * selectedProtein.carbs * 10) / 10,
        fiber: 0,
        fats: Math.round((amount / 100) * selectedProtein.fat * 10) / 10,
        checked: false
      });
      
      usedProteins.add(selectedProtein.name);
      this.updateMealTotals(meal);
    }
  }

  addCarbToMeal(meal, mealType, targetCarbs, usedCategories) {
    const carbSources = this.foodDatabase.getCarbSources(20);
    
    // Filter based on meal type preferences
    let preferredCarbs = carbSources;
    if (mealType === 'breakfast') {
      preferredCarbs = carbSources.filter(food => 
        food.name.toLowerCase().includes('oat') || 
        food.name.toLowerCase().includes('bread') ||
        food.name.toLowerCase().includes('wrap')
      );
    }
    
    if (preferredCarbs.length > 0) {
      const selectedCarb = preferredCarbs[Math.floor(Math.random() * preferredCarbs.length)];
      const amount = Math.min(200, Math.max(50, (targetCarbs / selectedCarb.carbs) * 100));
      
      meal.foods.push({
        name: selectedCarb.name,
        amount: `${Math.round(amount)}g`,
        calories: Math.round((amount / 100) * selectedCarb.calories),
        protein: Math.round((amount / 100) * selectedCarb.protein * 10) / 10,
        carbs: Math.round((amount / 100) * selectedCarb.carbs * 10) / 10,
        fiber: Math.round((amount / 100) * (selectedCarb.carbs * 0.1) * 10) / 10, // Estimate fiber
        fats: Math.round((amount / 100) * selectedCarb.fat * 10) / 10,
        checked: false
      });
      
      usedCategories.add('carb');
      this.updateMealTotals(meal);
    }
  }

  addFatToMeal(meal, mealType, targetFat, usedCategories) {
    const fatSources = this.foodDatabase.getFatSources(8);
    
    // Filter based on meal type preferences
    let preferredFats = fatSources;
    if (mealType === 'breakfast') {
      preferredFats = fatSources.filter(food => 
        food.name.toLowerCase().includes('butter') || 
        food.name.toLowerCase().includes('avocado') ||
        food.name.toLowerCase().includes('almond')
      );
    }
    
    if (preferredFats.length > 0) {
      const selectedFat = preferredFats[Math.floor(Math.random() * preferredFats.length)];
      const amount = Math.min(50, Math.max(10, (targetFat / selectedFat.fat) * 100));
      
      meal.foods.push({
        name: selectedFat.name,
        amount: `${Math.round(amount)}g`,
        calories: Math.round((amount / 100) * selectedFat.calories),
        protein: Math.round((amount / 100) * selectedFat.protein * 10) / 10,
        carbs: Math.round((amount / 100) * selectedFat.carbs * 10) / 10,
        fiber: 0,
        fats: Math.round((amount / 100) * selectedFat.fat * 10) / 10,
        checked: false
      });
      
      usedCategories.add('fat');
      this.updateMealTotals(meal);
    }
  }

  addVegetablesToMeal(meal, mealType, usedCategories) {
    const vegetables = this.foodDatabase.getVegetables();
    
    if (vegetables.length > 0 && !usedCategories.has('veggie')) {
      const selectedVeggie = vegetables[Math.floor(Math.random() * vegetables.length)];
      const amount = Math.min(100, Math.max(30, 50)); // 30-100g of vegetables
      
      meal.foods.push({
        name: selectedVeggie.name,
        amount: `${Math.round(amount)}g`,
        calories: Math.round((amount / 100) * selectedVeggie.calories),
        protein: Math.round((amount / 100) * selectedVeggie.protein * 10) / 10,
        carbs: Math.round((amount / 100) * selectedVeggie.carbs * 10) / 10,
        fiber: Math.round((amount / 100) * (selectedVeggie.carbs * 0.3) * 10) / 10, // Estimate fiber
        fats: Math.round((amount / 100) * selectedVeggie.fat * 10) / 10,
        checked: false
      });
      
      usedCategories.add('veggie');
      this.updateMealTotals(meal);
    }
  }

  adjustMealPortions(meal, targetCalories, targetProtein, targetCarbs, targetFat) {
    // Simple portion adjustment to get closer to targets
    const currentCalories = meal.calories;
    const adjustmentFactor = targetCalories / currentCalories;
    
    meal.foods.forEach(food => {
      const currentAmount = parseFloat(food.amount);
      const newAmount = Math.round(currentAmount * adjustmentFactor);
      food.amount = `${newAmount}g`;
      
      // Recalculate macros based on new amount
      const foodData = this.foodDatabase.findFood(food.name);
      if (foodData) {
        const ratio = newAmount / 100;
        food.calories = Math.round(foodData.calories * ratio);
        food.protein = Math.round(foodData.protein * ratio * 10) / 10;
        food.carbs = Math.round(foodData.carbs * ratio * 10) / 10;
        food.fats = Math.round(foodData.fat * ratio * 10) / 10;
      }
    });
    
    this.updateMealTotals(meal);
  }

  updateMealTotals(meal) {
    meal.calories = meal.foods.reduce((sum, food) => sum + food.calories, 0);
    meal.protein = Math.round(meal.foods.reduce((sum, food) => sum + food.protein, 0) * 10) / 10;
    meal.carbs = Math.round(meal.foods.reduce((sum, food) => sum + food.carbs, 0) * 10) / 10;
    meal.fiber = Math.round(meal.foods.reduce((sum, food) => sum + food.fiber, 0) * 10) / 10;
    meal.fats = Math.round(meal.foods.reduce((sum, food) => sum + food.fats, 0) * 10) / 10;
  }
  
  getMealType(mealName) {
    const name = mealName.toLowerCase();
    if (name.includes('breakfast')) return 'breakfast';
    if (name.includes('lunch')) return 'lunch';
    if (name.includes('afternoon') || name.includes('snack')) return 'afternoon';
    if (name.includes('dinner')) return 'dinner';
    return 'lunch'; // Default fallback
  }
  
  applyDiversityScoring(foods, category) {
    // Track usage and penalize overused foods
    if (!this.diversityTracker[category]) {
      this.diversityTracker[category] = {};
    }
    
    // Sort by usage (least used first)
    return foods.sort((a, b) => {
      const usageA = this.diversityTracker[category][a.name] || 0;
      const usageB = this.diversityTracker[category][b.name] || 0;
      return usageA - usageB;
    });
  }
  
  trackFoodUsage(foodName, category) {
    if (!this.diversityTracker[category]) {
      this.diversityTracker[category] = {};
    }
    this.diversityTracker[category][foodName] = (this.diversityTracker[category][foodName] || 0) + 1;
  }
  
  getProteinKey(proteinName) {
    const name = proteinName.toLowerCase();
    if (name.includes('chicken')) return 'chicken';
    if (name.includes('beef') || name.includes('steak')) return 'beef';
    if (name.includes('salmon')) return 'salmon';
    if (name.includes('turkey')) return 'turkey';
    if (name.includes('tuna')) return 'tuna';
    if (name.includes('egg')) return 'egg';
    if (name.includes('lamb')) return 'lamb';
    if (name.includes('pork')) return 'pork';
    return null;
  }

  getMealDistributions(mealCount) {
    if (mealCount === 3) return [0.35, 0.35, 0.30];
    if (mealCount === 4) return [0.28, 0.24, 0.24, 0.24];
    if (mealCount === 5) return [0.25, 0.20, 0.20, 0.20, 0.15];
    if (mealCount === 6) return [0.20, 0.18, 0.18, 0.16, 0.16, 0.12];
    return Array(mealCount).fill(1 / mealCount);
  }

  getMealName(index, totalMeals) {
    if (totalMeals === 3) {
      return ['Breakfast', 'Lunch', 'Dinner'][index];
    } else if (totalMeals === 4) {
      return ['Breakfast', 'Lunch', 'Afternoon', 'Dinner'][index];
    } else if (totalMeals === 5) {
      return ['Breakfast', 'Mid-Morning', 'Lunch', 'Afternoon', 'Dinner'][index];
    } else if (totalMeals === 6) {
      return ['Breakfast', 'Mid-Morning', 'Lunch', 'Afternoon', 'Dinner', 'Evening'][index];
    }
    return `Meal ${index + 1}`;
  }

  buildPrecisionMeal(meal, targets, userData, mealType = 'lunch') {
    // PROTEIN - Precise portions with meal-type preferences
    const proteinFood = this.selectPrecisionProtein(targets.protein, userData.favProteins || [], mealType);
    if (proteinFood) {
      meal.components.push(proteinFood);
      this.updateTotals(meal.totals, proteinFood);
    }
    
    // CARBS - Controlled portions with food pairing logic
    const remainingCarbs = targets.carbs;
    const carbFood = this.selectPrecisionCarb(remainingCarbs, targets.fiber, userData.favCarbs || [], mealType, proteinFood);
    if (carbFood) {
      meal.components.push(carbFood);
      this.updateTotals(meal.totals, carbFood);
    }
    
    // VEGETABLES - Moderate for fiber control
    const vegAmount = 100; // Fixed 100g to control fiber
    const vegetables = this.selectControlledVegetables(vegAmount);
    vegetables.forEach(veg => {
      meal.components.push(veg);
      this.updateTotals(meal.totals, veg);
    });
    
    // FATS - Fill remaining calories EXACTLY
    const currentCalories = meal.totals.calories;
    const remainingCalories = targets.calories - currentCalories;
    
    if (remainingCalories > 20) {
      const fatGrams = remainingCalories / 9; // Exact calculation
      const fatFood = this.selectPrecisionFat(fatGrams, userData.favFats || []);
      if (fatFood) {
        meal.components.push(fatFood);
        this.updateTotals(meal.totals, fatFood);
      }
    }
  }

  selectPrecisionProtein(targetGrams, userPreferences = [], mealType = 'lunch') {
    // Get proteins from database, prioritizing user preferences
    let proteins = foodDatabase.getProteinSources(userPreferences);
    
    if (proteins.length === 0) {
      console.error('No proteins found in database!');
      return this.getFallbackProtein(targetGrams);
    }
    
    // Apply meal-type preferences
    const mealRules = this.mealTypeRules[mealType];
    if (mealRules && mealRules.preferredProteins.length > 0) {
      const mealPreferred = proteins.filter(p => 
        mealRules.preferredProteins.some(pref => 
          p.name.toLowerCase().includes(pref.toLowerCase())
        )
      );
      if (mealPreferred.length > 0) {
        proteins = mealPreferred;
      }
    }
    
    // Apply diversity scoring - penalize recently used proteins
    proteins = this.applyDiversityScoring(proteins, 'protein');
    
    // Select protein (prefer user preferences, then variety)
    const selected = proteins[Math.floor(Math.random() * Math.min(3, proteins.length))];
    const scale = targetGrams / selected.protein;
    const amount = Math.round(selected.amount * scale);
    
    // Check if it needs raw/cooked weight based on database state
    const needsRawCooked = selected.state === 'cooked' || selected.state === 'raw';
    
    let formattedAmount;
    if (selected.displayUnit) {
      // Use display units (slice, egg, piece, etc.)
      const pieces = Math.round(scale);
      formattedAmount = pieces === 1 ? `1 ${selected.displayUnit}` : `${pieces} ${selected.displayUnit}s`;
    } else if (needsRawCooked) {
      formattedAmount = `${amount}g raw (${Math.round(amount * 0.75)}g cooked)`;
    } else {
      formattedAmount = `${amount}g`;
    }
    
    // Clean the name - remove (raw) or (cooked) suffixes
    const cleanName = selected.name.replace(/\s*\(raw\)/gi, '').replace(/\s*\(cooked\)/gi, '').trim();
    
    // Track usage for diversity
    this.trackFoodUsage(cleanName, 'protein');
    
    return {
      name: cleanName,
      amount: formattedAmount,
      calories: Math.round(selected.calories * scale),
      protein: Math.round(selected.protein * scale),
      carbs: Math.round(selected.carbs * scale),
      fats: Math.round(selected.fats * scale * 10) / 10,
      fiber: Math.round(selected.fiber * scale)
    };
  }

  selectPrecisionCarb(targetCarbs, targetFiber, userPreferences = [], mealType = 'lunch', proteinFood = null) {
    // Get carbs from database, prioritizing user preferences
    let carbs = foodDatabase.getCarbSources(userPreferences);
    
    // Apply food pairing logic if we have a protein
    if (proteinFood && this.foodPairings) {
      const proteinKey = this.getProteinKey(proteinFood.name);
      if (proteinKey && this.foodPairings[proteinKey]) {
        const pairedCarbs = carbs.filter(c => 
          this.foodPairings[proteinKey].some(pairing => 
            c.name.toLowerCase().includes(pairing.toLowerCase())
          )
        );
        if (pairedCarbs.length > 0) {
          carbs = pairedCarbs;
          console.log(`   🍽️  Paired ${proteinFood.name} with compatible carbs`);
        }
      }
    }
    
    // Apply meal-type preferences
    const mealRules = this.mealTypeRules[mealType];
    if (mealRules && mealRules.preferredCarbs.length > 0) {
      const mealPreferred = carbs.filter(c => 
        mealRules.preferredCarbs.some(pref => 
          c.name.toLowerCase().includes(pref.toLowerCase())
        )
      );
      if (mealPreferred.length > 0) {
        carbs = mealPreferred;
      }
    }
    
    // Apply diversity scoring
    carbs = this.applyDiversityScoring(carbs, 'carb');
    
    if (carbs.length === 0) {
      console.error('No carbs found in database!');
      return this.getFallbackCarb(targetCarbs);
    }
    
    // Select based on fiber needs and preferences
    let selected;
    if (targetFiber < 2) {
      // Prefer lower fiber options
      const lowFiberCarbs = carbs.filter(c => c.fiber < 2);
      selected = lowFiberCarbs.length > 0 ? 
        lowFiberCarbs[Math.floor(Math.random() * Math.min(3, lowFiberCarbs.length))] :
        carbs[0];
    } else {
      selected = carbs[Math.floor(Math.random() * Math.min(3, carbs.length))];
    }
    
    const scale = targetCarbs / selected.carbs;
    const amount = Math.round(selected.amount * scale);
    
    // Check if it needs dry/cooked weight based on database state
    const foodNameLower = selected.name.toLowerCase();
    const needsDryCooked = selected.state === 'cooked' && 
                          (foodNameLower.includes('rice') || 
                           foodNameLower.includes('oats') ||
                           foodNameLower.includes('quinoa') ||
                           foodNameLower.includes('pasta'));
    
    const needsRawCooked = selected.state === 'cooked' && 
                          (selected.name.toLowerCase().includes('potato') ||
                           selected.name.toLowerCase().includes('sweet potato'));
    
    let formattedAmount;
    if (selected.displayUnit) {
      // Use display units (slice, wrap, piece, etc.)
      const pieces = Math.round(scale);
      formattedAmount = pieces === 1 ? `1 ${selected.displayUnit}` : `${pieces} ${selected.displayUnit}s`;
    } else if (needsDryCooked) {
      formattedAmount = `${amount}g dry (${Math.round(amount * 2.5)}g cooked)`;
    } else if (needsRawCooked) {
      formattedAmount = `${amount}g raw (${Math.round(amount * 1.2)}g cooked)`;
    } else {
      formattedAmount = `${amount}g`;
    }
    
    // Clean the name - remove (dry) or (cooked) suffixes
    const cleanName = selected.name.replace(/\s*\(dry\)/gi, '').replace(/\s*\(cooked\)/gi, '').trim();
    
    // Track usage for diversity
    this.trackFoodUsage(cleanName, 'carb');
    
    return {
      name: cleanName,
      amount: formattedAmount,
      calories: Math.round(selected.calories * scale),
      protein: Math.round(selected.protein * scale),
      carbs: Math.round(selected.carbs * scale),
      fats: Math.round(selected.fats * scale * 10) / 10,
      fiber: Math.round(selected.fiber * scale * 10) / 10
    };
  }

  selectControlledVegetables(totalGrams) {
    // Get vegetables from database
    const vegetables = foodDatabase.getVegetables();
    
    if (vegetables.length === 0) {
      return this.getFallbackVegetables();
    }
    
    // Select 2-3 different vegetables for variety
    const selectedVegs = [];
    const numVegs = Math.min(3, vegetables.length);
    
    for (let i = 0; i < numVegs; i++) {
      const veg = vegetables[Math.floor(Math.random() * vegetables.length)];
      if (!selectedVegs.find(v => v.name === veg.name)) {
        selectedVegs.push({
          ...veg,
          amount: `${Math.round(totalGrams / numVegs)}g`
        });
      }
    }
    
    return selectedVegs;
  }

  selectPrecisionFat(targetGrams, userPreferences = []) {
    // Get fats from database, prioritizing user preferences
    const fats = foodDatabase.getFatSources(userPreferences);
    
    if (fats.length === 0) {
      return this.getFallbackFat(targetGrams);
    }
    
    // Select fat source
    const selected = fats[Math.floor(Math.random() * Math.min(3, fats.length))];
    const scale = targetGrams / selected.fats;
    const amount = Math.round(selected.amount * scale);
    
    return {
      name: selected.name,
      amount: `${amount}g`,
      calories: Math.round(selected.calories * scale),
      protein: Math.round(selected.protein * scale),
      carbs: Math.round(selected.carbs * scale),
      fats: Math.round(selected.fats * scale * 10) / 10,
      fiber: Math.round(selected.fiber * scale)
    };
  }

  calculateTotals(meals) {
    return meals.reduce((totals, meal) => {
      meal.components.forEach(food => {
        totals.calories += food.calories || 0;
        totals.protein += food.protein || 0;
        totals.carbs += food.carbs || 0;
        totals.fiber += food.fiber || 0;
        totals.fats += food.fats || 0;
      });
      return totals;
    }, { calories: 0, protein: 0, carbs: 0, fiber: 0, fats: 0 });
  }

  validateTargets(totals, targets) {
    const calorieDiff = Math.abs(totals.calories - targets.calories);
    const proteinMet = totals.protein >= targets.hierarchical.protein_minimum;
    const carbsInRange = totals.carbs >= targets.hierarchical.carb_range.min && 
                         totals.carbs <= targets.hierarchical.carb_range.max;
    const fiberInRange = totals.fiber >= targets.hierarchical.fiber_range.min && 
                         totals.fiber <= targets.hierarchical.fiber_range.max;
    
    // For very close calorie targets, be more lenient with carbs/fiber
    const isVeryClose = calorieDiff <= 50;
    const carbsCloseEnough = isVeryClose ? totals.carbs >= targets.hierarchical.carb_range.min * 0.95 : carbsInRange;
    const fiberCloseEnough = isVeryClose ? totals.fiber >= targets.hierarchical.fiber_range.min * 0.95 : fiberInRange;
    
    return {
      allMet: calorieDiff <= this.CALORIE_TOLERANCE && proteinMet && carbsInRange && fiberInRange,
      calorieDiff,
      proteinMet,
      carbsInRange,
      fiberInRange,
      carbsCloseEnough,
      fiberCloseEnough,
      details: {
        calories: totals.calories,
        protein: totals.protein,
        carbs: totals.carbs,
        fiber: totals.fiber,
        fats: totals.fats
      }
    };
  }

  adjustForPrecision(meals, targets, adjustmentFactor = 1.0) {
    const mealTotals = this.calculateMealTotals(meals);
    const calorieDiff = Math.abs(mealTotals.calories - targets.calories);
    
    if (calorieDiff <= 25) {
      return true; // Close enough
    }
    
    if (mealTotals.calories > targets.calories) {
      this.reduceCalories(meals, calorieDiff * adjustmentFactor);
    } else {
      this.addCalories(meals, calorieDiff * adjustmentFactor);
    }
    
    return false;
  }

  reduceCalories(meals, targetReduction) {
    // Prioritize reducing fats first, then carbs
    let reduced = 0;
    
    // Try reducing fats first
    for (const meal of meals) {
      const fatFoods = meal.foods.filter(food => 
        this.foodDatabase.getCategory(food.name) === 'fat'
      );
      
      for (const food of fatFoods) {
        if (reduced >= targetReduction) break;
        
        const currentAmount = parseFloat(food.amount);
        const reduction = Math.min(10, currentAmount * 0.1); // Reduce by 10% or 10g
        const newAmount = Math.max(5, currentAmount - reduction);
        
        this.updateFoodAmount(food, newAmount);
        reduced += (currentAmount - newAmount) * (food.calories / currentAmount) / 100;
      }
    }
    
    // If still need to reduce, target carbs
    if (reduced < targetReduction) {
      for (const meal of meals) {
        const carbFoods = meal.foods.filter(food => 
          this.foodDatabase.getCategory(food.name) === 'carb'
        );
        
        for (const food of carbFoods) {
          if (reduced >= targetReduction) break;
          
          const currentAmount = parseFloat(food.amount);
          const reduction = Math.min(15, currentAmount * 0.15); // Reduce by 15% or 15g
          const newAmount = Math.max(20, currentAmount - reduction);
          
          this.updateFoodAmount(food, newAmount);
          reduced += (currentAmount - newAmount) * (food.calories / currentAmount) / 100;
        }
      }
    }
  }

  addCalories(meals, targetAddition) {
    // Prioritize adding fats first, then carbs
    let added = 0;
    
    // Try adding fats first
    for (const meal of meals) {
      const fatFoods = meal.foods.filter(food => 
        this.foodDatabase.getCategory(food.name) === 'fat'
      );
      
      for (const food of fatFoods) {
        if (added >= targetAddition) break;
        
        const currentAmount = parseFloat(food.amount);
        const addition = Math.min(15, currentAmount * 0.2); // Add 20% or 15g
        const newAmount = currentAmount + addition;
        
        this.updateFoodAmount(food, newAmount);
        added += addition * (food.calories / currentAmount) / 100;
      }
    }
    
    // If still need to add, target carbs
    if (added < targetAddition) {
      for (const meal of meals) {
        const carbFoods = meal.foods.filter(food => 
          this.foodDatabase.getCategory(food.name) === 'carb'
        );
        
        for (const food of carbFoods) {
          if (added >= targetAddition) break;
          
          const currentAmount = parseFloat(food.amount);
          const addition = Math.min(25, currentAmount * 0.25); // Add 25% or 25g
          const newAmount = currentAmount + addition;
          
          this.updateFoodAmount(food, newAmount);
          added += addition * (food.calories / currentAmount) / 100;
        }
      }
    }
  }

  updateFoodAmount(food, newAmount) {
    const foodData = this.foodDatabase.findFood(food.name);
    if (foodData) {
      food.amount = `${Math.round(newAmount)}g`;
      const ratio = newAmount / 100;
      
      food.calories = Math.round(foodData.calories * ratio);
      food.protein = Math.round(foodData.protein * ratio * 10) / 10;
      food.carbs = Math.round(foodData.carbs * ratio * 10) / 10;
      food.fats = Math.round(foodData.fat * ratio * 10) / 10;
      
      // Estimate fiber
      if (this.foodDatabase.getCategory(food.name) === 'veggie') {
        food.fiber = Math.round(foodData.carbs * ratio * 0.3 * 10) / 10;
      } else if (this.foodDatabase.getCategory(food.name) === 'carb') {
        food.fiber = Math.round(foodData.carbs * ratio * 0.1 * 10) / 10;
      } else {
        food.fiber = 0;
      }
    }
  }

  calculateMealTotals(meals) {
    const totals = { calories: 0, protein: 0, carbs: 0, fiber: 0, fats: 0 };
    
    meals.forEach(meal => {
      totals.calories += meal.calories || 0;
      totals.protein += meal.protein || 0;
      totals.carbs += meal.carbs || 0;
      totals.fiber += meal.fiber || 0;
      totals.fats += meal.fats || 0;
    });
    
    return totals;
  }

  validateTargets(totals, targets) {
    const calorieDiff = Math.abs(totals.calories - targets.calories);
    const proteinMet = totals.protein >= targets.protein;
    const carbsInRange = totals.carbs >= targets.hierarchical.carb_range.min && 
                        totals.carbs <= targets.hierarchical.carb_range.max;
    const fiberInRange = totals.fiber >= targets.hierarchical.fiber_range.min && 
                        totals.fiber <= targets.hierarchical.fiber_range.max;
    
    // Check if we're close enough (within 50 calories)
    if (calorieDiff <= 50) {
      const carbsCloseEnough = totals.carbs >= targets.hierarchical.carb_range.min * 0.95;
      const fiberCloseEnough = totals.fiber >= targets.hierarchical.fiber_range.min * 0.95;
      
      if (proteinMet && carbsCloseEnough && fiberCloseEnough) {
        console.log(`✅ CLOSE ENOUGH: ${calorieDiff} calories off (within 50 cal tolerance)`);
        console.log(`   🔍 Debug: Carbs ${totals.carbs}g (close enough: ${carbsCloseEnough}), Fiber ${totals.fiber}g (close enough: ${fiberCloseEnough})`);
        return true;
      }
    }
    
    console.log(`   🔍 Validation: Calorie diff: ${calorieDiff} (tolerance: 25)`);
    console.log(`   🔍 Validation: Protein: ${proteinMet}, Carbs: ${carbsInRange}, Fiber: ${fiberInRange}`);
    
    return calorieDiff <= 25 && proteinMet && carbsInRange && fiberInRange;
  }

  updateTotals(totals, food) {
    totals.calories += food.calories || 0;
    totals.protein += food.protein || 0;
    totals.carbs += food.carbs || 0;
    totals.fiber += food.fiber || 0;
    totals.fats += food.fats || 0;
  }

  addCarbs(meals, deficit) {
    const carbBoost = {
      name: "White Rice (extra)",
      amount: `${Math.round(deficit / 28 * 33)}g dry`,
      calories: Math.round(deficit * 4.2),
      protein: Math.round(deficit * 0.11),
      carbs: deficit,
      fats: Math.round(deficit * 0.01 * 10) / 10,
      fiber: Math.round(deficit * 0.014 * 10) / 10
    };
    
    meals[1].components.push(carbBoost);
  }

  addFiber(meals, deficit) {
    const fiberBoost = {
      name: "Mixed Vegetables",
      amount: `${Math.round(deficit / 2.5 * 100)}g`,
      calories: Math.round(deficit * 12),
      protein: Math.round(deficit * 1),
      carbs: Math.round(deficit * 2),
      fats: 0.2,
      fiber: deficit
    };
    
    meals[2].components.push(fiberBoost);
  }

  addProtein(meals, deficit) {
    const proteinBoost = {
      name: "Whey Protein",
      amount: `${Math.round(deficit / 25 * 30)}g`,
      calories: Math.round(deficit * 4),
      protein: deficit,
      carbs: 2,
      fats: 0.5,
      fiber: 0
    };
    
    meals[meals.length - 1].components.push(proteinBoost);
  }

  // Fallback methods when database foods aren't available
  getFallbackProtein(targetGrams) {
    const chicken = { name: "Chicken Breast", protein: 31, carbs: 0, fats: 3.6, fiber: 0, calories: 165, amount: 100 };
    const scale = targetGrams / chicken.protein;
    const amount = Math.round(chicken.amount * scale);
    
    return {
      name: chicken.name,
      amount: `${amount}g`,
      calories: Math.round(chicken.calories * scale),
      protein: Math.round(chicken.protein * scale),
      carbs: Math.round(chicken.carbs * scale),
      fats: Math.round(chicken.fats * scale * 10) / 10,
      fiber: 0
    };
  }

  getFallbackCarb(targetCarbs) {
    const rice = { name: "White Rice", carbs: 28, protein: 2.7, fats: 0.3, fiber: 0.4, calories: 130, amount: 100 };
    const scale = targetCarbs / rice.carbs;
    const amount = Math.round(rice.amount * scale);
    
    return {
      name: rice.name,
      amount: `${amount}g`,
      calories: Math.round(rice.calories * scale),
      protein: Math.round(rice.protein * scale),
      carbs: Math.round(rice.carbs * scale),
      fats: Math.round(rice.fats * scale * 10) / 10,
      fiber: Math.round(rice.fiber * scale * 10) / 10
    };
  }

  getFallbackFat(targetGrams) {
    const oil = { name: "Olive Oil", fats: 14, protein: 0, carbs: 0, fiber: 0, calories: 126, amount: 15 };
    const scale = targetGrams / oil.fats;
    const amount = Math.round(oil.amount * scale);
    
    return {
      name: oil.name,
      amount: `${amount}ml`,
      calories: Math.round(oil.calories * scale),
      protein: 0,
      carbs: 0,
      fats: Math.round(oil.fats * scale * 10) / 10,
      fiber: 0
    };
  }

  getFallbackVegetables() {
    return [
      { name: "Broccoli", calories: 34, protein: 2.8, carbs: 7, fats: 0.4, fiber: 2.6, amount: "50g" },
      { name: "Spinach", calories: 23, protein: 2.9, carbs: 3.6, fats: 0.4, fiber: 2.2, amount: "50g" }
    ];
  }

  cleanupAdjustmentFoods(meals) {
    console.log('🧹 Cleaned up adjustment foods');
    
    meals.forEach(meal => {
      // Remove foods with very low calories (likely adjustment foods)
      meal.foods = meal.foods.filter(food => food.calories >= 10);
      
      // Remove duplicate food names (keep first occurrence)
      const seenNames = new Set();
      meal.foods = meal.foods.filter(food => {
        if (seenNames.has(food.name)) {
          return false;
        }
        seenNames.add(food.name);
        return true;
      });
      
      // Limit to maximum 6 foods per meal for readability
      if (meal.foods.length > 6) {
        meal.foods = meal.foods.slice(0, 6);
      }
      
      // Recalculate meal totals
      this.updateMealTotals(meal);
    });
  }

  shouldIncludePostWorkout(userData, dayType = 'training') {
    // Only include on training days AND if user is open to protein powder
    const proteinPowderResponse = userData.proteinPowder || '';
    const isTrainingDay = dayType === 'training';
    const wantsProteinPowder = proteinPowderResponse.includes('Yes, I already use protein powder regularly') ||
                               proteinPowderResponse.includes('Yes, I\'m open to using protein powder');
    
    return isTrainingDay && wantsProteinPowder;
  }

  shouldIncludeCoffee(userData) {
    return userData.drinksCoffee === "Yes" && userData.numberOfCoffees > 0;
  }

  shouldIncludeEnergyDrinks(userData) {
    return userData.otherCaffeine && 
      (userData.otherCaffeine.includes("Energy Drinks") || userData.otherCaffeine === "Yes") &&
      userData.energyDrinksPerDay > 0;
  }

  generateCoffeeNutrition(userData) {
    if (!this.shouldIncludeCoffee(userData)) {
      return null;
    }

    console.log('☕ Generating coffee nutrition...');
    console.log(`   User coffee preferences: drinksCoffee=${userData.drinksCoffee}, numberOfCoffees=${userData.numberOfCoffees}`);
    
    const numberOfCoffees = parseInt(userData.numberOfCoffees) || 1;
    let coffeeType = "Black Coffee";
    
    // Determine coffee type based on user preferences
    if (userData.blackCoffeeSwitch === "Yes") {
      coffeeType = "Black Coffee";
    } else if (userData.coffeeMilkSugar) {
      const coffeePref = userData.coffeeMilkSugar.toLowerCase();
      if (coffeePref.includes('milk') && coffeePref.includes('sugar')) {
        coffeeType = "Coffee with Milk and Sugar";
      } else if (coffeePref.includes('milk')) {
        coffeeType = "Coffee with Milk";
      } else if (coffeePref.includes('sugar')) {
        coffeeType = "Coffee with Sugar";
      } else {
        coffeeType = "Coffee with Milk";
      }
    } else {
      coffeeType = "Coffee with Milk";
    }

    // Get coffee nutritional data
    console.log(`   Looking for coffee type: "${coffeeType}"`);
    let coffeeData = this.foodDatabase.findFood(coffeeType);
    if (!coffeeData) {
      console.log(`⚠️ Coffee type "${coffeeType}" not found in database, using Black Coffee`);
      coffeeType = "Black Coffee";
      // Try to find Black Coffee as fallback
      coffeeData = this.foodDatabase.findFood("Black Coffee");
    }
    console.log(`   Found coffee data:`, coffeeData ? coffeeData.name : 'null');

    // Create a single coffee item with the total amount
    const coffeeItem = {
      name: coffeeType,
      amount: numberOfCoffees === 1 ? "1 cup" : `${numberOfCoffees} cups`,
      calories: coffeeData ? coffeeData.calories * numberOfCoffees : 2 * numberOfCoffees,
      protein: coffeeData ? coffeeData.protein * numberOfCoffees : 0,
      carbs: coffeeData ? coffeeData.carbs * numberOfCoffees : 0,
      fiber: 0,
      fats: coffeeData ? coffeeData.fat * numberOfCoffees : 0,
      type: "coffee",
      timing: "throughout day"
    };
    const coffeeItems = [coffeeItem];

    const totals = {
      calories: coffeeItems.reduce((sum, item) => sum + item.calories, 0),
      protein: coffeeItems.reduce((sum, item) => sum + item.protein, 0),
      carbs: coffeeItems.reduce((sum, item) => sum + item.carbs, 0),
      fiber: 0,
      fats: coffeeItems.reduce((sum, item) => sum + item.fats, 0)
    };

    console.log(`✅ Coffee nutrition: ${totals.calories} calories, ${totals.carbs}g carbs`);
    
    return {
      items: coffeeItems,
      totals,
      type: "coffee",
      numberOfCoffees,
      coffeeType
    };
  }

  generateEnergyDrinkNutrition(userData) {
    if (!this.shouldIncludeEnergyDrinks(userData)) {
      return null;
    }

    console.log('⚡ Generating energy drink nutrition...');
    
    const numberOfDrinks = parseInt(userData.energyDrinksPerDay) || 1;
    const energyDrinkType = "Energy Drink (Red Bull)"; // Default, could be made configurable

    // Get energy drink nutritional data
    const drinkData = this.foodDatabase.findFood(energyDrinkType);
    if (!drinkData) {
      console.log(`⚠️ Energy drink type "${energyDrinkType}" not found in database`);
      return null;
    }

    const drinkItems = [];
    for (let i = 0; i < numberOfDrinks; i++) {
      const drinkItem = {
        name: energyDrinkType,
        amount: "1 can",
        calories: drinkData.calories,
        protein: drinkData.protein,
        carbs: drinkData.carbs,
        fiber: 0,
        fats: drinkData.fat,
        type: "energy_drink",
        timing: i === 0 ? "pre_workout" : "throughout day"
      };
      drinkItems.push(drinkItem);
    }

    const totals = {
      calories: drinkItems.reduce((sum, item) => sum + item.calories, 0),
      protein: drinkItems.reduce((sum, item) => sum + item.protein, 0),
      carbs: drinkItems.reduce((sum, item) => sum + item.carbs, 0),
      fiber: 0,
      fats: drinkItems.reduce((sum, item) => sum + item.fats, 0)
    };

    console.log(`✅ Energy drink nutrition: ${totals.calories} calories, ${totals.carbs}g carbs`);
    
    return {
      items: drinkItems,
      totals,
      type: "energy_drink",
      numberOfDrinks,
      drinkType: energyDrinkType
    };
  }

  // NEW: Intelligent Snacks Generation
  shouldIncludeSnacks(userData) {
    // Include snacks if user wants them or if we need to distribute macros better
    return userData.snacks?.includes('Yes') || 
           userData.extraNotes?.toLowerCase().includes('snack') ||
           userData.customFood?.toLowerCase().includes('treat') ||
           userData.drinksSoftDrinkJuice?.includes('Yes');
  }

  generateSnacksNutrition(userData, targets, currentTotals) {
    console.log('🍪 Generating snacks nutrition...');
    
    if (!this.shouldIncludeSnacks(userData)) {
      return null;
    }

    const snackItems = [];
    let snackTotals = { calories: 0, protein: 0, carbs: 0, fiber: 0, fats: 0 };

    // 1. Diet soft drinks (if requested)
    if (userData.drinksSoftDrinkJuice?.includes('Yes')) {
      snackItems.push({
        name: 'Diet Soft Drink (Sugar Free)',
        amount: 'Any',
        calories: 0,
        protein: 0,
        carbs: 0,
        fiber: 0,
        fats: 0,
        isDietDrink: true,
        type: 'diet_drink',
        checked: false
      });
    }

    // 2. Psyllium husk for fiber gaps (only if >2g deficit)
    const fiberGap = targets.hierarchical.fiber_range.min - (currentTotals.fiber || 0);
    if (fiberGap > 2) {
      const tspNeeded = Math.ceil(fiberGap / 5);
      const psylliumItem = {
        name: 'Psyllium Husk',
        amount: `${tspNeeded} tsp`,
        calories: tspNeeded * 10,
        protein: 0,
        carbs: 0,
        fiber: tspNeeded * 5,
        fats: 0,
        type: 'fiber_supplement',
        checked: false
      };
      
      snackItems.push(psylliumItem);
      snackTotals.calories += psylliumItem.calories;
      snackTotals.fiber += psylliumItem.fiber;
    }

    // 3. Custom treats (if mentioned in user data)
    if (userData.customFood && (
        userData.customFood.toLowerCase().includes('treat') ||
        userData.customFood.toLowerCase().includes('dessert') ||
        userData.customFood.toLowerCase().includes('sweet')
    )) {
      // Add a moderate treat option
      const treatItem = {
        name: 'Custom Treat',
        amount: '1 serving',
        calories: 150,
        protein: 2,
        carbs: 25,
        fiber: 1,
        fats: 6,
        type: 'custom_treat',
        checked: false
      };
      
      snackItems.push(treatItem);
      snackTotals.calories += treatItem.calories;
      snackTotals.protein += treatItem.protein;
      snackTotals.carbs += treatItem.carbs;
      snackTotals.fiber += treatItem.fiber;
      snackTotals.fats += treatItem.fats;
    }

    if (snackItems.length === 0) {
      return null;
    }

    console.log(`✅ Snacks generated: ${snackItems.length} items`);

    return {
      name: 'Snacks & Drinks',
      items: snackItems,
      totals: snackTotals,
      calories: snackTotals.calories,
      protein: snackTotals.protein,
      carbs: snackTotals.carbs,
      fiber: snackTotals.fiber,
      fats: snackTotals.fats,
      timing: 'Throughout day',
      notes: this.generateSnackNotes(snackItems)
    };
  }

  generateSnackNotes(snackItems) {
    const notes = [];
    
    if (snackItems.some(item => item.name.includes('Psyllium'))) {
      notes.push('Mix psyllium husk in a full glass of water and drink immediately - helps keep you regular!');
    }
    
    if (snackItems.some(item => item.isDietDrink)) {
      notes.push("Having some soft drink here and there is fine - but make sure it's a diet (sugar free) option!");
    }
    
    if (snackItems.some(item => item.type === 'custom_treat')) {
      notes.push('Enjoy your treat in moderation as part of your balanced plan.');
    }
    
    return notes.join(' ');
  }

  generatePostWorkoutNutrition(userData, mealTargets, dayType) {
    console.log('🏋️ Generating post-workout nutrition...');
    
    // Create a deep copy to prevent mutation
    const targets = JSON.parse(JSON.stringify(mealTargets));
    
    // Try template-based generation first
    try {
      console.log('🎯 Attempting template-based generation for post-workout...');
      
      // Calculate macro targets for post-workout (typically 20% protein, 15% carbs)
      const postWorkoutTargets = {
        calories: Math.round(targets.calories * 0.15), // ~15% of daily calories
        protein: Math.round(targets.protein * 0.2),
        carbs: Math.round(targets.hierarchical.carb_range.min * 0.15),
        fat: 0 // Minimal fat post-workout
      };
      
      const templateMeal = templateService.getMealForUser(
        userData,
        'post_workout',
        dayType,
        postWorkoutTargets
      );
      
      if (templateMeal) {
        console.log(`✅ Using template for post-workout: ${templateMeal.name}`);
        
        // Convert template format to post-workout format
        const foods = [];
        
        // Collect all foods from template components
        if (templateMeal.components.protein) {
          foods.push({
            name: templateMeal.components.protein.name,
            amount: templateMeal.components.protein.amount,
            calories: templateMeal.components.protein.calories,
            protein: templateMeal.components.protein.protein,
            carbs: templateMeal.components.protein.carbs,
            fiber: templateMeal.components.protein.fiber || 0,
            fats: templateMeal.components.protein.fats,
            checked: false
          });
        }
        
        if (templateMeal.components.carbs) {
          foods.push({
            name: templateMeal.components.carbs.name,
            amount: templateMeal.components.carbs.amount,
            calories: templateMeal.components.carbs.calories,
            protein: templateMeal.components.carbs.protein,
            carbs: templateMeal.components.carbs.carbs,
            fiber: templateMeal.components.carbs.fiber || 0,
            fats: templateMeal.components.carbs.fats,
            checked: false
          });
        }
        
        // Add any extras (like dextrose)
        if (templateMeal.components.extras && templateMeal.components.extras.length > 0) {
          templateMeal.components.extras.forEach(extra => {
            foods.push({
              name: extra.name,
              amount: extra.amount,
              calories: extra.calories,
              protein: extra.protein,
              carbs: extra.carbs,
              fiber: extra.fiber || 0,
              fats: extra.fats,
              checked: false
            });
          });
        }
        
        // Calculate totals
        const totals = foods.reduce((acc, food) => ({
          calories: acc.calories + food.calories,
          protein: acc.protein + food.protein,
          carbs: acc.carbs + food.carbs,
          fiber: acc.fiber + food.fiber,
          fats: acc.fats + food.fats
        }), { calories: 0, protein: 0, carbs: 0, fiber: 0, fats: 0 });
        
        const postWorkout = {
          name: templateMeal.name || 'Post-Workout Nutrition',
          foods: foods,
          calories: Math.round(totals.calories),
          protein: Math.round(totals.protein * 10) / 10,
          carbs: Math.round(totals.carbs * 10) / 10,
          fiber: Math.round(totals.fiber * 10) / 10,
          fats: Math.round(totals.fats * 10) / 10,
          timing: 'Post-workout',
          notes: templateMeal.notes || 'Consume within 30 minutes after training',
          templateId: templateMeal.templateId
        };
        
        console.log(`✅ Template post-workout nutrition: ${postWorkout.calories} calories, ${postWorkout.protein}g protein, ${postWorkout.carbs}g carbs`);
        return postWorkout;
      }
    } catch (error) {
      console.error('Template generation failed for post-workout:', error);
    }
    
    // Fallback to original logic
    console.log('⚠️ Falling back to standard post-workout generation');
    
    // Determine protein powder type based on dietary preferences
    const isVegetarian = userData.dietaryStyle === 'Vegetarian' || userData.dietaryStyle === 'Vegan';
    const proteinType = isVegetarian ? 'Plant Protein Powder' : 'Whey Protein Isolate';
    
    // Get protein powder data
    const proteinOptions = this.foodDatabase.getProteinSources().filter(food =>
      food.name.includes('Protein') && 
      (isVegetarian ? food.name.includes('Plant') : food.name.includes('Whey'))
    );
    
    const selectedProtein = proteinOptions[0] || this.foodDatabase.findFood('Whey Protein Isolate');
    
    // Determine carb source based on supplement preferences
    const wantsAllSupplements = userData.additionalSupplements === 'Yes, I\'m interested in any & all recommendations';
    const carbType = wantsAllSupplements ? 'Dextrose' : 'Medium Banana';
    
    let selectedCarb;
    if (wantsAllSupplements) {
      selectedCarb = this.foodDatabase.findFood('Dextrose');
    } else {
      const carbOptions = this.foodDatabase.getCarbSources().filter(food =>
        food.name.includes('Banana') || food.name.includes('Berries') || food.name.includes('Orange Juice')
      );
      selectedCarb = carbOptions[0] || this.foodDatabase.findFood('Medium Banana');
    }
    
    // Calculate amounts based on targets
    const proteinAmount = Math.round((targets.protein * 0.2) / selectedProtein.protein * 100);
    const carbAmount = Math.round((targets.hierarchical.carb_range.min * 0.15) / selectedCarb.carbs * 100);
    
    const proteinComponent = {
      name: selectedProtein.name,
      amount: `${proteinAmount}g`,
      calories: Math.round((proteinAmount / 100) * selectedProtein.calories),
      protein: Math.round((proteinAmount / 100) * selectedProtein.protein * 10) / 10,
      carbs: Math.round((proteinAmount / 100) * selectedProtein.carbs * 10) / 10,
      fiber: 0,
      fats: Math.round((proteinAmount / 100) * selectedProtein.fat * 10) / 10,
      checked: false
    };
    
    const carbComponent = {
      name: selectedCarb.name,
      amount: `${carbAmount}g`,
      calories: Math.round((carbAmount / 100) * selectedCarb.calories),
      protein: Math.round((carbAmount / 100) * selectedCarb.protein * 10) / 10,
      carbs: Math.round((carbAmount / 100) * selectedCarb.carbs * 10) / 10,
      fiber: Math.round((carbAmount / 100) * (selectedCarb.carbs * 0.1) * 10) / 10,
      fats: Math.round((carbAmount / 100) * selectedCarb.fat * 10) / 10,
      checked: false
    };
    
    const postWorkout = {
      name: 'Post-Workout Nutrition',
      foods: [proteinComponent, carbComponent],
      calories: proteinComponent.calories + carbComponent.calories,
      protein: proteinComponent.protein + carbComponent.protein,
      carbs: proteinComponent.carbs + carbComponent.carbs,
      fiber: proteinComponent.fiber + carbComponent.fiber,
      fats: proteinComponent.fats + carbComponent.fats,
      timing: 'Post-workout',
      notes: 'Consume within 30 minutes after training'
    };
    
    console.log(`✅ Post-workout nutrition: ${postWorkout.calories} calories, ${postWorkout.protein}g protein, ${postWorkout.carbs}g carbs`);
    return postWorkout;
  }

  // NEW: Alcohol Integration System
  shouldIncludeAlcohol(userData) {
    // Include alcohol if user is NOT willing to stop drinking
    return userData.alcoholWilling && 
           !userData.alcoholWilling.toLowerCase().includes('yes') &&
           !userData.alcoholWilling.toLowerCase().includes('stop');
  }

  generateAlcoholNutrition(userData, targets) {
    console.log('🍷 Generating alcohol nutrition...');
    
    if (!this.shouldIncludeAlcohol(userData)) {
      return null;
    }

    // Determine drinking frequency and type
    const frequency = userData.alcoholFrequency || 'Once per week';
    const preference = userData.alcoholType || 'Wine';
    
    // Calculate alcohol allocation (max 10% of calories for safety)
    const maxAlcoholCalories = Math.min(200, targets.calories * 0.10);
    
    let alcoholItems = [];
    let alcoholCalories = 0;
    
    // Saturday is typically the drinking day
    if (frequency.includes('week') || frequency.includes('Saturday')) {
      let drinkType, servingSize, caloriesPerServing;
      
      switch (preference.toLowerCase()) {
        case 'wine':
          drinkType = 'Red Wine';
          servingSize = '150ml glass';
          caloriesPerServing = 125;
          break;
        case 'beer':
          drinkType = 'Light Beer';
          servingSize = '330ml bottle';
          caloriesPerServing = 140;
          break;
        case 'spirits':
          drinkType = 'Vodka & Soda';
          servingSize = '30ml shot + soda';
          caloriesPerServing = 97;
          break;
        default:
          drinkType = 'Red Wine';
          servingSize = '150ml glass';
          caloriesPerServing = 125;
      }
      
      // Calculate number of servings within calorie limit
      const maxServings = Math.floor(maxAlcoholCalories / caloriesPerServing);
      const actualServings = Math.min(maxServings, 2); // Cap at 2 for safety
      
      if (actualServings > 0) {
        alcoholCalories = actualServings * caloriesPerServing;
        
        alcoholItems.push({
          name: drinkType,
          amount: actualServings === 1 ? `1 ${servingSize}` : `${actualServings} ${servingSize}s`,
          calories: alcoholCalories,
          protein: 0,
          carbs: actualServings * 2, // Approx 2g carbs per serving
          fiber: 0,
          fats: 0,
          type: 'alcohol',
          timing: 'Saturday evening',
          checked: false
        });
      }
    }

    if (alcoholItems.length === 0) {
      return null;
    }

    console.log(`✅ Alcohol nutrition: ${alcoholCalories} calories, ${alcoholItems.length} items`);

    return {
      name: 'Alcohol',
      items: alcoholItems,
      totals: {
        calories: alcoholCalories,
        protein: 0,
        carbs: alcoholItems.reduce((sum, item) => sum + item.carbs, 0),
        fiber: 0,
        fats: 0
      },
      calories: alcoholCalories,
      protein: 0,
      carbs: alcoholItems.reduce((sum, item) => sum + item.carbs, 0),
      fiber: 0,
      fats: 0,
      timing: 'Saturday evening',
      notes: this.generateAlcoholNotes(frequency, preference),
      day: 'Saturday'
    };
  }

  generateAlcoholNotes(frequency, preference) {
    const notes = [];
    
    notes.push('Alcohol should be consumed in moderation and ideally on rest days.');
    notes.push('Consider having this on Saturday evening after your meals.');
    
    if (preference?.toLowerCase() === 'wine') {
      notes.push('Red wine contains antioxidants but should still be limited.');
    } else if (preference?.toLowerCase() === 'spirits') {
      notes.push('Mix with zero-calorie mixers like soda water or diet sodas.');
    } else if (preference?.toLowerCase() === 'beer') {
      notes.push('Light beer options are preferred to minimize calorie impact.');
    }
    
    notes.push('Remember: alcohol can impact recovery and training performance.');
    
    return notes.join(' ');
  }

  // Enhanced Module-58 Methods for Training Schedule Integration
  analyzeTrainingSchedule(userData) {
    const schedule = userData.trainingSchedule || {};
    const analysis = {
      totalTrainingDays: 0,
      lowerBodyDays: [],
      upperBodyDays: [],
      restDays: [],
      primaryTrainingDay: null,
      carbCyclingPattern: 'moderate'
    };

    // Parse the training schedule matrix
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    
    days.forEach(day => {
      const daySchedule = schedule[day] || [];
      if (daySchedule.includes('Lower Body')) {
        analysis.lowerBodyDays.push(day);
        analysis.totalTrainingDays++;
      } else if (daySchedule.includes('Upper Body')) {
        analysis.upperBodyDays.push(day);
        analysis.totalTrainingDays++;
      } else if (daySchedule.includes('Rest Day') || daySchedule.length === 0) {
        analysis.restDays.push(day);
      }
    });

    // Determine primary training day (usually the refeed day)
    analysis.primaryTrainingDay = userData.refeedDay || analysis.lowerBodyDays[0] || 'Saturday';

    // Set carb cycling pattern based on training frequency
    if (analysis.totalTrainingDays >= 5) {
      analysis.carbCyclingPattern = 'aggressive';
    } else if (analysis.totalTrainingDays >= 3) {
      analysis.carbCyclingPattern = 'moderate';
    } else {
      analysis.carbCyclingPattern = 'conservative';
    }

    return analysis;
  }

  // Enhanced Module-58 Methods for Cooking Time Integration
  analyzeCookingPreferences(userData) {
    const cookingTime = userData.cookingTime || {};
    const preferences = {
      morning: cookingTime.morning || 'Fast & Convenient Options',
      midday: cookingTime.midday || 'Simple Meal Prep',
      night: cookingTime.night || 'Full Meal Prep',
      mealComplexity: {}
    };

    // Map cooking time to meal complexity
    const complexityMap = {
      'Fast & Convenient Options': {
        maxPrepTime: 10,
        preferredFoods: ['protein powder', 'greek yogurt', 'pre-cooked', 'canned', 'ready-to-eat'],
        avoidFoods: ['raw meat', 'dry grains', 'complex recipes']
      },
      'Simple Meal Prep': {
        maxPrepTime: 30,
        preferredFoods: ['quick-cooking', 'one-pan', 'microwave-friendly'],
        avoidFoods: ['elaborate recipes', 'multiple cooking methods']
      },
      'Full Meal Prep': {
        maxPrepTime: 60,
        preferredFoods: ['any'],
        avoidFoods: []
      }
    };

    // Assign complexity to meal times
    preferences.mealComplexity = {
      breakfast: complexityMap[preferences.morning],
      lunch: complexityMap[preferences.midday],
      dinner: complexityMap[preferences.night],
      snack: complexityMap['Fast & Convenient Options']
    };

    return preferences;
  }

  // Enhanced meal timing based on training schedule
  determineMealTimingWithTraining(userData, mealCount) {
    const trainingAnalysis = this.analyzeTrainingSchedule(userData);
    const currentDay = userData.currentDay || new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const trainingTime = userData.trainingTime || 'Morning (After Eating)';
    
    const mealTimings = [];
    const isTrainingDay = trainingAnalysis.lowerBodyDays.includes(currentDay) || 
                         trainingAnalysis.upperBodyDays.includes(currentDay);
    const isLowerBodyDay = trainingAnalysis.lowerBodyDays.includes(currentDay);

    // Adjust meal timing based on training
    if (isTrainingDay) {
      if (trainingTime.includes('Morning (Before Eating)')) {
        // Fasted training
        mealTimings.push({ name: 'Pre-Workout', type: 'pre-workout', carbFocus: 'minimal' });
        mealTimings.push({ name: 'Post-Workout Breakfast', type: 'breakfast', carbFocus: 'high' });
      } else if (trainingTime.includes('Morning (After Eating)')) {
        mealTimings.push({ name: 'Pre-Training Breakfast', type: 'breakfast', carbFocus: 'high' });
      } else if (trainingTime.includes('Mid-Day')) {
        mealTimings.push({ name: 'Breakfast', type: 'breakfast', carbFocus: 'moderate' });
        mealTimings.push({ name: 'Pre-Training Meal', type: 'lunch', carbFocus: 'high' });
      }
    } else {
      // Rest day - standard timing
      mealTimings.push({ name: 'Breakfast', type: 'breakfast', carbFocus: 'moderate' });
    }

    // Fill remaining meals
    const remainingMeals = mealCount - mealTimings.length;
    const mealTypes = ['lunch', 'snack', 'dinner'];
    
    for (let i = 0; i < remainingMeals && i < mealTypes.length; i++) {
      const mealType = mealTypes[i];
      const carbFocus = isLowerBodyDay && mealType === 'lunch' ? 'high' : 
                       mealType === 'dinner' ? 'low' : 'moderate';
      
      mealTimings.push({
        name: mealType.charAt(0).toUpperCase() + mealType.slice(1),
        type: mealType,
        carbFocus: carbFocus
      });
    }

    return mealTimings;
  }

  createEnhancedMeals(targets, userData, dayType, trainingAnalysis, cookingPreferences) {
    const meals = [];
    const mealCount = parseInt(userData.numberOfMeals) || 4;
    const mealTimings = this.determineMealTimingWithTraining(userData, mealCount);
    
    // Calculate per-meal targets considering cooking complexity
    const mealBudget = this.calculateMealBudget(targets, mealCount, mealTimings);
    
    let usedProteins = [];
    let usedCarbs = [];
    
    mealTimings.forEach((timing, index) => {
      const mealType = timing.type;
      const complexity = cookingPreferences.mealComplexity[mealType];
      const allocation = mealBudget[index];
      
      const meal = {
        number: index + 1,
        name: timing.name,
        type: mealType,
        carbFocus: timing.carbFocus,
        components: { protein: null, carbs: null, vegetables: [], fats: null, extras: [] },
        totals: { calories: 0, protein: 0, carbs: 0, fiber: 0, fats: 0 },
        notes: []
      };
      
      // Select protein based on cooking time
      const proteinChoice = this.selectProteinWithComplexity(
        allocation.protein,
        complexity,
        userData.favProtein,
        mealType,
        usedProteins
      );
      if (proteinChoice) {
        meal.components.protein = proteinChoice;
        usedProteins.push(proteinChoice.name);
      }
      
      // Select carbs based on training focus and cooking time
      const carbChoice = this.selectCarbWithComplexity(
        allocation.carbs,
        timing.carbFocus,
        complexity,
        userData.favCarbs,
        mealType,
        usedCarbs
      );
      if (carbChoice) {
        meal.components.carbs = carbChoice;
        usedCarbs.push(carbChoice.name);
      }
      
      // Add vegetables
      const vegChoice = this.selectVegetableWithComplexity(complexity);
      if (vegChoice) {
        meal.components.vegetables.push(vegChoice);
      }
      
      // Calculate meal totals
      meal.totals = this.recalculateFromComponents({ meals: [meal] });
      
      // Add meal notes based on timing and training
      if (timing.carbFocus === 'high' && trainingAnalysis.lowerBodyDays.includes(userData.currentDay)) {
        meal.notes.push('Higher carbs for leg day performance');
      }
      if (complexity.maxPrepTime <= 10) {
        meal.notes.push('Quick prep option selected');
      }
      
      meals.push(meal);
    });
    
    return meals;
  }

  calculateMealBudget(targets, mealCount, mealTimings) {
    const budget = [];
    const totalCalories = targets.calories;
    const totalProtein = targets.protein;
    const totalCarbs = targets.hierarchical.carb_range.min;
    
    // Distribute based on meal timing and carb focus
    mealTimings.forEach((timing, index) => {
      let calorieRatio = 1 / mealCount;
      let carbRatio = 1 / mealCount;
      
      // Adjust ratios based on carb focus
      if (timing.carbFocus === 'high') {
        calorieRatio *= 1.2;
        carbRatio *= 1.3;
      } else if (timing.carbFocus === 'low') {
        calorieRatio *= 0.9;
        carbRatio *= 0.7;
      }
      
      budget.push({
        calories: Math.round(totalCalories * calorieRatio),
        protein: Math.round(totalProtein / mealCount),
        carbs: Math.round(totalCarbs * carbRatio),
        fiber: Math.round(targets.hierarchical.fiber_range.min / mealCount)
      });
    });
    
    return budget;
  }

  selectProteinWithComplexity(targetGrams, complexity, preferences, mealType, usedProteins) {
    // Get proteins from the food database
    const allProteins = foodDatabase.getFoodsByFoodType('protein') || [];
    const proteins = allProteins.filter(p => {
      // Filter based on cooking complexity
      if (complexity.maxPrepTime <= 10) {
        // Quick proteins: powder, pre-cooked, canned
        return p.prepTime <= 10 || p.preCooked || 
               p.name.includes('Powder') || p.name.includes('Greek Yogurt') ||
               p.name.includes('Cottage Cheese') || p.name.includes('Canned');
      }
      return !complexity.avoidFoods.some(avoid => p.name.toLowerCase().includes(avoid));
    });
    
    // Apply preference scoring
    const scored = proteins.map(p => ({
      ...p,
      score: this.calculateFoodScore(p, preferences, usedProteins, targetGrams)
    }));
    
    // Sort by score and select best match
    scored.sort((a, b) => b.score - a.score);
    const selected = scored[0];
    
    if (selected) {
      // Scale to target
      const scale = targetGrams / selected.protein;
      return this.scaleFood(selected, scale);
    }
    
    return null;
  }

  selectCarbWithComplexity(targetCarbs, carbFocus, complexity, preferences, mealType, usedCarbs) {
    const allCarbs = foodDatabase.getFoodsByFoodType('carb') || [];
    const carbs = allCarbs.filter(c => {
      // Filter based on cooking complexity
      if (complexity.maxPrepTime <= 10) {
        return c.prepTime <= 10 || c.instant || c.name.includes('Bread') || c.name.includes('Rice Cakes');
      }
      // Filter based on carb focus
      if (carbFocus === 'high') {
        return c.carbType === 'fast' || c.carbType === 'medium' || c.glycemicIndex >= 70;
      } else if (carbFocus === 'low') {
        return c.carbType === 'slow' || c.fiber > 3 || c.glycemicIndex <= 55;
      }
      return true;
    });
    
    // Apply preference scoring
    const scored = carbs.map(c => ({
      ...c,
      score: this.calculateFoodScore(c, preferences, usedCarbs, targetCarbs)
    }));
    
    // Sort by score and select best match
    scored.sort((a, b) => b.score - a.score);
    const selected = scored[0];
    
    if (selected) {
      // Scale to target
      const scale = targetCarbs / selected.carbs;
      return this.scaleFood(selected, scale);
    }
    
    return null;
  }

  selectVegetableWithComplexity(complexity) {
    const allVegetables = foodDatabase.getFoodsByFoodType('vegetable') || [];
    const vegetables = allVegetables.filter(v => {
      if (complexity.maxPrepTime <= 10) {
        return v.prepTime <= 5 || v.precut || v.frozen || 
               v.name.includes('Spinach') || v.name.includes('Lettuce') ||
               v.name.includes('Cucumber') || v.name.includes('Tomato');
      }
      return true;
    });
    
    // Select random vegetable for variety
    const selected = vegetables[Math.floor(Math.random() * vegetables.length)];
    
    if (selected) {
      // Standard serving size
      return {
        ...selected,
        amount: '100g'
      };
    }
    
    return null;
  }

  calculateFoodScore(food, preferences, usedFoods, targetAmount) {
    let score = 100;
    
    // Preference bonus - handle comma-separated string
    if (preferences) {
      const prefList = typeof preferences === 'string' ? preferences.split(',').map(p => p.trim()) : preferences;
      if (prefList.some(pref => food.name.toLowerCase().includes(pref.toLowerCase()))) {
        score += 50;
      }
    }
    
    // Diversity penalty
    if (usedFoods.includes(food.name)) {
      score -= 30;
    }
    
    // Amount matching bonus
    const foodAmount = parseFloat(food.amount) || 100;
    const amountDiff = Math.abs(foodAmount - targetAmount) / targetAmount;
    score -= amountDiff * 20;
    
    return score;
  }

  scaleFood(food, scale) {
    // Ensure scale is within reasonable bounds
    const adjustedScale = Math.max(0.5, Math.min(3, scale));
    
    // Parse the current amount
    let baseAmount = 100; // default
    let unit = 'g';
    
    if (food.amount) {
      const amountMatch = food.amount.match(/(\d+(?:\.\d+)?)\s*(\w+)?/);
      if (amountMatch) {
        baseAmount = parseFloat(amountMatch[1]);
        unit = amountMatch[2] || 'g';
      }
    }
    
    return {
      ...food,
      amount: this.formatAmount(baseAmount * adjustedScale, unit),
      calories: Math.round(food.calories * adjustedScale),
      protein: Math.round(food.protein * adjustedScale),
      carbs: Math.round(food.carbs * adjustedScale),
      fiber: Math.round((food.fiber || 0) * adjustedScale),
      fats: Math.round(food.fat * adjustedScale)
    };
  }

  formatAmount(amount, unit) {
    // Round to practical increments
    if (unit === 'g') {
      return `${Math.round(amount / 5) * 5}g`;
    } else if (unit === 'oz') {
      return `${(Math.round(amount * 2) / 2).toFixed(1)}oz`;
    } else if (unit === 'cup') {
      return `${(Math.round(amount * 4) / 4).toFixed(2)} cup`;
    }
    return `${Math.round(amount)} ${unit}`;
  }

  runPrecisionAdjustmentEngine(meals, targets, trainingAnalysis) {
    const MAX_CYCLES = 8;
    
    for (let cycle = 0; cycle < MAX_CYCLES; cycle++) {
      const currentTotals = this.recalculateFromComponents({ meals });
      
      const gaps = {
        protein: targets.protein - currentTotals.protein,
        carbSurplus: currentTotals.carbs - targets.hierarchical.carb_range.max,
        carbDeficit: targets.hierarchical.carb_range.min - currentTotals.carbs,
        fiber: targets.hierarchical.fiber_range.min - currentTotals.fiber,
        calories: targets.calories - currentTotals.calories
      };
      
      // Priority adjustments
      if (Math.abs(gaps.protein) > this.PROTEIN_TOLERANCE) {
        this.adjustProtein(meals, gaps.protein);
        continue;
      }
      
      if (gaps.carbSurplus > this.CARB_TOLERANCE) {
        this.adjustCarbsDown(meals, gaps.carbSurplus);
        continue;
      }
      
      if (gaps.carbDeficit > this.CARB_TOLERANCE) {
        this.adjustCarbsUp(meals, gaps.carbDeficit, trainingAnalysis);
        continue;
      }
      
      if (gaps.fiber > this.FIBER_TOLERANCE) {
        this.adjustFiber(meals, gaps.fiber);
        continue;
      }
      
      if (Math.abs(gaps.calories) > this.CALORIE_TOLERANCE) {
        this.adjustCalories(meals, gaps.calories);
        continue;
      }
      
      // All targets met
      break;
    }
    
    // Final recalculation
    meals.forEach(meal => {
      meal.totals = this.recalculateFromComponents({ meals: [meal] });
    });
    
    return meals;
  }

  recalculateFromComponents(components) {
    const totals = { calories: 0, protein: 0, carbs: 0, fiber: 0, fats: 0 };
    
    if (components.meals) {
      components.meals.forEach(meal => {
        if (meal.components) {
          // Add protein
          if (meal.components.protein) {
            this.addToTotals(totals, meal.components.protein);
          }
          // Add carbs
          if (meal.components.carbs) {
            this.addToTotals(totals, meal.components.carbs);
          }
          // Add vegetables
          if (meal.components.vegetables) {
            meal.components.vegetables.forEach(veg => this.addToTotals(totals, veg));
          }
          // Add fats
          if (meal.components.fats) {
            this.addToTotals(totals, meal.components.fats);
          }
          // Add extras
          if (meal.components.extras) {
            meal.components.extras.forEach(extra => this.addToTotals(totals, extra));
          }
        }
      });
    }
    
    return totals;
  }

  addToTotals(totals, item) {
    if (item) {
      totals.calories += item.calories || 0;
      totals.protein += item.protein || 0;
      totals.carbs += item.carbs || 0;
      totals.fiber += item.fiber || 0;
      totals.fats += item.fats || 0;
    }
  }

  adjustProtein(meals, gap) {
    const mealToAdjust = meals.find(m => m.components.protein);
    if (!mealToAdjust) return;
    
    const currentProtein = mealToAdjust.components.protein;
    const targetProtein = currentProtein.protein + gap;
    const scale = targetProtein / currentProtein.protein;
    
    mealToAdjust.components.protein = this.scaleFood(currentProtein, scale);
  }

  adjustCarbsDown(meals, surplus) {
    const mealToAdjust = meals
      .filter(m => m.components.carbs)
      .sort((a, b) => b.components.carbs.carbs - a.components.carbs.carbs)[0];
    
    if (!mealToAdjust) return;
    
    const currentCarbs = mealToAdjust.components.carbs;
    const targetCarbs = Math.max(20, currentCarbs.carbs - surplus);
    const scale = targetCarbs / currentCarbs.carbs;
    
    mealToAdjust.components.carbs = this.scaleFood(currentCarbs, scale);
  }

  adjustCarbsUp(meals, deficit, trainingAnalysis) {
    // Prefer adding carbs to meals around training
    const mealToAdjust = meals.find(m => 
      m.carbFocus === 'high' && m.components.carbs
    ) || meals.find(m => m.components.carbs);
    
    if (!mealToAdjust) return;
    
    const currentCarbs = mealToAdjust.components.carbs;
    const targetCarbs = currentCarbs.carbs + deficit;
    const scale = targetCarbs / currentCarbs.carbs;
    
    mealToAdjust.components.carbs = this.scaleFood(currentCarbs, scale);
  }

  adjustFiber(meals, deficit) {
    // Add psyllium husk to last meal
    const lastMeal = meals[meals.length - 1];
    if (!lastMeal) return;
    
    const tspNeeded = Math.ceil(deficit / 5);
    const psyllium = {
      name: 'Psyllium Husk',
      amount: `${tspNeeded} tsp`,
      calories: tspNeeded * 10,
      protein: 0,
      carbs: 0,
      fiber: tspNeeded * 5,
      fats: 0
    };
    
    if (!lastMeal.components.extras) {
      lastMeal.components.extras = [];
    }
    lastMeal.components.extras.push(psyllium);
  }

  adjustCalories(meals, gap) {
    // Use fats for calorie adjustment
    const fatAdjustment = gap / 9;
    const mealToAdjust = meals.find(m => m.type !== 'breakfast') || meals[0];
    
    if (!mealToAdjust.components.fats) {
      mealToAdjust.components.fats = {
        name: 'Extra Virgin Olive Oil',
        amount: '0 tsp',
        calories: 0,
        protein: 0,
        carbs: 0,
        fiber: 0,
        fats: 0
      };
    }
    
    const currentFat = mealToAdjust.components.fats;
    const newFatGrams = Math.max(0, currentFat.fats + fatAdjustment);
    
    if (newFatGrams === 0) {
      mealToAdjust.components.fats = null;
    } else {
      const tsp = Math.round(newFatGrams / 4.5);
      mealToAdjust.components.fats = {
        name: currentFat.name,
        amount: `${tsp} tsp`,
        calories: Math.round(newFatGrams * 9),
        protein: 0,
        carbs: 0,
        fiber: 0,
        fats: Math.round(newFatGrams)
      };
    }
  }
}

// HTML Generator with Interactive Mobile-First Design
function generatePrecisionHTML(meals, targets, userData) {
  const methodology = targets.methodology || 'moderate';
  const phase = targets.phase || '';
  
  // Generate 7-day meal plan data structure
  const weekPlan = {
    monday: { type: 'training', data: { meals, targets } },
    tuesday: { type: 'rest', data: generateRestDayMeals(targets, userData) },
    wednesday: { type: 'training', data: { meals, targets } },
    thursday: { type: 'rest', data: generateRestDayMeals(targets, userData) },
    friday: { type: 'training', data: { meals, targets } },
    saturday: { type: 'refeed', data: generateRefeedDayMeals(targets, userData) },
    sunday: { type: 'rest', data: generateRestDayMeals(targets, userData) }
  };
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${userData.first_name}'s Interactive Meal Plan - Stephanie Sanzo Nutrition</title>
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            min-height: 100vh;
            color: #2c3e50;
        }
        
                 .container {
             max-width: 800px;
             margin: 0 auto;
             background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
             border-radius: 20px;
             box-shadow: 0 25px 50px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,215,0,0.2);
             overflow: hidden;
             border: 2px solid rgba(255,215,0,0.1);
         }
        
                 .header {
             background: linear-gradient(135deg, #1a1a2e 0%, #2c3e50 50%, #1a1a2e 100%);
             color: #ffffff;
             padding: 40px;
             text-align: center;
             position: relative;
         }
         
         .header::before {
             content: '';
             position: absolute;
             top: 0;
             left: 0;
             right: 0;
             bottom: 0;
             background: linear-gradient(45deg, transparent 30%, rgba(255,215,0,0.1) 50%, transparent 70%);
             pointer-events: none;
         }
        
        .header h1 {
            font-size: 2.2rem;
            margin-bottom: 10px;
            font-weight: 300;
        }
        
        .header h2 {
            font-size: 1.2rem;
            opacity: 0.9;
            font-weight: 300;
        }
        
                 .methodology-badge {
             display: inline-block;
             padding: 12px 24px;
             margin-top: 20px;
             background: linear-gradient(135deg, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0.1) 100%);
             border: 1px solid rgba(255,215,0,0.3);
             border-radius: 25px;
             font-size: 0.85rem;
             font-weight: 600;
             letter-spacing: 1px;
             text-transform: uppercase;
             color: #ffd700;
             text-shadow: 0 1px 2px rgba(0,0,0,0.3);
             box-shadow: 0 4px 15px rgba(255,215,0,0.2);
         }
        
        .content {
            padding: 30px;
        }
        
                 .targets-section {
             background: linear-gradient(135deg, #1a1a2e 0%, #2c3e50 100%);
             border-radius: 20px;
             padding: 35px;
             margin-bottom: 35px;
             text-align: center;
             border: 1px solid rgba(255,215,0,0.2);
             box-shadow: 0 15px 35px rgba(0,0,0,0.2);
         }
        
                 .targets-title {
             font-size: 1.5rem;
             color: #ffd700;
             margin-bottom: 25px;
             font-weight: 700;
             text-shadow: 0 2px 4px rgba(0,0,0,0.3);
             letter-spacing: 0.5px;
         }
        
        .macro-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        
                 .macro-card {
             background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
             border-radius: 15px;
             padding: 20px;
             box-shadow: 0 8px 25px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,215,0,0.1);
             transition: all 0.3s ease;
             border: 1px solid rgba(255,215,0,0.05);
         }
         
         .macro-card:hover {
             transform: translateY(-5px);
             box-shadow: 0 15px 40px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,215,0,0.3);
             border-color: rgba(255,215,0,0.2);
         }
        
                 .macro-value {
             font-size: 1.8rem;
             font-weight: 800;
             color: #1a1a2e;
             background: linear-gradient(135deg, #2c3e50 0%, #1a1a2e 100%);
             -webkit-background-clip: text;
             -webkit-text-fill-color: transparent;
             background-clip: text;
         }
        
        .macro-label {
            font-size: 0.9rem;
            color: #666;
            margin-top: 5px;
        }
        
        .meals-section {
            margin-top: 30px;
        }
        
        .meal-card {
            background: white;
            border: 2px solid #e9ecef;
            border-radius: 15px;
            margin-bottom: 25px;
            overflow: hidden;
            transition: all 0.3s;
        }
        
        .meal-card:hover {
            border-color: #667eea;
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
        }
        
                 .meal-header {
             background: linear-gradient(135deg, #1a1a2e 0%, #2c3e50 70%, #1a1a2e 100%);
             color: #ffffff;
             padding: 25px;
             text-align: center;
             position: relative;
             border-bottom: 2px solid rgba(255,215,0,0.2);
         }
         
         .meal-header::after {
             content: '';
             position: absolute;
             bottom: 0;
             left: 50%;
             transform: translateX(-50%);
             width: 60px;
             height: 3px;
             background: linear-gradient(90deg, transparent 0%, #ffd700 50%, transparent 100%);
         }
        
        .meal-name {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 10px;
        }
        
        .meal-totals {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
            gap: 10px;
            font-size: 0.9rem;
        }
        
                 .meal-total {
             background: rgba(255,215,0,0.15);
             padding: 10px;
             border-radius: 10px;
             text-align: center;
             border: 1px solid rgba(255,215,0,0.2);
             backdrop-filter: blur(10px);
         }
        
        .meal-foods {
            padding: 20px;
        }
        
        .food-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #f0f0f0;
        }
        
        .food-item:last-child {
            border-bottom: none;
        }
        
        .food-name {
            font-weight: 600;
            color: #2c3e50;
        }
        
        .food-amount {
            color: #666;
            font-size: 0.9rem;
        }
        
        .food-calories {
            font-weight: 600;
            color: #667eea;
        }
        
        .footer {
            background: #f8f9fa;
            padding: 25px;
            text-align: center;
            color: #666;
            border-top: 1px solid #e9ecef;
        }
        
        .footer p {
            margin-bottom: 10px;
        }
        
        .branding {
            font-weight: 600;
            color: #2c3e50;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
            body {
                padding: 10px;
            }
            
            .header h1 {
                font-size: 1.8rem;
            }
            
            .content {
                padding: 20px;
            }
            
            .macro-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .meal-totals {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .food-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 5px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${userData.first_name} ${userData.last_name}</h1>
            <h2>Your Personalized Nutrition Plan</h2>
            ${methodology === 'shelby-justin' ? 
                `<div class="methodology-badge">EXTREME CARB CYCLING ${phase ? `• ${phase}` : ''}</div>` :
                `<div class="methodology-badge">PRECISION NUTRITION SYSTEM</div>`
            }
        </div>
        
        <div class="content">
            <div class="targets-section">
                <div class="targets-title">🎯 Your Daily Targets</div>
                <div class="macro-grid">
                    <div class="macro-card">
                        <div class="macro-value">${targets.calories}</div>
                        <div class="macro-label">Calories</div>
                    </div>
                    <div class="macro-card">
                        <div class="macro-value">${targets.protein}g</div>
                        <div class="macro-label">Protein</div>
                    </div>
                    <div class="macro-card">
                        <div class="macro-value">${targets.carbs}g</div>
                        <div class="macro-label">Carbs</div>
                    </div>
                    <div class="macro-card">
                        <div class="macro-value">${targets.fat}g</div>
                        <div class="macro-label">Fat</div>
                    </div>
                </div>
            </div>
            
            <div class="meals-section">
                ${meals.map((meal, index) => `
                    <div class="meal-card">
                        <div class="meal-header">
                            <div class="meal-name">${meal.name}</div>
                            <div class="meal-totals">
                                <div class="meal-total">
                                    <div>${Math.round(meal.totals.calories)}</div>
                                    <div>cals</div>
                                </div>
                                <div class="meal-total">
                                    <div>${Math.round(meal.totals.protein)}g</div>
                                    <div>protein</div>
                                </div>
                                <div class="meal-total">
                                    <div>${Math.round(meal.totals.carbs)}g</div>
                                    <div>carbs</div>
                                </div>
                                <div class="meal-total">
                                    <div>${Math.round(meal.totals.fats)}g</div>
                                    <div>fat</div>
                                </div>
                            </div>
                        </div>
                        <div class="meal-foods">
                            ${meal.components.map(food => `
                                <div class="food-item">
                                    <div>
                                        <div class="food-name">${food.name}</div>
                                        <div class="food-amount">${food.amount}</div>
                                    </div>
                                    <div class="food-calories">${food.calories} cal</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="footer">
            <p><strong class="branding">Stephanie Sanzo Nutrition</strong></p>
            <p>World-class personalized nutrition • Precision engineered for your goals</p>
            <p>Generated with mathematical precision: ±25 calorie tolerance</p>
        </div>
    </div>
</body>
</html>`;
}

// Import interactive HTML generator
const { generateInteractiveHTML } = require('./Module-6-Interactive-HTML');

// Main function - Precision Meal Plan Generation
function buildPersonalizedNutritionPlan(targets, userData) {
  const engine = new TruePrecisionEngine();
  
  // Determine day type from userData or use default
  let dayType = 'training'; // Default
  
  // Check if userData has currentDayType (from orchestrator)
  if (userData.currentDayType) {
    dayType = userData.currentDayType;
  } else if (targets.training_day && targets.rest_day) {
    // Auto-detect based on which targets are being used
    // This is a simplified approach - could be enhanced
    dayType = 'training'; // Default to training
  }
  
  // Map the dayType to the target key
  const dayTypeMap = {
    'training': 'training_day',
    'rest': 'rest_day',
    'refeed': 'refeed_day'
  };
  
  const targetKey = dayTypeMap[dayType] || 'training_day';
  const dayTargets = targets[targetKey] || targets.training_day;
  
  // Ensure we have the right structure - dayTargets already includes hierarchical
  const mealTargets = {
    ...dayTargets,
    methodology: targets.methodology || 'moderate'
  };
  
  console.log('🎯 Using targets for:', targetKey, 'with dayType:', dayType);
  console.log('📊 Meal targets:', mealTargets);
  
  const result = engine.buildPrecisionMealPlan(mealTargets, userData, dayType);
  console.log('📦 buildPersonalizedNutritionPlan: result from engine:', {
    hasMeals: !!result.meals,
    hasPostWorkout: !!result.postWorkout,
    hasSupplements: !!result.supplements,
    supplementsKeys: result.supplements ? Object.keys(result.supplements) : 'null'
  });
  const { meals, postWorkout, coffee, energyDrinks, snacks, alcohol, supplements: supplementsData } = result;
  
  // Use interactive HTML if requested
  if (userData.interactiveMode || true) { // Default to interactive
    console.log('🚀 About to call generateInteractiveHTML with:', {
      mealsCount: meals?.length,
      hasSupplements: !!supplementsData,
      supplementsKeys: supplementsData ? Object.keys(supplementsData) : null
    });
    try {
      // Add training analysis and cooking preferences to userData
      const enhancedUserData = {
        ...userData,
        trainingAnalysis: result.trainingAnalysis,
        cookingPreferences: result.cookingPreferences
      };
      return generateInteractiveHTML(meals, mealTargets, enhancedUserData, postWorkout, coffee, energyDrinks, snacks, alcohol, supplementsData);
    } catch (error) {
      console.error('❌ Error generating interactive HTML:', error);
      console.error(error.stack);
      throw error;
    }
  }
  
  return generatePrecisionHTML(meals, mealTargets, userData, postWorkout, snacks, alcohol);
}

// Legacy alias for backwards compatibility
function buildTruePrecisionFerrariPlan(targets, userData) {
  return buildPersonalizedNutritionPlan(targets, userData);
}

// ===========================================
// SUPPLEMENT INTEGRATION SYSTEM
// ===========================================

/**
 * Get supplements for a specific meal based on meal type and supplement data
 * @param {Object} meal - The meal object
 * @param {Object} supplementsData - Data from Module-57-Supplements.js
 * @returns {string|null} - Supplement recommendations or null if none
 */
function getSupplementsForMeal(meal, supplementsData) {
  if (!supplementsData || !supplementsData.personalized_protocol) {
    return null;
  }

  const protocol = supplementsData.personalized_protocol;
  const mealName = meal.name?.toLowerCase() || '';
  const isPostWorkout = meal.is_post_workout || mealName.includes('post-workout');
  const isBreakfast = mealName.includes('breakfast') || mealName.includes('morning');
  const isEvening = mealName.includes('evening') || mealName.includes('dinner') || mealName.includes('night');
  const isSnack = mealName.includes('snack');

  let supplements = [];

  // Foundation supplements (daily)
  if (protocol.age_optimized_daily_foundation) {
    supplements.push(protocol.age_optimized_daily_foundation);
  }

  // Energy supplements (morning/breakfast)
  if (isBreakfast && protocol.energy_vitality_stack) {
    supplements.push(protocol.energy_vitality_stack);
  }

  // Post-workout supplements
  if (isPostWorkout && protocol.training_optimization) {
    supplements.push(protocol.training_optimization);
  }

  // Evening/sleep supplements
  if (isEvening && protocol.recovery_sleep_stack) {
    supplements.push(protocol.recovery_sleep_stack);
  }

  // Snack supplements (if any)
  if (isSnack && protocol.life_stage_specific_additions) {
    supplements.push(protocol.life_stage_specific_additions);
  }

  // Metabolic supplements (with main meals)
  if (!isSnack && !isPostWorkout && protocol.metabolic_health) {
    supplements.push(protocol.metabolic_health);
  }

  // Remove duplicates and format
  const uniqueSupplements = [...new Set(supplements)];
  
  if (uniqueSupplements.length === 0) {
    return null;
  }

  return uniqueSupplements.join(' • ');
}

/**
 * Generate supplement section for the meal plan
 * @param {Object} supplementsData - Data from Module-57-Supplements.js
 * @param {Object} userData - User data
 * @returns {Object} - Supplement section data
 */
function generateSupplementSection(supplementsData, userData) {
  console.log('🔬 generateSupplementSection called with:', {
    hasSupplementsData: !!supplementsData,
    hasPersonalizedProtocol: !!(supplementsData && supplementsData.personalized_protocol),
    tier: supplementsData?.supplement_analysis?.tier_assignment
  });
  
  if (!supplementsData || !supplementsData.personalized_protocol) {
    console.log('🔬 No supplements data or personalized protocol, returning null');
    return null;
  }

  const protocol = supplementsData.personalized_protocol;
  const tier = supplementsData.supplement_analysis?.tier_assignment || 'protein_only';

  console.log('🔬 Tier assignment:', tier);
  
  const supplements = [];

  // Handle protein_only tier with food-based recommendations
  if (tier === 'protein_only') {
    console.log('🔬 Tier is protein_only, providing food-based recommendations');
    
    // Add food-based foundation recommendations
    if (protocol.age_optimized_daily_foundation) {
      supplements.push({
        name: 'Food-Based Optimization',
        description: protocol.age_optimized_daily_foundation,
        timing: 'Daily through meals',
        priority: 'Essential'
      });
    }
  }
  
  // Add supplements for all tiers (protein_only gets food-based, others get actual supplements)
  // Foundation supplements (skip for protein_only since we added food-based version above)
  if (tier !== 'protein_only' && protocol.age_optimized_daily_foundation) {
    supplements.push({
      name: 'Daily Foundation',
      description: protocol.age_optimized_daily_foundation,
      timing: 'With meals',
      priority: 'Essential'
    });
  }

  // Energy supplements
  if (protocol.energy_vitality_stack) {
    supplements.push({
      name: tier === 'protein_only' ? 'Natural Energy Support' : 'Energy & Vitality',
      description: protocol.energy_vitality_stack,
      timing: tier === 'protein_only' ? 'Through food choices' : 'Morning/Before breakfast',
      priority: 'High'
    });
  }

  // Training supplements
  if (protocol.training_optimization) {
    supplements.push({
      name: 'Training Support',
      description: protocol.training_optimization,
      timing: 'Pre/post workout',
      priority: 'Medium'
    });
  }

  // Recovery supplements
  if (protocol.recovery_sleep_stack) {
    supplements.push({
      name: 'Recovery & Sleep',
      description: protocol.recovery_sleep_stack,
      timing: 'Evening',
      priority: 'High'
    });
  }

  // Metabolic supplements
  if (protocol.metabolic_health) {
    supplements.push({
      name: 'Metabolic Health',
      description: protocol.metabolic_health,
      timing: 'With main meals',
      priority: 'Medium'
    });
  }

  // Immune/gut supplements
  if (protocol.immune_gut_health) {
    supplements.push({
      name: 'Immune & Gut Health',
      description: protocol.immune_gut_health,
      timing: 'Daily',
      priority: 'Medium'
    });
  }

  const result = {
    tier: tier,
    supplements: supplements,
    education: supplementsData.stephanie_education,
    safety: supplementsData.safety_and_sourcing
  };
  
  console.log('🔬 generateSupplementSection returning:', {
    tier: result.tier,
    supplementsCount: result.supplements.length,
    supplements: result.supplements
  });
  
  return result;
}

/**
 * Format supplement recommendations for HTML display
 * @param {Object} supplementSection - Supplement section data
 * @returns {string} - HTML formatted supplement section
 */
function formatSupplementSection(supplementSection) {
  if (!supplementSection || !supplementSection.supplements) {
    return '';
  }

  let html = `
    <div class="supplements-section">
      <div class="supplements-card">
        <div class="supplements-header">
          <h3 class="supplements-title">SUPPLEMENTS</h3>
          <div class="supplements-subtitle">Personalized for your needs</div>
        </div>
        <div class="supplements-body">
          <table class="supplements-table">
            <thead>
              <tr>
                <th>Supplement</th>
                <th>Description</th>
                <th>Timing</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>`;

  supplementSection.supplements.forEach(supplement => {
    const priorityColor = supplement.priority === 'Essential' ? '#e74c3c' : 
                         supplement.priority === 'High' ? '#f39c12' : '#3498db';
    
    html += `
              <tr>
                <td><strong>${supplement.name}</strong></td>
                <td>${supplement.description}</td>
                <td>${supplement.timing}</td>
                <td style="color: ${priorityColor};">${supplement.priority}</td>
              </tr>`;
  });

  html += `
            </tbody>
          </table>
          
          <div class="supplements-notes">
            <div class="supplements-notes-title">Shopping Tips:</div>
            <div class="supplements-notes-text">
              I'm not affiliated with any supplement brands - but I'd suggest shopping on iHerb or Amazon - as you'll likely be able to find all the products you need in the one place! In regards to specific brands - just work within your budget and check the reviews before purchasing.
            </div>
          </div>`;

  // Add budget guidance for higher tiers
  if (supplementSection.tier === 'essential_plus' || supplementSection.tier === 'full_stack') {
    html += `
          <div class="supplements-budget">
            <div class="supplements-budget-title">Budget Considerations:</div>
            <div class="supplements-budget-text">
              If budget is a consideration, I'd suggest prioritizing the most important supplements initially, then slowly add the others over time.
            </div>
          </div>`;
  }

  html += `
        </div>
      </div>
    </div>`;

  return html;
}

// Exports
module.exports = {
  buildPersonalizedNutritionPlan,
  buildTruePrecisionFerrariPlan, // Keep for backwards compatibility
  TruePrecisionEngine,
  getSupplementsForMeal,
  generateSupplementSection,
  formatSupplementSection
}; 