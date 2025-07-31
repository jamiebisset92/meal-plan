#!/usr/bin/env node

const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const { ListToolsRequestSchema, CallToolRequestSchema } = require('@modelcontextprotocol/sdk/types.js');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL || 'https://aampnumxitcerdvclbcv.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhbXBudW14aXRjZXJkdmNsYmN2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Mzk0NjEwOSwiZXhwIjoyMDY5NTIyMTA5fQ.DNi5x77_Ce_R5mc7S11ZIMCi1u5ywKWGv0yLmcGsCuk';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

console.error('✅ Supabase client initialized');

// Create MCP server
const server = new Server(
  {
    name: 'supabase-mcp-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'query_meal_plans',
        description: 'Query meal plans with optional filters',
        inputSchema: {
          type: 'object',
          properties: {
            status: { type: 'string', description: 'Filter by status (pending, approved, completed)' },
            client_email: { type: 'string', description: 'Filter by client email' },
            limit: { type: 'number', description: 'Maximum number of results' }
          }
        }
      },
      {
        name: 'get_meal_plan',
        description: 'Get a specific meal plan by ID',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string', description: 'Meal plan ID' }
          },
          required: ['id']
        }
      },
      {
        name: 'create_meal_plan',
        description: 'Create a new meal plan',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string', description: 'Plan ID' },
            client_data: { type: 'object', description: 'Client information' },
            nutrition_targets: { type: 'object', description: 'Nutrition targets' },
            status: { type: 'string', description: 'Initial status' }
          },
          required: ['id', 'client_data', 'nutrition_targets']
        }
      },
      {
        name: 'update_meal_plan',
        description: 'Update an existing meal plan',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string', description: 'Meal plan ID' },
            updates: { type: 'object', description: 'Fields to update' }
          },
          required: ['id', 'updates']
        }
      },
      {
        name: 'delete_meal_plan',
        description: 'Delete a meal plan',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string', description: 'Meal plan ID' }
          },
          required: ['id']
        }
      },
      {
        name: 'get_progress',
        description: 'Get user progress tracking data',
        inputSchema: {
          type: 'object',
          properties: {
            user_id: { type: 'string', description: 'User ID' },
            plan_id: { type: 'string', description: 'Meal plan ID' }
          },
          required: ['user_id']
        }
      },
      {
        name: 'update_progress',
        description: 'Update user progress tracking',
        inputSchema: {
          type: 'object',
          properties: {
            user_id: { type: 'string', description: 'User ID' },
            plan_id: { type: 'string', description: 'Meal plan ID' },
            progress_data: { type: 'object', description: 'Progress data to update' }
          },
          required: ['user_id', 'progress_data']
        }
      }
    ]
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  
  try {
    let result;
    switch (name) {
      case 'query_meal_plans':
        result = await queryMealPlans(args);
        break;
      case 'get_meal_plan':
        result = await getMealPlan(args);
        break;
      case 'create_meal_plan':
        result = await createMealPlan(args);
        break;
      case 'update_meal_plan':
        result = await updateMealPlan(args);
        break;
      case 'delete_meal_plan':
        result = await deleteMealPlan(args);
        break;
      case 'get_progress':
        result = await getProgress(args);
        break;
      case 'update_progress':
        result = await updateProgress(args);
        break;
      default:
        throw new Error(`Unknown tool: ${name}`);
    }
    
    return {
      content: [
        {
          type: 'text',
          text: result
        }
      ]
    };
  } catch (error) {
    console.error(`Error in tool ${name}:`, error);
    return {
      content: [
        {
          type: 'text',
          text: `Error: ${error.message}`
        }
      ]
    };
  }
});

// Tool implementations
async function queryMealPlans(args) {
  const { status, client_email, limit = 50 } = args;
  
  let query = supabase
    .from('meal_plans')
    .select('*');
  
  if (status) {
    query = query.eq('status', status);
  }
  
  if (client_email) {
    query = query.eq('client_email', client_email);
  }
  
  if (limit) {
    query = query.limit(limit);
  }
  
  const { data, error } = await query;
  
  if (error) {
    throw new Error(`Database error: ${error.message}`);
  }
  
  return `Found ${data.length} meal plans:\n\n${JSON.stringify(data, null, 2)}`;
}

async function getMealPlan(args) {
  const { id } = args;
  
  const { data, error } = await supabase
    .from('meal_plans')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    throw new Error(`Database error: ${error.message}`);
  }
  
  if (!data) {
    throw new Error(`Meal plan with ID ${id} not found`);
  }
  
  return `Meal plan details:\n\n${JSON.stringify(data, null, 2)}`;
}

async function createMealPlan(args) {
  const { id, client_data, nutrition_targets, status = 'pending' } = args;
  
  const { data, error } = await supabase
    .from('meal_plans')
    .insert({
      id,
      client_data,
      nutrition_targets,
      status,
      created_at: new Date().toISOString()
    })
    .select()
    .single();
  
  if (error) {
    throw new Error(`Database error: ${error.message}`);
  }
  
  return `Meal plan created successfully:\n\n${JSON.stringify(data, null, 2)}`;
}

async function updateMealPlan(args) {
  const { id, updates } = args;
  
  const { data, error } = await supabase
    .from('meal_plans')
    .update({
      ...updates,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    throw new Error(`Database error: ${error.message}`);
  }
  
  return `Meal plan updated successfully:\n\n${JSON.stringify(data, null, 2)}`;
}

async function deleteMealPlan(args) {
  const { id } = args;
  
  const { error } = await supabase
    .from('meal_plans')
    .delete()
    .eq('id', id);
  
  if (error) {
    throw new Error(`Database error: ${error.message}`);
  }
  
  return `Meal plan with ID ${id} deleted successfully`;
}

async function getProgress(args) {
  const { user_id, plan_id } = args;
  
  let query = supabase
    .from('progress_tracking')
    .select('*')
    .eq('user_id', user_id);
  
  if (plan_id) {
    query = query.eq('plan_id', plan_id);
  }
  
  const { data, error } = await query;
  
  if (error) {
    throw new Error(`Database error: ${error.message}`);
  }
  
  return `Progress data:\n\n${JSON.stringify(data, null, 2)}`;
}

async function updateProgress(args) {
  const { user_id, plan_id, progress_data } = args;
  
  const { data, error } = await supabase
    .from('progress_tracking')
    .upsert({
      user_id,
      plan_id,
      ...progress_data,
      updated_at: new Date().toISOString()
    })
    .select()
    .single();
  
  if (error) {
    throw new Error(`Database error: ${error.message}`);
  }
  
  return `Progress updated successfully:\n\n${JSON.stringify(data, null, 2)}`;
}

// Start the server
async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('🚀 Supabase MCP Server running...');
}

run().catch(console.error); 