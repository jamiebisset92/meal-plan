// MODULE 57 - AGE-ENHANCED SUPPLEMENT INTELLIGENCE ENGINE
// Stephanie Sanzo's elite supplement intelligence specialist with clinical-level expertise
// Processes user data, calculations, psychology, and communication for personalized supplementation

/**
 * Main supplement analysis function
 * @param {Object} userData - User data from Typeform
 * @param {Object} calculations - Results from Module-51-Calculations.js
 * @param {Object} psychologyAnalysis - Results from Module-54-Psychology.js
 * @param {Object} communicationProfile - Results from Module-56-Communication.js
 * @returns {Object} Complete supplement intelligence with age-responsive protocols
 */
function analyzeSupplements(userData, calculations, psychologyAnalysis, communicationProfile) {
  // Initialize result structure
  const result = {
    supplement_analysis: {},
    stephanie_education: {},
    personalized_protocol: {},
    advanced_customization: {},
    stephanie_messaging: {},
    safety_and_sourcing: {}
  };

  // Extract key data points
  const {
    age = 30,
    gender = "female",
    additionalSupplements = "protein only",
    biggestChallenge = "meal prep time",
    stressLevels,
    sleepSchedule,
    energyLevels = "Good",
    pregnancyStatus,
    weightPlateau,
    plateauDietingStatus,
    goodDigestion,
    bowelFrequency,
    bowelDescription,
    drinksCoffee,
    numberOfCoffees,
    otherCaffeine,
    energyDrinksPerDay,
    extraNotesEnabled = "No",
    extraNotes = ""
  } = userData;

  // Get data from other modules
  const ageBracket = psychologyAnalysis?.challenge_analysis?.age_bracket || determineAgeBracket(age);
  const stateMatrixProfile = psychologyAnalysis?.challenge_analysis?.state_matrix_profile || `Stress: ${stressLevels}, Sleep: ${sleepSchedule}, Energy: ${energyLevels}`;
  const primaryPriority = communicationProfile?.communication_analysis?.primary_priority || determinePrimaryPriority(userData.planPriorities);

  // ===========================================
  // SUPPLEMENT ANALYSIS
  // ===========================================
  
  const tierAssignment = normalizeTierAssignment(additionalSupplements);
  const caffeineLevel = calculateCaffeineLevel(drinksCoffee, numberOfCoffees, otherCaffeine, energyDrinksPerDay);
  const sleepQualityCategory = determineSleepQualityCategory(sleepSchedule);
  const specialConditions = identifySpecialConditions(pregnancyStatus, weightPlateau, goodDigestion, bowelFrequency);
  
  result.supplement_analysis = {
    age_bracket: ageBracket,
    tier_assignment: tierAssignment,
    age_specific_primary_need: getAgeSpecificPrimaryNeed(ageBracket, biggestChallenge, specialConditions),
    life_stage_priorities: getLifeStagePriorities(ageBracket),
    challenge_age_intersection: getChallengeAgeIntersection(ageBracket, biggestChallenge),
    age_appropriate_complexity: getAgeAppropriateComplexity(ageBracket, tierAssignment),
    gender_age_optimizations: getGenderAgeOptimizations(gender, ageBracket),
    energy_vitality_protocols: getEnergyVitalityProtocols(gender, ageBracket, tierAssignment),
    special_condition_present: specialConditions.primary,
    condition_severity: specialConditions.severity,
    state_matrix_profile: stateMatrixProfile,
    state_urgency_level: getStateUrgencyLevel(stressLevels, sleepSchedule, energyLevels),
    caffeine_level: caffeineLevel,
    caffeine_interaction_risk: getCaffeineInteractionRisk(caffeineLevel, energyLevels),
    sleep_quality_category: sleepQualityCategory,
    sleep_intervention_priority: getSleepInterventionPriority(sleepQualityCategory, energyLevels)
  };

  // ===========================================
  // STEPHANIE'S EDUCATION
  // ===========================================
  
  result.stephanie_education = {
    age_responsive_tier_explanation: getAgeResponsiveTierExplanation(ageBracket, tierAssignment),
    life_stage_recommendation_rationale: getLifeStageRecommendationRationale(ageBracket, tierAssignment),
    age_challenge_connection: getAgeChallengeConnection(ageBracket, biggestChallenge),
    energy_supplement_education: getEnergySupplementEducation(gender, ageBracket, tierAssignment),
    age_appropriate_expectations: getAgeAppropriateExpectations(ageBracket),
    age_conscious_cost_discussion: getAgeConsciousCostDiscussion(ageBracket, tierAssignment),
    special_condition_priority: getSpecialConditionPriority(specialConditions),
    condition_duration_expectations: getConditionDurationExpectations(specialConditions),
    state_impact_on_protocol: getStateImpactOnProtocol(stressLevels, sleepSchedule, energyLevels),
    recovery_sequence: getRecoverySequence(stressLevels, sleepSchedule, energyLevels),
    caffeine_timing_requirements: getCaffeineTimingRequirements(caffeineLevel),
    stimulant_management_plan: getStimulantManagementPlan(caffeineLevel, energyLevels),
    sleep_architecture_support: getSleepArchitectureSupport(sleepQualityCategory),
    circadian_rhythm_protocol: getCircadianRhythmProtocol(sleepQualityCategory, ageBracket)
  };

  // ===========================================
  // PERSONALIZED PROTOCOL
  // ===========================================
  
  result.personalized_protocol = {
    age_optimized_daily_foundation: getAgeOptimizedDailyFoundation(ageBracket, tierAssignment, specialConditions),
    life_stage_specific_additions: getLifeStageSpecificAdditions(ageBracket, gender),
    energy_vitality_stack: getEnergyVitalityStack(gender, ageBracket, tierAssignment, stressLevels, caffeineLevel),
    age_appropriate_timing: getAgeAppropriateTiming(ageBracket, caffeineLevel, sleepQualityCategory),
    age_sensitive_cycling: getAgeSensitiveCycling(ageBracket, gender),
    life_stage_implementation_sequence: getLifeStageImplementationSequence(ageBracket, tierAssignment, specialConditions),
    condition_specific_protocol: getConditionSpecificProtocol(specialConditions, ageBracket),
    standard_protocol_modifications: getStandardProtocolModifications(specialConditions, stressLevels),
    state_based_timing: getStateBasedTiming(stressLevels, sleepSchedule, energyLevels),
    dose_adjustments: getDoseAdjustments(stressLevels, sleepSchedule, energyLevels, ageBracket),
    caffeine_dose_modifiers: getCaffeineDoseModifiers(caffeineLevel, tierAssignment),
    nutrient_depletion_support: getNutrientDepletionSupport(caffeineLevel),
    sleep_quality_enhancement: getSleepQualityEnhancement(sleepQualityCategory, ageBracket),
    recovery_optimization: getRecoveryOptimization(sleepQualityCategory, ageBracket)
  };

  // ===========================================
  // ADVANCED CUSTOMIZATION
  // ===========================================
  
  result.advanced_customization = {
    age_specific_stress_adaptations: getAgeSpecificStressAdaptations(ageBracket, stressLevels),
    life_stage_sleep_optimizations: getLifeStageSleepOptimizations(ageBracket, sleepQualityCategory),
    energy_enhancement_options: getEnergyEnhancementOptions(gender, ageBracket, tierAssignment),
    age_lifestyle_integrations: getAgeLifestyleIntegrations(ageBracket, biggestChallenge),
    age_appropriate_troubleshooting: getAgeAppropriateTroubleshooting(ageBracket),
    life_stage_upgrade_pathways: getLifeStageUpgradePathways(ageBracket, tierAssignment),
    condition_resolution_pathway: getConditionResolutionPathway(specialConditions),
    maintenance_protocol: getMaintenanceProtocol(specialConditions, ageBracket),
    state_monitoring_markers: getStateMonitoringMarkers(stressLevels, sleepSchedule, energyLevels),
    adjustment_triggers: getAdjustmentTriggers(stressLevels, sleepSchedule, energyLevels),
    caffeine_reduction_pathway: getCaffeineReductionPathway(caffeineLevel),
    pre_workout_considerations: getPreWorkoutConsiderations(caffeineLevel),
    sleep_tracking_recommendations: getSleepTrackingRecommendations(sleepQualityCategory),
    dream_quality_support: getDreamQualitySupport(sleepQualityCategory)
  };

  // ===========================================
  // STEPHANIE'S MESSAGING
  // ===========================================
  
  result.stephanie_messaging = {
    age_appropriate_confidence_building: getAgeAppropriateConfidenceBuilding(ageBracket),
    energy_supplement_testimonial: getEnergySupplementTestimonial(gender, ageBracket),
    life_stage_expectation_management: getLifeStageExpectationManagement(ageBracket),
    age_specific_implementation_support: getAgeSpecificImplementationSupport(ageBracket, tierAssignment),
    life_stage_vision_building: getLifeStageVisionBuilding(ageBracket),
    state_recovery_messaging: getStateRecoveryMessaging(stressLevels, sleepSchedule, energyLevels),
    realistic_state_timeline: getRealisticStateTimeline(stressLevels, sleepSchedule, energyLevels),
    caffeine_optimization_message: getCaffeineOptimizationMessage(caffeineLevel),
    sustainable_energy_vision: getSustainableEnergyVision(caffeineLevel, ageBracket),
    sleep_recovery_timeline: getSleepRecoveryTimeline(sleepQualityCategory),
    quality_vs_quantity_education: getQualityVsQuantityEducation(sleepQualityCategory)
  };

  // ===========================================
  // SAFETY AND SOURCING
  // ===========================================
  
  result.safety_and_sourcing = {
    age_specific_contraindications: getAgeSpecificContraindications(ageBracket, specialConditions),
    life_stage_interaction_alerts: getLifeStageInteractionAlerts(ageBracket),
    age_appropriate_quality_advice: getAgeAppropriateQualityAdvice(ageBracket, tierAssignment),
    budget_friendly_shopping_guidance: getBudgetFriendlyShoppingGuidance(tierAssignment),
    brand_neutral_quality_markers: getBrandNeutralQualityMarkers(),
    life_stage_monitoring: getLifeStageMonitoring(ageBracket),
    condition_specific_cautions: getConditionSpecificCautions(specialConditions),
    pregnancy_safety_notes: getPregnancySafetyNotes(pregnancyStatus),
    caffeine_interaction_warnings: getCaffeineInteractionWarnings(caffeineLevel),
    timing_critical_notes: getTimingCriticalNotes(caffeineLevel),
    sleep_supplement_interactions: getSleepSupplementInteractions(sleepQualityCategory),
    age_specific_sleep_cautions: getAgeSpecificSleepCautions(ageBracket, sleepQualityCategory)
  };

  return result;
}

