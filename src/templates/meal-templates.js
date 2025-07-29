// Main Meal Templates Module
// Aggregates all meal templates and provides access functions

const { uponWakingTemplates } = require('./meal-templates-upon-waking');
const { dayMealsTemplates } = require('./meal-templates-day-meals');
const { dinnerTemplates } = require('./meal-templates-dinner');
const { postWorkoutTemplates } = require('./meal-templates-post-workout');
const { snacksTemplates } = require('./meal-templates-snacks');

// Aggregate all templates
const allTemplates = {
  upon_waking: uponWakingTemplates,
  day_meals: dayMealsTemplates,
  dinner: dinnerTemplates,
  post_workout: postWorkoutTemplates,
  snacks: snacksTemplates
};

// Get template by ID
function getTemplateById(templateId) {
  for (const category of Object.values(allTemplates)) {
    const template = category.find(t => t.id === templateId);
    if (template) return template;
  }
  return null;
}

// Get templates by meal type
function getTemplatesByMealType(mealType) {
  return allTemplates[mealType] || [];
}

// Get templates by category
function getTemplatesByCategory(category) {
  const results = [];
  for (const templates of Object.values(allTemplates)) {
    results.push(...templates.filter(t => t.categories.includes(category)));
  }
  return results;
}

// Get templates by diet type
function getTemplatesByDietType(dietType) {
  const results = [];
  for (const templates of Object.values(allTemplates)) {
    results.push(...templates.filter(t => t.dietTypes.includes(dietType)));
  }
  return results;
}

// Get templates suitable for workout timing
function getTemplatesByWorkoutTiming(timing, relation = 'preWorkout') {
  const results = [];
  for (const templates of Object.values(allTemplates)) {
    results.push(...templates.filter(t => {
      const workoutTiming = t.workoutTiming[relation];
      if (!workoutTiming || workoutTiming === 'never' || workoutTiming === 'not_recommended') {
        return false;
      }
      if (workoutTiming === 'anytime' || workoutTiming === 'excellent' || workoutTiming === 'ideal') {
        return true;
      }
      // Parse timing ranges like "60-90min"
      if (workoutTiming.includes('min')) {
        const match = workoutTiming.match(/(\d+)(-(\d+))?min/);
        if (match) {
          const minTime = parseInt(match[1]);
          const maxTime = match[3] ? parseInt(match[3]) : minTime;
          return timing >= minTime && timing <= maxTime;
        }
      }
      return false;
    }));
  }
  return results;
}

// Get templates by complexity
function getTemplatesByComplexity(complexity) {
  const results = [];
  for (const templates of Object.values(allTemplates)) {
    results.push(...templates.filter(t => t.complexity === complexity));
  }
  return results;
}

// Get templates by sauce preference
function getTemplatesBySaucePreference(preference) {
  const results = [];
  for (const templates of Object.values(allTemplates)) {
    results.push(...templates.filter(t => t.saucePreference === preference));
  }
  return results;
}

// Get templates within calorie range
function getTemplatesByCalorieRange(minCalories, maxCalories) {
  const results = [];
  for (const templates of Object.values(allTemplates)) {
    results.push(...templates.filter(t => {
      const [min, max] = t.scaling.calorieRange;
      return min >= minCalories && max <= maxCalories;
    }));
  }
  return results;
}

// Search templates by name or ingredients
function searchTemplates(searchTerm) {
  const term = searchTerm.toLowerCase();
  const results = [];
  
  for (const templates of Object.values(allTemplates)) {
    results.push(...templates.filter(t => {
      // Check name
      if (t.name.toLowerCase().includes(term)) return true;
      
      // Check main ingredients
      const checkIngredient = (ingredient) => {
        return ingredient && ingredient.name && ingredient.name.toLowerCase().includes(term);
      };
      
      // Check proteins
      if (t.template.proteins) {
        if (checkIngredient(t.template.proteins.primary)) return true;
        if (checkIngredient(t.template.proteins.secondary)) return true;
      }
      
      // Check carbs
      if (t.template.carbs) {
        if (checkIngredient(t.template.carbs.primary)) return true;
        if (checkIngredient(t.template.carbs.secondary)) return true;
      }
      
      // Check alternatives
      if (t.alternatives) {
        for (const altList of Object.values(t.alternatives)) {
          if (Array.isArray(altList) && altList.some(alt => alt.toLowerCase().includes(term))) {
            return true;
          }
        }
      }
      
      return false;
    }));
  }
  
  return results;
}

