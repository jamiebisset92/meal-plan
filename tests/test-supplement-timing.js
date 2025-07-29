// Test script to verify supplement timing display
const { generateInteractiveHTML } = require('./Module-58-Interactive-HTML');
const { generateSupplementSection } = require('./Module-58-Meal-Plan');

// Simulate supplement data from Module 57
const module57Data = {
  personalized_protocol: {
    age_optimized_daily_foundation: "Vitamin D3 5000IU + B-Complex methylated + Magnesium Glycinate 400mg PM",
    energy_vitality_stack: "Tribulus 1000mg AM + Red Ginseng 600mg AM",
    recovery_sleep_stack: "Ashwagandha 600mg PM + Glycine 3g before bed + Melatonin 3mg before bed"
  },
  supplement_analysis: {
    tier_assignment: "essential_plus"
  }
};

// Generate supplement section like Module 58 does
const supplementSection = generateSupplementSection(module57Data, { 
  supplementTier: "essential_plus",
  first_name: "Test" 
});

console.log('Generated supplement section:', JSON.stringify(supplementSection, null, 2));

// Test data with proper supplement structure
const testData = {
  meals: [
    {
      name: "Breakfast",
      foods: [
        { name: "Oatmeal", amount: "100g", calories: 150, protein: 5, carbs: 27, fats: 3 }
      ]
    },
    {
      name: "Lunch",
      foods: [
        { name: "Chicken Salad", amount: "250g", calories: 300, protein: 35, carbs: 20, fats: 10 }
      ]
    },
    {
      name: "Dinner",
      foods: [
        { name: "Salmon & Rice", amount: "300g", calories: 400, protein: 30, carbs: 45, fats: 12 }
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
  userData: {
    first_name: "Test",
    supplementTier: "essential_plus",
    weight: "70",
    weightUnit: "kg",
    gender: "MALE",
    activityLevel: "Moderately Active",
    goal: "Maintain Weight"
  },
  postWorkout: null,
  coffee: null,
  energyDrinks: null,
  snacks: {
    totals: { calories: 200, protein: 10, carbs: 30, fats: 5 },
    foods: []
  },
  alcohol: null,
  supplementsData: supplementSection // Use the properly formatted supplement data
};

console.log('Testing UI generation with proper supplement structure...');

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
  
  console.log('✅ UI generated successfully!');
  console.log('HTML length:', html.length);
  
  // Check for supplement displays
  const checks = [
    { pattern: 'Morning Supplements', name: 'Morning supplements card' },
    { pattern: 'Evening Supplements', name: 'Evening supplements card' },
    { pattern: 'Complete Supplement Schedule', name: 'Supplement table' },
    { pattern: 'meal-supplements', name: 'Meal card supplements' }
  ];
  
  checks.forEach(check => {
    if (html.includes(check.pattern)) {
      console.log(`✅ ${check.name} is included`);
    } else {
      console.log(`❌ ${check.name} is missing`);
    }
  });
  
  // Count supplement occurrences
  const vitaminDCount = (html.match(/Vitamin D3/g) || []).length;
  const tribulusCount = (html.match(/Tribulus/g) || []).length;
  const ashwagandhaCount = (html.match(/Ashwagandha/g) || []).length;
  
  console.log('\nSupplement occurrences:');
  console.log(`- Vitamin D3: ${vitaminDCount} times`);
  console.log(`- Tribulus: ${tribulusCount} times`);
  console.log(`- Ashwagandha: ${ashwagandhaCount} times`);
  
} catch (error) {
  console.error('❌ UI generation failed:', error.message);
  console.error('Stack trace:', error.stack);
}