// ===========================================
// CORE HELPER FUNCTIONS
// ===========================================

function determineAgeBracket(age) {
  if (age >= 22 && age < 32) return "22-32";
  else if (age >= 32 && age < 42) return "32-42";
  else if (age >= 42 && age < 52) return "42-52";
  else if (age >= 52 && age < 65) return "52-65";
  else return "65+";
}

function determinePrimaryPriority(planPriorities) {
  if (!planPriorities) return "convenience";
  
  const priority = planPriorities.toLowerCase();
  if (priority.includes("convenience")) return "convenience";
  if (priority.includes("results") || priority.includes("maximum")) return "results";
  if (priority.includes("flexibility") || priority.includes("flexible")) return "flexibility";
  if (priority.includes("learning") || priority.includes("understanding")) return "learning";
  if (priority.includes("sustainable") || priority.includes("lifestyle")) return "sustainability";
  
  return "convenience";
}

function normalizeTierAssignment(additionalSupplements) {
  if (!additionalSupplements) return "protein_only";
  
  const tier = additionalSupplements.toLowerCase();
  if (tier.includes("protein only")) return "protein_only";
  if (tier.includes("essentials only") || tier.includes("basic")) return "essentials_only";
  if (tier.includes("essential plus") || tier.includes("plus")) return "essential_plus";
  if (tier.includes("full stack") || tier.includes("comprehensive")) return "full_stack";
  
  return "protein_only";
}

function calculateCaffeineLevel(drinksCoffee, numberOfCoffees, otherCaffeine, energyDrinksPerDay) {
  let totalServings = 0;
  
  // Coffee servings
  if (drinksCoffee === "Yes" && numberOfCoffees) {
    if (numberOfCoffees === "4+") {
      totalServings += 4;
    } else {
      const coffeeNum = parseInt(numberOfCoffees) || 0;
      totalServings += coffeeNum;
    }
  }
  
  // Energy drink servings
  if (otherCaffeine === "Energy Drinks" && energyDrinksPerDay) {
    if (energyDrinksPerDay === "4+") {
      totalServings += 4;
    } else {
      const energyNum = parseInt(energyDrinksPerDay) || 0;
      totalServings += energyNum;
    }
  }
  
  if (totalServings >= 6) return "extreme";
  else if (totalServings >= 4) return "high";
  else if (totalServings >= 2) return "moderate";
  else if (totalServings >= 1) return "low";
  else return "none";
}

function determineSleepQualityCategory(sleepSchedule) {
  if (!sleepSchedule) return "6-7hr";
  
  const sleep = sleepSchedule.toLowerCase();
  if (sleep.includes("irregular") || sleep.includes("<6") || sleep.includes("less than 6")) return "<6hr irregular";
  if (sleep.includes("6-7") || sleep.includes("6 to 7")) return "6-7hr";
  if (sleep.includes("7-8") || sleep.includes("7 to 8")) return "7-8hr";
  if (sleep.includes("8+") || sleep.includes("more than 8") || sleep.includes("over 8")) return "8+hr";
  
  return "6-7hr";
}

function identifySpecialConditions(pregnancy, plateau, digestion, bowelFreq) {
  let conditions = [];
  let primary = "none";
  let severity = "mild";
  
  // Pregnancy takes priority
  if (pregnancy && pregnancy !== "No") {
    conditions.push("pregnancy/breastfeeding");
    primary = "pregnancy/breastfeeding";
    severity = "high_priority";
  }
  
  // Digestive issues
  if (digestion === "No") {
    conditions.push("digestive issues");
    if (primary === "none") primary = "digestive issues";
    
    if (bowelFreq && bowelFreq.includes && bowelFreq.includes("Less than")) {
      severity = "moderate";
    }
  }
  
  // Weight plateau
  if (plateau && (plateau.includes("6") || plateau.includes("12"))) {
    conditions.push("weight plateau");
    if (primary === "none") primary = "weight plateau";
    
    if (plateau.includes("12")) severity = "severe";
    else severity = "moderate";
  }
  
  return {
    list: conditions,
    primary: primary,
    severity: severity
  };
}

// ===========================================
// SUPPLEMENT ANALYSIS FUNCTIONS
// ===========================================

function getAgeSpecificPrimaryNeed(ageBracket, challenge, specialConditions) {
  // Special conditions override everything
  if (specialConditions.primary !== "none") {
    return `${specialConditions.primary} takes priority over standard ${ageBracket} protocols`;
  }
  
  const needsMap = {
    "22-32": {
      "meal prep time": "Performance optimization with convenient delivery systems",
      "eating out": "Metabolic protection for social eating patterns",
      "work schedule": "Energy optimization for irregular schedules",
      "family obligations": "Stress management with sustained energy",
      "motivation": "Mood and energy stabilization for consistency"
    },
    "32-42": {
      "meal prep time": "Stress-resilient energy with family-friendly implementation",
      "eating out": "Blood sugar stability for professional dining",
      "work schedule": "Adrenal support with peak performance maintenance",
      "family obligations": "Sustainable energy with nervous system support",
      "motivation": "Hormone balance with stress-resistant mood support"
    },
    "42-52": {
      "meal prep time": "Hormone-supportive energy with gentle efficiency",
      "eating out": "Metabolic adaptation support for changing body",
      "work schedule": "Stress adaptation with hormonal transition support",
      "family obligations": "Identity-supportive nutrition with changing roles",
      "motivation": "Internal motivation support through body changes"
    },
    "52-65": {
      "meal prep time": "Vitality optimization with simplified systems",
      "eating out": "Health-protective choices with quality focus",
      "work schedule": "Energy preservation with cognitive support",
      "family obligations": "Self-care support with independence maintenance",
      "motivation": "Legacy health motivation with vitality focus"
    },
    "65+": {
      "meal prep time": "Independence support with gentle energy",
      "eating out": "Digestive support with social enjoyment",
      "work schedule": "Cognitive vitality with gentle energy",
      "family obligations": "Self-acceptance support with health prioritization",
      "motivation": "Dignity preservation with gentle progress"
    }
  };
  
  return needsMap[ageBracket]?.[challenge] || needsMap[ageBracket]?.["meal prep time"] || "Age-appropriate optimization";
}

function getLifeStagePriorities(ageBracket) {
  const prioritiesMap = {
    "22-32": "Foundation building, performance optimization, brain investment, future-proofing",
    "32-42": "Stress resilience, energy sustainability, hormone balance, family support",
    "42-52": "Hormonal transition support, metabolic adaptation, inflammation control, identity evolution",
    "52-65": "Vitality optimization, cognitive protection, bone health, independence maintenance",
    "65+": "Gentle vitality, digestive support, cognitive preservation, quality of life"
  };
  
  return prioritiesMap[ageBracket] || "Age-appropriate health optimization";
}

function getChallengeAgeIntersection(ageBracket, challenge) {
  return `${challenge} at ${ageBracket} requires specific supplement timing, stress adaptation, and energy balance appropriate for this life stage`;
}

