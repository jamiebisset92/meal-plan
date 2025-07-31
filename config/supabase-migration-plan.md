# Supabase Migration Plan for Stephanie Sanzo Nutrition

## 📊 Current System Analysis

### File-Based Storage (Current)
```
server/data/
├── review-queue/          # Pending meal plans
├── approved-plans/        # Approved meal plans  
└── progress/             # User progress tracking

public/plans/             # Generated HTML meal plans
```

### Supabase Database Schema (Target)

## 🗄️ Database Tables

### 1. `users` Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR UNIQUE NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2. `meal_plans` Table
```sql
CREATE TABLE meal_plans (
  id VARCHAR PRIMARY KEY, -- plan-001 format
  user_id UUID REFERENCES users(id),
  client_data JSONB NOT NULL, -- Typeform response data
  nutrition_targets JSONB NOT NULL, -- Calculated targets
  status VARCHAR DEFAULT 'pending', -- pending, approved, rejected
  plan_html TEXT, -- Generated HTML content
  plan_url VARCHAR, -- URL to access plan
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  approved_at TIMESTAMP WITH TIME ZONE,
  approved_by VARCHAR,
  rejection_reason TEXT
);
```

### 3. `plan_meals` Table
```sql
CREATE TABLE plan_meals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_id VARCHAR REFERENCES meal_plans(id),
  day_type VARCHAR NOT NULL, -- training, rest, refeed
  meal_name VARCHAR NOT NULL,
  meal_index INTEGER NOT NULL,
  calories INTEGER,
  supplements JSONB, -- Array of supplement objects
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 4. `plan_foods` Table
```sql
CREATE TABLE plan_foods (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  meal_id UUID REFERENCES plan_meals(id),
  food_name VARCHAR NOT NULL,
  amount VARCHAR NOT NULL,
  calories INTEGER,
  protein DECIMAL(5,2),
  carbs DECIMAL(5,2),
  fats DECIMAL(5,2),
  macros_string VARCHAR,
  checked BOOLEAN DEFAULT FALSE,
  food_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 5. `progress_tracking` Table
```sql
CREATE TABLE progress_tracking (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_id VARCHAR REFERENCES meal_plans(id),
  checked_items JSONB DEFAULT '{}', -- {item_id: boolean}
  current_day VARCHAR NOT NULL,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 6. `food_database` Table
```sql
CREATE TABLE food_database (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR UNIQUE NOT NULL,
  category VARCHAR NOT NULL, -- protein, carb, fat, veggie, fruit
  calories_per_100g INTEGER,
  protein_per_100g DECIMAL(5,2),
  carbs_per_100g DECIMAL(5,2),
  fats_per_100g DECIMAL(5,2),
  fiber_per_100g DECIMAL(5,2),
  is_cooked BOOLEAN DEFAULT FALSE,
  alternatives JSONB, -- Array of alternative food names
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🔄 Migration Strategy

### Phase 1: Setup & Testing
1. Create Supabase project
2. Set up database schema
3. Create migration scripts
4. Test with sample data

### Phase 2: Hybrid System
1. Keep file system as backup
2. Add Supabase as primary storage
3. Implement dual-write system
4. Test thoroughly

### Phase 3: Full Migration
1. Migrate existing data
2. Update all code to use Supabase
3. Remove file system dependencies
4. Deploy to production

## 🔧 Implementation Steps

### Step 1: Supabase Setup
- [ ] Create Supabase project
- [ ] Set up database schema
- [ ] Configure Row Level Security (RLS)
- [ ] Set up authentication

### Step 2: Code Migration
- [ ] Install Supabase client
- [ ] Create database service layer
- [ ] Update ReviewQueue to use Supabase
- [ ] Update meal plan generation
- [ ] Update progress tracking

### Step 3: Authentication
- [ ] Set up Supabase Auth
- [ ] Create login/logout system
- [ ] Add user management
- [ ] Secure admin dashboard

### Step 4: Testing & Deployment
- [ ] Test all functionality
- [ ] Migrate existing data
- [ ] Deploy to production
- [ ] Monitor performance

## 🛡️ Security Considerations

### Row Level Security (RLS) Policies
```sql
-- Users can only access their own meal plans
CREATE POLICY "Users can view own meal plans" ON meal_plans
  FOR SELECT USING (auth.uid() = user_id);

-- Admins can view all meal plans
CREATE POLICY "Admins can view all meal plans" ON meal_plans
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
```

### Environment Variables
```bash
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 📈 Benefits of Migration

### Performance
- ✅ Concurrent access support
- ✅ Automatic backups
- ✅ Real-time subscriptions
- ✅ Better scalability

### Security
- ✅ Built-in authentication
- ✅ Row Level Security
- ✅ Automatic encryption
- ✅ Audit logs

### Development
- ✅ Type-safe queries
- ✅ Real-time updates
- ✅ Built-in API
- ✅ Dashboard management 