// MODULE 51: CALCULATIONS (HIERARCHICAL MACRO SYSTEM)
// Nutrition calculation specialist implementing hierarchical macro targeting system
// Uses Mifflin-St Jeor equation with age-optimized adjustments

function calculateNutritionTargets(userData) {
  // Check if user wants Shelby/Justin methodology
  const methodology = userData.methodology || "moderate";
  
  if (methodology === "shelby-justin") {
    return calculateShelbyJustinTargets(userData);
  }
  
  // Otherwise continue with existing moderate methodology below
  // Initialize result object with template structure
  const result = {
    bmr: 0,
    maintenance_calories: 0,
    timeline_approach: "moderate",
    age_bracket: "",
    age_adjusted: false,
    methodology: "moderate", // Add methodology identifier
    training_day: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      hierarchical: {
        protein_minimum: 0,
        carb_range: { min: 0, max: 0 },
        fiber_range: { min: 0, max: 0 },
        fat_minimum: 0,
        fat_soft_ceiling: 0,
        fat_flexible: true
      }
    },
    rest_day: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      hierarchical: {
        protein_minimum: 0,
        carb_range: { min: 0, max: 0 },
        fiber_range: { min: 0, max: 0 },
        fat_minimum: 0,
        fat_soft_ceiling: 0,
        fat_flexible: true
      }
    },
    refeed_day: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      hierarchical: {
        protein_minimum: 0,
        carb_range: { min: 0, max: 0 },
        fiber_range: { min: 0, max: 0 },
        fat_minimum: 0,
        fat_soft_ceiling: 0,
        fat_flexible: true
      }
    },
    fasting_day: {
      calories: null,
      protein: null,
      carbs: null,
      fat: null,
      hierarchical: {
        protein_minimum: null,
        carb_range: { min: null, max: null },
        fiber_range: { min: null, max: null },
        fat_minimum: null,
        fat_soft_ceiling: null,
        fat_flexible: true
      }
    },
    hydration: {
      training_day: { ml: 0, oz: 0 },
      rest_day: { ml: 0, oz: 0 },
      refeed_day: { ml: 0, oz: 0 },
      fasting_day: { ml: null, oz: null },
      current_intake_adequate: false,
      high_caffeine_flag: false,
      constipation_hydration_boost: false
    },
    sodium: {
      need_level: "",
      morning_protocol: "",
      meal_protocol: "",
      electrolyte_supplement_recommended: false,
      salt_sensitive: false,
      training_note: ""
    },
    dietary_flags: {
      budget_conscious: false,
      gluten_free: false,
      nut_free: false,
      meal_variety_preference: "",
      diet_type: "",
      protein_powder_use: ""
    },
    weekly_average: 0,
    estimated_weeks_to_goal: 0,
    safety_adjusted: false,
    original_timeline_requested: "moderate",
    female_optimized: false,
    age_safety_buffer: 0,
    deficit_surplus_per_day: 0,
    special_conditions: {
      pregnancy_adjusted: false,
      pregnancy_status: "",
      pregnancy_calories_added: 0,
      pregnancy_protein_added: 0,
      energy_capped: false,
      energy_level: "",
      original_goal_multiplier: 0,
      plateau_adjusted: false,
      plateau_duration: "",
      plateau_dieting_status: "",
      plateau_refeed_days: 1,
      digestive_modified: false,
      constipation_support: false
    },
    system_version: "hierarchical_v2.1"
  };

  // Extract user data with safe defaults
  const {
    // Basic info
    first_name,
    last_name, 
    email,
    weight = 70,
    weightUnit = "kg",
    height = 170,
    age = 30,
    gender = "female",
    
    // Goals and activity
    activityLevel = "Moderately Active",
    goal = "Maintain Weight",
    desiredWeight,
    resultsTimeline = "moderate",
    
    // Training and timing
    trainingDays,
    trainingTime,
    refeedDay,
    includeFasting = "No",
    fastingDay,
    
    // Diet and restrictions  
    dietaryStyle, // Typeform uses 'dietaryStyle' instead of 'dietType'
    dietType = dietaryStyle || "No Restrictions", // Fallback mapping
    proteinPowder = "Not specified",
    glutenRestriction,
    nutRestriction,
    budgetConstraints,
    gutSensitivities,
    
    // Health conditions
    pregnancyStatus,
    weightPlateau,
    plateauDietingStatus,
    energyLevels,
    stressLevels,
    sleepSchedule,
    
    // Digestive health
    goodDigestion,
    bowelFrequency,
    bowelDescription,
    skinproblems,
    
    // Food preferences (comma-separated from Typeform)
    favProtein,
    favCarbs, 
    favFats,
    favSalads,
    favVeggies,
    preferredFruit,
    foodsCantLiveWithout,
    favFoods,
    
    // Meal planning
    numberOfMeals,
    snacks,
    mealVariety,
    mealPlanExperience,
    biggestChallenge,
    guidancePreference,
    planPriorities,
    
    // Beverages
    drinksCoffee,
    coffeeMilkSugar,
    blackCoffeeSwitch,
    numberOfCoffees,
    otherCaffeine,
    energyDrinksPerDay,
    drinksAlcohol,
    alcoholWillingToStop,
    alcoholDay,
    numberOfDrinks,
    drinksSoftDrinkJuice,
    waterIntake,
    saltIntake,
    sauceUsage,
    
    // Additional supplements
    additionalSupplements,
    
    // Progress tracking
    shareProgressPhotos,
    frontImage,
    sideImage, 
    backImage,
    extraNotesEnabled,
    extraNotes
  } = userData;

  // Step 1: Weight conversion
  const weight_kg = weightUnit === "lb" ? weight * 0.4536 : weight;

  // Step 2: BMR calculation (Mifflin-St Jeor)
  let bmr;
  if (gender.toLowerCase() === "male") {
    bmr = (10 * weight_kg) + (6.25 * height) - (5 * age) + 5;
  } else {
    bmr = (10 * weight_kg) + (6.25 * height) - (5 * age) - 161;
  }
  result.bmr = Math.round(bmr);

  // Step 3: Special Condition - Pregnancy/Breastfeeding
  let pregnancy_adjusted = false;
  let pregnancy_calories_added = 0;
  let pregnancy_protein_added = 0;
  let original_goal = goal;

  if (pregnancyStatus && pregnancyStatus !== "No") {
    pregnancy_adjusted = true;
    result.special_conditions.pregnancy_adjusted = true;
    result.special_conditions.pregnancy_status = pregnancyStatus;

    // Override weight loss goals for safety
    if (goal.includes("Lose Weight")) {
      goal = "Maintain Weight";
    }

    // Calorie and protein adjustments
    if (pregnancyStatus === "Pregnant") {
      pregnancy_calories_added = 300;
      pregnancy_protein_added = 20;
    } else if (pregnancyStatus === "Breastfeeding") {
      pregnancy_calories_added = 500;
      pregnancy_protein_added = 25;
    } else if (pregnancyStatus === "Trying to Conceive") {
      pregnancy_calories_added = 0;
      pregnancy_protein_added = 10;
    }

    result.special_conditions.pregnancy_calories_added = pregnancy_calories_added;
    result.special_conditions.pregnancy_protein_added = pregnancy_protein_added;
  }

  // Step 4: Activity multiplier
  const activityMultipliers = {
    "Sedentary": 1.20,
    "Lightly Active": 1.375,
    "Moderately Active": 1.55,
    "Active": 1.725,
    "Very Active": 1.90
  };

  let activity_multiplier = activityMultipliers[activityLevel] || 1.55;

  // Age adjustment for activity (60+ reduce by 5-10%)
  if (age >= 60) {
    activity_multiplier *= 0.925; // 7.5% reduction
    result.age_adjusted = true;
  }

  result.maintenance_calories = Math.round(bmr * activity_multiplier);

  // Step 5: Goal multiplier
  result.timeline_approach = resultsTimeline;
  result.original_timeline_requested = resultsTimeline;

  // Determine age bracket
  if (age >= 22 && age < 32) result.age_bracket = "22-32";
  else if (age >= 32 && age < 42) result.age_bracket = "32-42";
  else if (age >= 42 && age < 52) result.age_bracket = "42-52";
  else if (age >= 52 && age < 65) result.age_bracket = "52-65";
  else result.age_bracket = "65+";

  // Goal multiplier calculation
  let goal_multiplier = 1.0;
  
  if (goal.includes("Lose Weight")) {
    const loseMultipliers = {
      "22-32": { conservative: 0.85, moderate: 1.00, aggressive: 1.15 },
      "32-42": { conservative: 0.80, moderate: 0.95, aggressive: 1.05 },
      "42-52": { conservative: 0.75, moderate: 0.90, aggressive: 1.00 },
      "52-65": { conservative: 0.70, moderate: 0.85, aggressive: 0.95 },
      "65+": { conservative: 0.65, moderate: 0.80, aggressive: 0.90 }
    };
    goal_multiplier = loseMultipliers[result.age_bracket][resultsTimeline] || 0.85;
  } else if (goal.includes("Gain Weight")) {
    const gainMultipliers = {
      "22-32": { conservative: 0.95, moderate: 1.10, aggressive: 1.25 },
      "32-42": { conservative: 0.90, moderate: 1.05, aggressive: 1.15 },
      "42-52": { conservative: 0.85, moderate: 1.00, aggressive: 1.10 },
      "52-65": { conservative: 0.80, moderate: 0.95, aggressive: 1.05 },
      "65+": { conservative: 0.75, moderate: 0.90, aggressive: 1.00 }
    };
    goal_multiplier = gainMultipliers[result.age_bracket][resultsTimeline] || 1.10;
  }

  result.special_conditions.original_goal_multiplier = goal_multiplier;

  // Energy Level Cap Override
  let energy_capped = false;
  if (energyLevels && goal.includes("Lose Weight")) {
    result.special_conditions.energy_level = energyLevels;
    
    if (energyLevels === "Terrible: I find that I'm always tired") {
      if (goal_multiplier < 0.85) {
        goal_multiplier = 0.85;
        energy_capped = true;
      }
    } else if (energyLevels === "Poor: I find that I'm often tired") {
      if (goal_multiplier < 0.80) {
        goal_multiplier = 0.80;
        energy_capped = true;
      }
    }
    result.special_conditions.energy_capped = energy_capped;
  }

  // Plateau + Dieting Status Adjustment
  let plateau_adjusted = false;
  let plateau_refeed_days = 1;

  if (weightPlateau && plateauDietingStatus && goal.includes("Lose Weight")) {
    result.special_conditions.plateau_duration = weightPlateau;
    result.special_conditions.plateau_dieting_status = plateauDietingStatus;

    if (weightPlateau === "6-12 Months" || weightPlateau === "Over 12 Months") {
      if (plateauDietingStatus === "stalled") {
        if (weightPlateau === "6-12 Months") {
          goal_multiplier = goal_multiplier + ((1 - goal_multiplier) * 0.20);
          plateau_refeed_days = 2;
        } else {
          goal_multiplier = goal_multiplier + ((1 - goal_multiplier) * 0.25);
          plateau_refeed_days = 2;
        }
        plateau_adjusted = true;
      } else if (plateauDietingStatus === "inconsistent") {
        goal_multiplier = goal_multiplier + ((1 - goal_multiplier) * 0.10);
        plateau_adjusted = true;
      }
    }
  }

  result.special_conditions.plateau_adjusted = plateau_adjusted;
  result.special_conditions.plateau_refeed_days = plateau_refeed_days;

  // Calculate target calories with pregnancy adjustment
  let target_calories;
  if (pregnancy_adjusted) {
    target_calories = (bmr * activity_multiplier * goal_multiplier) + pregnancy_calories_added;
  } else {
    target_calories = bmr * activity_multiplier * goal_multiplier;
  }

  // Step 6: Safety floor
  const safetyMultipliers = {
    "22-32": 1.30,
    "32-42": 1.25,
    "42-52": 1.20,
    "52-65": 1.15,
    "65+": 1.10
  };

  let safety_floor = bmr * safetyMultipliers[result.age_bracket];
  let safety_adjusted = false;

  // Special pregnancy minimum
  if (pregnancy_adjusted) {
    const pregnancy_minimum = bmr * 1.4;
    if (target_calories < pregnancy_minimum) {
      target_calories = pregnancy_minimum;
      safety_adjusted = true;
    }
  } else if (target_calories < safety_floor) {
    // Female buffer for 42+
    if (gender.toLowerCase() === "female" && age >= 42) {
      safety_floor *= 1.10; // 10% buffer
      result.female_optimized = true;
    }
    
    target_calories = safety_floor;
    safety_adjusted = true;
  }

  result.safety_adjusted = safety_adjusted;

  // Step 7: Day-type calorie targets
  const training_day_calories = Math.round(target_calories / 5) * 5; // Round to nearest 5
  const rest_day_calories = Math.round((training_day_calories * 0.85) / 5) * 5;
  const refeed_day_calories = Math.round((training_day_calories * 1.10) / 5) * 5;
  const fasting_day_calories = includeFasting === "Yes" ? Math.round((training_day_calories * 0.45) / 5) * 5 : null;

  // Calculate deficit/surplus
  result.deficit_surplus_per_day = training_day_calories - result.maintenance_calories;

  // Step 8: Hierarchical Macronutrient Calculations
  function calculateHierarchicalMacros(calories, dayType) {
    if (calories === null) return null;

    // A) PROTEIN MINIMUM
    let base_multiplier = 2.2;

    // Pregnancy/breastfeeding protein boost
    if (pregnancy_adjusted) {
      base_multiplier += (pregnancy_protein_added / weight_kg);
    }

    // Diet type adjustments
    if (dietType === "vegan") {
      base_multiplier = 1.8;
    } else if (dietType === "vegetarian" || dietType === "pescatarian") {
      base_multiplier = 2.0;
    }

    // Protein powder adjustment
    if ((dietType === "vegan" || dietType === "vegetarian" || dietType === "pescatarian") &&
        proteinPowder === "No, and I don't want to use it") {
      base_multiplier -= 0.3;
    }

    // Age adjustments
    if (age >= 50 && age < 65) {
      base_multiplier += 0.2;
    } else if (age >= 65) {
      base_multiplier += 0.4;
    }

    // Gender adjustment
    if (gender.toLowerCase() === "female") {
      base_multiplier -= 0.2;
    }

    // Activity adjustment
    if (activityLevel === "Very Active") {
      base_multiplier += 0.2;
    } else if (activityLevel === "Active") {
      base_multiplier += 0.1;
    }

    const protein_minimum = Math.round(base_multiplier * weight_kg);

    // B) CARBOHYDRATE RANGE
    let carb_percentage;
    let range_width;

    if (dayType === "training") {
      carb_percentage = 0.40;
      range_width = 15;
    } else if (dayType === "rest") {
      carb_percentage = 0.35;
      range_width = 15;
    } else if (dayType === "refeed") {
      carb_percentage = 0.50;
      range_width = 10;
    } else if (dayType === "fasting") {
      carb_percentage = 0.30;
      range_width = 20;
    }

    let carb_center = (calories * carb_percentage) / 4;
    let carb_min = Math.round(carb_center - (range_width / 2));
    let carb_max = Math.round(carb_center + (range_width / 2));

    // Age and gender adjustments
    if (age >= 50) {
      carb_min = Math.round(carb_min * 0.95);
      carb_max = Math.round(carb_max * 0.95);
    }

    if (gender.toLowerCase() === "female") {
      carb_min = Math.round(carb_min * 0.95);
      carb_max = Math.round(carb_max * 0.95);
    }

    // C) FAT FLEXIBILITY
    const fat_minimum = Math.round(0.6 * weight_kg);
    const fat_soft_ceiling = Math.round((calories * 0.35) / 9);

    // D) FIBER RANGE
    let fiber_base = (calories / 1000) * 14;

    // Goal adjustments
    if (goal.includes("Lose Weight")) {
      fiber_base *= 1.1;
    } else if (goal.includes("Gain Weight")) {
      fiber_base *= 0.9;
    }

    // Gender adjustment
    if (gender.toLowerCase() === "female") {
      fiber_base *= 0.9;
    }

    // Age adjustments
    if (age >= 50 && age < 65) {
      fiber_base *= 1.05;
    } else if (age >= 65) {
      fiber_base *= 0.95;
    }

    // Activity adjustment
    if (activityLevel === "Very Active" || activityLevel === "Active") {
      fiber_base *= 1.05;
    } else if (activityLevel === "Sedentary") {
      fiber_base *= 0.95;
    }

    // Diet type adjustment
    if (dietType === "vegan" || dietType === "vegetarian") {
      fiber_base *= 1.1;
    } else if (dietType === "pescatarian") {
      fiber_base *= 1.05;
    }

    // Digestive health adjustments
    let digestive_modified = false;
    let constipation_support = false;

    if (goodDigestion === "No") {
      digestive_modified = true;
      result.special_conditions.digestive_modified = true;

      if (bowelFrequency === "Less than 3 times per week" || bowelFrequency === "3-4 times per week") {
        fiber_base *= 1.20;
        constipation_support = true;
      }

      if (bowelDescription === "Frequent constipation") {
        fiber_base *= 1.25;
        constipation_support = true;
      } else if (bowelDescription === "Frequent loose stools" || bowelDescription === "Varies significantly day to day") {
        fiber_base *= 0.70;
      } else if (bowelDescription === "Occasional irregularity") {
        fiber_base *= 1.10;
      }
    }

    result.special_conditions.constipation_support = constipation_support;

    const fiber_center = Math.round(fiber_base);
    let fiber_min, fiber_max;

    if (constipation_support) {
      fiber_min = Math.round(fiber_center - 2);
      fiber_max = Math.round(fiber_center + 3);
      
      if (fiber_min < 25) {
        fiber_min = 25;
        fiber_max = 30;
      } else if (fiber_max > 50) {
        fiber_max = 50;
        fiber_min = 45;
      }
    } else {
      fiber_min = Math.round(fiber_center - 4);
      fiber_max = Math.round(fiber_center + 4);
      
      if (fiber_min < 20) {
        fiber_min = 20;
        fiber_max = 28;
      } else if (fiber_max > 45) {
        fiber_max = 45;
        fiber_min = 37;
      }

      if (digestive_modified && fiber_max > 35) {
        fiber_max = 35;
        fiber_min = 27;
      }
    }

    // E) Display values (backward compatibility)
    const display_protein = protein_minimum;
    const display_carbs = Math.round((carb_min + carb_max) / 2);
    const display_fats = Math.round((calories - (display_protein * 4) - (display_carbs * 4)) / 9);

    return {
      calories: calories,
      protein: display_protein,
      carbs: display_carbs,
      fat: display_fats,
      hierarchical: {
        protein_minimum: protein_minimum,
        carb_range: { min: carb_min, max: carb_max },
        fiber_range: { min: fiber_min, max: fiber_max },
        fat_minimum: fat_minimum,
        fat_soft_ceiling: fat_soft_ceiling,
        fat_flexible: true
      }
    };
  }

  // Apply hierarchical calculations to all day types
  result.training_day = calculateHierarchicalMacros(training_day_calories, "training");
  result.rest_day = calculateHierarchicalMacros(rest_day_calories, "rest");
  result.refeed_day = calculateHierarchicalMacros(refeed_day_calories, "refeed");
  
  if (fasting_day_calories !== null) {
    result.fasting_day = calculateHierarchicalMacros(fasting_day_calories, "fasting");
  }

  // Step 9: Hydration Calculations
  function calculateHydration() {
    let water_base_ml;

    if (pregnancy_adjusted) {
      water_base_ml = 32 * weight_kg;
    } else if (gender.toLowerCase() === "female") {
      water_base_ml = 28 * weight_kg;
    } else {
      water_base_ml = 30 * weight_kg;
    }

    const activityMultipliers = {
      "Sedentary": 1.0,
      "Lightly Active": 1.1,
      "Moderately Active": 1.2,
      "Active": 1.3,
      "Very Active": 1.4
    };

    water_base_ml *= activityMultipliers[activityLevel] || 1.2;

    if (goal.includes("Lose Weight")) {
      water_base_ml *= 1.10;
    }

    // Calculate total caffeine servings
    let total_caffeine_servings = 0;
    if (drinksCoffee === "Yes" && numberOfCoffees) {
      if (numberOfCoffees === "4+") {
        total_caffeine_servings += 4;
      } else {
        total_caffeine_servings += parseInt(numberOfCoffees) || 0;
      }
    }
    if (otherCaffeine === "Energy Drinks" && energyDrinksPerDay) {
      if (energyDrinksPerDay === "4+") {
        total_caffeine_servings += 4;
      } else {
        total_caffeine_servings += parseInt(energyDrinksPerDay) || 0;
      }
    }

    result.hydration.high_caffeine_flag = total_caffeine_servings >= 3;
    if (total_caffeine_servings >= 3) {
      water_base_ml *= 1.10;
    }

    if (result.special_conditions.constipation_support) {
      water_base_ml *= 1.20;
      result.hydration.constipation_hydration_boost = true;
    }

    // Day-type variations
    const water_training_ml = Math.round(water_base_ml / 250) * 250;
    const water_rest_ml = Math.round((water_base_ml + 250) / 250) * 250;
    const water_refeed_ml = Math.round((water_base_ml - 250) / 250) * 250;
    const water_fasting_ml = includeFasting === "Yes" ? Math.round((water_base_ml + 500) / 250) * 250 : null;

    // Apply caps
    function capWater(ml) {
      if (ml > 5000) return 5000;
      if (ml < 2000) return 2000;
      return ml;
    }

    result.hydration.training_day = {
      ml: capWater(water_training_ml),
      oz: Math.round(capWater(water_training_ml) * 0.033814)
    };
    result.hydration.rest_day = {
      ml: capWater(water_rest_ml),
      oz: Math.round(capWater(water_rest_ml) * 0.033814)
    };
    result.hydration.refeed_day = {
      ml: capWater(water_refeed_ml),
      oz: Math.round(capWater(water_refeed_ml) * 0.033814)
    };
    
    if (water_fasting_ml !== null) {
      result.hydration.fasting_day = {
        ml: capWater(water_fasting_ml),
        oz: Math.round(capWater(water_fasting_ml) * 0.033814)
      };
    }

    // Check current intake adequacy
    if (waterIntake) {
      if (waterIntake === "Lots of water (over 4L / 135+ oz)") {
        result.hydration.current_intake_adequate = true;
      } else if (waterIntake === "Good amount (3-4L / 100-135 oz)") {
        if (water_training_ml <= 4000) {
          result.hydration.current_intake_adequate = true;
        }
      } else if (waterIntake === "Moderate amount (2-3L / 68-100 oz)") {
        if (water_training_ml <= 3000) {
          result.hydration.current_intake_adequate = true;
        }
      }
    }
  }

  calculateHydration();

  // Step 10: Sodium Recommendations
  function calculateSodium() {
    let sodium_need_level = "low";
    let salt_sensitive = false;

    // Activity-based elevation
    if (activityLevel === "Active" || activityLevel === "Very Active") {
      sodium_need_level = "moderate";
      if (activityLevel === "Very Active") {
        sodium_need_level = "high";
      }
    }

    // Training frequency elevation - parse from Typeform data
    let training_days_count = 4; // Default assumption
    
    if (trainingDays) {
      if (typeof trainingDays === 'string') {
        // Handle comma-separated string format from Typeform
        training_days_count = trainingDays.split(',').filter(day => day.trim()).length;
      } else if (Array.isArray(trainingDays)) {
        training_days_count = trainingDays.length;
      } else if (typeof trainingDays === 'number') {
        training_days_count = trainingDays;
      }
    }

    if (training_days_count >= 5 && sodium_need_level === "moderate") {
      sodium_need_level = "high";
    } else if (training_days_count >= 4 && sodium_need_level === "low") {
      sodium_need_level = "moderate";
    }

    // Current habits modifier
    if (saltIntake === "No: I don't use salt") {
      if (sodium_need_level === "high") {
        sodium_need_level = "moderate";
      }
      salt_sensitive = true;
    }

    // Special conditions elevation
    let elevate_sodium = false;
    if (!result.hydration.current_intake_adequate && (activityLevel === "Active" || activityLevel === "Very Active")) {
      elevate_sodium = true;
    } else if ((energyLevels === "Poor: I find that I'm often tired" || energyLevels === "Terrible: I find that I'm always tired") &&
               (activityLevel === "Active" || activityLevel === "Very Active")) {
      elevate_sodium = true;
    } else if (result.hydration.high_caffeine_flag && training_days_count >= 4) {
      elevate_sodium = true;
    } else if (includeFasting === "Yes") {
      elevate_sodium = true;
    }

    if (elevate_sodium) {
      if (sodium_need_level === "low") {
        sodium_need_level = "moderate";
      } else if (sodium_need_level === "moderate") {
        sodium_need_level = "high";
      }
    }

    // Set recommendations
    let sodium_morning, sodium_meals, electrolyte_supplement_recommended, sodium_training_note = "";

    if (sodium_need_level === "low") {
      sodium_morning = "Add a pinch of sea salt to morning water";
      sodium_meals = "No additional salting needed";
      electrolyte_supplement_recommended = false;
    } else if (sodium_need_level === "moderate") {
      sodium_morning = "Add 1/4 tsp sea salt to morning water OR electrolyte drink";
      sodium_meals = "Salt your post-workout meal";
      electrolyte_supplement_recommended = "optional";
    } else {
      sodium_morning = "Electrolyte drink recommended (LMNT, Sodi, etc)";
      sodium_meals = "Salt all main meals to taste";
      electrolyte_supplement_recommended = true;
      sodium_training_note = "Consider extra electrolytes on training days";
    }

    result.sodium = {
      need_level: sodium_need_level,
      morning_protocol: sodium_morning,
      meal_protocol: sodium_meals,
      electrolyte_supplement_recommended: electrolyte_supplement_recommended,
      salt_sensitive: salt_sensitive,
      training_note: sodium_training_note
    };
  }

  calculateSodium();

  // Step 11: Dietary Flags
  result.dietary_flags = {
    budget_conscious: budgetConstraints === "Yes: I'd prefer to stick to cheaper food options",
    gluten_free: glutenRestriction === "Yes: I'm gluten intolerant or celiac",
    nut_free: nutRestriction === "Yes: I have allergies around nuts",
    meal_variety_preference: mealVariety || "moderate",
    diet_type: dietType || "No Restrictions",
    protein_powder_use: proteinPowder || "Not specified"
  };

  // Map meal variety to simpler values
  if (result.dietary_flags.meal_variety_preference === "I prefer to eat the same foods each day") {
    result.dietary_flags.meal_variety_preference = "low";
  } else if (result.dietary_flags.meal_variety_preference === "I enjoy a little variety each day") {
    result.dietary_flags.meal_variety_preference = "moderate";
  } else if (result.dietary_flags.meal_variety_preference === "I enjoy a lot of variety each day") {
    result.dietary_flags.meal_variety_preference = "high";
  }

  // Step 12: Weekly average and timeline
  // Calculate weekly average (assuming 4 training, 2 rest, 1 refeed, 0 fasting days by default)
  const weekly_calories = (training_day_calories * 4) + (rest_day_calories * 2) + (refeed_day_calories * 1);
  result.weekly_average = Math.round(weekly_calories / 7);

  // Estimate weeks to goal (simplified calculation)
  // Would need current weight and target weight for accurate calculation
  result.estimated_weeks_to_goal = Math.round(Math.abs(result.deficit_surplus_per_day * 7) / 3850); // 3850 cal = 0.5kg

  return result;
}

