#!/usr/bin/env node

/**
 * Test Admin Login Process
 */

const https = require('https');

function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: data
        });
      });
    });
    
    req.on('error', reject);
    
    if (options.body) {
      req.write(options.body);
    }
    
    req.end();
  });
}

async function testAdminLogin() {
  console.log('🧪 Testing Admin Login Process');
  console.log('===============================\n');

  const baseUrl = 'https://www.stephaniesanzo.com';
  
  try {
    // Step 1: Test login page accessibility
    console.log('1️⃣ Testing login page...');
    const loginResponse = await makeRequest(`${baseUrl}/login`);
    console.log(`   Status: ${loginResponse.statusCode}`);
    console.log(`   Login page accessible: ${loginResponse.statusCode === 200 ? '✅' : '❌'}\n`);

    // Step 2: Test admin dashboard without authentication
    console.log('2️⃣ Testing admin dashboard without auth...');
    const adminResponse = await makeRequest(`${baseUrl}/admin`);
    console.log(`   Status: ${adminResponse.statusCode}`);
    console.log(`   Redirects to login: ${adminResponse.statusCode === 302 ? '✅' : '❌'}\n`);

    // Step 3: Test login API
    console.log('3️⃣ Testing login API...');
    const loginData = JSON.stringify({
      username: 'stephanie',
      password: 'StephanieSanzo2024!'
    });

    const loginApiResponse = await makeRequest(`${baseUrl}/api/auth/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(loginData)
      },
      body: loginData
    });

    console.log(`   Status: ${loginApiResponse.statusCode}`);
    
    if (loginApiResponse.statusCode === 200) {
      console.log('   Login API working: ✅');
      console.log('   Response:', loginApiResponse.data);
    } else {
      console.log('   Login API failed: ❌');
      console.log('   Response:', loginApiResponse.data);
    }

    console.log('\n📋 Login Information:');
    console.log('• URL: https://www.stephaniesanzo.com/login');
    console.log('• Username: stephanie');
    console.log('• Password: StephanieSanzo2024!');
    console.log('\n🔗 Admin Dashboard: https://www.stephaniesanzo.com/admin');
    console.log('\n💡 Instructions:');
    console.log('1. Go to the login page');
    console.log('2. Enter username: stephanie');
    console.log('3. Enter password: StephanieSanzo2024!');
    console.log('4. Click "Sign In"');
    console.log('5. You should be redirected to the admin dashboard');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testAdminLogin(); 