function getAgeAppropriateComplexity(ageBracket, tier) {
  const complexityMap = {
    "22-32": {
      "protein_only": "Simple start - perfect for building habits",
      "essentials_only": "Strategic single supplement approach",
      "essential_plus": "Performance optimization stack",
      "full_stack": "Comprehensive peak performance protocol"
    },
    "32-42": {
      "protein_only": "Respect for time constraints with food focus",
      "essentials_only": "Efficient single supplement for busy life",
      "essential_plus": "Stress-resilient strategic stack",
      "full_stack": "Comprehensive stress and performance support"
    },
    "42-52": {
      "protein_only": "Wisdom-based approach honoring body changes",
      "essentials_only": "Gentle but effective single intervention",
      "essential_plus": "Hormone-supportive transition stack",
      "full_stack": "Complete metabolic and hormonal support"
    },
    "52-65": {
      "protein_only": "Simple approach with maximum food optimization",
      "essentials_only": "Single powerful intervention for health",
      "essential_plus": "Vitality-focused optimization",
      "full_stack": "Comprehensive longevity and vitality support"
    },
    "65+": {
      "protein_only": "Gentle food-first approach",
      "essentials_only": "Simple but effective single supplement",
      "essential_plus": "Dignified vitality support",
      "full_stack": "Complete independence and health preservation"
    }
  };
  
  return complexityMap[ageBracket]?.[tier] || "Age-appropriate complexity level";
}

function getGenderAgeOptimizations(gender, ageBracket) {
  const optimizations = {
    "female": {
      "22-32": "Iron assessment, folate, hormone balance foundation",
      "32-42": "Stress hormone support, energy optimization, family health",
      "42-52": "Hormonal transition support, bone health, mood stability",
      "52-65": "Post-menopausal vitality, bone density, cardiovascular health",
      "65+": "Gentle hormone support, bone preservation, cognitive health"
    },
    "male": {
      "22-32": "Testosterone optimization, performance enhancement, brain development",
      "32-42": "Stress-resistant performance, energy under pressure, vitality maintenance",
      "42-52": "Hormone preservation, prostate health, metabolic support",
      "52-65": "Testosterone optimization, prostate health, cardiovascular support",
      "65+": "Gentle vitality support, prostate health, cognitive preservation"
    }
  };
  
  return optimizations[gender]?.[ageBracket] || "Gender and age-appropriate optimizations";
}

function getEnergyVitalityProtocols(gender, ageBracket, tier) {
  if (tier === "protein_only") {
    return "Food-based energy optimization with age-appropriate timing";
  }
  
  if (tier === "essentials_only") {
    return gender === "male" ? 
      "Berberine for metabolic energy and blood sugar stability" :
      "Berberine for energy, mood, and hormonal balance";
  }
  
  const energyProtocols = {
    "male": {
      "essential_plus": "Tribulus for natural testosterone and vitality support",
      "full_stack": "Tribulus + Shilajit combination for comprehensive male energy and mineral support"
    },
    "female": {
      "essential_plus": "Red Ginseng for adaptogenic energy and cognitive support",
      "full_stack": "Red Ginseng + Maca combination for energy, hormone balance, and vitality"
    }
  };
  
  return energyProtocols[gender]?.[tier] || "Gender-specific energy optimization";
}

function getStateUrgencyLevel(stress, sleep, energy) {
  if (stress === "High stress levels" && sleep && sleep.includes("irregular") && 
      (energy === "Poor: I find that I'm often tired" || energy === "Terrible: I find that I'm always tired")) {
    return "critical - survival mode intervention needed";
  } else if ((stress === "High stress levels" && sleep && sleep.includes("poor")) || 
             (energy === "Poor: I find that I'm often tired" || energy === "Terrible: I find that I'm always tired")) {
    return "high - immediate support needed";
  } else if (stress === "High stress levels" || (sleep && sleep.includes("poor")) || energy === "Average") {
    return "moderate - supportive intervention beneficial";
  } else {
    return "low - optimization opportunity";
  }
}

function getCaffeineInteractionRisk(caffeineLevel, energyLevel) {
  if (caffeineLevel === "extreme") {
    return "high - adrenal protection essential, reduce energy supplement doses";
  } else if (caffeineLevel === "high" && (energyLevel === "Poor: I find that I'm often tired" || energyLevel === "Terrible: I find that I'm always tired")) {
    return "high - masking fatigue with stimulants, address root causes";
  } else if (caffeineLevel === "high") {
    return "moderate - timing and dose adjustments needed";
  } else if (caffeineLevel === "moderate") {
    return "low - manageable with proper timing";
  } else {
    return "minimal - full flexibility with supplement timing";
  }
}

function getSleepInterventionPriority(sleepCategory, energyLevel) {
  if (sleepCategory === "<6hr irregular") {
    return "critical - sleep architecture repair needed before other interventions";
  } else if (sleepCategory === "6-7hr" && (energyLevel === "Poor: I find that I'm often tired" || energyLevel === "Terrible: I find that I'm always tired")) {
    return "high - sleep quality optimization essential";
  } else if (sleepCategory === "6-7hr") {
    return "moderate - sleep quality enhancement beneficial";
  } else {
    return "low - optional sleep optimization";
  }
}

// ===========================================
// STEPHANIE'S EDUCATION FUNCTIONS
// ===========================================

function getAgeResponsiveTierExplanation(ageBracket, tier) {
  const explanations = {
    "22-32": {
      "protein_only": "I love that you want to nail the basics first! Your metabolism is strong - let's maximize every bite to build habits that'll serve you for life.",
      "essentials_only": "Smart choice for your age - one powerful supplement that gives you the biggest bang for your buck. You'll feel the difference within weeks.",
      "essential_plus": "Perfect for your age and energy level - this gives you the foundation plus that extra edge for performance and vitality.",
      "full_stack": "This is your peak performance years - let's optimize everything! This comprehensive approach maximizes your natural advantages."
    },
    "32-42": {
      "protein_only": "Smart choice keeping it simple during the chaos years! I'm 38 and sometimes less is more when you're juggling everything.",
      "essentials_only": "One powerful supplement that works WITH your busy life, not against it. This is efficiency at its finest.",
      "essential_plus": "Perfect for your demanding life stage - strategic support that actually makes everything else easier to manage.",
      "full_stack": "This is comprehensive support for your peak complexity years - everything you need to thrive, not just survive."
    },
    "42-52": {
      "protein_only": "Food-first is brilliant as your body changes. Let's focus on nutrients that support your hormones and energy during this transition.",
      "essentials_only": "One strategic intervention that works WITH your body's evolution - gentle but incredibly effective.",
      "essential_plus": "This supports your transition beautifully - adapting to your changing needs while maintaining your vitality.",
      "full_stack": "Comprehensive support for your body's evolution - this works WITH your changes, not against them."
    },
    "52-65": {
      "protein_only": "You know your body well, and food-first shows real wisdom. Let's optimize for the nutrients that matter most at this stage.",
      "essentials_only": "One powerful intervention that leverages your wisdom and supports your priorities perfectly.",
      "essential_plus": "This optimizes your vitality while respecting your experience and preferences - sophisticated but simple.",
      "full_stack": "The ultimate vitality optimization for your life stage - everything you need for your best years ahead."
    },
    "65+": {
      "protein_only": "Simple and effective - exactly right! Let's focus on foods that support your independence and energy.",
      "essentials_only": "One gentle but powerful supplement that supports your vitality beautifully - perfect for this stage.",
      "essential_plus": "Dignified support for your continued vitality - gentle but comprehensive.",
      "full_stack": "Complete support for your independence and quality of life - you deserve to feel amazing every day."
    }
  };
  
  return explanations[ageBracket]?.[tier] || "This tier perfectly matches your age and lifestyle needs";
}

function getLifeStageRecommendationRationale(ageBracket, tier) {
  return `For your ${ageBracket} life stage, the ${tier.replace('_', ' ')} approach provides the optimal balance of effectiveness and practicality`;
}

function getAgeChallengeConnection(ageBracket, challenge) {
  return `${challenge} at ${ageBracket} requires supplements that support both age-specific needs and challenge-specific obstacles`;
}

function getSpecialConditionPriority(specialConditions) {
  if (specialConditions.primary === "none") return "No special conditions requiring protocol modifications";
  return `${specialConditions.primary} takes priority and modifies standard protocols significantly`;
}

function getConditionDurationExpectations(specialConditions) {
  const expectations = {
    "pregnancy/breastfeeding": "Continue throughout pregnancy and breastfeeding period",
    "digestive issues": "3-6 months for gut healing, then maintenance protocol",
    "weight plateau": "2-4 months for metabolic reset, then standard optimization"
  };
  return expectations[specialConditions.primary] || "Standard supplement timeline applies";
}

function getStateImpactOnProtocol(stress, sleep, energy) {
  if (stress === "High stress levels" && sleep && sleep.includes("irregular")) {
    return "State requires significant protocol modifications - sleep and stress support take priority over performance";
  }
  return "State allows standard protocol with minor timing adjustments";
}

function getRecoverySequence(stress, sleep, energy) {
  if (stress === "High stress levels" && sleep && sleep.includes("irregular")) {
    return "1. Sleep architecture repair, 2. Stress adaptation support, 3. Gentle energy optimization";
  }
  return "Standard implementation sequence appropriate for current state";
}

function getCaffeineTimingRequirements(caffeineLevel) {
  const timing = {
    "extreme": "Critical timing: Take L-theanine with EVERY caffeine serving, no supplements after 2pm",
    "high": "Important timing: Energy supplements 2+ hours before first coffee, nothing after 3pm",
    "moderate": "Standard timing: Energy supplements 1 hour before coffee",
    "low": "Flexible timing: Standard supplement schedule works",
    "none": "Complete flexibility: No caffeine interactions to consider"
  };
  return timing[caffeineLevel] || "Standard caffeine timing considerations";
}

