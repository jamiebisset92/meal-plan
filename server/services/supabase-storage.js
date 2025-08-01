// Supabase Storage Service for Meal Plans

const { createClient } = require('@supabase/supabase-js');

class SupabaseStorageService {
  constructor() {
    this.supabaseUrl = process.env.SUPABASE_URL;
    this.supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!this.supabaseUrl || !this.supabaseKey) {
      console.warn('⚠️ Supabase credentials not configured');
      this.client = null;
    } else {
      this.client = createClient(this.supabaseUrl, this.supabaseKey);
      console.log('✅ Supabase storage service initialized');
    }
  }

  // Store meal plan in Supabase
  async storeMealPlan(planId, userData, mealPlanHTML) {
    try {
      if (!this.client) {
        throw new Error('Supabase client not initialized');
      }

      const planData = {
        plan_id: planId,
        user_data: userData,
        html_content: mealPlanHTML,
        created_at: new Date().toISOString(),
        status: 'pending'
      };

      const { data, error } = await this.client
        .from('meal_plans')
        .insert(planData);

      if (error) {
        console.error('❌ Error storing meal plan:', error);
        throw error;
      }

      console.log('✅ Meal plan stored in Supabase:', planId);
      return data;
    } catch (error) {
      console.error('❌ Supabase storage error:', error);
      throw error;
    }
  }

  // Retrieve meal plan from Supabase
  async getMealPlan(planId) {
    try {
      if (!this.client) {
        throw new Error('Supabase client not initialized');
      }

      const { data, error } = await this.client
        .from('meal_plans')
        .select('*')
        .eq('plan_id', planId)
        .single();

      if (error) {
        console.error('❌ Error retrieving meal plan:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('❌ Supabase retrieval error:', error);
      throw error;
    }
  }

  // List all meal plans
  async listMealPlans() {
    try {
      if (!this.client) {
        throw new Error('Supabase client not initialized');
      }

      const { data, error } = await this.client
        .from('meal_plans')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('❌ Error listing meal plans:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('❌ Supabase list error:', error);
      throw error;
    }
  }

  // Update meal plan status
  async updateMealPlanStatus(planId, status) {
    try {
      if (!this.client) {
        throw new Error('Supabase client not initialized');
      }

      const { data, error } = await this.client
        .from('meal_plans')
        .update({ status })
        .eq('plan_id', planId);

      if (error) {
        console.error('❌ Error updating meal plan status:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('❌ Supabase update error:', error);
      throw error;
    }
  }

  // Delete meal plan
  async deleteMealPlan(planId) {
    try {
      if (!this.client) {
        throw new Error('Supabase client not initialized');
      }

      const { data, error } = await this.client
        .from('meal_plans')
        .delete()
        .eq('plan_id', planId);

      if (error) {
        console.error('❌ Error deleting meal plan:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('❌ Supabase delete error:', error);
      throw error;
    }
  }
}

module.exports = new SupabaseStorageService(); 