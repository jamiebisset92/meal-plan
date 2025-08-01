#!/usr/bin/env node

// ==================================================================================
// 🔍 CAPTURE NEW TYPEFORM FIELD IDS
// ==================================================================================
// This script helps capture the new field IDs for:
// - "What's your typical training schedule look like?"
// - "How much time do you normally have to dedicate to cooking?"
// ==================================================================================

const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Webhook endpoint to capture new fields
app.post('/webhook/capture-fields', (req, res) => {
  console.log('📥 Received webhook data:');
  console.log(JSON.stringify(req.body, null, 2));
  
  if (req.body.form_response && req.body.form_response.answers) {
    console.log('\n🔍 ANALYZING FIELDS FOR NEW QUESTIONS:');
    
    req.body.form_response.answers.forEach((answer, index) => {
      const fieldId = answer.field.id;
      const fieldType = answer.field.type;
      let value = '';
      
      // Extract value based on answer type
      if (answer.type === 'text') value = answer.text;
      else if (answer.type === 'choice') value = answer.choice.label;
      else if (answer.type === 'choices') value = answer.choices.labels.join(', ');
      else if (answer.type === 'email') value = answer.email;
      else if (answer.type === 'number') value = answer.number;
      
      console.log(`Field ${index + 1}:`);
      console.log(`  ID: ${fieldId}`);
      console.log(`  Type: ${fieldType}`);
      console.log(`  Value: ${value}`);
      
      // Check if this might be one of our new fields
      if (value && typeof value === 'string') {
        const lowerValue = value.toLowerCase();
        if (lowerValue.includes('training') || lowerValue.includes('schedule') || 
            lowerValue.includes('workout') || lowerValue.includes('gym')) {
          console.log(`  🎯 POTENTIAL TRAINING SCHEDULE FIELD!`);
        }
        if (lowerValue.includes('cooking') || lowerValue.includes('time') || 
            lowerValue.includes('prep') || lowerValue.includes('meal prep')) {
          console.log(`  🎯 POTENTIAL COOKING TIME FIELD!`);
        }
      }
      console.log('');
    });
    
    console.log('\n📋 TO ADD TO TYPEFORM-MAPPING.JSON:');
    console.log('Look for the fields marked with 🎯 above and add them like this:');
    console.log('');
    console.log('"trainingSchedule": "{{1.mappable_answers.`FIELD_ID_HERE`}}",');
    console.log('"cookingTime": "{{1.mappable_answers.`FIELD_ID_HERE`}}",');
  }
  
  res.status(200).json({ status: 'received' });
});

app.listen(port, () => {
  console.log(`🎯 Field capture server running on port ${port}`);
  console.log('');
  console.log('INSTRUCTIONS:');
  console.log('1. Start this server');
  console.log('2. In your Typeform webhook settings, temporarily set the endpoint to:');
  console.log(`   http://your-domain.com:${port}/webhook/capture-fields`);
  console.log('3. Submit a test form with the new questions');
  console.log('4. Check the console output for the field IDs');
  console.log('5. Update Typeform-Mapping.json with the new field mappings');
  console.log('');
  console.log('Waiting for webhook data...');
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down field capture server...');
  process.exit(0);
}); 