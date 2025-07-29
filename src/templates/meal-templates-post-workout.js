const postWorkoutTemplates = [
  // ========== IMMEDIATE POST-WORKOUT (0-30min) ==========
  {
    id: 'post_workout_001',
    name: 'Classic Recovery Shake & Rice Cakes',
    categories: ['immediate_post', 'liquid_solid_combo'],
    dietTypes: ['omnivore', 'gluten_free'],
    complexity: 'simple',
    pattern: 'high_protein_high_carb_minimal_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '0-15min'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Whey Protein Isolate',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 50 }
        }
      },
      carbs: {
        primary: {
          name: 'White Rice Cakes',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 60 }
        },
        secondary: {
          name: 'Banana',
          baseAmount: 120,
          unit: 'g'
        },
        tertiary: {
          name: 'Dextrose/Maltodextrin',
          baseAmount: 30,
          unit: 'g',
          inShake: true
        }
      },
      fats: {
        primary: {
          name: 'None (avoid post-workout)',
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
      liquids: {
        primary: {
          name: 'Water or Coconut Water',
          baseAmount: 400,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      proteins: ['Whey Concentrate', 'Plant Protein', 'EAAs'],
      carbs: ['White Bread', 'Gummy Bears', 'Dates'],
      liquids: ['Sports Drink', 'Juice', 'Chocolate Milk']
    },
    rules: {
      minProtein: 30,
      maxFat: 3,
      carbToProteinRatio: '2:1',
      vegRatio: 0
    },
    scaling: {
      calorieRange: [300, 500],
      maintainRatios: true,
      scaleByBodyweight: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 68,
      fatPercent: 2
    },
    notes: 'Fast absorption, muscle glycogen replenishment'
  },

  {
    id: 'post_workout_002',
    name: 'Anabolic Window Special',
    categories: ['immediate_post', 'muscle_building'],
    dietTypes: ['omnivore'],
    complexity: 'simple',
    pattern: 'very_high_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '0-20min'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Whey Isolate',
          baseAmount: 50,
          unit: 'g',
          scaling: { min: 40, max: 60 }
        },
        secondary: {
          name: 'BCAAs',
          baseAmount: 10,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'White Bagel',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        },
        secondary: {
          name: 'Honey',
          baseAmount: 30,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Minimal',
          baseAmount: 2,
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
      proteins: ['Egg White Powder', 'Chicken Breast'],
      carbs: ['Pop Tarts', 'Cereal', 'White Pasta'],
      additions: ['Creatine', 'Glutamine']
    },
    rules: {
      minProtein: 40,
      maxFat: 5,
      carbToProteinRatio: '2:1',
      vegRatio: 0
    },
    scaling: {
      calorieRange: [400, 600],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 62,
      fatPercent: 3
    },
    notes: 'Maximum protein synthesis window'
  },

  {
    id: 'post_workout_003',
    name: 'Endurance Recovery Mix',
    categories: ['immediate_post', 'endurance'],
    dietTypes: ['omnivore', 'dairy_free_option'],
    complexity: 'simple',
    pattern: 'moderate_protein_very_high_carb_minimal_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '0-30min'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Whey or Plant Protein',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 25, max: 40 }
        }
      },
      carbs: {
        primary: {
          name: 'Sports Drink Mix',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 50, max: 80 }
        },
        secondary: {
          name: 'Dates',
          baseAmount: 60,
          unit: 'g'
        },
        tertiary: {
          name: 'White Rice',
          baseAmount: 150,
          unit: 'g',
          cooked: true
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
          name: 'Electrolyte Mix',
          baseAmount: 5,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['BCAAs + EAAs', 'Collagen'],
      carbs: ['Maple Syrup', 'Energy Gels', 'Ripe Bananas'],
      drinks: ['Coconut Water', 'Tart Cherry Juice']
    },
    rules: {
      minProtein: 20,
      maxFat: 3,
      carbToProteinRatio: '4:1',
      vegRatio: 0
    },
    scaling: {
      calorieRange: [400, 700],
      carbPriority: true,
      scaleByDuration: true
    },
    macroProfile: {
      proteinPercent: 15,
      carbPercent: 83,
      fatPercent: 2
    },
    notes: 'For long cardio/endurance sessions'
  },

  {
    id: 'post_workout_004',
    name: 'Lean Gains Protocol',
    categories: ['immediate_post', 'cutting'],
    dietTypes: ['omnivore', 'low_carb_friendly'],
    complexity: 'simple',
    pattern: 'very_high_protein_moderate_carb_minimal_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '0-30min'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Whey Isolate',
          baseAmount: 50,
          unit: 'g',
          scaling: { min: 40, max: 60 }
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
          name: 'Apple',
          baseAmount: 150,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'MCT Oil (optional)',
          baseAmount: 5,
          unit: 'ml',
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
      proteins: ['Casein-Whey Blend', 'Lean Meat'],
      carbs: ['Berries', 'Melon', 'Skip Carbs'],
      supplements: ['L-Carnitine', 'Green Tea Extract']
    },
    rules: {
      minProtein: 40,
      maxFat: 8,
      maxCarbs: 40,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [250, 400],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 50,
      carbPercent: 42,
      fatPercent: 8
    },
    notes: 'For cutting phases, maintain muscle'
  },

  // ========== 30-60 MINUTE POST-WORKOUT ==========
  {
    id: 'post_workout_005',
    name: 'Mass Builder Meal',
    categories: ['delayed_post', 'bulking'],
    dietTypes: ['omnivore'],
    complexity: 'moderate',
    pattern: 'high_protein_very_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '30-60min'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Grilled Chicken Breast',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      carbs: {
        primary: {
          name: 'White Rice',
          baseAmount: 300,
          unit: 'g',
          cooked: true,
          scaling: { min: 250, max: 400 }
        },
        secondary: {
          name: 'White Bread',
          baseAmount: 60,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Almond Butter',
          baseAmount: 20,
          unit: 'g',
          scaling: { min: 15, max: 30 }
        }
      },
      vegetables: {
        primary: {
          name: 'Steamed Broccoli',
          baseAmount: 150,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Teriyaki Glaze',
        baseAmount: 30,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Lean Beef', 'Turkey', 'Tilapia'],
      carbs: ['Pasta', 'Potatoes', 'Cream of Rice'],
      fats: ['Cashews', 'Avocado (small)']
    },
    rules: {
      minProtein: 40,
      maxFat: 20,
      minCarbs: 80,
      vegRatio: 0.2
    },
    scaling: {
      calorieRange: [700, 1000],
      maintainRatios: true,
      bulkingFocus: true
    },
    macroProfile: {
      proteinPercent: 25,
      carbPercent: 60,
      fatPercent: 15
    },
    notes: 'High calorie for mass gain phase'
  },

  {
    id: 'post_workout_006',
    name: 'Balanced Recovery Bowl',
    categories: ['delayed_post', 'maintenance'],
    dietTypes: ['omnivore', 'gluten_free'],
    complexity: 'moderate',
    pattern: 'high_protein_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '45-90min'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Lean Ground Beef (93/7)',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        }
      },
      carbs: {
        primary: {
          name: 'Sweet Potato',
          baseAmount: 250,
          unit: 'g',
          scaling: { min: 200, max: 300 }
        },
        secondary: {
          name: 'Quinoa',
          baseAmount: 100,
          unit: 'g',
          cooked: true
        }
      },
      fats: {
        primary: {
          name: 'Avocado',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 40, max: 80 }
        }
      },
      vegetables: {
        primary: {
          name: 'Mixed Vegetables',
          baseAmount: 150,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Bison', 'Chicken Thighs', 'Salmon'],
      carbs: ['Brown Rice', 'White Potato', 'Oats'],
      fats: ['Olive Oil', 'Nuts', 'Seeds']
    },
    rules: {
      minProtein: 35,
      maxFat: 25,
      carbToProteinRatio: '2:1',
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [600, 850],
      maintainRatios: true,
      balanced: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 50,
      fatPercent: 20
    },
    notes: 'Well-rounded recovery nutrition'
  },

  {
    id: 'post_workout_007',
    name: 'Quick Recovery Burrito',
    categories: ['delayed_post', 'convenient'],
    dietTypes: ['omnivore'],
    complexity: 'simple',
    pattern: 'high_protein_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '30-75min'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Grilled Chicken',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        },
        secondary: {
          name: 'Black Beans',
          baseAmount: 80,
          unit: 'g',
          cooked: true
        }
      },
      carbs: {
        primary: {
          name: 'Large Flour Tortilla',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        },
        secondary: {
          name: 'Spanish Rice',
          baseAmount: 150,
          unit: 'g',
          cooked: true
        }
      },
      fats: {
        primary: {
          name: 'Cheese',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 20, max: 40 }
        }
      },
      vegetables: {
        primary: {
          name: 'Salsa & Lettuce',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Steak', 'Ground Turkey', 'Tofu'],
      carbs: ['Burrito Bowl (no tortilla)', 'Corn Tortillas'],
      additions: ['Greek Yogurt', 'Guacamole (small)']
    },
    rules: {
      minProtein: 40,
      maxFat: 22,
      minCarbs: 60,
      vegRatio: 0.15
    },
    scaling: {
      calorieRange: [650, 900],
      maintainRatios: true,
      practical: true
    },
    macroProfile: {
      proteinPercent: 28,
      carbPercent: 52,
      fatPercent: 20
    },
    notes: 'Portable, tasty, effective'
  },

  {
    id: 'post_workout_008',
    name: 'Sushi Recovery Platter',
    categories: ['delayed_post', 'clean'],
    dietTypes: ['pescatarian', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'high_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '45-120min'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Assorted Sashimi',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        },
        secondary: {
          name: 'Edamame',
          baseAmount: 100,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Sushi Rice',
          baseAmount: 250,
          unit: 'g',
          cooked: true,
          scaling: { min: 200, max: 300 }
        },
        secondary: {
          name: 'California Roll',
          baseAmount: 150,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Minimal (from fish)',
          baseAmount: 0,
          unit: 'g'
        },
        secondary: {
          name: 'Sesame Seeds',
          baseAmount: 10,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Seaweed Salad',
          baseAmount: 80,
          unit: 'g'
        },
        secondary: {
          name: 'Cucumber & Ginger',
          baseAmount: 50,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Cooked Rolls', 'Poke Bowl Style'],
      carbs: ['Extra Rice', 'Miso Soup with Noodles'],
      avoid: ['Tempura', 'Mayo-based Sauces']
    },
    rules: {
      minProtein: 35,
      maxFat: 15,
      highCarbs: true,
      vegRatio: 0.2
    },
    scaling: {
      calorieRange: [550, 800],
      maintainRatios: true,
      cleanEating: true
    },
    macroProfile: {
      proteinPercent: 28,
      carbPercent: 60,
      fatPercent: 12
    },
    notes: 'Clean, omega-3 rich recovery'
  },

  // ========== LIQUID POST-WORKOUT OPTIONS ==========
  {
    id: 'post_workout_009',
    name: 'Ultimate Mass Gainer Shake',
    categories: ['liquid_post', 'extreme_bulk'],
    dietTypes: ['omnivore'],
    complexity: 'simple',
    pattern: 'high_protein_extreme_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '0-45min'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Whey Protein',
          baseAmount: 50,
          unit: 'g',
          scaling: { min: 40, max: 60 }
        }
      },
      carbs: {
        primary: {
          name: 'Oats (ground)',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        },
        secondary: {
          name: 'Banana',
          baseAmount: 120,
          unit: 'g'
        },
        tertiary: {
          name: 'Honey',
          baseAmount: 30,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Peanut Butter',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 20, max: 40 }
        }
      },
      vegetables: {
        primary: {
          name: 'Spinach (optional)',
          baseAmount: 30,
          unit: 'g'
        }
      },
      liquids: {
        primary: {
          name: 'Whole Milk',
          baseAmount: 400,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      proteins: ['Mass Gainer Powder', 'Greek Yogurt'],
      carbs: ['Sweet Potato', 'Dates', 'Maltodextrin'],
      fats: ['Almond Butter', 'MCT Oil', 'Flax Seeds']
    },
    rules: {
      minProtein: 40,
      minCalories: 800,
      blendWell: true,
      vegRatio: 0.05
    },
    scaling: {
      calorieRange: [800, 1200],
      maintainRatios: false,
      megaCalories: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 60,
      fatPercent: 20
    },
    notes: 'Serious mass gain shake'
  },

  {
    id: 'post_workout_010',
    name: 'Clean Recovery Smoothie',
    categories: ['liquid_post', 'whole_foods'],
    dietTypes: ['omnivore', 'dairy_free_option'],
    complexity: 'simple',
    pattern: 'moderate_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '15-60min'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Vanilla Protein Powder',
          baseAmount: 35,
          unit: 'g',
          scaling: { min: 30, max: 45 }
        }
      },
      carbs: {
        primary: {
          name: 'Mixed Berries',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 100, max: 200 }
        },
        secondary: {
          name: 'Banana',
          baseAmount: 100,
          unit: 'g'
        },
        tertiary: {
          name: 'Maple Syrup',
          baseAmount: 20,
          unit: 'ml'
        }
      },
      fats: {
        primary: {
          name: 'Chia Seeds',
          baseAmount: 10,
          unit: 'g',
          scaling: { min: 5, max: 15 }
        }
      },
      vegetables: {
        primary: {
          name: 'Baby Spinach',
          baseAmount: 30,
          unit: 'g'
        }
      },
      liquids: {
        primary: {
          name: 'Almond Milk',
          baseAmount: 300,
          unit: 'ml'
        },
        secondary: {
          name: 'Coconut Water',
          baseAmount: 100,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      proteins: ['Plant Protein', 'Greek Yogurt'],
      carbs: ['Mango', 'Pineapple', 'Cherries'],
      boosters: ['Spirulina', 'Maca', 'Cacao']
    },
    rules: {
      minProtein: 25,
      maxFat: 12,
      antioxidants: true,
      vegRatio: 0.1
    },
    scaling: {
      calorieRange: [350, 550],
      maintainRatios: true,
      nutrientDense: true
    },
    macroProfile: {
      proteinPercent: 25,
      carbPercent: 65,
      fatPercent: 10
    },
    notes: 'Antioxidant-rich, clean recovery'
  },

  // ========== SPECIALTY POST-WORKOUT ==========
  {
    id: 'post_workout_011',
    name: 'Overnight Oats Recovery',
    categories: ['specialty_post', 'prep_ahead'],
    dietTypes: ['omnivore', 'vegetarian_option'],
    complexity: 'simple',
    pattern: 'moderate_protein_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'not_ideal',
      postWorkout: '60-180min'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Protein Powder',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 25, max: 40 }
        },
        secondary: {
          name: 'Greek Yogurt',
          baseAmount: 150,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Rolled Oats',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        },
        secondary: {
          name: 'Berries',
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
          name: 'Almond Butter',
          baseAmount: 20,
          unit: 'g',
          scaling: { min: 15, max: 30 }
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
      liquids: {
        primary: {
          name: 'Milk of Choice',
          baseAmount: 200,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      proteins: ['Cottage Cheese', 'Skyr'],
      carbs: ['Granola', 'Banana', 'Apple'],
      fats: ['Walnuts', 'Coconut Flakes', 'Hemp Hearts']
    },
    rules: {
      minProtein: 30,
      prepTime: 'overnight',
      fiberOk: true,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [500, 750],
      maintainRatios: true,
      flexible: true
    },
    macroProfile: {
      proteinPercent: 25,
      carbPercent: 50,
      fatPercent: 25
    },
    notes: 'Prep night before, grab and go'
  },

  {
    id: 'post_workout_012',
    name: 'Chocolate Recovery Pudding',
    categories: ['specialty_post', 'dessert_style'],
    dietTypes: ['omnivore', 'gluten_free'],
    complexity: 'simple',
    pattern: 'high_protein_moderate_carb_low_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '30-120min'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Chocolate Whey Protein',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 50 }
        },
        secondary: {
          name: 'Greek Yogurt',
          baseAmount: 200,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Banana',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        },
        secondary: {
          name: 'Cacao Powder',
          baseAmount: 10,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'PB2 Powder',
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
          name: 'Sugar-free Pudding Mix',
          baseAmount: 10,
          unit: 'g'
        },
        secondary: {
          name: 'Whipped Cream (light)',
          baseAmount: 30,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Casein Protein', 'Cottage Cheese'],
      carbs: ['Berries', 'Graham Crackers'],
      flavors: ['Vanilla', 'Cookies & Cream', 'Mint']
    },
    rules: {
      minProtein: 35,
      maxFat: 15,
      dessertSatisfaction: true,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [350, 500],
      maintainRatios: true,
      enjoyable: true
    },
    macroProfile: {
      proteinPercent: 40,
      carbPercent: 45,
      fatPercent: 15
    },
    notes: 'Satisfies sweet tooth while recovering'
  },

  // ========== DIETARY VARIETY ADDITIONS (10 templates) ==========
  // Additional Omnivore Options (2)
  {
    id: 'post_workout_013',
    name: 'Lean Beef & Sweet Potato Recovery',
    categories: ['immediate_post', 'muscle_building'],
    dietTypes: ['omnivore', 'gluten_free', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'high_protein_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '30-60min'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Lean Ground Beef (93/7)',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        }
      },
      carbs: {
        primary: {
          name: 'Mashed Sweet Potato',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'White Rice',
          baseAmount: 50,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Olive Oil',
          baseAmount: 5,
          unit: 'ml',
          scaling: { min: 3, max: 8 }
        }
      },
      vegetables: {
        primary: {
          name: 'Steamed Green Beans',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Turkey Mince', 'Chicken Breast', 'Venison'],
      carbs: ['Regular Potato', 'Quinoa', 'Pasta'],
      vegetables: ['Asparagus', 'Broccoli', 'Spinach']
    },
    rules: {
      minProtein: 35,
      maxFat: 12,
      carbToProteinRatio: '2:1',
      vegRatio: 0.15
    },
    scaling: {
      calorieRange: [450, 650],
      maintainRatios: true,
      scaleByBodyweight: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 55,
      fatPercent: 15
    },
    notes: 'Whole food recovery meal with quick-digesting carbs'
  },

  {
    id: 'post_workout_014',
    name: 'Turkey Meatballs & Jasmine Rice',
    categories: ['immediate_post', 'asian_fusion'],
    dietTypes: ['omnivore', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'high_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '30-45min'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Lean Turkey Meatballs',
          baseAmount: 160,
          unit: 'g',
          scaling: { min: 130, max: 190 }
        }
      },
      carbs: {
        primary: {
          name: 'Jasmine Rice',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        },
        secondary: {
          name: 'Teriyaki Sauce',
          baseAmount: 30,
          unit: 'ml'
        }
      },
      fats: {
        primary: {
          name: 'Sesame Oil',
          baseAmount: 5,
          unit: 'ml',
          scaling: { min: 3, max: 7 }
        }
      },
      vegetables: {
        primary: {
          name: 'Baby Bok Choy',
          baseAmount: 100,
          unit: 'g'
        },
        secondary: {
          name: 'Shredded Carrots',
          baseAmount: 50,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Chicken Meatballs', 'Pork Tenderloin', 'Lean Beef'],
      carbs: ['Sticky Rice', 'Rice Noodles', 'Udon'],
      vegetables: ['Snow Peas', 'Bean Sprouts', 'Cabbage']
    },
    rules: {
      minProtein: 38,
      maxFat: 10,
      carbToProteinRatio: '2:1',
      vegRatio: 0.2
    },
    scaling: {
      calorieRange: [500, 700],
      maintainRatios: true,
      scaleByBodyweight: true
    },
    macroProfile: {
      proteinPercent: 28,
      carbPercent: 60,
      fatPercent: 12
    },
    notes: 'Asian-inspired recovery meal with fast carbs'
  },

  // Pescatarian Options (2)
  {
    id: 'post_workout_015',
    name: 'Tuna & White Rice Power Bowl',
    categories: ['immediate_post', 'clean_eating'],
    dietTypes: ['pescatarian', 'gluten_free', 'dairy_free'],
    complexity: 'simple',
    pattern: 'very_high_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '15-30min'
    },
    saucePreference: 'minimal',
    template: {
      proteins: {
        primary: {
          name: 'Canned Tuna (in water)',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        }
      },
      carbs: {
        primary: {
          name: 'White Rice (cooked)',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Rice Cakes',
          baseAmount: 30,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Minimal (from tuna)',
          baseAmount: 0,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Cucumber',
          baseAmount: 100,
          unit: 'g'
        }
      },
      additions: {
        primary: {
          name: 'Soy Sauce',
          baseAmount: 15,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      proteins: ['Salmon (canned)', 'Cod', 'Tilapia'],
      carbs: ['Pasta', 'Bagel', 'Potatoes'],
      vegetables: ['Cherry Tomatoes', 'Lettuce', 'Radishes']
    },
    rules: {
      minProtein: 40,
      maxFat: 5,
      carbToProteinRatio: '2:1',
      vegRatio: 0.1
    },
    scaling: {
      calorieRange: [400, 600],
      maintainRatios: true,
      scaleByBodyweight: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 60,
      fatPercent: 5
    },
    notes: 'Ultra-lean post-workout meal for rapid absorption'
  },

  {
    id: 'post_workout_016',
    name: 'Shrimp Stir-Fry Recovery',
    categories: ['immediate_post', 'asian'],
    dietTypes: ['pescatarian', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'high_protein_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '30-60min'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Large Shrimp',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        }
      },
      carbs: {
        primary: {
          name: 'Lo Mein Noodles',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        },
        secondary: {
          name: 'Pineapple Chunks',
          baseAmount: 80,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Sesame Oil',
          baseAmount: 8,
          unit: 'ml',
          scaling: { min: 5, max: 10 }
        }
      },
      vegetables: {
        primary: {
          name: 'Mixed Stir-Fry Vegetables',
          baseAmount: 150,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Prawns', 'Scallops', 'White Fish'],
      carbs: ['Rice Noodles', 'Jasmine Rice', 'Quinoa'],
      vegetables: ['Snap Peas', 'Water Chestnuts', 'Baby Corn']
    },
    rules: {
      minProtein: 35,
      maxFat: 12,
      carbToProteinRatio: '2.5:1',
      vegRatio: 0.2
    },
    scaling: {
      calorieRange: [500, 700],
      maintainRatios: true,
      scaleByBodyweight: true
    },
    macroProfile: {
      proteinPercent: 25,
      carbPercent: 60,
      fatPercent: 15
    },
    notes: 'Quick Asian recovery meal with glycogen-replenishing carbs'
  },

  // Vegetarian Options (3)
  {
    id: 'post_workout_017',
    name: 'Greek Yogurt Parfait Power Stack',
    categories: ['immediate_post', 'breakfast_style'],
    dietTypes: ['vegetarian', 'gluten_free'],
    complexity: 'simple',
    pattern: 'high_protein_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '0-30min'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Greek Yogurt (0% fat)',
          baseAmount: 250,
          unit: 'g',
          scaling: { min: 200, max: 300 }
        },
        secondary: {
          name: 'Whey Protein Powder',
          baseAmount: 20,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Granola',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 50, max: 80 }
        },
        secondary: {
          name: 'Mixed Berries',
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
          name: 'Almonds (sliced)',
          baseAmount: 10,
          unit: 'g',
          scaling: { min: 5, max: 15 }
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
      proteins: ['Cottage Cheese', 'Skyr', 'Quark'],
      carbs: ['Muesli', 'Cereal', 'Banana'],
      fats: ['Walnuts', 'Pumpkin Seeds', 'Chia Seeds']
    },
    rules: {
      minProtein: 40,
      maxFat: 10,
      carbToProteinRatio: '1.5:1',
      vegRatio: 0
    },
    scaling: {
      calorieRange: [450, 650],
      maintainRatios: true,
      scaleByBodyweight: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 50,
      fatPercent: 15
    },
    notes: 'Quick vegetarian recovery with complete proteins'
  },

  {
    id: 'post_workout_018',
    name: 'Egg White Wrap & Fruit',
    categories: ['immediate_post', 'portable'],
    dietTypes: ['vegetarian'],
    complexity: 'simple',
    pattern: 'high_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '15-45min'
    },
    saucePreference: 'minimal',
    template: {
      proteins: {
        primary: {
          name: 'Egg Whites',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Low-Fat Cheese',
          baseAmount: 30,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Whole Wheat Tortilla',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 50, max: 80 }
        },
        secondary: {
          name: 'Apple',
          baseAmount: 150,
          unit: 'g'
        },
        tertiary: {
          name: 'White Rice',
          baseAmount: 100,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Cooking Spray',
          baseAmount: 2,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Spinach',
          baseAmount: 50,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Whole Eggs', 'Cottage Cheese', 'Ricotta'],
      carbs: ['Bagel', 'English Muffin', 'Pita'],
      vegetables: ['Tomatoes', 'Mushrooms', 'Bell Peppers']
    },
    rules: {
      minProtein: 35,
      maxFat: 8,
      carbToProteinRatio: '2:1',
      vegRatio: 0.1
    },
    scaling: {
      calorieRange: [400, 600],
      maintainRatios: true,
      scaleByBodyweight: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 60,
      fatPercent: 10
    },
    notes: 'Portable vegetarian recovery meal'
  },

  {
    id: 'post_workout_019',
    name: 'Protein Pancakes & Fruit Compote',
    categories: ['immediate_post', 'breakfast_style', 'enjoyable'],
    dietTypes: ['vegetarian'],
    complexity: 'moderate',
    pattern: 'high_protein_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '30-60min'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Protein Pancake Mix',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        },
        secondary: {
          name: 'Egg Whites',
          baseAmount: 100,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Maple Syrup',
          baseAmount: 40,
          unit: 'ml',
          scaling: { min: 30, max: 50 }
        },
        secondary: {
          name: 'Mixed Berry Compote',
          baseAmount: 100,
          unit: 'g'
        },
        tertiary: {
          name: 'Banana',
          baseAmount: 100,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Almond Butter',
          baseAmount: 10,
          unit: 'g',
          scaling: { min: 8, max: 15 }
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
      proteins: ['Cottage Cheese Pancakes', 'Kodiak Cakes', 'Buckwheat Pancakes'],
      carbs: ['Honey', 'Jam', 'Fresh Fruit'],
      fats: ['Peanut Butter', 'Cashew Butter', 'Light Butter']
    },
    rules: {
      minProtein: 35,
      maxFat: 12,
      carbToProteinRatio: '2:1',
      vegRatio: 0
    },
    scaling: {
      calorieRange: [500, 700],
      maintainRatios: true,
      enjoyable: true
    },
    macroProfile: {
      proteinPercent: 28,
      carbPercent: 57,
      fatPercent: 15
    },
    notes: 'Satisfying post-workout breakfast that aids recovery'
  },

  // Vegan Options (3)
  {
    id: 'post_workout_020',
    name: 'Tofu Scramble Power Bowl',
    categories: ['immediate_post', 'plant_based'],
    dietTypes: ['vegan', 'gluten_free', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'high_protein_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '30-60min'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Firm Tofu (crumbled)',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Nutritional Yeast',
          baseAmount: 15,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Sweet Potato Hash',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Whole Grain Toast',
          baseAmount: 60,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Olive Oil',
          baseAmount: 8,
          unit: 'ml',
          scaling: { min: 5, max: 10 }
        }
      },
      vegetables: {
        primary: {
          name: 'Spinach',
          baseAmount: 100,
          unit: 'g'
        },
        secondary: {
          name: 'Cherry Tomatoes',
          baseAmount: 80,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Tempeh', 'Chickpea Flour', 'Hemp Hearts'],
      carbs: ['Regular Potatoes', 'Quinoa', 'Oats'],
      vegetables: ['Kale', 'Mushrooms', 'Bell Peppers']
    },
    rules: {
      minProtein: 25,
      maxFat: 12,
      carbToProteinRatio: '2.5:1',
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [450, 650],
      maintainRatios: true,
      scaleByBodyweight: true
    },
    macroProfile: {
      proteinPercent: 22,
      carbPercent: 60,
      fatPercent: 18
    },
    notes: 'Plant-based recovery with complete amino acids'
  },

  {
    id: 'post_workout_021',
    name: 'Lentil & Rice Recovery Bowl',
    categories: ['immediate_post', 'whole_food'],
    dietTypes: ['vegan', 'gluten_free', 'dairy_free'],
    complexity: 'simple',
    pattern: 'high_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '30-60min'
    },
    saucePreference: 'minimal',
    template: {
      proteins: {
        primary: {
          name: 'Red Lentils (cooked)',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      carbs: {
        primary: {
          name: 'White Rice',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        },
        secondary: {
          name: 'Dates',
          baseAmount: 40,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Tahini',
          baseAmount: 10,
          unit: 'g',
          scaling: { min: 5, max: 15 }
        }
      },
      vegetables: {
        primary: {
          name: 'Steamed Broccoli',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Yellow Lentils', 'Split Peas', 'Black Beans'],
      carbs: ['Quinoa', 'Couscous', 'Pasta'],
      vegetables: ['Green Beans', 'Carrots', 'Zucchini']
    },
    rules: {
      minProtein: 25,
      maxFat: 8,
      carbToProteinRatio: '3:1',
      vegRatio: 0.15
    },
    scaling: {
      calorieRange: [450, 650],
      maintainRatios: true,
      scaleByBodyweight: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 70,
      fatPercent: 10
    },
    notes: 'Simple vegan recovery with fast and slow carbs'
  },

  {
    id: 'post_workout_022',
    name: 'Quinoa Tempeh Power Plate',
    categories: ['immediate_post', 'nutrient_dense'],
    dietTypes: ['vegan', 'gluten_free', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'high_protein_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'never',
      postWorkout: '45-75min'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Tempeh (marinated)',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        },
        secondary: {
          name: 'Hemp Seeds',
          baseAmount: 20,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Quinoa',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        },
        secondary: {
          name: 'Mango Chunks',
          baseAmount: 100,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Avocado',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 50 }
        }
      },
      vegetables: {
        primary: {
          name: 'Roasted Brussels Sprouts',
          baseAmount: 120,
          unit: 'g'
        },
        secondary: {
          name: 'Red Cabbage Slaw',
          baseAmount: 80,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Tofu', 'Edamame', 'Black Bean Tempeh'],
      carbs: ['Brown Rice', 'Buckwheat', 'Millet'],
      vegetables: ['Cauliflower', 'Beet Greens', 'Chard']
    },
    rules: {
      minProtein: 30,
      maxFat: 15,
      carbToProteinRatio: '2:1',
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [500, 700],
      maintainRatios: true,
      scaleByBodyweight: true
    },
    macroProfile: {
      proteinPercent: 24,
      carbPercent: 56,
      fatPercent: 20
    },
    notes: 'Nutrient-dense vegan recovery with fermented protein'
  }
];

// Export the templates
module.exports = {
  postWorkoutTemplates
};