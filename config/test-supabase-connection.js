#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

async function testSupabaseConnection() {
  console.log('🔍 Testing Supabase connection...\n');

  // Check environment variables with fallbacks
  const supabaseUrl = process.env.SUPABASE_URL || 'https://aampnumxitcerdvclbcv.supabase.co';
  const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhbXBudW14aXRjZXJkdmNsYmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5NDYxMDksImV4cCI6MjA2OTUyMjEwOX0.0V34f67g8oeJ2BY1nquQj0Rr3Mvq7Zw6OwFnqFVvXqU';

  console.log('✅ Supabase credentials found');
  console.log('🔗 Supabase URL:', supabaseUrl);
  console.log('🔑 Anon Key:', supabaseKey.substring(0, 20) + '...');

  try {
    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log('\n🚀 Creating Supabase client...');

    // Test connection by querying the database
    console.log('📡 Testing database connection...');
    
    // Try to query meal_plans table
    const { data: mealPlans, error: mealPlansError } = await supabase
      .from('meal_plans')
      .select('count')
      .limit(1);

    if (mealPlansError) {
      console.error('❌ Error querying meal_plans table:', mealPlansError.message);
      console.log('\n💡 This might mean:');
      console.log('   1. The table doesn\'t exist yet');
      console.log('   2. RLS policies are blocking access');
      console.log('   3. The schema hasn\'t been set up');
      console.log('\n📋 To fix this, run the SQL schema in your Supabase dashboard:');
      console.log('   1. Go to https://supabase.com/dashboard');
      console.log('   2. Select your project');
      console.log('   3. Go to SQL Editor');
      console.log('   4. Copy and paste the contents of supabase-schema.sql');
      console.log('   5. Click "Run"');
    } else {
      console.log('✅ Successfully connected to meal_plans table');
    }

    // Try to query users table
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('count')
      .limit(1);

    if (usersError) {
      console.error('❌ Error querying users table:', usersError.message);
    } else {
      console.log('✅ Successfully connected to users table');
    }

    // Try to query progress_tracking table
    const { data: progress, error: progressError } = await supabase
      .from('progress_tracking')
      .select('count')
      .limit(1);

    if (progressError) {
      console.error('❌ Error querying progress_tracking table:', progressError.message);
    } else {
      console.log('✅ Successfully connected to progress_tracking table');
    }

    console.log('\n🎉 Supabase connection test completed!');
    console.log('\n📋 Next steps:');
    console.log('   1. Set up your database schema in Supabase');
    console.log('   2. Test the MCP connection in Cursor');
    console.log('   3. Restart Cursor to load the new MCP configuration');

  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.log('\n💡 Troubleshooting:');
    console.log('   1. Check your Supabase URL and API key');
    console.log('   2. Ensure your Supabase project is active');
    console.log('   3. Verify your network connection');
  }
}

// Run the test
testSupabaseConnection().catch(console.error); 