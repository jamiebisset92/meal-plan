// Food Database Loader for Module-58
const fs = require('fs');
const path = require('path');

class FoodDatabase {
  constructor() {
    this.foods = [];
    this.foodsByName = new Map(); // Lookup by name (case-insensitive)
    this.foodsByCategory = new Map(); // Lookup by category
    this.foodsByDietaryType = new Map(); // Lookup by dietary type
    this.foodsByFoodType = new Map(); // Lookup by food type (protein, carb, fat, etc.)
    this.loadFoods();
  }
  
  // Create efficient lookup structures
  createLookupStructures() {
    // Clear existing maps
    this.foodsByName.clear();
    this.foodsByCategory.clear();
    this.foodsByDietaryType.clear();
    this.foodsByFoodType.clear();
    
    // Populate lookup maps
    for (const food of this.foods) {
      // Name lookup (case-insensitive)
      const nameLower = food.name.toLowerCase();
      this.foodsByName.set(nameLower, food);
      
      // Category lookup
      if (!this.foodsByCategory.has(food.category)) {
        this.foodsByCategory.set(food.category, []);
      }
      this.foodsByCategory.get(food.category).push(food);
      
      // Dietary type lookup
      if (food.dietaryType) {
        if (!this.foodsByDietaryType.has(food.dietaryType)) {
          this.foodsByDietaryType.set(food.dietaryType, []);
        }
        this.foodsByDietaryType.get(food.dietaryType).push(food);
      }
      
      // Food type lookup
      if (!this.foodsByFoodType.has(food.foodType)) {
        this.foodsByFoodType.set(food.foodType, []);
      }
      this.foodsByFoodType.get(food.foodType).push(food);
    }
  }
  
  // Helper function to determine dietary category based on food name
  determineDietaryCategory(food) {
    const nameLower = food.name.toLowerCase();
    
    // Meat
    if (nameLower.includes('beef') || nameLower.includes('chicken') || 
        nameLower.includes('turkey') || nameLower.includes('pork') ||
        nameLower.includes('steak') || nameLower.includes('bacon') ||
        nameLower.includes('lamb') || nameLower.includes('sausage')) {
      return 'meat';
    }
    
    // Fish & Seafood
    if (nameLower.includes('salmon') || nameLower.includes('tuna') || 
        nameLower.includes('fish') || nameLower.includes('shrimp') ||
        nameLower.includes('prawns') || nameLower.includes('cod') ||
        nameLower.includes('tilapia') || nameLower.includes('mackerel')) {
      return 'fish';
    }
    
    // Dairy
    if (nameLower.includes('milk') || nameLower.includes('cheese') || 
        nameLower.includes('yogurt') || nameLower.includes('whey') ||
        nameLower.includes('cottage cheese') || nameLower.includes('greek yogurt')) {
      return 'dairy';
    }
    
    // Eggs
    if (nameLower.includes('egg')) {
      return 'eggs';
    }
    
    // Plant-based proteins
    if (nameLower.includes('tofu') || nameLower.includes('tempeh') || 
        nameLower.includes('lentils') || nameLower.includes('beans') ||
        nameLower.includes('chickpeas') || nameLower.includes('quinoa') ||
        nameLower.includes('soy') || nameLower.includes('legume')) {
      return 'plant-protein';
    }
    
    // Nuts and Seeds
    if (nameLower.includes('almond') || nameLower.includes('peanut') || 
        nameLower.includes('cashew') || nameLower.includes('walnut') ||
        nameLower.includes('nuts') || nameLower.includes('seeds') ||
        nameLower.includes('chia') || nameLower.includes('flax')) {
      return 'nuts-seeds';
    }
    
    // Grains
    if (nameLower.includes('rice') || nameLower.includes('oats') || 
        nameLower.includes('bread') || nameLower.includes('pasta') ||
        nameLower.includes('wheat') || nameLower.includes('cereal')) {
      return 'grains';
    }
    
    // Vegetables
    if (this.determineFoodType(food) === 'veggie') {
      return 'vegetables';
    }
    
    // Fruits
    if (this.determineFoodType(food) === 'fruit') {
      return 'fruits';
    }
    
    // Drinks
    if (this.determineFoodType(food) === 'drink') {
      return 'drinks';
    }
    
    return 'other';
  }
  
