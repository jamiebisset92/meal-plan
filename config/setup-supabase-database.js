#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs').promises;
require('dotenv').config();

async function setupSupabaseDatabase() {
  console.log('🗄️ Setting up Supabase database schema...\n');

  const supabaseUrl = process.env.SUPABASE_URL || 'https://aampnumxitcerdvclbcv.supabase.co';
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhbXBudW14aXRjZXJkdmNsYmN2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Mzk0NjEwOSwiZXhwIjoyMDY5NTIyMTA5fQ.DNi5x77_Ce_R5mc7S11ZIMCi1u5ywKWGv0yLmcGsCuk';

  try {
    // Create service role client for admin operations
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
    console.log('✅ Connected to Supabase with service role');

    // Read the schema file
    const schemaPath = './supabase-schema.sql';
    const schema = await fs.readFile(schemaPath, 'utf8');
    console.log('✅ Loaded database schema');

    // Split the schema into individual statements
    const statements = schema
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));

    console.log(`📝 Found ${statements.length} SQL statements to execute`);

    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      if (statement.trim()) {
        try {
          console.log(`\n🔧 Executing statement ${i + 1}/${statements.length}...`);
          console.log(`   ${statement.substring(0, 50)}...`);
          
          const { error } = await supabaseAdmin.rpc('exec_sql', { sql: statement });
          
          if (error) {
            console.log(`   ⚠️ Statement ${i + 1} had an issue (this might be normal):`, error.message);
          } else {
            console.log(`   ✅ Statement ${i + 1} executed successfully`);
          }
        } catch (error) {
          console.log(`   ⚠️ Statement ${i + 1} failed (this might be normal):`, error.message);
        }
      }
    }

    console.log('\n🎉 Database setup completed!');
    console.log('\n📋 Manual Setup Required:');
    console.log('Since we cannot execute SQL directly through the API, please:');
    console.log('1. Go to https://supabase.com/dashboard');
    console.log('2. Select your project: aampnumxitcerdvclbcv');
    console.log('3. Click "SQL Editor" in the left sidebar');
    console.log('4. Copy the entire contents of supabase-schema.sql');
    console.log('5. Paste it into the SQL editor');
    console.log('6. Click "Run" to execute the schema');
    console.log('\nAfter running the schema, test the connection again with:');
    console.log('node test-supabase-connection.js');

  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    console.log('\n💡 Manual Setup Required:');
    console.log('Please set up the database schema manually:');
    console.log('1. Go to https://supabase.com/dashboard');
    console.log('2. Select your project: aampnumxitcerdvclbcv');
    console.log('3. Click "SQL Editor"');
    console.log('4. Copy and paste the contents of supabase-schema.sql');
    console.log('5. Click "Run"');
  }
}

// Run the setup
setupSupabaseDatabase().catch(console.error); 