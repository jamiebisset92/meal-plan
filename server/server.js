// Load environment variables
require('dotenv').config();

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
const cookieParser = require('cookie-parser');

// Import your modules
const { calculateNutritionTargets } = require('../src/modules/Module-1-Calculations');
const { buildPersonalizedNutritionPlan } = require('../src/modules/Module-5-Meal-Plan');
const EmailService = require('./email-service');
const ReviewQueue = require('./review-queue');

// Import authentication routes
const authRoutes = require('./routes/auth-routes');
const AuthService = require('./services/auth-service');

const app = express();
const PORT = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || 'https://stephaniesanzo.com';

// Initialize services
const emailService = new EmailService();
const reviewQueue = new ReviewQueue();

// Initialize auth service
const authService = require('./services/auth-service');

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve generated meal plans
app.use('/static', express.static(path.join(__dirname, 'static'))); // Serve static assets

// Add authentication routes
app.use('/api/auth', authRoutes);

// Add cookie parser for session management
app.use(cookieParser());

// Serve logo
app.get('/ss-logo.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'ss-logo.jpg'));
});

// Serve logo
app.get('/logo.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'logo.jpg'));
});

// Import plan editor routes
const planEditorRoutes = require('./api/plan-editor');
app.use('/api', planEditorRoutes);

// Import plan routes
const planRoutes = require('./routes/plan-routes');
app.use('/api', planRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'Meal Planning System Active',
    version: '1.0',
    endpoints: {
      webhook: 'POST /webhook/typeform',
      plan: 'GET /plans/:id',
      createPlan: 'POST /api/create-plan'
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
    console.log('📥 Raw webhook data:', JSON.stringify(formResponse, null, 2));
    const userData = mapTypeformToUserData(formResponse);
    console.log('👤 Processing for:', userData.first_name, userData.last_name);
    console.log('📊 Mapped userData:', JSON.stringify(userData, null, 2));

    // Step 1: Calculate nutrition targets
    console.log('📊 Calculating nutrition targets...');
    const targets = calculateNutritionTargets(userData);
    
    // Step 2: Generate meal plan
    console.log('🍽️ Generating meal plan...');
    const dayType = userData.dayType || 'training_day';
    console.log('📊 Targets object:', JSON.stringify(targets, null, 2));
    console.log('📅 Day type:', dayType);
    console.log('🎯 Selected targets:', JSON.stringify(targets[dayType], null, 2));
    const mealPlanHTML = buildPersonalizedNutritionPlan(targets, userData);
    
    // Step 3: Save to unique URL
    const planId = generatePlanId(userData);
    const fileName = `${planId}.html`;
    const filePath = path.join(__dirname, 'public', 'plans', fileName);
    
    // Ensure directory exists
    await fs.mkdir(path.join(__dirname, 'public', 'plans'), { recursive: true });
    
    // Save the HTML file
    await fs.writeFile(filePath, mealPlanHTML);
    
    // Generate the access URL with custom domain
    const planUrl = `${baseUrl}/plans/${fileName}`;
    
    console.log('✅ Meal plan generated:', planUrl);
    
    // Add to review queue instead of sending immediately
    await reviewQueue.addToQueue({
      planId,
      userData,
      planUrl,
      planHTML: mealPlanHTML
    });
    
    // Send response back to Typeform
    res.json({
      success: true,
      planId: planId,
      planUrl: planUrl,
      message: 'Meal plan created and added to review queue'
    });
    
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

// Simple test middleware
function simpleAuthMiddleware(req, res, next) {
  console.log('Simple auth middleware called');
  console.log('Cookies:', req.cookies);
  console.log('Admin session:', req.cookies?.adminSession);
  
  if (!req.cookies?.adminSession) {
    console.log('No session, redirecting to login');
    return res.redirect('/login');
  }
  
  console.log('Session found, proceeding');
  next();
}

// Test route to check authentication
app.get('/test-auth', simpleAuthMiddleware, (req, res) => {
  res.json({ 
    success: true, 
    message: 'Authentication working',
    session: req.cookies?.adminSession || 'No session'
  });
});

// Admin dashboard - protected with authentication
app.get('/admin', simpleAuthMiddleware, (req, res) => {
  const filePath = path.join(__dirname, 'views', 'admin-dashboard.html');
  
  // Check if file exists
  fs.access(filePath)
    .then(() => {
      res.sendFile(filePath, (err) => {
        if (err) {
          console.error('Error sending admin dashboard:', err);
          res.status(500).send('Error loading admin dashboard');
        }
      });
    })
    .catch((err) => {
      console.error('Admin dashboard file not found:', err);
      res.status(500).send('Admin dashboard file not found');
    });
});

// Plan editor page
app.get('/admin/edit-plan', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'plan-editor.html');
  
  fs.access(filePath)
    .then(() => {
      res.sendFile(filePath, (err) => {
        if (err) {
          console.error('Error sending plan editor:', err);
          res.status(500).send('Error loading plan editor');
        }
      });
    })
    .catch((err) => {
      console.error('Plan editor file not found:', err);
      res.status(500).send('Plan editor file not found');
    });
});

