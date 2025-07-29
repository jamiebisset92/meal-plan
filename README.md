# 🍽️ Meal Planning AI System

## 📁 Directory Structure

```
MEAL PLANNING AI SYSTEM/
├── src/                          # Source code
│   ├── modules/                  # Core business logic modules
│   │   ├── Module-1-Calculations.js      # Nutrition calculations
│   │   ├── Module-2-Psychology.js        # Psychology & coaching
│   │   ├── Module-3-Communication.js     # Communication templates
│   │   ├── Module-4-Supplements.js       # Supplement analysis
│   │   ├── Module-5-Meal-Plan.js         # Meal plan generation
│   │   └── Module-6-Interactive-HTML.js  # HTML generation
│   ├── templates/                # Meal templates
│   │   ├── meal-templates.js              # Main template aggregator
│   │   ├── meal-templates-upon-waking.js  # Morning meals
│   │   ├── meal-templates-day-meals.js    # Lunch meals
│   │   ├── meal-templates-dinner.js       # Dinner meals
│   │   ├── meal-templates-post-workout.js # Post-workout meals
│   │   └── meal-templates-snacks.js       # Snack options
│   ├── services/                 # Business logic services
│   │   ├── main-orchestrator.js           # Main coordinator
│   │   └── meal-template-service.js       # Template selection logic
│   └── utils/                    # Utility functions
│       ├── food-database-loader.js        # Database loader
│       └── supplement-parser.js           # Supplement parsing
├── data/                         # Data files
│   ├── Nutritional Database.csv           # Food nutrition data
│   ├── Typeform-Mapping.json             # Form field mappings
│   ├── UPDATED Typeform JULY              # Form data
│   └── Typeform Questions 14-07-25       # Form questions
├── server/                       # Server applications
│   ├── dev-server.js                     # Development server
│   └── server.js                         # Production webhook server
├── tests/                        # Test files
│   ├── test-complete-flow.js             # End-to-end tests
│   ├── test-supplement-*.js              # Supplement tests
│   ├── test-template-integration.js      # Template tests
│   └── interactive_meal_planner.html     # Interactive test page
├── docs/                         # Documentation
│   ├── Module-58-ORIGINAL.rtf            # Original specifications
│   ├── Module-40-Coaching-Notes.rtf      # Coaching documentation
│   ├── README.md                         # This file
│   ├── DEVELOPMENT-PATH.md               # Development roadmap
│   ├── ARCHITECTURE-SUMMARY.md           # System architecture
│   └── *.md                              # Other documentation
├── assets/                       # Static assets
│   ├── *.jpg                             # Logo images
│   └── *.png                             # Logo images
├── backup/                       # Backup files
│   └── Nutritional Database-BACKUP.csv   # Database backup
│   └── Module-5-Meal-Plan-BACKUP.js      # Module backup
└── public/                       # Web assets
    ├── logo.jpg                          # Public logo
    ├── logo.png                          # Public logo
    └── plans/                            # Generated meal plans
        └── *.html                        # Individual plan files
```

## 🔄 Processing Flow

The modules are now numbered in their logical processing order:

1. **Module-1-Calculations.js** - Calculates nutrition targets based on user data
2. **Module-2-Psychology.js** - Analyzes psychological factors and coaching needs
3. **Module-3-Communication.js** - Generates personalized communication templates
4. **Module-4-Supplements.js** - Analyzes supplement needs and generates recommendations
5. **Module-5-Meal-Plan.js** - Generates precision meal plans with ±25 calorie accuracy
6. **Module-6-Interactive-HTML.js** - Creates interactive meal plan HTML interfaces

## 🚀 Getting Started

### Development Server (UI Testing)
```bash
npm run dev-ui
# or
node server/dev-server.js
```
Opens: http://localhost:3001

### Production Webhook Server
```bash
npm start
# or
node server/server.js
```
Opens: http://localhost:3000

### Run Tests
```bash
npm test
# or
node tests/test-complete-flow.js
```

## 🔧 Available Scripts

- `npm start` - Run production webhook server
- `npm run dev` - Run production server with nodemon
- `npm run dev-ui` - Run development UI server
- `npm test` - Run test suite

## 📋 Key Components

### Core Modules (`src/modules/`)
The modules follow a logical processing sequence from 1-6:
- **Module-1-Calculations.js** - Calculates nutrition targets based on user data
- **Module-2-Psychology.js** - Analyzes psychological factors and coaching needs
- **Module-3-Communication.js** - Generates personalized communication templates
- **Module-4-Supplements.js** - Analyzes supplement needs and generates recommendations
- **Module-5-Meal-Plan.js** - Generates precision meal plans with ±25 calorie accuracy
- **Module-6-Interactive-HTML.js** - Creates interactive meal plan HTML interfaces

### Services (`src/services/`)
- **main-orchestrator.js** - Coordinates all modules and data flow
- **meal-template-service.js** - Intelligent meal template selection and scaling

### Templates (`src/templates/`)
- **meal-templates-*.js** - Curated meal templates organized by timing and type
- Templates support scaling, dietary restrictions, and user preferences

### Utils (`src/utils/`)
- **food-database-loader.js** - Loads and indexes nutrition database
- **supplement-parser.js** - Parses supplement strings and formats for display

## 🗃️ Data Flow

1. **User Input** → Typeform webhook or test data
2. **Module-1** → Calculates nutrition targets
3. **Module-2** → Analyzes psychology and coaching needs
4. **Module-3** → Generates communication templates
5. **Module-4** → Analyzes and recommends supplements
6. **Module-5** → Generates precision meal plans using templates
7. **Module-6** → Creates interactive HTML meal plan with all components

## 🧪 Testing

The system includes comprehensive tests for:
- Complete end-to-end flow
- Supplement integration and parsing
- Template selection and scaling
- UI generation and display

## 📖 Documentation

See the `docs/` directory for:
- Original specifications
- Architecture documentation
- Development roadmaps
- Implementation guides

## 🔄 Development Workflow

1. Make changes to source files in `src/`
2. Test with development server: `npm run dev-ui`
3. Run tests: `npm test`
4. Deploy production server: `npm start`

The development server automatically refreshes when you make changes to source files. 