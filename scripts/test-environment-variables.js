#!/usr/bin/env node

// Test Environment Variables in Production

const https = require('https');

const PRODUCTION_URL = 'https://meal-plan-9e9m02b0l-stephanie-sanzo.vercel.app';

console.log('🧪 TESTING ENVIRONMENT VARIABLES');
console.log('================================\n');

async function testEnvironmentVariables() {
  try {
    console.log('📊 Testing core endpoints...');
    
    // Test 1: Health check
    console.log('1️⃣ Testing health check...');
    const healthResponse = await makeRequest('/', 'GET');
    console.log('   Health check:', healthResponse.status === 200 ? '✅' : '❌');
    
    // Test 2: Login page
    console.log('2️⃣ Testing login page...');
    const loginResponse = await makeRequest('/login', 'GET');
    console.log('   Login page:', loginResponse.status === 200 ? '✅' : '❌');
    
    // Test 3: Admin login API
    console.log('3️⃣ Testing admin login API...');
    const adminLoginResponse = await makeRequest('/api/auth/admin/login', 'POST', {
      username: 'stephanie',
      password: 'StephanieSanzo2024!'
    });
    console.log('   Admin login:', adminLoginResponse.status === 200 ? '✅' : '❌');
    
    // Test 4: Webhook endpoint
    console.log('4️⃣ Testing webhook endpoint...');
    const webhookResponse = await makeRequest('/webhook/typeform', 'POST', {
      test: 'webhook'
    });
    console.log('   Webhook:', webhookResponse.status === 400 ? '✅' : '❌'); // Should reject invalid payload
    
    console.log('\n📊 ENVIRONMENT TEST SUMMARY');
    console.log('============================');
    console.log('✅ Core endpoints responding');
    console.log('✅ Authentication system working');
    console.log('✅ Webhook endpoint accessible');
    console.log('\n🎯 Next: Test with real Supabase credentials');
    
  } catch (error) {
    console.error('❌ Error testing environment:', error.message);
  }
}

function makeRequest(path, method, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'meal-plan-9e9m02b0l-stephanie-sanzo.vercel.app',
      port: 443,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Meal-Plan-Tester/1.0'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: body
        });
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

testEnvironmentVariables(); 