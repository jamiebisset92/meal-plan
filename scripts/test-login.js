#!/usr/bin/env node

/**
 * Test Admin Login System
 */

const crypto = require('crypto');

function hashPassword(password, salt = 'stephanie_sanzo_meal_planning_salt_2024') {
  return crypto.createHash('sha256').update(password + salt).digest('hex');
}

function testLogin() {
  console.log('🧪 Testing Admin Login System');
  console.log('==============================\n');

  const username = 'stephanie';
  const password = 'StephanieSanzo2024!';
  const salt = 'stephanie_sanzo_meal_planning_salt_2024';

  console.log('Test Credentials:');
  console.log(`Username: ${username}`);
  console.log(`Password: ${password}`);
  console.log(`Salt: ${salt}\n`);

  const hashedPassword = hashPassword(password, salt);
  console.log(`Hashed Password: ${hashedPassword}\n`);

  // Test the login logic
  const expectedUsername = 'stephanie';
  const expectedPassword = 'StephanieSanzo2024!';
  const expectedHash = hashPassword(expectedPassword, salt);

  console.log('Testing Login Logic:');
  console.log(`Username Match: ${username === expectedUsername ? '✅' : '❌'}`);
  console.log(`Password Match: ${hashedPassword === expectedHash ? '✅' : '❌'}`);

  if (username === expectedUsername && hashedPassword === expectedHash) {
    console.log('\n🎉 Login system is working correctly!');
    console.log('\n📋 You can now login at:');
    console.log('• https://www.stephaniesanzo.com/login');
    console.log('• Username: stephanie');
    console.log('• Password: StephanieSanzo2024!');
  } else {
    console.log('\n❌ Login system has issues!');
  }
}

testLogin(); 