function getStimulantManagementPlan(caffeineLevel, energyLevel) {
  if (caffeineLevel === "extreme") {
    return "Reduce energy supplements by 75%, focus on adrenal support, consider caffeine taper";
  } else if (caffeineLevel === "high") {
    return "Reduce energy supplements by 50%, add L-theanine and magnesium support";
  }
  return "Standard energy supplement dosing with timing awareness";
}

function getSleepArchitectureSupport(sleepCategory) {
  const support = {
    "<6hr irregular": "Aggressive sleep support: Magnesium Threonate 2g + Glycine 3g + Melatonin 3-5mg",
    "6-7hr": "Quality optimization: Magnesium Glycinate 400mg + Glycine 3g + optional low-dose melatonin",
    "7-8hr": "Maintenance support: Magnesium 400mg + optional sleep enhancers",
    "8+hr": "Optional support only: May not need sleep supplements"
  };
  return support[sleepCategory] || "Sleep support tailored to duration and quality";
}

function getCircadianRhythmProtocol(sleepCategory, ageBracket) {
  if (sleepCategory === "<6hr irregular") {
    return "Strict circadian support: Morning light exposure, evening blue light blocking, consistent timing";
  }
  return "Standard circadian support with age-appropriate melatonin timing";
}

function getLifeStageSpecificAdditions(ageBracket, gender) {
  const additions = {
    "22-32": gender === "female" ? "Iron assessment, folate 400mcg, cycle support" : "Zinc 25mg, performance optimization",
    "32-42": "Stress adaptation, higher B-vitamins, vitamin D3+K2",
    "42-52": "Hormone transition support, inflammation control, cognitive protection",
    "52-65": "Vitality optimization, bone health, cardiovascular support",
    "65+": "Gentle vitality, digestive support, cognitive preservation"
  };
  return additions[ageBracket] || "Age and gender-appropriate additions";
}

function getAgeSensitiveCycling(ageBracket, gender) {
  if (gender === "female" && ageBracket !== "65+") {
    return "Consider cycling DIM and evening primrose oil: 3 weeks on, 1 week off to match cycle";
  }
  return "No age-specific cycling protocols needed";
}

function getLifeStageImplementationSequence(ageBracket, tier, specialConditions) {
  if (specialConditions.primary !== "none") {
    return "Week 1-2: Condition-specific protocols only, Week 3-4: Add foundation, Week 5+: Full protocol";
  }
  
  const sequences = {
    "essential_plus": "Week 1-2: Berberine only, Week 3-4: Add energy supplements, Week 5+: Add magnesium and optimization",
    "full_stack": "Week 1-2: Foundation (Berberine, Omega-3), Week 3-4: Energy stack, Week 5-6: Full protocol"
  };
  return sequences[tier] || "Standard gradual implementation over 4-6 weeks";
}

function getStandardProtocolModifications(specialConditions, stressLevels) {
  if (specialConditions.primary !== "none") {
    return "Significant modifications: Condition protocols override standard recommendations";
  } else if (stressLevels === "High stress levels") {
    return "Moderate modifications: Add stress support, reduce stimulating supplements";
  }
  return "Minor modifications: Standard protocol with timing optimization";
}

function getStateBasedTiming(stress, sleep, energy) {
  if (stress === "High stress levels" && sleep && sleep.includes("irregular")) {
    return "Crisis timing: Sleep supplements only PM, no stimulating supplements until sleep improves";
  }
  return "Standard timing: Energy supplements AM, calming supplements PM";
}

function getDoseAdjustments(stress, sleep, energy, ageBracket) {
  let modifier = 1.0;
  if (stress === "High stress levels") modifier *= 0.75;
  if (sleep && sleep.includes("irregular")) modifier *= 0.5;
  if (ageBracket === "65+") modifier *= 0.8;
  
  return `Dose adjustment factor: ${modifier} - ${modifier < 0.75 ? 'significant reduction' : modifier < 1.0 ? 'moderate reduction' : 'standard doses'}`;
}

function getCaffeineDoseModifiers(caffeineLevel, tier) {
  const modifiers = {
    "extreme": "Reduce energy supplements by 75%",
    "high": "Reduce energy supplements by 50%", 
    "moderate": "Reduce energy supplements by 25%",
    "low": "Standard doses with timing",
    "none": "Full doses available"
  };
  return modifiers[caffeineLevel] || "Standard dosing";
}

function getNutrientDepletionSupport(caffeineLevel) {
  if (caffeineLevel === "high" || caffeineLevel === "extreme") {
    return "High-dose B-Complex, Magnesium 800mg, Vitamin C 2000mg, L-theanine with each caffeine serving";
  } else if (caffeineLevel === "moderate") {
    return "B-Complex, Magnesium 400mg, L-theanine with afternoon caffeine";
  }
  return "Standard nutrient support";
}

function getSleepQualityEnhancement(sleepCategory, ageBracket) {
  const enhancements = {
    "<6hr irregular": "Focus on sleep duration first: Magnesium + Glycine + Melatonin for sleep architecture repair",
    "6-7hr": "Optimize quality: Magnesium + Glycine + Tart Cherry for deeper sleep stages",
    "7-8hr": "Fine-tune: Optional Magnesium + targeted sleep enhancers",
    "8+hr": "Maintain: Optional light sleep support if desired"
  };
  return enhancements[sleepCategory] || "Sleep quality optimization for duration";
}

function getRecoveryOptimization(sleepCategory, ageBracket) {
  if (sleepCategory === "8+hr") {
    return "Excellent sleep allows aggressive recovery protocols and performance optimization";
  } else if (sleepCategory === "<6hr irregular") {
    return "Poor sleep requires gentle recovery support, avoid overstimulation";
  }
  return "Recovery protocols matched to sleep quality and age";
}

function getEnergyEnhancementOptions(gender, ageBracket, tier) {
  if (tier === "full_stack") {
    const options = {
      "male": "Optional additions: Tongkat Ali 400mg, Cordyceps 1000mg, Boron 10mg",
      "female": "Optional additions: Rhodiola 400mg, Shatavari 500mg, Iron if needed"
    };
    return options[gender] || "Additional energy optimization options available";
  }
  return "Current tier provides optimal energy support for your needs";
}

function getAgeLifestyleIntegrations(ageBracket, challenge) {
  return `Integration strategies for ${challenge} at ${ageBracket}: timing around family schedules, work demands, and social commitments`;
}

function getAgeAppropriateTroubleshooting(ageBracket) {
  const troubleshooting = {
    "22-32": "If not feeling benefits: Check timing, increase dose gradually, ensure quality brands",
    "32-42": "If overwhelmed: Start with one supplement, add gradually, focus on stress support first",
    "42-52": "If slow response: Be patient, may take 6-8 weeks, consider hormone testing",
    "52-65": "If side effects: Start with lower doses, spread throughout day, check interactions",
    "65+": "If concerns: Start very slowly, monitor closely, work with healthcare provider"
  };
  return troubleshooting[ageBracket] || "Age-appropriate troubleshooting strategies";
}

function getLifeStageUpgradePathways(ageBracket, tier) {
  if (tier === "protein_only") {
    return "Natural progression: Add berberine first, then consider energy supplements based on results";
  } else if (tier === "essentials_only") {
    return "Next level: Add energy supplements (Tribulus/Red Ginseng) when ready for optimization";
  }
  return "Current tier provides comprehensive support - upgrades available based on specific goals";
}

function getConditionResolutionPathway(specialConditions) {
  const pathways = {
    "digestive issues": "3-6 months gut healing, then transition to maintenance with standard protocols",
    "weight plateau": "2-4 months metabolic reset, then standard optimization with monitoring",
    "pregnancy/breastfeeding": "Continue throughout, transition to standard protocols postpartum"
  };
  return pathways[specialConditions.primary] || "Standard protocols continue long-term";
}

function getMaintenanceProtocol(specialConditions, ageBracket) {
  if (specialConditions.primary !== "none") {
    return "Transition to age-appropriate maintenance after condition resolution";
  }
  return "Current protocol serves as long-term maintenance with periodic assessment";
}

function getStateMonitoringMarkers(stress, sleep, energy) {
  return "Monitor: Energy levels, mood stability, sleep quality, stress response, motivation levels";
}

function getAdjustmentTriggers(stress, sleep, energy) {
  return "Adjust if: Energy decreases, sleep worsens, stress increases, side effects occur, life circumstances change";
}

function getPreWorkoutConsiderations(caffeineLevel) {
  if (caffeineLevel === "high" || caffeineLevel === "extreme") {
    return "CAUTION: Pre-workout counts as 2-3 caffeine servings. Reduce other supplements on training days.";
  }
  return "Standard pre-workout use compatible with supplement protocol";
}

function getDreamQualitySupport(sleepCategory) {
  if (sleepCategory === "7-8hr" || sleepCategory === "8+hr") {
    return "REM enhancement: Vitamin B6 100mg, Zinc 15mg before bed, Magnolia Bark 200mg optional";
  }
  return "Focus on sleep duration and quality before REM optimization";
}

