# 📁 MEAL PLANNING AI SYSTEM - Directory Structure

## 🏗️ **Root Directory**
```
MEAL PLANNING AI SYSTEM/
├── 📁 config/               # Database & configuration files
├── 📁 deployment/           # Deployment configurations  
├── 📁 docs/                 # Documentation
├── 📁 scripts/              # Utility & test scripts
├── 📁 server/               # Main application server
├── 📁 src/                  # Core application modules
├── 📁 data/                 # Data files & templates
├── 📁 backup/               # Backup files
├── 📁 tests/                # Test files
├── 📁 public/               # Public assets
├── 📄 server.js             # Root entry point (redirects to server/)
├── 📄 package.json          # NPM dependencies
├── 📄 vercel.json           # Vercel deployment config
└── 📄 README.md             # Project documentation
```

## 🔧 **Config Directory** (`/config/`)
Database and application configuration files:
- `supabase-schema.sql` - Database schema
- `supabase-rls-policies.sql` - Row Level Security policies
- `mcp-supabase-server.js` - Model Context Protocol server
- `setup-supabase-database.js` - Database setup script
- `test-supabase-connection.js` - Connection test script
- `env-template.txt` - Environment variables template
- `*.md` files - Setup documentation

## 🚀 **Deployment Directory** (`/deployment/`)
Platform-specific deployment configurations:
- `app.yaml` - Google App Engine config
- `nginx-config.conf` - Nginx configuration

## 📜 **Scripts Directory** (`/scripts/`)
Utility and test scripts:
- `setup-admin.js` - Admin account setup
- `test-*.js` - Various test scripts
- Development and maintenance utilities

## 🖥️ **Server Directory** (`/server/`)
Main application server with organized structure:

### **Views** (`/server/views/`)
HTML templates and pages:
- `admin-dashboard.html` - Admin dashboard
- `login.html` - Admin login page  
- `client-login.html` - Client login page
- `plan-editor.html` - Meal plan editor

### **Config** (`/server/config/`)
Server configuration files:
- `supabase-config.js` - Supabase client setup
- `email-service.js` - Email functionality
- `samcart-api.js` - SamCart integration

### **Services** (`/server/services/`)
Business logic services:
- `auth-service.js` - Authentication logic
- `database-service.js` - Database operations

### **Routes** (`/server/routes/`)
API route definitions:
- `auth-routes.js` - Authentication endpoints

### **API** (`/server/api/`)
API endpoint handlers:
- `plan-editor.js` - Meal plan CRUD operations

### **Static** (`/server/static/`)
Client-side assets:
- `plan-editor.js` - Plan editor JavaScript
- `plan-editor-mobile.js` - Mobile plan editor
- `plan-editor.css` - Styling

### **Core Files**
- `server.js` - Main Express server
- `review-queue.js` - Plan review system
- `dev-server.js` - Development server
- `ss-logo.jpg` - Stephanie Sanzo logo

## 🧩 **Source Directory** (`/src/`)
Core application modules:

### **Modules** (`/src/modules/`)
- `Module-1-Calculations.js` - Nutrition calculations
- `Module-2-Psychology.js` - Psychological profiling
- `Module-3-Communication.js` - Communication templates
- `Module-4-Supplements.js` - Supplement recommendations
- `Module-5-Meal-Plan.js` - Meal plan generation
- `Module-6-Interactive-HTML.js` - HTML generation

### **Services** (`/src/services/`)
- `main-orchestrator.js` - Main workflow orchestration
- `meal-template-service.js` - Meal template management

### **Templates** (`/src/templates/`)
Meal templates by category:
- `meal-templates.js` - Main template file
- `meal-templates-*.js` - Specific meal types

### **Utils** (`/src/utils/`)
- `food-database-loader.js` - Food database utilities
- `supplement-parser.js` - Supplement parsing

## 📊 **Data Directory** (`/data/`)
Data files and user content:
- `Nutritional Database.csv` - Food nutrition data
- `Typeform-Mapping.json` - Form field mappings
- `review-queue/` - Pending meal plans
- User progress tracking

## 🧪 **Tests Directory** (`/tests/`)
Test files and interactive demos:
- `test-*.js` - Various test scripts
- `interactive_meal_planner.html` - Demo interface

## 🎯 **Key Benefits of This Structure**

### ✅ **Organization**
- Clear separation of concerns
- Easy to find specific functionality
- Scalable structure for growth

### ✅ **Maintainability** 
- Configuration centralized in `/config/`
- Scripts organized in `/scripts/`
- Views separated from logic

### ✅ **Development**
- Clean separation of frontend/backend
- Modular architecture
- Easy testing and deployment

### ✅ **Security**
- Sensitive files in appropriate directories
- Clear .gitignore patterns
- Environment variables properly templated

---

*Last updated: 2025-01-31*
*Structure optimized for world-class development workflow* 🚀 