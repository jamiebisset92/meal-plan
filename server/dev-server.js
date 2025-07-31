// Real-Time UI Development Server
const express = require('express');
const orchestrator = require('../src/services/main-orchestrator');

const app = express();
const PORT = 3001;

// Serve static files from public directory
app.use(express.static('public'));

// Test user data - you can modify this
const testUser = {
  first_name: "Sarah",
  last_name: "Johnson", 
  email: "sarah@example.com",
  gender: "female",
  age: 28,
  weight: 65,
  weightUnit: "kg",
  height: "165",
  activityLevel: "moderate",
  primaryGoal: "muscle",
  methodology: "moderate",
  favProteins: ["Chicken Breast", "Greek Yogurt"],
  favCarbs: ["Sweet Potato", "Oats"],
  favFats: ["Avocado", "Almonds"],
  // Enable post-workout nutrition
  proteinPowder: "Yes, I already use protein powder regularly",
  additionalSupplements: "Yes, I'm interested in any & all recommendations",
  dietaryStyle: "No Restrictions: Animal based products are fine",
  // Enable coffee and energy drinks
  drinksCoffee: "Yes",
  numberOfCoffees: "2",
  coffeeMilkSugar: "with milk",
  blackCoffeeSwitch: "No",
  otherCaffeine: "Yes",
  energyDrinksPerDay: "1",
  // Training schedule
  trainingDays: ["Monday", "Wednesday", "Friday"],
  // Mock supplements data for testing
  supplementsData: {
    supplement_analysis: {
      tier_assignment: "essential_plus",
      age_bracket: "22-32"
    },
    personalized_protocol: {
      age_optimized_daily_foundation: "Berberine 500mg before largest meal + Magnesium 400mg PM",
      energy_vitality_stack: "Tribulus 750mg AM (natural testosterone and energy support)",
      training_optimization: "Creatine 5g daily + BCAAs 10g pre-workout",
      recovery_sleep_stack: "Magnesium 400mg PM + Ashwagandha 600mg PM",
      metabolic_health: "Omega-3 2000mg daily + Vitamin D3 4000IU",
      immune_gut_health: "Probiotics 50B CFU daily + Vitamin C 1000mg"
    },
    stephanie_education: {
      age_responsive_tier_explanation: "Perfect for your age and energy level - this gives you the foundation plus that extra edge for performance and vitality."
    },
    safety_and_sourcing: {
      age_specific_contraindications: "Always check with healthcare provider if taking medications"
    }
  }
};

// Clear require cache to get fresh changes
function clearCache() {
  delete require.cache[require.resolve('../src/services/main-orchestrator')];
  delete require.cache[require.resolve('../src/modules/Module-5-Meal-Plan')];
  delete require.cache[require.resolve('../src/modules/Module-1-Calculations')];
  delete require.cache[require.resolve('../src/modules/Module-6-Interactive-HTML')];
  delete require.cache[require.resolve('../src/utils/food-database-loader')];
}

// Live preview endpoint
app.get('/', async (req, res) => {
  try {
    console.log('🔄 Regenerating UI with latest changes...');
    
    // Clear cache to get fresh changes
    clearCache();
    
    // Re-require orchestrator to get latest changes
    const orchestrator = require('../src/services/main-orchestrator');
    
    // Determine day type from query param or default
    const dayType = req.query.day || 'training';
    
    // Generate fresh meal plan using orchestrator
    console.log('📊 Generating meal plan for:', dayType, 'day');
    const result = await orchestrator.generateCompleteMealPlan(testUser, dayType, {
      generateHTML: true,
      includeSupplements: true
    });
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to generate meal plan');
    }
    
    console.log('✅ UI regenerated successfully!');
    res.send(result.html);
  } catch (error) {
    console.error('❌ Error generating UI:', error);
    res.status(500).send(`
      <h1>Error generating UI</h1>
      <pre>${error.message}</pre>
      <p>Check your console for details.</p>
      <script>setTimeout(() => location.reload(), 2000);</script>
    `);
  }
});

// Day type switcher endpoint
app.get('/switch-day', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Day Type Switcher</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .buttons { margin: 20px 0; }
        button { 
          padding: 10px 20px; 
          margin: 5px; 
          font-size: 16px; 
          cursor: pointer;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 5px;
        }
        button:hover { background: #2980b9; }
        iframe { width: 100%; height: 600px; border: 1px solid #ddd; }
      </style>
    </head>
    <body>
      <h1>Meal Plan Day Type Switcher</h1>
      <div class="buttons">
        <button onclick="loadDay('training')">Training Day</button>
        <button onclick="loadDay('rest')">Rest Day</button>
        <button onclick="loadDay('refeed')">Refeed Day</button>
      </div>
      <iframe id="preview" src="/?day=training"></iframe>
      <script>
        function loadDay(dayType) {
          document.getElementById('preview').src = '/?day=' + dayType;
        }
      </script>
    </body>
    </html>
  `);
});

// Auto-refresh script endpoint
app.get('/auto-refresh.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.send(`
    // Auto-refresh every 2 seconds when you press 'r'
    let autoRefresh = false;
    document.addEventListener('keydown', (e) => {
      if (e.key === 'r' || e.key === 'R') {
        if (!autoRefresh) {
          autoRefresh = true;
          console.log('🔄 Auto-refresh enabled - page will reload every 2 seconds');
          setInterval(() => location.reload(), 2000);
        }
      }
      if (e.key === 's' || e.key === 'S') {
        autoRefresh = false;
        console.log('⏹️ Auto-refresh stopped');
      }
    });
    console.log('💡 Press "R" for auto-refresh, "S" to stop');
  `);
});

app.listen(PORT, () => {
  console.log(`🎨 UI Development Server running!`);
  console.log(`📱 Open: https://stephaniesanzo.com`);
  console.log(`🔄 Day Switcher: https://stephaniesanzo.com/switch-day`);
  console.log(`🔄 Make changes to any module and refresh browser`);
  console.log(`⚡ Press 'R' in browser for auto-refresh mode`);
}); 