function getCaffeineOptimizationMessage(caffeineLevel) {
  const messages = {
    "extreme": "Your caffeine intake is concerning for your health. Let's work on reducing this gradually while supporting your energy naturally.",
    "high": "High caffeine can mask fatigue and stress. These supplements support your energy while we work on reducing dependence.",
    "moderate": "Your caffeine intake is manageable. We'll optimize timing to work with your supplements, not against them.",
    "low": "Perfect caffeine level - gives us maximum flexibility with supplement timing and dosing.",
    "none": "No caffeine dependency means we can be aggressive with natural energy supplements. You'll love the sustained energy!"
  };
  return messages[caffeineLevel] || "Caffeine optimization for your health and energy";
}

function getSustainableEnergyVision(caffeineLevel, ageBracket) {
  if (caffeineLevel === "high" || caffeineLevel === "extreme") {
    return `Imagine having consistent energy without needing multiple coffees. These supplements provide that steady vitality that works with your ${ageBracket} physiology.`;
  }
  return `Natural energy supplements enhance your existing vitality rather than creating dependency like caffeine can.`;
}

function getSleepRecoveryTimeline(sleepCategory) {
  const timelines = {
    "<6hr irregular": "8-12 weeks to rebuild sleep architecture, 4-6 months to feel fully recovered",
    "6-7hr": "4-6 weeks to improve quality, 8-10 weeks for optimal recovery",
    "7-8hr": "2-4 weeks to optimize quality, ongoing maintenance",
    "8+hr": "Already optimal - focus on maintaining quality"
  };
  return timelines[sleepCategory] || "Sleep improvement timeline based on current quality";
}

function getQualityVsQuantityEducation(sleepCategory) {
  if (sleepCategory === "6-7hr") {
    return "Six to seven hours of deep, quality sleep beats eight hours of restless sleep. We're optimizing every minute you get.";
  } else if (sleepCategory === "<6hr irregular") {
    return "Quantity AND quality both need work. Let's start with consistency and duration, then enhance quality.";
  }
  return "Sleep quality matters as much as duration - both contribute to how you feel and function";
}

function getEnergySupplementEducation(gender, ageBracket, tier) {
  if (tier === "protein_only" || tier === "essentials_only") {
    return "With your current approach, we're focusing on metabolic energy through smart nutrition and berberine";
  }
  
  const education = {
    "male": {
      "essential_plus": "Tribulus is my go-to for men - it naturally supports testosterone production, which means better energy, mood, recovery, and drive. I've seen incredible results with this.",
      "full_stack": "Tribulus and Shilajit together are phenomenal for men. Tribulus supports your natural testosterone while Shilajit provides minerals and adaptogens for sustained energy and recovery. This combination builds real, lasting vitality."
    },
    "female": {
      "essential_plus": "Red Ginseng is incredible for women - it gives you smooth, sustainable energy without jitters or crashes. It also supports mood and mental clarity beautifully.",
      "full_stack": "Red Ginseng and Maca together are life-changing for women. Red Ginseng gives you immediate energy and focus, while Maca balances hormones and supports long-term vitality. This combination makes you feel like yourself again."
    }
  };
  
  return education[gender]?.[tier] || "These energy supplements are specifically chosen for your gender and age";
}

function getAgeAppropriateExpectations(ageBracket) {
  const expectations = {
    "22-32": "With your age and recovery ability, expect to feel benefits within 2-3 weeks. Your body responds fast - this is an investment in decades of vitality ahead.",
    "32-42": "Give it 3-4 weeks to feel the full benefits. Your body is working harder than ever, so be patient while the supplements support your system.",
    "42-52": "Allow 4-6 weeks for full benefits as your body processes things differently now. This is about supporting your transition, not forcing change.",
    "52-65": "Be patient - give it 6-8 weeks for full benefits. Quality supplements take time to work at this stage, but the results are worth the wait.",
    "65+": "Allow 6-10 weeks for gentle, sustainable improvements. This supports your natural vitality rather than forcing quick changes."
  };
  
  return expectations[ageBracket] || "Timeline expectations appropriate for your life stage";
}

function getAgeConsciousCostDiscussion(ageBracket, tier) {
  const costAdvice = {
    "22-32": "Invest in quality now - cheaper supplements often don't work. iHerb and Amazon have great options that won't break the bank. Your future self will thank you.",
    "32-42": "Quality matters when time is limited. Spend wisely on omega-3s and energy supplements, save on basics like magnesium. iHerb is my go-to for value.",
    "42-52": "Your absorption changes, so quality becomes more important. Invest in energy supplements and omega-3s, generic is fine for B-vitamins and magnesium.",
    "52-65": "Quality over quantity at this stage. Focus your budget on bioavailable forms - ubiquinol over CoQ10, methylated B-vitamins, quality omega-3s.",
    "65+": "Simple, quality supplements are worth the investment. Better to take fewer high-quality supplements than many cheap ones."
  };
  
  return costAdvice[ageBracket] || "Age-appropriate investment advice for supplement quality";
}

// ===========================================
// PROTOCOL FUNCTIONS
// ===========================================

function getAgeOptimizedDailyFoundation(ageBracket, tier, specialConditions) {
  // Special condition overrides
  if (specialConditions.primary === "pregnancy/breastfeeding") {
    return "Prenatal/Postnatal Multi + DHA 600-1000mg + Vitamin D3 4000-6000IU + Magnesium Glycinate 400mg";
  }
  
  if (tier === "protein_only") {
    return `Food-based optimization for ${ageBracket}: High-quality protein timing, omega-3 rich foods, magnesium-rich foods, vitamin D from sun/foods`;
  }
  
  const foundations = {
    "22-32": {
      "essentials_only": "Berberine 500mg before largest meal",
      "essential_plus": "Berberine 500mg + Tribulus 750mg (M) or Red Ginseng 500mg (F) + Magnesium 400mg PM",
      "full_stack": "Berberine 500mg 2x + Tribulus 750mg + Shilajit 500mg (M) or Red Ginseng 750mg + Maca 2000mg (F) + Omega-3 2000mg + Magnesium 400mg PM + B-Complex AM"
    },
    "32-42": {
      "essentials_only": "Berberine 500mg before largest meal + Magnesium 400mg PM",
      "essential_plus": "Berberine 500mg AM + Tribulus 1000mg (M) or Red Ginseng 750mg (F) + Magnesium 400mg PM + Ashwagandha 600mg PM",
      "full_stack": "Berberine 500mg 2x + Tribulus 1000mg + Shilajit 500mg (M) or Red Ginseng 750mg + Maca 2000mg (F) + Omega-3 2500mg + Magnesium 400mg PM + Ashwagandha 600mg PM + B-Complex AM"
    },
    "42-52": {
      "essentials_only": "Berberine 500mg 2x daily + Vitamin D3 4000IU + K2",
      "essential_plus": "Berberine 500mg 2x + Tribulus 1000mg (M) or Red Ginseng 750mg (F) + Omega-3 3000mg + Magnesium 400mg PM + D3 4000IU + K2",
      "full_stack": "Berberine 500mg 2x + Tribulus 1500mg + Shilajit 750mg (M) or Red Ginseng 1000mg + Maca 3000mg (F) + Omega-3 3000mg + Magnesium 400mg PM + D3 5000IU + K2 + CoQ10 200mg"
    },
    "52-65": {
      "essentials_only": "Berberine 500mg before main meal + CoQ10 200mg",
      "essential_plus": "Berberine 500mg + Tribulus 750mg (M) or Red Ginseng 500mg (F) + Omega-3 3000mg + CoQ10 200mg + D3 5000IU",
      "full_stack": "Berberine 500mg + Tribulus 1000mg + Shilajit 500mg (M) or Red Ginseng 750mg + Maca 2000mg (F) + Omega-3 3000mg + CoQ10 300mg + D3 5000IU + K2 + B12 2000mcg"
    },
    "65+": {
      "essentials_only": "Berberine 300mg before main meal + B12 1000mcg",
      "essential_plus": "Berberine 300mg + Tribulus 500mg (M) or Red Ginseng 300mg (F) + Digestive Enzymes + B12 1000mcg + D3 5000IU",
      "full_stack": "Berberine 300mg + Tribulus 500mg + Shilajit 300mg (M) or Red Ginseng 500mg + Maca 1000mg (F) + Omega-3 3000mg + CoQ10 200mg + B12 2000mcg + Digestive Enzymes + D3 5000IU"
    }
  };
  
  return foundations[ageBracket]?.[tier] || "Age-optimized foundation protocol";
}

function getEnergyVitalityStack(gender, ageBracket, tier, stressLevels, caffeineLevel) {
  if (tier === "protein_only" || tier === "essentials_only") {
    return "Energy optimization through berberine and strategic meal timing";
  }
  
  // Dose adjustments based on state and caffeine
  let doseModifier = 1.0;
  if (stressLevels === "High stress levels") doseModifier *= 0.75;
  if (caffeineLevel === "high" || caffeineLevel === "extreme") doseModifier *= 0.5;
  
  const stacks = {
    "male": {
      "essential_plus": `Tribulus ${Math.round(750 * doseModifier)}mg AM (natural testosterone and energy support)`,
      "full_stack": `Tribulus ${Math.round(1000 * doseModifier)}mg AM + Shilajit ${Math.round(500 * doseModifier)}mg AM (comprehensive male vitality stack)`
    },
    "female": {
      "essential_plus": `Red Ginseng ${Math.round(500 * doseModifier)}mg AM (adaptogenic energy and mood support)`,
      "full_stack": `Red Ginseng ${Math.round(750 * doseModifier)}mg AM + Maca ${Math.round(2000 * doseModifier)}mg AM (energy and hormone balance stack)`
    }
  };
  
  return stacks[gender]?.[tier] || "Gender-specific energy optimization";
}