// Get random template from specific meal type
function getRandomTemplate(mealType, filters = {}) {
  let templates = getTemplatesByMealType(mealType);
  
  // Apply filters
  if (filters.category) {
    templates = templates.filter(t => t.categories.includes(filters.category));
  }
  if (filters.dietType) {
    templates = templates.filter(t => t.dietTypes.includes(filters.dietType));
  }
  if (filters.complexity) {
    templates = templates.filter(t => t.complexity === filters.complexity);
  }
  if (filters.maxCalories) {
    templates = templates.filter(t => t.scaling.calorieRange[0] <= filters.maxCalories);
  }
  
  if (templates.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * templates.length);
  return templates[randomIndex];
}

// Get template statistics
function getTemplateStats() {
  const stats = {
    totalTemplates: 0,
    byMealType: {},
    byCategory: {},
    byDietType: {},
    byComplexity: {},
    averageCalorieRange: { min: 0, max: 0 }
  };
  
  let totalMinCalories = 0;
  let totalMaxCalories = 0;
  
  for (const [mealType, templates] of Object.entries(allTemplates)) {
    stats.totalTemplates += templates.length;
    stats.byMealType[mealType] = templates.length;
    
    templates.forEach(template => {
      // Categories
      template.categories.forEach(cat => {
        stats.byCategory[cat] = (stats.byCategory[cat] || 0) + 1;
      });
      
      // Diet types
      template.dietTypes.forEach(diet => {
        stats.byDietType[diet] = (stats.byDietType[diet] || 0) + 1;
      });
      
      // Complexity
      stats.byComplexity[template.complexity] = (stats.byComplexity[template.complexity] || 0) + 1;
      
      // Calories
      totalMinCalories += template.scaling.calorieRange[0];
      totalMaxCalories += template.scaling.calorieRange[1];
    });
  }
  
  stats.averageCalorieRange.min = Math.round(totalMinCalories / stats.totalTemplates);
  stats.averageCalorieRange.max = Math.round(totalMaxCalories / stats.totalTemplates);
  
  return stats;
}

// Scale template to target calories
function scaleTemplateToCalories(template, targetCalories) {
  const [minCal, maxCal] = template.scaling.calorieRange;
  
  // Check if target is within range
  if (targetCalories < minCal || targetCalories > maxCal) {
    console.warn(`Target calories ${targetCalories} outside template range ${minCal}-${maxCal}`);
  }
  
  // Calculate scaling factor
  const midpointCal = (minCal + maxCal) / 2;
  const scaleFactor = targetCalories / midpointCal;
  
  // Deep clone the template
  const scaledTemplate = JSON.parse(JSON.stringify(template));
  
  // Scale ingredients
  const scaleIngredient = (ingredient) => {
    if (!ingredient || !ingredient.baseAmount) return;
    
    const newAmount = Math.round(ingredient.baseAmount * scaleFactor);
    
    // Respect min/max if specified
    if (ingredient.scaling) {
      ingredient.baseAmount = Math.max(
        ingredient.scaling.min || 0,
        Math.min(ingredient.scaling.max || Infinity, newAmount)
      );
    } else {
      ingredient.baseAmount = newAmount;
    }
  };
  
  // Scale all components
  ['proteins', 'carbs', 'fats', 'vegetables'].forEach(category => {
    if (scaledTemplate.template[category]) {
      Object.values(scaledTemplate.template[category]).forEach(scaleIngredient);
    }
  });
  
  // Add scaling info
  scaledTemplate.scaledTo = targetCalories;
  scaledTemplate.scaleFactor = scaleFactor;
  
  return scaledTemplate;
}

// Export all functions and data
module.exports = {
  // Raw template data
  allTemplates,
  uponWakingTemplates,
  dayMealsTemplates,
  dinnerTemplates,
  postWorkoutTemplates,
  snacksTemplates,
  
  // Access functions
  getTemplateById,
  getTemplatesByMealType,
  getTemplatesByCategory,
  getTemplatesByDietType,
  getTemplatesByWorkoutTiming,
  getTemplatesByComplexity,
  getTemplatesBySaucePreference,
  getTemplatesByCalorieRange,
  searchTemplates,
  getRandomTemplate,
  getTemplateStats,
  scaleTemplateToCalories,
  
  // Constants for reference
  MEAL_TYPES: ['upon_waking', 'day_meals', 'dinner', 'post_workout', 'snacks'],
  DIET_TYPES: ['omnivore', 'vegetarian', 'vegan', 'pescatarian', 'gluten_free', 'dairy_free', 'keto', 'keto_friendly', 'paleo_friendly', 'low_carb', 'whole30'],
  COMPLEXITIES: ['simple', 'moderate', 'complex'],
  SAUCE_PREFERENCES: ['none', 'minimal', 'light', 'moderate', 'heavy']
};