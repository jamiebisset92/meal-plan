#!/usr/bin/env node

// Test Real Client Scenarios with Typeform Data

const { calculateNutritionTargets } = require('../src/modules/Module-1-Calculations');
const { buildPersonalizedNutritionPlan } = require('../src/modules/Module-5-Meal-Plan');
const fs = require('fs');
const path = require('path');

// Real client test scenarios
const testClients = [
  {
    name: "Sarah - Weight Loss",
    data: {
      // Basic info
      first_name: "Sarah",
      last_name: "Johnson",
      email: "sarah.johnson@example.com",
      weight: 75,
      weightUnit: "kg",
      height: 165,
      age: 32,
      gender: "female",
      
      // Goals
      goal: "Lose Weight: Improve Body Composition",
      desiredWeight: 65,
      activityLevel: "Moderately Active: Usually between 7,500-10,000 steps p/day",
      
      // Training schedule
      trainingSchedule: {
        monday: ["Lower Body"],
        tuesday: ["Rest Day"],
        wednesday: ["Upper Body"],
        thursday: ["Lower Body"],
        friday: ["Rest Day"],
        saturday: ["Upper Body"],
        sunday: ["Rest Day"]
      },
      
      // Cooking preferences
      cookingTime: {
        morning: "Fast & Convenient Options",
        midday: "Simple Meal Prep",
        night: "Simple Meal Prep"
      },
      
      // Other details
      trainingDays: "Monday,Wednesday,Thursday,Saturday",
      refeedDay: "Saturday",
      trainingTime: "Morning (Before Eating)",
      numberOfMeals: "4 Meals",
      proteinPowder: "Yes, I already use protein powder regularly",
      drinksCoffee: "Yes",
      numberOfCoffees: "1",
      blackCoffeeSwitch: "Yes",
      snacks: "No: I prefer not to snack",
      dietaryStyle: "No Restrictions",
      favProtein: "Chicken Breast,Greek Yogurt,Eggs",
      favCarbs: "Sweet Potato,Rice,Oats",
      additionalSupplements: "Yes, I'm interested in any & all recommendations"
    }
  },
  {
    name: "Mike - Muscle Gain",
    data: {
      first_name: "Mike",
      last_name: "Thompson",
      email: "mike.thompson@example.com",
      weight: 185,
      weightUnit: "lb",
      height: 178,
      age: 28,
      gender: "male",
      
      goal: "Build Muscle: Gain Muscle Mass",
      activityLevel: "Very Active: Usually over 10,000 steps p/day",
      
      trainingSchedule: {
        monday: ["Upper Body"],
        tuesday: ["Lower Body"],
        wednesday: ["Rest Day"],
        thursday: ["Upper Body"],
        friday: ["Lower Body"],
        saturday: ["Upper Body"],
        sunday: ["Rest Day"]
      },
      
      cookingTime: {
        morning: "Simple Meal Prep",
        midday: "Full Meal Prep",
        night: "Full Meal Prep"
      },
      
      trainingDays: "Monday,Tuesday,Thursday,Friday,Saturday",
      refeedDay: "Tuesday",
      trainingTime: "Mid-Day (Between 11am-2pm)",
      numberOfMeals: "5 Meals",
      proteinPowder: "Yes, I already use protein powder regularly",
      drinksCoffee: "No",
      snacks: "Yes: I always snack",
      dietaryStyle: "No Restrictions",
      favProtein: "Steak,Chicken Breast,Salmon",
      favCarbs: "White Rice,Pasta,Bagels",
      additionalSupplements: "Yes, I'm interested in any & all recommendations"
    }
  },
  {
    name: "Emma - Vegetarian Maintenance",
    data: {
      first_name: "Emma",
      last_name: "Davis",
      email: "emma.davis@example.com",
      weight: 60,
      weightUnit: "kg",
      height: 168,
      age: 35,
      gender: "female",
      
      goal: "Maintain Weight: Stay At Current Weight",
      activityLevel: "Lightly Active: Usually between 5,000-7,500 steps p/day",
      
      trainingSchedule: {
        monday: ["Rest Day"],
        tuesday: ["Upper Body"],
        wednesday: ["Lower Body"],
        thursday: ["Rest Day"],
        friday: ["Upper Body"],
        saturday: ["Rest Day"],
        sunday: ["Rest Day"]
      },
      
      cookingTime: {
        morning: "Fast & Convenient Options",
        midday: "Fast & Convenient Options",
        night: "Full Meal Prep"
      },
      
      trainingDays: "Tuesday,Wednesday,Friday",
      refeedDay: "Wednesday",
      trainingTime: "Evening (After 5pm)",
      numberOfMeals: "3 Meals",
      proteinPowder: "No, I don't use protein powder",
      drinksCoffee: "Yes",
      numberOfCoffees: "2",
      blackCoffeeSwitch: "No",
      coffeeMilkSugar: "Milk",
      snacks: "Yes: Sometimes I snack",
      dietaryStyle: "Vegetarian",
      favProtein: "Greek Yogurt,Eggs,Tofu",
      favCarbs: "Quinoa,Sweet Potato,Whole Grain Bread",
      additionalSupplements: "No, I'm good with just the meal plan"
    }
  }
];