function getAgeAppropriateTiming(ageBracket, caffeineLevel, sleepQualityCategory) {
  let timing = "";
  
  // Base timing by age
  if (ageBracket === "22-32" || ageBracket === "32-42") {
    timing = "Energy supplements: 30 minutes before breakfast. ";
  } else {
    timing = "Energy supplements: With breakfast for better absorption. ";
  }
  
  // Caffeine adjustments
  if (caffeineLevel === "high" || caffeineLevel === "extreme") {
    timing += "Take 2 hours before first coffee. ";
  } else if (caffeineLevel === "moderate") {
    timing += "Take 1 hour before coffee. ";
  }
  
  // Sleep considerations
  if (sleepQualityCategory === "<6hr irregular") {
    timing += "Nothing stimulating after 2pm. Magnesium and sleep supplements 1 hour before bed.";
  } else {
    timing += "Evening supplements: Magnesium 1 hour before bed.";
  }
  
  return timing;
}

function getConditionSpecificProtocol(specialConditions, ageBracket) {
  if (specialConditions.primary === "none") {
    return "Standard age-optimized protocol applies";
  }
  
  const protocols = {
    "pregnancy/breastfeeding": "Prenatal Multi + DHA 800-1000mg + Vitamin D3 4000-6000IU + Magnesium Glycinate 400-600mg + B6 25mg for nausea + Probiotics. No energy supplements - focus on nourishment.",
    "digestive issues": "L-Glutamine 5g 2x daily + Digestive Enzymes with meals + Magnesium Citrate 400-600mg + Probiotics 50B CFU + Omega-3 3000mg. Energy supplements only after gut healing begins.",
    "weight plateau": `Berberine 500mg 3x daily + Iodine 150mcg + Selenium 200mcg + Ashwagandha 600mg PM + ${ageBracket.includes("42") ? "7-Keto DHEA 100mg" : "Chromium 200mcg"}. Energy supplements at full dose to combat metabolic adaptation.`
  };
  
  return protocols[specialConditions.primary] || "Condition-specific protocol tailored to needs";
}

// ===========================================
// ADVANCED CUSTOMIZATION FUNCTIONS
// ===========================================

function getAgeSpecificStressAdaptations(ageBracket, stressLevels) {
  if (stressLevels !== "High stress levels") {
    return "Standard stress management appropriate for age";
  }
  
  const adaptations = {
    "22-32": "Rhodiola 400mg AM + Ashwagandha 300mg PM + B-Complex for stress resilience building",
    "32-42": "Ashwagandha 600mg PM + L-Theanine 200mg 2x + Magnesium 600mg for family stress management",
    "42-52": "Holy Basil 600mg + Magnesium complex + Phosphatidylserine 300mg for hormonal stress support",
    "52-65": "Ashwagandha 600mg + B-Complex methylated + Omega-3 high dose for gentle stress management",
    "65+": "L-Theanine 200mg 2x + Magnesium 400mg + Gentle herbs for calm stress response"
  };
  
  return adaptations[ageBracket] || "Age-appropriate stress adaptation protocol";
}

function getLifeStageSleepOptimizations(ageBracket, sleepCategory) {
  const optimizations = {
    "22-32": {
      "<6hr irregular": "Aggressive sleep protocol: Magnesium 800mg + Glycine 6g + Melatonin 5mg - your recovery can handle it",
      "6-7hr": "Quality optimization: Magnesium 400mg + Glycine 3g + Tart Cherry for peak recovery",
      "7-8hr": "Performance enhancement: Optional sleep boosters for cognitive and physical performance",
      "8+hr": "Already optimal - focus on maintaining consistency and quality"
    },
    "32-42": {
      "<6hr irregular": "Family-friendly protocol: Magnesium Threonate 2g + Glycine 3g + low-dose Melatonin 1mg",
      "6-7hr": "Stress-resilient sleep: Magnesium 400mg + Ashwagandha 300mg PM + L-Theanine 200mg",
      "7-8hr": "Maintenance with stress support: Magnesium + optional adaptogens",
      "8+hr": "Excellent for this life stage - maintain with minimal intervention"
    },
    "42-52": {
      "<6hr irregular": "Gentle hormone-supportive: Magnesium complex + Glycine 3g + Melatonin 0.5mg",
      "6-7hr": "Transition support: Magnesium 400mg + Holy Basil 400mg + B6 for dream quality",
      "7-8hr": "Optimal for hormonal changes - gentle maintenance support",
      "8+hr": "Perfect for this transition phase - preserve with hormone-supportive nutrients"
    },
    "52-65": {
      "<6hr irregular": "Gentle restoration: Magnesium 400mg + Glycine 2g + very low Melatonin 0.3mg",
      "6-7hr": "Vitality-supporting: Magnesium complex + B-vitamins + gentle herbs",
      "7-8hr": "Excellent sleep for this age - maintain with simple support",
      "8+hr": "Outstanding for this life stage - minimal intervention needed"
    },
    "65+": {
      "<6hr irregular": "Ultra-gentle: Magnesium 300mg + Glycine 2g + natural sleep aids",
      "6-7hr": "Age-appropriate quality: Magnesium + digestive enzymes PM + calming herbs",
      "7-8hr": "Very good for this age - maintain with gentle nutrients",
      "8+hr": "Exceptional sleep quality - preserve with minimal support"
    }
  };
  
  return optimizations[ageBracket]?.[sleepCategory] || "Age and sleep-appropriate optimization protocol";
}

function getCaffeineReductionPathway(caffeineLevel) {
  if (caffeineLevel === "none" || caffeineLevel === "low") {
    return "No caffeine reduction needed - maintain current levels";
  }
  
  const pathways = {
    "extreme": "Week 1-2: Reduce by 1 serving, add L-theanine 200mg with each remaining serving. Week 3-4: Reduce by another serving, increase adrenal support. Week 5+: Continue gradual reduction of 1 serving every 2 weeks.",
    "high": "Week 1-2: Reduce by 1 serving, add adaptogenic support. Week 3-4: Replace 1 coffee with green tea. Week 5+: Continue gentle reduction as desired.",
    "moderate": "Optional reduction: Replace afternoon coffee with green tea or herbal tea. Add L-theanine if reducing intake causes withdrawal."
  };
  
  return pathways[caffeineLevel] || "Gentle caffeine optimization strategy";
}

function getSleepTrackingRecommendations(sleepQualityCategory) {
  const recommendations = {
    "<6hr irregular": "Track: Total sleep time, bedtime consistency, wake time consistency, caffeine cutoff time, sleep quality rating 1-10",
    "6-7hr": "Track: Sleep quality rating, how rested you feel, energy levels throughout day, supplement timing effects",
    "7-8hr": "Track: Energy levels, mood, recovery markers, dream recall, supplement optimization",
    "8+hr": "Track: Performance metrics, cognitive function, energy consistency, optional biohacking metrics"
  };
  
  return recommendations[sleepQualityCategory] || "Sleep quality and duration tracking";
}

// ===========================================
// STEPHANIE'S MESSAGING FUNCTIONS
// ===========================================

function getAgeAppropriateConfidenceBuilding(ageBracket) {
  const confidence = {
    "22-32": "You're building the foundation for decades of vitality! Every supplement you take now is an investment in your future self.",
    "32-42": "You're in your power years - these supplements help you thrive through the demands, not just survive them.",
    "42-52": "Your body's evolution is wisdom, not limitation. These supplements work WITH your changes to unlock new vitality.",
    "52-65": "You've earned the right to feel amazing. These supplements support the energy and clarity you deserve.",
    "65+": "Your commitment to vitality is inspiring. These gentle supports help you maintain independence and joy."
  };
  
  return confidence[ageBracket] || "You're making a powerful choice for your health at exactly the right time";
}

function getEnergySupplementTestimonial(gender, ageBracket) {
  const testimonials = {
    "male": {
      "22-32": "I recommend Tribulus to every guy in their twenties - the energy, motivation, and recovery benefits are incredible. You'll notice better workouts and sustained drive.",
      "32-42": "At 38, I see how much Tribulus helps men maintain their edge during the crazy busy years. It's natural testosterone support when you need it most.",
      "42-52": "Men in their forties tell me Tribulus brings back that feeling of vitality they thought was gone. It's not about turning back time - it's about optimizing where you are now.",
      "52-65": "The gentlemen I work with love how Tribulus provides sustained energy without feeling wired. It supports natural vitality beautifully.",
      "65+": "Even at lower doses, Tribulus provides men with gentle, sustained energy that enhances quality of life and independence."
    },
    "female": {
      "22-32": "Red Ginseng gives young women that smooth, sustained energy without the crashes. It's perfect for busy, demanding lifestyles.",
      "32-42": "As a 38-year-old woman myself, Red Ginseng has been life-changing. It provides energy that works WITH your hormones, not against them.",
      "42-52": "Women going through hormonal changes love how Red Ginseng provides steady energy and mood support. It's like having your energy back.",
      "52-65": "Post-menopausal women tell me Red Ginseng helps them feel vital and energetic again - gentle but incredibly effective.",
      "65+": "Red Ginseng provides beautiful, gentle energy that supports independence and daily activities without overstimulation."
    }
  };
  
  return testimonials[gender]?.[ageBracket] || "These energy supplements provide the natural vitality support you're looking for";
}