// ==========================================
// MAKE.COM INTEGRATION WRAPPER
// ==========================================

/**
 * Main function for Make.com JavaScript module
 * Processes the input bundle and returns the calculation results
 * 
 * Usage in Make.com JavaScript module:
 * 
 * Input variables:
 * - userDataJson: The {{3.json}} data from your previous step
 * 
 * This function will:
 * 1. Parse the incoming JSON data
 * 2. Run the nutrition calculations  
 * 3. Return the complete results as JSON
 */
function processNutritionCalculation(input) {
  try {
    // Handle different input formats
    let userData;
    
    if (typeof input === 'string') {
      // If input is a JSON string, parse it
      userData = JSON.parse(input);
    } else if (input && input.userDataJson) {
      // If input is an object with userDataJson property
      if (typeof input.userDataJson === 'string') {
        userData = JSON.parse(input.userDataJson);
      } else {
        userData = input.userDataJson;
      }
    } else if (input && typeof input === 'object') {
      // If input is already an object, use it directly
      userData = input;
    } else {
      throw new Error('Invalid input format. Expected JSON string or object.');
    }

    // Handle nested JSON structure (common in form submissions)
    if (userData && userData.json && typeof userData.json === 'string') {
      userData = JSON.parse(userData.json);
    }

    // Validate that we have user data
    if (!userData || typeof userData !== 'object') {
      throw new Error('No valid user data found in input');
    }

    // Run the nutrition calculations
    const result = calculateNutritionTargets(userData);

    // Return the complete result - Make.com will handle JSON serialization
    return result;

  } catch (error) {
    // Return error information that Make.com can handle
    return {
      error: true,
      message: error.message,
      stack: error.stack
    };
  }
}

