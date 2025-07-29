// Test Navigation UI Changes
const { calculateNutritionTargets } = require('./Module-51-Calculations');
const { buildPersonalizedNutritionPlan } = require('./Module-58-Meal-Plan');
const fs = require('fs');

// Test user data
const testUser = {
  first_name: "Sarah",
  last_name: "Johnson", 
  email: "sarah@example.com",
  gender: "female",
  age: 28,
  weight: 65,
  weightUnit: "kg",
  height: "165",
  activityLevel: "moderate",
  primaryGoal: "muscle",
  methodology: "moderate",
  favProteins: ["Chicken Breast", "Greek Yogurt"],
  favCarbs: ["Sweet Potato", "Oats"],
  favFats: ["Avocado", "Almonds"],
  dayType: "training_day"
};

console.log('🎨 Generating test UI with navigation changes...');

try {
  // Calculate targets
  const targets = calculateNutritionTargets(testUser);
  
  console.log('Targets structure:', JSON.stringify(targets, null, 2));
  
  // Generate HTML with full targets structure
  const mealPlanHTML = buildPersonalizedNutritionPlan(targets, testUser);

  // Save to local file for viewing
  fs.writeFileSync('test-navigation-preview.html', mealPlanHTML);

  console.log('✅ UI saved to: test-navigation-preview.html');
  console.log('📱 Open this file in your browser to test the navigation!');
  console.log('');
  console.log('🔍 Test the following:');
  console.log('1. Calendar strip should be removed');
  console.log('2. Day header should have < and > navigation arrows');
  console.log('3. Clicking arrows should cycle through days');
  console.log('4. Page should load on today\'s day automatically');
} catch (error) {
  console.error('❌ Error generating test UI:', error);
}