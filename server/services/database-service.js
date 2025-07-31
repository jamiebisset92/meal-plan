const { supabase, supabaseAdmin, isSupabaseConfigured } = require('../supabase-config');
const fs = require('fs').promises;
const path = require('path');

class DatabaseService {
  constructor() {
    this.useSupabase = isSupabaseConfigured;
    console.log(`🗄️ Database Service: ${this.useSupabase ? 'Supabase' : 'File-based'} mode`);
  }

  // ===== MEAL PLANS =====

  async addMealPlan(planData) {
    if (this.useSupabase) {
      return this.addMealPlanToSupabase(planData);
    } else {
      return this.addMealPlanToFile(planData);
    }
  }

  async addMealPlanToSupabase(planData) {
    try {
      const { data, error } = await supabaseAdmin
        .from('meal_plans')
        .insert({
          id: planData.planId,
          client_data: planData.userData,
          nutrition_targets: planData.targets || {},
          plan_html: planData.planHTML,
          plan_url: planData.planUrl,
          status: 'pending'
        })
        .select()
        .single();

      if (error) throw error;
      console.log('✅ Meal plan added to Supabase:', planData.planId);
      return data;
    } catch (error) {
      console.error('❌ Error adding meal plan to Supabase:', error);
      throw error;
    }
  }

  async addMealPlanToFile(planData) {
    const queuePath = path.join(__dirname, '../data/review-queue');
    const filePath = path.join(queuePath, `${planData.planId}.json`);
    
    const queueItem = {
      id: planData.planId,
      timestamp: new Date().toISOString(),
      clientData: planData.userData,
      planUrl: planData.planUrl,
      status: 'pending',
      planHTML: planData.planHTML
    };

    await fs.writeFile(filePath, JSON.stringify(queueItem, null, 2));
    console.log('✅ Meal plan added to file system:', planData.planId);
    return queueItem;
  }

  async getMealPlans(status = 'pending') {
    if (this.useSupabase) {
      return this.getMealPlansFromSupabase(status);
    } else {
      return this.getMealPlansFromFile(status);
    }
  }

  async getMealPlansFromSupabase(status) {
    try {
      const { data, error } = await supabaseAdmin
        .from('meal_plans')
        .select('*')
        .eq('status', status)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('❌ Error getting meal plans from Supabase:', error);
      return [];
    }
  }

  async getMealPlansFromFile(status) {
    try {
      const queuePath = path.join(__dirname, '../data/review-queue');
      const approvedPath = path.join(__dirname, '../data/approved-plans');
      
      const targetPath = status === 'pending' ? queuePath : approvedPath;
      const files = await fs.readdir(targetPath);
      
      const plans = [];
      for (const file of files) {
        if (file.endsWith('.json')) {
          const content = await fs.readFile(path.join(targetPath, file), 'utf8');
          plans.push(JSON.parse(content));
        }
      }
      
      return plans.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    } catch (error) {
      console.error('❌ Error getting meal plans from file:', error);
      return [];
    }
  }

  async approveMealPlan(planId, approvedBy = 'admin') {
    if (this.useSupabase) {
      return this.approveMealPlanInSupabase(planId, approvedBy);
    } else {
      return this.approveMealPlanInFile(planId, approvedBy);
    }
  }

  async approveMealPlanInSupabase(planId, approvedBy) {
    try {
      const { data, error } = await supabaseAdmin
        .from('meal_plans')
        .update({
          status: 'approved',
          approved_at: new Date().toISOString(),
          approved_by: approvedBy
        })
        .eq('id', planId)
        .select()
        .single();

      if (error) throw error;
      console.log('✅ Meal plan approved in Supabase:', planId);
      return data;
    } catch (error) {
      console.error('❌ Error approving meal plan in Supabase:', error);
      throw error;
    }
  }

  async approveMealPlanInFile(planId, approvedBy) {
    const queueFile = path.join(__dirname, '../data/review-queue', `${planId}.json`);
    const approvedFile = path.join(__dirname, '../data/approved-plans', `${planId}.json`);
    
    const queueData = JSON.parse(await fs.readFile(queueFile, 'utf8'));
    queueData.status = 'approved';
    queueData.approvedBy = approvedBy;
    queueData.approvedAt = new Date().toISOString();
    
    await fs.writeFile(approvedFile, JSON.stringify(queueData, null, 2));
    await fs.unlink(queueFile);
    
    console.log('✅ Meal plan approved in file system:', planId);
    return queueData;
  }

  // ===== PROGRESS TRACKING =====

  async saveProgress(planId, progressData) {
    if (this.useSupabase) {
      return this.saveProgressToSupabase(planId, progressData);
    } else {
      return this.saveProgressToFile(planId, progressData);
    }
  }

  async saveProgressToSupabase(planId, progressData) {
    try {
      const { data, error } = await supabaseAdmin
        .from('progress_tracking')
        .upsert({
          plan_id: planId,
          checked_items: progressData.checkedItems,
          current_day: progressData.currentDay,
          last_updated: new Date().toISOString()
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('❌ Error saving progress to Supabase:', error);
      throw error;
    }
  }

  async saveProgressToFile(planId, progressData) {
    const progressPath = path.join(__dirname, '../data/progress', `${planId}.json`);
    await fs.writeFile(progressPath, JSON.stringify(progressData, null, 2));
    return progressData;
  }

  async getProgress(planId) {
    if (this.useSupabase) {
      return this.getProgressFromSupabase(planId);
    } else {
      return this.getProgressFromFile(planId);
    }
  }

  async getProgressFromSupabase(planId) {
    try {
      const { data, error } = await supabaseAdmin
        .from('progress_tracking')
        .select('*')
        .eq('plan_id', planId)
        .single();

      if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows returned
      return data || { checkedItems: {}, currentDay: 'monday' };
    } catch (error) {
      console.error('❌ Error getting progress from Supabase:', error);
      return { checkedItems: {}, currentDay: 'monday' };
    }
  }

  async getProgressFromFile(planId) {
    try {
      const progressPath = path.join(__dirname, '../data/progress', `${planId}.json`);
      const content = await fs.readFile(progressPath, 'utf8');
      return JSON.parse(content);
    } catch (error) {
      return { checkedItems: {}, currentDay: 'monday' };
    }
  }

  // ===== FOOD DATABASE =====

  async getFoodDatabase() {
    if (this.useSupabase) {
      return this.getFoodDatabaseFromSupabase();
    } else {
      return this.getFoodDatabaseFromFile();
    }
  }

  async getFoodDatabaseFromSupabase() {
    try {
      const { data, error } = await supabaseAdmin
        .from('food_database')
        .select('*')
        .order('name');

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('❌ Error getting food database from Supabase:', error);
      return [];
    }
  }

  async getFoodDatabaseFromFile() {
    // This would load from the existing CSV file
    // For now, return empty array - will implement CSV loading
    return [];
  }
}

module.exports = DatabaseService; 