// ==================================================================================
// 🔥 SHELBY STARNES & JUSTIN HARRIS EXTREME CARB CYCLING METHODOLOGY
// ==================================================================================
// Implementing proven bodyweight-based formulas for maximum results
// Progressive phase system for safe escalation to extreme targets
// IMPORTANT: All multipliers are based on POUNDS, not kg!
// ==================================================================================

function calculateShelbyJustinTargets(userData) {
  // Initialize result object similar to moderate methodology
  const result = {
    bmr: 0,
    maintenance_calories: 0,
    timeline_approach: userData.resultsTimeline || "moderate",
    age_bracket: "",
    age_adjusted: false,
    methodology: "shelby-justin",
    phase: "PHASE_1_FOUNDATION", // Will be determined
    training_day: null, // Will be replaced with high/medium/low structure
    rest_day: null,
    refeed_day: null,
    fasting_day: null,
    // New structure for Shelby/Justin
    high_carb_day: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      hierarchical: {
        protein_minimum: 0,
        carb_range: { min: 0, max: 0 },
        fiber_range: { min: 0, max: 0 },
        fat_minimum: 0,
        fat_soft_ceiling: 0,
        fat_flexible: false // Not flexible on high days
      }
    },
    medium_carb_day: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      hierarchical: {
        protein_minimum: 0,
        carb_range: { min: 0, max: 0 },
        fiber_range: { min: 0, max: 0 },
        fat_minimum: 0,
        fat_soft_ceiling: 0,
        fat_flexible: true
      }
    },
    low_carb_day: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      hierarchical: {
        protein_minimum: 0,
        carb_range: { min: 0, max: 0 },
        fiber_range: { min: 0, max: 0 },
        fat_minimum: 0,
        fat_soft_ceiling: 0,
        fat_flexible: true
      }
    },
    hydration: {
      training_day: { ml: 0, oz: 0 },
      rest_day: { ml: 0, oz: 0 },
      refeed_day: { ml: 0, oz: 0 },
      fasting_day: { ml: null, oz: null },
      current_intake_adequate: false,
      high_caffeine_flag: false,
      constipation_hydration_boost: false
    },
    sodium: {
      need_level: "",
      morning_protocol: "",
      meal_protocol: "",
      electrolyte_supplement_recommended: false,
      salt_sensitive: false,
      training_note: ""
    },
    dietary_flags: {
      budget_conscious: false,
      gluten_free: false,
      nut_free: false,
      meal_variety_preference: "",
      diet_type: "",
      protein_powder_use: ""
    },
    weekly_average: 0,
    estimated_weeks_to_goal: 0,
    safety_adjusted: false,
    original_timeline_requested: userData.resultsTimeline || "moderate",
    female_optimized: false,
    age_safety_buffer: 0,
    deficit_surplus_per_day: 0,
    special_conditions: {
      pregnancy_adjusted: false,
      pregnancy_status: "",
      pregnancy_calories_added: 0,
      pregnancy_protein_added: 0,
      energy_capped: false,
      energy_level: "",
      original_goal_multiplier: 0,
      plateau_adjusted: false,
      plateau_duration: "",
      plateau_dieting_status: "",
      plateau_refeed_days: 1,
      digestive_modified: false,
      constipation_support: false
    },
    warnings: [],
    system_version: "shelby_justin_v1.0"
  };

  // Extract user data
  const {
    weight = 70,
    weightUnit = "kg",
    height = 170,
    age = 30,
    gender = "female",
    activityLevel = "Moderately Active",
    goal = "Maintain Weight",
    currentCarbIntake,
    experience300gCarbs,
    carbResponse,
    mealPlanExperience,
    goodDigestion,
    pregnancyStatus,
    energyLevels,
    dietType = userData.dietaryStyle || "No Restrictions"
  } = userData;

  // CRITICAL: Convert weight to pounds for calculations
  const weight_lbs = weightUnit === "kg" ? weight * 2.20462 : weight;
  const weight_kg = weightUnit === "lb" ? weight * 0.4536 : weight;

  // BMR calculation (same as moderate)
  let bmr;
  if (gender.toLowerCase() === "male") {
    bmr = (10 * weight_kg) + (6.25 * height) - (5 * age) + 5;
  } else {
    bmr = (10 * weight_kg) + (6.25 * height) - (5 * age) - 161;
  }
  result.bmr = Math.round(bmr);

  // Determine user's phase
  result.phase = determineShelbyJustinPhase(userData);
  
  // Get phase multipliers
  const phaseMultipliers = getShelbyJustinPhaseMultipliers(result.phase, gender);
  
  // Calculate macros for each day type
  const dayTypes = ['high_carb', 'medium_carb', 'low_carb'];
  
  dayTypes.forEach(dayType => {
    const macros = calculateShelbyJustinMacros(
      weight_lbs, 
      gender, 
      age, 
      dayType, 
      phaseMultipliers
    );
    
    // Validate and adjust if needed
    const validated = validateShelbyJustinTargets(userData, macros, dayType);
    
    // Store in result
    const dayKey = dayType + '_day';
    result[dayKey] = {
      calories: validated.macros.calories,
      protein: validated.macros.protein,
      carbs: validated.macros.carbs,
      fat: validated.macros.fat,
      hierarchical: {
        protein_minimum: validated.macros.protein,
        carb_range: { 
          min: validated.macros.carbs - 5,
          max: validated.macros.carbs + 5 
        },
        fiber_range: { 
          min: validated.macros.fiber_min,
          max: validated.macros.fiber_max 
        },
        fat_minimum: Math.round(validated.macros.fat * 0.8),
        fat_soft_ceiling: Math.round(validated.macros.fat * 1.2),
        fat_flexible: dayType !== 'high_carb'
      }
    };
    
    // Add warnings
    if (validated.warnings.length > 0) {
      result.warnings = result.warnings.concat(validated.warnings);
    }
  });

  // Map to traditional day structure for compatibility
  result.training_day = result.medium_carb_day;
  result.rest_day = result.low_carb_day;
  result.refeed_day = result.high_carb_day;

  // Copy hydration and sodium from moderate methodology
  // (These don't change with Shelby/Justin)
  copyHydrationAndSodium(result, userData, weight_kg);

  // Set dietary flags
  result.dietary_flags = {
    budget_conscious: userData.budgetConstraints === "Yes: I'd prefer to stick to cheaper food options",
    gluten_free: userData.glutenRestriction === "Yes: I'm gluten intolerant or celiac",
    nut_free: userData.nutRestriction === "Yes: I have allergies around nuts",
    meal_variety_preference: userData.mealVariety || "moderate",
    diet_type: dietType || "No Restrictions",
    protein_powder_use: userData.proteinPowder || "Not specified"
  };

  return result;
}

