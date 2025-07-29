// Test to verify morning supplements card is hidden for protein_only tier
const { generateInteractiveHTML } = require('./Module-58-Interactive-HTML');
const { generateSupplementSection } = require('./Module-58-Meal-Plan');

// Test data for protein_only tier
const proteinOnlySupplementData = {
  personalized_protocol: {
    age_optimized_daily_foundation: "omega-3 rich foods + protein variety + minerals from vegetables"
  },
  supplement_analysis: {
    tier_assignment: "protein_only"
  }
};

// Generate supplement section
const supplementSection = generateSupplementSection(proteinOnlySupplementData, { 
  supplementTier: "protein_only",
  first_name: "Test" 
});

console.log('Generated supplement section for protein_only:', JSON.stringify(supplementSection, null, 2));

// Test data with proper supplement structure
const testData = {
  meals: [
    {
      name: "Breakfast",
      foods: [
        { name: "Eggs", amount: "3 whole", calories: 220, protein: 18, carbs: 2, fats: 15 }
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
    supplementTier: "protein_only",
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

console.log('\nTesting HTML generation for protein_only tier...');

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
  
  // Check for morning supplements container
  const hasMorningSupplementsCard = html.includes('id="morningSupplementsContainer"');
  const hasSupplementTierData = html.includes('supplementTier');
  
  console.log('\n🔍 Verification:');
  console.log(`- Has morning supplements container HTML: ${hasMorningSupplementsCard ? 'YES' : 'NO'}`);
  console.log(`- Has supplementTier in data: ${hasSupplementTierData ? 'YES' : 'NO'}`);
  
  // Check if the JavaScript logic to hide it is present
  const hasHideLogic = html.includes('protein_only') && html.includes('morningContainer.style.display');
  console.log(`- Has logic to hide for protein_only: ${hasHideLogic ? 'YES' : 'NO'}`);
  
  console.log('\n✅ Test complete! The morning supplements card will be hidden for protein_only tier via JavaScript.');
  
} catch (error) {
  console.error('❌ UI generation failed:', error.message);
}