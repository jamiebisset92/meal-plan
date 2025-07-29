/**
 * Test Complete Data Flow
 * Demonstrates how data flows through all modules
 */

const orchestrator = require('./main-orchestrator');

// Example user data (similar to what would come from a form)
const sampleUserData = {
  // Basic Info
  first_name: "John",
  last_name: "Doe",
  email: "john@example.com",
  gender: "male",
  age: 30,
  
  // Physical Stats
  weight: 80,
  weightUnit: "kg",
  height: "180",
  
  // Activity & Goals
  activityLevel: "moderate",
  primaryGoal: "muscle",
  methodology: "moderate", // or "shelby-justin" for extreme approach
  
  // Training Schedule
  trainingDays: ["Monday", "Wednesday", "Friday"],
  trainingTime: "Morning (After Eating)",
  
  // Dietary Preferences
  dietaryStyle: "No Restrictions: Animal based products are fine",
  favProteins: ["Chicken Breast", "Salmon", "Eggs"],
  favCarbs: ["White Rice", "Sweet Potato", "Oats"],
  favFats: ["Avocado", "Olive Oil", "Almonds"],
  favVeggies: ["Broccoli", "Spinach", "Bell Peppers"],
  
  // Restrictions
  glutenRestriction: "No",
  nutRestriction: "No",
  gutSensitivities: [],
  
  // Meal Preferences
  numberOfMeals: 4,
  snacks: "Yes, I'd like snacks",
  mealPrepPreference: true,
  cookingTime: "moderate",
  
  // Supplements
  proteinPowder: "Yes, I already use protein powder regularly",
  additionalSupplements: "Yes, I'm interested in any & all recommendations",
  
  // Beverages
  drinksCoffee: "Yes",
  numberOfCoffees: "2",
  coffeeMilkSugar: "with milk",
  blackCoffeeSwitch: "No",
  otherCaffeine: "No",
  
  // Alcohol
  drinksAlcohol: "Yes",
  alcoholDay: "Saturday",
  numberOfDrinks: "2",
  alcoholType: "beer",
  alcoholWillingToStop: "No"
};

async function testCompleteFlow() {
  console.log('🚀 Testing Complete Data Flow\n');
  console.log('=====================================\n');
  
  try {
    // Step 1: Validate user data
    console.log('📋 Step 1: Validating User Data');
    const validation = orchestrator.validateUserData(sampleUserData);
    if (!validation.valid) {
      console.error('❌ Validation failed:', validation.errors);
      return;
    }
    console.log('✅ User data is valid\n');
    
    // Step 2: Show available day types
    console.log('📅 Step 2: Available Day Types');
    const dayTypes = orchestrator.getAvailableDayTypes(sampleUserData);
    console.log('Available day types:', dayTypes);
    console.log('');
    
    // Step 3: Generate meal plans for each day type
    for (const dayType of ['training', 'rest', 'refeed']) {
      console.log(`\n🍽️ Generating ${dayType.toUpperCase()} DAY meal plan...`);
      console.log('=====================================');
      
      const result = await orchestrator.generateCompleteMealPlan(
        sampleUserData, 
        dayType,
        { generateHTML: true }
      );
      
      if (result.success) {
        console.log('✅ Success!');
        console.log('\n📊 Nutrition Targets:');
        const dayTargets = result.nutritionTargets[`${dayType}_day`];
        if (dayTargets) {
          console.log(`  Calories: ${dayTargets.calories}`);
          console.log(`  Protein: ${dayTargets.hierarchical.protein_minimum}g minimum`);
          console.log(`  Carbs: ${dayTargets.hierarchical.carb_range.min}-${dayTargets.hierarchical.carb_range.max}g`);
          console.log(`  Fiber: ${dayTargets.hierarchical.fiber_range.min}-${dayTargets.hierarchical.fiber_range.max}g`);
          console.log(`  Fat: ${dayTargets.hierarchical.fat_minimum}g minimum`);
        }
        
        // Save HTML to file for inspection
        const fs = require('fs');
        const filename = `test-output-${dayType}-day.html`;
        fs.writeFileSync(filename, result.html);
        console.log(`\n💾 HTML saved to: ${filename}`);
        
      } else {
        console.error('❌ Failed:', result.error);
      }
    }
    
    // Step 4: Test specific date logic
    console.log('\n\n📆 Step 4: Testing Date-Based Meal Planning');
    console.log('=====================================');
    
    const testDates = [
      new Date('2024-01-15'), // Monday (training)
      new Date('2024-01-16'), // Tuesday (rest)
      new Date('2024-01-21')  // Sunday (potential refeed)
    ];
    
    for (const date of testDates) {
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      console.log(`\n📅 ${dayName}, ${date.toLocaleDateString()}`);
      
      const result = await orchestrator.getMealPlanForDate(sampleUserData, date);
      if (result.success) {
        console.log(`✅ Generated ${result.dayType} day meal plan`);
      }
    }
    
    console.log('\n\n✅ Complete flow test finished!');
    console.log('Check the generated HTML files to see the output.');
    
  } catch (error) {
    console.error('\n❌ Error in test flow:', error);
    console.error(error.stack);
  }
}

// Run the test
testCompleteFlow().catch(console.error);

// Export for use in other tests
module.exports = { sampleUserData, testCompleteFlow }; 