function determineShelbyJustinPhase(userData) {
  const currentCarbIntake = userData.currentCarbIntake || "Unknown";
  const experience300gCarbs = userData.experience300gCarbs || "No";
  const carbResponse = userData.carbResponse || "Unknown";
  const mealPlanExperience = userData.mealPlanExperience || "Never tried a structured plan";
  
  // Advanced users can skip to full methodology
  if (currentCarbIntake === "300g+" && 
      experience300gCarbs === "Yes" && 
      carbResponse === "Feel great" && 
      (mealPlanExperience === "Yes, with some success" || 
       mealPlanExperience === "Yes, and it worked well")) {
    return "FULL_METHODOLOGY";
  }
  
  // Beginners need progressive approach
  if (currentCarbIntake === "Under 100g" || 
      experience300gCarbs === "No" || 
      carbResponse === "Get bloated" ||
      userData.goodDigestion === "No") {
    return "PHASE_1_FOUNDATION";
  }
  
  // Default to phase 2
  return "PHASE_2_ESCALATION";
}

function getShelbyJustinPhaseMultipliers(phase, gender) {
  const phaseMultipliers = {
    "PHASE_1_FOUNDATION": {
      male: { high: 1.5, medium: 1.0, low: 0.5 },
      female: { high: 0.6, medium: 0.4, low: 0.2 }
    },
    "PHASE_2_ESCALATION": {
      male: { high: 2.0, medium: 1.0, low: 0.3 },
      female: { high: 0.75, medium: 0.4, low: 0.15 }
    },
    "FULL_METHODOLOGY": {
      male: { high: 2.5, medium: 1.0, low: 0.3 },
      female: { high: 0.95, medium: 0.5, low: 0.15 }
    }
  };
  
  return phaseMultipliers[phase][gender.toLowerCase()];
}

