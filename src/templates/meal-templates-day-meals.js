const dayMealsTemplates = [
  // ========== STANDARD DAY MEALS (10 templates) ==========
  {
    id: 'day_meal_001',
    name: 'Classic Chicken Rice Bowl',
    categories: ['standard_meals', 'high_protein'],
    dietTypes: ['omnivore', 'dairy_free'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '90-120min',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Grilled Chicken Breast',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      carbs: {
        primary: {
          name: 'Basmati Rice',
          baseAmount: 200,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 300 }
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
          unit: 'g',
          description: 'bell peppers, broccoli, snap peas'
        }
      },
      sauce: {
        name: 'Teriyaki Glaze',
        baseAmount: 30,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Turkey Breast', 'Lean Beef', 'Tofu'],
      carbs: ['Jasmine Rice', 'Quinoa', 'Sweet Potato'],
      fats: ['Olive Oil', 'Cashews', 'Tahini'],
      sauces: ['Soy Ginger', 'Sweet Chili', 'Peanut Sauce']
    },
    rules: {
      minProtein: 30,
      maxFat: 25,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [400, 700],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 40,
      fatPercent: 25
    },
    notes: 'Versatile bowl format, easy to meal prep'
  },

  {
    id: 'day_meal_002',
    name: 'Lean Beef & Sweet Potato Power Plate',
    categories: ['standard_meals', 'muscle_building'],
    dietTypes: ['omnivore', 'gluten_free'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'ideal'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Lean Ground Beef (93/7)',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      carbs: {
        primary: {
          name: 'Sweet Potato',
          baseAmount: 200,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 300 }
        }
      },
      fats: {
        primary: {
          name: 'Mixed Nuts',
          baseAmount: 20,
          unit: 'g',
          scaling: { min: 15, max: 30 }
        }
      },
      vegetables: {
        primary: {
          name: 'Green Beans',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Baby Spinach',
          baseAmount: 50,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Bison', 'Venison', 'Turkey Mince'],
      carbs: ['White Potato', 'Butternut Squash', 'Rice'],
      fats: ['Olive Oil', 'Avocado', 'Pumpkin Seeds']
    },
    rules: {
      minProtein: 35,
      maxFat: 20,
      vegRatio: 0.35
    },
    scaling: {
      calorieRange: [450, 750],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 40,
      carbPercent: 40,
      fatPercent: 20
    },
    notes: 'High in iron and vitamin A, great post-workout'
  },

  {
    id: 'day_meal_003',
    name: 'Salmon Quinoa Mediterranean Bowl',
    categories: ['standard_meals', 'heart_healthy'],
    dietTypes: ['pescatarian', 'gluten_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Grilled Salmon',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      carbs: {
        primary: {
          name: 'Quinoa',
          baseAmount: 185,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 250 }
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
          name: 'Feta Cheese',
          baseAmount: 30,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Cucumber & Tomato',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Red Onion',
          baseAmount: 30,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Lemon Herb Dressing',
        baseAmount: 30,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Grilled Tuna', 'Cod', 'Shrimp'],
      carbs: ['Brown Rice', 'Couscous', 'Bulgur'],
      fats: ['Olives', 'Pine Nuts', 'Tahini']
    },
    rules: {
      minProtein: 30,
      maxFat: 30,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [450, 700],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 35,
      fatPercent: 35
    },
    notes: 'High omega-3, anti-inflammatory'
  },

  {
    id: 'day_meal_004',
    name: 'Turkey Meatballs & Pasta',
    categories: ['standard_meals', 'comfort_food'],
    dietTypes: ['omnivore'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'good'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Turkey Meatballs',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      carbs: {
        primary: {
          name: 'Whole Wheat Pasta',
          baseAmount: 80,
          unit: 'g',
          dry: true,
          scaling: { min: 60, max: 100 }
        }
      },
      fats: {
        primary: {
          name: 'Parmesan Cheese',
          baseAmount: 20,
          unit: 'g',
          scaling: { min: 15, max: 30 }
        }
      },
      vegetables: {
        primary: {
          name: 'Marinara Sauce',
          baseAmount: 150,
          unit: 'ml'
        },
        secondary: {
          name: 'Side Salad',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Chicken Meatballs', 'Lean Beef Meatballs'],
      carbs: ['Regular Pasta', 'Rice Pasta', 'Zucchini Noodles'],
      fats: ['Mozzarella', 'Olive Oil']
    },
    rules: {
      minProtein: 35,
      maxFat: 25,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [500, 800],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 45,
      fatPercent: 20
    },
    notes: 'Comfort food made healthy'
  },

  {
    id: 'day_meal_005',
    name: 'Tuna Poke Bowl',
    categories: ['standard_meals', 'fresh'],
    dietTypes: ['pescatarian', 'dairy_free'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Ahi Tuna (Sashimi Grade)',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      carbs: {
        primary: {
          name: 'Sushi Rice',
          baseAmount: 200,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 250 }
        }
      },
      fats: {
        primary: {
          name: 'Avocado',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 40, max: 80 }
        },
        secondary: {
          name: 'Sesame Seeds',
          baseAmount: 10,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Edamame',
          baseAmount: 80,
          unit: 'g'
        },
        secondary: {
          name: 'Seaweed Salad',
          baseAmount: 50,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Spicy Mayo & Soy Sauce',
        baseAmount: 30,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Salmon', 'Tofu', 'Cooked Shrimp'],
      carbs: ['Brown Rice', 'Quinoa', 'Rice Noodles'],
      fats: ['Macadamia Nuts', 'Cashews']
    },
    rules: {
      minProtein: 30,
      maxFat: 25,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [450, 700],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 45,
      fatPercent: 25
    },
    notes: 'Fresh, light, high in omega-3'
  },

  {
    id: 'day_meal_006',
    name: 'Chicken Burrito Bowl',
    categories: ['standard_meals', 'mexican'],
    dietTypes: ['omnivore', 'gluten_free'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'good'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Seasoned Chicken Thighs',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      carbs: {
        primary: {
          name: 'Cilantro Lime Rice',
          baseAmount: 200,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Black Beans',
          baseAmount: 80,
          unit: 'g',
          cooked: true
        }
      },
      fats: {
        primary: {
          name: 'Guacamole',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 40, max: 80 }
        },
        secondary: {
          name: 'Shredded Cheese',
          baseAmount: 20,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Pico de Gallo',
          baseAmount: 80,
          unit: 'g'
        },
        secondary: {
          name: 'Lettuce',
          baseAmount: 50,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Chipotle Crema',
        baseAmount: 30,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Steak', 'Carnitas', 'Sofritas'],
      carbs: ['Brown Rice', 'Quinoa', 'Cauliflower Rice'],
      fats: ['Sour Cream', 'Olive Oil']
    },
    rules: {
      minProtein: 35,
      maxFat: 30,
      vegRatio: 0.2
    },
    scaling: {
      calorieRange: [550, 850],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 45,
      fatPercent: 25
    },
    notes: 'Customizable, meal prep friendly'
  },

  {
    id: 'day_meal_007',
    name: 'Steak & Potato Classic',
    categories: ['standard_meals', 'traditional'],
    dietTypes: ['omnivore', 'gluten_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '180min+',
      postWorkout: 'excellent'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Sirloin Steak',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      carbs: {
        primary: {
          name: 'Baked Potato',
          baseAmount: 250,
          unit: 'g',
          scaling: { min: 200, max: 350 }
        }
      },
      fats: {
        primary: {
          name: 'Butter',
          baseAmount: 10,
          unit: 'g',
          scaling: { min: 5, max: 15 }
        },
        secondary: {
          name: 'Sour Cream',
          baseAmount: 30,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Grilled Asparagus',
          baseAmount: 150,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Ribeye', 'Filet Mignon', 'Chicken Breast'],
      carbs: ['Sweet Potato', 'Rice', 'Mashed Potatoes'],
      fats: ['Olive Oil', 'Cheese']
    },
    rules: {
      minProtein: 35,
      maxFat: 30,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [500, 800],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 40,
      fatPercent: 25
    },
    notes: 'Classic bodybuilder meal'
  },

  {
    id: 'day_meal_008',
    name: 'Thai Chicken Curry',
    categories: ['standard_meals', 'asian'],
    dietTypes: ['omnivore', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Chicken Breast',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      carbs: {
        primary: {
          name: 'Jasmine Rice',
          baseAmount: 200,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 250 }
        }
      },
      fats: {
        primary: {
          name: 'Coconut Milk (in curry)',
          baseAmount: 80,
          unit: 'ml',
          scaling: { min: 60, max: 100 }
        }
      },
      vegetables: {
        primary: {
          name: 'Mixed Thai Vegetables',
          baseAmount: 150,
          unit: 'g',
          description: 'bell peppers, bamboo shoots, Thai basil'
        }
      },
      sauce: {
        name: 'Green Curry Sauce',
        baseAmount: 100,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Shrimp', 'Tofu', 'Beef'],
      carbs: ['Brown Rice', 'Rice Noodles', 'Cauliflower Rice'],
      sauces: ['Red Curry', 'Panang Curry', 'Massaman Curry']
    },
    rules: {
      minProtein: 30,
      maxFat: 25,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [450, 750],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 45,
      fatPercent: 25
    },
    notes: 'Flavorful, anti-inflammatory spices'
  },

  {
    id: 'day_meal_009',
    name: 'Lean Pork Tenderloin Plate',
    categories: ['standard_meals', 'lean_gains'],
    dietTypes: ['omnivore', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'good'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Pork Tenderloin',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      carbs: {
        primary: {
          name: 'Wild Rice Blend',
          baseAmount: 185,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 250 }
        }
      },
      fats: {
        primary: {
          name: 'Olive Oil',
          baseAmount: 10,
          unit: 'ml',
          scaling: { min: 8, max: 15 }
        },
        secondary: {
          name: 'Sliced Almonds',
          baseAmount: 15,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Roasted Brussels Sprouts',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Caramelized Onions',
          baseAmount: 50,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Chicken Breast', 'Turkey Tenderloin'],
      carbs: ['Quinoa', 'Farro', 'Sweet Potato'],
      fats: ['Walnuts', 'Pumpkin Seeds']
    },
    rules: {
      minProtein: 35,
      maxFat: 20,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [450, 700],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 40,
      carbPercent: 40,
      fatPercent: 20
    },
    notes: 'Lean protein, complex carbs'
  },

  {
    id: 'day_meal_010',
    name: 'Mediterranean Chicken Wrap',
    categories: ['standard_meals', 'portable'],
    dietTypes: ['omnivore'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Grilled Chicken Strips',
          baseAmount: 120,
          unit: 'g',
          scaling: { min: 100, max: 150 }
        }
      },
      carbs: {
        primary: {
          name: 'Whole Wheat Tortilla',
          baseAmount: 70,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        }
      },
      fats: {
        primary: {
          name: 'Hummus',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 40, max: 80 }
        },
        secondary: {
          name: 'Feta Cheese',
          baseAmount: 20,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Mixed Greens & Tomatoes',
          baseAmount: 100,
          unit: 'g'
        },
        secondary: {
          name: 'Cucumber',
          baseAmount: 50,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Tzatziki',
        baseAmount: 30,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Turkey', 'Falafel', 'Grilled Shrimp'],
      carbs: ['Pita Bread', 'Lavash', 'Lettuce Wrap'],
      fats: ['Tahini', 'Olive Tapenade']
    },
    rules: {
      minProtein: 30,
      maxFat: 25,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [400, 650],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 40,
      fatPercent: 25
    },
    notes: 'Portable, fresh, balanced'
  },

  // ========== PRE-WORKOUT DAY MEALS (8 templates) ==========
  {
    id: 'day_meal_011',
    name: 'Pre-Workout Power Bowl',
    categories: ['pre_workout_meals', 'energy_focused'],
    dietTypes: ['omnivore', 'gluten_free'],
    complexity: 'simple',
    pattern: 'moderate_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: '60-90min',
      postWorkout: 'not_recommended'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Grilled Chicken Breast',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        }
      },
      carbs: {
        primary: {
          name: 'White Rice',
          baseAmount: 250,
          unit: 'g',
          cooked: true,
          scaling: { min: 200, max: 300 }
        },
        secondary: {
          name: 'Rice Cakes',
          baseAmount: 20,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'MCT Oil',
          baseAmount: 5,
          unit: 'ml',
          scaling: { min: 0, max: 10 }
        }
      },
      vegetables: {
        primary: {
          name: 'Steamed Spinach',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Turkey Breast', 'White Fish', 'Egg Whites'],
      carbs: ['White Pasta', 'White Potato', 'Cream of Rice'],
      fats: ['Minimal Olive Oil', 'Remove if needed']
    },
    rules: {
      minProtein: 20,
      maxFat: 10,
      vegRatio: 0.15
    },
    scaling: {
      calorieRange: [350, 550],
      carbPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 25,
      carbPercent: 65,
      fatPercent: 10
    },
    notes: 'Fast digesting, low fiber, high energy'
  },

  {
    id: 'day_meal_012',
    name: 'Athlete\'s Pasta Power',
    categories: ['pre_workout_meals', 'endurance'],
    dietTypes: ['omnivore'],
    complexity: 'simple',
    pattern: 'moderate_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: '90-120min',
      postWorkout: 'not_ideal'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Lean Ground Turkey',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 75, max: 125 }
        }
      },
      carbs: {
        primary: {
          name: 'White Pasta',
          baseAmount: 100,
          unit: 'g',
          dry: true,
          scaling: { min: 80, max: 120 }
        }
      },
      fats: {
        primary: {
          name: 'Olive Oil (minimal)',
          baseAmount: 5,
          unit: 'ml',
          scaling: { min: 0, max: 10 }
        }
      },
      vegetables: {
        primary: {
          name: 'Marinara Sauce (low fat)',
          baseAmount: 100,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      proteins: ['Chicken Breast', 'Lean Beef'],
      carbs: ['Rice Pasta', 'Orzo', 'Gnocchi'],
      sauces: ['Tomato Basil', 'Light Pesto']
    },
    rules: {
      minProtein: 20,
      maxFat: 12,
      vegRatio: 0.15
    },
    scaling: {
      calorieRange: [400, 600],
      carbPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 70,
      fatPercent: 10
    },
    notes: 'Classic pre-workout carb loading'
  },

  {
    id: 'day_meal_013',
    name: 'Quick Energy Sandwich',
    categories: ['pre_workout_meals', 'quick'],
    dietTypes: ['omnivore'],
    complexity: 'simple',
    pattern: 'moderate_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: '45-75min',
      postWorkout: 'not_recommended'
    },
    saucePreference: 'minimal',
    template: {
      proteins: {
        primary: {
          name: 'Sliced Turkey Breast',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
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
          name: 'Banana',
          baseAmount: 100,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Low Fat Mayo',
          baseAmount: 10,
          unit: 'g',
          scaling: { min: 0, max: 15 }
        }
      },
      vegetables: {
        primary: {
          name: 'Lettuce & Tomato',
          baseAmount: 50,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Chicken Breast', 'Tuna (water packed)'],
      carbs: ['Bagel', 'English Muffin', 'Wrap'],
      additions: ['Honey', 'Jam (small amount)']
    },
    rules: {
      minProtein: 15,
      maxFat: 10,
      vegRatio: 0.1
    },
    scaling: {
      calorieRange: [300, 500],
      carbPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 70,
      fatPercent: 10
    },
    notes: 'Quick, portable, easy to digest'
  },

  {
    id: 'day_meal_014',
    name: 'Sushi Pre-Workout Special',
    categories: ['pre_workout_meals', 'clean'],
    dietTypes: ['pescatarian'],
    complexity: 'moderate',
    pattern: 'moderate_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: '75-90min',
      postWorkout: 'not_ideal'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Tuna & Salmon Sushi',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        }
      },
      carbs: {
        primary: {
          name: 'Sushi Rice',
          baseAmount: 200,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'California Roll',
          baseAmount: 100,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Minimal from fish',
          baseAmount: 0,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Cucumber & Ginger',
          baseAmount: 50,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Low Sodium Soy Sauce',
        baseAmount: 15,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Shrimp', 'Cooked Tuna', 'Imitation Crab'],
      carbs: ['Extra Rice', 'Inari'],
      options: ['Skip avocado rolls', 'No tempura']
    },
    rules: {
      minProtein: 20,
      maxFat: 10,
      vegRatio: 0.1
    },
    scaling: {
      calorieRange: [350, 550],
      carbPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 72,
      fatPercent: 8
    },
    notes: 'Clean, fast digesting, energizing'
  },

  {
    id: 'day_meal_015',
    name: 'Endurance Athlete Bowl',
    categories: ['pre_workout_meals', 'long_training'],
    dietTypes: ['omnivore', 'dairy_free'],
    complexity: 'simple',
    pattern: 'low_protein_very_high_carb_low_fat',
    workoutTiming: {
      preWorkout: '90-120min',
      postWorkout: 'not_recommended'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Grilled Chicken (small)',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 50, max: 80 }
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
          name: 'White Potato',
          baseAmount: 150,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Cooking Spray Only',
          baseAmount: 2,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Salt & Basic Seasoning',
          baseAmount: 0,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Egg Whites', 'White Fish'],
      carbs: ['Pasta', 'Bagels', 'Pretzels'],
      additions: ['Sports Drink', 'Dried Fruit']
    },
    rules: {
      minProtein: 10,
      maxFat: 8,
      vegRatio: 0.05
    },
    scaling: {
      calorieRange: [400, 700],
      carbPriority: true,
      maintainRatios: false
    },
    macroProfile: {
      proteinPercent: 10,
      carbPercent: 85,
      fatPercent: 5
    },
    notes: 'Maximum carbs for long sessions'
  },

  {
    id: 'day_meal_016',
    name: 'Powerlifter Pre-Training',
    categories: ['pre_workout_meals', 'strength'],
    dietTypes: ['omnivore'],
    complexity: 'simple',
    pattern: 'moderate_protein_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: '90-120min',
      postWorkout: 'not_ideal'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Lean Steak',
          baseAmount: 120,
          unit: 'g',
          scaling: { min: 100, max: 150 }
        }
      },
      carbs: {
        primary: {
          name: 'White Potato',
          baseAmount: 300,
          unit: 'g',
          scaling: { min: 250, max: 400 }
        }
      },
      fats: {
        primary: {
          name: 'Butter (small amount)',
          baseAmount: 10,
          unit: 'g',
          scaling: { min: 5, max: 15 }
        }
      },
      vegetables: {
        primary: {
          name: 'Green Beans',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Ground Beef 93/7', 'Chicken Thighs'],
      carbs: ['White Rice', 'Pasta', 'Bread'],
      fats: ['Olive Oil', 'MCT Oil']
    },
    rules: {
      minProtein: 25,
      maxFat: 15,
      vegRatio: 0.15
    },
    scaling: {
      calorieRange: [450, 700],
      carbPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 25,
      carbPercent: 60,
      fatPercent: 15
    },
    notes: 'Balanced for heavy lifting'
  },

  {
    id: 'day_meal_017',
    name: 'CrossFit Pre-WOD Fuel',
    categories: ['pre_workout_meals', 'high_intensity'],
    dietTypes: ['omnivore', 'paleo_friendly'],
    complexity: 'simple',
    pattern: 'moderate_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: '60-90min',
      postWorkout: 'not_recommended'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Turkey Meatballs',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
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
          name: 'White Rice',
          baseAmount: 100,
          unit: 'g',
          cooked: true
        }
      },
      fats: {
        primary: {
          name: 'Coconut Oil (minimal)',
          baseAmount: 5,
          unit: 'ml',
          scaling: { min: 0, max: 10 }
        }
      },
      vegetables: {
        primary: {
          name: 'Baby Carrots',
          baseAmount: 80,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Chicken Breast', 'Lean Pork'],
      carbs: ['White Potato', 'Plantains', 'Dates'],
      additions: ['Applesauce', 'Rice Cakes']
    },
    rules: {
      minProtein: 20,
      maxFat: 10,
      vegRatio: 0.15
    },
    scaling: {
      calorieRange: [400, 600],
      carbPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 70,
      fatPercent: 10
    },
    notes: 'Quick energy for intense workouts'
  },

  {
    id: 'day_meal_018',
    name: 'Bodybuilder Pre-Workout Classic',
    categories: ['pre_workout_meals', 'muscle_focused'],
    dietTypes: ['omnivore'],
    complexity: 'simple',
    pattern: 'high_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: '75-90min',
      postWorkout: 'not_ideal'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Chicken Breast',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        }
      },
      carbs: {
        primary: {
          name: 'White Rice',
          baseAmount: 250,
          unit: 'g',
          cooked: true,
          scaling: { min: 200, max: 300 }
        },
        secondary: {
          name: 'Rice Cakes',
          baseAmount: 30,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Almond Butter (tiny amount)',
          baseAmount: 8,
          unit: 'g',
          scaling: { min: 0, max: 10 }
        }
      },
      vegetables: {
        primary: {
          name: 'Asparagus',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Tilapia', 'Turkey Breast', 'Egg Whites'],
      carbs: ['Cream of Rice', 'White Potato', 'Bagel'],
      skip: ['All nuts', 'Oils', 'Dairy']
    },
    rules: {
      minProtein: 30,
      maxFat: 10,
      vegRatio: 0.15
    },
    scaling: {
      calorieRange: [450, 650],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 62,
      fatPercent: 8
    },
    notes: 'The classic bodybuilder pre-workout'
  },

  // ========== POST-WORKOUT INTEGRATED DAY MEALS (7 templates) ==========
  {
    id: 'day_meal_019',
    name: 'Post-Workout Recovery Bowl',
    categories: ['post_workout_integrated', 'recovery'],
    dietTypes: ['omnivore', 'gluten_free'],
    complexity: 'simple',
    pattern: 'high_protein_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: '0-60min'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Grilled Chicken Breast',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        }
      },
      carbs: {
        primary: {
          name: 'White Rice',
          baseAmount: 280,
          unit: 'g',
          cooked: true,
          scaling: { min: 250, max: 350 }
        },
        secondary: {
          name: 'Pineapple',
          baseAmount: 100,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Cashews',
          baseAmount: 20,
          unit: 'g',
          scaling: { min: 15, max: 25 }
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
      proteins: ['Turkey', 'Lean Beef', 'White Fish'],
      carbs: ['Jasmine Rice', 'White Potato', 'Pasta'],
      fastCarbs: ['White Bread', 'Banana', 'Dates']
    },
    rules: {
      minProtein: 40,
      maxFat: 15,
      vegRatio: 0.2
    },
    scaling: {
      calorieRange: [550, 850],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 50,
      fatPercent: 15
    },
    notes: 'Optimal post-workout nutrition timing'
  },

  {
    id: 'day_meal_020',
    name: 'Muscle Building Burrito',
    categories: ['post_workout_integrated', 'mass_gain'],
    dietTypes: ['omnivore'],
    complexity: 'simple',
    pattern: 'high_protein_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'not_ideal',
      postWorkout: '30-90min'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Lean Ground Beef',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
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
          name: 'Shredded Cheese',
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
      proteins: ['Chicken', 'Steak', 'Carnitas'],
      carbs: ['Extra Rice', 'Corn Tortillas'],
      additions: ['Sour Cream', 'Guacamole (small)']
    },
    rules: {
      minProtein: 45,
      maxFat: 20,
      vegRatio: 0.15
    },
    scaling: {
      calorieRange: [650, 950],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 52,
      fatPercent: 18
    },
    notes: 'High calories for mass gain'
  },

  {
    id: 'day_meal_021',
    name: 'Lean Gains Pizza',
    categories: ['post_workout_integrated', 'refeed'],
    dietTypes: ['omnivore'],
    complexity: 'moderate',
    pattern: 'high_protein_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: '45-120min'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Chicken & Turkey Pepperoni',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        }
      },
      carbs: {
        primary: {
          name: 'Thin Crust Pizza Base',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      fats: {
        primary: {
          name: 'Part-Skim Mozzarella',
          baseAmount: 50,
          unit: 'g',
          scaling: { min: 40, max: 60 }
        }
      },
      vegetables: {
        primary: {
          name: 'Pizza Sauce & Veggies',
          baseAmount: 150,
          unit: 'g',
          description: 'mushrooms, peppers, onions'
        }
      }
    },
    alternatives: {
      proteins: ['Lean Sausage', 'Grilled Chicken'],
      carbs: ['Cauliflower Crust', 'Whole Wheat Crust'],
      toppings: ['Extra Veggies', 'Light Cheese']
    },
    rules: {
      minProtein: 40,
      maxFat: 25,
      vegRatio: 0.2
    },
    scaling: {
      calorieRange: [600, 900],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 48,
      fatPercent: 22
    },
    notes: 'Satisfying post-workout refeed'
  },

  {
    id: 'day_meal_022',
    name: 'Recovery Salmon Plate',
    categories: ['post_workout_integrated', 'anti_inflammatory'],
    dietTypes: ['pescatarian', 'gluten_free'],
    complexity: 'moderate',
    pattern: 'high_protein_moderate_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'not_ideal',
      postWorkout: '60-180min'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Grilled Salmon',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        }
      },
      carbs: {
        primary: {
          name: 'Sweet Potato',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
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
          name: 'From Salmon',
          baseAmount: 0,
          unit: 'g'
        },
        secondary: {
          name: 'Olive Oil Drizzle',
          baseAmount: 10,
          unit: 'ml'
        }
      },
      vegetables: {
        primary: {
          name: 'Roasted Vegetables',
          baseAmount: 200,
          unit: 'g',
          description: 'zucchini, bell peppers, onions'
        }
      }
    },
    alternatives: {
      proteins: ['Tuna Steak', 'Mahi Mahi', 'Trout'],
      carbs: ['White Rice', 'Pasta', 'Couscous'],
      vegetables: ['Asparagus', 'Brussels Sprouts']
    },
    rules: {
      minProtein: 35,
      maxFat: 25,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [550, 800],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 40,
      fatPercent: 25
    },
    notes: 'Omega-3 rich for recovery'
  },

  {
    id: 'day_meal_023',
    name: 'Mass Gainer Pasta',
    categories: ['post_workout_integrated', 'bulking'],
    dietTypes: ['omnivore'],
    complexity: 'simple',
    pattern: 'high_protein_very_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: '30-120min'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Meat Sauce (beef & turkey)',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      carbs: {
        primary: {
          name: 'Penne Pasta',
          baseAmount: 120,
          unit: 'g',
          dry: true,
          scaling: { min: 100, max: 150 }
        },
        secondary: {
          name: 'Garlic Bread',
          baseAmount: 60,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Parmesan Cheese',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 20, max: 40 }
        }
      },
      vegetables: {
        primary: {
          name: 'Caesar Salad',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Meatballs', 'Italian Sausage'],
      carbs: ['Rigatoni', 'Spaghetti', 'Lasagna'],
      additions: ['Extra Cheese', 'Olive Oil']
    },
    rules: {
      minProtein: 45,
      maxFat: 25,
      vegRatio: 0.15
    },
    scaling: {
      calorieRange: [700, 1000],
      proteinPriority: false,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 25,
      carbPercent: 55,
      fatPercent: 20
    },
    notes: 'High calorie for serious mass gain'
  },

  {
    id: 'day_meal_024',
    name: 'Quick Recovery Wrap',
    categories: ['post_workout_integrated', 'convenient'],
    dietTypes: ['omnivore'],
    complexity: 'simple',
    pattern: 'high_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: 'not_ideal',
      postWorkout: '0-45min'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Grilled Chicken Strips',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        }
      },
      carbs: {
        primary: {
          name: 'Large Tortilla',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        },
        secondary: {
          name: 'White Rice',
          baseAmount: 150,
          unit: 'g',
          cooked: true
        }
      },
      fats: {
        primary: {
          name: 'Light Ranch Dressing',
          baseAmount: 20,
          unit: 'ml',
          scaling: { min: 15, max: 30 }
        }
      },
      vegetables: {
        primary: {
          name: 'Lettuce & Tomato',
          baseAmount: 80,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Turkey', 'Tuna', 'Roast Beef'],
      carbs: ['Pita', 'Naan', 'Extra Rice'],
      sauces: ['BBQ Sauce', 'Buffalo Sauce']
    },
    rules: {
      minProtein: 35,
      maxFat: 12,
      vegRatio: 0.15
    },
    scaling: {
      calorieRange: [500, 750],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 53,
      fatPercent: 12
    },
    notes: 'Fast, portable post-workout option'
  },

  {
    id: 'day_meal_025',
    name: 'Athlete\'s Stir Fry Recovery',
    categories: ['post_workout_integrated', 'balanced'],
    dietTypes: ['omnivore', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'high_protein_high_carb_moderate_fat',
    workoutTiming: {
      preWorkout: 'not_ideal',
      postWorkout: '45-120min'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Beef Sirloin Strips',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      carbs: {
        primary: {
          name: 'Jasmine Rice',
          baseAmount: 250,
          unit: 'g',
          cooked: true,
          scaling: { min: 200, max: 300 }
        },
        secondary: {
          name: 'Rice Noodles',
          baseAmount: 50,
          unit: 'g',
          dry: true
        }
      },
      fats: {
        primary: {
          name: 'Sesame Oil',
          baseAmount: 10,
          unit: 'ml',
          scaling: { min: 8, max: 15 }
        },
        secondary: {
          name: 'Cashews',
          baseAmount: 15,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Mixed Stir Fry Veggies',
          baseAmount: 200,
          unit: 'g',
          description: 'broccoli, carrots, snap peas, bok choy'
        }
      },
      sauce: {
        name: 'Ginger Soy Sauce',
        baseAmount: 40,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Chicken', 'Shrimp', 'Tofu'],
      carbs: ['Brown Rice', 'Quinoa', 'Lo Mein Noodles'],
      vegetables: ['Bean Sprouts', 'Water Chestnuts', 'Mushrooms']
    },
    rules: {
      minProtein: 35,
      maxFat: 20,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [600, 900],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 50,
      fatPercent: 20
    },
    notes: 'Nutrient-dense recovery meal'
  },

  // ========== ADDITIONAL OMNIVORE OPTIONS (5 templates) ==========
  
  {
    id: 'day_meal_026',
    name: 'Lamb Kofta Power Bowl',
    categories: ['standard_meals', 'international'],
    dietTypes: ['omnivore'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Ground Lamb',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        }
      },
      carbs: {
        primary: {
          name: 'Couscous',
          baseAmount: 180,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 250 }
        }
      },
      fats: {
        primary: {
          name: 'Tahini',
          baseAmount: 20,
          unit: 'g',
          scaling: { min: 15, max: 30 }
        },
        secondary: {
          name: 'Pine Nuts',
          baseAmount: 15,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Greek Salad Mix',
          baseAmount: 150,
          unit: 'g',
          description: 'tomatoes, cucumber, red onion'
        },
        secondary: {
          name: 'Fresh Mint',
          baseAmount: 10,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Tzatziki',
        baseAmount: 50,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Ground Beef', 'Ground Turkey'],
      carbs: ['Bulgur', 'Rice', 'Flatbread'],
      sauces: ['Hummus', 'Garlic Sauce']
    },
    rules: {
      minProtein: 32,
      maxFat: 28,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [500, 750],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 42,
      fatPercent: 28
    },
    notes: 'Mediterranean flavors, spiced lamb kofta'
  },

  {
    id: 'day_meal_027',
    name: 'Duck Breast Asian Fusion',
    categories: ['standard_meals', 'gourmet'],
    dietTypes: ['omnivore', 'dairy_free'],
    complexity: 'complex',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '180min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Duck Breast',
          baseAmount: 140,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        }
      },
      carbs: {
        primary: {
          name: 'Soba Noodles',
          baseAmount: 80,
          unit: 'g',
          dry: true,
          scaling: { min: 60, max: 100 }
        },
        secondary: {
          name: 'Edamame',
          baseAmount: 80,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Sesame Oil',
          baseAmount: 10,
          unit: 'ml',
          scaling: { min: 8, max: 15 }
        },
        secondary: {
          name: 'From Duck',
          baseAmount: 0,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Bok Choy',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Shiitake Mushrooms',
          baseAmount: 80,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Hoisin Glaze',
        baseAmount: 30,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Chicken Thighs', 'Pork Tenderloin'],
      carbs: ['Udon Noodles', 'Brown Rice'],
      vegetables: ['Chinese Broccoli', 'Snow Peas']
    },
    rules: {
      minProtein: 30,
      maxFat: 25,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [500, 700],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 28,
      carbPercent: 47,
      fatPercent: 25
    },
    notes: 'Restaurant-quality, render duck skin crispy'
  },

  {
    id: 'day_meal_028',
    name: 'Bison Chili Mac',
    categories: ['standard_meals', 'comfort_food'],
    dietTypes: ['omnivore'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'good'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Ground Bison',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      carbs: {
        primary: {
          name: 'Whole Wheat Pasta',
          baseAmount: 80,
          unit: 'g',
          dry: true,
          scaling: { min: 60, max: 100 }
        },
        secondary: {
          name: 'Black Beans',
          baseAmount: 80,
          unit: 'g',
          cooked: true
        }
      },
      fats: {
        primary: {
          name: 'Cheddar Cheese',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 50 }
        }
      },
      vegetables: {
        primary: {
          name: 'Diced Tomatoes',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Bell Peppers & Onions',
          baseAmount: 100,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Chili Seasoning',
        baseAmount: 10,
        unit: 'g'
      }
    },
    alternatives: {
      proteins: ['Lean Ground Beef', 'Ground Turkey'],
      carbs: ['Rice Pasta', 'Quinoa Pasta'],
      cheese: ['Monterey Jack', 'Greek Yogurt']
    },
    rules: {
      minProtein: 38,
      maxFat: 22,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [600, 850],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 32,
      carbPercent: 46,
      fatPercent: 22
    },
    notes: 'High protein comfort food, one-pot meal'
  },

  {
    id: 'day_meal_029',
    name: 'Venison Steak & Root Veggies',
    categories: ['standard_meals', 'game_meat'],
    dietTypes: ['omnivore', 'gluten_free', 'paleo_friendly'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '150min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Venison Steak',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      carbs: {
        primary: {
          name: 'Roasted Root Vegetables',
          baseAmount: 250,
          unit: 'g',
          scaling: { min: 200, max: 300 },
          description: 'carrots, parsnips, turnips'
        }
      },
      fats: {
        primary: {
          name: 'Ghee',
          baseAmount: 15,
          unit: 'g',
          scaling: { min: 10, max: 20 }
        },
        secondary: {
          name: 'Walnuts',
          baseAmount: 15,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Roasted Brussels Sprouts',
          baseAmount: 150,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Red Wine Reduction',
        baseAmount: 30,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Elk', 'Wild Boar', 'Grass-Fed Beef'],
      carbs: ['Sweet Potatoes', 'Butternut Squash'],
      fats: ['Olive Oil', 'Duck Fat']
    },
    rules: {
      minProtein: 35,
      maxFat: 22,
      vegRatio: 0.35
    },
    scaling: {
      calorieRange: [500, 750],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 43,
      fatPercent: 22
    },
    notes: 'Lean game meat, earthy flavors'
  },

  {
    id: 'day_meal_030',
    name: 'Korean BBQ Beef Bowl',
    categories: ['standard_meals', 'asian'],
    dietTypes: ['omnivore', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'good'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Beef Bulgogi (marinated)',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      carbs: {
        primary: {
          name: 'White Rice',
          baseAmount: 200,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 250 }
        }
      },
      fats: {
        primary: {
          name: 'Sesame Oil',
          baseAmount: 10,
          unit: 'ml',
          scaling: { min: 8, max: 15 }
        },
        secondary: {
          name: 'Sesame Seeds',
          baseAmount: 10,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Kimchi',
          baseAmount: 80,
          unit: 'g'
        },
        secondary: {
          name: 'Bean Sprouts & Spinach',
          baseAmount: 150,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Gochujang Sauce',
        baseAmount: 30,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Pork Belly', 'Chicken Thighs'],
      carbs: ['Brown Rice', 'Glass Noodles'],
      vegetables: ['Pickled Radish', 'Cucumber']
    },
    rules: {
      minProtein: 32,
      maxFat: 20,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [550, 800],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 50,
      fatPercent: 20
    },
    notes: 'Fermented foods for gut health'
  },

  // ========== PESCATARIAN OPTIONS (5 templates) ==========
  
  {
    id: 'day_meal_031',
    name: 'Grilled Prawns & Quinoa Salad',
    categories: ['standard_meals', 'seafood'],
    dietTypes: ['pescatarian', 'gluten_free'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Prawns (large)',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        }
      },
      carbs: {
        primary: {
          name: 'Quinoa',
          baseAmount: 185,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 220 }
        }
      },
      fats: {
        primary: {
          name: 'Olive Oil',
          baseAmount: 15,
          unit: 'ml',
          scaling: { min: 10, max: 20 }
        },
        secondary: {
          name: 'Feta Cheese',
          baseAmount: 30,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Mixed Greens',
          baseAmount: 100,
          unit: 'g'
        },
        secondary: {
          name: 'Cherry Tomatoes & Cucumber',
          baseAmount: 150,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Lemon Herb Vinaigrette',
        baseAmount: 30,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Scallops', 'Calamari', 'Grilled Fish'],
      carbs: ['Couscous', 'Brown Rice', 'Farro'],
      fats: ['Avocado', 'Olives']
    },
    rules: {
      minProtein: 30,
      maxFat: 22,
      vegRatio: 0.35
    },
    scaling: {
      calorieRange: [450, 650],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 32,
      carbPercent: 43,
      fatPercent: 25
    },
    notes: 'Light yet filling, high in selenium'
  },

  {
    id: 'day_meal_032',
    name: 'Miso Glazed Sea Bass',
    categories: ['standard_meals', 'japanese'],
    dietTypes: ['pescatarian', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Sea Bass',
          baseAmount: 160,
          unit: 'g',
          scaling: { min: 130, max: 200 }
        }
      },
      carbs: {
        primary: {
          name: 'Sushi Rice',
          baseAmount: 200,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Edamame',
          baseAmount: 80,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'From Fish',
          baseAmount: 0,
          unit: 'g'
        },
        secondary: {
          name: 'Sesame Oil',
          baseAmount: 10,
          unit: 'ml'
        }
      },
      vegetables: {
        primary: {
          name: 'Steamed Baby Bok Choy',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Pickled Ginger',
          baseAmount: 20,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Miso Glaze',
        baseAmount: 40,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Black Cod', 'Salmon', 'Halibut'],
      carbs: ['Brown Rice', 'Soba Noodles'],
      vegetables: ['Asparagus', 'Green Beans']
    },
    rules: {
      minProtein: 32,
      maxFat: 18,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [500, 700],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 52,
      fatPercent: 18
    },
    notes: 'Umami-rich, omega-3 fatty acids'
  },

  {
    id: 'day_meal_033',
    name: 'Seafood Paella Bowl',
    categories: ['standard_meals', 'spanish'],
    dietTypes: ['pescatarian', 'gluten_free', 'dairy_free'],
    complexity: 'complex',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '150min+',
      postWorkout: 'good'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Mixed Seafood',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 },
          description: 'prawns, mussels, calamari'
        }
      },
      carbs: {
        primary: {
          name: 'Paella Rice',
          baseAmount: 80,
          unit: 'g',
          dry: true,
          scaling: { min: 60, max: 100 }
        }
      },
      fats: {
        primary: {
          name: 'Olive Oil',
          baseAmount: 15,
          unit: 'ml',
          scaling: { min: 12, max: 20 }
        }
      },
      vegetables: {
        primary: {
          name: 'Bell Peppers & Peas',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Tomatoes & Garlic',
          baseAmount: 100,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Saffron Broth',
        baseAmount: 200,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['All Prawns', 'Add White Fish'],
      carbs: ['Arborio Rice', 'Cauliflower Rice'],
      additions: ['Lemon Wedges', 'Aioli']
    },
    rules: {
      minProtein: 35,
      maxFat: 20,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [550, 800],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 32,
      carbPercent: 48,
      fatPercent: 20
    },
    notes: 'Traditional Spanish flavors, high protein'
  },

  {
    id: 'day_meal_034',
    name: 'Smoked Mackerel Power Salad',
    categories: ['standard_meals', 'omega3_rich'],
    dietTypes: ['pescatarian', 'gluten_free', 'keto_friendly'],
    complexity: 'simple',
    pattern: 'protein_low_carb_high_fat_veggie',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Smoked Mackerel',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        }
      },
      carbs: {
        primary: {
          name: 'Mixed Beans',
          baseAmount: 100,
          unit: 'g',
          cooked: true,
          scaling: { min: 0, max: 150 }
        }
      },
      fats: {
        primary: {
          name: 'From Fish',
          baseAmount: 0,
          unit: 'g'
        },
        secondary: {
          name: 'Avocado',
          baseAmount: 80,
          unit: 'g'
        },
        tertiary: {
          name: 'Pumpkin Seeds',
          baseAmount: 20,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Mixed Salad Greens',
          baseAmount: 200,
          unit: 'g'
        },
        secondary: {
          name: 'Roasted Beets',
          baseAmount: 100,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Horseradish Dressing',
        baseAmount: 30,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Smoked Trout', 'Hot Smoked Salmon'],
      carbs: ['Quinoa', 'Sweet Potato'],
      vegetables: ['Fennel', 'Radishes']
    },
    rules: {
      minProtein: 28,
      maxCarbs: 30,
      vegRatio: 0.4
    },
    scaling: {
      calorieRange: [450, 650],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 28,
      carbPercent: 22,
      fatPercent: 50
    },
    notes: 'Very high omega-3, anti-inflammatory'
  },

  {
    id: 'day_meal_035',
    name: 'Crab Cake Sandwich',
    categories: ['standard_meals', 'seafood'],
    dietTypes: ['pescatarian'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Crab Meat',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        }
      },
      carbs: {
        primary: {
          name: 'Whole Wheat Bun',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        },
        secondary: {
          name: 'Sweet Potato Fries',
          baseAmount: 100,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Avocado',
          baseAmount: 50,
          unit: 'g',
          scaling: { min: 40, max: 70 }
        },
        secondary: {
          name: 'Light Mayo (in crab cake)',
          baseAmount: 15,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Coleslaw',
          baseAmount: 100,
          unit: 'g'
        },
        secondary: {
          name: 'Lettuce & Tomato',
          baseAmount: 80,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Remoulade Sauce',
        baseAmount: 30,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Lobster', 'Shrimp Burger'],
      carbs: ['Brioche Bun', 'Lettuce Wrap'],
      sides: ['Side Salad', 'Roasted Vegetables']
    },
    rules: {
      minProtein: 28,
      maxFat: 25,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [500, 750],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 28,
      carbPercent: 47,
      fatPercent: 25
    },
    notes: 'Maryland-style, mostly crab meat'
  },

  // ========== VEGETARIAN OPTIONS (5 templates) ==========
  
  {
    id: 'day_meal_036',
    name: 'Mediterranean Chickpea Power Bowl',
    categories: ['standard_meals', 'plant_protein'],
    dietTypes: ['vegetarian', 'vegan_option', 'gluten_free'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'good'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Roasted Chickpeas',
          baseAmount: 200,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Feta Cheese',
          baseAmount: 40,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Quinoa',
          baseAmount: 185,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 220 }
        }
      },
      fats: {
        primary: {
          name: 'Tahini',
          baseAmount: 20,
          unit: 'g',
          scaling: { min: 15, max: 30 }
        },
        secondary: {
          name: 'Olive Oil',
          baseAmount: 10,
          unit: 'ml'
        }
      },
      vegetables: {
        primary: {
          name: 'Roasted Red Peppers',
          baseAmount: 100,
          unit: 'g'
        },
        secondary: {
          name: 'Cucumber & Tomatoes',
          baseAmount: 150,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Lemon Tahini Dressing',
        baseAmount: 40,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['White Beans', 'Lentils', 'Tofu'],
      carbs: ['Bulgur', 'Couscous', 'Brown Rice'],
      cheese: ['Goat Cheese', 'Skip for vegan']
    },
    rules: {
      minProtein: 20,
      maxFat: 28,
      vegRatio: 0.35
    },
    scaling: {
      calorieRange: [500, 750],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 52,
      fatPercent: 28
    },
    notes: 'High fiber, complete protein with quinoa'
  },

  {
    id: 'day_meal_037',
    name: 'Egg Fried Rice Supreme',
    categories: ['standard_meals', 'asian'],
    dietTypes: ['vegetarian'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'good'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Eggs (large)',
          baseAmount: 3,
          unit: 'count',
          scaling: { min: 2, max: 4 }
        },
        secondary: {
          name: 'Edamame',
          baseAmount: 80,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Day-old Rice',
          baseAmount: 250,
          unit: 'g',
          cooked: true,
          scaling: { min: 200, max: 300 }
        }
      },
      fats: {
        primary: {
          name: 'Sesame Oil',
          baseAmount: 15,
          unit: 'ml',
          scaling: { min: 10, max: 20 }
        },
        secondary: {
          name: 'Cashews',
          baseAmount: 20,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Mixed Stir-fry Vegetables',
          baseAmount: 200,
          unit: 'g',
          description: 'peas, carrots, corn'
        },
        secondary: {
          name: 'Green Onions',
          baseAmount: 30,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Soy Sauce & Rice Wine',
        baseAmount: 30,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Tofu', 'Extra Eggs'],
      carbs: ['Brown Rice', 'Cauliflower Rice'],
      additions: ['Kimchi', 'Sriracha']
    },
    rules: {
      minProtein: 22,
      maxFat: 25,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [500, 750],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 55,
      fatPercent: 25
    },
    notes: 'Quick one-pan meal, use high heat'
  },

  {
    id: 'day_meal_038',
    name: 'Caprese Panini & Soup',
    categories: ['standard_meals', 'italian'],
    dietTypes: ['vegetarian'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Fresh Mozzarella',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        },
        secondary: {
          name: 'White Bean Soup',
          baseAmount: 250,
          unit: 'ml'
        }
      },
      carbs: {
        primary: {
          name: 'Ciabatta Bread',
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
          scaling: { min: 15, max: 30 }
        },
        secondary: {
          name: 'Olive Oil',
          baseAmount: 10,
          unit: 'ml'
        }
      },
      vegetables: {
        primary: {
          name: 'Fresh Tomatoes',
          baseAmount: 100,
          unit: 'g'
        },
        secondary: {
          name: 'Fresh Basil',
          baseAmount: 15,
          unit: 'g'
        },
        tertiary: {
          name: 'In Soup',
          baseAmount: 100,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Balsamic Glaze',
        baseAmount: 15,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Ricotta', 'Halloumi'],
      bread: ['Focaccia', 'Sourdough'],
      soup: ['Minestrone', 'Tomato Soup']
    },
    rules: {
      minProtein: 20,
      maxFat: 30,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [550, 800],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 18,
      carbPercent: 52,
      fatPercent: 30
    },
    notes: 'Classic Italian combo, comfort food'
  },

  {
    id: 'day_meal_039',
    name: 'Loaded Black Bean Burrito Bowl',
    categories: ['standard_meals', 'mexican'],
    dietTypes: ['vegetarian', 'vegan_option'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'good'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Black Beans',
          baseAmount: 200,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Shredded Cheese',
          baseAmount: 40,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Brown Rice',
          baseAmount: 200,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Corn',
          baseAmount: 80,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Guacamole',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        },
        secondary: {
          name: 'Sour Cream',
          baseAmount: 30,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Pico de Gallo',
          baseAmount: 100,
          unit: 'g'
        },
        secondary: {
          name: 'Lettuce & Jalapeños',
          baseAmount: 80,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Salsa Verde',
        baseAmount: 50,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Pinto Beans', 'Refried Beans'],
      cheese: ['Vegan Cheese', 'Skip for vegan'],
      additions: ['Lime', 'Cilantro', 'Hot Sauce']
    },
    rules: {
      minProtein: 20,
      minFiber: 15,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [600, 900],
      carbPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 15,
      carbPercent: 55,
      fatPercent: 30
    },
    notes: 'High fiber, filling, customizable'
  },

  {
    id: 'day_meal_040',
    name: 'Spinach & Ricotta Stuffed Shells',
    categories: ['standard_meals', 'italian'],
    dietTypes: ['vegetarian'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '150min+',
      postWorkout: 'good'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Ricotta Cheese',
          baseAmount: 120,
          unit: 'g',
          scaling: { min: 100, max: 150 }
        },
        secondary: {
          name: 'Eggs (in filling)',
          baseAmount: 1,
          unit: 'count'
        }
      },
      carbs: {
        primary: {
          name: 'Jumbo Pasta Shells',
          baseAmount: 80,
          unit: 'g',
          dry: true,
          scaling: { min: 60, max: 100 }
        }
      },
      fats: {
        primary: {
          name: 'Mozzarella Cheese',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 50 }
        },
        secondary: {
          name: 'Parmesan Cheese',
          baseAmount: 20,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Spinach (in filling)',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Marinara Sauce',
          baseAmount: 200,
          unit: 'ml'
        }
      },
      sauce: {
        name: 'Bechamel Sauce',
        baseAmount: 50,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Cottage Cheese', 'Tofu Ricotta'],
      pasta: ['Manicotti', 'Cannelloni'],
      vegetables: ['Kale', 'Swiss Chard']
    },
    rules: {
      minProtein: 25,
      maxFat: 28,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [550, 800],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 22,
      carbPercent: 48,
      fatPercent: 30
    },
    notes: 'Comfort food, make ahead friendly'
  },

  // ========== VEGAN OPTIONS (5 templates) ==========
  
  {
    id: 'day_meal_041',
    name: 'Tempeh Buddha Bowl',
    categories: ['standard_meals', 'plant_based'],
    dietTypes: ['vegan', 'gluten_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'good'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Marinated Tempeh',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        }
      },
      carbs: {
        primary: {
          name: 'Brown Rice',
          baseAmount: 200,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Sweet Potato',
          baseAmount: 100,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Tahini',
          baseAmount: 25,
          unit: 'g',
          scaling: { min: 20, max: 35 }
        },
        secondary: {
          name: 'Hemp Seeds',
          baseAmount: 15,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Steamed Kale',
          baseAmount: 100,
          unit: 'g'
        },
        secondary: {
          name: 'Shredded Carrots & Cabbage',
          baseAmount: 150,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Miso Ginger Dressing',
        baseAmount: 40,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Tofu', 'Seitan', 'Black Beans'],
      carbs: ['Quinoa', 'Farro', 'Buckwheat'],
      dressing: ['Peanut Sauce', 'Tamari']
    },
    rules: {
      minProtein: 22,
      minFiber: 12,
      vegRatio: 0.35
    },
    scaling: {
      calorieRange: [550, 800],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 52,
      fatPercent: 28
    },
    notes: 'Nutrient-dense, fermented protein'
  },

  {
    id: 'day_meal_042',
    name: 'Lentil Tikka Masala',
    categories: ['standard_meals', 'indian'],
    dietTypes: ['vegan', 'gluten_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '150min+',
      postWorkout: 'good'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Red Lentils',
          baseAmount: 80,
          unit: 'g',
          dry: true,
          scaling: { min: 60, max: 100 }
        },
        secondary: {
          name: 'Chickpeas',
          baseAmount: 100,
          unit: 'g',
          cooked: true
        }
      },
      carbs: {
        primary: {
          name: 'Basmati Rice',
          baseAmount: 200,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Naan (vegan)',
          baseAmount: 60,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Coconut Milk',
          baseAmount: 100,
          unit: 'ml',
          scaling: { min: 80, max: 120 }
        },
        secondary: {
          name: 'Cashews (in sauce)',
          baseAmount: 20,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Tomatoes (in sauce)',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Spinach',
          baseAmount: 100,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Tikka Masala Sauce',
        baseAmount: 200,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Black Lentils', 'Tofu'],
      carbs: ['Cauliflower Rice', 'Quinoa'],
      additions: ['Cilantro', 'Lime']
    },
    rules: {
      minProtein: 20,
      minFiber: 15,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [600, 850],
      carbPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 18,
      carbPercent: 57,
      fatPercent: 25
    },
    notes: 'High fiber, warming spices'
  },

  {
    id: 'day_meal_043',
    name: 'Quinoa Black Bean Power Burger',
    categories: ['standard_meals', 'burger'],
    dietTypes: ['vegan'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'good'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Black Bean Patty',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        },
        secondary: {
          name: 'Quinoa (in patty)',
          baseAmount: 50,
          unit: 'g',
          cooked: true
        }
      },
      carbs: {
        primary: {
          name: 'Whole Wheat Bun',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        },
        secondary: {
          name: 'Sweet Potato Fries',
          baseAmount: 150,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Avocado',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        },
        secondary: {
          name: 'Tahini Sauce',
          baseAmount: 20,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Lettuce & Tomato',
          baseAmount: 100,
          unit: 'g'
        },
        secondary: {
          name: 'Pickles & Onions',
          baseAmount: 50,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Chipotle Aioli (vegan)',
        baseAmount: 30,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Lentil Patty', 'Beyond Burger'],
      bun: ['Lettuce Wrap', 'Sprouted Grain Bun'],
      toppings: ['Vegan Cheese', 'Sprouts']
    },
    rules: {
      minProtein: 20,
      minFiber: 12,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [600, 850],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 18,
      carbPercent: 52,
      fatPercent: 30
    },
    notes: 'Satisfying plant burger, high fiber'
  },

  {
    id: 'day_meal_044',
    name: 'Tofu Pad Thai',
    categories: ['standard_meals', 'thai'],
    dietTypes: ['vegan', 'gluten_free_option'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '90min+',
      postWorkout: 'good'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Firm Tofu',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      carbs: {
        primary: {
          name: 'Rice Noodles',
          baseAmount: 80,
          unit: 'g',
          dry: true,
          scaling: { min: 60, max: 100 }
        }
      },
      fats: {
        primary: {
          name: 'Peanuts (crushed)',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 20, max: 40 }
        },
        secondary: {
          name: 'Sesame Oil',
          baseAmount: 10,
          unit: 'ml'
        }
      },
      vegetables: {
        primary: {
          name: 'Bean Sprouts',
          baseAmount: 100,
          unit: 'g'
        },
        secondary: {
          name: 'Carrots & Scallions',
          baseAmount: 100,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Tamarind Sauce',
        baseAmount: 50,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Tempeh', 'Extra Tofu'],
      noodles: ['Zucchini Noodles', 'Shirataki'],
      additions: ['Lime', 'Chili Flakes']
    },
    rules: {
      minProtein: 20,
      maxFat: 30,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [500, 750],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 50,
      fatPercent: 30
    },
    notes: 'Classic Thai street food, vegan version'
  },

  {
    id: 'day_meal_045',
    name: 'Chickpea Curry Power Bowl',
    categories: ['standard_meals', 'indian'],
    dietTypes: ['vegan', 'gluten_free'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: '120min+',
      postWorkout: 'good'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Chickpeas',
          baseAmount: 200,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 250 }
        }
      },
      carbs: {
        primary: {
          name: 'Brown Rice',
          baseAmount: 200,
          unit: 'g',
          cooked: true,
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Papadum',
          baseAmount: 20,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Coconut Oil',
          baseAmount: 15,
          unit: 'ml',
          scaling: { min: 10, max: 20 }
        },
        secondary: {
          name: 'Coconut Flakes',
          baseAmount: 15,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Spinach',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Tomatoes & Onions',
          baseAmount: 150,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Curry Sauce',
        baseAmount: 200,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['White Beans', 'Lentils'],
      carbs: ['Quinoa', 'Cauliflower Rice'],
      additions: ['Mango Chutney', 'Pickle']
    },
    rules: {
      minProtein: 18,
      minFiber: 15,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [550, 800],
      carbPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 16,
      carbPercent: 59,
      fatPercent: 25
    },
    notes: 'Warming, high fiber, meal prep friendly'
  }
];

// Export the templates
module.exports = {
  dayMealsTemplates
};