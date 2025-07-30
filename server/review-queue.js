// ==================================================================================
// 📋 REVIEW QUEUE SYSTEM FOR MEAL PLAN APPROVAL
// ==================================================================================
// Manages meal plans awaiting review and approval
// ==================================================================================

const fs = require('fs').promises;
const path = require('path');

class ReviewQueue {
  constructor() {
    this.queuePath = path.join(__dirname, 'data', 'review-queue');
    this.approvedPath = path.join(__dirname, 'data', 'approved-plans');
    this.ensureDirectories();
  }

  async ensureDirectories() {
    await fs.mkdir(this.queuePath, { recursive: true });
    await fs.mkdir(this.approvedPath, { recursive: true });
  }

  async addToQueue(planData) {
    const queueItem = {
      id: planData.planId,
      timestamp: new Date().toISOString(),
      clientData: planData.userData,
      planUrl: planData.planUrl,
      status: 'pending',
      planHTML: planData.planHTML
    };

    const filePath = path.join(this.queuePath, `${planData.planId}.json`);
    await fs.writeFile(filePath, JSON.stringify(queueItem, null, 2));
    
    console.log('📋 Added to review queue:', planData.planId);
    return queueItem;
  }

  async getQueue() {
    try {
      const files = await fs.readdir(this.queuePath);
      const queue = [];
      
      for (const file of files) {
        if (file.endsWith('.json')) {
          const content = await fs.readFile(path.join(this.queuePath, file), 'utf8');
          queue.push(JSON.parse(content));
        }
      }
      
      return queue.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    } catch (error) {
      console.error('❌ Error reading queue:', error);
      return [];
    }
  }

  async approvePlan(planId, approvedBy = 'admin') {
    try {
      const queueFile = path.join(this.queuePath, `${planId}.json`);
      const approvedFile = path.join(this.approvedPath, `${planId}.json`);
      
      // Read from queue
      const queueData = JSON.parse(await fs.readFile(queueFile, 'utf8'));
      
      // Update status
      queueData.status = 'approved';
      queueData.approvedBy = approvedBy;
      queueData.approvedAt = new Date().toISOString();
      
      // Move to approved
      await fs.writeFile(approvedFile, JSON.stringify(queueData, null, 2));
      await fs.unlink(queueFile);
      
      console.log('✅ Plan approved:', planId);
      return queueData;
    } catch (error) {
      console.error('❌ Error approving plan:', error);
      throw error;
    }
  }

  async rejectPlan(planId, reason = '') {
    try {
      const queueFile = path.join(this.queuePath, `${planId}.json`);
      const queueData = JSON.parse(await fs.readFile(queueFile, 'utf8'));
      
      queueData.status = 'rejected';
      queueData.rejectionReason = reason;
      queueData.rejectedAt = new Date().toISOString();
      
      await fs.writeFile(queueFile, JSON.stringify(queueData, null, 2));
      
      console.log('❌ Plan rejected:', planId);
      return queueData;
    } catch (error) {
      console.error('❌ Error rejecting plan:', error);
      throw error;
    }
  }

  async getPlanById(planId) {
    try {
      const queueFile = path.join(this.queuePath, `${planId}.json`);
      const approvedFile = path.join(this.approvedPath, `${planId}.json`);
      
      // Check queue first
      try {
        const content = await fs.readFile(queueFile, 'utf8');
        return JSON.parse(content);
      } catch {
        // Check approved
        try {
          const content = await fs.readFile(approvedFile, 'utf8');
          return JSON.parse(content);
        } catch {
          return null;
        }
      }
    } catch (error) {
      console.error('❌ Error getting plan:', error);
      return null;
    }
  }
}

module.exports = ReviewQueue; 