function calculateShelbyJustinMacros(weight_lbs, gender, age, dayType, multipliers) {
  let macros = {};
  
  if (gender.toLowerCase() === 'male') {
    switch(dayType) {
      case 'high_carb':
        macros = {
          carbs: Math.round(weight_lbs * multipliers.high),
          protein: Math.round(weight_lbs * 1.1),
          fat: 15  // Fixed low amount
        };
        break;
      case 'medium_carb':
        macros = {
          carbs: Math.round(weight_lbs * multipliers.medium),
          protein: Math.round(weight_lbs * 1.4),
          fat: Math.round(weight_lbs * 0.25)
        };
        break;
      case 'low_carb':
        macros = {
          carbs: Math.round(weight_lbs * multipliers.low),
          protein: Math.round(weight_lbs * 1.5),
          fat: Math.round(weight_lbs * 0.3)
        };
        break;
    }
  } else {
    switch(dayType) {
      case 'high_carb':
        macros = {
          carbs: Math.round(weight_lbs * multipliers.high),
          protein: Math.round(weight_lbs * 0.75),
          fat: 10  // Fixed low amount
        };
        break;
      case 'medium_carb':
        macros = {
          carbs: Math.round(weight_lbs * multipliers.medium),
          protein: Math.round(weight_lbs * 1.0),
          fat: Math.round(weight_lbs * 0.15)
        };
        break;
      case 'low_carb':
        macros = {
          carbs: Math.round(weight_lbs * multipliers.low),
          protein: Math.round(weight_lbs * 1.0),
          fat: Math.round(weight_lbs * 0.2)
        };
        break;
    }
  }
  
  // Age adjustments
  if (age >= 45) {
    macros.protein = Math.round(macros.protein * 1.1); // 10% increase
    macros.fat = Math.round(macros.fat + 5); // +5g for hormone support
  }
  
  // Calculate total calories from macros
  macros.calories = (macros.carbs * 4) + (macros.protein * 4) + (macros.fat * 9);
  
  // Add fiber targets based on carb intake
  macros.fiber_min = Math.round(macros.calories / 1000 * 10);
  macros.fiber_max = Math.round(macros.calories / 1000 * 14);
  
  return macros;
}

