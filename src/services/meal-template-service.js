/**
 * Meal Template Service
 * Bridges the new meal template system with Module-58 infrastructure
 * Provides intelligent template selection and scaling to meet precise macro targets
 */

const mealTemplates = require('../templates/meal-templates');
const foodDatabase = require('../utils/food-database-loader');

class MealTemplateService {
  constructor() {
    this.templates = mealTemplates.allTemplates;
    this.foodDB = foodDatabase;
    this.recentlyUsedTemplates = new Map(); // Track template usage for variety
    this.sessionId = Date.now(); // For tracking within a session
    
    // Log database initialization
    console.log(`[MealTemplateService] Constructor - foodDB initialized:`, !!this.foodDB);
    console.log(`[MealTemplateService] foodDB has findFood method:`, typeof this.foodDB.findFood === 'function');
    console.log(`[MealTemplateService] foodDB foods loaded:`, this.foodDB.foods ? this.foodDB.foods.length : 'N/A');
  }

  /**
   * Main method to get a meal for user
   * @param {Object} userData - User preferences and restrictions
   * @param {string} mealType - 'upon_waking', 'day_meals', 'dinner', 'post_workout', 'snacks'
   * @param {string} dayType - 'training', 'rest', 'refeed'
   * @param {Object} macroTargets - { calories, protein, carbs, fat }
   * @returns {Object} Formatted meal matching Module-58 structure
   */
  getMealForUser(userData, mealType, dayType, macroTargets) {
    try {
      console.log(`[MealTemplateService] Getting ${mealType} for ${dayType} day`, macroTargets);
      
      // Get templates for this meal type
      let availableTemplates = mealTemplates.getTemplatesByMealType(mealType);
      
      if (!availableTemplates || availableTemplates.length === 0) {
        console.log(`[MealTemplateService] No templates found for meal type: ${mealType}`);
        return null; // Fallback to Module-58 original logic
      }

      // Apply filtering pipeline
      availableTemplates = this.filterByDiet(availableTemplates, userData.dietType);
      availableTemplates = this.applyRestrictions(availableTemplates, userData);
      
      if (availableTemplates.length === 0) {
        console.log(`[MealTemplateService] No templates match user criteria`);
        return null;
      }

      // Score and select best template
      const scoredTemplates = this.scoreTemplates(availableTemplates, userData, dayType);
      const selectedTemplate = scoredTemplates[0];
      
      console.log(`[MealTemplateService] Selected template: ${selectedTemplate.id} - ${selectedTemplate.name}`);
      
      // Scale template to match macro targets
      const scaledTemplate = this.scaleToMacros(selectedTemplate, macroTargets);
      
      // Convert to Module-58 format
      const formattedMeal = this.convertToModule58Format(scaledTemplate);
      
      // Track template usage
      this.trackTemplateUsage(selectedTemplate.id);
      
      return formattedMeal;
      
    } catch (error) {
      console.error('[MealTemplateService] Error generating meal:', error);
      return null; // Fallback to original logic
    }
  }

  /**
   * Filter templates by diet type with hierarchy support
   */
  filterByDiet(templates, dietType) {
    if (!dietType) return templates;
    
    // Diet hierarchy: vegan ⊂ vegetarian ⊂ pescatarian ⊂ omnivore
    const dietHierarchy = {
      'vegan': ['vegan'],
      'vegetarian': ['vegan', 'vegetarian'],
      'pescatarian': ['vegan', 'vegetarian', 'pescatarian'],
      'omnivore': ['vegan', 'vegetarian', 'pescatarian', 'omnivore']
    };
    
    const allowedDiets = dietHierarchy[dietType] || [dietType];
    
    return templates.filter(template => {
      return template.dietTypes.some(diet => allowedDiets.includes(diet));
    });
  }

