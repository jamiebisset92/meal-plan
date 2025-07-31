const crypto = require('crypto');
const fs = require('fs').promises;
const path = require('path');

class AuthService {
  constructor() {
    this.sessionSecret = process.env.SESSION_SECRET || 'default-secret-key';
    this.sessions = new Map();
    
    // Admin credentials from environment variables
    this.adminCredentials = {
      username: process.env.ADMIN_USERNAME || 'admin',
      password: process.env.ADMIN_PASSWORD || 'admin123' // Default for development
    };
    
    // Clean up expired sessions every hour
    setInterval(() => this.cleanupExpiredSessions(), 60 * 60 * 1000);
  }

  // Generate a secure session token
  generateSessionToken() {
    return crypto.randomBytes(32).toString('hex');
  }

  // Hash a password with salt
  hashPassword(password) {
    const salt = process.env.PASSWORD_SALT || 'stephanie_sanzo_salt_2024';
    return crypto.createHash('sha256').update(password + salt).digest('hex');
  }

  // Admin authentication
  async adminLogin(username, password) {
    const hashedPassword = this.hashPassword(password);
    const expectedHash = this.hashPassword(this.adminCredentials.password);
    
    if (username === this.adminCredentials.username && hashedPassword === expectedHash) {
      const sessionToken = this.generateSessionToken();
      const session = {
        type: 'admin',
        username,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
      };
      
      this.sessions.set(sessionToken, session);
      return { success: true, sessionToken };
    }
    
    return { success: false, message: 'Invalid credentials' };
  }

  // Admin logout
  adminLogout(sessionToken) {
    this.sessions.delete(sessionToken);
    return { success: true };
  }

  // Client authentication (for meal plan access)
  async clientLogin(planId, email) {
    try {
      // For now, we'll use a simple file-based check
      // In production, this should check against the database
      const plansDir = path.join(__dirname, '..', 'data', 'pending-plans');
      const files = await fs.readdir(plansDir);
      
      for (const file of files) {
        if (file.endsWith('.json')) {
          const planData = JSON.parse(await fs.readFile(path.join(plansDir, file), 'utf8'));
          if (planData.planId === planId && planData.clientData.email === email) {
            const sessionToken = this.generateSessionToken();
            const session = {
              type: 'client',
              planId,
              email,
              createdAt: new Date().toISOString(),
              expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
            };
            
            this.sessions.set(sessionToken, session);
            return { success: true, sessionToken, planData };
          }
        }
      }
      
      return { success: false, message: 'Invalid plan ID or email' };
    } catch (error) {
      console.error('Client login error:', error);
      return { success: false, message: 'Authentication failed' };
    }
  }

  // Client logout
  clientLogout(sessionToken) {
    this.sessions.delete(sessionToken);
    return { success: true };
  }

  // Validate session
  validateSession(sessionToken) {
    const session = this.sessions.get(sessionToken);
    
    if (!session) {
      return { valid: false, message: 'Session not found' };
    }
    
    if (new Date() > new Date(session.expiresAt)) {
      this.sessions.delete(sessionToken);
      return { valid: false, message: 'Session expired' };
    }
    
    return { valid: true, session };
  }

  // Admin authentication middleware
  adminAuthMiddleware(req, res, next) {
    // Check if cookies are available
    if (!req || !req.cookies) {
      console.log('No cookies available, redirecting to login');
      return res.redirect('/login');
    }
    
    const sessionToken = req.cookies.adminSession;
    
    if (!sessionToken) {
      console.log('No admin session token, redirecting to login');
      return res.redirect('/login');
    }
    
    const validation = this.validateSession(sessionToken);
    
    if (!validation.valid || validation.session.type !== 'admin') {
      console.log('Invalid session or wrong type, clearing cookie and redirecting');
      res.clearCookie('adminSession');
      return res.redirect('/login');
    }
    
    console.log('Admin session valid, proceeding');
    req.adminSession = validation.session;
    next();
  }

  // Client authentication middleware
  clientAuthMiddleware(req, res, next) {
    const sessionToken = req.cookies.clientSession;
    
    if (!sessionToken) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    const validation = this.validateSession(sessionToken);
    
    if (!validation.valid || validation.session.type !== 'client') {
      res.clearCookie('clientSession');
      return res.status(401).json({ error: 'Invalid session' });
    }
    
    req.clientSession = validation.session;
    next();
  }

  // Clean up expired sessions
  cleanupExpiredSessions() {
    const now = new Date();
    for (const [token, session] of this.sessions.entries()) {
      if (new Date(session.expiresAt) < now) {
        this.sessions.delete(token);
      }
    }
  }

  // Get admin credentials info (for setup)
  getAdminCredentialsInfo() {
    return {
      username: this.adminCredentials.username,
      passwordSet: !!this.adminCredentials.password,
      isDefaultPassword: this.adminCredentials.password === 'admin123'
    };
  }
}

// Export singleton instance
module.exports = new AuthService(); 