function getLifeStageExpectationManagement(ageBracket) {
  const expectations = {
    "22-32": "Expect noticeable energy and mood improvements within 2-3 weeks. Your recovery is fast, so benefits come quickly.",
    "32-42": "Give it 3-4 weeks for full benefits. Your body is working hard, so patience while the supplements support your system pays off.",
    "42-52": "Allow 4-6 weeks for the full effects. Your body processes things differently now, but the results are worth the patience.",
    "52-65": "Be patient - 6-8 weeks for full benefits. Quality supplements work gently but effectively at this life stage.",
    "65+": "Allow 8-10 weeks for gentle, sustainable improvements. This supports your natural vitality rather than forcing changes."
  };
  
  return expectations[ageBracket] || "Realistic expectations for your life stage and supplement response";
}

function getAgeSpecificImplementationSupport(ageBracket, tier) {
  const support = {
    "22-32": "Start strong and be consistent. Your body responds fast, so you'll know quickly if something's working. Track your energy and mood daily.",
    "32-42": "Keep it simple during busy periods. Set phone reminders, keep supplements with your coffee, make it automatic so you don't have to think about it.",
    "42-52": "Be patient with your body's response time. Changes might be subtle at first, but they build over time. Listen to your body and adjust as needed.",
    "52-65": "Start slowly and build up. Your body wisdom is valuable - if something doesn't feel right, trust that instinct and adjust accordingly.",
    "65+": "Gentle consistency wins. Start with lower doses, take with food, and don't rush the process. Your health is worth the careful approach."
  };
  
  return support[ageBracket] || "Age-appropriate implementation support and guidance";
}

function getLifeStageVisionBuilding(ageBracket) {
  const visions = {
    "22-32": "Imagine having consistent energy and mood for all your adventures ahead. You're building the foundation for decades of vitality.",
    "32-42": "Picture thriving through your busiest years rather than just surviving them. These supplements give you the edge to excel in everything.",
    "42-52": "Envision feeling energetic and confident as your body evolves. This is about embracing your changes while maintaining your vitality.",
    "52-65": "See yourself with the energy and clarity to enjoy your wisdom years fully. This supports the vitality you've earned.",
    "65+": "Imagine maintaining your independence and zest for life. These supplements support the active, engaged life you deserve."
  };
  
  return visions[ageBracket] || "Vision of optimal health and vitality for your life stage";
}

function getStateRecoveryMessaging(stress, sleep, energy) {
  if (stress === "High stress levels" && sleep && sleep.includes("irregular")) {
    return "You're in survival mode right now, and that's okay. These supplements will gently support your recovery - be patient with yourself during this process.";
  } else if (stress === "High stress levels") {
    return "High stress is draining, but these supplements will help your body adapt and become more resilient. You'll start feeling more balanced within weeks.";
  } else if (sleep && sleep.includes("irregular")) {
    return "Poor sleep affects everything, but we're going to fix this. These sleep supplements will help you rebuild healthy sleep patterns and feel human again.";
  }
  return "Your current state allows for optimization rather than crisis management. These supplements will enhance your already good foundation.";
}

function getRealisticStateTimeline(stress, sleep, energy) {
  if (stress === "High stress levels" && sleep && sleep.includes("irregular")) {
    return "2-3 weeks to feel initial calm, 6-8 weeks for significant improvement, 3-4 months to feel fully recovered";
  } else if (stress === "High stress levels" || (sleep && sleep.includes("irregular"))) {
    return "1-2 weeks for initial benefits, 4-6 weeks for significant improvement, 8-10 weeks for full optimization";
  }
  return "1-2 weeks for initial energy boost, 3-4 weeks for full benefits, ongoing optimization from there";
}

function getAgeAppropriateQualityAdvice(ageBracket, tier) {
  const advice = {
    "22-32": "Invest in quality now - it's worth it long-term. Look for third-party testing and avoid the cheapest options. iHerb and Amazon have great quality at good prices.",
    "32-42": "Quality matters when time is limited. Focus your budget on energy supplements and omega-3s, generic is fine for basics like magnesium. Shop smart on iHerb.",
    "42-52": "Your absorption changes, so quality becomes more important. Invest in bioavailable forms and well-researched brands. Generic B-vitamins are fine, but spend on omega-3s.",
    "52-65": "Quality over quantity at this stage. Fewer high-quality supplements work better than many cheap ones. Look for USP certification and molecular distillation.",
    "65+": "Simple, pure supplements are worth the investment. Avoid fillers and artificial additives. Work with a pharmacist if taking multiple medications."
  };
  
  return advice[ageBracket] || "Quality guidance appropriate for your age and supplement needs";
}

function getLifeStageInteractionAlerts(ageBracket) {
  const alerts = {
    "22-32": "Generally low interaction risk. Be cautious with energy supplements if taking medication for ADHD or anxiety.",
    "32-42": "Moderate interaction risk. Check berberine interactions with diabetes or blood pressure medications. Ashwagandha may affect thyroid medication.",
    "42-52": "Higher interaction risk. Many hormone-supporting supplements can interact with thyroid, blood pressure, and diabetes medications.",
    "52-65": "Significant interaction risk. Blood thinners, diabetes medications, and heart medications commonly interact with supplements.",
    "65+": "High interaction risk. Multiple medications increase interaction potential. Always consult pharmacist or doctor before starting new supplements."
  };
  
  return alerts[ageBracket] || "Age-appropriate medication interaction awareness";
}

function getLifeStageMonitoring(ageBracket) {
  const monitoring = {
    "22-32": "Track: Energy levels, mood, sleep quality, exercise performance, overall vitality",
    "32-42": "Track: Stress resilience, energy consistency, sleep quality, mood stability, family life balance",
    "42-52": "Track: Energy levels, mood, hot flashes (if applicable), joint comfort, cognitive clarity",
    "52-65": "Track: Energy, mood, cognitive function, physical comfort, independence markers",
    "65+": "Track: Daily energy, cognitive clarity, physical function, mood, overall quality of life"
  };
  
  return monitoring[ageBracket] || "Age-appropriate monitoring parameters";
}

function getConditionSpecificCautions(specialConditions) {
  const cautions = {
    "pregnancy/breastfeeding": "AVOID: Energy supplements, weight loss herbs, high-dose vitamins, unstudied herbs. Stick to prenatal-safe nutrients only.",
    "digestive issues": "START SLOWLY: Introduce one supplement at a time. Take with food. Probiotics may cause temporary digestive changes.",
    "weight plateau": "MONITOR: Blood sugar, blood pressure, thyroid function. Some metabolic supplements can affect these markers."
  };
  
  return cautions[specialConditions.primary] || "Standard supplement safety precautions apply";
}

function getTimingCriticalNotes(caffeineLevel) {
  if (caffeineLevel === "high" || caffeineLevel === "extreme") {
    return "CRITICAL TIMING: Energy supplements must be taken 2+ hours before first caffeine. Nothing stimulating after 2pm. Sleep supplements 1 hour before bed.";
  } else if (caffeineLevel === "moderate") {
    return "TIMING MATTERS: Take energy supplements 1 hour before coffee. Sleep supplements 1 hour before bed.";
  }
  return "FLEXIBLE TIMING: Standard supplement schedule works well with minimal caffeine interaction concerns.";
}

function getSleepSupplementInteractions(sleepCategory) {
  if (sleepCategory === "<6hr irregular") {
    return "AVOID: Combining multiple sleep aids without medical supervision. Start with one supplement, add others gradually.";
  }
  return "STANDARD CAUTIONS: Don't combine with alcohol or sleep medications without medical approval. Start with lower doses.";
}

function getAgeSpecificSleepCautions(ageBracket, sleepCategory) {
  const cautions = {
    "22-32": "Young adults can handle higher doses of melatonin (3-5mg) if needed for severe sleep issues",
    "32-42": "Moderate melatonin doses (1-3mg) work well. Be cautious with multiple sleep aids while managing family responsibilities",
    "42-52": "Lower melatonin doses (0.5-1mg) often work better due to hormonal changes. Avoid dependency on sleep aids",
    "52-65": "Very low melatonin doses (0.3-0.5mg) are often sufficient. Focus on magnesium and glycine for primary support",
    "65+": "Ultra-low melatonin (0.3mg max) or avoid entirely. Focus on gentle, natural sleep support. Check medication interactions"
  };
  
  return cautions[ageBracket] || "Age-appropriate sleep supplement safety guidelines";
}

// ===========================================
// SAFETY AND SOURCING FUNCTIONS
// ===========================================