console.log('🧪 TESTING REAL CLIENT SCENARIOS');
console.log('================================\n');

// Test each client
testClients.forEach((client, index) => {
  console.log(`\n📋 Client ${index + 1}: ${client.name}`);
  console.log('─'.repeat(40));
  
  try {
    // Step 1: Calculate nutrition targets
    console.log('📊 Calculating nutrition targets...');
    const targets = calculateNutritionTargets(client.data);
    
    console.log('✅ Targets calculated:');
    console.log(`   Training Day: ${targets.training_day?.calories} cal, ${targets.training_day?.protein}g protein`);
    console.log(`   Rest Day: ${targets.rest_day?.calories} cal, ${targets.rest_day?.protein}g protein`);
    
    // Step 2: Generate meal plan
    console.log('\n🍽️ Generating meal plan...');
    const startTime = Date.now();
    const mealPlanHTML = buildPersonalizedNutritionPlan(targets, client.data);
    const generationTime = Date.now() - startTime;
    
    // Step 3: Validate output
    if (typeof mealPlanHTML === 'string' && mealPlanHTML.includes('<!DOCTYPE html>')) {
      console.log(`✅ Meal plan generated in ${generationTime}ms`);
      console.log(`   HTML size: ${(mealPlanHTML.length / 1024).toFixed(1)}KB`);
      
      // Check for key features
      const features = {
        'Training Schedule': mealPlanHTML.includes('Your Training Schedule'),
        'Cooking Preferences': mealPlanHTML.includes('Meal Prep Preferences'),
        'Water Intake': mealPlanHTML.includes('Water Intake'),
        'Meal Cards': mealPlanHTML.includes('meal-card'),
        'Supplements': mealPlanHTML.includes('supplements') || mealPlanHTML.includes('Supplements'),
        'Daily Totals': mealPlanHTML.includes('daily-totals')
      };
      
      console.log('\n📊 Feature Check:');
      Object.entries(features).forEach(([feature, present]) => {
        console.log(`   ${present ? '✅' : '❌'} ${feature}`);
      });
      
      // Save output for inspection
      const outputDir = path.join(__dirname, 'test-outputs');
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
      }
      
      const filename = `${client.data.first_name.toLowerCase()}-${Date.now()}.html`;
      const filepath = path.join(outputDir, filename);
      fs.writeFileSync(filepath, mealPlanHTML);
      console.log(`\n📄 Saved to: ${filename}`);
      
    } else {
      console.error('❌ Failed to generate valid HTML');
    }
    
  } catch (error) {
    console.error(`\n❌ Error for ${client.name}:`, error.message);
    console.error(error.stack);
  }
});

// Summary
console.log('\n\n📊 TEST SUMMARY');
console.log('═'.repeat(40));
console.log('✅ All client scenarios tested');
console.log('📁 Check scripts/test-outputs/ for generated plans');
console.log('\n🎯 Next Steps:');
console.log('   1. Review generated HTML for accuracy');
console.log('   2. Test with actual Typeform webhook data');
console.log('   3. Deploy to production');
console.log('   4. Set up unique URL generation'); 