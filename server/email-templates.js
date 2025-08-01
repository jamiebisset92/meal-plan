// Email Templates for Client Delivery

const emailTemplates = {
  // Welcome email with meal plan link
  welcomeWithPlan: (clientName, planUrl) => ({
    subject: `Your Personalized Meal Plan is Ready, ${clientName}! 🍽️`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Meal Plan is Ready!</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; }
          .button { display: inline-block; background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
          .highlight { background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Your Meal Plan is Ready!</h1>
            <p>Hi ${clientName}, your personalized nutrition plan has been created!</p>
          </div>
          
          <div class="content">
            <h2>What's Next?</h2>
            <p>Your meal plan has been carefully crafted based on your goals, preferences, and lifestyle. Here's what you can expect:</p>
            
            <ul>
              <li>📊 <strong>Precision Nutrition</strong> - Calculated specifically for your body and goals</li>
              <li>🏋️ <strong>Training Integration</strong> - Optimized for your workout schedule</li>
              <li>👨‍🍳 <strong>Cooking Preferences</strong> - Tailored to your time and skill level</li>
              <li>🔄 <strong>Interactive Features</strong> - Swap foods and track progress</li>
            </ul>
            
            <div class="highlight">
              <strong>💡 Pro Tip:</strong> Bookmark your meal plan link so you can access it anytime, anywhere!
            </div>
            
            <a href="${planUrl}" class="button">View Your Meal Plan</a>
            
            <h3>How to Use Your Plan</h3>
            <ol>
              <li><strong>Review your plan</strong> - Check out your daily meals and nutrition targets</li>
              <li><strong>Track your progress</strong> - Use the interactive checkboxes to mark completed items</li>
              <li><strong>Swap foods</strong> - Click on any food to see alternatives that fit your macros</li>
              <li><strong>Stay consistent</strong> - Follow your plan for best results</li>
            </ol>
            
            <h3>Need Help?</h3>
            <p>If you have any questions about your meal plan or need adjustments, just reply to this email. I'm here to support your success!</p>
          </div>
          
          <div class="footer">
            <p>Stephanie Sanzo Nutrition</p>
            <p>Your journey to better nutrition starts now! 💪</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Your Personalized Meal Plan is Ready, ${clientName}! 🍽️

Hi ${clientName},

Your meal plan has been created and is ready to view!

🔗 Access your plan: ${planUrl}

What's included:
- Precision nutrition calculated for your body and goals
- Training schedule integration
- Cooking preferences optimization
- Interactive food swapping
- Progress tracking

How to use your plan:
1. Review your daily meals and nutrition targets
2. Use the interactive checkboxes to track progress
3. Click on foods to see alternatives
4. Stay consistent for best results

Need help? Just reply to this email!

Stephanie Sanzo Nutrition
    `
  }),

  // Follow-up email
  followUp: (clientName) => ({
    subject: `How's your meal plan going, ${clientName}? 📊`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meal Plan Check-in</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; }
          .button { display: inline-block; background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📊 How's Your Progress?</h1>
            <p>Hi ${clientName}, checking in on your meal plan journey!</p>
          </div>
          
          <div class="content">
            <h2>How are you feeling?</h2>
            <p>I'd love to hear how your meal plan is working for you:</p>
            
            <ul>
              <li>✅ Are you finding the meals easy to follow?</li>
              <li>✅ How's your energy and progress?</li>
              <li>✅ Any foods you'd like to swap or adjust?</li>
              <li>✅ Questions about timing or portions?</li>
            </ul>
            
            <p><strong>Remember:</strong> Consistency is key! Even small changes add up to big results over time.</p>
            
            <h3>Need Adjustments?</h3>
            <p>If your meal plan needs tweaking, just reply to this email with:</p>
            <ul>
              <li>What's working well</li>
              <li>What's challenging</li>
              <li>Any changes in your schedule or preferences</li>
            </ul>
            
            <p>I'm here to support your success! 💪</p>
          </div>
          
          <div class="footer">
            <p>Stephanie Sanzo Nutrition</p>
            <p>Your success is my priority!</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
How's your meal plan going, ${clientName}? 📊

Hi ${clientName},

Checking in on your meal plan progress! I'd love to hear how it's working for you:

✅ Are you finding the meals easy to follow?
✅ How's your energy and progress?
✅ Any foods you'd like to swap or adjust?
✅ Questions about timing or portions?

Remember: Consistency is key! Even small changes add up to big results.

Need adjustments? Just reply with what's working, what's challenging, or any schedule changes.

I'm here to support your success! 💪

Stephanie Sanzo Nutrition
    `
  }),

  // Plan update notification
  planUpdated: (clientName, planUrl) => ({
    subject: `Your Meal Plan Has Been Updated, ${clientName}! 🔄`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meal Plan Updated</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; }
          .button { display: inline-block; background: #28a745; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔄 Your Meal Plan Has Been Updated!</h1>
            <p>Hi ${clientName}, your nutrition plan has been refreshed!</p>
          </div>
          
          <div class="content">
            <h2>What's New?</h2>
            <p>Based on your feedback and progress, I've updated your meal plan with:</p>
            
            <ul>
              <li>🎯 <strong>Refined nutrition targets</strong> - Adjusted for your current progress</li>
              <li>🍽️ <strong>New meal combinations</strong> - Fresh variety to keep you engaged</li>
              <li>⚡ <strong>Optimized timing</strong> - Better aligned with your schedule</li>
              <li>🔄 <strong>Updated preferences</strong> - Incorporating your feedback</li>
            </ul>
            
            <a href="${planUrl}" class="button">View Updated Plan</a>
            
            <h3>Keep Up the Great Work!</h3>
            <p>Your dedication to your nutrition goals is inspiring. This updated plan will help you continue making progress!</p>
          </div>
          
          <div class="footer">
            <p>Stephanie Sanzo Nutrition</p>
            <p>Your success journey continues! 💪</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Your Meal Plan Has Been Updated, ${clientName}! 🔄

Hi ${clientName},

Your nutrition plan has been refreshed based on your feedback and progress!

🔗 View updated plan: ${planUrl}

What's new:
- Refined nutrition targets for your current progress
- New meal combinations for variety
- Optimized timing for your schedule
- Updated preferences based on your feedback

Keep up the great work! Your dedication is inspiring.

Stephanie Sanzo Nutrition
    `
  })
};

module.exports = emailTemplates; 