function getBrandNeutralQualityMarkers() {
  return "Look for: Third-party testing, USP or NSF certification, no artificial fillers, proper dosages matching research. For omega-3s: molecular distillation and IFOS certification. For probiotics: CFU count and strain identification. I'm not affiliated with any companies, so this advice is purely about quality, not sales.";
}

function getBudgetFriendlyShoppingGuidance(tier) {
  const guidance = {
    "protein_only": "Focus your budget on high-quality whole foods. Generic magnesium and vitamin D are fine if you do add supplements later.",
    "essentials_only": "Berberine: generic works well, look for 500mg standardized extract. iHerb and Amazon have good options under $20.",
    "essential_plus": "Prioritize quality for energy supplements (Tribulus/Red Ginseng), generic is fine for magnesium. Budget $40-60 monthly.",
    "full_stack": "Invest in omega-3s and energy supplements, save on B-vitamins and magnesium. iHerb bulk buying saves money. Budget $80-120 monthly."
  };
  
  return guidance[tier] || "I recommend iHerb and Amazon for competitive prices and quality. Focus your budget on the supplements that matter most - omega-3s and energy supplements - and save on basics like magnesium and B-vitamins where generic works fine.";
}

function getAgeSpecificContraindications(ageBracket, specialConditions) {
  let contraindications = [];
  
  if (specialConditions.primary === "pregnancy/breastfeeding") {
    contraindications.push("Avoid: High-dose vitamin A, energy supplements, weight loss herbs, high-dose herbs in general");
  }
  
  if (ageBracket === "65+") {
    contraindications.push("Start with lower doses, monitor for medication interactions, be cautious with high-dose melatonin");
  }
  
  contraindications.push("Always check with healthcare provider if taking medications, especially blood thinners, diabetes medications, or blood pressure medications");
  
  return contraindications.join(". ");
}

function getPregnancySafetyNotes(pregnancyStatus) {
  if (!pregnancyStatus || pregnancyStatus === "No") {
    return "Standard supplement safety applies";
  }
  
  const notes = {
    "Pregnant": "AVOID: Energy supplements, weight loss herbs, high-dose vitamin A (retinol), high-dose herbs. SAFE: Prenatal multi, DHA, vitamin D3, magnesium, probiotics, ginger for nausea.",
    "Breastfeeding": "AVOID: Weight loss herbs, stimulating herbs, high-dose herbs. SAFE: Postnatal multi, high-dose DHA, vitamin D3, magnesium, probiotics. Energy supplements generally not recommended.",
    "Trying to Conceive": "SAFE: Prenatal multi, folate, CoQ10, vitamin D3, omega-3s. MODERATE: Some herbs like red ginseng in lower doses. AVOID: Weight loss supplements."
  };
  
  return notes[pregnancyStatus] || "Consult healthcare provider for pregnancy-specific supplement guidance";
}

function getCaffeineInteractionWarnings(caffeineLevel) {
  const warnings = {
    "extreme": "CRITICAL: Do not add stimulating supplements. Take L-theanine with every caffeine serving. Monitor heart rate and blood pressure.",
    "high": "CAUTION: Reduce energy supplement doses by 50%. Space supplements 2+ hours from caffeine. Monitor for overstimulation.",
    "moderate": "TIMING: Take energy supplements 1 hour before coffee. Monitor afternoon energy crashes.",
    "low": "MINIMAL: Standard timing recommendations apply.",
    "none": "OPTIMAL: Full flexibility with supplement timing and doses."
  };
  
  return warnings[caffeineLevel] || "Standard caffeine interaction precautions";
}

// ===========================================
// MAKE.COM INTEGRATION WRAPPER
// ===========================================

/**
 * Main function for Make.com JavaScript module
 * Processes all four data sources for comprehensive supplement intelligence
 * 
 * Usage in Make.com JavaScript module:
 * 
 * Input variables:
 * - userDataJson: The {{3.json}} data from Typeform
 * - calculationsResponse: The {{51.textResponse}} from Module-51-Calculations
 * - psychologyResponse: The {{54.textResponse}} from Module-54-Psychology
 * - communicationResponse: The {{56.textResponse}} from Module-56-Communication
 * 
 * This function will:
 * 1. Parse all four input sources
 * 2. Run the supplement analysis
 * 3. Return the complete supplement intelligence as JSON
 */
function processSupplementAnalysis(input) {
  try {
    let userData, calculations, psychologyAnalysis, communicationProfile;

    // Handle different input formats
    if (input && input.userDataJson && input.calculationsResponse && input.psychologyResponse && input.communicationResponse) {
      // Standard Make.com format with all four inputs
      userData = typeof input.userDataJson === 'string' ? JSON.parse(input.userDataJson) : input.userDataJson;
      calculations = typeof input.calculationsResponse === 'string' ? JSON.parse(input.calculationsResponse) : input.calculationsResponse;
      psychologyAnalysis = typeof input.psychologyResponse === 'string' ? JSON.parse(input.psychologyResponse) : input.psychologyResponse;
      communicationProfile = typeof input.communicationResponse === 'string' ? JSON.parse(input.communicationResponse) : input.communicationResponse;
    } else if (input && input.userDataJson) {
      // Partial input - work with what we have
      userData = typeof input.userDataJson === 'string' ? JSON.parse(input.userDataJson) : input.userDataJson;
      calculations = input.calculationsResponse ? (typeof input.calculationsResponse === 'string' ? JSON.parse(input.calculationsResponse) : input.calculationsResponse) : {};
      psychologyAnalysis = input.psychologyResponse ? (typeof input.psychologyResponse === 'string' ? JSON.parse(input.psychologyResponse) : input.psychologyResponse) : {};
      communicationProfile = input.communicationResponse ? (typeof input.communicationResponse === 'string' ? JSON.parse(input.communicationResponse) : input.communicationResponse) : {};
    } else if (typeof input === 'object' && input.age) {
      // Direct user data object
      userData = input;
      calculations = {};
      psychologyAnalysis = {};
      communicationProfile = {};
    } else {
      throw new Error('Invalid input format. Expected userDataJson and optionally other module responses.');
    }

    // Handle nested JSON structure
    if (userData && userData.json && typeof userData.json === 'string') {
      userData = JSON.parse(userData.json);
    }

    // Validate user data
    if (!userData || typeof userData !== 'object') {
      throw new Error('No valid user data found in input');
    }

    // Run the supplement analysis
    const result = analyzeSupplements(userData, calculations, psychologyAnalysis, communicationProfile);

    // Return the complete result
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

// Export for use in other modules (Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    analyzeSupplements,
    processSupplementAnalysis 
  };
} else if (typeof window !== 'undefined') {
  // Browser environment
  window.analyzeSupplements = analyzeSupplements;
  window.processSupplementAnalysis = processSupplementAnalysis;
}

// Self-test function
function runSupplementTest() {
  console.log('Running Module 57 Supplement self-test...');
  
  const testUserData = {
    age: 35,
    gender: "female",
    additionalSupplements: "essential plus",
    biggestChallenge: "meal prep time",
    stressLevels: "High stress levels",
    energyLevels: "Good",
    sleepSchedule: "6-7 hours consistently",
    drinksCoffee: "Yes",
    numberOfCoffees: "2",
    planPriorities: "convenience"
  };

  const testCalculations = {
    age_bracket: "32-42",
    bmr: 1450
  };

  const testPsychology = {
    challenge_analysis: {
      age_bracket: "32-42",
      state_matrix_profile: "Stress: High stress levels, Sleep: 6-7hr, Energy: Good"
    }
  };

  const testCommunication = {
    communication_analysis: {
      primary_priority: "convenience"
    }
  };

  try {
    const result = analyzeSupplements(testUserData, testCalculations, testPsychology, testCommunication);
    
    // Basic validation
    if (!result.supplement_analysis || !result.stephanie_education) {
      console.error('SUPPLEMENT TEST FAILED: Missing required sections');
      return false;
    }
    
    if (!result.supplement_analysis.age_bracket) {
      console.error('SUPPLEMENT TEST FAILED: Missing age bracket analysis');
      return false;
    }

    // Test Make.com wrapper
    const wrapperResult = processSupplementAnalysis({
      userDataJson: testUserData,
      calculationsResponse: testCalculations,
      psychologyResponse: testPsychology,
      communicationResponse: testCommunication
    });
    
    if (wrapperResult.error) {
      console.error('SUPPLEMENT TEST FAILED: Make.com wrapper error:', wrapperResult.message);
      return false;
    }
    
    console.log('✓ Age bracket: ' + result.supplement_analysis.age_bracket);
    console.log('✓ Tier assignment: ' + result.supplement_analysis.tier_assignment);
    console.log('✓ Energy protocols: ' + result.supplement_analysis.energy_vitality_protocols.substring(0, 60) + '...');
    console.log('✓ Caffeine level: ' + result.supplement_analysis.caffeine_level);
    console.log('✓ Make.com wrapper: Working');
    
    console.log('Module 57 Supplement self-test complete - ALL TESTS PASSED');
    return true;
  } catch (error) {
    console.error('SUPPLEMENT TEST FAILED with error:', error);
    return false;
  }
}

// Uncomment to run self-test
// runSupplementTest(); 