  // Helper function to determine dietary restrictions
  determineDietaryRestrictions(food) {
    const dietaryCategory = this.determineDietaryCategory(food);
    const nameLower = food.name.toLowerCase();
    const allergenLower = (food.allergenConcerns || '').toLowerCase();
    
    return {
      isVegetarian: !['meat', 'fish'].includes(dietaryCategory),
      isVegan: !['meat', 'fish', 'dairy', 'eggs'].includes(dietaryCategory) && 
               !nameLower.includes('honey') && !nameLower.includes('whey'),
      isPescatarian: dietaryCategory !== 'meat',
      isDairyFree: dietaryCategory !== 'dairy' && !nameLower.includes('whey') && 
                   !nameLower.includes('casein') && !nameLower.includes('lactose') &&
                   !allergenLower.includes('dairy') && !allergenLower.includes('milk'),
      isGlutenFree: !nameLower.includes('wheat') && !nameLower.includes('bread') && 
                    !nameLower.includes('pasta') && !nameLower.includes('flour') &&
                    !nameLower.includes('barley') && !nameLower.includes('rye') &&
                    !allergenLower.includes('gluten'),
      // New allergen-based restrictions
      isNutFree: !allergenLower.includes('nut') && !allergenLower.includes('peanut') &&
                 !nameLower.includes('almond') && !nameLower.includes('cashew') &&
                 !nameLower.includes('walnut') && !nameLower.includes('pecan'),
      isSoyFree: !allergenLower.includes('soy') && !nameLower.includes('soy') &&
                 !nameLower.includes('tofu') && !nameLower.includes('tempeh'),
      isEggFree: dietaryCategory !== 'eggs' && !allergenLower.includes('egg'),
      isShellfishFree: !allergenLower.includes('shellfish') && !nameLower.includes('shrimp') &&
                       !nameLower.includes('lobster') && !nameLower.includes('crab')
    };
  }

  // Helper function to determine food type based on macros and name
  determineFoodType(food) {
    const { name, protein, carbs, fat } = food;
    const nameLower = name.toLowerCase();
    
    // Drinks
    if (nameLower.includes('coffee') || nameLower.includes('energy drink') || 
        nameLower.includes('coke') || nameLower.includes('juice')) {
      return 'drink';
    }
    
    // Vegetables
    if (nameLower.includes('broccoli') || nameLower.includes('spinach') || 
        nameLower.includes('lettuce') || nameLower.includes('cucumber') ||
        nameLower.includes('tomato') || nameLower.includes('carrot') ||
        nameLower.includes('asparagus') || nameLower.includes('zucchini') ||
        nameLower.includes('capsicum') || nameLower.includes('mushroom')) {
      return 'veggie';
    }
    
    // Fruits
    if (nameLower.includes('apple') || nameLower.includes('banana') || 
        nameLower.includes('berries') || nameLower.includes('orange') ||
        nameLower.includes('strawberr') || nameLower.includes('blueberr') ||
        nameLower.includes('pineapple') || nameLower.includes('mango')) {
      return 'fruit';
    }
    
    // Salads
    if (nameLower.includes('salad')) {
      return 'salad';
    }
    
    // Determine by macro ratios
    const totalMacros = protein + carbs + fat;
    if (totalMacros === 0) return 'other';
    
    const proteinRatio = protein / totalMacros;
    const carbRatio = carbs / totalMacros;
    const fatRatio = fat / totalMacros;
    
    // Protein sources (>40% protein or >15g protein with low carbs)
    if (proteinRatio > 0.4 || (protein > 15 && carbs < 5)) {
      return 'protein';
    }
    
    // Carb sources (>40% carbs or >20g carbs with low fat)
    if (carbRatio > 0.4 || (carbs > 20 && fat < 5)) {
      return 'carb';
    }
    
    // Fat sources (>40% fat or >10g fat with low carbs)
    if (fatRatio > 0.4 || (fat > 10 && carbs < 5)) {
      return 'fat';
    }
    
    // Mixed foods
    return 'mixed';
  }

