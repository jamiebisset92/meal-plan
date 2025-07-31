// SamCart API Integration for Financial Analytics
const axios = require('axios');

class SamCartAPI {
    constructor() {
        this.baseURL = 'https://api.samcart.com/v1';
        this.apiKey = process.env.SAMCART_API_KEY;
        
        if (!this.apiKey) {
            console.warn('⚠️ SAMCART_API_KEY not found in environment variables');
        }
    }

    // Get authentication headers
    getHeaders() {
        return {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
        };
    }

    // Fetch orders with pagination
    async getOrders(page = 1, limit = 50) {
        try {
            if (!this.apiKey) {
                throw new Error('SamCart API key not configured');
            }

            const response = await axios.get(`${this.baseURL}/orders`, {
                headers: this.getHeaders(),
                params: {
                    page,
                    limit,
                    sort: 'created_at',
                    order: 'desc'
                }
            });

            return response.data;
        } catch (error) {
            console.error('❌ SamCart API Error:', error.message);
            return { orders: [], total: 0 };
        }
    }

    // Get today's revenue
    async getTodayRevenue() {
        try {
            const today = new Date();
            const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            const endOfDay = new Date(startOfDay.getTime() + 24 * 60 * 60 * 1000);

            const response = await axios.get(`${this.baseURL}/orders`, {
                headers: this.getHeaders(),
                params: {
                    page: 1,
                    limit: 1000,
                    created_at_gte: startOfDay.toISOString(),
                    created_at_lte: endOfDay.toISOString()
                }
            });

            const orders = response.data.orders || [];
            const revenue = orders.reduce((total, order) => {
                return total + (parseFloat(order.total) || 0);
            }, 0);

            return {
                revenue: Math.round(revenue).toString(),
                orders: orders.length
            };
        } catch (error) {
            console.error('❌ SamCart Revenue Error:', error.message);
            return { revenue: '0', orders: 0 };
        }
    }

    // Get monthly revenue
    async getMonthlyRevenue() {
        try {
            const today = new Date();
            const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
            const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

            const response = await axios.get(`${this.baseURL}/orders`, {
                headers: this.getHeaders(),
                params: {
                    page: 1,
                    limit: 1000,
                    created_at_gte: startOfMonth.toISOString(),
                    created_at_lte: endOfMonth.toISOString()
                }
            });

            const orders = response.data.orders || [];
            const revenue = orders.reduce((total, order) => {
                return total + (parseFloat(order.total) || 0);
            }, 0);

            return {
                revenue: Math.round(revenue).toString(),
                orders: orders.length
            };
        } catch (error) {
            console.error('❌ SamCart Monthly Revenue Error:', error.message);
            return { revenue: '0', orders: 0 };
        }
    }

    // Get recent orders (last 7 days)
    async getRecentOrders() {
        try {
            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

            const response = await axios.get(`${this.baseURL}/orders`, {
                headers: this.getHeaders(),
                params: {
                    page: 1,
                    limit: 50,
                    created_at_gte: sevenDaysAgo.toISOString(),
                    sort: 'created_at',
                    order: 'desc'
                }
            });

            return response.data.orders || [];
        } catch (error) {
            console.error('❌ SamCart Recent Orders Error:', error.message);
            return [];
        }
    }

    // Get customer analytics
    async getCustomerAnalytics() {
        try {
            const response = await axios.get(`${this.baseURL}/customers`, {
                headers: this.getHeaders(),
                params: {
                    page: 1,
                    limit: 1000
                }
            });

            const customers = response.data.customers || [];
            
            // Calculate metrics
            const totalCustomers = customers.length;
            const activeCustomers = customers.filter(c => c.status === 'active').length;
            const newThisMonth = customers.filter(c => {
                const created = new Date(c.created_at);
                const now = new Date();
                return created.getMonth() === now.getMonth() && 
                       created.getFullYear() === now.getFullYear();
            }).length;

            return {
                total: totalCustomers,
                active: activeCustomers,
                newThisMonth: newThisMonth
            };
        } catch (error) {
            console.error('❌ SamCart Customer Analytics Error:', error.message);
            return { total: 0, active: 0, newThisMonth: 0 };
        }
    }

    // Get all-time revenue
    async getAllTimeRevenue() {
        try {
            const response = await axios.get(`${this.baseURL}/orders`, {
                headers: this.getHeaders(),
                params: {
                    page: 1,
                    limit: 10000 // Get all orders
                }
            });

            const orders = response.data.orders || [];
            const revenue = orders.reduce((total, order) => {
                return total + (parseFloat(order.total) || 0);
            }, 0);

            return {
                revenue: Math.round(revenue).toString(),
                orders: orders.length
            };
        } catch (error) {
            console.error('❌ SamCart All-Time Revenue Error:', error.message);
            return { revenue: '0', orders: 0 };
        }
    }

    // Get comprehensive financial dashboard data
    async getFinancialDashboard() {
        try {
            const [todayRevenue, monthlyRevenue, allTimeRevenue, recentOrders, customerAnalytics] = await Promise.all([
                this.getTodayRevenue(),
                this.getMonthlyRevenue(),
                this.getAllTimeRevenue(),
                this.getRecentOrders(),
                this.getCustomerAnalytics()
            ]);

            return {
                today: todayRevenue,
                monthly: monthlyRevenue,
                allTime: allTimeRevenue,
                recentOrders: recentOrders.slice(0, 5), // Last 5 orders
                customers: customerAnalytics,
                lastUpdated: new Date().toISOString()
            };
        } catch (error) {
            console.error('❌ SamCart Dashboard Error:', error.message);
            return {
                today: { revenue: '0', orders: 0 },
                monthly: { revenue: '0', orders: 0 },
                allTime: { revenue: '0', orders: 0 },
                recentOrders: [],
                customers: { total: 0, active: 0, newThisMonth: 0 },
                lastUpdated: new Date().toISOString()
            };
        }
    }
}

module.exports = SamCartAPI; 