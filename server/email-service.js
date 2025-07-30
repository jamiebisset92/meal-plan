// ==================================================================================
// 📧 EMAIL SERVICE FOR MEAL PLAN DELIVERY
// ==================================================================================
// Handles sending meal plan URLs to clients via email
// ==================================================================================

const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransporter({
      service: 'gmail', // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }

  async sendMealPlanEmail(clientData, planUrl) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: clientData.email,
      subject: `Your Personalized Meal Plan is Ready! 🍽️`,
      html: this.generateMealPlanEmailHTML(clientData, planUrl)
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('✅ Meal plan email sent to:', clientData.email);
      return { success: true };
    } catch (error) {
      console.error('❌ Email sending failed:', error);
      return { success: false, error: error.message };
    }
  }

  generateMealPlanEmailHTML(clientData, planUrl) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Your Meal Plan is Ready!</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2c5aa0;">🍽️ Your Personalized Meal Plan is Ready!</h1>
          
          <p>Hi ${clientData.first_name},</p>
          
          <p>Great news! Your personalized meal plan has been created and is ready for you to access.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #2c5aa0; margin-top: 0;">📋 What's Included:</h2>
            <ul>
              <li>✅ Personalized macro targets based on your goals</li>
              <li>✅ 4 daily meals with exact portions</li>
              <li>✅ Interactive tracking system</li>
              <li>✅ Food swap suggestions</li>
              <li>✅ Supplement recommendations</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${planUrl}" 
               style="background: #2c5aa0; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
              🚀 Access Your Meal Plan
            </a>
          </div>
          
          <p><strong>Important Notes:</strong></p>
          <ul>
            <li>This link is unique to you - please don't share it</li>
            <li>Your plan works on all devices (mobile, tablet, desktop)</li>
            <li>Use the checkboxes to track your daily progress</li>
            <li>Contact us if you need any adjustments</li>
          </ul>
          
          <p>Enjoy your personalized nutrition journey!</p>
          
          <p>Best regards,<br>
          Stephanie Sanzo Nutrition Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666;">
            If you have any questions, reply to this email or contact us at support@stephaniesanzo.com
          </p>
        </div>
      </body>
      </html>
    `;
  }
}

module.exports = EmailService; 