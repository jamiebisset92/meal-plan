const dinnerTemplates = [
  // ========== STANDARD DINNERS (10 templates) ==========
  {
    id: 'dinner_001',
    name: 'Classic Steak Dinner',
    categories: ['standard_dinners', 'traditional'],
    dietTypes: ['omnivore', 'gluten_free', 'keto_friendly'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Ribeye Steak',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      carbs: {
        primary: {
          name: 'Baked Sweet Potato',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 300 }
        }
      },
      fats: {
        primary: {
          name: 'Compound Butter',
          baseAmount: 15,
          unit: 'g',
          scaling: { min: 10, max: 20 }
        },
        secondary: {
          name: 'Olive Oil (for vegetables)',
          baseAmount: 10,
          unit: 'ml'
        }
      },
      vegetables: {
        primary: {
          name: 'Grilled Asparagus',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Mixed Green Salad',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Filet Mignon', 'Strip Steak', 'Pork Chop'],
      carbs: ['Roasted Potatoes', 'Wild Rice', 'Quinoa'],
      vegetables: ['Brussels Sprouts', 'Green Beans', 'Broccoli']
    },
    rules: {
      minProtein: 40,
      maxFat: 35,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [600, 900],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 35,
      fatPercent: 30
    },
    notes: 'Perfect end-of-day meal, high satiety'
  },

  {
    id: 'dinner_002',
    name: 'Lean Turkey Chili Bowl',
    categories: ['standard_dinners', 'comfort_food'],
    dietTypes: ['omnivore', 'gluten_free'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Ground Turkey (93/7)',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        },
        secondary: {
          name: 'Kidney Beans',
          baseAmount: 100,
          unit: 'g',
          cooked: true
        }
      },
      carbs: {
        primary: {
          name: 'Brown Rice',
          baseAmount: 150,
          unit: 'g',
          cooked: true,
          scaling: { min: 100, max: 200 }
        }
      },
      fats: {
        primary: {
          name: 'Shredded Cheddar',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 20, max: 40 }
        },
        secondary: {
          name: 'Avocado',
          baseAmount: 50,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Chili Base',
          baseAmount: 200,
          unit: 'ml',
          description: 'tomatoes, onions, peppers, spices'
        }
      },
      sauce: {
        name: 'Greek Yogurt',
        baseAmount: 50,
        unit: 'g'
      }
    },
    alternatives: {
      proteins: ['Lean Ground Beef', 'Chicken', 'Black Beans'],
      carbs: ['Quinoa', 'Cornbread', 'Baked Potato'],
      toppings: ['Sour Cream', 'Green Onions', 'Cilantro']
    },
    rules: {
      minProtein: 35,
      maxFat: 25,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [550, 850],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 40,
      fatPercent: 25
    },
    notes: 'High fiber, warming, meal prep friendly'
  },

  {
    id: 'dinner_003',
    name: 'Herb Crusted Salmon',
    categories: ['standard_dinners', 'elegant'],
    dietTypes: ['pescatarian', 'gluten_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Atlantic Salmon',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        }
      },
      carbs: {
        primary: {
          name: 'Garlic Mashed Cauliflower',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Quinoa Pilaf',
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
          name: 'Lemon Butter Sauce',
          baseAmount: 15,
          unit: 'ml'
        }
      },
      vegetables: {
        primary: {
          name: 'Roasted Rainbow Vegetables',
          baseAmount: 200,
          unit: 'g',
          description: 'carrots, zucchini, bell peppers'
        }
      }
    },
    alternatives: {
      proteins: ['Halibut', 'Sea Bass', 'Mahi Mahi'],
      carbs: ['Wild Rice', 'Couscous', 'Roasted Potatoes'],
      vegetables: ['Steamed Broccoli', 'Sauteed Spinach']
    },
    rules: {
      minProtein: 35,
      maxFat: 30,
      vegRatio: 0.35
    },
    scaling: {
      calorieRange: [500, 750],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 35,
      fatPercent: 30
    },
    notes: 'Omega-3 rich, anti-inflammatory'
  },

  {
    id: 'dinner_004',
    name: 'Chicken Parmesan Lightened',
    categories: ['standard_dinners', 'italian'],
    dietTypes: ['omnivore'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'good'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Breaded Chicken Breast',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        }
      },
      carbs: {
        primary: {
          name: 'Whole Wheat Spaghetti',
          baseAmount: 80,
          unit: 'g',
          dry: true,
          scaling: { min: 60, max: 100 }
        }
      },
      fats: {
        primary: {
          name: 'Part-Skim Mozzarella',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 50 }
        },
        secondary: {
          name: 'Parmesan Cheese',
          baseAmount: 15,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Marinara Sauce',
          baseAmount: 150,
          unit: 'ml'
        },
        secondary: {
          name: 'Caesar Salad',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Veal', 'Eggplant', 'Turkey Cutlet'],
      carbs: ['Zucchini Noodles', 'Regular Pasta', 'Polenta'],
      sauces: ['Arrabbiata', 'Vodka Sauce']
    },
    rules: {
      minProtein: 40,
      maxFat: 25,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [600, 900],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 40,
      fatPercent: 25
    },
    notes: 'Comfort food made healthier'
  },

  {
    id: 'dinner_005',
    name: 'Asian Lettuce Wraps',
    categories: ['standard_dinners', 'light'],
    dietTypes: ['omnivore', 'gluten_free', 'low_carb'],
    complexity: 'simple',
    pattern: 'protein_low_carb_moderate_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Ground Chicken',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        },
        secondary: {
          name: 'Water Chestnuts',
          baseAmount: 50,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Brown Rice (side)',
          baseAmount: 100,
          unit: 'g',
          cooked: true,
          scaling: { min: 0, max: 150 }
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
          name: 'Crushed Peanuts',
          baseAmount: 20,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Butter Lettuce Cups',
          baseAmount: 100,
          unit: 'g'
        },
        secondary: {
          name: 'Vegetable Mix',
          baseAmount: 150,
          unit: 'g',
          description: 'mushrooms, carrots, scallions'
        }
      },
      sauce: {
        name: 'Hoisin & Soy Sauce',
        baseAmount: 40,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Ground Turkey', 'Tofu Crumbles', 'Shrimp'],
      carbs: ['Quinoa', 'Rice Noodles', 'Skip for low carb'],
      vegetables: ['Cabbage Cups', 'Endive']
    },
    rules: {
      minProtein: 30,
      maxFat: 25,
      vegRatio: 0.4
    },
    scaling: {
      calorieRange: [400, 650],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 40,
      carbPercent: 30,
      fatPercent: 30
    },
    notes: 'Interactive dinner, great for low carb'
  },

  {
    id: 'dinner_006',
    name: 'Slow Cooker Beef Stew',
    categories: ['standard_dinners', 'hearty'],
    dietTypes: ['omnivore', 'dairy_free'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Beef Chuck (lean)',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      carbs: {
        primary: {
          name: 'Baby Potatoes',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Pearl Barley',
          baseAmount: 50,
          unit: 'g',
          cooked: true
        }
      },
      fats: {
        primary: {
          name: 'From Beef',
          baseAmount: 0,
          unit: 'g'
        },
        secondary: {
          name: 'Olive Oil',
          baseAmount: 10,
          unit: 'ml'
        }
      },
      vegetables: {
        primary: {
          name: 'Stew Vegetables',
          baseAmount: 250,
          unit: 'g',
          description: 'carrots, celery, onions, peas'
        }
      },
      sauce: {
        name: 'Beef Broth Base',
        baseAmount: 200,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Lamb', 'Venison', 'Chicken Thighs'],
      carbs: ['Sweet Potatoes', 'Parsnips', 'Turnips'],
      additions: ['Red Wine', 'Tomato Paste']
    },
    rules: {
      minProtein: 30,
      maxFat: 20,
      vegRatio: 0.4
    },
    scaling: {
      calorieRange: [500, 800],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 50,
      fatPercent: 20
    },
    notes: 'One-pot meal, great for meal prep'
  },

  {
    id: 'dinner_007',
    name: 'Shrimp & Zoodle Scampi',
    categories: ['standard_dinners', 'low_carb'],
    dietTypes: ['pescatarian', 'gluten_free', 'keto_friendly'],
    complexity: 'moderate',
    pattern: 'protein_low_carb_moderate_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Large Shrimp',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      carbs: {
        primary: {
          name: 'Zucchini Noodles',
          baseAmount: 300,
          unit: 'g',
          scaling: { min: 250, max: 400 }
        }
      },
      fats: {
        primary: {
          name: 'Garlic Butter',
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
          name: 'Cherry Tomatoes',
          baseAmount: 100,
          unit: 'g'
        },
        secondary: {
          name: 'Baby Spinach',
          baseAmount: 100,
          unit: 'g'
        }
      },
      sauce: {
        name: 'White Wine Lemon Sauce',
        baseAmount: 50,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Scallops', 'Calamari', 'White Fish'],
      carbs: ['Shirataki Noodles', 'Hearts of Palm Pasta', 'Add Regular Pasta'],
      vegetables: ['Asparagus', 'Artichoke Hearts']
    },
    rules: {
      minProtein: 35,
      maxFat: 30,
      vegRatio: 0.5
    },
    scaling: {
      calorieRange: [350, 550],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 45,
      carbPercent: 20,
      fatPercent: 35
    },
    notes: 'Light yet satisfying, very low carb'
  },

  {
    id: 'dinner_008',
    name: 'BBQ Chicken & Loaded Sweet Potato',
    categories: ['standard_dinners', 'american'],
    dietTypes: ['omnivore', 'gluten_free'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'good'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'BBQ Chicken Thighs',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        }
      },
      carbs: {
        primary: {
          name: 'Large Sweet Potato',
          baseAmount: 250,
          unit: 'g',
          scaling: { min: 200, max: 300 }
        }
      },
      fats: {
        primary: {
          name: 'Shredded Cheese',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 20, max: 40 }
        },
        secondary: {
          name: 'Greek Yogurt',
          baseAmount: 50,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Coleslaw',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Corn on the Cob',
          baseAmount: 100,
          unit: 'g'
        }
      },
      sauce: {
        name: 'BBQ Sauce',
        baseAmount: 50,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Pulled Pork', 'Brisket', 'BBQ Tofu'],
      carbs: ['Regular Potato', 'Mac & Cheese', 'Cornbread'],
      toppings: ['Bacon Bits', 'Green Onions', 'Butter']
    },
    rules: {
      minProtein: 35,
      maxFat: 25,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [600, 900],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 45,
      fatPercent: 25
    },
    notes: 'Comfort food, high satisfaction'
  },

  {
    id: 'dinner_009',
    name: 'Mediterranean Stuffed Peppers',
    categories: ['standard_dinners', 'mediterranean'],
    dietTypes: ['omnivore', 'gluten_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Ground Lamb (lean)',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        }
      },
      carbs: {
        primary: {
          name: 'Brown Rice',
          baseAmount: 150,
          unit: 'g',
          cooked: true,
          scaling: { min: 100, max: 200 }
        },
        secondary: {
          name: 'Pine Nuts',
          baseAmount: 20,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Feta Cheese',
          baseAmount: 40,
          unit: 'g',
          scaling: { min: 30, max: 50 }
        },
        secondary: {
          name: 'Olive Oil',
          baseAmount: 10,
          unit: 'ml'
        }
      },
      vegetables: {
        primary: {
          name: 'Bell Peppers (vessels)',
          baseAmount: 200,
          unit: 'g'
        },
        secondary: {
          name: 'Filling Vegetables',
          baseAmount: 100,
          unit: 'g',
          description: 'onions, tomatoes, herbs'
        }
      }
    },
    alternatives: {
      proteins: ['Ground Beef', 'Ground Turkey', 'Lentils'],
      carbs: ['Quinoa', 'Couscous', 'Orzo'],
      vegetables: ['Zucchini Boats', 'Tomatoes', 'Eggplant']
    },
    rules: {
      minProtein: 30,
      maxFat: 28,
      vegRatio: 0.35
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
    notes: 'Colorful, nutrient-dense, satisfying'
  },

  {
    id: 'dinner_010',
    name: 'Pork Tenderloin & Apple',
    categories: ['standard_dinners', 'seasonal'],
    dietTypes: ['omnivore', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Pork Tenderloin',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        }
      },
      carbs: {
        primary: {
          name: 'Roasted Butternut Squash',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Wild Rice Blend',
          baseAmount: 100,
          unit: 'g',
          cooked: true
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
          name: 'Pecans',
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
          name: 'Sautéed Apples',
          baseAmount: 100,
          unit: 'g'
        }
      },
      sauce: {
        name: 'Apple Cider Reduction',
        baseAmount: 30,
        unit: 'ml'
      }
    },
    alternatives: {
      proteins: ['Chicken Breast', 'Turkey Tenderloin'],
      carbs: ['Sweet Potato', 'Acorn Squash', 'Farro'],
      vegetables: ['Green Beans', 'Roasted Carrots']
    },
    rules: {
      minProtein: 35,
      maxFat: 25,
      vegRatio: 0.35
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
    notes: 'Fall flavors, balanced nutrition'
  },

  // ========== LIGHT/LOW-CARB DINNERS (5 templates) ==========
  {
    id: 'dinner_011',
    name: 'Cauliflower Crust Pizza',
    categories: ['light_dinners', 'low_carb'],
    dietTypes: ['omnivore', 'gluten_free', 'keto_friendly'],
    complexity: 'moderate',
    pattern: 'protein_low_carb_moderate_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Italian Sausage (lean)',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 150 }
        },
        secondary: {
          name: 'Grilled Chicken',
          baseAmount: 80,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Cauliflower Crust',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      fats: {
        primary: {
          name: 'Mozzarella Cheese',
          baseAmount: 60,
          unit: 'g',
          scaling: { min: 40, max: 80 }
        },
        secondary: {
          name: 'Olive Oil',
          baseAmount: 10,
          unit: 'ml'
        }
      },
      vegetables: {
        primary: {
          name: 'Pizza Sauce',
          baseAmount: 80,
          unit: 'ml'
        },
        secondary: {
          name: 'Vegetable Toppings',
          baseAmount: 100,
          unit: 'g',
          description: 'mushrooms, peppers, onions, olives'
        }
      }
    },
    alternatives: {
      proteins: ['Turkey Pepperoni', 'Ground Beef'],
      bases: ['Almond Flour Crust', 'Chicken Crust'],
      vegetables: ['Spinach', 'Arugula', 'Sun-dried Tomatoes']
    },
    rules: {
      minProtein: 35,
      maxFat: 35,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [450, 700],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 25,
      fatPercent: 40
    },
    notes: 'Pizza night made healthy'
  },

  {
    id: 'dinner_012',
    name: 'Keto Taco Salad Bowl',
    categories: ['light_dinners', 'mexican', 'keto'],
    dietTypes: ['omnivore', 'gluten_free', 'keto'],
    complexity: 'simple',
    pattern: 'protein_very_low_carb_high_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Seasoned Ground Beef',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 200 }
        }
      },
      carbs: {
        primary: {
          name: 'Romaine Lettuce Base',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
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
          name: 'Shredded Cheese',
          baseAmount: 40,
          unit: 'g'
        },
        tertiary: {
          name: 'Sour Cream',
          baseAmount: 40,
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
          name: 'Jalapeños & Olives',
          baseAmount: 40,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Ground Turkey', 'Carnitas', 'Grilled Steak'],
      additions: ['Pork Rinds', 'Low-carb Tortilla Strips'],
      dressings: ['Ranch', 'Chipotle Mayo']
    },
    rules: {
      minProtein: 30,
      maxCarbs: 15,
      vegRatio: 0.4
    },
    scaling: {
      calorieRange: [500, 800],
      fatPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 25,
      carbPercent: 10,
      fatPercent: 65
    },
    notes: 'Very low carb, high satiety'
  },

  {
    id: 'dinner_013',
    name: 'Grilled Chicken Caesar',
    categories: ['light_dinners', 'classic'],
    dietTypes: ['omnivore', 'low_carb'],
    complexity: 'simple',
    pattern: 'protein_low_carb_moderate_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
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
          name: 'Croutons',
          baseAmount: 30,
          unit: 'g',
          scaling: { min: 0, max: 50 }
        }
      },
      fats: {
        primary: {
          name: 'Caesar Dressing',
          baseAmount: 40,
          unit: 'ml',
          scaling: { min: 30, max: 60 }
        },
        secondary: {
          name: 'Parmesan Cheese',
          baseAmount: 30,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Romaine Lettuce',
          baseAmount: 250,
          unit: 'g'
        },
        secondary: {
          name: 'Cherry Tomatoes',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Grilled Shrimp', 'Salmon', 'Steak Strips'],
      additions: ['Bacon Bits', 'Hard Boiled Egg', 'Anchovies'],
      dressings: ['Greek Yogurt Caesar', 'Avocado Caesar']
    },
    rules: {
      minProtein: 40,
      maxCarbs: 20,
      vegRatio: 0.5
    },
    scaling: {
      calorieRange: [400, 650],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 45,
      carbPercent: 15,
      fatPercent: 40
    },
    notes: 'Classic, filling, low carb option'
  },

  {
    id: 'dinner_014',
    name: 'Baked Cod & Vegetables',
    categories: ['light_dinners', 'clean'],
    dietTypes: ['pescatarian', 'gluten_free', 'dairy_free'],
    complexity: 'simple',
    pattern: 'protein_low_carb_low_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Cod Fillet',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      carbs: {
        primary: {
          name: 'Roasted Root Vegetables',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 100, max: 200 }
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
          name: 'Lemon Butter',
          baseAmount: 10,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Steamed Asparagus',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Mixed Green Salad',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Halibut', 'Tilapia', 'Sea Bass'],
      vegetables: ['Broccoli', 'Green Beans', 'Zucchini'],
      seasonings: ['Herbs de Provence', 'Cajun Spice']
    },
    rules: {
      minProtein: 40,
      maxFat: 20,
      vegRatio: 0.5
    },
    scaling: {
      calorieRange: [350, 550],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 50,
      carbPercent: 30,
      fatPercent: 20
    },
    notes: 'Very lean, high protein, clean'
  },

  {
    id: 'dinner_015',
    name: 'Turkey Meatball Zoodles',
    categories: ['light_dinners', 'italian', 'low_carb'],
    dietTypes: ['omnivore', 'gluten_free'],
    complexity: 'moderate',
    pattern: 'protein_very_low_carb_moderate_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Turkey Meatballs',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        }
      },
      carbs: {
        primary: {
          name: 'Zucchini Noodles',
          baseAmount: 300,
          unit: 'g',
          scaling: { min: 250, max: 400 }
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
          name: 'Parmesan Cheese',
          baseAmount: 25,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Marinara Sauce',
          baseAmount: 150,
          unit: 'ml'
        },
        secondary: {
          name: 'Fresh Basil & Garlic',
          baseAmount: 20,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Chicken Meatballs', 'Beef Meatballs'],
      noodles: ['Spaghetti Squash', 'Shirataki', 'Hearts of Palm'],
      sauces: ['Pesto', 'Arrabbiata', 'Vodka Sauce']
    },
    rules: {
      minProtein: 35,
      maxCarbs: 20,
      vegRatio: 0.45
    },
    scaling: {
      calorieRange: [400, 650],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 40,
      carbPercent: 20,
      fatPercent: 40
    },
    notes: 'Italian comfort, very low carb'
  },

  // ========== PRE-WORKOUT DINNERS (5 templates) ==========
  {
    id: 'dinner_016',
    name: 'Early Pre-Workout Dinner',
    categories: ['pre_workout_dinners', 'early_training'],
    dietTypes: ['omnivore'],
    complexity: 'simple',
    pattern: 'moderate_protein_high_carb_low_fat',
    workoutTiming: {
      preWorkout: '120-180min',
      postWorkout: 'not_applicable'
    },
    saucePreference: 'minimal',
    template: {
      proteins: {
        primary: {
          name: 'Grilled Chicken Breast',
          baseAmount: 120,
          unit: 'g',
          scaling: { min: 100, max: 150 }
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
          name: 'White Bread Roll',
          baseAmount: 60,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Cooking Spray',
          baseAmount: 5,
          unit: 'g',
          scaling: { min: 0, max: 10 }
        }
      },
      vegetables: {
        primary: {
          name: 'Steamed Carrots',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Turkey Breast', 'White Fish', 'Tofu'],
      carbs: ['Pasta', 'White Potato', 'Bagel'],
      avoid: ['High Fiber', 'Heavy Sauces', 'Dairy']
    },
    rules: {
      minProtein: 25,
      maxFat: 10,
      maxFiber: 5,
      vegRatio: 0.15
    },
    scaling: {
      calorieRange: [450, 650],
      carbPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 70,
      fatPercent: 10
    },
    notes: 'Easy to digest, high energy'
  },

  {
    id: 'dinner_017',
    name: 'Night Training Fuel Bowl',
    categories: ['pre_workout_dinners', 'evening_workout'],
    dietTypes: ['omnivore', 'dairy_free'],
    complexity: 'simple',
    pattern: 'low_protein_very_high_carb_low_fat',
    workoutTiming: {
      preWorkout: '90-120min',
      postWorkout: 'not_applicable'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Lean Ground Turkey',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        }
      },
      carbs: {
        primary: {
          name: 'White Pasta',
          baseAmount: 120,
          unit: 'g',
          dry: true,
          scaling: { min: 100, max: 150 }
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
          name: 'Minimal Oil',
          baseAmount: 5,
          unit: 'ml',
          scaling: { min: 0, max: 8 }
        }
      },
      vegetables: {
        primary: {
          name: 'Low-fiber Marinara',
          baseAmount: 100,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      proteins: ['Chicken Breast', 'Egg Whites'],
      carbs: ['Cream of Rice', 'Pretzels', 'Cereal'],
      additions: ['Sports Drink', 'White Bread']
    },
    rules: {
      minProtein: 15,
      maxFat: 8,
      maxFiber: 3,
      vegRatio: 0.1
    },
    scaling: {
      calorieRange: [500, 750],
      carbPriority: true,
      maintainRatios: false
    },
    macroProfile: {
      proteinPercent: 15,
      carbPercent: 78,
      fatPercent: 7
    },
    notes: 'Maximum energy, minimal digestion'
  },

  {
    id: 'dinner_018',
    name: 'Athlete\'s Early Bird Special',
    categories: ['pre_workout_dinners', 'performance'],
    dietTypes: ['omnivore'],
    complexity: 'simple',
    pattern: 'moderate_protein_high_carb_minimal_fat',
    workoutTiming: {
      preWorkout: '150-180min',
      postWorkout: 'not_applicable'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Baked Chicken Breast',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        }
      },
      carbs: {
        primary: {
          name: 'Baked Potato',
          baseAmount: 300,
          unit: 'g',
          scaling: { min: 250, max: 400 }
        },
        secondary: {
          name: 'Dinner Rolls',
          baseAmount: 80,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Light Butter',
          baseAmount: 5,
          unit: 'g',
          scaling: { min: 0, max: 10 }
        }
      },
      vegetables: {
        primary: {
          name: 'Green Beans (well-cooked)',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Turkey', 'Tilapia', 'Lean Pork'],
      carbs: ['Sweet Potato', 'White Rice', 'Pasta'],
      seasonings: ['Salt', 'Basic Herbs', 'Light Ketchup']
    },
    rules: {
      minProtein: 20,
      maxFat: 12,
      maxFiber: 6,
      vegRatio: 0.15
    },
    scaling: {
      calorieRange: [500, 700],
      carbPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 18,
      carbPercent: 72,
      fatPercent: 10
    },
    notes: 'Traditional pre-game meal'
  },

  {
    id: 'dinner_019',
    name: 'Quick Energy Pasta',
    categories: ['pre_workout_dinners', 'fast_fuel'],
    dietTypes: ['omnivore'],
    complexity: 'simple',
    pattern: 'low_protein_very_high_carb_minimal_fat',
    workoutTiming: {
      preWorkout: '60-90min',
      postWorkout: 'not_applicable'
    },
    saucePreference: 'minimal',
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
          name: 'Angel Hair Pasta',
          baseAmount: 100,
          unit: 'g',
          dry: true,
          scaling: { min: 80, max: 120 }
        },
        secondary: {
          name: 'Italian Bread',
          baseAmount: 60,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Olive Oil (minimal)',
          baseAmount: 5,
          unit: 'ml',
          scaling: { min: 0, max: 8 }
        }
      },
      vegetables: {
        primary: {
          name: 'Simple Tomato Sauce',
          baseAmount: 100,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      proteins: ['Turkey', 'Shrimp', 'Skip Protein'],
      carbs: ['White Rice', 'Couscous', 'Orzo'],
      sauces: ['Butter & Salt', 'Light Marinara']
    },
    rules: {
      minProtein: 10,
      maxFat: 10,
      maxFiber: 4,
      vegRatio: 0.1
    },
    scaling: {
      calorieRange: [400, 600],
      carbPriority: true,
      maintainRatios: false
    },
    macroProfile: {
      proteinPercent: 12,
      carbPercent: 80,
      fatPercent: 8
    },
    notes: 'Fast digesting, pure energy'
  },

  {
    id: 'dinner_020',
    name: 'Endurance Dinner Special',
    categories: ['pre_workout_dinners', 'marathon_prep'],
    dietTypes: ['omnivore'],
    complexity: 'simple',
    pattern: 'low_protein_extreme_carb_minimal_fat',
    workoutTiming: {
      preWorkout: '180-240min',
      postWorkout: 'not_applicable'
    },
    saucePreference: 'none',
    template: {
      proteins: {
        primary: {
          name: 'Small Chicken Breast',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
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
          name: 'Bagel',
          baseAmount: 100,
          unit: 'g'
        },
        tertiary: {
          name: 'Banana',
          baseAmount: 120,
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
          name: 'None (avoid fiber)',
          baseAmount: 0,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['White Fish', 'Egg Whites', 'Skip It'],
      carbs: ['Pasta', 'Pancakes', 'White Potato'],
      additions: ['Honey', 'Jam', 'Sports Drink']
    },
    rules: {
      minProtein: 10,
      maxFat: 5,
      maxFiber: 2,
      vegRatio: 0
    },
    scaling: {
      calorieRange: [600, 900],
      carbPriority: true,
      maintainRatios: false
    },
    macroProfile: {
      proteinPercent: 10,
      carbPercent: 87,
      fatPercent: 3
    },
    notes: 'Carb loading for endurance events'
  },

  // ========== DIETARY VARIETY ADDITIONS (20 templates) ==========
  // Additional Omnivore Options (5)
  {
    id: 'dinner_021',
    name: 'Braised Lamb Shank with Root Vegetables',
    categories: ['standard_dinners', 'gourmet'],
    dietTypes: ['omnivore', 'gluten_free', 'paleo_friendly'],
    complexity: 'complex',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Lamb Shank',
          baseAmount: 250,
          unit: 'g',
          scaling: { min: 200, max: 300 }
        }
      },
      carbs: {
        primary: {
          name: 'Roasted Root Vegetables',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      fats: {
        primary: {
          name: 'Olive Oil',
          baseAmount: 15,
          unit: 'ml',
          scaling: { min: 10, max: 20 }
        }
      },
      vegetables: {
        primary: {
          name: 'Braised Carrots and Parsnips',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Fresh Thyme and Rosemary',
          baseAmount: 5,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Beef Short Ribs', 'Pork Shoulder', 'Veal Shank'],
      carbs: ['Mashed Cauliflower', 'Roasted Turnips', 'Celeriac Puree'],
      vegetables: ['Pearl Onions', 'Baby Potatoes', 'Fennel']
    },
    rules: {
      minProtein: 45,
      maxFat: 40,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [700, 1000],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 30,
      fatPercent: 40
    },
    notes: 'Slow-cooked comfort food, perfect for winter evenings'
  },

  {
    id: 'dinner_022',
    name: 'Bison Burger Power Stack',
    categories: ['standard_dinners', 'american'],
    dietTypes: ['omnivore'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Ground Bison',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        }
      },
      carbs: {
        primary: {
          name: 'Sweet Potato Wedges',
          baseAmount: 200,
          unit: 'g',
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
          name: 'Aged Cheddar',
          baseAmount: 20,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Grilled Onions and Peppers',
          baseAmount: 100,
          unit: 'g'
        },
        secondary: {
          name: 'Lettuce and Tomato',
          baseAmount: 80,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Elk Burger', 'Venison Burger', 'Grass-Fed Beef'],
      carbs: ['Regular Potato Fries', 'Whole Grain Bun', 'Roasted Vegetables'],
      vegetables: ['Mushrooms', 'Pickles', 'Jalapeños']
    },
    rules: {
      minProtein: 40,
      maxFat: 35,
      vegRatio: 0.2
    },
    scaling: {
      calorieRange: [650, 950],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 35,
      fatPercent: 30
    },
    notes: 'Lean game meat provides excellent protein with lower fat content'
  },

  {
    id: 'dinner_023',
    name: 'Duck Confit with Lentils',
    categories: ['standard_dinners', 'french', 'gourmet'],
    dietTypes: ['omnivore', 'gluten_free'],
    complexity: 'complex',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Duck Leg Confit',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      carbs: {
        primary: {
          name: 'French Green Lentils',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 100, max: 200 }
        }
      },
      fats: {
        primary: {
          name: 'Duck Fat (from confit)',
          baseAmount: 10,
          unit: 'g',
          scaling: { min: 5, max: 15 }
        }
      },
      vegetables: {
        primary: {
          name: 'Sautéed Garlic Spinach',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Roasted Shallots',
          baseAmount: 50,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Goose Confit', 'Chicken Confit', 'Pork Belly'],
      carbs: ['White Beans', 'Flageolet Beans', 'Wild Rice'],
      vegetables: ['Swiss Chard', 'Kale', 'Endive']
    },
    rules: {
      minProtein: 35,
      maxFat: 45,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [700, 1000],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 30,
      fatPercent: 40
    },
    notes: 'Classic French bistro dish with rich flavors'
  },

  {
    id: 'dinner_024',
    name: 'Rabbit Stew Mediterranean',
    categories: ['standard_dinners', 'mediterranean'],
    dietTypes: ['omnivore', 'gluten_free', 'paleo_friendly'],
    complexity: 'complex',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Rabbit (stewed)',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        }
      },
      carbs: {
        primary: {
          name: 'Roasted New Potatoes',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      fats: {
        primary: {
          name: 'Extra Virgin Olive Oil',
          baseAmount: 15,
          unit: 'ml',
          scaling: { min: 10, max: 20 }
        },
        secondary: {
          name: 'Olives',
          baseAmount: 30,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Tomatoes and Bell Peppers',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Fresh Herbs (Basil, Oregano)',
          baseAmount: 10,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Chicken Thighs', 'Guinea Fowl', 'Pheasant'],
      carbs: ['Polenta', 'Orzo', 'Farro'],
      vegetables: ['Zucchini', 'Eggplant', 'Artichokes']
    },
    rules: {
      minProtein: 40,
      maxFat: 30,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [600, 900],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 35,
      fatPercent: 30
    },
    notes: 'Lean game meat with Mediterranean vegetables'
  },

  {
    id: 'dinner_025',
    name: 'Venison Tenderloin with Wild Mushrooms',
    categories: ['standard_dinners', 'gourmet'],
    dietTypes: ['omnivore', 'gluten_free', 'paleo_friendly', 'keto_friendly'],
    complexity: 'complex',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Venison Tenderloin',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        }
      },
      carbs: {
        primary: {
          name: 'Roasted Butternut Squash',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 100, max: 200 }
        }
      },
      fats: {
        primary: {
          name: 'Butter (for mushrooms)',
          baseAmount: 15,
          unit: 'g',
          scaling: { min: 10, max: 20 }
        },
        secondary: {
          name: 'Pine Nuts',
          baseAmount: 20,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Wild Mushroom Medley',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Sautéed Kale',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Wild Boar', 'Moose', 'Elk Tenderloin'],
      carbs: ['Roasted Beets', 'Parsnip Puree', 'Wild Rice Pilaf'],
      vegetables: ['Chanterelles', 'Morels', 'Brussels Sprouts']
    },
    rules: {
      minProtein: 45,
      maxFat: 35,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [600, 900],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 40,
      carbPercent: 30,
      fatPercent: 30
    },
    notes: 'Ultra-lean wild game with earthy mushrooms'
  },

  // Pescatarian Options (5)
  {
    id: 'dinner_026',
    name: 'Miso-Glazed Black Cod',
    categories: ['standard_dinners', 'japanese', 'gourmet'],
    dietTypes: ['pescatarian', 'gluten_free', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Black Cod (Sablefish)',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        }
      },
      carbs: {
        primary: {
          name: 'Steamed Sushi Rice',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 100, max: 200 }
        }
      },
      fats: {
        primary: {
          name: 'Sesame Oil',
          baseAmount: 10,
          unit: 'ml',
          scaling: { min: 5, max: 15 }
        },
        secondary: {
          name: 'Toasted Sesame Seeds',
          baseAmount: 10,
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
          name: 'Pickled Ginger',
          baseAmount: 20,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Chilean Sea Bass', 'Halibut', 'Salmon'],
      carbs: ['Brown Rice', 'Soba Noodles', 'Quinoa'],
      vegetables: ['Baby Spinach', 'Chinese Broccoli', 'Snow Peas']
    },
    rules: {
      minProtein: 35,
      maxFat: 40,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [600, 900],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 35,
      fatPercent: 35
    },
    notes: 'Rich omega-3 fish with umami miso glaze'
  },

  {
    id: 'dinner_027',
    name: 'Grilled Octopus Greek Style',
    categories: ['standard_dinners', 'mediterranean'],
    dietTypes: ['pescatarian', 'gluten_free', 'dairy_free'],
    complexity: 'complex',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Grilled Octopus',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      carbs: {
        primary: {
          name: 'Roasted Fingerling Potatoes',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      fats: {
        primary: {
          name: 'Extra Virgin Olive Oil',
          baseAmount: 20,
          unit: 'ml',
          scaling: { min: 15, max: 25 }
        },
        secondary: {
          name: 'Kalamata Olives',
          baseAmount: 30,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Grilled Lemon and Herbs',
          baseAmount: 50,
          unit: 'g'
        },
        secondary: {
          name: 'Greek Salad',
          baseAmount: 150,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Grilled Calamari', 'Grilled Prawns', 'Grilled Fish'],
      carbs: ['Orzo', 'Chickpeas', 'Lentils'],
      vegetables: ['Roasted Red Peppers', 'Artichokes', 'Fennel']
    },
    rules: {
      minProtein: 40,
      maxFat: 35,
      vegRatio: 0.25
    },
    scaling: {
      calorieRange: [600, 900],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 35,
      fatPercent: 30
    },
    notes: 'Tender grilled octopus with Mediterranean flavors'
  },

  {
    id: 'dinner_028',
    name: 'Lobster Thermidor',
    categories: ['standard_dinners', 'french', 'gourmet'],
    dietTypes: ['pescatarian'],
    complexity: 'complex',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Lobster Tail',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      carbs: {
        primary: {
          name: 'Duchess Potatoes',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 100, max: 200 }
        }
      },
      fats: {
        primary: {
          name: 'Butter (for sauce)',
          baseAmount: 20,
          unit: 'g',
          scaling: { min: 15, max: 25 }
        },
        secondary: {
          name: 'Heavy Cream',
          baseAmount: 30,
          unit: 'ml'
        }
      },
      vegetables: {
        primary: {
          name: 'Steamed Asparagus',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Baby Greens',
          baseAmount: 50,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Crab', 'Langostino', 'Large Prawns'],
      carbs: ['Wild Rice', 'Risotto', 'Garlic Bread'],
      vegetables: ['Haricot Verts', 'Baby Carrots', 'Endive']
    },
    rules: {
      minProtein: 35,
      maxFat: 40,
      vegRatio: 0.2
    },
    scaling: {
      calorieRange: [700, 1000],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 30,
      carbPercent: 30,
      fatPercent: 40
    },
    notes: 'Decadent French classic with rich cream sauce'
  },

  {
    id: 'dinner_029',
    name: 'Pan-Seared Scallops with Cauliflower Puree',
    categories: ['standard_dinners', 'gourmet'],
    dietTypes: ['pescatarian', 'gluten_free', 'keto_friendly'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Large Sea Scallops',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        }
      },
      carbs: {
        primary: {
          name: 'Cauliflower Puree',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      fats: {
        primary: {
          name: 'Butter (for searing)',
          baseAmount: 15,
          unit: 'g',
          scaling: { min: 10, max: 20 }
        },
        secondary: {
          name: 'Truffle Oil',
          baseAmount: 5,
          unit: 'ml'
        }
      },
      vegetables: {
        primary: {
          name: 'Crispy Brussels Sprouts',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Microgreens',
          baseAmount: 20,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Shrimp', 'Monkfish', 'Halibut'],
      carbs: ['Parsnip Puree', 'Celeriac Puree', 'Sweet Potato Puree'],
      vegetables: ['Roasted Broccoli', 'Green Beans', 'Snap Peas']
    },
    rules: {
      minProtein: 35,
      maxFat: 35,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [550, 850],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 30,
      fatPercent: 35
    },
    notes: 'Elegant low-carb dinner with perfectly seared scallops'
  },

  {
    id: 'dinner_030',
    name: 'Whole Roasted Branzino',
    categories: ['standard_dinners', 'mediterranean'],
    dietTypes: ['pescatarian', 'gluten_free', 'dairy_free', 'paleo_friendly'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'light',
    template: {
      proteins: {
        primary: {
          name: 'Whole Branzino',
          baseAmount: 250,
          unit: 'g',
          scaling: { min: 200, max: 300 }
        }
      },
      carbs: {
        primary: {
          name: 'Roasted Mediterranean Vegetables',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      fats: {
        primary: {
          name: 'Extra Virgin Olive Oil',
          baseAmount: 20,
          unit: 'ml',
          scaling: { min: 15, max: 25 }
        },
        secondary: {
          name: 'Lemon and Herbs',
          baseAmount: 30,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Grilled Zucchini and Eggplant',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Arugula Salad',
          baseAmount: 75,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Sea Bream', 'Red Snapper', 'Dorade'],
      carbs: ['Couscous', 'Farro', 'Roasted Potatoes'],
      vegetables: ['Bell Peppers', 'Tomatoes', 'Fennel']
    },
    rules: {
      minProtein: 40,
      maxFat: 35,
      vegRatio: 0.35
    },
    scaling: {
      calorieRange: [600, 900],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 35,
      carbPercent: 30,
      fatPercent: 35
    },
    notes: 'Simple Mediterranean whole fish with herbs and lemon'
  },

  // Vegetarian Options (5)
  {
    id: 'dinner_031',
    name: 'Eggplant Parmigiana Stack',
    categories: ['standard_dinners', 'italian', 'comfort_food'],
    dietTypes: ['vegetarian'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Fresh Mozzarella',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        },
        secondary: {
          name: 'Parmesan Cheese',
          baseAmount: 30,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Breaded Eggplant Slices',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Garlic Bread',
          baseAmount: 60,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Olive Oil (for frying)',
          baseAmount: 20,
          unit: 'ml',
          scaling: { min: 15, max: 25 }
        }
      },
      vegetables: {
        primary: {
          name: 'Marinara Sauce',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Fresh Basil',
          baseAmount: 10,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Ricotta', 'Burrata', 'Vegan Mozzarella'],
      carbs: ['Zucchini Slices', 'Portobello Caps', 'Polenta'],
      vegetables: ['Arrabbiata Sauce', 'Puttanesca Sauce', 'Roasted Tomatoes']
    },
    rules: {
      minProtein: 25,
      maxFat: 40,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [600, 900],
      proteinPriority: false,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 40,
      fatPercent: 40
    },
    notes: 'Comforting Italian classic with layers of cheese and eggplant'
  },

  {
    id: 'dinner_032',
    name: 'Shakshuka with Feta',
    categories: ['standard_dinners', 'middle_eastern'],
    dietTypes: ['vegetarian', 'gluten_free'],
    complexity: 'simple',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Eggs',
          baseAmount: 3,
          unit: 'whole',
          scaling: { min: 2, max: 4 }
        },
        secondary: {
          name: 'Feta Cheese',
          baseAmount: 50,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Pita Bread',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        }
      },
      fats: {
        primary: {
          name: 'Olive Oil',
          baseAmount: 15,
          unit: 'ml',
          scaling: { min: 10, max: 20 }
        }
      },
      vegetables: {
        primary: {
          name: 'Spiced Tomato Sauce',
          baseAmount: 250,
          unit: 'g'
        },
        secondary: {
          name: 'Bell Peppers and Onions',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Halloumi', 'Labneh', 'Greek Yogurt'],
      carbs: ['Sourdough Bread', 'Naan', 'Couscous'],
      vegetables: ['Spinach', 'Kale', 'Chickpeas']
    },
    rules: {
      minProtein: 25,
      maxFat: 35,
      vegRatio: 0.4
    },
    scaling: {
      calorieRange: [550, 800],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 25,
      carbPercent: 35,
      fatPercent: 40
    },
    notes: 'Middle Eastern egg dish perfect for dinner'
  },

  {
    id: 'dinner_033',
    name: 'Mushroom Wellington',
    categories: ['standard_dinners', 'gourmet', 'british'],
    dietTypes: ['vegetarian'],
    complexity: 'complex',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Mixed Mushroom Duxelles',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Goat Cheese',
          baseAmount: 50,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Puff Pastry',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        },
        secondary: {
          name: 'Roasted Potatoes',
          baseAmount: 150,
          unit: 'g'
        }
      },
      fats: {
        primary: {
          name: 'Butter',
          baseAmount: 15,
          unit: 'g',
          scaling: { min: 10, max: 20 }
        }
      },
      vegetables: {
        primary: {
          name: 'Roasted Root Vegetables',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Red Wine Reduction',
          baseAmount: 30,
          unit: 'ml'
        }
      }
    },
    alternatives: {
      proteins: ['Lentil Walnut Pate', 'Spinach Ricotta', 'Butternut Squash'],
      carbs: ['Phyllo Dough', 'Whole Wheat Pastry', 'Sweet Potato Mash'],
      vegetables: ['Green Beans', 'Braised Cabbage', 'Glazed Carrots']
    },
    rules: {
      minProtein: 20,
      maxFat: 45,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [700, 1000],
      proteinPriority: false,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 15,
      carbPercent: 45,
      fatPercent: 40
    },
    notes: 'Elegant vegetarian centerpiece with buttery pastry'
  },

  {
    id: 'dinner_034',
    name: 'Paneer Tikka Masala',
    categories: ['standard_dinners', 'indian'],
    dietTypes: ['vegetarian', 'gluten_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Paneer Cheese',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        }
      },
      carbs: {
        primary: {
          name: 'Basmati Rice',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 100, max: 200 }
        },
        secondary: {
          name: 'Naan Bread',
          baseAmount: 60,
          unit: 'g'
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
          name: 'Cashew Cream',
          baseAmount: 30,
          unit: 'ml'
        }
      },
      vegetables: {
        primary: {
          name: 'Tikka Masala Sauce',
          baseAmount: 200,
          unit: 'g'
        },
        secondary: {
          name: 'Sautéed Spinach',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Tofu', 'Halloumi', 'Chickpeas'],
      carbs: ['Quinoa', 'Cauliflower Rice', 'Roti'],
      vegetables: ['Saag', 'Mixed Vegetables', 'Okra']
    },
    rules: {
      minProtein: 25,
      maxFat: 40,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [650, 950],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 40,
      fatPercent: 40
    },
    notes: 'Rich and creamy Indian dish with grilled paneer'
  },

  {
    id: 'dinner_035',
    name: 'Stuffed Bell Peppers Quinoa',
    categories: ['standard_dinners', 'mediterranean'],
    dietTypes: ['vegetarian', 'gluten_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Black Beans',
          baseAmount: 120,
          unit: 'g',
          scaling: { min: 100, max: 150 }
        },
        secondary: {
          name: 'Monterey Jack Cheese',
          baseAmount: 50,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Quinoa',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 100, max: 200 }
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
          name: 'Pine Nuts',
          baseAmount: 20,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Bell Peppers (for stuffing)',
          baseAmount: 200,
          unit: 'g'
        },
        secondary: {
          name: 'Tomato Sauce',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Lentils', 'Chickpeas', 'Cottage Cheese'],
      carbs: ['Brown Rice', 'Farro', 'Bulgur'],
      vegetables: ['Zucchini Boats', 'Tomatoes', 'Eggplant']
    },
    rules: {
      minProtein: 25,
      maxFat: 30,
      vegRatio: 0.35
    },
    scaling: {
      calorieRange: [600, 850],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 45,
      fatPercent: 35
    },
    notes: 'Colorful stuffed peppers with protein-rich quinoa'
  },

  // Vegan Options (5)
  {
    id: 'dinner_036',
    name: 'Jackfruit Carnitas Tacos',
    categories: ['standard_dinners', 'mexican'],
    dietTypes: ['vegan', 'gluten_free', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Pulled Jackfruit',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        },
        secondary: {
          name: 'Black Beans',
          baseAmount: 100,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Corn Tortillas',
          baseAmount: 80,
          unit: 'g',
          scaling: { min: 60, max: 100 }
        },
        secondary: {
          name: 'Mexican Rice',
          baseAmount: 100,
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
          name: 'Pumpkin Seeds',
          baseAmount: 15,
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
          name: 'Shredded Cabbage',
          baseAmount: 50,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Seasoned Tofu', 'Tempeh', 'Mushrooms'],
      carbs: ['Flour Tortillas', 'Taco Shells', 'Cauliflower Rice'],
      vegetables: ['Salsa Verde', 'Corn Salsa', 'Jalapeños']
    },
    rules: {
      minProtein: 20,
      maxFat: 35,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [600, 900],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 15,
      carbPercent: 50,
      fatPercent: 35
    },
    notes: 'Plant-based tacos with meaty jackfruit texture'
  },

  {
    id: 'dinner_037',
    name: 'Ethiopian Lentil Stew',
    categories: ['standard_dinners', 'african'],
    dietTypes: ['vegan', 'gluten_free', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Red Lentils',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        },
        secondary: {
          name: 'Split Peas',
          baseAmount: 50,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Injera Bread',
          baseAmount: 100,
          unit: 'g',
          scaling: { min: 80, max: 120 }
        }
      },
      fats: {
        primary: {
          name: 'Olive Oil',
          baseAmount: 15,
          unit: 'ml',
          scaling: { min: 10, max: 20 }
        }
      },
      vegetables: {
        primary: {
          name: 'Berbere Spiced Vegetables',
          baseAmount: 200,
          unit: 'g'
        },
        secondary: {
          name: 'Collard Greens',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Yellow Lentils', 'Chickpeas', 'Black-Eyed Peas'],
      carbs: ['Rice', 'Flatbread', 'Teff Porridge'],
      vegetables: ['Cabbage', 'Carrots', 'Potatoes']
    },
    rules: {
      minProtein: 25,
      maxFat: 25,
      vegRatio: 0.4
    },
    scaling: {
      calorieRange: [550, 800],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 20,
      carbPercent: 55,
      fatPercent: 25
    },
    notes: 'Aromatic Ethiopian stew with complex spices'
  },

  {
    id: 'dinner_038',
    name: 'Mushroom Bourguignon',
    categories: ['standard_dinners', 'french'],
    dietTypes: ['vegan', 'dairy_free'],
    complexity: 'complex',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Mixed Mushrooms (Button, Portobello)',
          baseAmount: 250,
          unit: 'g',
          scaling: { min: 200, max: 300 }
        },
        secondary: {
          name: 'Pearl Onions',
          baseAmount: 100,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Mashed Potatoes (Vegan)',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      fats: {
        primary: {
          name: 'Olive Oil',
          baseAmount: 20,
          unit: 'ml',
          scaling: { min: 15, max: 25 }
        }
      },
      vegetables: {
        primary: {
          name: 'Red Wine Sauce',
          baseAmount: 150,
          unit: 'ml'
        },
        secondary: {
          name: 'Carrots and Celery',
          baseAmount: 100,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['King Oyster Mushrooms', 'Shiitake', 'Tempeh'],
      carbs: ['Polenta', 'Pasta', 'Crusty Bread'],
      vegetables: ['Turnips', 'Parsnips', 'Green Beans']
    },
    rules: {
      minProtein: 15,
      maxFat: 35,
      vegRatio: 0.5
    },
    scaling: {
      calorieRange: [600, 900],
      proteinPriority: false,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 12,
      carbPercent: 53,
      fatPercent: 35
    },
    notes: 'Rich French stew with meaty mushrooms in wine sauce'
  },

  {
    id: 'dinner_039',
    name: 'Thai Green Curry Bowl',
    categories: ['standard_dinners', 'thai'],
    dietTypes: ['vegan', 'gluten_free', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'heavy',
    template: {
      proteins: {
        primary: {
          name: 'Extra Firm Tofu',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 120, max: 180 }
        },
        secondary: {
          name: 'Edamame',
          baseAmount: 50,
          unit: 'g'
        }
      },
      carbs: {
        primary: {
          name: 'Jasmine Rice',
          baseAmount: 150,
          unit: 'g',
          scaling: { min: 100, max: 200 }
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
          name: 'Peanuts',
          baseAmount: 15,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Thai Eggplant and Bamboo Shoots',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Thai Basil and Lime',
          baseAmount: 20,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Tempeh', 'Seitan', 'Chickpeas'],
      carbs: ['Rice Noodles', 'Brown Rice', 'Cauliflower Rice'],
      vegetables: ['Bell Peppers', 'Snow Peas', 'Baby Corn']
    },
    rules: {
      minProtein: 20,
      maxFat: 40,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [600, 900],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 15,
      carbPercent: 45,
      fatPercent: 40
    },
    notes: 'Aromatic Thai curry with coconut milk and fresh herbs'
  },

  {
    id: 'dinner_040',
    name: 'Seitan Steak with Chimichurri',
    categories: ['standard_dinners', 'latin'],
    dietTypes: ['vegan', 'dairy_free'],
    complexity: 'moderate',
    pattern: 'protein_carb_fat_veggie',
    workoutTiming: {
      preWorkout: 'not_recommended',
      postWorkout: 'anytime'
    },
    saucePreference: 'moderate',
    template: {
      proteins: {
        primary: {
          name: 'Seitan Steak',
          baseAmount: 180,
          unit: 'g',
          scaling: { min: 150, max: 220 }
        }
      },
      carbs: {
        primary: {
          name: 'Roasted Sweet Potatoes',
          baseAmount: 200,
          unit: 'g',
          scaling: { min: 150, max: 250 }
        }
      },
      fats: {
        primary: {
          name: 'Olive Oil (for chimichurri)',
          baseAmount: 20,
          unit: 'ml',
          scaling: { min: 15, max: 25 }
        },
        secondary: {
          name: 'Sunflower Seeds',
          baseAmount: 15,
          unit: 'g'
        }
      },
      vegetables: {
        primary: {
          name: 'Grilled Vegetables',
          baseAmount: 150,
          unit: 'g'
        },
        secondary: {
          name: 'Fresh Chimichurri Sauce',
          baseAmount: 30,
          unit: 'g'
        }
      }
    },
    alternatives: {
      proteins: ['Portobello Steaks', 'Tempeh', 'Tofu Steaks'],
      carbs: ['Quinoa', 'Black Beans', 'Plantains'],
      vegetables: ['Asparagus', 'Corn on the Cob', 'Bell Peppers']
    },
    rules: {
      minProtein: 30,
      maxFat: 35,
      vegRatio: 0.3
    },
    scaling: {
      calorieRange: [600, 900],
      proteinPriority: true,
      maintainRatios: true
    },
    macroProfile: {
      proteinPercent: 25,
      carbPercent: 40,
      fatPercent: 35
    },
    notes: 'High-protein vegan steak with fresh herb sauce'
  }
];

// Export the templates
module.exports = {
  dinnerTemplates
};