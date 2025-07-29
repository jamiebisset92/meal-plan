/**
 * Main Orchestrator for Meal Planning System
 * Coordinates data flow between all modules
 */

const { calculateNutritionTargets } = require('../modules/Module-1-Calculations');
const { buildPersonalizedNutritionPlan } = require('../modules/Module-5-Meal-Plan');
const { analyzeSupplements } = require('../modules/Module-4-Supplements');

class MealPlanningOrchestrator {
  constructor() {
    this.modules = {
      calculations: require('../modules/Module-1-Calculations'),
      mealPlan: require('../modules/Module-5-Meal-Plan'),
      supplements: require('../modules/Module-4-Supplements'),
      interactive: require('../modules/Module-6-Interactive-HTML')
    };
  }

  /**
   * Generate complete meal plan from user data
   * @param {Object} userData - Complete user data from form/input
   * @param {string} dayType - 'training', 'rest', or 'refeed'
   * @param {Object} options - Additional options
   * @returns {Object} Complete meal plan with HTML
   */
  async generateCompleteMealPlan(userData, dayType = 'training', options = {}) {
    try {
      console.log('🚀 Starting meal plan generation for:', userData.first_name);
      
      // Step 1: Calculate nutrition targets
      console.log('📊 Step 1: Calculating nutrition targets...');
      const nutritionTargets = calculateNutritionTargets(userData);
      
      // Validate targets
      if (!nutritionTargets || !nutritionTargets.training_day) {
        throw new Error('Failed to calculate nutrition targets');
      }
      
      // Step 2: Analyze supplements (if module available)
      let supplementsData = null;
      if (userData.additionalSupplements === "Yes, I'm interested in any & all recommendations") {
        console.log('💊 Step 2: Analyzing supplements...');
        try {
          supplementsData = await this.generateSupplementRecommendations(userData);
          userData.supplementsData = supplementsData;
        } catch (error) {
          console.warn('⚠️ Supplement analysis failed, continuing without:', error.message);
        }
      }
      
      // Step 3: Generate meal plan
      console.log('🍽️ Step 3: Generating precision meal plan...');
      const mealPlanData = this.generateMealPlan(nutritionTargets, userData, dayType);
      
      // Step 4: Generate interactive HTML (if requested)
      let htmlOutput = null;
      if (options.generateHTML !== false) {
        console.log('🎨 Step 4: Generating interactive HTML...');
        htmlOutput = mealPlanData; // buildPersonalizedNutritionPlan already returns HTML
      }
      
      // Return complete result
      const result = {
        success: true,
        userData: userData,
        nutritionTargets: nutritionTargets,
        dayType: dayType,
        supplementsData: supplementsData,
        mealPlan: mealPlanData,
        html: htmlOutput,
        timestamp: new Date().toISOString()
      };
      
      console.log('✅ Meal plan generation complete!');
      return result;
      
    } catch (error) {
      console.error('❌ Error in meal plan generation:', error);
      return {
        success: false,
        error: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
      };
    }
  }

  /**
   * Calculate nutrition targets with validation
   */
  calculateTargets(userData) {
    // Validate required fields
    const requiredFields = ['weight', 'gender', 'age', 'activityLevel'];
    for (const field of requiredFields) {
      if (!userData[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }
    
    // Calculate targets
    const targets = calculateNutritionTargets(userData);
    
    // Validate output
    if (!targets || typeof targets !== 'object') {
      throw new Error('Invalid targets calculated');
    }
    
    return targets;
  }

  /**
   * Generate meal plan for specific day type
   */
  generateMealPlan(targets, userData, dayType = 'training') {
    // Map day type to target structure
    const dayTypeMap = {
      'training': 'training_day',
      'rest': 'rest_day',
      'refeed': 'refeed_day'
    };
    
    const mappedDayType = dayTypeMap[dayType] || 'training_day';
    
    // Ensure targets for this day type exist
    if (!targets[mappedDayType]) {
      console.warn(`No targets for ${mappedDayType}, using training_day as fallback`);
    }
    
    // Add day type to user data for meal generation logic
    userData.currentDayType = dayType;
    
    // Generate meal plan
    return buildPersonalizedNutritionPlan(targets, userData);
  }

  /**
   * Generate supplement recommendations
   */
  async generateSupplementRecommendations(userData) {
    try {
      // Check if supplements module is available
      if (!this.modules.supplements || !this.modules.supplements.analyzeSupplements) {
        console.warn('Supplements module not available');
        return null;
      }
      
      // Generate recommendations
      const supplementAnalysis = await this.modules.supplements.analyzeSupplements(userData);
      
      return supplementAnalysis;
    } catch (error) {
      console.error('Error generating supplement recommendations:', error);
      return null;
    }
  }

  /**
   * Validate user data structure
   */
  validateUserData(userData) {
    const errors = [];
    
    // Required fields
    const required = {
      weight: 'number',
      age: 'number',
      gender: 'string',
      activityLevel: 'string'
    };
    
    for (const [field, type] of Object.entries(required)) {
      if (!userData[field]) {
        errors.push(`Missing required field: ${field}`);
      } else if (typeof userData[field] !== type) {
        errors.push(`Invalid type for ${field}: expected ${type}, got ${typeof userData[field]}`);
      }
    }
    
    // Validate ranges
    if (userData.weight && (userData.weight < 30 || userData.weight > 300)) {
      errors.push('Weight must be between 30-300 kg');
    }
    
    if (userData.age && (userData.age < 18 || userData.age > 100)) {
      errors.push('Age must be between 18-100');
    }
    
    return {
      valid: errors.length === 0,
      errors: errors
    };
  }

  /**
   * Get available day types based on methodology
   */
  getAvailableDayTypes(userData) {
    const methodology = userData.methodology || 'moderate';
    
    if (methodology === 'shelby-justin') {
      return ['high_carb', 'medium_carb', 'low_carb'];
    } else {
      return ['training', 'rest', 'refeed'];
    }
  }

  /**
   * Get meal plan for specific date
   */
  getMealPlanForDate(userData, date) {
    // Determine day type based on training schedule
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const trainingDays = userData.trainingDays || ['Monday', 'Wednesday', 'Friday'];
    
    let dayType = 'rest';
    if (trainingDays.includes(dayOfWeek)) {
      dayType = 'training';
    }
    
    // Check for refeed day (typically Sunday)
    if (dayOfWeek === 'Sunday' && userData.includeRefeedDay) {
      dayType = 'refeed';
    }
    
    return this.generateCompleteMealPlan(userData, dayType);
  }
}

// Create singleton instance
const orchestrator = new MealPlanningOrchestrator();

// Export for different environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = orchestrator;
  module.exports.MealPlanningOrchestrator = MealPlanningOrchestrator;
} else if (typeof window !== 'undefined') {
  window.MealPlanningOrchestrator = MealPlanningOrchestrator;
  window.mealPlanningOrchestrator = orchestrator;
}

// Example usage:
/*
const orchestrator = require('./main-orchestrator');

// Simple usage
const result = await orchestrator.generateCompleteMealPlan(userData);

// With options
const result = await orchestrator.generateCompleteMealPlan(userData, 'training', {
  generateHTML: true,
  includeSupplements: true
});

// Get meal plan for specific date
const mealPlan = await orchestrator.getMealPlanForDate(userData, new Date('2024-01-15'));
*/ 