function validateShelbyJustinTargets(userData, calculatedMacros, dayType) {
  const warnings = [];
  const adjustedMacros = { ...calculatedMacros };
  
  // Estimate current carb intake
  const currentIntake = estimateCurrentCarbIntake(userData);
  
  // Check for extreme carb increase
  if (calculatedMacros.carbs > currentIntake + 200) {
    warnings.push("EXTREME_CARB_INCREASE");
    
    // Cap increase to +200g from current
    adjustedMacros.carbs = currentIntake + 200;
    adjustedMacros.calories = (adjustedMacros.carbs * 4) + 
                              (adjustedMacros.protein * 4) + 
                              (adjustedMacros.fat * 9);
  }
  
  // Check digestive readiness
  if (userData.goodDigestion === "No" && calculatedMacros.carbs > 200) {
    warnings.push("DIGESTIVE_ADAPTATION_NEEDED");
    
    // Reduce carbs by 25% and increase meal frequency
    adjustedMacros.carbs = Math.round(calculatedMacros.carbs * 0.75);
    adjustedMacros.recommendedMeals = Math.max(6, parseInt(userData.numberOfMeals) || 4);
    adjustedMacros.digestiveEnzymes = true;
  }
  
  // Age-based safety check
  if (userData.age >= 50 && dayType === 'high_carb' && calculatedMacros.carbs > 400) {
    warnings.push("AGE_ADJUSTMENT_APPLIED");
    adjustedMacros.carbs = Math.min(400, calculatedMacros.carbs);
  }
  
  return {
    macros: adjustedMacros,
    warnings: warnings
  };
}

