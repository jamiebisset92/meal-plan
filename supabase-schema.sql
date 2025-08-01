-- Supabase Schema for Meal Planning System

-- Create meal_plans table
CREATE TABLE IF NOT EXISTS meal_plans (
  id SERIAL PRIMARY KEY,
  plan_id VARCHAR(255) UNIQUE NOT NULL,
  user_data JSONB NOT NULL,
  html_content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'pending',
  reviewed_by VARCHAR(255),
  reviewed_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_meal_plans_plan_id ON meal_plans(plan_id);
CREATE INDEX IF NOT EXISTS idx_meal_plans_status ON meal_plans(status);
CREATE INDEX IF NOT EXISTS idx_meal_plans_created_at ON meal_plans(created_at);

-- Create users table for admin authentication
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE
);

-- Create progress_tracking table for client progress
CREATE TABLE IF NOT EXISTS progress_tracking (
  id SERIAL PRIMARY KEY,
  plan_id VARCHAR(255) REFERENCES meal_plans(plan_id),
  user_id VARCHAR(255),
  tracking_data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create food_database table (if not using CSV)
CREATE TABLE IF NOT EXISTS food_database (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  food_type VARCHAR(50) NOT NULL,
  calories_per_100g DECIMAL(8,2),
  protein_per_100g DECIMAL(8,2),
  carbs_per_100g DECIMAL(8,2),
  fat_per_100g DECIMAL(8,2),
  fiber_per_100g DECIMAL(8,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS) Policies

-- Enable RLS on all tables
ALTER TABLE meal_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress_tracking ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_database ENABLE ROW LEVEL SECURITY;

-- Meal plans policies
-- Allow read access to meal plans by plan_id
CREATE POLICY "Allow read meal plans by plan_id" ON meal_plans
  FOR SELECT USING (true);

-- Allow insert for webhook creation
CREATE POLICY "Allow insert meal plans" ON meal_plans
  FOR INSERT WITH CHECK (true);

-- Allow update for admin review
CREATE POLICY "Allow update meal plans" ON meal_plans
  FOR UPDATE USING (true);

-- Users policies
-- Allow read access to users (for authentication)
CREATE POLICY "Allow read users" ON users
  FOR SELECT USING (true);

-- Allow insert for user creation
CREATE POLICY "Allow insert users" ON users
  FOR INSERT WITH CHECK (true);

-- Progress tracking policies
-- Allow read/write for authenticated users
CREATE POLICY "Allow progress tracking" ON progress_tracking
  FOR ALL USING (true);

-- Food database policies
-- Allow read access to food database
CREATE POLICY "Allow read food database" ON food_database
  FOR SELECT USING (true);

-- Functions for automatic timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_meal_plans_updated_at 
  BEFORE UPDATE ON meal_plans 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_progress_tracking_updated_at 
  BEFORE UPDATE ON progress_tracking 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert default admin user (password: StephanieSanzo2024!)
INSERT INTO users (username, email, password_hash, role) 
VALUES (
  'stephanie', 
  'stephanie@stephaniesanzo.com', 
  'sha256_hash_of_password_with_salt', 
  'admin'
) ON CONFLICT (username) DO NOTHING;

-- Comments for documentation
COMMENT ON TABLE meal_plans IS 'Stores generated meal plans with user data and HTML content';
COMMENT ON TABLE users IS 'Admin users for the meal planning system';
COMMENT ON TABLE progress_tracking IS 'Client progress tracking data';
COMMENT ON TABLE food_database IS 'Nutritional database of foods'; 