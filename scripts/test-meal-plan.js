// ==================================================================================
// 🧪 TEST MEAL PLAN GENERATION
// ==================================================================================
// This script tests the meal plan generation with correct targets
// ==================================================================================

const { buildPersonalizedNutritionPlan } = require('./src/modules/Module-5-Meal-Plan');

// Use the same userData and targets from the working calculation test
const userData = {
  first_name: "John",
  last_name: "Doe",
  email: "test@example.com",
  gender: "Male",
  age: 25,
  height: "175",
  weight: 70,
  weightUnit: "kg",
  goal: "Build Muscle",
  activityLevel: "Moderate",
  trainingDays: 4,
  resultsTimeline: "Moderate",
  currentCarbIntake: "150-200g",
  experience300gCarbs: "Never",
  carbResponse: "Good",
  mealPlanExperience: "Beginner",
  favProteins: ["Chicken", "Salmon", "Eggs"],
  favCarbs: ["Rice", "Sweet Potato", "Oats"],
  favFats: ["Avocado", "Nuts", "Olive Oil"],
  dietaryPreference: "Standard",
  dietaryIssues: [],
  allergies: [],
  intolerances: [],
  methodology: "moderate"
};

const targets = {
  bmr: 1674,
  maintenance_calories: 2594,
  timeline_approach: "Moderate",
  age_bracket: "22-32",
  age_adjusted: false,
  methodology: "moderate",
  training_day: {
    calories: 2595,
    protein: 154,
    carbs: 260,
    fat: 104,
    hierarchical: {
      protein_minimum: 154,
      carb_range: { min: 252, max: 267 },
      fiber_range: { min: 32, max: 40 },
      fat_minimum: 42,
      fat_soft_ceiling: 101,
      fat_flexible: true
    }
  },
  rest_day: {
    calories: 2205,
    protein: 154,
    carbs: 193,
    fat: 91,
    hierarchical: {
      protein_minimum: 154,
      carb_range: { min: 185, max: 200 },
      fiber_range: { min: 27, max: 35 },
      fat_minimum: 42,
      fat_soft_ceiling: 86,
      fat_flexible: true
    }
  },
  refeed_day: {
    calories: 2855,
    protein: 154,
    carbs: 357,
    fat: 90,
    hierarchical: {
      protein_minimum: 154,
      carb_range: { min: 352, max: 362 },
      fiber_range: { min: 36, max: 44 },
      fat_minimum: 42,
      fat_soft_ceiling: 111,
      fat_flexible: true
    }
  }
};

console.log('🧪 Testing meal plan generation...');
console.log('📊 Input targets:', JSON.stringify(targets, null, 2));
console.log('👤 Input userData:', JSON.stringify(userData, null, 2));

try {
  const mealPlanHTML = buildPersonalizedNutritionPlan(targets, userData);
  console.log('✅ Meal plan generation successful!');
  console.log('📄 HTML length:', mealPlanHTML.length);
  console.log('📄 HTML preview:', mealPlanHTML.substring(0, 500) + '...');
  
} catch (error) {
  console.error('❌ Meal plan generation failed:', error);
} 