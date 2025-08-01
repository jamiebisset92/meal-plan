#!/usr/bin/env node

// ==================================================================================
// 🔧 UPDATE TYPEFORM MAPPING HELPER
// ==================================================================================
// This script helps update the Typeform mapping with the correct field IDs
// ==================================================================================

const fs = require('fs');
const path = require('path');

function updateTypeformMapping(trainingScheduleFieldId, cookingTimeFieldId) {
  const mappingPath = path.join(__dirname, '..', 'data', 'Typeform-Mapping.json');
  
  try {
    // Read current mapping
    const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
    
    // Update with correct field IDs
    mapping.trainingSchedule = `{{1.mappable_answers.\`${trainingScheduleFieldId}\`}}`;
    mapping.cookingTime = `{{1.mappable_answers.\`${cookingTimeFieldId}\`}}`;
    
    // Write back to file
    fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
    
    console.log('✅ Successfully updated Typeform-Mapping.json!');
    console.log('');
    console.log('Updated fields:');
    console.log(`  trainingSchedule: ${trainingScheduleFieldId}`);
    console.log(`  cookingTime: ${cookingTimeFieldId}`);
    
    return mapping;
  } catch (error) {
    console.error('❌ Error updating mapping:', error.message);
    return null;
  }
}

// Example usage
if (require.main === module) {
  console.log('🔧 Typeform Mapping Updater');
  console.log('');
  console.log('Usage:');
  console.log('  node update-typeform-mapping.js TRAINING_FIELD_ID COOKING_FIELD_ID');
  console.log('');
  console.log('Example:');
  console.log('  node update-typeform-mapping.js "a1b2c3d4-e5f6-7890-1234-567890abcdef" "f1e2d3c4-b5a6-9807-6543-210987654321"');
  
  if (process.argv.length === 4) {
    const trainingId = process.argv[2];
    const cookingId = process.argv[3];
    
    console.log('');
    console.log('Updating mapping with:');
    console.log(`  Training Schedule: ${trainingId}`);
    console.log(`  Cooking Time: ${cookingId}`);
    console.log('');
    
    updateTypeformMapping(trainingId, cookingId);
  }
}

module.exports = { updateTypeformMapping }; 