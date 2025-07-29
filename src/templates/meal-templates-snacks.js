const snacksTemplates = [
  // ========== HIGH-PROTEIN SNACKS (5 templates) ==========
  {
    id: 'snack_001',
    name: 'Greek Yogurt Parfait',
    categories: ['high_protein_snacks', 'sweet'],
    dietTypes: ['vegetarian', 'gluten_free'],
    complexity: 'simple',
    pattern: 'protein_moderate_carb_low_fat',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Greek Yogurt (0% fat)',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      carbs: {
        primary: {
          name: 'Mixed Berries',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 75, max: 150 }
        },
        secondary: {
          name: 'Granola',
          baseAmount: 30,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Sliced Almonds',
          baseAmount: 15,
          unit: 'g',
          scaling: { min: 10, max: 20 }
        }
      },
      vegetables: {
        primary: {
          name: 'None',
          baseAmount: 0,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Honey',
          baseAmount: 15,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      proteins: ['Skyr', 'Cottage Cheese', 'Protein Yogurt'],
      carbs: ['Banana', 'Apple', 'Peaches'],
      toppings: ['Chia Seeds', 'Cacao Nibs', 'Coconut Flakes']
    },
    rules: {
      minProtein: 20,
      maxFat: 12,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [200, 350],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 45,
      fatPercent: 20
    },
    notes: 'High protein, satisfying, customizable'
  },

  {
    id: 'snack_002',
    name: 'Protein Power Balls',
    categories: ['high_protein_snacks', 'portable'],
    dietTypes: ['omnivore', 'gluten_free_option'],
    complexity: 'simple',
    pattern: 'protein_moderate_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '60min+',
      postWorkout: 'good'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Protein Powder',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 25, max: 40 }
        }
      },
      carbs: {
        primary: {
          name: 'Rolled Oats',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 50 }
        },
        secondary: {
          name: 'Dates (chopped)',
          baseAmount: 40,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Almond Butter',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 20, max: 40 }
        },
        secondary: {
          name: 'Dark Chocolate Chips',
          baseAmount: 15,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'None',
          baseAmount: 0,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Collagen Powder', 'Casein'],
      carbs: ['Rice Krispies', 'Coconut Flakes'],
      fats: ['Peanut Butter', 'Tahini', 'Cashew Butter']
    },
    rules: {
      minProtein: 20,
      portable: true,
      makeAhead: true,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [250, 400],
      maintainRatios: true,
      servingSize: '3-4 balls'
    },
    macroProfile: {
      proteinPercent: 25,
      carbPercent: 40,
      fatPercent: 35
    },
    notes: 'Make batch, grab and go'
  },

  {
    id: 'snack_003',
    name: 'Cottage Cheese Bowl',
    categories: ['high_protein_snacks', 'savory_option'],
    dietTypes: ['vegetarian', 'gluten_free', 'low_carb_friendly'],
    complexity: 'simple',
    pattern: 'very_high_protein_low_carb_low_fat',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'excellent'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Low-fat Cottage Cheese',
          baseAmount: 225,
          unit: 'g',
          scaling: { min: 175, max: 275 }
        }
      },
      carbs: {
        primary: {
          name: 'Cherry Tomatoes',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 50, max: 150 }
        },
        secondary: {
          name: 'Cucumber',
          baseAmount: 80,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Olive Oil',
          baseAmount: 10,
          unit: 'ml',
          scaling: { min: 5, max: 15 }
        },
        secondary: {
          name: 'Everything Bagel Seasoning',
          baseAmount: 5,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Baby Spinach',
          baseAmount: 30,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Ricotta', 'Greek Yogurt'],
      sweet: ['Pineapple', 'Berries', 'Peaches'],
      savory: ['Herbs', 'Hot Sauce', 'Black Pepper']
    },
    rules: {
      minProtein: 25,
      maxFat: 10,
      versatile: true,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [200, 300],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 50,
      carbPercent: 30,
      fatPercent: 20
    },
    notes: 'Extremely high protein, filling'
  },

  {
    id: 'snack_004',
    name: 'Tuna & Crackers',
    categories: ['high_protein_snacks', 'convenient'],
    dietTypes: ['pescatarian', 'dairy_free'],
    complexity: 'simple',
    pattern: 'high_protein_moderate_carb_low_fat',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'good'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Tuna (water-packed)',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 85, max: 140 }
        }
      },
      carbs: {
        primary: {
          name: 'Whole Grain Crackers',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 60 }
        }
      },
      fats: {
        primary: {
          name: 'Light Mayo',
          baseAmount: 15,
          unit: 'g',
          scaling: { min: 10, max: 20 }
        }
      },
      vegetables: {
        primary: {
          name: 'Celery Sticks',
          baseAmount: 80,
          unit: 'g'
        },
        secondary: {
          name: 'Pickle Spear',
          baseAmount: 30,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Salmon', 'Chicken Salad', 'Sardines'],
      carbs: ['Rice Cakes', 'Pretzels', 'Veggie Chips'],
      mix_ins: ['Mustard', 'Hot Sauce', 'Relish']
    },
    rules: {
      minProtein: 20,
      maxFat: 12,
      shelfStable: true,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [200, 350],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 40,
      carbPercent: 40,
      fatPercent: 20
    },
    notes: 'Office-friendly, no heating needed'
  },

  {
    id: 'snack_005',
    name: 'Protein Smoothie Bowl',
    categories: ['high_protein_snacks', 'instagram_worthy'],
    dietTypes: ['omnivore', 'vegan_option'],
    complexity: 'moderate',
    pattern: 'high_protein_moderate_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '60min+',
      postWorkout: 'excellent'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Protein Powder',
          baseAmount: 35,
          unit: 'g',
          scaling: { min: 30, max: 45 }
        }
      },
      carbs: {
        primary: {
          name: 'Frozen Açai',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        },
        secondary: {
          name: 'Banana',
          baseAmount: 80,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Almond Butter',
          baseAmount: 20,
          unit: 'g',
          scaling: { min: 15, max: 25 }
        },
        secondary: {
          name: 'Coconut Flakes',
          baseAmount: 10,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Spinach (blended in)',
          baseAmount: 30,
          unit: 'g'
        }
      },
      toppings: {
        primary: {
          name: 'Granola, berries, seeds',
          baseAmount: 50,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Greek Yogurt Base', 'Collagen'],
      fruits: ['Mango', 'Dragon Fruit', 'Pitaya'],
      toppings: ['Cacao Nibs', 'Bee Pollen', 'Hemp Hearts']
    },
    rules: {
      minProtein: 25,
      thick_consistency: true,
      beautiful: true,
      vegRatio: 0.1
    },
    scaling: {
      calorieRange: [300, 450],
      maintainRatios: true,
      aesthetic: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 45,
      fatPercent: 25
    },
    notes: 'Thick smoothie eaten with spoon'
  },

  // ========== ENERGY/PRE-WORKOUT SNACKS (5 templates) ==========
  {
    id: 'snack_006',
    name: 'Quick Energy Mix',
    categories: ['energy_snacks', 'pre_workout'],
    dietTypes: ['omnivore', 'dairy_free'],
    complexity: 'simple',
    pattern: 'low_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: '30-45min',
      postWorkout: 'not_ideal'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'None/Minimal',
          baseAmount: 0,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'White Rice Cakes',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 20, max: 40 }
        },
        secondary: {
          name: 'Banana',
          baseAmount: 100,
          unit: 'g'
        },
        tertiary: {
          name: 'Honey',
          baseAmount: 20,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Minimal',
          baseAmount: 0,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'None',
          baseAmount: 0,
          unit: 'g'
        }
      }
    },
    alternatives: {
      carbs: ['Dates', 'White Bread', 'Pretzels'],
      quick: ['Energy Gel', 'Sports Drink', 'Gummy Bears']
    },
    rules: {
      maxProtein: 5,
      maxFat: 3,
      maxFiber: 2,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [150, 250],
      carbPriority: true,
      fastDigesting: true
    },
    macroProfile: {
      proteinPercent: 5,
      carbPercent: 92,
      fatPercent: 3
    },
    notes: 'Fast energy, minimal digestion'
  },

  {
    id: 'snack_007',
    name: 'Performance Toast',
    categories: ['energy_snacks', 'pre_workout'],
    dietTypes: ['omnivore', 'vegan_option'],
    complexity: 'simple',
    pattern: 'low_protein_high_carb_minimal_fat',
    workoutTiming: {
      preWorkout: '45-60min',
      postWorkout: 'not_recommended'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Turkey (optional)',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 0, max: 40 }
        }
      },
      carbs: {
        primary: {
          name: 'White Bread',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        },
        secondary: {
          name: 'Jam',
          baseAmount: 30,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Minimal Butter',
          baseAmount: 5,
          unit: 'g',
          scaling: { min: 0, max: 10 }
        }
      },
      vegetables: {
        primary: {
          name: 'None',
          baseAmount: 0,
          unit: 'g'
        }
      }
    },
    alternatives: {
      breads: ['Bagel', 'English Muffin', 'Sourdough'],
      spreads: ['Honey', 'Maple Syrup', 'Nutella (small)']
    },
    rules: {
      maxProtein: 10,
      maxFat: 8,
      quickCarbs: true,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [200, 350],
      carbPriority: true,
      simple: true
    },
    macroProfile: {
      proteinPercent: 10,
      carbPercent: 82,
      fatPercent: 8
    },
    notes: 'Classic pre-workout fuel'
  },

  {
    id: 'snack_008',
    name: 'Endurance Trail Mix',
    categories: ['energy_snacks', 'portable'],
    dietTypes: ['omnivore', 'vegan'],
    complexity: 'simple',
    pattern: 'low_protein_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'okay'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Minimal from nuts',
          baseAmount: 0,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Dried Fruit Mix',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 40, max: 80 }
        },
        secondary: {
          name: 'Pretzels',
          baseAmount: 30,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Mixed Nuts',
          baseAmount: 20,
          unit: 'g',
          scaling: { min: 15, max: 30 }
        },
        secondary: {
          name: 'Dark Chocolate Chips',
          baseAmount: 15,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'None',
          baseAmount: 0,
          unit: 'g'
        }
      }
    },
    alternatives: {
      dried_fruit: ['Raisins', 'Cranberries', 'Apricots', 'Dates'],
      nuts: ['Almonds', 'Cashews', 'Pecans'],
      extras: ['Coconut Flakes', 'Banana Chips']
    },
    rules: {
      portable: true,
      shelfStable: true,
      energyDense: true,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [250, 400],
      maintainRatios: true,
      trailReady: true
    },
    macroProfile: {
      proteinPercent: 10,
      carbPercent: 65,
      fatPercent: 25
    },
    notes: 'Long-lasting energy, portable'
  },

  {
    id: 'snack_009',
    name: 'Pre-Workout Oatmeal Cup',
    categories: ['energy_snacks', 'warm_option'],
    dietTypes: ['omnivore', 'vegan_option'],
    complexity: 'simple',
    pattern: 'low_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: '60-90min',
      postWorkout: 'not_ideal'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Protein Powder (optional)',
          baseAmount: 15,
          unit: 'g',
          scaling: { min: 0, max: 25 }
        }
      },
      carbs: {
        primary: {
          name: 'Instant Oats',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 40, max: 80 }
        },
        secondary: {
          name: 'Banana (sliced)',
          baseAmount: 80,
          unit: 'g'
        },
        tertiary: {
          name: 'Brown Sugar',
          baseAmount: 15,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Almond Butter (tiny)',
          baseAmount: 10,
          unit: 'g',
          scaling: { min: 0, max: 15 }
        }
      },
      vegetables: {
        primary: {
          name: 'None',
          baseAmount: 0,
          unit: 'g'
        }
      },
      liquids: {
        primary: {
          name: 'Water or Almond Milk',
          baseAmount: 200,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      carbs: ['Cream of Rice', 'Quick Grits'],
      toppings: ['Berries', 'Cinnamon', 'Maple Syrup'],
      protein: ['Skip for faster digestion']
    },
    rules: {
      maxProtein: 15,
      maxFat: 10,
      warm: true,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [250, 400],
      carbPriority: true,
      comfortFood: true
    },
    macroProfile: {
      proteinPercent: 15,
      carbPercent: 72,
      fatPercent: 13
    },
    notes: 'Warm, sustained energy'
  },

  {
    id: 'snack_010',
    name: 'Athlete\'s Fruit Plate',
    categories: ['energy_snacks', 'fresh'],
    dietTypes: ['vegan', 'gluten_free', 'raw'],
    complexity: 'simple',
    pattern: 'minimal_protein_high_carb_minimal_fat',
    workoutTiming: {
      preWorkout: '30-60min',
      postWorkout: 'okay'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'None',
          baseAmount: 0,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Watermelon',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 300 }
        },
        secondary: {
          name: 'Pineapple',
          baseAmount: 100,
          unit: 'g'
        },
        tertiary: {
          name: 'Grapes',
          baseAmount: 100,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'None',
          baseAmount: 0,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'None',
          baseAmount: 0,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Lime Juice & Salt',
          baseAmount: 10,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      fruits: ['Melon', 'Oranges', 'Mango', 'Berries'],
      additions: ['Tajin', 'Mint', 'Coconut Water']
    },
    rules: {
      maxProtein: 3,
      maxFat: 2,
      hydrating: true,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [150, 300],
      carbPriority: true,
      refreshing: true
    },
    macroProfile: {
      proteinPercent: 5,
      carbPercent: 93,
      fatPercent: 2
    },
    notes: 'Hydrating, natural sugars, fast energy'
  },

  // ========== BALANCED/ANYTIME SNACKS (5 templates) ==========
  {
    id: 'snack_011',
    name: 'Hummus & Veggie Plate',
    categories: ['balanced_snacks', 'mediterranean'],
    dietTypes: ['vegan', 'gluten_free'],
    complexity: 'simple',
    pattern: 'moderate_protein_moderate_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Hummus',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 150 }
        }
      },
      carbs: {
        primary: {
          name: 'Whole Wheat Pita',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 0, max: 80 }
        }
      },
      fats: {
        primary: {
          name: 'From Hummus/Tahini',
          baseAmount: 0,
          unit: 'g'
        },
        secondary: {
          name: 'Olive Oil Drizzle',
          baseAmount: 5,
          unit: 'ml'
        }
      },
      vegetables: {
        primary: {
          name: 'Carrot Sticks',
          baseAmount: 100,
          unit: 'g'
        },
        secondary: {
          name: 'Cucumber & Bell Peppers',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      dips: ['Baba Ganoush', 'Tzatziki', 'Muhammara'],
      veggies: ['Celery', 'Broccoli', 'Cherry Tomatoes'],
      carbs: ['Crackers', 'Pretzels', 'More Veggies']
    },
    rules: {
      minProtein: 8,
      highFiber: true,
      satisfying: true,
      vegRatio: 0.5
    },
    scaling: {
      calorieRange: [200, 400],
      maintainRatios: true,
      plantBased: true
    },
    macroProfile: {
      proteinPercent: 15,
      carbPercent: 50,
      fatPercent: 35
    },
    notes: 'Filling, nutritious, plant-based'
  },

  {
    id: 'snack_012',
    name: 'Apple & Almond Butter',
    categories: ['balanced_snacks', 'classic'],
    dietTypes: ['vegan', 'gluten_free', 'whole30'],
    complexity: 'simple',
    pattern: 'low_protein_moderate_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'From Almond Butter',
          baseAmount: 0,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Large Apple',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      fats: {
        primary: {
          name: 'Almond Butter',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 20, max: 40 }
        }
      },
      vegetables: {
        primary: {
          name: 'None',
          baseAmount: 0,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Cinnamon',
          baseAmount: 2,
          unit: 'g'
        }
      }
    },
    alternatives: {
      fruits: ['Pear', 'Banana', 'Celery'],
      nut_butters: ['Peanut', 'Cashew', 'Sunflower Seed'],
      additions: ['Granola', 'Raisins', 'Dark Chocolate Chips']
    },
    rules: {
      minProtein: 5,
      simple: true,
      portable: true,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [200, 350],
      maintainRatios: true,
      classic: true
    },
    macroProfile: {
      proteinPercent: 10,
      carbPercent: 50,
      fatPercent: 40
    },
    notes: 'Simple, satisfying, portable'
  },

  {
    id: 'snack_013',
    name: 'Cheese & Crackers Plus',
    categories: ['balanced_snacks', 'savory'],
    dietTypes: ['vegetarian'],
    complexity: 'simple',
    pattern: 'moderate_protein_moderate_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'String Cheese',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 40, max: 80 }
        }
      },
      carbs: {
        primary: {
          name: 'Whole Grain Crackers',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 60 }
        }
      },
      fats: {
        primary: {
          name: 'From Cheese',
          baseAmount: 0,
          unit: 'g'
        },
        secondary: {
          name: 'Olives',
          baseAmount: 30,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Grape Tomatoes',
          baseAmount: 80,
          unit: 'g'
        },
        secondary: {
          name: 'Baby Carrots',
          baseAmount: 60,
          unit: 'g'
        }
      }
    },
    alternatives: {
      cheese: ['Cheddar Cubes', 'Babybel', 'Goat Cheese'],
      crackers: ['Rice Crackers', 'Seed Crackers', 'Pretzels'],
      additions: ['Grapes', 'Apple Slices', 'Pickles']
    },
    rules: {
      minProtein: 12,
      balanced: true,
      convenient: true,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [250, 400],
      maintainRatios: true,
      snackPlate: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 45,
      fatPercent: 35
    },
    notes: 'Classic combo, office-friendly'
  },

  {
    id: 'snack_014',
    name: 'Mixed Nuts & Dark Chocolate',
    categories: ['balanced_snacks', 'indulgent'],
    dietTypes: ['vegan', 'gluten_free'],
    complexity: 'simple',
    pattern: 'low_protein_low_carb_high_fat',
    workoutTiming: {
      preWorkout: 'not_ideal',
      postWorkout: 'anytime'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'From Nuts',
          baseAmount: 0,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Dark Chocolate (70%+)',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 20, max: 40 }
        }
      },
      fats: {
        primary: {
          name: 'Mixed Raw Nuts',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 50 }
        }
      },
      vegetables: {
        primary: {
          name: 'None',
          baseAmount: 0,
          unit: 'g'
        }
      }
    },
    alternatives: {
      nuts: ['Almonds', 'Walnuts', 'Macadamias', 'Pecans'],
      chocolate: ['Cacao Nibs', 'Chocolate Covered Almonds'],
      mix: ['Trail Mix', 'Dried Berries']
    },
    rules: {
      minProtein: 5,
      highQualityFats: true,
      antioxidants: true,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [250, 400],
      fatPriority: true,
      indulgent: true
    },
    macroProfile: {
      proteinPercent: 10,
      carbPercent: 25,
      fatPercent: 65
    },
    notes: 'Satisfying, healthy fats, antioxidants'
  },

  {
    id: 'snack_015',
    name: 'Rice Paper Veggie Rolls',
    categories: ['balanced_snacks', 'fresh', 'asian'],
    dietTypes: ['vegan', 'gluten_free'],
    complexity: 'moderate',
    pattern: 'low_protein_moderate_carb_low_fat',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Baked Tofu',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        }
      },
      carbs: {
        primary: {
          name: 'Rice Paper Wrappers',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 60 }
        },
        secondary: {
          name: 'Rice Noodles',
          baseAmount: 50,
          unit: 'g',
          cooked: true
        }
      },
      fats: {
        primary: {
          name: 'Peanut Sauce',
          baseAmount: 30,
          unit: 'ml',
          scaling: { min: 20, max: 40 }
        }
      },
      vegetables: {
        primary: {
          name: 'Julienned Vegetables',
          baseAmount: 150,
          unit: 'g',
          description: 'carrots, cucumber, lettuce, herbs'
        }
      }
    },
    alternatives: {
      proteins: ['Shrimp', 'Chicken', 'Tempeh'],
      veggies: ['Avocado', 'Mango', 'Bean Sprouts'],
      sauces: ['Sweet Chili', 'Hoisin', 'Soy-Ginger']
    },
    rules: {
      fresh: true,
      lightYetFilling: true,
      prepAhead: true,
      vegRatio: 0.5
    },
    scaling: {
      calorieRange: [200, 350],
      maintainRatios: true,
      refreshing: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 55,
      fatPercent: 25
    },
    notes: 'Fresh, crunchy, customizable'
  },

  // ========== DIETARY VARIETY ADDITIONS (20 templates) ==========
  // Additional Omnivore Options (5)
  {
    id: 'snack_016',
    name: 'Turkey Jerky & Apple Slices',
    categories: ['high_protein_snacks', 'portable', 'savory'],
    dietTypes: ['omnivore', 'gluten_free', 'dairy_free'],
    complexity: 'simple',
    pattern: 'high_protein_moderate_carb_low_fat',
    workoutTiming: {
      preWorkout: '60min+',
      postWorkout: 'good'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Turkey Jerky',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 50 }
        }
      },
      carbs: {
        primary: {
          name: 'Apple',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 100, max: 200 }
        }
      },
      fats: {
        primary: {
          name: 'Almonds',
          baseAmount: 15,
          unit: 'g',
          scaling: { min: 10, max: 20 }
        }
      },
      vegetables: {
        primary: {
          name: 'None',
          baseAmount: 0,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Beef Jerky', 'Biltong', 'Chicken Strips'],
      carbs: ['Pear', 'Grapes', 'Orange'],
      fats: ['Cashews', 'Pistachios', 'Macadamias']
    },
    rules: {
      minProtein: 15,
      maxFat: 10,
      portable: true,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [200, 300],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 50,
      fatPercent: 20
    },
    notes: 'Portable high-protein snack for on-the-go'
  },

  {
    id: 'snack_017',
    name: 'Chicken Salad Cucumber Boats',
    categories: ['high_protein_snacks', 'fresh', 'low_carb'],
    dietTypes: ['omnivore', 'gluten_free', 'keto_friendly'],
    complexity: 'moderate',
    pattern: 'high_protein_low_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Rotisserie Chicken (shredded)',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        }
      },
      carbs: {
        primary: {
          name: 'Cucumber (halved, scooped)',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      fats: {
        primary: {
          name: 'Greek Yogurt Mayo',
          baseAmount: 20,
          unit: 'g',
          scaling: { min: 15, max: 25 }
        }
      },
      vegetables: {
        primary: {
          name: 'Celery (diced)',
          baseAmount: 30,
          unit: 'g'
        },
        secondary: {
          name: 'Fresh Dill',
          baseAmount: 5,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Tuna Salad', 'Egg Salad', 'Turkey Salad'],
      vessels: ['Bell Pepper Halves', 'Lettuce Cups', 'Tomato Halves'],
      seasonings: ['Curry Powder', 'Everything Bagel', 'Ranch']
    },
    rules: {
      minProtein: 20,
      maxCarbs: 10,
      fresh: true,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [150, 250],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 40,
      carbPercent: 20,
      fatPercent: 40
    },
    notes: 'Low-carb, refreshing protein snack'
  },

  {
    id: 'snack_018',
    name: 'Prosciutto-Wrapped Melon',
    categories: ['savory_sweet_combo', 'elegant', 'portable'],
    dietTypes: ['omnivore', 'gluten_free', 'dairy_free', 'paleo_friendly'],
    complexity: 'simple',
    pattern: 'moderate_protein_moderate_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '60min+',
      postWorkout: 'good'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Prosciutto',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 40, max: 80 }
        }
      },
      carbs: {
        primary: {
          name: 'Cantaloupe',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 100, max: 200 }
        }
      },
      fats: {
        primary: {
          name: 'From prosciutto',
          baseAmount: 0,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Fresh Basil',
          baseAmount: 10,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Black Pepper',
          baseAmount: 1,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Serrano Ham', 'Bresaola', 'Salami'],
      fruits: ['Honeydew', 'Figs', 'Pear'],
      garnish: ['Mint', 'Arugula', 'Balsamic Glaze']
    },
    rules: {
      minProtein: 12,
      elegant: true,
      summerSnack: true,
      vegRatio: 0.1
    },
    scaling: {
      calorieRange: [150, 250],
      maintainRatios: true,
      refreshing: true
    },
    macroProfile: {
      proteinPercent: 25,
      carbPercent: 40,
      fatPercent: 35
    },
    notes: 'Classic Italian antipasto combination'
  },

  {
    id: 'snack_019',
    name: 'Mini Meatball Skewers',
    categories: ['high_protein_snacks', 'savory', 'party_friendly'],
    dietTypes: ['omnivore'],
    complexity: 'moderate',
    pattern: 'high_protein_moderate_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'good'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Mini Beef Meatballs',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        }
      },
      carbs: {
        primary: {
          name: 'Cherry Tomatoes',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        },
        secondary: {
          name: 'Mini Mozzarella Balls',
          baseAmount: 30,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'From meatballs and cheese',
          baseAmount: 0,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Fresh Basil Leaves',
          baseAmount: 10,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Marinara Dipping Sauce',
          baseAmount: 30,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      proteins: ['Turkey Meatballs', 'Chicken Sausage', 'Lamb Kofta'],
      additions: ['Olives', 'Peppers', 'Artichoke Hearts'],
      sauces: ['Pesto', 'Tzatziki', 'Chimichurri']
    },
    rules: {
      minProtein: 20,
      maxFat: 15,
      partyReady: true,
      vegRatio: 0.2
    },
    scaling: {
      calorieRange: [250, 350],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 30,
      fatPercent: 35
    },
    notes: 'Protein-packed party snack or meal prep option'
  },

  {
    id: 'snack_020',
    name: 'Venison Pemmican Trail Mix',
    categories: ['high_protein_snacks', 'portable', 'energy_dense'],
    dietTypes: ['omnivore', 'gluten_free', 'dairy_free', 'paleo_friendly'],
    complexity: 'simple',
    pattern: 'high_protein_moderate_carb_high_fat',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Venison Pemmican',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 50 }
        }
      },
      carbs: {
        primary: {
          name: 'Dried Cranberries',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 20, max: 40 }
        },
        secondary: {
          name: 'Raw Honey',
          baseAmount: 10,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Mixed Nuts',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 20, max: 40 }
        }
      },
      vegetables: {
        primary: {
          name: 'None',
          baseAmount: 0,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Bison Pemmican', 'Beef Pemmican', 'Epic Bars'],
      dried_fruit: ['Blueberries', 'Goji Berries', 'Dates'],
      nuts: ['Pecans', 'Walnuts', 'Brazil Nuts']
    },
    rules: {
      minProtein: 15,
      energyDense: true,
      shelfStable: true,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [300, 450],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 25,
      carbPercent: 35,
      fatPercent: 40
    },
    notes: 'Traditional energy food for endurance activities'
  },

  // Pescatarian Options (5)
  {
    id: 'snack_021',
    name: 'Smoked Salmon Pinwheels',
    categories: ['high_protein_snacks', 'elegant', 'omega3_rich'],
    dietTypes: ['pescatarian'],
    complexity: 'simple',
    pattern: 'high_protein_moderate_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'good'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Smoked Salmon',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        }
      },
      carbs: {
        primary: {
          name: 'Whole Grain Tortilla',
          baseAmount: 50,
          unit: 'g',
          scaling: { min: 40, max: 60 }
        }
      },
      fats: {
        primary: {
          name: 'Cream Cheese (light)',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 20, max: 40 }
        }
      },
      vegetables: {
        primary: {
          name: 'Cucumber (julienned)',
          baseAmount: 50,
          unit: 'g'
        },
        secondary: {
          name: 'Fresh Dill',
          baseAmount: 5,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Capers',
          baseAmount: 10,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Gravlax', 'Smoked Trout', 'Lox'],
      wraps: ['Rice Paper', 'Lettuce Leaves', 'Nori Sheets'],
      spreads: ['Avocado', 'Hummus', 'Greek Yogurt']
    },
    rules: {
      minProtein: 20,
      omega3: true,
      prepAhead: true,
      vegRatio: 0.2
    },
    scaling: {
      calorieRange: [200, 300],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 35,
      fatPercent: 30
    },
    notes: 'Omega-3 rich elegant snack'
  },

  {
    id: 'snack_022',
    name: 'Tuna Salad Avocado Boats',
    categories: ['high_protein_snacks', 'keto_friendly', 'omega3_rich'],
    dietTypes: ['pescatarian', 'gluten_free', 'dairy_free'],
    complexity: 'simple',
    pattern: 'high_protein_low_carb_high_fat',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'minimal',
    template: {
      proteins: {
        primary: {
          name: 'Canned Tuna (in water)',
          baseAmount: 85,
          unit: 'g',
          scaling: { min: 70, max: 100 }
        }
      },
      carbs: {
        primary: {
          name: 'Avocado (halved)',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        }
      },
      fats: {
        primary: {
          name: 'From avocado',
          baseAmount: 0,
          unit: 'g'
        },
        secondary: {
          name: 'Olive Oil Mayo',
          baseAmount: 10,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Red Onion (diced)',
          baseAmount: 20,
          unit: 'g'
        },
        secondary: {
          name: 'Lime Juice',
          baseAmount: 10,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      proteins: ['Canned Salmon', 'Sardines', 'Crab'],
      vessels: ['Cucumber Cups', 'Bell Pepper', 'Endive Leaves'],
      seasonings: ['Everything Bagel', 'Sriracha', 'Lemon Pepper']
    },
    rules: {
      minProtein: 20,
      maxCarbs: 10,
      omega3: true,
      vegRatio: 0.2
    },
    scaling: {
      calorieRange: [250, 350],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 15,
      fatPercent: 55
    },
    notes: 'Keto-friendly omega-3 powerhouse'
  },

  {
    id: 'snack_023',
    name: 'Shrimp Cocktail Power Cup',
    categories: ['high_protein_snacks', 'fresh', 'low_calorie'],
    dietTypes: ['pescatarian', 'gluten_free', 'dairy_free'],
    complexity: 'simple',
    pattern: 'very_high_protein_low_carb_low_fat',
    workoutTiming: {
      preWorkout: '60min+',
      postWorkout: 'excellent'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Large Cooked Shrimp',
          baseAmount: 120,
          unit: 'g',
          scaling: { min: 100, max: 150 }
        }
      },
      carbs: {
        primary: {
          name: 'Cocktail Sauce',
          baseAmount: 30,
          unit: 'ml',
          scaling: { min: 20, max: 40 }
        }
      },
      fats: {
        primary: {
          name: 'Minimal',
          baseAmount: 0,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Cucumber Slices',
          baseAmount: 80,
          unit: 'g'
        },
        secondary: {
          name: 'Lemon Wedge',
          baseAmount: 20,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Prawns', 'Crab Claws', 'Lobster Bites'],
      sauces: ['Remoulade', 'Aioli', 'Mignonette'],
      veggies: ['Celery Sticks', 'Jicama', 'Radishes']
    },
    rules: {
      minProtein: 25,
      maxFat: 3,
      lowCalorie: true,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [150, 250],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 70,
      carbPercent: 25,
      fatPercent: 5
    },
    notes: 'Ultra-lean protein snack'
  },

  {
    id: 'snack_024',
    name: 'Sardine & Crackers Power Pack',
    categories: ['high_protein_snacks', 'portable', 'omega3_rich'],
    dietTypes: ['pescatarian', 'dairy_free'],
    complexity: 'simple',
    pattern: 'high_protein_moderate_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'good'
    },
    saucePreference: 'minimal',
    template: {
      proteins: {
        primary: {
          name: 'Canned Sardines (in water)',
          baseAmount: 85,
          unit: 'g',
          scaling: { min: 70, max: 100 }
        }
      },
      carbs: {
        primary: {
          name: 'Whole Grain Crackers',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 50 }
        }
      },
      fats: {
        primary: {
          name: 'From sardines',
          baseAmount: 0,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Cherry Tomatoes',
          baseAmount: 80,
          unit: 'g'
        },
        secondary: {
          name: 'Fresh Parsley',
          baseAmount: 5,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Hot Sauce',
          baseAmount: 5,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      proteins: ['Mackerel', 'Herring', 'Anchovies'],
      crackers: ['Rice Cakes', 'Seed Crackers', 'Cucumber Rounds'],
      toppings: ['Mustard', 'Lemon', 'Pickled Onions']
    },
    rules: {
      minProtein: 20,
      omega3: true,
      portable: true,
      vegRatio: 0.2
    },
    scaling: {
      calorieRange: [200, 300],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 40,
      fatPercent: 25
    },
    notes: 'Budget-friendly omega-3 snack'
  },

  {
    id: 'snack_025',
    name: 'Sushi Grade Tuna Poke Cup',
    categories: ['high_protein_snacks', 'fresh', 'asian_inspired'],
    dietTypes: ['pescatarian', 'gluten_free', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'high_protein_moderate_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'excellent'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Sushi Grade Tuna (cubed)',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        }
      },
      carbs: {
        primary: {
          name: 'Cucumber (cubed)',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        },
        secondary: {
          name: 'Edamame',
          baseAmount: 50,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Sesame Oil',
          baseAmount: 5,
          unit: 'ml',
          scaling: { min: 3, max: 8 }
        },
        secondary: {
          name: 'Avocado',
          baseAmount: 40,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Seaweed Salad',
          baseAmount: 30,
          unit: 'g'
        },
        secondary: {
          name: 'Green Onions',
          baseAmount: 10,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Soy Sauce & Sesame Seeds',
          baseAmount: 10,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      proteins: ['Salmon', 'Yellowtail', 'Tofu'],
      bases: ['Brown Rice', 'Quinoa', 'Cauliflower Rice'],
      toppings: ['Tobiko', 'Furikake', 'Crispy Garlic']
    },
    rules: {
      minProtein: 25,
      fresh: true,
      omega3: true,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [250, 350],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 30,
      fatPercent: 35
    },
    notes: 'Fresh, restaurant-quality protein snack'
  },

  // Vegetarian Options (5)
  {
    id: 'snack_026',
    name: 'Cottage Cheese Power Bowl',
    categories: ['high_protein_snacks', 'versatile', 'quick'],
    dietTypes: ['vegetarian', 'gluten_free'],
    complexity: 'simple',
    pattern: 'very_high_protein_moderate_carb_low_fat',
    workoutTiming: {
      preWorkout: '60min+',
      postWorkout: 'excellent'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Low-Fat Cottage Cheese',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      carbs: {
        primary: {
          name: 'Pineapple Chunks',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 75, max: 125 }
        }
      },
      fats: {
        primary: {
          name: 'Ground Flaxseed',
          baseAmount: 10,
          unit: 'g',
          scaling: { min: 5, max: 15 }
        }
      },
      vegetables: {
        primary: {
          name: 'Cherry Tomatoes',
          baseAmount: 50,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Everything Bagel Seasoning',
          baseAmount: 3,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Greek Yogurt', 'Ricotta', 'Quark'],
      fruits: ['Berries', 'Peaches', 'Melon'],
      toppings: ['Hemp Hearts', 'Chia Seeds', 'Granola']
    },
    rules: {
      minProtein: 25,
      maxFat: 10,
      versatile: true,
      vegRatio: 0.1
    },
    scaling: {
      calorieRange: [200, 300],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 50,
      carbPercent: 35,
      fatPercent: 15
    },
    notes: 'Versatile high-protein base for sweet or savory'
  },

  {
    id: 'snack_027',
    name: 'Caprese Skewers with Pesto',
    categories: ['fresh_snacks', 'italian', 'party_friendly'],
    dietTypes: ['vegetarian', 'gluten_free'],
    complexity: 'simple',
    pattern: 'moderate_protein_low_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'good'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Fresh Mozzarella Balls',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        }
      },
      carbs: {
        primary: {
          name: 'Cherry Tomatoes',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        }
      },
      fats: {
        primary: {
          name: 'Pesto',
          baseAmount: 20,
          unit: 'g',
          scaling: { min: 15, max: 25 }
        }
      },
      vegetables: {
        primary: {
          name: 'Fresh Basil Leaves',
          baseAmount: 15,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Balsamic Glaze',
          baseAmount: 10,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      proteins: ['Bocconcini', 'Feta', 'Halloumi'],
      additions: ['Olives', 'Artichoke Hearts', 'Sun-Dried Tomatoes'],
      dressings: ['Olive Tapenade', 'Herb Oil', 'Romesco']
    },
    rules: {
      minProtein: 15,
      fresh: true,
      elegant: true,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [200, 300],
      proteinPriority: false,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 25,
      carbPercent: 25,
      fatPercent: 50
    },
    notes: 'Classic Italian appetizer on skewers'
  },

  {
    id: 'snack_028',
    name: 'Loaded Deviled Eggs',
    categories: ['high_protein_snacks', 'party_friendly', 'make_ahead'],
    dietTypes: ['vegetarian', 'gluten_free', 'keto_friendly'],
    complexity: 'moderate',
    pattern: 'high_protein_very_low_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'good'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Hard Boiled Eggs',
          baseAmount: 3,
          unit: 'whole',
          scaling: { min: 2, max: 4 }
        }
      },
      carbs: {
        primary: {
          name: 'Minimal',
          baseAmount: 0,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Greek Yogurt Mayo',
          baseAmount: 20,
          unit: 'g',
          scaling: { min: 15, max: 25 }
        },
        secondary: {
          name: 'Shredded Cheese',
          baseAmount: 15,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Chives (chopped)',
          baseAmount: 5,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Paprika & Hot Sauce',
          baseAmount: 3,
          unit: 'g'
        }
      }
    },
    alternatives: {
      fillings: ['Avocado', 'Hummus', 'Pesto'],
      toppings: ['Bacon Bits', 'Capers', 'Pickled Jalapeños'],
      seasonings: ['Everything Bagel', 'Curry', 'Ranch']
    },
    rules: {
      minProtein: 18,
      maxCarbs: 5,
      makeAhead: true,
      vegRatio: 0.1
    },
    scaling: {
      calorieRange: [200, 300],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 10,
      fatPercent: 55
    },
    notes: 'Keto-friendly protein powerhouse'
  },

  {
    id: 'snack_029',
    name: 'Halloumi Fries with Yogurt Dip',
    categories: ['high_protein_snacks', 'warm', 'mediterranean'],
    dietTypes: ['vegetarian', 'gluten_free'],
    complexity: 'moderate',
    pattern: 'high_protein_low_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'good'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Halloumi Cheese (cut into sticks)',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        }
      },
      carbs: {
        primary: {
          name: 'Minimal',
          baseAmount: 0,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'From halloumi',
          baseAmount: 0,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Cucumber (for dipping)',
          baseAmount: 100,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Greek Yogurt Tzatziki',
          baseAmount: 50,
          unit: 'g'
        },
        secondary: {
          name: 'Lemon & Herbs',
          baseAmount: 10,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Paneer', 'Firm Tofu', 'Tempeh'],
      dips: ['Harissa Yogurt', 'Mint Chutney', 'Romesco'],
      sides: ['Cherry Tomatoes', 'Olives', 'Peppers']
    },
    rules: {
      minProtein: 20,
      maxCarbs: 10,
      warm: true,
      vegRatio: 0.2
    },
    scaling: {
      calorieRange: [250, 350],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 15,
      fatPercent: 55
    },
    notes: 'Crispy, salty, protein-rich Mediterranean snack'
  },

  {
    id: 'snack_030',
    name: 'Edamame Hummus & Veggies',
    categories: ['high_protein_snacks', 'plant_based', 'fiber_rich'],
    dietTypes: ['vegetarian', 'vegan', 'gluten_free', 'dairy_free'],
    complexity: 'simple',
    pattern: 'moderate_protein_moderate_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'good'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Edamame Hummus',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        }
      },
      carbs: {
        primary: {
          name: 'Baby Carrots',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        },
        secondary: {
          name: 'Snap Peas',
          baseAmount: 50,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'From hummus (tahini)',
          baseAmount: 0,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Bell Pepper Strips',
          baseAmount: 80,
          unit: 'g'
        },
        secondary: {
          name: 'Cucumber Rounds',
          baseAmount: 60,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Everything Bagel Seasoning',
          baseAmount: 3,
          unit: 'g'
        }
      }
    },
    alternatives: {
      dips: ['Classic Hummus', 'Black Bean Hummus', 'Beet Hummus'],
      veggies: ['Celery', 'Jicama', 'Radishes'],
      toppings: ['Hemp Hearts', 'Pumpkin Seeds', 'Chili Flakes']
    },
    rules: {
      minProtein: 12,
      fiber: true,
      plantBased: true,
      vegRatio: 0.6
    },
    scaling: {
      calorieRange: [200, 300],
      proteinPriority: false,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 45,
      fatPercent: 35
    },
    notes: 'Fiber and protein-rich plant-based snack'
  },

  // Vegan Options (5)
  {
    id: 'snack_031',
    name: 'Spiced Roasted Chickpeas',
    categories: ['high_protein_snacks', 'crunchy', 'portable'],
    dietTypes: ['vegan', 'gluten_free', 'dairy_free'],
    complexity: 'simple',
    pattern: 'moderate_protein_moderate_carb_low_fat',
    workoutTiming: {
      preWorkout: '60min+',
      postWorkout: 'good'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Roasted Chickpeas',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        }
      },
      carbs: {
        primary: {
          name: 'From chickpeas',
          baseAmount: 0,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Olive Oil (for roasting)',
          baseAmount: 5,
          unit: 'ml',
          scaling: { min: 3, max: 8 }
        }
      },
      vegetables: {
        primary: {
          name: 'None',
          baseAmount: 0,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Spice Blend (Cumin, Paprika, Garlic)',
          baseAmount: 5,
          unit: 'g'
        }
      }
    },
    alternatives: {
      legumes: ['Black Beans', 'Edamame', 'Fava Beans'],
      spices: ['Curry', 'Ranch', 'BBQ'],
      additions: ['Nutritional Yeast', 'Lime Zest', 'Chili Powder']
    },
    rules: {
      minProtein: 15,
      fiber: true,
      crunchy: true,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [150, 250],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 60,
      fatPercent: 20
    },
    notes: 'Crunchy, portable plant protein snack'
  },

  {
    id: 'snack_032',
    name: 'Almond Butter Energy Balls',
    categories: ['energy_snacks', 'sweet', 'no_bake'],
    dietTypes: ['vegan', 'gluten_free', 'dairy_free'],
    complexity: 'simple',
    pattern: 'moderate_protein_moderate_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '60min+',
      postWorkout: 'good'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Almond Butter',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 50 }
        },
        secondary: {
          name: 'Plant Protein Powder',
          baseAmount: 15,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Dates (pitted)',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 50 }
        },
        secondary: {
          name: 'Rolled Oats',
          baseAmount: 20,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'From almond butter',
          baseAmount: 0,
          unit: 'g'
        },
        secondary: {
          name: 'Chia Seeds',
          baseAmount: 10,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'None',
          baseAmount: 0,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Dark Chocolate Chips',
          baseAmount: 10,
          unit: 'g'
        }
      }
    },
    alternatives: {
      nut_butters: ['Cashew', 'Sunflower Seed', 'Tahini'],
      sweeteners: ['Maple Syrup', 'Agave', 'Banana'],
      mix_ins: ['Coconut', 'Cacao Nibs', 'Goji Berries']
    },
    rules: {
      minProtein: 10,
      energyDense: true,
      portable: true,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [200, 300],
      proteinPriority: false,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 15,
      carbPercent: 45,
      fatPercent: 40
    },
    notes: 'No-bake energy balls perfect for pre-workout'
  },

  {
    id: 'snack_033',
    name: 'Tofu Satay Skewers',
    categories: ['high_protein_snacks', 'asian_inspired', 'grilled'],
    dietTypes: ['vegan', 'gluten_free', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'high_protein_low_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'good'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Extra Firm Tofu (marinated)',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        }
      },
      carbs: {
        primary: {
          name: 'Bell Peppers',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 40, max: 80 }
        }
      },
      fats: {
        primary: {
          name: 'Peanut Sauce',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 20, max: 40 }
        }
      },
      vegetables: {
        primary: {
          name: 'Red Onion',
          baseAmount: 40,
          unit: 'g'
        },
        secondary: {
          name: 'Fresh Cilantro',
          baseAmount: 10,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Lime Wedge',
          baseAmount: 20,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Tempeh', 'Seitan', 'Mushrooms'],
      sauces: ['Almond Sauce', 'Coconut Curry', 'Sweet Chili'],
      veggies: ['Zucchini', 'Cherry Tomatoes', 'Pineapple']
    },
    rules: {
      minProtein: 20,
      grilled: true,
      flavorful: true,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [200, 300],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 25,
      fatPercent: 45
    },
    notes: 'Grilled plant protein with Southeast Asian flavors'
  },

  {
    id: 'snack_034',
    name: 'Black Bean Brownie Bites',
    categories: ['protein_treats', 'sweet', 'hidden_veggies'],
    dietTypes: ['vegan', 'gluten_free', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'moderate_protein_moderate_carb_low_fat',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'good'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Black Bean Brownie',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 40, max: 80 }
        }
      },
      carbs: {
        primary: {
          name: 'From black beans and dates',
          baseAmount: 0,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Almond Butter (in brownie)',
          baseAmount: 10,
          unit: 'g',
          scaling: { min: 8, max: 12 }
        }
      },
      vegetables: {
        primary: {
          name: 'None',
          baseAmount: 0,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Cacao Powder',
          baseAmount: 10,
          unit: 'g'
        }
      }
    },
    alternatives: {
      bases: ['Chickpea Blondies', 'Sweet Potato Brownies', 'Beet Brownies'],
      sweeteners: ['Maple Syrup', 'Date Paste', 'Banana'],
      toppings: ['Nut Butter Drizzle', 'Coconut', 'Berries']
    },
    rules: {
      minProtein: 8,
      hiddenNutrition: true,
      treatYourself: true,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [150, 250],
      proteinPriority: false,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 15,
      carbPercent: 60,
      fatPercent: 25
    },
    notes: 'Protein-rich treat with hidden legumes'
  },

  {
    id: 'snack_035',
    name: 'Cashew Cheese & Veggie Platter',
    categories: ['elegant_snacks', 'raw', 'nutrient_dense'],
    dietTypes: ['vegan', 'gluten_free', 'dairy_free', 'raw_friendly'],
    complexity: 'moderate',
    pattern: 'moderate_protein_low_carb_high_fat',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Cashew Cheese',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 40, max: 80 }
        }
      },
      carbs: {
        primary: {
          name: 'Seed Crackers',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 20, max: 40 }
        }
      },
      fats: {
        primary: {
          name: 'From cashews',
          baseAmount: 0,
          unit: 'g'
        },
        secondary: {
          name: 'Olives',
          baseAmount: 30,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Rainbow Vegetable Crudités',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Fresh Herbs',
          baseAmount: 10,
          unit: 'g'
        }
      },
      extras: {
        primary: {
          name: 'Sun-Dried Tomatoes',
          baseAmount: 20,
          unit: 'g'
        }
      }
    },
    alternatives: {
      cheeses: ['Almond Cheese', 'Macadamia Cheese', 'Hemp Cheese'],
      crackers: ['Flax Crackers', 'Vegetable Chips', 'Rice Cakes'],
      additions: ['Pickled Vegetables', 'Sprouts', 'Fermented Foods']
    },
    rules: {
      minProtein: 10,
      elegant: true,
      nutrientDense: true,
      vegRatio: 0.5
    },
    scaling: {
      calorieRange: [250, 350],
      proteinPriority: false,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 12,
      carbPercent: 28,
      fatPercent: 60
    },
    notes: 'Gourmet plant-based cheese platter'
  }
];

// Export the templates
module.exports = {
  snacksTemplates
};