  loadFoods() {
    try {
      const csvPath = path.join(__dirname, '../../data/Nutritional Database.csv');
      const csvContent = fs.readFileSync(csvPath, 'utf8');
      const lines = csvContent.split('\n').filter(line => line.trim());
      
      // Skip the first two header rows
      for (let i = 2; i < lines.length; i++) {
        const line = lines[i];
        
        // Simple CSV parser that handles quoted values
        const columns = [];
        let current = '';
        let inQuotes = false;
        
        for (let j = 0; j < line.length; j++) {
          const char = line[j];
          
          if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
            columns.push(current);
            current = '';
          } else {
            current += char;
          }
        }
        columns.push(current); // Don't forget the last column
        
        // New CSV structure has more columns
        if (columns.length >= 10) {
          const food = {
            // Basic info
            name: columns[0]?.trim() || '',
            category: columns[1]?.trim() || 'other',
            state: columns[2]?.trim() || 'cooked',
            quantity: parseFloat(columns[3]) || 100,
            
            // Cooked state macros (primary)
            calories: parseFloat(columns[4]) || 0,
            protein: parseFloat(columns[5]?.replace('g', '')) || 0,
            carbs: parseFloat(columns[6]?.replace('g', '')) || 0,
            fiber: parseFloat(columns[7]?.replace('g', '')) || 0,
            fat: parseFloat(columns[8]?.replace('g', '')) || 0,
            saturatedFat: parseFloat(columns[9]?.replace('g', '')) || 0,
            sugar: parseFloat(columns[10]?.replace('g', '')) || 0,
            sodium: parseFloat(columns[11]?.replace('mg', '')) || 0,
            
            // Raw state information
            hasRawState: columns[12]?.trim().toLowerCase() === 'true',
            rawToCookedRatio: parseFloat(columns[13]) || 1.0,
            rawCalories: parseFloat(columns[14]) || 0,
            rawProtein: parseFloat(columns[15]?.replace('g', '')) || 0,
            rawCarbs: parseFloat(columns[16]?.replace('g', '')) || 0,
            rawFat: parseFloat(columns[17]?.replace('g', '')) || 0,
            displayRawAs: columns[18]?.trim() || '',
            
            // Additional info
            prepNote: columns[19]?.trim() || '',
            bestPairedWith: columns[20]?.trim() || '',
            mealTiming: columns[21]?.trim() || '',
            dietaryType: columns[22]?.trim() || '',
            allergenConcerns: columns[23]?.trim() || '',
            
            // Legacy fields for compatibility
            oz: 0,
            displayUnit: '',
            multiAllowed: true // Default to true for now
          };
          
          if (food.name) {
            // Add the food type based on our analysis
            food.foodType = this.determineFoodType(food);
            food.dietaryCategory = this.determineDietaryCategory(food);
            food.dietaryRestrictions = this.determineDietaryRestrictions(food);
            
            // If dietary type is provided in CSV, use it to override our determination
            if (food.dietaryType) {
              const dietaryTypeLower = food.dietaryType.toLowerCase();
              if (dietaryTypeLower === 'meat') food.dietaryCategory = 'meat';
              else if (dietaryTypeLower === 'fish') food.dietaryCategory = 'fish';
              else if (dietaryTypeLower === 'plant') food.dietaryCategory = 'plant-protein';
              else if (dietaryTypeLower === 'vegan') {
                food.dietaryCategory = 'vegan';
                // Update dietary restrictions for vegan foods
                food.dietaryRestrictions.isVegan = true;
                food.dietaryRestrictions.isVegetarian = true;
                food.dietaryRestrictions.isDairyFree = true;
              }
            }
            
            this.foods.push(food);
          }
        }
      }
      
      // Create lookup structures for efficient access
      this.createLookupStructures();
      
      console.log(`Loaded ${this.foods.length} foods from database`);
    } catch (error) {
      console.error('Error loading food database:', error);
      this.foods = [];
    }
  }

  findFood(name) {
    // Use the efficient lookup map
    return this.foodsByName.get(name.toLowerCase()) || null;
  }

  getFoodsByCategory(category) {
    // Use the efficient lookup map
    return this.foodsByCategory.get(category) || [];
  }
  
  getFoodsByDietaryType(dietaryType) {
    // Use the efficient lookup map
    return this.foodsByDietaryType.get(dietaryType) || [];
  }
  
  getFoodsByFoodType(foodType) {
    // Use the efficient lookup map
    return this.foodsByFoodType.get(foodType) || [];
  }

  getFoodsByMacro(macroType, minValue = 0) {
    return this.foods.filter(food => {
      const macroValue = food[macroType] || 0;
      return macroValue >= minValue;
    });
  }

  getFatSources(minFat = 5) {
    return this.getFoodsByFoodType('fat').filter(food => food.fat >= minFat);
  }

  getProteinSources(minProtein = 10) {
    return this.getFoodsByFoodType('protein').filter(food => food.protein >= minProtein);
  }

  getCarbSources(minCarbs = 10) {
    return this.getFoodsByFoodType('carb').filter(food => food.carbs >= minCarbs);
  }

  getVegetables() {
    return this.getFoodsByFoodType('veggie');
  }

  getSalads() {
    return this.getFoodsByFoodType('salad');
  }

  getFruits() {
    return this.getFoodsByFoodType('fruit');
  }
  
  // New method to get foods that are safe for specific allergen concerns
  getFoodsAvoidingAllergens(allergenList = []) {
    if (!allergenList.length) return this.foods;
    
    return this.foods.filter(food => {
      if (!food.allergenConcerns) return true;
      
      const foodAllergens = food.allergenConcerns.toLowerCase();
      return !allergenList.some(allergen => 
        foodAllergens.includes(allergen.toLowerCase())
      );
    });
  }
  
  // Get raw version data for a food if it exists
  getRawData(foodName) {
    const food = this.findFood(foodName);
    if (!food || !food.hasRawState) return null;
    
    return {
      name: food.displayRawAs || `Raw ${food.name}`,
      protein: food.rawProtein,
      carbs: food.rawCarbs,
      fat: food.rawFat,
      calories: food.rawCalories,
      ratio: food.rawToCookedRatio
    };
  }

  canHaveMultiple(foodName) {
    const food = this.findFood(foodName);
    return food ? food.multiAllowed : false;
  }

  getCategory(foodName) {
    const food = this.findFood(foodName);
    return food ? food.category : 'other';
  }
  
  // Get alternatives for a specific food based on type and dietary preferences
  getFoodAlternatives(foodName, dietaryPreferences = {}) {
    const originalFood = this.findFood(foodName);
    if (!originalFood) return [];
    
    // Filter foods by same food type and similar macros
    const alternatives = this.foods.filter(food => {
      // Skip the original food
      if (food.name === originalFood.name) return false;
      
      // Must be same food type (protein, carb, fat, etc.)
      if (food.foodType !== originalFood.foodType) return false;
      
      // Check dietary preferences
      if (dietaryPreferences.vegetarian && !food.dietaryRestrictions.isVegetarian) return false;
      if (dietaryPreferences.vegan && !food.dietaryRestrictions.isVegan) return false;
      if (dietaryPreferences.pescatarian && !food.dietaryRestrictions.isPescatarian) return false;
      if (dietaryPreferences.dairyFree && !food.dietaryRestrictions.isDairyFree) return false;
      if (dietaryPreferences.glutenFree && !food.dietaryRestrictions.isGlutenFree) return false;
      
      // For protein sources, prioritize foods with similar dietary category
      if (originalFood.foodType === 'protein') {
        // If original is meat, show other meats (unless dietary restriction)
        if (originalFood.dietaryCategory === 'meat' && !dietaryPreferences.vegetarian && !dietaryPreferences.pescatarian) {
          return food.dietaryCategory === 'meat';
        }
        // If original is fish, show other fish
        if (originalFood.dietaryCategory === 'fish' && !dietaryPreferences.vegetarian) {
          return food.dietaryCategory === 'fish';
        }
        // Otherwise show any protein that meets dietary requirements
        return food.protein >= originalFood.protein * 0.7;
      }
      
      return true;
    });
    
    // Sort by macro similarity
    alternatives.sort((a, b) => {
      const aDiff = Math.abs(a.protein - originalFood.protein) + 
                    Math.abs(a.carbs - originalFood.carbs) + 
                    Math.abs(a.fat - originalFood.fat);
      const bDiff = Math.abs(b.protein - originalFood.protein) + 
                    Math.abs(b.carbs - originalFood.carbs) + 
                    Math.abs(b.fat - originalFood.fat);
      return aDiff - bDiff;
    });
    
    // Return top 10 alternatives
    return alternatives.slice(0, 10);
  }

  // Convert quantity from cooked to raw or vice versa
  convertQuantity(foodName, quantity, fromState, toState) {
    const food = this.findFood(foodName);
    if (!food || !food.hasRawState) return quantity;
    
    if (fromState === toState) return quantity;
    
    if (fromState === 'raw' && toState === 'cooked') {
      // Raw to cooked: divide by ratio (e.g., 100g raw -> 75g cooked if ratio is 1.33)
      return quantity / food.rawToCookedRatio;
    } else if (fromState === 'cooked' && toState === 'raw') {
      // Cooked to raw: multiply by ratio (e.g., 100g cooked -> 133g raw if ratio is 1.33)
      return quantity * food.rawToCookedRatio;
    }
    
    return quantity;
  }
  
  // Get food data in specified state (raw or cooked)
  getFoodInState(foodName, state = 'cooked') {
    const food = this.findFood(foodName);
    if (!food) return null;
    
    // If requested state is cooked or food has no raw state, return cooked data
    if (state === 'cooked' || !food.hasRawState) {
      return {
        ...food,
        requestedState: 'cooked'
      };
    }
    
    // Return raw state data
    return {
      ...food,
      // Override macros with raw values
      protein: food.rawProtein,
      carbs: food.rawCarbs,
      fat: food.rawFat,
      calories: food.rawCalories,
      // Update display info
      name: food.displayRawAs || `Raw ${food.name}`,
      state: 'raw',
      requestedState: 'raw',
      // Keep reference to cooked values
      cookedProtein: food.protein,
      cookedCarbs: food.carbs,
      cookedFat: food.fat,
      cookedCalories: food.calories
    };
  }
  
  // Check if a food has a raw state available
  hasRawState(foodName) {
    const food = this.findFood(foodName);
    return food ? food.hasRawState : false;
  }
  
  // Get all foods that have raw states
  getFoodsWithRawStates() {
    return this.foods.filter(food => food.hasRawState);
  }
}

module.exports = new FoodDatabase(); 