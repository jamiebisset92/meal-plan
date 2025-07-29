// ==================================================================================
// 🧪 TEST CALCULATION FUNCTION
// ==================================================================================
// This script tests the calculation function with sample data
// ==================================================================================

const { calculateNutritionTargets } = require('./src/modules/Module-1-Calculations');

// Sample user data (matching what we send in the webhook)
const testUserData = {
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

console.log('🧪 Testing calculation function...');
console.log('📊 Input userData:', JSON.stringify(testUserData, null, 2));

try {
  const targets = calculateNutritionTargets(testUserData);
  console.log('✅ Calculation successful!');
  console.log('📊 Full targets object:', JSON.stringify(targets, null, 2));
  
  if (targets.training_day) {
    console.log('🎯 Training day targets:', JSON.stringify(targets.training_day, null, 2));
  } else {
    console.log('❌ No training_day in targets');
  }
  
  if (targets.rest_day) {
    console.log('🎯 Rest day targets:', JSON.stringify(targets.rest_day, null, 2));
  } else {
    console.log('❌ No rest_day in targets');
  }
  
} catch (error) {
  console.error('❌ Calculation failed:', error);
} 