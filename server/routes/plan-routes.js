const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const crypto = require('crypto');

const router = express.Router();

// Generate unique plan ID
function generatePlanId(userData) {
  const timestamp = Date.now();
  const userHash = crypto.createHash('md5')
    .update(`${userData.first_name}${userData.last_name}${userData.email}`)
    .digest('hex')
    .substring(0, 8);
  
  return `${userData.first_name.toLowerCase()}-${userHash}`;
}

// Create new meal plan
router.post('/create-plan', async (req, res) => {
  try {
    const { userData, mealPlanHTML } = req.body;
    
    if (!userData || !mealPlanHTML) {
      return res.status(400).json({
        success: false,
        error: 'Missing required data'
      });
    }

    // Generate unique plan ID
    const planId = generatePlanId(userData);
    const fileName = `${planId}.html`;
    const filePath = path.join(__dirname, '..', 'public', 'plans', fileName);
    
    // Ensure directory exists
    await fs.mkdir(path.join(__dirname, '..', 'public', 'plans'), { recursive: true });
    
    // Save the HTML file
    await fs.writeFile(filePath, mealPlanHTML);
    
    // Generate the access URL
    const baseUrl = process.env.BASE_URL || 'https://stephaniesanzo.com';
    const planUrl = `${baseUrl}/plans/${fileName}`;
    
    console.log('✅ Plan created:', planUrl);
    
    res.json({
      success: true,
      planId,
      planUrl,
      fileName
    });
    
  } catch (error) {
    console.error('❌ Error creating plan:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Access meal plan by ID
router.get('/plans/:planId', async (req, res) => {
  try {
    const { planId } = req.params;
    const fileName = `${planId}.html`;
    const filePath = path.join(__dirname, '..', 'public', 'plans', fileName);
    
    // Check if file exists
    try {
      await fs.access(filePath);
    } catch (error) {
      return res.status(404).json({
        success: false,
        error: 'Plan not found'
      });
    }
    
    // Read and serve the HTML file
    const htmlContent = await fs.readFile(filePath, 'utf8');
    
    res.setHeader('Content-Type', 'text/html');
    res.send(htmlContent);
    
  } catch (error) {
    console.error('❌ Error serving plan:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// List all plans (admin only)
router.get('/admin/plans', async (req, res) => {
  try {
    const plansDir = path.join(__dirname, '..', 'public', 'plans');
    
    // Check if directory exists
    try {
      await fs.access(plansDir);
    } catch (error) {
      return res.json({
        success: true,
        plans: []
      });
    }
    
    // Read all plan files
    const files = await fs.readdir(plansDir);
    const plans = files
      .filter(file => file.endsWith('.html'))
      .map(file => {
        const planId = file.replace('.html', '');
        return {
          planId,
          fileName: file,
          url: `${process.env.BASE_URL || 'https://stephaniesanzo.com'}/plans/${file}`
        };
      });
    
    res.json({
      success: true,
      plans
    });
    
  } catch (error) {
    console.error('❌ Error listing plans:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Delete plan (admin only)
router.delete('/admin/plans/:planId', async (req, res) => {
  try {
    const { planId } = req.params;
    const fileName = `${planId}.html`;
    const filePath = path.join(__dirname, '..', 'public', 'plans', fileName);
    
    // Check if file exists
    try {
      await fs.access(filePath);
    } catch (error) {
      return res.status(404).json({
        success: false,
        error: 'Plan not found'
      });
    }
    
    // Delete the file
    await fs.unlink(filePath);
    
    res.json({
      success: true,
      message: 'Plan deleted successfully'
    });
    
  } catch (error) {
    console.error('❌ Error deleting plan:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router; 