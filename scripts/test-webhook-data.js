// ==================================================================================
// 🧪 TEST WEBHOOK DATA STRUCTURE
// ==================================================================================
// This script tests with the exact data structure from the webhook
// ==================================================================================

const { calculateNutritionTargets } = require('./src/modules/Module-1-Calculations');

// Simulate the exact webhook data structure
const webhookData = {
  "event_id": "01HXYZ123456789",
  "event_type": "form_response",
  "form_response": {
    "answers": [
      {
        "field": {
          "id": "89474c10-e31b-46ff-a93d-c6bf3eb439d2",
          "type": "short_text"
        },
        "type": "text",
        "text": "John"
      },
      {
        "field": {
          "id": "9d67872c-f9c0-4b87-bee3-e36f23ba9fcd",
          "type": "short_text"
        },
        "type": "text",
        "text": "Doe"
      },
      {
        "field": {
          "id": "c75fc91e-24b4-4bf9-85a0-f96b46326b1c",
          "type": "email"
        },
        "type": "email",
        "email": "test@example.com"
      },
      {
        "field": {
          "id": "ec75b152-bb93-482e-8f5d-1dd7f6a8bc67",
          "type": "multiple_choice"
        },
        "type": "choice",
        "choice": {
          "label": "Male"
        }
      },
      {
        "field": {
          "id": "e0b2f871-8d76-4ad6-ba51-6ca89cbba480",
          "type": "number"
        },
        "type": "number",
        "number": 25
      },
      {
        "field": {
          "id": "1e861741-1a48-4e4f-874b-0a066c342b81",
          "type": "short_text"
        },
        "type": "text",
        "text": "175"
      },
      {
        "field": {
          "id": "c81fd1cc-df46-41a4-8576-f01fda0ea465",
          "type": "number"
        },
        "type": "number",
        "number": 70
      },
      {
        "field": {
          "id": "a8564238-b5ad-41da-a20d-931d603be9fc",
          "type": "multiple_choice"
        },
        "type": "choice",
        "choice": {
          "label": "kg"
        }
      },
      {
        "field": {
          "id": "06c1f01a-c171-4868-a0c1-2a93484e13ff",
          "type": "multiple_choice"
        },
        "type": "choice",
        "choice": {
          "label": "Build Muscle"
        }
      },
      {
        "field": {
          "id": "a77e68a0-4210-4422-8ad3-a92e04600412",
          "type": "multiple_choice"
        },
        "type": "choice",
        "choice": {
          "label": "Moderate"
        }
      },
      {
        "field": {
          "id": "3310d809-77c1-4032-b08c-60aa34be84e8",
          "type": "number"
        },
        "type": "number",
        "number": 4
      },
      {
        "field": {
          "id": "03c4ef98-07d5-4f36-af3b-c181ed9ed6a6",
          "type": "multiple_choice"
        },
        "type": "choice",
        "choice": {
          "label": "Moderate"
        }
      },
      {
        "field": {
          "id": "138b3bd8-91ca-45ff-8218-979d8d74667e",
          "type": "multiple_choice"
        },
        "type": "choice",
        "choice": {
          "label": "150-200g"
        }
      },
      {
        "field": {
          "id": "6b7f5ac4-6e65-4ce1-a2c5-a286f4027408",
          "type": "multiple_choice"
        },
        "type": "choice",
        "choice": {
          "label": "Never"
        }
      },
      {
        "field": {
          "id": "d3af2ee4-7cc8-4301-9ff4-d410cf4a7041",
          "type": "multiple_choice"
        },
        "type": "choice",
        "choice": {
          "label": "Good"
        }
      },
      {
        "field": {
          "id": "aacaa5c1-cff2-40f9-a5cc-361f446d99de",
          "type": "multiple_choice"
        },
        "type": "choice",
        "choice": {
          "label": "Beginner"
        }
      },
      {
        "field": {
          "id": "de3adf27-eebf-4f46-9fc0-82b13d0795c6",
          "type": "multiple_choice"
        },
        "type": "choices",
        "choices": {
          "labels": ["Chicken", "Salmon", "Eggs"]
        }
      },
      {
        "field": {
          "id": "bc292638-405e-476c-8ee4-8f01db022c48",
          "type": "multiple_choice"
        },
        "type": "choices",
        "choices": {
          "labels": ["Rice", "Sweet Potato", "Oats"]
        }
      },
      {
        "field": {
          "id": "c7d69a6c-4bce-49fd-8b0a-1622e5772247",
          "type": "multiple_choice"
        },
        "type": "choices",
        "choices": {
          "labels": ["Avocado", "Nuts", "Olive Oil"]
        }
      },
      {
        "field": {
          "id": "64b62bf1-52c5-418e-ba6c-335cd3e41550",
          "type": "multiple_choice"
        },
        "type": "choice",
        "choice": {
          "label": "Standard"
        }
      }
    ]
  }
};

