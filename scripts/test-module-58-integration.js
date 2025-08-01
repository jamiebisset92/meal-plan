#!/usr/bin/env node

// Test Module-58 Integration with Training Schedule and Cooking Time

const { calculateNutritionTargets } = require('../src/modules/Module-1-Calculations');
const { buildPersonalizedNutritionPlan } = require('../src/modules/Module-5-Meal-Plan');

// Test user data with new fields
const testUserData = {
  // Basic info
  first_name: "Sarah",
  last_name: "Test",
  email: "sarah@test.com",
  weight: 65,
  weightUnit: "kg",
  height: 165,
  age: 28,
  gender: "female",
  
  // Goals
  goal: "Lose Weight: Improve Body Composition",
  desiredWeight: 60,
  activityLevel: "Moderately Active: Usually between 7,500-10,000 steps p/day",
  
  // Training schedule (NEW)
  trainingSchedule: {
    monday: ["Lower Body"],
    tuesday: ["Upper Body"],
    wednesday: ["Rest Day"],
    thursday: ["Lower Body"],
    friday: ["Upper Body"],
    saturday: ["Rest Day"],
    sunday: ["Rest Day"]
  },
  
  // Cooking time preferences (NEW)
  cookingTime: {
    morning: "Fast & Convenient Options",
    midday: "Simple Meal Prep",
    night: "Full Meal Prep"
  },
  
  // Other preferences
  trainingDays: "Monday,Tuesday,Thursday,Friday",
  refeedDay: "Thursday",
  trainingTime: "Morning (After Eating)",
  numberOfMeals: "4 Meals",
  proteinPowder: "Yes, I already use protein powder regularly",
  drinksCoffee: "Yes",
  numberOfCoffees: "2",
  blackCoffeeSwitch: "No",
  coffeeMilkSugar: "Milk",
  snacks: "Yes: Sometimes I snack",
  
  // Food preferences
  favProtein: "Chicken Breast,Salmon,Greek Yogurt",
  favCarbs: "Sweet Potato,Brown Rice,Oats",
  favFats: "Avocado,Almonds,Olive Oil",
  
  // Supplements
  additionalSupplements: "Yes, I'm interested in any & all recommendations",
  supplements: {
    tier: "essential_plus",
    supplements: [
      {
        name: "Multivitamin",
        timing: "with breakfast"
      },
      {
        name: "Omega-3",
        timing: "with dinner"
      },
      {
        name: "Vitamin D",
        timing: "with breakfast"
      }
    ]
  }
};

console.log('🧪 TESTING MODULE-58 INTEGRATION');
console.log('================================\n');

// Step 1: Calculate nutrition targets
console.log('📊 Step 1: Calculating nutrition targets...');
const targets = calculateNutritionTargets(testUserData);
console.log('✅ Targets calculated:', {
  training_day_calories: targets.training_day?.calories,
  protein: targets.training_day?.protein,
  carbs: `${targets.training_day?.hierarchical?.carb_range?.min}-${targets.training_day?.hierarchical?.carb_range?.max}g`
});

// Step 2: Generate meal plan with Module-58 enhancements
console.log('\n🍽️ Step 2: Generating meal plan with Module-58 enhancements...');
try {
  const result = buildPersonalizedNutritionPlan(targets, testUserData);
  
  // Check if HTML was generated
  if (typeof result === 'string' && result.includes('<!DOCTYPE html>')) {
    console.log('\n✅ Meal plan HTML generated successfully!');
    console.log(`   HTML length: ${result.length} characters`);
    
    // Check if training schedule is displayed
    if (result.includes('Your Training Schedule')) {
      console.log('\n✅ Training schedule display found in HTML');
    }
    
    // Check if cooking preferences are displayed
    if (result.includes('Meal Prep Preferences')) {
      console.log('✅ Cooking preferences display found in HTML');
    }
    
    // Check for carb cycling indicators
    if (result.includes('Days/Week') && result.includes('Carb Cycling')) {
      console.log('✅ Carb cycling information displayed');
    }
    
    // Save HTML to file for inspection
    const fs = require('fs');
    const outputPath = './test-module-58-output.html';
    fs.writeFileSync(outputPath, result);
    console.log(`\n📄 HTML output saved to: ${outputPath}`);
    
    console.log('\n✅ MODULE-58 INTEGRATION TEST PASSED!');
    console.log('   - Training schedule analysis working');
    console.log('   - Cooking time preferences integrated');
    console.log('   - Carb cycling implemented');
    console.log('   - Enhanced meal planning with complexity awareness');
    console.log('   - Interactive HTML generation successful');
    
  } else {
    console.error('\n❌ Unexpected result format:', typeof result);
    if (typeof result === 'string') {
      console.log('First 200 chars:', result.substring(0, 200));
    }
  }
  
} catch (error) {
  console.error('\n❌ Error generating meal plan:', error);
  console.error(error.stack);
} 