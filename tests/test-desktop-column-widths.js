// Test Desktop Column Width Changes
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

console.log('🎨 Generating test UI with desktop column width changes...');

try {
  // Calculate targets
  const targets = calculateNutritionTargets(testUser);
  
  console.log('Targets structure:', JSON.stringify(targets, null, 2));
  
  // Generate HTML with full targets structure
  const mealPlanHTML = buildPersonalizedNutritionPlan(targets, testUser);

  // Save to local file for viewing
  fs.writeFileSync('test-desktop-columns.html', mealPlanHTML);

  console.log('✅ UI saved to: test-desktop-columns.html');
  console.log('🖥️  Open this file in desktop view to test the column widths!');
  console.log('');
  console.log('📏 Column width changes:');
  console.log('- Day navigation: 500px (increased from 400px)');
  console.log('- Macro columns: Reduced font sizes and spacing');
  console.log('- Total layout should be better balanced');
} catch (error) {
  console.error('❌ Error generating test UI:', error);
}