// Simulate the server's mapTypeformToUserData function
function mapTypeformToUserData(formResponse) {
  const answers = {};
  
  // Create a map of field IDs to answers
  formResponse.answers.forEach(answer => {
    const fieldId = answer.field.id;
    let value;
    
    // Handle different answer types
    switch (answer.type) {
      case 'text':
      case 'email':
      case 'number':
        value = answer[answer.type];
        break;
      case 'choice':
        value = answer.choice.label;
        break;
      case 'choices':
        value = answer.choices.labels;
        break;
      default:
        value = answer[answer.type];
    }
    
    answers[fieldId] = value;
  });
  
  // Map to your userData structure using actual field IDs
  return {
    // Basic info
    first_name: answers['89474c10-e31b-46ff-a93d-c6bf3eb439d2'] || '',
    last_name: answers['9d67872c-f9c0-4b87-bee3-e36f23ba9fcd'] || '',
    email: answers['c75fc91e-24b4-4bf9-85a0-f96b46326b1c'] || '',
    gender: answers['ec75b152-bb93-482e-8f5d-1dd7f6a8bc67'] || '',
    age: parseInt(answers['e0b2f871-8d76-4ad6-ba51-6ca89cbba480']) || 30,
    pregnancyStatus: answers['f739c474-cccc-4dc4-8232-91fdee1cefee'] || '',
    
    // Physical stats
    height: answers['1e861741-1a48-4e4f-874b-0a066c342b81'] || '',
    weight: parseFloat(answers['c81fd1cc-df46-41a4-8576-f01fda0ea465']) || 0,
    weightUnit: answers['a8564238-b5ad-41da-a20d-931d603be9fc'] || 'kg',
    
    // Goals and activity
    goal: answers['06c1f01a-c171-4868-a0c1-2a93484e13ff'] || 'maintenance',
    activityLevel: answers['a77e68a0-4210-4422-8ad3-a92e04600412'] || 'moderate',
    trainingDays: parseInt(answers['3310d809-77c1-4032-b08c-60aa34be84e8']) || 3,
    resultsTimeline: answers['03c4ef98-07d5-4f36-af3b-c181ed9ed6a6'] || 'moderate',
    
    // Methodology selection (new questions)
    currentCarbIntake: answers['138b3bd8-91ca-45ff-8218-979d8d74667e'] || '',
    experience300gCarbs: answers['6b7f5ac4-6e65-4ce1-a2c5-a286f4027408'] || '',
    carbResponse: answers['d3af2ee4-7cc8-4301-9ff4-d410cf4a7041'] || '',
    mealPlanExperience: answers['aacaa5c1-cff2-40f9-a5cc-361f446d99de'] || '',
    
    // Food preferences
    favProteins: answers['de3adf27-eebf-4f46-9fc0-82b13d0795c6'] || [],
    favCarbs: answers['bc292638-405e-476c-8ee4-8f01db022c48'] || [],
    favFats: answers['c7d69a6c-4bce-49fd-8b0a-1622e5772247'] || [],
    
    // Dietary restrictions
    dietaryPreference: answers['64b62bf1-52c5-418e-ba6c-335cd3e41550'] || 'standard',
    dietaryIssues: answers['92421d12-1c19-4b5c-a809-8d49e8b524ec'] || [],
    allergies: answers['92421d12-1c19-4b5c-a809-8d49e8b524ec'] || [],
    intolerances: answers['92421d12-1c19-4b5c-a809-8d49e8b524ec'] || [],
    
    // Set methodology based on carb intake
    methodology: "moderate"
  };
}

console.log('🧪 Testing webhook data processing...');

try {
  // Step 1: Map webhook data to userData
  const userData = mapTypeformToUserData(webhookData.form_response);
  console.log('✅ Webhook data mapped successfully');
  console.log('📊 Mapped userData:', JSON.stringify(userData, null, 2));
  
  // Step 2: Calculate nutrition targets
  console.log('📊 Calculating nutrition targets...');
  const targets = calculateNutritionTargets(userData);
  console.log('✅ Calculation successful!');
  console.log('📊 Full targets object:', JSON.stringify(targets, null, 2));
  
  if (targets.training_day) {
    console.log('🎯 Training day targets:', JSON.stringify(targets.training_day, null, 2));
  } else {
    console.log('❌ No training_day in targets');
  }
  
} catch (error) {
  console.error('❌ Test failed:', error);
} 