# 🚀 WEBHOOK SERVER SETUP GUIDE

## 📋 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Environment File
Create a `.env` file in your project root:
```env
PORT=3000
BASE_URL=http://localhost:3000
```

### 3. Start the Server
```bash
npm run dev   # Development mode with auto-reload
# or
npm start     # Production mode
```

Your server is now running at `http://localhost:3000`!

---

## 🔗 Typeform Webhook Configuration

### 1. Get Your Webhook URL
- **Local Testing**: Use ngrok (see below)
- **Production**: `https://yourdomain.com/webhook/typeform`

### 2. Configure Typeform Webhook
1. Go to your Typeform dashboard
2. Click on your form → "Connect" → "Webhooks"
3. Add webhook URL: `https://your-server.com/webhook/typeform`
4. Select "Send me data on each submission"
5. Save and test!

### 3. Testing with Ngrok (Local Development)
```bash
# Install ngrok
npm install -g ngrok

# In one terminal, start your server
npm run dev

# In another terminal, create tunnel
ngrok http 3000

# Use the ngrok URL for Typeform webhook
# Example: https://abc123.ngrok.io/webhook/typeform
```

---

## 🧪 Testing Your Setup

### 1. Test Webhook Endpoint
```bash
# Send test webhook
curl -X POST http://localhost:3000/webhook/typeform \
  -H "Content-Type: application/json" \
  -d '{
    "form_response": {
      "answers": [
        {
          "type": "text",
          "text": "John",
          "field": { "id": "89474c10-e31b-46ff-a93d-c6bf3eb439d2" }
        },
        {
          "type": "text", 
          "text": "Doe",
          "field": { "id": "9d67872c-f9c0-4b87-bee3-e36f23ba9fcd" }
        }
      ]
    }
  }'
```

### 2. View Generated Plan
After webhook processes, visit:
```
http://localhost:3000/plans/john-xxxxx.html
```

---

## 🚀 Production Deployment

### Option 1: Railway (Recommended - Easy)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and initialize
railway login
railway init

# Deploy
railway up

# Get your URL
railway domain
```

### Option 2: Render
1. Push code to GitHub
2. Connect GitHub repo to Render
3. Set environment variables:
   - `BASE_URL`: Your Render URL
4. Deploy!

### Option 3: VPS (DigitalOcean/AWS)
```bash
# On your server
git clone your-repo
cd meal-planning-system
npm install
npm install -g pm2

# Start with PM2
pm2 start server.js --name meal-planning
pm2 save
pm2 startup

# Setup Nginx reverse proxy
sudo nano /etc/nginx/sites-available/meal-planning
```

Nginx config:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 📧 Email Integration (Optional)

To automatically email plans to clients, update `server.js`:

```javascript
const nodemailer = require('nodemailer');

// Configure email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Send plan email
async function sendPlanEmail(email, planUrl) {
  await transporter.sendMail({
    from: '"Stephanie Sanzo" <noreply@stephaniesanzo.com>',
    to: email,
    subject: 'Your Personalized Meal Plan is Ready!',
    html: `
      <h2>Your meal plan is ready!</h2>
      <p>Click here to view your personalized nutrition plan:</p>
      <a href="${planUrl}" style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View My Plan</a>
    `
  });
}
```

Add to `.env`:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

---

## 🔍 Troubleshooting

### Issue: "Module not found"
```bash
npm install
```

### Issue: "Port already in use"
```bash
# Find process using port 3000
lsof -i :3000
# Kill it
kill -9 [PID]
```

### Issue: Typeform webhook not receiving
1. Check ngrok is running (for local)
2. Verify webhook URL in Typeform
3. Check server logs: `npm run dev`

### Issue: Meal plan not generating
1. Check Module-58 has HTML generation code
2. Verify food database is loading
3. Check console logs for errors

---

## 📊 Monitoring

### View Server Logs
```bash
# Development
npm run dev

# Production with PM2
pm2 logs meal-planning
```

### Check Generated Plans
```bash
ls public/plans/
```

---

## 🎯 Next Steps

1. **Test with real Typeform submission**
2. **Deploy to production**
3. **Update Typeform webhook URL**
4. **Add email notifications**
5. **Set up monitoring/alerts**

---

## 🆘 Need Help?

- Check server logs first
- Test webhook with curl
- Verify all modules are present
- Ensure database CSV is accessible

Remember: The server needs all your modules:
- `Module-51-Calculations.js`
- `Module-58-Meal-Plan.js` (with HTML generation)
- `food-database-loader.js`
- `Nutritional Database.csv` 