/**
 * Test Template Integration
 * Verifies that MealTemplateService is properly integrated into Module-58
 */

const { calculateNutritionTargets } = require('./Module-51-Calculations');
const { buildPersonalizedNutritionPlan } = require('./Module-58-Meal-Plan');
const foodDatabase = require('./food-database-loader');

// Check if food database is loaded
console.log('🔍 Checking food database...');
console.log(`   Foods loaded: ${foodDatabase.foods ? foodDatabase.foods.length : 'NOT LOADED'}`);
console.log(`   Has findFood method: ${typeof foodDatabase.findFood === 'function'}`);
console.log(`   foodsByName size: ${foodDatabase.foodsByName ? foodDatabase.foodsByName.size : 'NOT INITIALIZED'}`);

// Check what's in the map
if (foodDatabase.foodsByName && foodDatabase.foodsByName.size > 0) {
  console.log('   Sample foods in map:');
  let count = 0;
  for (const [key, value] of foodDatabase.foodsByName) {
    if (count++ < 5) {
      console.log(`     "${key}" -> "${value.name}"`);
    }
  }
}

// Test finding some foods
const testFoods = ['Chicken Breast', 'Rice Cakes (Plain)', 'Whey Protein Isolate', 'Banana'];
testFoods.forEach(food => {
  const found = foodDatabase.findFood(food);
  console.log(`   ${food}: ${found ? '✅ Found' : '❌ Not found'}`);
});

// Test user with dietary preferences that should match templates
const testUser = {
  first_name: "Test",
  last_name: "User",
  email: "test@example.com",
  gender: "female",
  age: 28,
  weight: 65,
  weightUnit: "kg",
  height: "165",
  activityLevel: "moderate",
  primaryGoal: "muscle",
  methodology: "moderate",
  
  // Dietary preferences
  dietType: "omnivore",
  dietaryStyle: "No Restrictions: Animal based products are fine",
  glutenRestriction: "No",
  nutRestriction: "No",
  gutSensitivities: [],
  
  // Favorite foods that should match templates
  favProteins: ["Greek Yogurt", "Chicken Breast", "Salmon"],
  favCarbs: ["Rolled Oats", "Sweet Potato", "White Rice"],
  favFats: ["Almond Butter", "Avocado", "Olive Oil"],
  favVeggies: ["Broccoli", "Spinach"],
  
  // Meal preferences
  numberOfMeals: 4,
  cookingTime: "moderate",
  mealPrepPreference: true,
  
  // Enable post-workout
  proteinPowder: "Yes, I already use protein powder regularly",
  additionalSupplements: "Yes, I'm interested in any & all recommendations",
  
  // Coffee preferences
  drinksCoffee: "Yes",
  numberOfCoffees: "2",
  coffeeMilkSugar: "with milk"
};

async function testTemplateIntegration() {
  console.log('🧪 Testing Template Integration\n');
  console.log('=====================================\n');
  
  try {
    // Test different day types
    const dayTypes = ['training', 'rest'];
    
    for (const dayType of dayTypes) {
      console.log(`\n🏃 Testing ${dayType.toUpperCase()} day...`);
      console.log('=====================================');
      
      // Add currentDayType to userData
      const userData = { ...testUser, currentDayType: dayType };
      
      // Calculate nutrition targets
      const targets = calculateNutritionTargets(userData);
      console.log(`📊 Calculated targets for ${dayType} day:`);
      console.log(`   Calories: ${targets[dayType + '_day'].calories}`);
      console.log(`   Protein: ${targets[dayType + '_day'].protein}g`);
      console.log(`   Carbs: ${targets[dayType + '_day'].carbs}g`);
      console.log(`   Fat: ${targets[dayType + '_day'].fat}g`);
      
      // Generate meal plan
      console.log('\n🍽️ Generating meal plan...');
      const mealPlanHTML = buildPersonalizedNutritionPlan(targets, userData);
      
      // Check if HTML was generated
      if (mealPlanHTML && mealPlanHTML.includes('<html')) {
        console.log('✅ HTML generated successfully');
        
        // Extract some info from the console logs
        // (In a real test, we'd parse the HTML or return structured data)
        console.log('📋 Check console output above for template usage summary');
        
        // Save HTML for manual inspection
        const fs = require('fs');
        const filename = `test-template-${dayType}-output.html`;
        fs.writeFileSync(filename, mealPlanHTML);
        console.log(`💾 HTML saved to: ${filename}`);
      } else {
        console.error('❌ Failed to generate HTML');
      }
    }
    
    console.log('\n\n✅ Template integration test complete!');
    console.log('Check the console output above for template usage statistics.');
    console.log('Open the generated HTML files to inspect the meal plans.');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    console.error(error.stack);
  }
}

// Run the test
testTemplateIntegration().catch(console.error); 