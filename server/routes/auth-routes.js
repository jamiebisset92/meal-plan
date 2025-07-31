const express = require('express');
const router = express.Router();
const authService = require('../services/auth-service');

// ===== ADMIN AUTHENTICATION ROUTES =====

// Admin login
router.post('/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password required' });
    }

    const result = await authService.adminLogin(username, password);
    
    if (result.success) {
      // Set session cookie with proper production settings
      res.cookie('adminSession', result.sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' && req.secure,
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      });

      res.json({ success: true });
    } else {
      res.status(401).json({ error: result.message });
    }
  } catch (error) {
    console.error('❌ Admin login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Admin logout
router.post('/admin/logout', async (req, res) => {
  try {
    const sessionToken = req.cookies?.adminSession;
    if (sessionToken) {
      authService.adminLogout(sessionToken);
    }
    
    // Clear session cookie
    res.clearCookie('adminSession', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production' && req.secure,
      sameSite: 'lax'
    });
    
    res.json({ success: true });
  } catch (error) {
    console.error('❌ Admin logout error:', error);
    res.status(500).json({ error: 'Logout failed' });
  }
});

// Check admin session
router.get('/admin/session', async (req, res) => {
  try {
    const sessionToken = req.cookies?.adminSession;
    
    if (!sessionToken) {
      return res.status(401).json({ error: 'No session token' });
    }

    const validation = authService.validateSession(sessionToken);
    
    if (!validation.valid) {
      return res.status(401).json({ error: validation.message });
    }

    res.json({
      valid: true,
      session: validation.session
    });
  } catch (error) {
    console.error('❌ Session check error:', error);
    res.status(401).json({ error: 'Session validation failed' });
  }
});

// ===== CLIENT AUTHENTICATION ROUTES =====

// Client login (for meal plan access)
router.post('/client/login', async (req, res) => {
  try {
    const { planId, email } = req.body;

    if (!planId || !email) {
      return res.status(400).json({ error: 'Plan ID and email required' });
    }

    const result = await authService.clientLogin(planId, email);
    
    if (result.success) {
      // Set client session cookie
      res.cookie('clientSession', result.sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' && req.secure,
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });

      res.json({ 
        success: true,
        planData: result.planData
      });
    } else {
      res.status(401).json({ error: result.message });
    }
  } catch (error) {
    console.error('❌ Client login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Client logout
router.post('/client/logout', async (req, res) => {
  try {
    const sessionToken = req.cookies?.clientSession;
    if (sessionToken) {
      authService.clientLogout(sessionToken);
    }
    
    // Clear client session cookie
    res.clearCookie('clientSession', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production' && req.secure,
      sameSite: 'lax'
    });
    
    res.json({ success: true });
  } catch (error) {
    console.error('❌ Client logout error:', error);
    res.status(500).json({ error: 'Logout failed' });
  }
});

// Check client session
router.get('/client/session/:planId', async (req, res) => {
  try {
    const { planId } = req.params;
    const sessionToken = req.cookies?.clientSession;
    
    if (!sessionToken) {
      return res.status(401).json({ error: 'No session token' });
    }

    const validation = authService.validateSession(sessionToken);
    
    if (!validation.valid) {
      return res.status(401).json({ error: validation.message });
    }

    // Check if session matches the plan ID
    if (validation.session.planId !== planId) {
      return res.status(403).json({ error: 'Access denied to this plan' });
    }

    res.json({
      valid: true,
      session: validation.session
    });
  } catch (error) {
    console.error('❌ Client session check error:', error);
    res.status(401).json({ error: 'Session validation failed' });
  }
});

module.exports = router; 