function estimateCurrentCarbIntake(userData) {
  const currentIntake = userData.currentCarbIntake;
  
  if (!currentIntake || currentIntake === "Unknown" || currentIntake === "I don't track") {
    // Estimate based on activity and goals
    if (userData.activityLevel === "Very Active") return 250;
    if (userData.activityLevel === "Active") return 200;
    if (userData.activityLevel === "Moderately Active") return 150;
    return 100;
  }
  
  // Parse explicit ranges
  if (currentIntake === "Under 100g") return 75;
  if (currentIntake === "100-200g") return 150;
  if (currentIntake === "200-300g") return 250;
  if (currentIntake === "300g+") return 350;
  
  return 150; // Default
}

function copyHydrationAndSodium(result, userData, weight_kg) {
  // This is a simplified version - you could copy the full logic from calculateModerateTargets
  // For now, using basic calculations
  
  const water_base_ml = 30 * weight_kg;
  const water_training_ml = Math.round(water_base_ml / 250) * 250;
  const water_rest_ml = Math.round((water_base_ml + 250) / 250) * 250;
  
  result.hydration.training_day = {
    ml: Math.min(5000, Math.max(2000, water_training_ml)),
    oz: Math.round(Math.min(5000, Math.max(2000, water_training_ml)) * 0.033814)
  };
  
  result.hydration.rest_day = {
    ml: Math.min(5000, Math.max(2000, water_rest_ml)),
    oz: Math.round(Math.min(5000, Math.max(2000, water_rest_ml)) * 0.033814)
  };
  
  // Basic sodium recommendations
  result.sodium.need_level = "moderate";
  result.sodium.morning_protocol = "Add 1/4 tsp sea salt to morning water";
  result.sodium.meal_protocol = "Salt your post-workout meal";
  result.sodium.electrolyte_supplement_recommended = false;
}



