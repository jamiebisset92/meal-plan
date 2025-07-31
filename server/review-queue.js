// ==================================================================================
// 📋 REVIEW QUEUE SYSTEM FOR MEAL PLAN APPROVAL
// ==================================================================================
// Manages meal plans awaiting review and approval
// ==================================================================================

const fs = require('fs').promises;
const path = require('path');
const DatabaseService = require('./services/database-service');

class ReviewQueue {
  constructor() {
    this.queuePath = path.join(__dirname, 'data', 'review-queue');
    this.approvedPath = path.join(__dirname, 'data', 'approved-plans');
    this.databaseService = new DatabaseService();
    this.ensureDirectories();
  }

  async ensureDirectories() {
    await fs.mkdir(this.queuePath, { recursive: true });
    await fs.mkdir(this.approvedPath, { recursive: true });
  }

  async addToQueue(planData) {
    return this.databaseService.addMealPlan(planData);
  }

  async getQueue() {
    return this.databaseService.getMealPlans('pending');
  }

  async getApprovedPlans() {
    return this.databaseService.getMealPlans('approved');
  }

  async approvePlan(planId, approvedBy = 'admin') {
    return this.databaseService.approveMealPlan(planId, approvedBy);
  }

  async rejectPlan(planId, reason = '') {
    // For now, just delete from queue
    // In future, could move to 'rejected' status
    try {
      const queueFile = path.join(this.queuePath, `${planId}.json`);
      await fs.unlink(queueFile);
      console.log('❌ Plan rejected:', planId);
    } catch (error) {
      console.error('❌ Error rejecting plan:', error);
      throw error;
    }
  }

  async getPlanById(planId) {
    try {
      // Try to get from pending queue
      const pendingPlans = await this.getQueue();
      const pendingPlan = pendingPlans.find(p => p.id === planId);
      if (pendingPlan) return pendingPlan;

      // Try to get from approved plans
      const approvedPlans = await this.getApprovedPlans();
      const approvedPlan = approvedPlans.find(p => p.id === planId);
      if (approvedPlan) return approvedPlan;

      return null;
    } catch (error) {
      console.error('❌ Error getting plan:', error);
      return null;
    }
  }
}

module.exports = ReviewQueue; 