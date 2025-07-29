// Test to verify supplement display with actual supplements (not food recommendations)
const { generateInteractiveHTML } = require('./Module-58-Interactive-HTML');
const { analyzeSupplements } = require('./Module-57-Supplements');
const { generateSupplementSection } = require('./Module-58-Meal-Plan');

// Simulate user data with essential_plus tier
const userData = {
  first_name: "Test",
  age: 35,
  gender: "male",
  additionalSupplements: "Essential Plus", // This should give us actual supplements
  biggestChallenge: "meal prep time",
  stressLevels: "Normal",
  sleepSchedule: "7-8 hours",
  energyLevels: "Good",
  drinksCoffee: "Yes",
  numberOfCoffees: "2",
  weight: "70",
  weightUnit: "kg",
  activityLevel: "Moderately Active",
  goal: "Maintain Weight"
};

// Simulate calculations from Module 51
const calculations = {
  calories: 2500,
  protein: 175
};

// Simulate psychology analysis
const psychologyAnalysis = {
  challenge_analysis: {
    age_bracket: "32-42",
    state_matrix_profile: "Balanced"
  }
};

// Simulate communication profile
const communicationProfile = {
  communication_analysis: {
    primary_priority: "results"
  }
};

// Get supplement recommendations from Module 57
console.log('🔬 Getting supplement recommendations from Module 57...');
const module57Data = analyzeSupplements(userData, calculations, psychologyAnalysis, communicationProfile);

console.log('\n📊 Module 57 personalized_protocol:');
console.log('- Daily Foundation:', module57Data.personalized_protocol.age_optimized_daily_foundation);
console.log('- Energy Stack:', module57Data.personalized_protocol.energy_vitality_stack);
console.log('- Recovery Stack:', module57Data.personalized_protocol.recovery_sleep_stack);
console.log('- Tier:', module57Data.supplement_analysis.tier_assignment);

// Generate supplement section
console.log('\n🔬 Generating supplement section...');
const supplementSection = generateSupplementSection(module57Data, userData);

console.log('\n📊 Supplement section generated:');
supplementSection.supplements.forEach(supp => {
  console.log(`\n${supp.name}:`);
  console.log(`- Description: ${supp.description}`);
  console.log(`- Timing: ${supp.timing}`);
  console.log(`- Priority: ${supp.priority}`);
});

// Test HTML generation
const testData = {
  meals: [
    {
      name: "Breakfast",
      foods: [
        { name: "Oatmeal", amount: "100g", calories: 150, protein: 5, carbs: 27, fats: 3 }
      ]
    }
  ],
  targets: {
    calories: 2000,
    protein: 150,
    hierarchical: {
      carb_range: { min: 200, max: 300 }
    }
  },
  userData: userData,
  postWorkout: null,
  coffee: null,
  energyDrinks: null,
  snacks: {
    totals: { calories: 200, protein: 10, carbs: 30, fats: 5 },
    foods: []
  },
  alcohol: null,
  supplementsData: supplementSection
};

console.log('\n🌐 Testing HTML generation...');
try {
  const html = generateInteractiveHTML(
    testData.meals,
    testData.targets,
    testData.userData,
    testData.postWorkout,
    testData.coffee,
    testData.energyDrinks,
    testData.snacks,
    testData.alcohol,
    testData.supplementsData
  );
  
  console.log('✅ HTML generated successfully!');
  
  // Check for specific supplements
  const supplementChecks = [
    'Berberine',
    'Tribulus',
    'Magnesium',
    'Ashwagandha',
    'omega-3 rich foods' // This should NOT appear for essential_plus tier
  ];
  
  console.log('\n🔍 Checking for supplements in HTML:');
  supplementChecks.forEach(supp => {
    const count = (html.match(new RegExp(supp, 'gi')) || []).length;
    if (supp === 'omega-3 rich foods') {
      console.log(`${count === 0 ? '✅' : '❌'} "${supp}" NOT found (should not appear)`);
    } else {
      console.log(`${count > 0 ? '✅' : '❌'} "${supp}" found ${count} times`);
    }
  });
  
} catch (error) {
  console.error('❌ Error:', error.message);
}