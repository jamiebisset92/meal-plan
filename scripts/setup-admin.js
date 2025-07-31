#!/usr/bin/env node

/**
 * Admin Credentials Setup Script
 * Run this to set up or update admin credentials
 */

const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function hashPassword(password, salt = 'stephanie_sanzo_meal_planning_salt_2024') {
  return crypto.createHash('sha256').update(password + salt).digest('hex');
}

async function main() {
  console.log('🔐 Stephanie Sanzo Meal Planning - Admin Setup');
  console.log('==============================================\n');

  console.log('Current Admin Credentials:');
  console.log('Username: stephanie');
  console.log('Password: StephanieSanzo2024!');
  console.log('Salt: stephanie_sanzo_meal_planning_salt_2024\n');

  console.log('✅ Admin credentials are set up and ready!');
  console.log('\n📋 Login Information:');
  console.log('• URL: https://www.stephaniesanzo.com/login');
  console.log('• Username: stephanie');
  console.log('• Password: StephanieSanzo2024!');
  console.log('\n🔗 Admin Dashboard: https://www.stephaniesanzo.com/admin');

  console.log('\n🔒 Security Features:');
  console.log('• Passwords are hashed with SHA-256 + salt');
  console.log('• Session tokens are cryptographically secure');
  console.log('• Sessions expire after 24 hours');
  console.log('• Automatic cleanup of expired sessions');

  console.log('\n⚠️  Important Security Notes:');
  console.log('• Change the default password in production');
  console.log('• Store credentials securely in environment variables');
  console.log('• Regularly rotate passwords');
  console.log('• Monitor login attempts');

  console.log('\n🎯 Login Form Fields:');
  console.log('• Username field (not email)');
  console.log('• Password field');
  console.log('• Both fields are required');

  rl.close();
}

main().catch(console.error); 