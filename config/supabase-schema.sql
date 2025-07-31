-- ==================================================================================
-- 🗄️ SUPABASE DATABASE SCHEMA FOR STEPHANIE SANZO NUTRITION
-- ==================================================================================
-- Run this in your Supabase SQL editor to set up the database
-- ==================================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ===== USERS TABLE =====
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR UNIQUE NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===== MEAL PLANS TABLE =====
CREATE TABLE IF NOT EXISTS meal_plans (
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

-- ===== PLAN MEALS TABLE =====
CREATE TABLE IF NOT EXISTS plan_meals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_id VARCHAR REFERENCES meal_plans(id) ON DELETE CASCADE,
  day_type VARCHAR NOT NULL, -- training, rest, refeed
  meal_name VARCHAR NOT NULL,
  meal_index INTEGER NOT NULL,
  calories INTEGER,
  supplements JSONB, -- Array of supplement objects
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===== PLAN FOODS TABLE =====
CREATE TABLE IF NOT EXISTS plan_foods (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  meal_id UUID REFERENCES plan_meals(id) ON DELETE CASCADE,
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

-- ===== PROGRESS TRACKING TABLE =====
CREATE TABLE IF NOT EXISTS progress_tracking (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_id VARCHAR REFERENCES meal_plans(id) ON DELETE CASCADE,
  checked_items JSONB DEFAULT '{}', -- {item_id: boolean}
  current_day VARCHAR NOT NULL,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===== FOOD DATABASE TABLE =====
CREATE TABLE IF NOT EXISTS food_database (
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

-- ===== INDEXES FOR PERFORMANCE =====
CREATE INDEX IF NOT EXISTS idx_meal_plans_status ON meal_plans(status);
CREATE INDEX IF NOT EXISTS idx_meal_plans_created_at ON meal_plans(created_at);
CREATE INDEX IF NOT EXISTS idx_plan_meals_plan_id ON plan_meals(plan_id);
CREATE INDEX IF NOT EXISTS idx_plan_foods_meal_id ON plan_foods(meal_id);
CREATE INDEX IF NOT EXISTS idx_progress_tracking_plan_id ON progress_tracking(plan_id);
CREATE INDEX IF NOT EXISTS idx_food_database_category ON food_database(category);

-- ===== ROW LEVEL SECURITY (RLS) =====
-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE meal_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE plan_meals ENABLE ROW LEVEL SECURITY;
ALTER TABLE plan_foods ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress_tracking ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_database ENABLE ROW LEVEL SECURITY;

-- ===== RLS POLICIES =====

-- Users can only access their own data
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Meal plans: Users can view their own, admins can view all
CREATE POLICY "Users can view own meal plans" ON meal_plans
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all meal plans" ON meal_plans
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- Progress tracking: Users can access their own
CREATE POLICY "Users can access own progress" ON progress_tracking
  FOR ALL USING (
    plan_id IN (
      SELECT id FROM meal_plans WHERE user_id = auth.uid()
    )
  );

-- Food database: Read-only for all authenticated users
CREATE POLICY "Authenticated users can read food database" ON food_database
  FOR SELECT USING (auth.role() = 'authenticated');

-- ===== FUNCTIONS =====

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_users_updated_at 
  BEFORE UPDATE ON users 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ===== SAMPLE DATA (OPTIONAL) =====
-- Uncomment to add sample data for testing

/*
INSERT INTO food_database (name, category, calories_per_100g, protein_per_100g, carbs_per_100g, fats_per_100g, fiber_per_100g) VALUES
('Chicken Breast', 'protein', 165, 31.0, 0.0, 3.6, 0.0),
('Salmon', 'protein', 208, 25.0, 0.0, 12.0, 0.0),
('Eggs (large)', 'protein', 155, 13.0, 1.1, 11.0, 0.0),
('Brown Rice', 'carb', 111, 2.6, 23.0, 0.9, 1.8),
('Sweet Potato', 'carb', 86, 1.6, 20.0, 0.1, 3.0),
('Oats', 'carb', 389, 16.9, 66.0, 6.9, 10.6),
('Broccoli', 'veggie', 34, 2.8, 7.0, 0.4, 2.6),
('Asparagus', 'veggie', 20, 2.2, 3.9, 0.1, 2.1),
('Avocado', 'fat', 160, 2.0, 8.5, 14.7, 6.7),
('Olive Oil', 'fat', 884, 0.0, 0.0, 100.0, 0.0);
*/

-- ===== COMMENTS =====
COMMENT ON TABLE users IS 'User accounts for meal plan access';
COMMENT ON TABLE meal_plans IS 'Generated meal plans awaiting approval';
COMMENT ON TABLE plan_meals IS 'Individual meals within a meal plan';
COMMENT ON TABLE plan_foods IS 'Food items within each meal';
COMMENT ON TABLE progress_tracking IS 'User progress tracking for meal plans';
COMMENT ON TABLE food_database IS 'Nutrition database for food items';

-- ==================================================================================
-- ✅ SCHEMA SETUP COMPLETE
-- ==================================================================================
-- Next steps:
-- 1. Set up environment variables in your .env file
-- 2. Test the connection with the database service
-- 3. Migrate existing data from file system
-- ================================================================================== 