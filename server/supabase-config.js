const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL || 'https://aampnumxitcerdvclbcv.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhbXBudW14aXRjZXJkdmNsYmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5NDYxMDksImV4cCI6MjA2OTUyMjEwOX0.0V34f67g8oeJ2BY1nquQj0Rr3Mvq7Zw6OwFnqFVvXqU';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhbXBudW14aXRjZXJkdmNsYmN2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Mzk0NjEwOSwiZXhwIjoyMDY5NTIyMTA5fQ.DNi5x77_Ce_R5mc7S11ZIMCi1u5ywKWGv0yLmcGsCuk';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase credentials not found in environment variables');
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Create service role client for admin operations
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

module.exports = {
  supabase,
  supabaseAdmin,
  isSupabaseConfigured: !!(supabaseUrl && supabaseAnonKey)
}; 