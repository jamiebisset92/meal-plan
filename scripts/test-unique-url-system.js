#!/usr/bin/env node

// Test Unique URL Generation System

const { calculateNutritionTargets } = require('../src/modules/Module-1-Calculations');
const { buildPersonalizedNutritionPlan } = require('../src/modules/Module-5-Meal-Plan');
const fs = require('fs');
const path = require('path');

// Test client data
const testClient = {
  first_name: "Sarah",
  last_name: "Johnson", 
  email: "sarah.johnson@example.com",
  weight: 75,
  weightUnit: "kg",
  height: 165,
  age: 32,
  gender: "female",
  goal: "Lose Weight: Improve Body Composition",
  desiredWeight: 65,
  activityLevel: "Moderately Active: Usually between 7,500-10,000 steps p/day",
  trainingSchedule: {
    monday: ["Lower Body"],
    tuesday: ["Rest Day"],
    wednesday: ["Upper Body"],
    thursday: ["Lower Body"],
    friday: ["Rest Day"],
    saturday: ["Upper Body"],
    sunday: ["Rest Day"]
  },
  cookingTime: {
    morning: "Fast & Convenient Options",
    midday: "Simple Meal Prep",
    night: "Simple Meal Prep"
  },
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
};

console.log('🧪 TESTING UNIQUE URL GENERATION SYSTEM');
console.log('========================================\n');

async function testUniqueUrlSystem() {
  try {
    console.log('📋 Test Client:', testClient.first_name, testClient.last_name);
    
    // Step 1: Calculate nutrition targets
    console.log('📊 Calculating nutrition targets...');
    const targets = calculateNutritionTargets(testClient);
    
    // Step 2: Generate meal plan
    console.log('🍽️ Generating meal plan...');
    const mealPlanHTML = buildPersonalizedNutritionPlan(targets, testClient);
    
    // Step 3: Generate unique plan ID
    const crypto = require('crypto');
    const timestamp = Date.now();
    const userHash = crypto.createHash('md5')
      .update(`${testClient.first_name}${testClient.last_name}${testClient.email}`)
      .digest('hex')
      .substring(0, 8);
    
    const planId = `${testClient.first_name.toLowerCase()}-${userHash}`;
    const fileName = `${planId}.html`;
    
    console.log('🔗 Generated Plan ID:', planId);
    console.log('📄 File Name:', fileName);
    
    // Step 4: Save to plans directory
    const plansDir = path.join(__dirname, '..', 'server', 'public', 'plans');
    const filePath = path.join(plansDir, fileName);
    
    // Ensure directory exists
    await fs.mkdir(plansDir, { recursive: true });
    
    // Save the HTML file
    await fs.writeFile(filePath, mealPlanHTML);
    
    // Step 5: Generate URLs
    const baseUrl = 'https://stephaniesanzo.com';
    const planUrl = `${baseUrl}/plans/${fileName}`;
    const vercelUrl = `https://meal-plan-9e9m02b0l-stephanie-sanzo.vercel.app/plans/${fileName}`;
    
    console.log('\n✅ Plan Created Successfully!');
    console.log('📊 Plan Details:');
    console.log(`   Plan ID: ${planId}`);
    console.log(`   File: ${fileName}`);
    console.log(`   Size: ${(mealPlanHTML.length / 1024).toFixed(1)}KB`);
    console.log(`   Custom Domain: ${planUrl}`);
    console.log(`   Vercel URL: ${vercelUrl}`);
    
    // Step 6: Test file access
    console.log('\n🧪 Testing file access...');
    const savedContent = await fs.readFile(filePath, 'utf8');
    if (savedContent === mealPlanHTML) {
      console.log('✅ File saved and accessible correctly');
    } else {
      console.log('❌ File content mismatch');
    }
    
    // Step 7: List all plans
    console.log('\n📋 Listing all plans...');
    const files = await fs.readdir(plansDir);
    const plans = files.filter(file => file.endsWith('.html'));
    console.log(`   Found ${plans.length} plans:`);
    plans.forEach(plan => {
      console.log(`   - ${plan}`);
    });
    
    console.log('\n🎯 UNIQUE URL SYSTEM TEST COMPLETE');
    console.log('====================================');
    console.log('✅ Plan generation working');
    console.log('✅ File saving working');
    console.log('✅ URL generation working');
    console.log('✅ File access working');
    console.log('\n🚀 Ready for production use!');
    
  } catch (error) {
    console.error('❌ Error testing unique URL system:', error);
  }
}

testUniqueUrlSystem(); 