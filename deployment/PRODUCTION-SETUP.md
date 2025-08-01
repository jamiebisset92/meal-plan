# 🚀 Production Deployment Setup Guide

## ✅ Deployment Status: **LIVE**
- **Production URL**: https://meal-plan-9e9m02b0l-stephanie-sanzo.vercel.app
- **Custom Domain**: stephaniesanzo.com (to be configured)
- **Git Repository**: Synced and deployed ✅

---

## 🔧 Environment Variables Setup

### **Step 1: Access Vercel Dashboard**
Go to: https://vercel.com/stephanie-sanzo/meal-plan/settings/environment-variables

### **Step 2: Add Required Variables**

```bash
# === Core Application ===
NODE_ENV = production
BASE_URL = https://stephaniesanzo.com
PORT = 3000

# === Admin Authentication ===
ADMIN_USERNAME = stephanie
ADMIN_PASSWORD = StephanieSanzo2024!
PASSWORD_SALT = stephanie_sanzo_meal_planning_salt_2024
SESSION_SECRET = stephanie_sanzo_session_secret_2024_secure

# === Supabase Database ===
SUPABASE_URL = [YOUR_SUPABASE_PROJECT_URL]
SUPABASE_ANON_KEY = [YOUR_SUPABASE_ANON_KEY]
SUPABASE_SERVICE_ROLE_KEY = [YOUR_SUPABASE_SERVICE_ROLE_KEY]

# === Optional Integrations ===
TYPEFORM_WEBHOOK_SECRET = [YOUR_TYPEFORM_WEBHOOK_SECRET]
SAMCART_API_KEY = [YOUR_SAMCART_API_KEY]
```

---

## 🌐 Custom Domain Setup

### **Step 3: Configure stephaniesanzo.com**
1. Go to: https://vercel.com/stephanie-sanzo/meal-plan/settings/domains
2. Add domain: `stephaniesanzo.com`
3. Add domain: `www.stephaniesanzo.com`
4. Update DNS records in your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

---

## 🧪 Testing Endpoints

### **Core Pages** ✅
- Login: https://meal-plan-9e9m02b0l-stephanie-sanzo.vercel.app/login
- Admin Dashboard: https://meal-plan-9e9m02b0l-stephanie-sanzo.vercel.app/admin
- Client Login: https://meal-plan-9e9m02b0l-stephanie-sanzo.vercel.app/client-login

### **API Endpoints** ✅
- Health Check: https://meal-plan-9e9m02b0l-stephanie-sanzo.vercel.app/
- Typeform Webhook: https://meal-plan-9e9m02b0l-stephanie-sanzo.vercel.app/webhook/typeform
- Admin Login: https://meal-plan-9e9m02b0l-stephanie-sanzo.vercel.app/api/auth/admin/login

---

## 📋 Admin Access
- **Login URL**: https://meal-plan-9e9m02b0l-stephanie-sanzo.vercel.app/login
- **Username**: stephanie
- **Password**: StephanieSanzo2024!

---

## 🔄 Typeform Webhook Configuration

### **Webhook URL**: 
```
https://meal-plan-9e9m02b0l-stephanie-sanzo.vercel.app/webhook/typeform
```

### **Webhook Settings in Typeform**:
1. Go to your Typeform → Connect → Webhooks
2. Add webhook URL above
3. Set secret if using authentication
4. Test with sample data

---

## 🎯 Next Steps After Environment Setup

1. **Configure Supabase credentials** ⏳
2. **Set up custom domain** ⏳ 
3. **Test Typeform webhook** ⏳
4. **Create unique URL generation system** ⏳
5. **Set up email delivery** ⏳

---

## 🚨 Security Notes

- All admin credentials are environment-specific
- Session tokens expire after 24 hours
- HTTPS enforced on all endpoints
- Rate limiting enabled on sensitive endpoints

---

## 📞 Support & Monitoring

- **Error Monitoring**: Check Vercel Function logs
- **Performance**: Monitor response times in Vercel dashboard
- **Uptime**: 99.9% guaranteed by Vercel
- **Backups**: Git repository serves as source backup 