  /**
   * Apply user restrictions (allergies, sensitivities, preferences)
   */
  applyRestrictions(templates, userData) {
    return templates.filter(template => {
      // Check gluten restriction
      if (userData.glutenRestriction === 'Yes') {
        if (this.templateContainsGluten(template)) return false;
      }
      
      // Check nut restriction
      if (userData.nutRestriction === 'Yes') {
        if (this.templateContainsNuts(template)) return false;
      }
      
      // Check gut sensitivities
      if (userData.gutSensitivities && userData.gutSensitivities.includes('IBS')) {
        if (this.templateContainsHighFODMAP(template)) return false;
      }
      
      // Check template-specific exclusions
      if (template.rules && template.rules.excludeIf) {
        const { restrictions, preferences } = template.rules.excludeIf;
        
        // Check restrictions
        if (restrictions && restrictions.length > 0) {
          if (restrictions.includes('gluten-allergy') && userData.glutenRestriction === 'Yes') return false;
          if (restrictions.includes('nut-allergy') && userData.nutRestriction === 'Yes') return false;
          if (restrictions.includes('lactose-intolerant') && userData.lactoseIntolerant === 'Yes') return false;
          if (restrictions.includes('egg-allergy') && userData.eggAllergy === 'Yes') return false;
          if (restrictions.includes('fish-allergy') && userData.fishAllergy === 'Yes') return false;
          if (restrictions.includes('shellfish-allergy') && userData.shellfishAllergy === 'Yes') return false;
          if (restrictions.includes('soy-allergy') && userData.soyAllergy === 'Yes') return false;
        }
        
        // Check preferences
        if (preferences && preferences.length > 0) {
          if (preferences.includes('no-dairy') && userData.avoidDairy === 'Yes') return false;
          if (preferences.includes('no-protein-powder') && userData.noProteinPowder === 'Yes') return false;
          if (preferences.includes('dislikes-eggs') && userData.dislikesEggs === 'Yes') return false;
          if (preferences.includes('no-fish') && userData.noFish === 'Yes') return false;
        }
      }
      
      return true;
    });
  }

  /**
   * Score templates based on user preferences and context
   */
  scoreTemplates(templates, userData, dayType) {
    const scoredTemplates = templates.map(template => {
      let score = 0;
      
      // Favorite foods match (10 points per favorite)
      score += this.calculateFavoriteScore(template, userData) * 10;
      
      // Workout timing appropriateness (5 points)
      if (dayType === 'training' && this.isGoodForWorkout(template, userData)) {
        score += 5;
      }
      
      // Complexity match to user preference (3 points)
      if (this.matchesComplexityPreference(template, userData)) {
        score += 3;
      }
      
      // Meal prep friendly bonus (2 points)
      if (userData.mealPrepPreference && template.complexity.mealPrepFriendly) {
        score += 2;
      }
      
      // Variety penalty (reduce score if used recently)
      const recentUsage = this.getRecentUsageScore(template.id);
      score -= recentUsage;
      
      return { ...template, score };
    });
    
    // Sort by score (highest first)
    return scoredTemplates.sort((a, b) => b.score - a.score);
  }

  /**
   * Scale template to match macro targets
   */
  scaleToMacros(template, macroTargets) {
    // Calculate base macros
    const baseMacros = this.calculateTemplateMacros(template);
    
    // Deep clone template to avoid mutations
    const scaledTemplate = JSON.parse(JSON.stringify(template));
    
    // Determine primary scaling factor based on method
    let scaleFactor = 1.0;
    
    switch (template.scaling.method) {
      case 'protein-first':
        scaleFactor = macroTargets.protein / baseMacros.protein;
        break;
      case 'carb-first':
        scaleFactor = macroTargets.carbs / baseMacros.carbs;
        break;
      case 'proportional':
        // Use calories as the primary driver
        scaleFactor = macroTargets.calories / baseMacros.calories;
        break;
      case 'fixed':
        // No scaling for fixed templates
        scaleFactor = 1.0;
        break;
      default:
        scaleFactor = macroTargets.calories / baseMacros.calories;
    }
    
    // Handle different template formats for scaling
    let pattern = scaledTemplate.pattern;
    if (typeof pattern === 'string' && scaledTemplate.template) {
      pattern = this.convertPostWorkoutTemplate(scaledTemplate.template);
      scaledTemplate.pattern = pattern; // Update the template with converted pattern
    }
    
    // Apply scaling to each component
    const { scalableComponents = [], minPortions, maxPortions } = template.scaling || {};
    
    Object.keys(pattern).forEach(component => {
      if (scalableComponents.includes(component)) {
        const items = pattern[component];
        // Skip if not an array
        if (!Array.isArray(items)) return;
        
        items.forEach(item => {
          // Calculate new amount
          let newAmount = item.amount * scaleFactor;
          
          // Apply min/max limits if specified
          if (minPortions && minPortions[component]) {
            const minAmount = item.amount * minPortions[component];
            newAmount = Math.max(newAmount, minAmount);
          }
          if (maxPortions && maxPortions[component]) {
            const maxAmount = item.amount * maxPortions[component];
            newAmount = Math.min(newAmount, maxAmount);
          }
          
          // Round to practical amounts
          item.amount = this.roundToReasonableAmount(newAmount, item.food);
        });
      }
    });
    
    // Log scaling results
    const scaledMacros = this.calculateTemplateMacros(scaledTemplate);
    console.log(`[MealTemplateService] Scaled from:`, baseMacros);
    console.log(`[MealTemplateService] Scaled to:`, scaledMacros);
    console.log(`[MealTemplateService] Scale factor: ${scaleFactor.toFixed(2)}`);
    
    return scaledTemplate;
  }

