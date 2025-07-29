/**
 * Upon Waking Meal Templates
 * First meal of the day options for fitness-focused nutrition
 * Includes standard, quick, and pre-workout morning options
 */

const uponWakingTemplates = [
  // ========== STANDARD HIGH-PROTEIN BREAKFASTS (5) ==========
  
  {
    id: "UW001",
    name: "Protein Power Oats",
    categories: ["upon_waking"],
    dietTypes: ["omnivore", "vegetarian"],
    
    complexity: {
      level: "simple",
      prepTime: 10,
      cookingRequired: true,
      mealPrepFriendly: true,
      equipment: ["stovetop", "microwave"]
    },
    
    pattern: {
      proteins: [
        { food: "Greek Yogurt (2% fat)", amount: 150, required: true },
        { food: "Whey Protein Isolate", amount: 15, required: false }
      ],
      carbs: [
        { food: "Rolled Oats", amount: 60, required: true }
      ],
      vegetables: [],
      fruits: [
        { food: "Blueberries", amount: 80, required: false }
      ],
      fats: [
        { food: "Almond Butter", amount: 15, required: true }
      ],
      extras: [
        { food: "Honey", amount: 10, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "none",
    
    alternatives: {
      "Greek Yogurt (2% fat)": ["Greek Yogurt (Non-fat)", "Cottage Cheese (Low-fat)"],
      "Rolled Oats": ["Quick Oats"],
      "Almond Butter": ["Peanut Butter (Natural)"],
      "Blueberries": ["Strawberries", "Banana"],
      "Honey": ["Maple Syrup"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["nut-allergy"],
        preferences: ["no-dairy"]
      },
      bestFor: ["muscle-gain", "balanced-energy", "morning-nutrition"],
      timingNote: ""
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "carbs", "fats"],
      fixedComponents: ["fruits", "extras"],
      minPortions: {
        proteins: 0.5,
        carbs: 0.5,
        fats: 0.5
      },
      maxPortions: {
        proteins: 2.0,
        carbs: 2.0,
        fats: 1.5
      }
    },
    
    macroProfile: {
      calories: 488,
      protein: 33,
      carbs: 66,
      fat: 11,
      fiber: 8
    },
    
    notes: "High protein breakfast with slow-digesting carbs. Perfect for muscle building and sustained energy."
  },

  {
    id: "UW002",
    name: "Classic Eggs & Toast",
    categories: ["upon_waking"],
    dietTypes: ["omnivore"],
    
    complexity: {
      level: "simple",
      prepTime: 12,
      cookingRequired: true,
      mealPrepFriendly: false,
      equipment: ["stovetop"]
    },
    
    pattern: {
      proteins: [
        { food: "Eggs (Large)", amount: 150, required: true }, // 3 eggs × 50g each
        { food: "Egg Whites", amount: 60, required: false }
      ],
      carbs: [
        { food: "Ezekiel Bread", amount: 80, required: true }
      ],
      vegetables: [
        { food: "Spinach", amount: 50, required: false },
        { food: "Mushrooms (White)", amount: 60, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Olive Oil (Extra Virgin)", amount: 8, required: true }
      ],
      extras: []
    },
    
    workoutTiming: "anytime",
    saucePreference: "light",
    
    alternatives: {
      "Ezekiel Bread": ["Whole Wheat Bread"],
      "Spinach": ["Kale", "Bell Peppers (Red)"],
      "Mushrooms (White)": ["Tomatoes", "Onions"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["egg-allergy"],
        preferences: ["dislikes-eggs"]
      },
      bestFor: ["muscle-gain", "classic-breakfast", "high-protein"],
      timingNote: ""
    },
    
    scaling: {
      method: "protein-first",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["vegetables", "fats"],
      minPortions: {
        proteins: 0.7,
        carbs: 0.5
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 445,
      protein: 30,
      carbs: 34,
      fat: 19,
      fiber: 7
    },
    
    notes: "Classic bodybuilder breakfast. Add vegetables for extra nutrients without many calories."
  },

  {
    id: "UW003",
    name: "Greek Yogurt Parfait",
    categories: ["upon_waking"],
    dietTypes: ["omnivore", "vegetarian"],
    
    complexity: {
      level: "on-the-go",
      prepTime: 5,
      cookingRequired: false,
      mealPrepFriendly: true,
      equipment: ["none"]
    },
    
    pattern: {
      proteins: [
        { food: "Greek Yogurt (Non-fat)", amount: 250, required: true }
      ],
      carbs: [
        { food: "Rolled Oats", amount: 40, required: true }
      ],
      vegetables: [],
      fruits: [
        { food: "Strawberries", amount: 100, required: true },
        { food: "Blueberries", amount: 50, required: false }
      ],
      fats: [
        { food: "Almonds", amount: 20, required: true }
      ],
      extras: [
        { food: "Honey", amount: 10, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "none",
    
    alternatives: {
      "Greek Yogurt (Non-fat)": ["Greek Yogurt (2% fat)", "Cottage Cheese (Low-fat)"],
      "Strawberries": ["Mango", "Apple"],
      "Almonds": ["Walnuts", "Pecans"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["nut-allergy", "lactose-intolerant"],
        preferences: ["no-dairy"]
      },
      bestFor: ["fat-loss", "quick-breakfast", "meal-prep"],
      timingNote: ""
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "carbs", "fats"],
      fixedComponents: ["fruits", "extras"],
      minPortions: {
        proteins: 0.6,
        carbs: 0.5,
        fats: 0.5
      },
      maxPortions: {
        proteins: 1.4,
        carbs: 1.5,
        fats: 1.5
      }
    },
    
    macroProfile: {
      calories: 380,
      protein: 29,
      carbs: 50,
      fat: 7,
      fiber: 7
    },
    
    notes: "Quick, no-cook option perfect for meal prep. Layer ingredients in containers for grab-and-go convenience."
  },

  {
    id: "UW004",
    name: "Cottage Cheese Power Bowl",
    categories: ["upon_waking"],
    dietTypes: ["omnivore", "vegetarian"],
    
    complexity: {
      level: "on-the-go",
      prepTime: 3,
      cookingRequired: false,
      mealPrepFriendly: true,
      equipment: ["none"]
    },
    
    pattern: {
      proteins: [
        { food: "Cottage Cheese (Low-fat)", amount: 225, required: true }
      ],
      carbs: [
        { food: "Rice Cakes (Plain)", amount: 30, required: true }
      ],
      vegetables: [],
      fruits: [
        { food: "Apple", amount: 150, required: true }
      ],
      fats: [
        { food: "Peanut Butter (Natural)", amount: 15, required: true }
      ],
      extras: []
    },
    
    workoutTiming: "anytime",
    saucePreference: "none",
    
    alternatives: {
      "Apple": ["Banana", "Orange"],
      "Rice Cakes (Plain)": ["Whole Wheat Bread"],
      "Peanut Butter (Natural)": ["Almond Butter"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["lactose-intolerant"],
        preferences: ["no-dairy", "dislikes-cottage-cheese"]
      },
      bestFor: ["high-protein", "low-prep", "fat-loss"],
      timingNote: ""
    },
    
    scaling: {
      method: "protein-first",
      scalableComponents: ["proteins", "carbs", "fats"],
      fixedComponents: ["fruits"],
      minPortions: {
        proteins: 0.7,
        carbs: 0.5,
        fats: 0.5
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 2.0,
        fats: 1.5
      }
    },
    
    macroProfile: {
      calories: 360,
      protein: 28,
      carbs: 44,
      fat: 8,
      fiber: 5
    },
    
    notes: "Ultra-quick high-protein breakfast. Cottage cheese provides casein protein for sustained amino acid release."
  },

  {
    id: "UW005",
    name: "Scrambled Egg White Wrap",
    categories: ["upon_waking"],
    dietTypes: ["omnivore"],
    
    complexity: {
      level: "simple",
      prepTime: 15,
      cookingRequired: true,
      mealPrepFriendly: false,
      equipment: ["stovetop"]
    },
    
    pattern: {
      proteins: [
        { food: "Egg Whites", amount: 200, required: true },
        { food: "Turkey (Deli Sliced)", amount: 60, required: true }
      ],
      carbs: [
        { food: "Whole Wheat Tortilla", amount: 60, required: true }
      ],
      vegetables: [
        { food: "Bell Peppers (Red)", amount: 60, required: true },
        { food: "Onions", amount: 40, required: false },
        { food: "Spinach", amount: 30, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Avocado", amount: 50, required: true }
      ],
      extras: [
        { food: "Salsa (Fresh)", amount: 30, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "light",
    
    alternatives: {
      "Turkey (Deli Sliced)": ["Chicken Breast", "Lean Beef Mince (5%)"],
      "Whole Wheat Tortilla": ["Ezekiel Bread"],
      "Bell Peppers (Red)": ["Mushrooms (White)", "Tomatoes"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["egg-allergy"],
        preferences: ["dislikes-eggs"]
      },
      bestFor: ["muscle-gain", "filling-breakfast", "high-protein"],
      timingNote: ""
    },
    
    scaling: {
      method: "protein-first",
      scalableComponents: ["proteins", "carbs", "fats"],
      fixedComponents: ["vegetables", "extras"],
      minPortions: {
        proteins: 0.7,
        carbs: 0.5,
        fats: 0.5
      },
      maxPortions: {
        proteins: 1.3,
        carbs: 1.5,
        fats: 1.5
      }
    },
    
    macroProfile: {
      calories: 385,
      protein: 36,
      carbs: 35,
      fat: 11,
      fiber: 8
    },
    
    notes: "High volume, low calorie breakfast wrap. Great for cutting phases when you want to feel full."
  },

  // ========== QUICK/ON-THE-GO OPTIONS (5) ==========
  
  {
    id: "UW006",
    name: "Protein Power Smoothie",
    categories: ["upon_waking"],
    dietTypes: ["omnivore", "vegetarian"],
    
    complexity: {
      level: "on-the-go",
      prepTime: 5,
      cookingRequired: false,
      mealPrepFriendly: false,
      equipment: ["blender"]
    },
    
    pattern: {
      proteins: [
        { food: "Whey Protein Isolate", amount: 30, required: true },
        { food: "Greek Yogurt (Non-fat)", amount: 100, required: false }
      ],
      carbs: [
        { food: "Rolled Oats", amount: 40, required: true }
      ],
      vegetables: [
        { food: "Spinach", amount: 30, required: false }
      ],
      fruits: [
        { food: "Banana", amount: 100, required: true },
        { food: "Blueberries", amount: 50, required: false }
      ],
      fats: [
        { food: "Almond Butter", amount: 10, required: true }
      ],
      extras: [
        { food: "Ice", amount: 100, required: false },
        { food: "Water", amount: 200, required: true }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "none",
    
    alternatives: {
      "Whey Protein Isolate": ["Plant Protein Powder"],
      "Banana": ["Mango", "Strawberries"],
      "Almond Butter": ["Peanut Butter (Natural)"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["lactose-intolerant"],
        preferences: ["no-protein-powder", "no-smoothies"]
      },
      bestFor: ["quick-breakfast", "post-workout", "on-the-go"],
      timingNote: ""
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "carbs", "fats"],
      fixedComponents: ["vegetables", "fruits", "extras"],
      minPortions: {
        proteins: 0.7,
        carbs: 0.5,
        fats: 0.5
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 1.5,
        fats: 2.0
      }
    },
    
    macroProfile: {
      calories: 385,
      protein: 32,
      carbs: 52,
      fat: 6,
      fiber: 6
    },
    
    notes: "Perfect liquid breakfast for those who struggle eating solid food in the morning. Blend and go!"
  },

  {
    id: "UW007",
    name: "Overnight Protein Oats",
    categories: ["upon_waking"],
    dietTypes: ["omnivore", "vegetarian"],
    
    complexity: {
      level: "on-the-go",
      prepTime: 5,
      cookingRequired: false,
      mealPrepFriendly: true,
      equipment: ["none"]
    },
    
    pattern: {
      proteins: [
        { food: "Whey Protein Isolate", amount: 25, required: true },
        { food: "Greek Yogurt (2% fat)", amount: 100, required: true }
      ],
      carbs: [
        { food: "Rolled Oats", amount: 50, required: true }
      ],
      vegetables: [],
      fruits: [
        { food: "Strawberries", amount: 80, required: true }
      ],
      fats: [
        { food: "Chia Seeds", amount: 10, required: true }
      ],
      extras: [
        { food: "Almond Milk", amount: 150, required: true }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "none",
    
    alternatives: {
      "Whey Protein Isolate": ["Plant Protein Powder"],
      "Rolled Oats": ["Quick Oats"],
      "Strawberries": ["Blueberries", "Banana"],
      "Almond Milk": ["Skim Milk", "Soy Milk"]
    },
    
    rules: {
      excludeIf: {
        restrictions: [],
        preferences: ["no-protein-powder"]
      },
      bestFor: ["meal-prep", "convenience", "balanced-macros"],
      timingNote: "Prepare the night before for instant morning nutrition"
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "carbs", "fats"],
      fixedComponents: ["fruits", "extras"],
      minPortions: {
        proteins: 0.6,
        carbs: 0.6,
        fats: 0.5
      },
      maxPortions: {
        proteins: 1.6,
        carbs: 1.5,
        fats: 2.0
      }
    },
    
    macroProfile: {
      calories: 420,
      protein: 35,
      carbs: 52,
      fat: 9,
      fiber: 9
    },
    
    notes: "Prepare 3-5 jars on Sunday for the week. Mix everything except fruit, add fruit morning of."
  },

  {
    id: "UW008",
    name: "Quick Protein Toast",
    categories: ["upon_waking"],
    dietTypes: ["omnivore", "vegetarian"],
    
    complexity: {
      level: "on-the-go",
      prepTime: 7,
      cookingRequired: false,
      mealPrepFriendly: false,
      equipment: ["toaster"]
    },
    
    pattern: {
      proteins: [
        { food: "Cottage Cheese (Low-fat)", amount: 150, required: true }
      ],
      carbs: [
        { food: "Ezekiel Bread", amount: 80, required: true }
      ],
      vegetables: [
        { food: "Tomatoes", amount: 60, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Avocado", amount: 60, required: true }
      ],
      extras: [
        { food: "Everything Bagel Seasoning", amount: 2, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "none",
    
    alternatives: {
      "Cottage Cheese (Low-fat)": ["Greek Yogurt (2% fat)", "Ricotta (Part-skim)"],
      "Ezekiel Bread": ["Whole Wheat Bread"],
      "Avocado": ["Almond Butter", "Peanut Butter (Natural)"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["lactose-intolerant"],
        preferences: ["no-dairy", "dislikes-cottage-cheese"]
      },
      bestFor: ["quick-breakfast", "high-protein", "simple-prep"],
      timingNote: ""
    },
    
    scaling: {
      method: "protein-first",
      scalableComponents: ["proteins", "carbs", "fats"],
      fixedComponents: ["vegetables", "extras"],
      minPortions: {
        proteins: 0.7,
        carbs: 0.5,
        fats: 0.5
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 1.5,
        fats: 1.3
      }
    },
    
    macroProfile: {
      calories: 345,
      protein: 24,
      carbs: 36,
      fat: 11,
      fiber: 9
    },
    
    notes: "Instagram-worthy breakfast that's actually nutritious. Toast bread, spread cottage cheese, top with avocado."
  },

  {
    id: "UW009",
    name: "Protein Bar & Fruit",
    categories: ["upon_waking"],
    dietTypes: ["omnivore", "vegetarian"],
    
    complexity: {
      level: "on-the-go",
      prepTime: 1,
      cookingRequired: false,
      mealPrepFriendly: true,
      equipment: ["none"]
    },
    
    pattern: {
      proteins: [
        { food: "Protein Bar (Quest)", amount: 60, required: true },
        { food: "Greek Yogurt (Non-fat)", amount: 150, required: true }
      ],
      carbs: [],
      vegetables: [],
      fruits: [
        { food: "Banana", amount: 100, required: true }
      ],
      fats: [],
      extras: []
    },
    
    workoutTiming: "pre-immediate",
    saucePreference: "none",
    
    alternatives: {
      "Protein Bar (Quest)": ["Protein Bar (ONE)", "Protein Bar (RX)"],
      "Banana": ["Apple", "Orange"]
    },
    
    rules: {
      excludeIf: {
        restrictions: [],
        preferences: ["no-processed-foods", "no-dairy"]
      },
      bestFor: ["emergency-breakfast", "travel", "pre-workout"],
      timingNote: "Good option 30-45 minutes before morning workout"
    },
    
    scaling: {
      method: "fixed",
      scalableComponents: ["proteins"],
      fixedComponents: ["fruits"],
      minPortions: {
        proteins: 0.8
      },
      maxPortions: {
        proteins: 1.2
      }
    },
    
    macroProfile: {
      calories: 315,
      protein: 35,
      carbs: 37,
      fat: 5,
      fiber: 5
    },
    
    notes: "Emergency breakfast option. Not ideal daily but perfect for travel or rushed mornings."
  },

  {
    id: "UW010",
    name: "Egg White Muffins",
    categories: ["upon_waking"],
    dietTypes: ["omnivore"],
    
    complexity: {
      level: "on-the-go",
      prepTime: 3,
      cookingRequired: false,
      mealPrepFriendly: true,
      equipment: ["microwave"]
    },
    
    pattern: {
      proteins: [
        { food: "Egg Whites", amount: 200, required: true },
        { food: "Turkey (Deli Sliced)", amount: 40, required: false }
      ],
      carbs: [
        { food: "Whole Wheat English Muffin", amount: 60, required: true }
      ],
      vegetables: [
        { food: "Spinach", amount: 30, required: true },
        { food: "Bell Peppers (Red)", amount: 30, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Reduced Fat Cheese", amount: 20, required: true }
      ],
      extras: []
    },
    
    workoutTiming: "anytime",
    saucePreference: "none",
    
    alternatives: {
      "Whole Wheat English Muffin": ["Ezekiel Bread", "Whole Wheat Bread"],
      "Turkey (Deli Sliced)": ["Canadian Bacon", "Chicken Breast"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["egg-allergy"],
        preferences: ["dislikes-eggs", "no-dairy"]
      },
      bestFor: ["meal-prep", "high-protein", "low-fat"],
      timingNote: "Bake 12 muffins on Sunday, reheat 2-3 for breakfast"
    },
    
    scaling: {
      method: "protein-first",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["vegetables", "fats"],
      minPortions: {
        proteins: 0.7,
        carbs: 0.5
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 280,
      protein: 28,
      carbs: 30,
      fat: 6,
      fiber: 5
    },
    
    notes: "Make a batch of egg muffins on Sunday. Reheat and add to English muffin for complete breakfast."
  },

  // ========== PRE-WORKOUT MORNING OPTIONS (5) ==========
  
  {
    id: "UW011",
    name: "Pre-Training Power Bowl",
    categories: ["upon_waking"],
    dietTypes: ["omnivore"],
    
    complexity: {
      level: "simple",
      prepTime: 15,
      cookingRequired: true,
      mealPrepFriendly: true,
      equipment: ["microwave", "stovetop"]
    },
    
    pattern: {
      proteins: [
        { food: "Chicken Breast", amount: 100, required: true }
      ],
      carbs: [
        { food: "White Rice", amount: 150, required: true },
        { food: "Rice Cakes (Plain)", amount: 20, required: false }
      ],
      vegetables: [
        { food: "Broccoli", amount: 80, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Olive Oil (Extra Virgin)", amount: 5, required: true }
      ],
      extras: [
        { food: "Soy Sauce (Reduced Sodium)", amount: 10, required: false }
      ]
    },
    
    workoutTiming: "pre-early",
    saucePreference: "light",
    
    alternatives: {
      "Chicken Breast": ["Turkey Breast", "White Fish (Barramundi)"],
      "White Rice": ["Sweet Potato", "White Potato"]
    },
    
    rules: {
      excludeIf: {
        restrictions: [],
        preferences: ["no-meat"]
      },
      bestFor: ["pre-workout", "sustained-energy", "morning-training"],
      timingNote: "Consume 1-2 hours before morning training session"
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["vegetables", "fats", "extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.7
      },
      maxPortions: {
        proteins: 1.3,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 410,
      protein: 28,
      carbs: 48,
      fat: 8,
      fiber: 3
    },
    
    notes: "Perfect pre-workout meal with easily digestible carbs and lean protein. Minimal fat for faster digestion."
  },

  {
    id: "UW012",
    name: "Morning Fuel Oatmeal",
    categories: ["upon_waking"],
    dietTypes: ["omnivore", "vegetarian"],
    
    complexity: {
      level: "simple",
      prepTime: 10,
      cookingRequired: true,
      mealPrepFriendly: false,
      equipment: ["stovetop", "microwave"]
    },
    
    pattern: {
      proteins: [
        { food: "Whey Protein Isolate", amount: 25, required: true }
      ],
      carbs: [
        { food: "Quick Oats", amount: 60, required: true }
      ],
      vegetables: [],
      fruits: [
        { food: "Banana", amount: 80, required: true }
      ],
      fats: [],
      extras: [
        { food: "Honey", amount: 10, required: false },
        { food: "Cinnamon", amount: 2, required: false }
      ]
    },
    
    workoutTiming: "pre-early",
    saucePreference: "none",
    
    alternatives: {
      "Quick Oats": ["Rolled Oats"],
      "Whey Protein Isolate": ["Plant Protein Powder"],
      "Banana": ["Apple", "Strawberries"]
    },
    
    rules: {
      excludeIf: {
        restrictions: [],
        preferences: ["no-protein-powder"]
      },
      bestFor: ["pre-workout", "quick-energy", "morning-training"],
      timingNote: "Ideal 60-90 minutes before morning workout"
    },
    
    scaling: {
      method: "carb-first",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["fruits", "extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.7
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 385,
      protein: 26,
      carbs: 68,
      fat: 3,
      fiber: 7
    },
    
    notes: "Low-fat pre-workout meal for quick digestion. Mix protein powder into cooked oats for creamy texture."
  },

  {
    id: "UW013",
    name: "Turkey & Sweet Potato Hash",
    categories: ["upon_waking"],
    dietTypes: ["omnivore"],
    
    complexity: {
      level: "moderate",
      prepTime: 20,
      cookingRequired: true,
      mealPrepFriendly: true,
      equipment: ["stovetop"]
    },
    
    pattern: {
      proteins: [
        { food: "Lean Beef Mince (5%)", amount: 100, required: true }
      ],
      carbs: [
        { food: "Sweet Potato", amount: 150, required: true }
      ],
      vegetables: [
        { food: "Bell Peppers (Red)", amount: 60, required: true },
        { food: "Onions", amount: 40, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Olive Oil (Extra Virgin)", amount: 5, required: true }
      ],
      extras: [
        { food: "Garlic", amount: 5, required: false }
      ]
    },
    
    workoutTiming: "pre-early",
    saucePreference: "light",
    
    alternatives: {
      "Lean Beef Mince (5%)": ["Turkey Breast", "Chicken Breast"],
      "Sweet Potato": ["White Potato", "Butternut Squash"]
    },
    
    rules: {
      excludeIf: {
        restrictions: [],
        preferences: ["no-red-meat"]
      },
      bestFor: ["pre-workout", "muscle-gain", "hearty-breakfast"],
      timingNote: "Consume 1.5-2 hours before training for optimal digestion"
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["vegetables", "fats", "extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.7
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 385,
      protein: 26,
      carbs: 42,
      fat: 10,
      fiber: 6
    },
    
    notes: "Hearty pre-workout meal. Dice sweet potato small for faster cooking. Great meal prep option."
  },

  {
    id: "UW014",
    name: "Pre-Workout Pancakes",
    categories: ["upon_waking"],
    dietTypes: ["omnivore", "vegetarian"],
    
    complexity: {
      level: "simple",
      prepTime: 15,
      cookingRequired: true,
      mealPrepFriendly: false,
      equipment: ["stovetop", "griddle"]
    },
    
    pattern: {
      proteins: [
        { food: "Eggs (Large)", amount: 100, required: true }, // 2 eggs × 50g each
        { food: "Whey Protein Isolate", amount: 20, required: true }
      ],
      carbs: [
        { food: "Quick Oats", amount: 50, required: true }
      ],
      vegetables: [],
      fruits: [
        { food: "Banana", amount: 60, required: true }
      ],
      fats: [],
      extras: [
        { food: "Maple Syrup", amount: 15, required: false },
        { food: "Cooking Spray", amount: 5, required: true }
      ]
    },
    
    workoutTiming: "pre-early",
    saucePreference: "light",
    
    alternatives: {
      "Quick Oats": ["Oat Flour", "Rolled Oats"],
      "Banana": ["Blueberries", "Strawberries"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["egg-allergy"],
        preferences: ["no-protein-powder", "dislikes-eggs"]
      },
      bestFor: ["pre-workout", "weekend-breakfast", "muscle-gain"],
      timingNote: "Perfect 60-90 minutes before morning training"
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["fruits", "extras"],
      minPortions: {
        proteins: 0.7,
        carbs: 0.7
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 425,
      protein: 30,
      carbs: 58,
      fat: 8,
      fiber: 6
    },
    
    notes: "Blend all ingredients for batter. Makes 3-4 small pancakes. Top with sliced banana."
  },

  {
    id: "UW015",
    name: "Tuna & Rice Bowl",
    categories: ["upon_waking"],
    dietTypes: ["omnivore"],
    
    complexity: {
      level: "simple",
      prepTime: 10,
      cookingRequired: false,
      mealPrepFriendly: true,
      equipment: ["microwave"]
    },
    
    pattern: {
      proteins: [
        { food: "Tuna (Canned in Water)", amount: 120, required: true }
      ],
      carbs: [
        { food: "White Rice", amount: 150, required: true }
      ],
      vegetables: [
        { food: "Cucumber", amount: 60, required: false },
        { food: "Carrots", amount: 40, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Olive Oil (Extra Virgin)", amount: 8, required: true }
      ],
      extras: [
        { food: "Soy Sauce (Reduced Sodium)", amount: 10, required: false }
      ]
    },
    
    workoutTiming: "pre-early",
    saucePreference: "light",
    
    alternatives: {
      "Tuna (Canned in Water)": ["Salmon (Canned)", "Chicken Breast"],
      "White Rice": ["Jasmine Rice", "Sushi Rice"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["fish-allergy"],
        preferences: ["no-fish", "no-canned-foods"]
      },
      bestFor: ["pre-workout", "meal-prep", "lean-gains"],
      timingNote: "Light but energizing meal 1-2 hours before training"
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "carbs", "fats"],
      fixedComponents: ["vegetables", "extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.7,
        fats: 0.5
      },
      maxPortions: {
        proteins: 1.3,
        carbs: 1.5,
        fats: 1.5
      }
    },
    
    macroProfile: {
      calories: 380,
      protein: 29,
      carbs: 46,
      fat: 8,
      fiber: 2
    },
    
    notes: "Simple pre-workout meal using pantry staples. Use pre-cooked rice for convenience."
  },

  // ========== IMMEDIATE PRE-WORKOUT OPTIONS (3) ==========
  
  {
    id: "UW016",
    name: "Quick Energy Toast",
    categories: ["upon_waking"],
    dietTypes: ["omnivore", "vegetarian"],
    
    complexity: {
      level: "on-the-go",
      prepTime: 5,
      cookingRequired: false,
      mealPrepFriendly: false,
      equipment: ["toaster"]
    },
    
    pattern: {
      proteins: [
        { food: "Greek Yogurt (Non-fat)", amount: 150, required: true }
      ],
      carbs: [
        { food: "White Bread", amount: 60, required: true }
      ],
      vegetables: [],
      fruits: [
        { food: "Banana", amount: 60, required: true }
      ],
      fats: [],
      extras: [
        { food: "Honey", amount: 10, required: false }
      ]
    },
    
    workoutTiming: "pre-immediate",
    saucePreference: "none",
    
    alternatives: {
      "White Bread": ["Rice Cakes (Plain)", "English Muffin"],
      "Banana": ["White Grapes", "Apple Sauce"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["lactose-intolerant"],
        preferences: ["no-dairy", "no-white-bread"]
      },
      bestFor: ["pre-workout", "quick-energy", "morning-training"],
      timingNote: "Consume 30-45 minutes before workout for quick energy"
    },
    
    scaling: {
      method: "fixed",
      scalableComponents: [],
      fixedComponents: ["proteins", "carbs", "fruits", "extras"],
      minPortions: {},
      maxPortions: {}
    },
    
    macroProfile: {
      calories: 285,
      protein: 17,
      carbs: 55,
      fat: 1,
      fiber: 3
    },
    
    notes: "Light pre-workout snack with fast-digesting carbs. Toast bread, top with banana slices and yogurt."
  },

  {
    id: "UW017",
    name: "Pre-Workout Shake",
    categories: ["upon_waking"],
    dietTypes: ["omnivore", "vegetarian"],
    
    complexity: {
      level: "on-the-go",
      prepTime: 3,
      cookingRequired: false,
      mealPrepFriendly: false,
      equipment: ["shaker", "blender"]
    },
    
    pattern: {
      proteins: [
        { food: "Whey Protein Isolate", amount: 20, required: true }
      ],
      carbs: [
        { food: "White Rice", amount: 40, required: true }
      ],
      vegetables: [],
      fruits: [
        { food: "Banana", amount: 80, required: true }
      ],
      fats: [],
      extras: [
        { food: "Water", amount: 300, required: true }
      ]
    },
    
    workoutTiming: "pre-immediate",
    saucePreference: "none",
    
    alternatives: {
      "White Rice": ["Rice Cakes (Plain)", "Cream of Rice"],
      "Whey Protein Isolate": ["Plant Protein Powder"]
    },
    
    rules: {
      excludeIf: {
        restrictions: [],
        preferences: ["no-protein-powder", "no-liquid-meals"]
      },
      bestFor: ["pre-workout", "quick-absorption", "sensitive-stomach"],
      timingNote: "Drink 30 minutes before training for rapid energy"
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["fruits", "extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.7
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 1.3
      }
    },
    
    macroProfile: {
      calories: 260,
      protein: 20,
      carbs: 44,
      fat: 1,
      fiber: 2
    },
    
    notes: "Liquid pre-workout for those who can't eat solid food before training. Use cooked, cooled rice."
  },

  {
    id: "UW018",
    name: "Rice Cake Stack",
    categories: ["upon_waking"],
    dietTypes: ["omnivore", "vegetarian"],
    
    complexity: {
      level: "on-the-go",
      prepTime: 2,
      cookingRequired: false,
      mealPrepFriendly: false,
      equipment: ["none"]
    },
    
    pattern: {
      proteins: [
        { food: "Turkey (Deli Sliced)", amount: 60, required: true }
      ],
      carbs: [
        { food: "Rice Cakes (Plain)", amount: 30, required: true }
      ],
      vegetables: [],
      fruits: [
        { food: "Apple", amount: 100, required: true }
      ],
      fats: [],
      extras: [
        { food: "Mustard (Dijon)", amount: 5, required: false }
      ]
    },
    
    workoutTiming: "pre-immediate",
    saucePreference: "none",
    
    alternatives: {
      "Turkey (Deli Sliced)": ["Chicken Breast", "Tuna (Canned in Water)"],
      "Apple": ["Banana", "Grapes"]
    },
    
    rules: {
      excludeIf: {
        restrictions: [],
        preferences: ["no-processed-meats"]
      },
      bestFor: ["pre-workout", "portable", "light-meal"],
      timingNote: "Perfect 30-40 minutes before morning workout"
    },
    
    scaling: {
      method: "fixed",
      scalableComponents: ["proteins"],
      fixedComponents: ["carbs", "fruits", "extras"],
      minPortions: {
        proteins: 0.8
      },
      maxPortions: {
        proteins: 1.5
      }
    },
    
    macroProfile: {
      calories: 215,
      protein: 15,
      carbs: 35,
      fat: 2,
      fiber: 3
    },
    
    notes: "Ultra-light pre-workout snack. Stack turkey on rice cakes, eat apple on the side."
  },

  // ========== HEARTY WEEKEND OPTIONS (2) ==========
  
  {
    id: "UW019",
    name: "Weekend Warrior Breakfast",
    categories: ["upon_waking"],
    dietTypes: ["omnivore"],
    
    complexity: {
      level: "complex",
      prepTime: 25,
      cookingRequired: true,
      mealPrepFriendly: false,
      equipment: ["stovetop", "oven"]
    },
    
    pattern: {
      proteins: [
        { food: "Eggs (Large)", amount: 100, required: true }, // 2 eggs × 50g each
        { food: "Turkey Bacon", amount: 40, required: true },
        { food: "Egg Whites", amount: 100, required: false }
      ],
      carbs: [
        { food: "Sweet Potato", amount: 150, required: true },
        { food: "Ezekiel Bread", amount: 40, required: true }
      ],
      vegetables: [
        { food: "Mushrooms (White)", amount: 60, required: true },
        { food: "Spinach", amount: 40, required: true },
        { food: "Tomatoes", amount: 60, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Olive Oil (Extra Virgin)", amount: 10, required: true }
      ],
      extras: []
    },
    
    workoutTiming: "anytime",
    saucePreference: "light",
    
    alternatives: {
      "Turkey Bacon": ["Canadian Bacon", "Chicken Sausage"],
      "Sweet Potato": ["Hash Browns (Homemade)", "White Potato"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["egg-allergy"],
        preferences: ["dislikes-eggs"]
      },
      bestFor: ["weekend-treat", "muscle-gain", "hearty-breakfast"],
      timingNote: ""
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "carbs", "fats"],
      fixedComponents: ["vegetables"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.7,
        fats: 0.5
      },
      maxPortions: {
        proteins: 1.3,
        carbs: 1.3,
        fats: 1.5
      }
    },
    
    macroProfile: {
      calories: 520,
      protein: 32,
      carbs: 52,
      fat: 18,
      fiber: 9
    },
    
    notes: "Full English-style breakfast, cleaned up for fitness goals. Perfect weekend treat meal."
  },

  {
    id: "UW020",
    name: "Steak & Eggs Power Plate",
    categories: ["upon_waking"],
    dietTypes: ["omnivore"],
    
    complexity: {
      level: "moderate",
      prepTime: 20,
      cookingRequired: true,
      mealPrepFriendly: false,
      equipment: ["stovetop", "grill"]
    },
    
    pattern: {
      proteins: [
        { food: "Sirloin Steak", amount: 120, required: true },
        { food: "Eggs (Large)", amount: 100, required: true } // 2 eggs × 50g each
      ],
      carbs: [
        { food: "White Potato", amount: 150, required: true }
      ],
      vegetables: [
        { food: "Asparagus", amount: 80, required: true }
      ],
      fruits: [],
      fats: [
        { food: "Olive Oil (Extra Virgin)", amount: 8, required: true }
      ],
      extras: [
        { food: "Black Pepper", amount: 1, required: false },
        { food: "Sea Salt", amount: 1, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "none",
    
    alternatives: {
      "Sirloin Steak": ["Lean Beef Mince (5%)", "Bison Steak"],
      "White Potato": ["Sweet Potato", "Butternut Squash"],
      "Asparagus": ["Green Beans", "Broccoli"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["egg-allergy"],
        preferences: ["no-red-meat", "dislikes-eggs"]
      },
      bestFor: ["muscle-gain", "high-protein", "weekend-breakfast"],
      timingNote: ""
    },
    
    scaling: {
      method: "protein-first",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["vegetables", "fats", "extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.7
      },
      maxPortions: {
        proteins: 1.3,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 535,
      protein: 40,
      carbs: 35,
      fat: 24,
      fiber: 5
    },
    
    notes: "Ultimate muscle-building breakfast. Cook steak to medium-rare, eggs over-easy, roast potatoes until crispy."
  },

  // ========== ADDITIONAL OMNIVORE OPTIONS (5) ==========
  
  {
    id: "UW021",
    name: "Turkey Sausage & Egg Scramble",
    categories: ["upon_waking"],
    dietTypes: ["omnivore"],
    
    complexity: {
      level: "simple",
      prepTime: 15,
      cookingRequired: true,
      mealPrepFriendly: false,
      equipment: ["stovetop"]
    },
    
    pattern: {
      proteins: [
        { food: "Turkey Sausage", amount: 100, required: true },
        { food: "Eggs (large)", amount: 150, required: true } // 3 eggs × 50g each
      ],
      carbs: [
        { food: "Sweet Potato", amount: 150, required: true }
      ],
      vegetables: [
        { food: "Spinach", amount: 50, required: true },
        { food: "Bell Peppers", amount: 50, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Olive Oil", amount: 10, required: true }
      ],
      extras: []
    },
    
    workoutTiming: "anytime",
    saucePreference: "light",
    
    alternatives: {
      "Turkey Sausage": ["Chicken Sausage", "Lean Pork Sausage"],
      "Sweet Potato": ["White Potato", "Butternut Squash"],
      "Spinach": ["Kale", "Swiss Chard"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["egg-allergy"],
        preferences: ["no-pork"]
      },
      bestFor: ["muscle-gain", "high-protein", "savory-breakfast"],
      timingNote: ""
    },
    
    scaling: {
      method: "protein-first",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["vegetables", "fats"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.7
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 485,
      protein: 35,
      carbs: 38,
      fat: 20,
      fiber: 6
    },
    
    notes: "Savory breakfast scramble with lean turkey sausage. High protein, moderate carbs for sustained energy."
  },

  {
    id: "UW022",
    name: "Beef & Veggie Hash",
    categories: ["upon_waking"],
    dietTypes: ["omnivore"],
    
    complexity: {
      level: "moderate",
      prepTime: 20,
      cookingRequired: true,
      mealPrepFriendly: true,
      equipment: ["stovetop", "oven"]
    },
    
    pattern: {
      proteins: [
        { food: "Lean Beef Mince (5%)", amount: 120, required: true }
      ],
      carbs: [
        { food: "White Potato", amount: 200, required: true }
      ],
      vegetables: [
        { food: "Onions", amount: 50, required: true },
        { food: "Mushrooms", amount: 80, required: true },
        { food: "Tomatoes", amount: 100, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Olive Oil", amount: 10, required: true }
      ],
      extras: [
        { food: "Fresh Herbs", amount: 5, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "light",
    
    alternatives: {
      "Lean Beef Mince (5%)": ["Bison Mince", "Venison Mince"],
      "White Potato": ["Sweet Potato", "Cauliflower"],
      "Mushrooms": ["Zucchini", "Eggplant"]
    },
    
    rules: {
      excludeIf: {
        restrictions: [],
        preferences: ["no-red-meat"]
      },
      bestFor: ["muscle-gain", "hearty-breakfast", "meal-prep"],
      timingNote: ""
    },
    
    scaling: {
      method: "protein-first",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["vegetables", "fats"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.8
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 415,
      protein: 28,
      carbs: 42,
      fat: 15,
      fiber: 7
    },
    
    notes: "Hearty breakfast hash with lean beef. Great for meal prep - make a batch and reheat portions."
  },

  {
    id: "UW023",
    name: "Egg White Veggie Frittata",
    categories: ["upon_waking"],
    dietTypes: ["omnivore"],
    
    complexity: {
      level: "moderate",
      prepTime: 25,
      cookingRequired: true,
      mealPrepFriendly: true,
      equipment: ["stovetop", "oven"]
    },
    
    pattern: {
      proteins: [
        { food: "Egg Whites (liquid)", amount: 200, required: true },
        { food: "Eggs (large)", amount: 100, required: true }, // 2 eggs × 50g each
        { food: "Turkey Bacon", amount: 40, required: false }
      ],
      carbs: [
        { food: "English Muffin", amount: 60, required: true }
      ],
      vegetables: [
        { food: "Spinach", amount: 80, required: true },
        { food: "Cherry Tomatoes", amount: 100, required: true },
        { food: "Onions", amount: 50, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Feta Cheese", amount: 30, required: true }
      ],
      extras: []
    },
    
    workoutTiming: "anytime",
    saucePreference: "none",
    
    alternatives: {
      "Egg Whites (liquid)": ["Eggs (large) - use 6 total"],
      "Turkey Bacon": ["Canadian Bacon", "Ham"],
      "English Muffin": ["Whole Wheat Toast", "Bagel Thin"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["egg-allergy"],
        preferences: ["no-dairy"]
      },
      bestFor: ["lean-gains", "high-protein", "meal-prep"],
      timingNote: ""
    },
    
    scaling: {
      method: "protein-first",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["vegetables", "fats"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.5
      },
      maxPortions: {
        proteins: 1.3,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 385,
      protein: 38,
      carbs: 32,
      fat: 12,
      fiber: 5
    },
    
    notes: "High-protein, lower-fat frittata. Make a whole frittata and portion for the week."
  },

  {
    id: "UW024",
    name: "Chicken & Waffle Power Stack",
    categories: ["upon_waking"],
    dietTypes: ["omnivore"],
    
    complexity: {
      level: "moderate",
      prepTime: 20,
      cookingRequired: true,
      mealPrepFriendly: false,
      equipment: ["stovetop", "waffle-maker"]
    },
    
    pattern: {
      proteins: [
        { food: "Chicken Breast", amount: 120, required: true }
      ],
      carbs: [
        { food: "Protein Waffles (mix)", amount: 100, required: true }
      ],
      vegetables: [],
      fruits: [
        { food: "Strawberries", amount: 80, required: false }
      ],
      fats: [
        { food: "Butter", amount: 10, required: true }
      ],
      extras: [
        { food: "Sugar-Free Syrup", amount: 30, required: true }
      ]
    },
    
    workoutTiming: "pre-workout-90min",
    saucePreference: "moderate",
    
    alternatives: {
      "Chicken Breast": ["Turkey Breast", "Chicken Tenders"],
      "Protein Waffles (mix)": ["Kodiak Cakes Mix", "Regular Waffle Mix"],
      "Sugar-Free Syrup": ["Maple Syrup", "Honey"]
    },
    
    rules: {
      excludeIf: {
        restrictions: [],
        preferences: ["no-sweet-breakfast"]
      },
      bestFor: ["pre-workout", "high-carb-day", "cheat-meal"],
      timingNote: "Great 90+ minutes before training"
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["fruits", "fats", "extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.8
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 480,
      protein: 35,
      carbs: 58,
      fat: 12,
      fiber: 4
    },
    
    notes: "Balanced sweet and savory combo. Use grilled or baked chicken, not fried."
  },

  {
    id: "UW025",
    name: "Ground Turkey Breakfast Bowl",
    categories: ["upon_waking"],
    dietTypes: ["omnivore"],
    
    complexity: {
      level: "simple",
      prepTime: 15,
      cookingRequired: true,
      mealPrepFriendly: true,
      equipment: ["stovetop"]
    },
    
    pattern: {
      proteins: [
        { food: "Ground Turkey (93/7)", amount: 150, required: true }
      ],
      carbs: [
        { food: "Brown Rice", amount: 150, required: true }
      ],
      vegetables: [
        { food: "Broccoli", amount: 100, required: true },
        { food: "Carrots", amount: 50, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Avocado", amount: 60, required: true }
      ],
      extras: [
        { food: "Salsa", amount: 50, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "light",
    
    alternatives: {
      "Ground Turkey (93/7)": ["Lean Beef Mince (5%)", "Ground Chicken"],
      "Brown Rice": ["Quinoa", "Cauliflower Rice"],
      "Broccoli": ["Green Beans", "Asparagus"]
    },
    
    rules: {
      excludeIf: {
        restrictions: [],
        preferences: []
      },
      bestFor: ["meal-prep", "balanced-macros", "simple-cooking"],
      timingNote: ""
    },
    
    scaling: {
      method: "protein-first",
      scalableComponents: ["proteins", "carbs", "fats"],
      fixedComponents: ["vegetables", "extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.7,
        fats: 0.8
      },
      maxPortions: {
        proteins: 1.3,
        carbs: 1.5,
        fats: 1.3
      }
    },
    
    macroProfile: {
      calories: 485,
      protein: 38,
      carbs: 40,
      fat: 18,
      fiber: 8
    },
    
    notes: "Simple, balanced bowl perfect for meal prep. Season turkey with herbs and spices."
  },

  // ========== PESCATARIAN OPTIONS (5) ==========
  
  {
    id: "UW026",
    name: "Smoked Salmon Bagel Stack",
    categories: ["upon_waking"],
    dietTypes: ["pescatarian"],
    
    complexity: {
      level: "simple",
      prepTime: 5,
      cookingRequired: false,
      mealPrepFriendly: false,
      equipment: ["toaster"]
    },
    
    pattern: {
      proteins: [
        { food: "Smoked Salmon", amount: 100, required: true }
      ],
      carbs: [
        { food: "Bagel (Plain)", amount: 90, required: true }
      ],
      vegetables: [
        { food: "Cucumber", amount: 50, required: false },
        { food: "Tomatoes", amount: 50, required: false },
        { food: "Red Onion", amount: 20, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Cream Cheese", amount: 30, required: true },
        { food: "Avocado", amount: 50, required: false }
      ],
      extras: [
        { food: "Capers", amount: 10, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "light",
    
    alternatives: {
      "Smoked Salmon": ["Gravlax", "Hot Smoked Salmon"],
      "Bagel (Plain)": ["Everything Bagel", "Whole Wheat Bagel"],
      "Cream Cheese": ["Greek Yogurt Spread", "Avocado"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["fish-allergy"],
        preferences: ["no-dairy"]
      },
      bestFor: ["quick-breakfast", "omega-3", "no-cook"],
      timingNote: ""
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "carbs", "fats"],
      fixedComponents: ["vegetables", "extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.5,
        fats: 0.8
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 1.5,
        fats: 1.3
      }
    },
    
    macroProfile: {
      calories: 445,
      protein: 25,
      carbs: 48,
      fat: 18,
      fiber: 4
    },
    
    notes: "Classic New York style breakfast. High in omega-3 fatty acids."
  },

  {
    id: "UW027",
    name: "Tuna & Egg White Scramble",
    categories: ["upon_waking"],
    dietTypes: ["pescatarian"],
    
    complexity: {
      level: "simple",
      prepTime: 10,
      cookingRequired: true,
      mealPrepFriendly: false,
      equipment: ["stovetop"]
    },
    
    pattern: {
      proteins: [
        { food: "Tuna (canned in water)", amount: 100, required: true },
        { food: "Egg Whites (liquid)", amount: 150, required: true }
      ],
      carbs: [
        { food: "Whole Wheat Toast", amount: 80, required: true }
      ],
      vegetables: [
        { food: "Spinach", amount: 80, required: true },
        { food: "Cherry Tomatoes", amount: 80, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Olive Oil", amount: 10, required: true }
      ],
      extras: [
        { food: "Fresh Dill", amount: 5, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "none",
    
    alternatives: {
      "Tuna (canned in water)": ["Canned Salmon", "Mackerel"],
      "Egg Whites (liquid)": ["Eggs (large)", "Egg Substitute"],
      "Whole Wheat Toast": ["Ezekiel Bread", "Rice Cakes"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["egg-allergy", "fish-allergy"],
        preferences: []
      },
      bestFor: ["lean-protein", "low-fat", "quick-meal"],
      timingNote: ""
    },
    
    scaling: {
      method: "protein-first",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["vegetables", "fats", "extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.5
      },
      maxPortions: {
        proteins: 1.3,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 365,
      protein: 40,
      carbs: 32,
      fat: 10,
      fiber: 6
    },
    
    notes: "Very high protein, low fat breakfast. Mix tuna into scrambled egg whites."
  },

  {
    id: "UW028",
    name: "White Fish & Sweet Potato Hash",
    categories: ["upon_waking"],
    dietTypes: ["pescatarian"],
    
    complexity: {
      level: "moderate",
      prepTime: 20,
      cookingRequired: true,
      mealPrepFriendly: true,
      equipment: ["stovetop", "oven"]
    },
    
    pattern: {
      proteins: [
        { food: "Cod", amount: 150, required: true }
      ],
      carbs: [
        { food: "Sweet Potato", amount: 200, required: true }
      ],
      vegetables: [
        { food: "Bell Peppers", amount: 80, required: true },
        { food: "Onions", amount: 50, required: true },
        { food: "Zucchini", amount: 80, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Olive Oil", amount: 15, required: true }
      ],
      extras: [
        { food: "Lemon", amount: 20, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "light",
    
    alternatives: {
      "Cod": ["Tilapia", "Halibut", "Haddock"],
      "Sweet Potato": ["White Potato", "Butternut Squash"],
      "Bell Peppers": ["Tomatoes", "Mushrooms"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["fish-allergy"],
        preferences: []
      },
      bestFor: ["balanced-meal", "meal-prep", "lean-protein"],
      timingNote: ""
    },
    
    scaling: {
      method: "protein-first",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["vegetables", "fats"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.8
      },
      maxPortions: {
        proteins: 1.3,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 395,
      protein: 32,
      carbs: 48,
      fat: 8,
      fiber: 8
    },
    
    notes: "Light and nutritious hash. Bake fish separately and add to cooked vegetables."
  },

  {
    id: "UW029",
    name: "Shrimp & Grits Power Bowl",
    categories: ["upon_waking"],
    dietTypes: ["pescatarian"],
    
    complexity: {
      level: "moderate",
      prepTime: 25,
      cookingRequired: true,
      mealPrepFriendly: false,
      equipment: ["stovetop"]
    },
    
    pattern: {
      proteins: [
        { food: "Shrimp", amount: 150, required: true }
      ],
      carbs: [
        { food: "Grits", amount: 80, required: true }
      ],
      vegetables: [
        { food: "Spinach", amount: 80, required: true },
        { food: "Cherry Tomatoes", amount: 80, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Butter", amount: 10, required: true },
        { food: "Parmesan Cheese", amount: 20, required: false }
      ],
      extras: [
        { food: "Garlic", amount: 5, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "moderate",
    
    alternatives: {
      "Shrimp": ["Scallops", "Crab Meat"],
      "Grits": ["Polenta", "Cream of Rice"],
      "Parmesan Cheese": ["Cheddar Cheese", "Nutritional Yeast"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["shellfish-allergy"],
        preferences: ["no-dairy"]
      },
      bestFor: ["southern-style", "comfort-food", "protein-rich"],
      timingNote: ""
    },
    
    scaling: {
      method: "protein-first",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["vegetables", "fats", "extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.8
      },
      maxPortions: {
        proteins: 1.3,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 415,
      protein: 30,
      carbs: 45,
      fat: 14,
      fiber: 4
    },
    
    notes: "Southern-inspired protein breakfast. Season shrimp with cajun spices."
  },

  {
    id: "UW030",
    name: "Salmon Quinoa Bowl",
    categories: ["upon_waking"],
    dietTypes: ["pescatarian"],
    
    complexity: {
      level: "moderate",
      prepTime: 20,
      cookingRequired: true,
      mealPrepFriendly: true,
      equipment: ["stovetop", "oven"]
    },
    
    pattern: {
      proteins: [
        { food: "Salmon", amount: 120, required: true }
      ],
      carbs: [
        { food: "Quinoa", amount: 150, required: true }
      ],
      vegetables: [
        { food: "Asparagus", amount: 100, required: true },
        { food: "Cherry Tomatoes", amount: 80, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Avocado", amount: 60, required: true }
      ],
      extras: [
        { food: "Everything Bagel Seasoning", amount: 5, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "light",
    
    alternatives: {
      "Salmon": ["Trout", "Arctic Char"],
      "Quinoa": ["Brown Rice", "Farro"],
      "Asparagus": ["Broccoli", "Green Beans"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["fish-allergy"],
        preferences: []
      },
      bestFor: ["omega-3", "balanced-macros", "meal-prep"],
      timingNote: ""
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "carbs", "fats"],
      fixedComponents: ["vegetables", "extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.7,
        fats: 0.8
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 1.5,
        fats: 1.3
      }
    },
    
    macroProfile: {
      calories: 485,
      protein: 30,
      carbs: 42,
      fat: 22,
      fiber: 8
    },
    
    notes: "Omega-3 rich breakfast bowl. Bake salmon with lemon and herbs."
  },

  // ========== VEGETARIAN OPTIONS (5) ==========
  
  {
    id: "UW031",
    name: "Veggie Egg White Omelette",
    categories: ["upon_waking"],
    dietTypes: ["vegetarian"],
    
    complexity: {
      level: "simple",
      prepTime: 12,
      cookingRequired: true,
      mealPrepFriendly: false,
      equipment: ["stovetop"]
    },
    
    pattern: {
      proteins: [
        { food: "Egg Whites (liquid)", amount: 200, required: true },
        { food: "Eggs (large)", amount: 50, required: true } // 1 eggs × 50g each
      ],
      carbs: [
        { food: "Whole Wheat Toast", amount: 80, required: true }
      ],
      vegetables: [
        { food: "Mushrooms", amount: 80, required: true },
        { food: "Spinach", amount: 60, required: true },
        { food: "Tomatoes", amount: 80, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Cheddar Cheese", amount: 30, required: true }
      ],
      extras: []
    },
    
    workoutTiming: "anytime",
    saucePreference: "none",
    
    alternatives: {
      "Egg Whites (liquid)": ["Eggs (large) - use 4 total"],
      "Cheddar Cheese": ["Swiss Cheese", "Feta Cheese"],
      "Whole Wheat Toast": ["Ezekiel Bread", "English Muffin"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["egg-allergy"],
        preferences: ["no-dairy"]
      },
      bestFor: ["high-protein", "low-calorie", "vegetarian"],
      timingNote: ""
    },
    
    scaling: {
      method: "protein-first",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["vegetables", "fats"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.5
      },
      maxPortions: {
        proteins: 1.3,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 385,
      protein: 32,
      carbs: 34,
      fat: 14,
      fiber: 6
    },
    
    notes: "High-protein vegetarian omelette loaded with vegetables."
  },

  {
    id: "UW032",
    name: "Cottage Cheese Power Bowl",
    categories: ["upon_waking"],
    dietTypes: ["vegetarian"],
    
    complexity: {
      level: "simple",
      prepTime: 5,
      cookingRequired: false,
      mealPrepFriendly: true,
      equipment: []
    },
    
    pattern: {
      proteins: [
        { food: "Cottage Cheese (Low-fat)", amount: 225, required: true },
        { food: "Protein Powder", amount: 15, required: false }
      ],
      carbs: [
        { food: "Granola", amount: 50, required: true }
      ],
      vegetables: [],
      fruits: [
        { food: "Mixed Berries", amount: 120, required: true },
        { food: "Banana", amount: 60, required: false }
      ],
      fats: [
        { food: "Almond Butter", amount: 15, required: true }
      ],
      extras: [
        { food: "Cinnamon", amount: 2, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "none",
    
    alternatives: {
      "Cottage Cheese (Low-fat)": ["Greek Yogurt (2% fat)", "Ricotta Cheese"],
      "Granola": ["Muesli", "Rolled Oats"],
      "Mixed Berries": ["Peaches", "Mango"]
    },
    
    rules: {
      excludeIf: {
        restrictions: [],
        preferences: ["no-dairy"]
      },
      bestFor: ["high-protein", "quick-breakfast", "no-cook"],
      timingNote: ""
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "carbs", "fruits", "fats"],
      fixedComponents: ["extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.5,
        fruits: 0.8,
        fats: 0.8
      },
      maxPortions: {
        proteins: 1.3,
        carbs: 1.5,
        fruits: 1.3,
        fats: 1.3
      }
    },
    
    macroProfile: {
      calories: 475,
      protein: 35,
      carbs: 58,
      fat: 12,
      fiber: 8
    },
    
    notes: "Quick, no-cook high protein breakfast. Mix protein powder into cottage cheese."
  },

  {
    id: "UW033",
    name: "Protein Pancakes Deluxe",
    categories: ["upon_waking"],
    dietTypes: ["vegetarian"],
    
    complexity: {
      level: "moderate",
      prepTime: 20,
      cookingRequired: true,
      mealPrepFriendly: false,
      equipment: ["stovetop", "griddle"]
    },
    
    pattern: {
      proteins: [
        { food: "Protein Pancake Mix", amount: 100, required: true },
        { food: "Greek Yogurt (Non-fat)", amount: 100, required: false }
      ],
      carbs: [
        { food: "Included in mix", amount: 0, required: true }
      ],
      vegetables: [],
      fruits: [
        { food: "Blueberries", amount: 80, required: true },
        { food: "Banana", amount: 60, required: false }
      ],
      fats: [
        { food: "Almond Butter", amount: 20, required: true }
      ],
      extras: [
        { food: "Sugar-Free Syrup", amount: 30, required: true }
      ]
    },
    
    workoutTiming: "pre-workout-90min",
    saucePreference: "moderate",
    
    alternatives: {
      "Protein Pancake Mix": ["Kodiak Cakes", "Birch Benders Protein"],
      "Greek Yogurt (Non-fat)": ["Cottage Cheese (Low-fat)", "Skyr"],
      "Sugar-Free Syrup": ["Maple Syrup", "Honey"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["gluten-allergy"],
        preferences: []
      },
      bestFor: ["pre-workout", "weekend-treat", "high-carb"],
      timingNote: "Great 90+ minutes before training"
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "fruits", "fats"],
      fixedComponents: ["extras"],
      minPortions: {
        proteins: 0.8,
        fruits: 0.8,
        fats: 0.8
      },
      maxPortions: {
        proteins: 1.5,
        fruits: 1.3,
        fats: 1.3
      }
    },
    
    macroProfile: {
      calories: 485,
      protein: 30,
      carbs: 65,
      fat: 14,
      fiber: 6
    },
    
    notes: "Protein-packed pancakes perfect for pre-workout fuel."
  },

  {
    id: "UW034",
    name: "Egg & Cheese Breakfast Sandwich",
    categories: ["upon_waking"],
    dietTypes: ["vegetarian"],
    
    complexity: {
      level: "simple",
      prepTime: 10,
      cookingRequired: true,
      mealPrepFriendly: false,
      equipment: ["stovetop", "toaster"]
    },
    
    pattern: {
      proteins: [
        { food: "Eggs (large)", amount: 100, required: true }, // 2 eggs × 50g each
        { food: "Cheddar Cheese", amount: 30, required: true }
      ],
      carbs: [
        { food: "English Muffin", amount: 60, required: true }
      ],
      vegetables: [
        { food: "Spinach", amount: 30, required: false },
        { food: "Tomatoes", amount: 50, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Butter", amount: 5, required: true }
      ],
      extras: [
        { food: "Hot Sauce", amount: 5, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "light",
    
    alternatives: {
      "English Muffin": ["Bagel Thin", "Whole Wheat Toast"],
      "Cheddar Cheese": ["Swiss Cheese", "Pepper Jack"],
      "Eggs (large)": ["Egg Whites", "Egg Substitute"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["egg-allergy"],
        preferences: ["no-dairy"]
      },
      bestFor: ["quick-breakfast", "portable", "satisfying"],
      timingNote: ""
    },
    
    scaling: {
      method: "fixed",
      scalableComponents: [],
      fixedComponents: ["proteins", "carbs", "vegetables", "fats", "extras"],
      minPortions: {},
      maxPortions: {}
    },
    
    macroProfile: {
      calories: 375,
      protein: 22,
      carbs: 28,
      fat: 20,
      fiber: 3
    },
    
    notes: "Classic breakfast sandwich. Can wrap in foil for on-the-go."
  },

  {
    id: "UW035",
    name: "Protein-Packed French Toast",
    categories: ["upon_waking"],
    dietTypes: ["vegetarian"],
    
    complexity: {
      level: "moderate",
      prepTime: 15,
      cookingRequired: true,
      mealPrepFriendly: false,
      equipment: ["stovetop", "griddle"]
    },
    
    pattern: {
      proteins: [
        { food: "Eggs (large)", amount: 150, required: true }, // 3 eggs × 50g each
        { food: "Protein Powder", amount: 20, required: true }
      ],
      carbs: [
        { food: "Whole Wheat Bread", amount: 80, required: true }
      ],
      vegetables: [],
      fruits: [
        { food: "Strawberries", amount: 100, required: false }
      ],
      fats: [
        { food: "Butter", amount: 10, required: true }
      ],
      extras: [
        { food: "Cinnamon", amount: 2, required: true },
        { food: "Sugar-Free Syrup", amount: 30, required: false }
      ]
    },
    
    workoutTiming: "pre-workout-90min",
    saucePreference: "light",
    
    alternatives: {
      "Whole Wheat Bread": ["Ezekiel Bread", "Brioche"],
      "Protein Powder": ["Skip for traditional"],
      "Strawberries": ["Blueberries", "Banana"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["egg-allergy"],
        preferences: []
      },
      bestFor: ["weekend-breakfast", "high-protein", "pre-workout"],
      timingNote: "Good pre-workout option"
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["fruits", "fats", "extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.8
      },
      maxPortions: {
        proteins: 1.3,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 455,
      protein: 35,
      carbs: 48,
      fat: 15,
      fiber: 6
    },
    
    notes: "High-protein twist on French toast. Mix protein powder into egg batter."
  },

  // ========== VEGAN OPTIONS (5) ==========
  
  {
    id: "UW036",
    name: "Tofu Scramble Power Bowl",
    categories: ["upon_waking"],
    dietTypes: ["vegan"],
    
    complexity: {
      level: "moderate",
      prepTime: 15,
      cookingRequired: true,
      mealPrepFriendly: true,
      equipment: ["stovetop"]
    },
    
    pattern: {
      proteins: [
        { food: "Firm Tofu", amount: 200, required: true }
      ],
      carbs: [
        { food: "Sweet Potato", amount: 150, required: true }
      ],
      vegetables: [
        { food: "Spinach", amount: 80, required: true },
        { food: "Bell Peppers", amount: 80, required: true },
        { food: "Onions", amount: 50, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Avocado", amount: 60, required: true }
      ],
      extras: [
        { food: "Nutritional Yeast", amount: 10, required: true },
        { food: "Turmeric", amount: 2, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "light",
    
    alternatives: {
      "Firm Tofu": ["Silken Tofu", "Tempeh"],
      "Sweet Potato": ["White Potato", "Quinoa"],
      "Nutritional Yeast": ["Vegan Cheese"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["soy-allergy"],
        preferences: []
      },
      bestFor: ["plant-based", "high-protein", "meal-prep"],
      timingNote: ""
    },
    
    scaling: {
      method: "protein-first",
      scalableComponents: ["proteins", "carbs", "fats"],
      fixedComponents: ["vegetables", "extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.7,
        fats: 0.8
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 1.5,
        fats: 1.3
      }
    },
    
    macroProfile: {
      calories: 425,
      protein: 22,
      carbs: 45,
      fat: 20,
      fiber: 10
    },
    
    notes: "High-protein vegan scramble. Season with turmeric for color and black salt for eggy flavor."
  },

  {
    id: "UW037",
    name: "Overnight Chia Protein Pudding",
    categories: ["upon_waking"],
    dietTypes: ["vegan"],
    
    complexity: {
      level: "simple",
      prepTime: 5,
      cookingRequired: false,
      mealPrepFriendly: true,
      equipment: []
    },
    
    pattern: {
      proteins: [
        { food: "Plant Protein Powder", amount: 30, required: true }
      ],
      carbs: [
        { food: "Rolled Oats", amount: 40, required: true }
      ],
      vegetables: [],
      fruits: [
        { food: "Mixed Berries", amount: 100, required: true },
        { food: "Banana", amount: 60, required: false }
      ],
      fats: [
        { food: "Chia Seeds", amount: 20, required: true },
        { food: "Almond Butter", amount: 15, required: false }
      ],
      extras: [
        { food: "Almond Milk", amount: 300, required: true },
        { food: "Maple Syrup", amount: 10, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "none",
    
    alternatives: {
      "Plant Protein Powder": ["Pea Protein", "Hemp Protein"],
      "Almond Milk": ["Oat Milk", "Coconut Milk"],
      "Chia Seeds": ["Flax Seeds", "Hemp Hearts"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["nut-allergy"],
        preferences: []
      },
      bestFor: ["meal-prep", "no-cook", "omega-3"],
      timingNote: "Prepare night before"
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "carbs", "fruits", "fats"],
      fixedComponents: ["extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.5,
        fruits: 0.8,
        fats: 0.8
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 1.5,
        fruits: 1.3,
        fats: 1.3
      }
    },
    
    macroProfile: {
      calories: 465,
      protein: 25,
      carbs: 55,
      fat: 18,
      fiber: 14
    },
    
    notes: "Prepare the night before. High in omega-3s and fiber."
  },

  {
    id: "UW038",
    name: "Chickpea Flour Pancakes",
    categories: ["upon_waking"],
    dietTypes: ["vegan"],
    
    complexity: {
      level: "moderate",
      prepTime: 20,
      cookingRequired: true,
      mealPrepFriendly: false,
      equipment: ["stovetop", "griddle"]
    },
    
    pattern: {
      proteins: [
        { food: "Chickpea Flour", amount: 80, required: true },
        { food: "Plant Protein Powder", amount: 20, required: false }
      ],
      carbs: [
        { food: "Included in chickpea flour", amount: 0, required: true }
      ],
      vegetables: [
        { food: "Spinach (blended in)", amount: 30, required: false }
      ],
      fruits: [
        { food: "Blueberries", amount: 80, required: true }
      ],
      fats: [
        { food: "Ground Flax Seeds", amount: 15, required: true },
        { food: "Coconut Oil", amount: 10, required: true }
      ],
      extras: [
        { food: "Maple Syrup", amount: 20, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "light",
    
    alternatives: {
      "Chickpea Flour": ["Lentil Flour", "Buckwheat Flour"],
      "Blueberries": ["Strawberries", "Banana"],
      "Maple Syrup": ["Agave Nectar", "Date Syrup"]
    },
    
    rules: {
      excludeIf: {
        restrictions: [],
        preferences: []
      },
      bestFor: ["gluten-free", "high-protein", "plant-based"],
      timingNote: ""
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "fruits", "fats"],
      fixedComponents: ["vegetables", "extras"],
      minPortions: {
        proteins: 0.8,
        fruits: 0.8,
        fats: 0.8
      },
      maxPortions: {
        proteins: 1.5,
        fruits: 1.3,
        fats: 1.3
      }
    },
    
    macroProfile: {
      calories: 425,
      protein: 20,
      carbs: 52,
      fat: 18,
      fiber: 10
    },
    
    notes: "High-protein vegan pancakes. Mix batter with water and let rest 5 minutes before cooking."
  },

  {
    id: "UW039",
    name: "Tempeh Bacon & Hash",
    categories: ["upon_waking"],
    dietTypes: ["vegan"],
    
    complexity: {
      level: "moderate",
      prepTime: 25,
      cookingRequired: true,
      mealPrepFriendly: true,
      equipment: ["stovetop", "oven"]
    },
    
    pattern: {
      proteins: [
        { food: "Tempeh", amount: 120, required: true }
      ],
      carbs: [
        { food: "White Potato", amount: 200, required: true }
      ],
      vegetables: [
        { food: "Mushrooms", amount: 100, required: true },
        { food: "Bell Peppers", amount: 80, required: true },
        { food: "Onions", amount: 50, required: false }
      ],
      fruits: [],
      fats: [
        { food: "Olive Oil", amount: 15, required: true }
      ],
      extras: [
        { food: "Smoked Paprika", amount: 2, required: true },
        { food: "Liquid Smoke", amount: 2, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "light",
    
    alternatives: {
      "Tempeh": ["Tofu", "Seitan"],
      "White Potato": ["Sweet Potato", "Butternut Squash"],
      "Mushrooms": ["Zucchini", "Eggplant"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["soy-allergy"],
        preferences: []
      },
      bestFor: ["savory-breakfast", "meal-prep", "hearty"],
      timingNote: ""
    },
    
    scaling: {
      method: "protein-first",
      scalableComponents: ["proteins", "carbs"],
      fixedComponents: ["vegetables", "fats", "extras"],
      minPortions: {
        proteins: 0.8,
        carbs: 0.8
      },
      maxPortions: {
        proteins: 1.5,
        carbs: 1.5
      }
    },
    
    macroProfile: {
      calories: 435,
      protein: 20,
      carbs: 55,
      fat: 18,
      fiber: 10
    },
    
    notes: "Savory vegan breakfast. Marinate tempeh in soy sauce and liquid smoke for bacon flavor."
  },

  {
    id: "UW040",
    name: "Quinoa Breakfast Bowl",
    categories: ["upon_waking"],
    dietTypes: ["vegan"],
    
    complexity: {
      level: "simple",
      prepTime: 15,
      cookingRequired: true,
      mealPrepFriendly: true,
      equipment: ["stovetop"]
    },
    
    pattern: {
      proteins: [
        { food: "Quinoa", amount: 185, required: true },
        { food: "Hemp Seeds", amount: 20, required: true }
      ],
      carbs: [
        { food: "Included in quinoa", amount: 0, required: true }
      ],
      vegetables: [],
      fruits: [
        { food: "Banana", amount: 100, required: true },
        { food: "Blueberries", amount: 60, required: false }
      ],
      fats: [
        { food: "Almond Butter", amount: 20, required: true },
        { food: "Coconut Flakes", amount: 10, required: false }
      ],
      extras: [
        { food: "Cinnamon", amount: 2, required: false },
        { food: "Almond Milk", amount: 100, required: false }
      ]
    },
    
    workoutTiming: "anytime",
    saucePreference: "none",
    
    alternatives: {
      "Quinoa": ["Amaranth", "Buckwheat"],
      "Hemp Seeds": ["Chia Seeds", "Pumpkin Seeds"],
      "Almond Butter": ["Peanut Butter", "Tahini"]
    },
    
    rules: {
      excludeIf: {
        restrictions: ["nut-allergy"],
        preferences: []
      },
      bestFor: ["complete-protein", "gluten-free", "meal-prep"],
      timingNote: ""
    },
    
    scaling: {
      method: "proportional",
      scalableComponents: ["proteins", "fruits", "fats"],
      fixedComponents: ["extras"],
      minPortions: {
        proteins: 0.8,
        fruits: 0.8,
        fats: 0.8
      },
      maxPortions: {
        proteins: 1.5,
        fruits: 1.3,
        fats: 1.3
      }
    },
    
    macroProfile: {
      calories: 485,
      protein: 18,
      carbs: 65,
      fat: 20,
      fiber: 10
    },
    
    notes: "Complete protein vegan breakfast. Cook quinoa in almond milk for creaminess."
  }
];

module.exports = { uponWakingTemplates };