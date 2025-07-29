// ==================================================================================
// 🚀 MEAL PLANNING WEBHOOK SERVER
// ==================================================================================
// Receives Typeform webhooks and generates personalized meal plans
// ==================================================================================

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

// Import your modules
const { calculateNutritionTargets } = require('../src/modules/Module-1-Calculations');
const { buildPersonalizedNutritionPlan } = require('../src/modules/Module-5-Meal-Plan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve generated meal plans

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'Meal Planning System Active',
    version: '1.0',
    endpoints: {
      webhook: 'POST /webhook/typeform',
      plan: 'GET /plans/:id'
    }
  });
});

// Typeform Webhook Endpoint
app.post('/webhook/typeform', async (req, res) => {
  try {
    console.log('📥 Received Typeform webhook');
    
    // Extract form responses
    const formResponse = req.body.form_response;
    if (!formResponse) {
      throw new Error('Invalid webhook payload');
    }

    // Map Typeform responses to your userData structure
    const userData = mapTypeformToUserData(formResponse);
    console.log('👤 Processing for:', userData.first_name, userData.last_name);

    // Step 1: Calculate nutrition targets
    console.log('📊 Calculating nutrition targets...');
    const targets = calculateNutritionTargets(userData);
    
    // Step 2: Generate meal plan
    console.log('🍽️ Generating meal plan...');
    const dayType = userData.dayType || 'training_day';
    const mealPlanHTML = buildPersonalizedNutritionPlan(targets[dayType], userData);
    
    // Step 3: Save to unique URL
    const planId = generatePlanId(userData);
    const fileName = `${planId}.html`;
    const filePath = path.join(__dirname, 'public', 'plans', fileName);
    
    // Ensure directory exists
    await fs.mkdir(path.join(__dirname, 'public', 'plans'), { recursive: true });
    
    // Save the HTML file
    await fs.writeFile(filePath, mealPlanHTML);
    
    // Generate the access URL
    const planUrl = `${process.env.BASE_URL || `http://localhost:${PORT}`}/plans/${fileName}`;
    
    console.log('✅ Meal plan generated:', planUrl);
    
    // Send response back to Typeform
    res.json({
      success: true,
      planId: planId,
      planUrl: planUrl,
      message: 'Meal plan generated successfully'
    });
    
    // Optional: Send email to client with their plan URL
    // await sendPlanEmail(userData.email, planUrl);
    
  } catch (error) {
    console.error('❌ Error processing webhook:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Serve generated meal plans
app.get('/plans/:fileName', async (req, res) => {
  try {
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, 'public', 'plans', fileName);
    
    // Check if file exists
    await fs.access(filePath);
    
    // Serve the HTML file
    res.sendFile(filePath);
  } catch (error) {
    res.status(404).send('Meal plan not found');
  }
});

// Load Typeform mapping
const typeformMapping = require('./Typeform-Mapping.json');

// Map Typeform data to your userData structure
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
    primaryGoal: answers['7e0b4bc4-3d07-4ecd-8eaf-5b8d3a8b7ebc'] || 'maintenance',
    activityLevel: answers['90b96c9a-24d5-4c47-b59a-1b96e4a1fcc2'] || 'moderate',
    trainingDays: parseInt(answers['aa456f57-4bbb-4287-8b7e-a5e3f2ae9e3e']) || 3,
    
    // Methodology selection (new questions)
    currentCarbIntake: answers['b26c4c78-0f97-43a5-9b13-0bc4a7e8dcf3'] || '',
    experience300gCarbs: answers['14db821f-ecf7-4cb2-a26e-b84b6e4e01c2'] || '',
    carbResponse: answers['d3af2ee4-7cc8-4301-9ff4-d410cf4a7041'] || '',
    mealPlanExperience: answers['baf4f038-3b5f-4e4e-ba9d-e287df2f16a8'] || '',
    
    // Food preferences
    favProteins: answers['bc9cea54-f02f-46ba-9187-db5dc3e7d87e'] || [],
    favCarbs: answers['bc292638-405e-476c-8ee4-8f01db022c48'] || [],
    favFats: answers['c7d69a6c-4bce-49fd-8b0a-1622e5772247'] || [],
    
    // Dietary restrictions
    dietaryPreference: answers['d3a8f5a7-2b8f-47f9-8c67-cbed0ee7b835'] || 'standard',
    dietaryIssues: answers['e2cf5a8e-9c7f-4f8a-b3d7-1a9e5b6c8d2f'] || [],
    allergies: answers['f383b653-95b8-4754-b3fc-81b4ba8ecc0e'] || [],
    intolerances: answers['fbe1de80-76d9-47f5-afa5-e38e36fe3c4e'] || [],
    
    // Set methodology based on carb intake
    methodology: determineMethodology(answers)
  };
}

// Determine which methodology to use based on answers
function determineMethodology(answers) {
  const carbIntake = answers['b26c4c78-0f97-43a5-9b13-0bc4a7e8dcf3'];
  const experience = answers['14db821f-ecf7-4cb2-a26e-b84b6e4e01c2'];
  
  // Use Shelby-Justin if user has experience with higher carbs
  if (carbIntake === '300g +' || experience === 'regularly') {
    return 'shelby-justin';
  }
  
  // Default to moderate for most users
  return 'moderate';
}

// API endpoint to save user progress
app.post('/api/progress/:planId', async (req, res) => {
  try {
    const { planId } = req.params;
    const progressData = req.body;
    
    // Create progress directory if it doesn't exist
    const progressDir = path.join(__dirname, 'data', 'progress');
    await fs.mkdir(progressDir, { recursive: true });
    
    // Save progress data
    const progressFile = path.join(progressDir, `${planId}.json`);
    await fs.writeFile(progressFile, JSON.stringify({
      ...progressData,
      lastUpdated: new Date().toISOString()
    }, null, 2));
    
    res.json({ success: true, message: 'Progress saved' });
  } catch (error) {
    console.error('Error saving progress:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// API endpoint to load user progress
app.get('/api/progress/:planId', async (req, res) => {
  try {
    const { planId } = req.params;
    const progressFile = path.join(__dirname, 'data', 'progress', `${planId}.json`);
    
    try {
      const data = await fs.readFile(progressFile, 'utf8');
      res.json({ success: true, data: JSON.parse(data) });
    } catch (error) {
      // No saved progress yet
      res.json({ success: true, data: null });
    }
  } catch (error) {
    console.error('Error loading progress:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Generate unique plan ID
function generatePlanId(userData) {
  const timestamp = Date.now();
  const userHash = crypto.createHash('md5')
    .update(`${userData.email}-${timestamp}`)
    .digest('hex')
    .substring(0, 8);
  
  return `${userData.first_name.toLowerCase()}-${userHash}`;
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Meal Planning Server running on port ${PORT}`);
  console.log(`📍 Webhook endpoint: http://localhost:${PORT}/webhook/typeform`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Shutting down server...');
  process.exit(0);
}); 