  /**
   * Calculate total macros for a template
   */
  calculateTemplateMacros(template) {
    let totals = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 };
    
    console.log(`[MealTemplateService] Calculating macros for template: ${template.name}`);
    
    // Handle different template formats
    let pattern = template.pattern;
    
    // If pattern is a string and template has a 'template' property, use that instead
    if (typeof pattern === 'string' && template.template) {
      console.log(`[MealTemplateService] Using template.template instead of pattern (post-workout format)`);
      // Convert the different structure to our expected format
      pattern = this.convertPostWorkoutTemplate(template.template);
    }
    
    if (!pattern || typeof pattern !== 'object') {
      console.error(`[MealTemplateService] Invalid template pattern:`, pattern);
      return totals;
    }
    
    // Process each component type
    Object.entries(pattern).forEach(([componentType, items]) => {
      // Skip if items is not an array
      if (!Array.isArray(items)) {
        console.log(`[MealTemplateService] Skipping ${componentType} - not an array`);
        return;
      }
      
      console.log(`[MealTemplateService] Processing ${componentType} with ${items.length} items`);
      
      items.forEach(item => {
        console.log(`[MealTemplateService] Looking up food: "${item.food}"`);
        const food = this.getFoodFromDatabase(item.food);
        if (food) {
          const macros = this.calculateFoodMacros(food, item.amount);
          totals.calories += macros.calories;
          totals.protein += macros.protein;
          totals.carbs += macros.carbs;
          totals.fat += macros.fat;
          totals.fiber += macros.fiber || 0;
        } else {
          console.log(`[MealTemplateService] Food not found: "${item.food}"`);
        }
      });
    });
    
    // Round totals
    Object.keys(totals).forEach(key => {
      totals[key] = Math.round(totals[key]);
    });
    
