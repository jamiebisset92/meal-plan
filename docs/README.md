# 🍽️ Stephanie Sanzo's Meal Planning System

A professional webhook-based meal planning system that generates personalized nutrition plans based on Typeform submissions.

## 🚀 Features

- **Automated Meal Plan Generation** - Receives Typeform webhooks and generates personalized meal plans
- **Precision Nutrition Engine** - Mathematical precision with ±25 calorie tolerance
- **Multiple Methodologies** - Supports both moderate and extreme carb cycling approaches
- **Expanded Food Database** - 147+ foods with user preferences prioritization
- **Unique URL Access** - Each client gets a personalized URL for their meal plan
- **Mobile Responsive** - Beautiful, professional meal plans that work on all devices

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Typeform account with configured form

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/jamiebisset92/meal-plan.git
cd meal-plan
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
PORT=3000
BASE_URL=http://localhost:3000
# Add email configuration if needed
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🏃‍♂️ Running Locally

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

Your server will be available at `http://localhost:3000`

## 🔗 Typeform Webhook Setup

1. Log into your Typeform account
2. Navigate to your form
3. Go to Connect → Webhooks
4. Add webhook URL: 
   - Local: Use ngrok (see below)
   - Production: `https://your-domain.com/webhook/typeform`

### Testing with ngrok:
```bash
# Install ngrok
npm install -g ngrok

# Create tunnel
ngrok http 3000

# Use the ngrok URL in Typeform
```

## 📁 Project Structure

```
meal-plan/
├── server.js                    # Main webhook server
├── Module-51-Calculations.js    # Nutrition calculations
├── Module-58-Meal-Plan.js       # Meal plan generation
├── food-database-loader.js      # Food database interface
├── Nutritional Database.csv     # Food nutrition data
├── Typeform-Mapping.json        # Field ID mappings
├── public/                      # Static files
│   └── plans/                   # Generated meal plans
└── package.json                 # Dependencies
```

## 🚀 Deployment

### Railway (Recommended)
```bash
railway login
railway init
railway up
```

### Render
1. Push to GitHub
2. Connect repository in Render
3. Set environment variables
4. Deploy

### Traditional VPS
See `WEBHOOK-SETUP-GUIDE.md` for detailed instructions

## 🧪 Testing

Test the webhook endpoint:
```bash
curl -X POST http://localhost:3000/webhook/typeform \
  -H "Content-Type: application/json" \
  -d @test-webhook-payload.json
```

## 📊 API Endpoints

- `GET /` - Health check
- `POST /webhook/typeform` - Typeform webhook receiver
- `GET /plans/:id` - View generated meal plan

## 🔧 Configuration

The system automatically determines the nutrition methodology based on user responses:
- **Moderate**: Standard hierarchical macro targeting
- **Shelby-Justin**: Extreme carb cycling for experienced users

## 📝 License

Private repository - All rights reserved

## 🤝 Contributing

This is a private project. Please contact the repository owner for access.

## 📞 Support

For issues or questions, please contact the development team.

---

Built with ❤️ for Stephanie Sanzo's premium nutrition clients 