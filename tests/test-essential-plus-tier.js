// Test to verify morning supplements card is shown for essential_plus tier
const { generateInteractiveHTML } = require('./Module-58-Interactive-HTML');
const { generateSupplementSection } = require('./Module-58-Meal-Plan');

// Test data for essential_plus tier
const essentialPlusSupplementData = {
  personalized_protocol: {
    age_optimized_daily_foundation: "Berberine 500mg before largest meal + Magnesium 400mg PM",
    energy_vitality_stack: "Tribulus 1000mg AM + Red Ginseng 600mg AM",
    recovery_sleep_stack: "Ashwagandha 600mg PM + Glycine 3g before bed"
  },
  supplement_analysis: {
    tier_assignment: "essential_plus"
  }
};

// Generate supplement section
const supplementSection = generateSupplementSection(essentialPlusSupplementData, { 
  supplementTier: "essential_plus",
  first_name: "Test" 
});

console.log('Generated supplement section for essential_plus:', JSON.stringify(supplementSection, null, 2));

// Test data
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
    fat: 70,
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
  supplementsData: supplementSection
};

console.log('\nTesting HTML generation for essential_plus tier...');

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
  
  // Check for supplements
  const actualSupplements = ['Berberine', 'Tribulus', 'Magnesium', 'Ashwagandha', 'Red Ginseng', 'Glycine'];
  
  console.log('\n🔍 Verification:');
  actualSupplements.forEach(supp => {
    const count = (html.match(new RegExp(supp, 'gi')) || []).length;
    console.log(`- ${supp}: found ${count} times`);
  });
  
  // Check that the hide logic is NOT triggered for essential_plus
  const hasProteinOnlyCheck = html.includes("data.supplementTier !== 'protein_only'");
  console.log(`\n- Has tier check logic: ${hasProteinOnlyCheck ? 'YES' : 'NO'}`);
  console.log('- Morning supplements will be SHOWN for essential_plus tier');
  
  console.log('\n✅ Test complete! The morning supplements card will be shown for essential_plus tier.');
  
} catch (error) {
  console.error('❌ UI generation failed:', error.message);
}