    return totals;
  }

  /**
   * Convert scaled template to Module-58 format
   */
  convertToModule58Format(scaledTemplate) {
    // Instead of using the components structure, convert directly to foods array
    const allFoods = [];
    
    // Handle different template formats
    let pattern = scaledTemplate.pattern;
    if (typeof pattern === 'string' && scaledTemplate.template) {
      pattern = this.convertPostWorkoutTemplate(scaledTemplate.template);
    }
    
    // Process ALL proteins (not just primary)
    if (pattern.proteins && pattern.proteins.length > 0) {
      pattern.proteins.forEach(proteinItem => {
        const food = this.getFoodFromDatabase(proteinItem.food);
        if (food) {
          const macros = this.calculateFoodMacros(food, proteinItem.amount);
          allFoods.push({
            name: proteinItem.food,
            amount: this.formatDisplayAmount(food, proteinItem.amount),
            calories: Math.round(macros.calories),
            protein: Math.round(macros.protein),
            carbs: Math.round(macros.carbs),
            fats: Math.round(macros.fat),
            fiber: Math.round(macros.fiber || 0)
          });
        }
      });
    }
    
    // Process ALL carbs
    if (pattern.carbs && pattern.carbs.length > 0) {
      pattern.carbs.forEach(carbItem => {
        const food = this.getFoodFromDatabase(carbItem.food);
        if (food) {
          const macros = this.calculateFoodMacros(food, carbItem.amount);
          allFoods.push({
            name: carbItem.food,
            amount: this.formatDisplayAmount(food, carbItem.amount),
            calories: Math.round(macros.calories),
            protein: Math.round(macros.protein),
            carbs: Math.round(macros.carbs),
            fats: Math.round(macros.fat),
            fiber: Math.round(macros.fiber || 0)
          });
        }
      });
    }
    
    // Process ALL vegetables
    if (pattern.vegetables && Array.isArray(pattern.vegetables)) {
      pattern.vegetables.forEach(veg => {
        const food = this.getFoodFromDatabase(veg.food);
        if (food) {
          const macros = this.calculateFoodMacros(food, veg.amount);
          allFoods.push({
            name: veg.food,
            amount: this.formatDisplayAmount(food, veg.amount),
            calories: Math.round(macros.calories),
            protein: Math.round(macros.protein),
            carbs: Math.round(macros.carbs),
            fats: Math.round(macros.fat),
            fiber: Math.round(macros.fiber || 0)
          });
        }
      });
    }
    
    // Process ALL fats
    if (pattern.fats && pattern.fats.length > 0) {
      pattern.fats.forEach(fatItem => {
        const food = this.getFoodFromDatabase(fatItem.food);
        if (food) {
          const macros = this.calculateFoodMacros(food, fatItem.amount);
          allFoods.push({
            name: fatItem.food,
            amount: this.formatDisplayAmount(food, fatItem.amount),
            calories: Math.round(macros.calories),
            protein: Math.round(macros.protein),
            carbs: Math.round(macros.carbs),
            fats: Math.round(macros.fat),
            fiber: Math.round(macros.fiber || 0)
          });
        }
      });
    }
    
    // Process fruits and extras
    if (pattern.fruits && Array.isArray(pattern.fruits)) {
      pattern.fruits.forEach(fruit => {
        const food = this.getFoodFromDatabase(fruit.food);
        if (food) {
          const macros = this.calculateFoodMacros(food, fruit.amount);
          allFoods.push({
            name: fruit.food,
            amount: this.formatDisplayAmount(food, fruit.amount),
            calories: Math.round(macros.calories),
            protein: Math.round(macros.protein),
            carbs: Math.round(macros.carbs),
            fats: Math.round(macros.fat),
            fiber: Math.round(macros.fiber || 0)
          });
        }
      });
    }
    
    if (pattern.extras && Array.isArray(pattern.extras)) {
      pattern.extras.forEach(extra => {
        const food = this.getFoodFromDatabase(extra.food);
        if (food) {
          const macros = this.calculateFoodMacros(food, extra.amount);
          allFoods.push({
            name: extra.food,
            amount: this.formatDisplayAmount(food, extra.amount),
            calories: Math.round(macros.calories),
            protein: Math.round(macros.protein),
            carbs: Math.round(macros.carbs),
            fats: Math.round(macros.fat),
            fiber: Math.round(macros.fiber || 0)
          });
        }
      });
    }
    
    // Calculate totals from all foods
    const totals = {
      calories: allFoods.reduce((sum, food) => sum + food.calories, 0),
      protein: allFoods.reduce((sum, food) => sum + food.protein, 0),
      carbs: allFoods.reduce((sum, food) => sum + food.carbs, 0),
      fats: allFoods.reduce((sum, food) => sum + food.fats, 0),
      fiber: allFoods.reduce((sum, food) => sum + food.fiber, 0)
    };
    
    return {
      number: 1, // Will be set by caller
      name: scaledTemplate.name,
      foods: allFoods, // Return foods array directly
      totals,
      notes: scaledTemplate.notes || '',
      templateId: scaledTemplate.id // For tracking
    };
  }

  // ==================== Helper Methods ====================

  /**
   * Get food from database with fallback
   */
  getFoodFromDatabase(foodName) {
    if (!this.foodDB) {
      console.error(`[MealTemplateService] Food database not initialized!`);
      return null;
    }
    
    if (!this.foodDB.findFood) {
      console.error(`[MealTemplateService] Food database does not have findFood method!`);
      return null;
    }
    
    const food = this.foodDB.findFood(foodName);
    if (!food) {
      // Try common name mappings
      const nameMapping = {
        'White Rice Cakes': 'Rice Cakes (Plain)',
        'Dextrose/Maltodextrin': 'Dextrose',
        'Rolled Oats': 'Oats (Rolled)', // Map to exact database name
        'Olive Oil (Extra Virgin)': 'Olive Oil',
        'Lean Ground Beef (93/7)': 'Lean Beef Mince (5%)',
        'Ground Turkey (93/7)': 'Turkey Mince (93/7)', // Fixed mapping
        'Mixed Nuts': 'Almonds', // Fallback to a common nut
        'Baby Spinach': 'Spinach',
        'Chili Base': 'Tomato Sauce (Canned)', // Chili base substitute
        'Shredded Cheddar': 'Cheese (Cheddar)', // Fixed mapping
        'Dates (chopped)': 'Dates (Medjool)', // Map to available dates
        'Dark Chocolate Chips': 'Dark Chocolate (70%)', // Map to available chocolate
        'Protein Powder': 'Egg White Protein Powder', // Map generic protein powder to specific type
        'None': null, // Skip "None" entries
        'None (avoid post-workout)': null
      };
      
      // Check if we have a direct mapping
      if (nameMapping.hasOwnProperty(foodName)) {
        const mappedName = nameMapping[foodName];
        if (mappedName === null) {
          return null; // Skip this food
        }
        const mappedFood = this.foodDB.findFood(mappedName);
        if (mappedFood) {
          console.log(`[MealTemplateService] Found food with mapping: ${foodName} -> ${mappedName}`);
          return mappedFood;
        }
      }
      
      console.warn(`[MealTemplateService] Food not found in database: ${foodName}`);
    }
    return food;
  }

  /**
   * Calculate macros for a specific amount of food
   */
  calculateFoodMacros(food, amount) {
    // Database values are per 100g (or per quantity specified)
    const scaleFactor = amount / (food.quantity || 100);
    
    return {
      calories: food.calories * scaleFactor,
      protein: food.protein * scaleFactor,
      carbs: food.carbs * scaleFactor,
      fat: food.fat * scaleFactor,
      fiber: (food.fiber || 0) * scaleFactor
    };
  }

  /**
   * Check if food violates any restrictions
   */
  checkFoodRestrictions(foodName, restrictions) {
    const food = this.getFoodFromDatabase(foodName);
    if (!food) return false;
    
    // Check allergen concerns
    if (food.allergenConcerns) {
      const allergens = food.allergenConcerns.toLowerCase();
      
      if (restrictions.gluten && allergens.includes('gluten')) return true;
      if (restrictions.nuts && (allergens.includes('nut') || allergens.includes('peanut'))) return true;
      if (restrictions.dairy && (allergens.includes('dairy') || allergens.includes('milk'))) return true;
      if (restrictions.eggs && allergens.includes('egg')) return true;
      if (restrictions.soy && allergens.includes('soy')) return true;
      if (restrictions.shellfish && allergens.includes('shellfish')) return true;
    }
    
    return false;
  }

  /**
   * Format display amount with raw/cooked conversion
   */
  formatDisplayAmount(food, amount) {
    if (!food.hasRawState || !food.rawToCookedRatio) {
      // Simple case - no raw state
      if (food.displayUnit) {
        return `${amount}${food.displayUnit}`;
      }
      return `${amount}g`;
    }
    
    // Calculate cooked weight from raw
    const cookedAmount = Math.round(amount / food.rawToCookedRatio);
    
    // Format based on whether we're showing raw or cooked as primary
    if (food.state === 'raw') {
      return `${amount}g raw (${cookedAmount}g cooked)`;
    } else {
      // If database shows cooked as primary, amount is already cooked
      const rawAmount = Math.round(amount * food.rawToCookedRatio);
      return `${rawAmount}g raw (${amount}g cooked)`;
    }
  }

  // ==================== Template Analysis Helpers ====================

  /**
   * Check if template contains gluten
   */
  templateContainsGluten(template) {
    const glutenFoods = ['bread', 'pasta', 'wheat', 'flour', 'cereal', 'oats'];
    
    return Object.values(template.pattern).some(items => 
      items.some(item => 
        glutenFoods.some(gluten => item.food.toLowerCase().includes(gluten))
      )
    );
  }

  /**
   * Check if template contains nuts
   */
  templateContainsNuts(template) {
    const nutFoods = ['almond', 'peanut', 'cashew', 'walnut', 'pecan', 'nut butter', 'nuts'];
    
    return Object.values(template.pattern).some(items => 
      items.some(item => 
        nutFoods.some(nut => item.food.toLowerCase().includes(nut))
      )
    );
  }

  /**
   * Check if template contains high FODMAP foods
   */
  templateContainsHighFODMAP(template) {
    const highFODMAP = ['garlic', 'onion', 'apple', 'wheat', 'milk', 'beans', 'lentils'];
    
    return Object.values(template.pattern).some(items => 
      items.some(item => 
        highFODMAP.some(fodmap => item.food.toLowerCase().includes(fodmap))
      )
    );
  }

  /**
   * Calculate favorite food score
   */
  calculateFavoriteScore(template, userData) {
    let score = 0;
    const allFavorites = [
      ...(userData.favProteinArray || userData.favProteins || []),
      ...(userData.favCarbArray || userData.favCarbs || []),
      ...(userData.favVeggieArray || userData.favVeggies || [])
    ];
    
    Object.values(template.pattern).forEach(items => {
      // Skip if items is not an array
      if (!Array.isArray(items)) return;
      
      items.forEach(item => {
        if (allFavorites.some(fav => 
          item.food.toLowerCase().includes(fav.toLowerCase()) ||
          fav.toLowerCase().includes(item.food.toLowerCase())
        )) {
          score += 1;
        }
      });
    });
    
    return score;
  }

  /**
   * Check if template is good for workout timing
   */
  isGoodForWorkout(template, userData) {
    const timing = userData.workoutTiming || 'anytime';
    const templateTiming = template.workoutTiming;
    
    if (templateTiming === 'anytime') return true;
    if (timing === 'morning' && templateTiming === 'pre-early') return true;
    if (timing === 'pre-workout' && templateTiming.includes('pre')) return true;
    if (timing === 'post-workout' && templateTiming === 'post') return true;
    
    return false;
  }

  /**
   * Check if template matches user's complexity preference
   */
  matchesComplexityPreference(template, userData) {
    const userPref = userData.cookingTime || 'moderate';
    const templateComplexity = template.complexity.level;
    
    const complexityMap = {
      'minimal': ['on-the-go', 'simple'],
      'moderate': ['simple', 'moderate'],
      'extensive': ['moderate', 'complex']
    };
    
    return complexityMap[userPref]?.includes(templateComplexity) || false;
  }

  /**
   * Get recent usage penalty score
   */
  getRecentUsageScore(templateId) {
    const lastUsed = this.recentlyUsedTemplates.get(templateId);
    if (!lastUsed) return 0;
    
    const hoursSinceUse = (Date.now() - lastUsed) / (1000 * 60 * 60);
    
    // Penalty decreases over time
    if (hoursSinceUse < 24) return 10; // Same day
    if (hoursSinceUse < 72) return 5;  // Within 3 days
    if (hoursSinceUse < 168) return 2; // Within a week
    
    return 0;
  }

  /**
   * Track template usage for variety
   */
  trackTemplateUsage(templateId) {
    this.recentlyUsedTemplates.set(templateId, Date.now());
    
    // Clean up old entries (older than 2 weeks)
    const twoWeeksAgo = Date.now() - (14 * 24 * 60 * 60 * 1000);
    for (const [id, timestamp] of this.recentlyUsedTemplates) {
      if (timestamp < twoWeeksAgo) {
        this.recentlyUsedTemplates.delete(id);
      }
    }
  }

  /**
   * Convert post-workout template format to standard format
   */
  convertPostWorkoutTemplate(template) {
    const pattern = {
      proteins: [],
      carbs: [],
      vegetables: [],
      fats: [],
      extras: []
    };
    
    // Convert proteins
    if (template.proteins) {
      if (template.proteins.primary && template.proteins.primary.name !== 'None (avoid post-workout)') {
        pattern.proteins.push({
          food: template.proteins.primary.name,
          amount: template.proteins.primary.baseAmount,
          required: true
        });
      }
      if (template.proteins.secondary) {
        pattern.proteins.push({
          food: template.proteins.secondary.name,
          amount: template.proteins.secondary.baseAmount,
          required: false
        });
      }
    }
    
    // Convert carbs
    if (template.carbs) {
      if (template.carbs.primary) {
        pattern.carbs.push({
          food: template.carbs.primary.name,
          amount: template.carbs.primary.baseAmount,
          required: true
        });
      }
      if (template.carbs.secondary) {
        pattern.carbs.push({
          food: template.carbs.secondary.name,
          amount: template.carbs.secondary.baseAmount,
          required: false
        });
      }
      if (template.carbs.tertiary) {
        pattern.carbs.push({
          food: template.carbs.tertiary.name,
          amount: template.carbs.tertiary.baseAmount,
          required: false
        });
      }
    }
    
    // Convert fats
    if (template.fats) {
      if (template.fats.primary) {
        pattern.fats.push({
          food: template.fats.primary.name,
          amount: template.fats.primary.baseAmount,
          required: true
        });
      }
      if (template.fats.secondary) {
        pattern.fats.push({
          food: template.fats.secondary.name,
          amount: template.fats.secondary.baseAmount,
          required: false
        });
      }
    }
    
    // Convert vegetables
    if (template.vegetables) {
      if (template.vegetables.primary) {
        pattern.vegetables.push({
          food: template.vegetables.primary.name,
          amount: template.vegetables.primary.baseAmount,
          required: false
        });
      }
      if (template.vegetables.secondary) {
        pattern.vegetables.push({
          food: template.vegetables.secondary.name,
          amount: template.vegetables.secondary.baseAmount,
          required: false
        });
      }
    }
    
    return pattern;
  }

  /**
   * Round amounts to reasonable values
   */
  roundToReasonableAmount(amount, foodName) {
    // For liquids (oils, sauces)
    if (foodName.toLowerCase().includes('oil') || foodName.toLowerCase().includes('sauce')) {
      return Math.round(amount * 2) / 2; // Round to nearest 0.5
    }
    
    // For small amounts (spices, seasonings)
    if (amount < 10) {
      return Math.round(amount);
    }
    
    // For medium amounts (50-200g)
    if (amount < 200) {
      return Math.round(amount / 5) * 5; // Round to nearest 5g
    }
    
    // For large amounts
    return Math.round(amount / 10) * 10; // Round to nearest 10g
  }

  /**
   * Calculate totals from components
   */
  calculateComponentTotals(components) {
    const totals = { calories: 0, protein: 0, carbs: 0, fats: 0, fiber: 0 };
    
    // Sum all components
    Object.values(components).forEach(component => {
      if (Array.isArray(component)) {
        component.forEach(item => {
          totals.calories += item.calories || 0;
          totals.protein += item.protein || 0;
          totals.carbs += item.carbs || 0;
          totals.fats += item.fats || 0;
          totals.fiber += item.fiber || 0;
        });
      } else if (component && component.calories !== undefined) {
        totals.calories += component.calories || 0;
        totals.protein += component.protein || 0;
        totals.carbs += component.carbs || 0;
        totals.fats += component.fats || 0;
        totals.fiber += component.fiber || 0;
      }
    });
    
    // Round all values
    Object.keys(totals).forEach(key => {
      totals[key] = Math.round(totals[key]);
    });
    
    return totals;
  }
}

module.exports = MealTemplateService; 