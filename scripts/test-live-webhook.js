// ==================================================================================
// 🧪 TEST LIVE WEBHOOK ENDPOINT
// ==================================================================================
// This script tests the live webhook with sample Typeform data
// ==================================================================================

const https = require('https');

// Sample Typeform response data
const sampleTypeformData = {
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
          "id": "90b96c9a-24d5-4c47-b59a-1b96e4a1fcc2",
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

// Test the webhook endpoint
function testWebhook() {
  console.log('🧪 Testing live webhook endpoint...');
  console.log('📍 URL: https://meal-plan-z666.onrender.com/webhook/typeform');
  
  const postData = JSON.stringify(sampleTypeformData);
  
  const options = {
    hostname: 'meal-plan-z666.onrender.com',
    port: 443,
    path: '/webhook/typeform',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const req = https.request(options, (res) => {
    console.log(`📊 Status: ${res.statusCode}`);
    console.log(`📋 Headers: ${JSON.stringify(res.headers)}`);
    
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      console.log('📄 Response:');
      console.log(data);
      
      if (res.statusCode === 200) {
        console.log('✅ Webhook test successful!');
      } else {
        console.log('❌ Webhook test failed');
      }
    });
  });

  req.on('error', (e) => {
    console.error('❌ Request error:', e.message);
  });

  req.write(postData);
  req.end();
}

// Run the test
testWebhook(); 