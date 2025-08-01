# 🔧 Environment Variables Setup Checklist

## ✅ **Current Status: CORE SYSTEM WORKING**
- ✅ Health check endpoint responding
- ✅ Login page accessible  
- ✅ Admin authentication working
- ✅ Webhook endpoint functional

---

## 📋 **STEP-BY-STEP SETUP**

### **Step 1: Access Vercel Dashboard**
1. Go to: https://vercel.com/stephanie-sanzo/meal-plan/settings/environment-variables
2. Click "Add New" for each variable below

### **Step 2: Add Core Variables**

#### **Application Settings:**
```bash
NODE_ENV = production
BASE_URL = https://stephaniesanzo.com
PORT = 3000
```

#### **Admin Authentication:**
```bash
ADMIN_USERNAME = stephanie
ADMIN_PASSWORD = StephanieSanzo2024!
PASSWORD_SALT = stephanie_sanzo_meal_planning_salt_2024
SESSION_SECRET = stephanie_sanzo_session_secret_2024_secure
```

### **Step 3: Set Up Supabase (Required)**

#### **Option A: Create New Supabase Project**
1. Go to: https://supabase.com
2. Click "New Project"
3. Choose your organization
4. Enter project name: `stephanie-sanzo-meal-planning`
5. Set database password (save this!)
6. Choose region (closest to you)
7. Click "Create new project"

#### **Option B: Use Existing Project**
1. Go to your existing Supabase project
2. Navigate to Settings → API

#### **Get Credentials:**
1. In Supabase dashboard, go to **Settings → API**
2. Copy these values:
   - **Project URL** (looks like: `https://xyz.supabase.co`)
   - **anon public** key (starts with `eyJ...`)
   - **service_role** key (starts with `eyJ...`)

#### **Add Supabase Variables:**
```bash
SUPABASE_URL = [YOUR_PROJECT_URL]
SUPABASE_ANON_KEY = [YOUR_ANON_KEY]
SUPABASE_SERVICE_ROLE_KEY = [YOUR_SERVICE_ROLE_KEY]
```

### **Step 4: Test Configuration**

After adding variables, run this test:
```bash
node scripts/test-environment-variables.js
```

Expected results:
- ✅ All endpoints responding
- ✅ Admin login working
- ✅ Webhook accepting requests

### **Step 5: Optional Variables (Add Later)**

#### **Typeform Webhook Secret:**
```bash
TYPEFORM_WEBHOOK_SECRET = [YOUR_TYPEFORM_SECRET]
```

#### **Samcart API (for analytics):**
```bash
SAMCART_API_KEY = [YOUR_SAMCART_API_KEY]
```

---

## 🧪 **VERIFICATION STEPS**

### **Test 1: Admin Login**
1. Go to: https://meal-plan-9e9m02b0l-stephanie-sanzo.vercel.app/login
2. Login with: `stephanie` / `StephanieSanzo2024!`
3. Should redirect to admin dashboard

### **Test 2: Supabase Connection**
1. Check Vercel function logs for any Supabase errors
2. Test meal plan generation (requires Supabase)

### **Test 3: Webhook Endpoint**
1. Send test Typeform webhook data
2. Verify plan generation and storage

---

## 🚨 **TROUBLESHOOTING**

### **If Admin Login Fails:**
- Check `ADMIN_USERNAME` and `ADMIN_PASSWORD` are set correctly
- Verify `PASSWORD_SALT` matches the one in the code

### **If Supabase Connection Fails:**
- Verify all 3 Supabase variables are set
- Check the service role key has admin permissions
- Ensure project is active and not paused

### **If Webhook Fails:**
- Check `BASE_URL` is set correctly
- Verify Typeform webhook secret if using authentication

---

## 🎯 **NEXT STEPS AFTER SETUP**

1. **Test with real Typeform webhook data**
2. **Set up custom domain (stephaniesanzo.com)**
3. **Configure email delivery system**
4. **Set up analytics and monitoring**

---

## 📞 **SUPPORT**

If you encounter issues:
1. Check Vercel function logs
2. Verify all environment variables are set
3. Test each endpoint individually
4. Contact me for debugging help

**Current System Status: ✅ CORE FUNCTIONALITY WORKING** 