// Add login page routes
app.get('/login', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'login.html');
  
  fs.access(filePath)
    .then(() => {
      res.sendFile(filePath, (err) => {
        if (err) {
          console.error('Error sending login page:', err);
          res.status(500).send('Error loading login page');
        }
      });
    })
    .catch((err) => {
      console.error('Login page file not found:', err);
      res.status(500).send('Login page file not found');
    });
});

app.get('/client-login', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'client-login.html');
  
  fs.access(filePath)
    .then(() => {
      res.sendFile(filePath, (err) => {
        if (err) {
          console.error('Error sending client login page:', err);
          res.status(500).send('Error loading client login page');
        }
      });
    })
    .catch((err) => {
      console.error('Client login page file not found:', err);
      res.status(500).send('Client login page file not found');
    });
});

// Admin API routes
app.get('/api/admin/queue', async (req, res) => {
  try {
    const queue = await reviewQueue.getQueue();
    res.json(queue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/admin/approve/:planId', async (req, res) => {
  try {
    const { planId } = req.params;
    const approvedPlan = await reviewQueue.approvePlan(planId);
    
    // Send email to client
    await emailService.sendMealPlanEmail(approvedPlan.clientData, approvedPlan.planUrl);
    
    res.json({ success: true, message: 'Plan approved and email sent' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/admin/reject/:planId', async (req, res) => {
  try {
    const { planId } = req.params;
    const { reason } = req.body;
    
    await reviewQueue.rejectPlan(planId, reason);
    
    res.json({ success: true, message: 'Plan rejected' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get completed meal plans
app.get('/api/admin/completed', async (req, res) => {
  try {
    const completedPlans = await reviewQueue.getApprovedPlans();
    res.json(completedPlans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/admin/stats', async (req, res) => {
  try {
    const queue = await reviewQueue.getQueue();
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    
    // Separate pending plans by time
    let pendingOverdue = 0;
    let pendingToday = 0;
    
    queue.forEach(plan => {
      const planDate = new Date(plan.timestamp);
      if (planDate < twentyFourHoursAgo) {
        pendingOverdue++;
      } else {
        pendingToday++;
      }
    });
    
    // Get approved today (placeholder for now)
    const approvedToday = 0; // TODO: Implement approved today count
    
    res.json({
      pendingOverdue,
      pendingToday,
      approvedToday,
      total: queue.length + approvedToday
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Financial Analytics from SamCart
app.get('/api/admin/financial', async (req, res) => {
  try {
    const financialData = await samcartAPI.getFinancialDashboard();
    res.json(financialData);
  } catch (error) {
    console.error('❌ Financial Analytics Error:', error);
    res.status(500).json({ 
      error: error.message,
      today: { revenue: '0.00', orders: 0 },
      monthly: { revenue: '0.00', orders: 0 },
      recentOrders: [],
      customers: { total: 0, active: 0, newThisMonth: 0 }
    });
  }
});

// Load Typeform mapping
const typeformMapping = require('../data/Typeform-Mapping.json');

// Load SamCart API
const SamCartAPI = require('./samcart-api');
const samcartAPI = new SamCartAPI();

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
    methodology: determineMethodology(answers)
  };
}

// Determine which methodology to use based on answers
function determineMethodology(answers) {
  const carbIntake = answers['138b3bd8-91ca-45ff-8218-979d8d74667e'];
  const experience = answers['6b7f5ac4-6e65-4ce1-a2c5-a286f4027408'];
  
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
  console.log(`📍 Webhook endpoint: ${baseUrl}/webhook/typeform`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Shutting down server...');
  process.exit(0);
}); 