// Export for use in other modules (Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    calculateNutritionTargets,
    calculateShelbyJustinTargets,
    processNutritionCalculation 
  };
} else if (typeof window !== 'undefined') {
  // Browser environment
  window.calculateNutritionTargets = calculateNutritionTargets;
  window.calculateShelbyJustinTargets = calculateShelbyJustinTargets;
  window.processNutritionCalculation = processNutritionCalculation;
}

// Self-test function
function runSelfTest() {
  console.log('Running Module 51 self-test...');
  
  const testUserData = {
    weight: 70,
    weightUnit: "kg",
    height: 170,
    age: 30,
    gender: "female",
    activityLevel: "Active",
    goal: "Lose Weight",
    resultsTimeline: "moderate",
    dietType: "No Restrictions",
    energyLevels: "Good",
    waterIntake: "Moderate amount (2-3L / 68-100 oz)"
  };

  try {
    const result = calculateNutritionTargets(testUserData);
    
    // Basic validation
    if (result.bmr <= 0) {
      console.error('SELF-TEST FAILED: Invalid BMR calculation');
      return false;
    }
    
    if (result.training_day.calories <= 0) {
      console.error('SELF-TEST FAILED: Invalid calorie calculation');
      return false;
    }
    
    if (result.training_day.hierarchical.protein_minimum <= 0) {
      console.error('SELF-TEST FAILED: Invalid protein calculation');
      return false;
    }

    // Test Make.com wrapper
    const wrapperResult = processNutritionCalculation(testUserData);
    if (wrapperResult.error) {
      console.error('SELF-TEST FAILED: Make.com wrapper error:', wrapperResult.message);
      return false;
    }
    
    console.log('✓ BMR calculation: ' + result.bmr);
    console.log('✓ Training day calories: ' + result.training_day.calories);
    console.log('✓ Protein minimum: ' + result.training_day.hierarchical.protein_minimum + 'g');
    console.log('✓ System version: ' + result.system_version);
    console.log('✓ Make.com wrapper: Working');
    
    console.log('Module 51 self-test complete - ALL TESTS PASSED');
    return true;
  } catch (error) {
    console.error('SELF-TEST FAILED with error:', error);
    return false;
  }
}

// Uncomment to run self-test
// runSelfTest(); 