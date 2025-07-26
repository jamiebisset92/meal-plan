// MODULE 51 - PSYCHOLOGY ANALYSIS
// Stephanie Sanzo's advanced challenge psychology specialist
// Processes user data and nutrition calculations to provide personalized psychological coaching

/**
 * Main psychology analysis function
 * @param {Object} userData - User data from Typeform
 * @param {Object} calculations - Results from Module-51-Calculations.js
 * @returns {Object} Complete psychology analysis with Stephanie's coaching approach
 */
function analyzePsychology(userData, calculations) {
  // Initialize result structure
  const result = {
    challenge_analysis: {},
    stephanie_strategy: {},
    implementation_framework: {},
    personalized_messaging: {},
    personal_notes_response: {}
  };

  // Extract key data points
  const {
    age = 30,
    gender = "female",
    biggestChallenge = "meal prep time",
    energyLevels = "Good",
    mealPlanExperience = "Never tried",
    pregnancyStatus,
    weightPlateau,
    plateauDietingStatus,
    stressLevels,
    sleepSchedule,
    goodDigestion,
    bowelFrequency,
    bowelDescription,
    guidancePreference,
    mealVariety,
    resultsTimeline = "moderate",
    extraNotesEnabled = "No",
    extraNotes = ""
  } = userData;

  // Get age bracket from calculations or determine from age
  const ageBracket = calculations?.age_bracket || determineAgeBracket(age);
  
  // Determine primary challenge
  const primaryChallenge = biggestChallenge.toLowerCase();

  // ===========================================
  // CHALLENGE ANALYSIS
  // ===========================================
  
  result.challenge_analysis = {
    primary_challenge: biggestChallenge,
    age_bracket: ageBracket,
    age_specific_psychology: getAgeSpecificPsychology(ageBracket, primaryChallenge),
    life_stage_characteristics: getLifeStageCharacteristics(ageBracket),
    age_specific_barriers: getAgeSpecificBarriers(ageBracket, primaryChallenge),
    failure_point_prediction: getFailurePointPrediction(ageBracket, primaryChallenge, energyLevels),
    success_predictors: getSuccessPredictors(ageBracket, primaryChallenge, energyLevels),
    motivation_drivers: getMotivationDrivers(ageBracket, primaryChallenge),
    elite_customization: getEliteCustomization(stressLevels, sleepSchedule, resultsTimeline, ageBracket),
    energy_impact_analysis: getEnergyImpactAnalysis(energyLevels, primaryChallenge),
    experience_integration: getExperienceIntegration(mealPlanExperience),
    special_considerations: getSpecialConsiderations(pregnancyStatus, weightPlateau, goodDigestion, bowelFrequency),
    state_matrix_profile: getStateMatrixProfile(stressLevels, sleepSchedule, energyLevels),
    state_specific_needs: getStateSpecificNeeds(stressLevels, sleepSchedule, energyLevels),
    preference_personality_type: getPreferencePersonalityType(guidancePreference, mealVariety),
    preference_based_needs: getPreferenceBasedNeeds(guidancePreference, mealVariety)
  };

  // ===========================================
  // STEPHANIE'S STRATEGY
  // ===========================================
  
  result.stephanie_strategy = {
    age_adapted_voice: getAgeAdaptedVoice(ageBracket, primaryChallenge),
    authentic_understanding: getAuthenticUnderstanding(ageBracket, primaryChallenge),
    life_stage_solution_focus: getLifeStageSolutionFocus(ageBracket, primaryChallenge),
    age_aware_failure_warning: getAgeAwareFailureWarning(ageBracket, primaryChallenge),
    age_specific_success_trigger: getAgeSpecificSuccessTrigger(ageBracket, primaryChallenge),
    identity_reframe: getIdentityReframe(ageBracket, primaryChallenge),
    age_appropriate_confidence: getAgeAppropriateConfidence(ageBracket),
    realistic_age_expectations: getRealisticAgeExpectations(ageBracket, resultsTimeline),
    preference_matched_language: getPreferenceMatchedLanguage(guidancePreference),
    variety_acknowledgment: getVarietyAcknowledgment(mealVariety)
  };

  // ===========================================
  // IMPLEMENTATION FRAMEWORK
  // ===========================================
  
  result.implementation_framework = {
    age_adapted_meal_modifications: getAgeAdaptedMealModifications(ageBracket, primaryChallenge),
    life_stage_weekly_structure: getLifeStageWeeklyStructure(ageBracket, primaryChallenge),
    age_specific_troubleshooting: getAgeSpecificTroubleshooting(ageBracket),
    age_appropriate_success_metrics: getAgeAppropriateSuccessMetrics(ageBracket),
    life_stage_support_systems: getLifeStageSupportSystems(ageBracket),
    state_matrix_adaptations: getStateMatrixAdaptations(stressLevels, sleepSchedule, energyLevels, primaryChallenge),
    psychological_friction_points: getPsychologicalFrictionPoints(stressLevels, sleepSchedule, energyLevels),
    state_optimized_solutions: getStateOptimizedSolutions(stressLevels, sleepSchedule, energyLevels, primaryChallenge),
    preference_driven_structure: getPreferenceDrivenStructure(guidancePreference, mealVariety),
    cognitive_load_optimization: getCognitiveLoadOptimization(guidancePreference, mealVariety)
  };

  // ===========================================
  // PERSONALIZED MESSAGING
  // ===========================================
  
  result.personalized_messaging = {
    age_aware_header: getAgeAwareHeader(ageBracket, primaryChallenge),
    life_stage_encouragement: getLifeStageEncouragement(ageBracket),
    age_specific_problem_acknowledgment: getAgeSpecificProblemAcknowledgment(ageBracket, primaryChallenge),
    age_adapted_solution_confidence: getAgeAdaptedSolutionConfidence(ageBracket, primaryChallenge),
    ongoing_age_support: getOngoingAgeSupport(ageBracket)
  };

  // ===========================================
  // PERSONAL NOTES RESPONSE
  // ===========================================
  
  if (extraNotesEnabled === "Yes" && extraNotes && extraNotes.trim() !== "") {
    result.personal_notes_response = {
      acknowledgment: `I hear you about: "${extraNotes.trim()}"`,
      age_aware_empathy: getAgeAwareEmpathy(ageBracket, extraNotes),
      life_stage_plan_accommodation: getLifeStagePlanAccommodation(ageBracket, extraNotes),
      age_appropriate_reassurance: getAgeAppropriateReassurance(ageBracket, extraNotes),
      age_adapted_special_instructions: getAgeAdaptedSpecialInstructions(ageBracket, extraNotes)
    };
  } else {
    result.personal_notes_response = {
      acknowledgment: null,
      age_aware_empathy: null,
      life_stage_plan_accommodation: null,
      age_appropriate_reassurance: null,
      age_adapted_special_instructions: null
    };
  }

  return result;
}

// ===========================================
// HELPER FUNCTIONS
// ===========================================

function determineAgeBracket(age) {
  if (age >= 22 && age < 32) return "22-32";
  else if (age >= 32 && age < 42) return "32-42";
  else if (age >= 42 && age < 52) return "42-52";
  else if (age >= 52 && age < 65) return "52-65";
  else return "65+";
}

function getAgeSpecificPsychology(ageBracket, challenge) {
  const profiles = {
    "22-32": {
      "meal prep time": "High energy foundation builder learning sustainable habits while navigating social pressures and budget constraints",
      "eating out": "Social connection prioritizer balancing FOMO with health goals in a career-building phase",
      "work schedule": "Career-focused achiever optimizing energy and performance while establishing professional routines",
      "family obligations": "New responsibility navigator learning to balance emerging family needs with personal goals",
      "motivation": "Experience-building learner developing self-efficacy and habit formation skills"
    },
    "32-42": {
      "meal prep time": "Peak complexity manager juggling multiple priorities while fighting decision fatigue and time scarcity",
      "eating out": "Relationship and career balancer integrating social and professional eating with family needs",
      "work schedule": "High-performer managing career demands while supporting family and maintaining energy",
      "family obligations": "Primary caregiver struggling with self-care guilt while modeling healthy behavior",
      "motivation": "Self-compassion learner overcoming perfectionism while managing realistic expectations"
    },
    "42-52": {
      "meal prep time": "Efficiency optimizer adapting to changing energy patterns and metabolic shifts",
      "eating out": "Health-conscious chooser balancing social enjoyment with increasing health awareness",
      "work schedule": "Stress-resilience builder managing career peak while supporting changing body needs",
      "family obligations": "Identity evolver navigating changing family dynamics and personal rediscovery",
      "motivation": "Internal motivation developer building identity-based change beyond willpower"
    },
    "52-65": {
      "meal prep time": "Wisdom integrator simplifying systems while optimizing health and energy preservation",
      "eating out": "Quality-focused enjoyer honoring preferences while supporting health optimization",
      "work schedule": "Health prioritizer balancing continued success with preservation strategies",
      "family obligations": "Self-focus returner transitioning from caregiver role to self-care emphasis",
      "motivation": "Legacy thinker leveraging life wisdom for sustainable health optimization"
    },
    "65+": {
      "meal prep time": "Independence maintainer focusing on simple systems that support vitality and autonomy",
      "eating out": "Social connection preserver enjoying meals while supporting health and digestion",
      "work schedule": "Vitality optimizer whether retired or working, focusing on energy and cognitive support",
      "family obligations": "Self-care accepter learning to prioritize personal health after years of caring for others",
      "motivation": "Dignity protector maintaining strength and independence through nutrition choices"
    }
  };

  return profiles[ageBracket]?.[challenge] || profiles[ageBracket]?.["meal prep time"] || "Individual navigating nutrition challenges";
}

function getLifeStageCharacteristics(ageBracket) {
  const characteristics = {
    "22-32": "High energy, performance-focused, learning sustainable habits, budget consciousness, social eating navigation, career building priorities",
    "32-42": "Career demands + family building, time scarcity peaks, stress eating patterns, energy management critical, juggling multiple priorities",
    "42-52": "Metabolic changes accelerating, recovery needs increasing, health priority emergence, identity evolution, hormonal fluctuations",
    "52-65": "Longevity-driven decisions, medication considerations, preservation strategies, wisdom integration, independence priority",
    "65+": "Functional independence, nutrient density priority, gentle progression, legacy mindset, health preservation"
  };

  return characteristics[ageBracket] || "Individual life stage navigation";
}

function getAgeSpecificBarriers(ageBracket, challenge) {
  const barriers = {
    "22-32": {
      "meal prep time": "FOMO vs health goals, social pressure around eating/drinking, inconsistent schedules, learning boundaries, budget vs health tensions",
      "eating out": "Peer pressure, social anxiety, FOMO around experiences, budget constraints, inexperience with healthy choices",
      "work schedule": "Irregular schedules, energy demands, learning curve, social obligations competing with health",
      "family obligations": "New responsibilities, energy depletion, learning overwhelm, lack of established systems",
      "motivation": "Inexperience, social pressures, instant gratification seeking, comparison to others"
    },
    "32-42": {
      "meal prep time": "Guilt around self-care time, energy depletion, all-or-nothing thinking, schedule unpredictability, family/career competing demands",
      "eating out": "Professional obligations, family events, time constraints, stress eating triggers",
      "work schedule": "Extreme time pressure, stress eating, family obligations, decision fatigue",
      "family obligations": "Time scarcity, guilt, energy depletion, multiple needs to juggle",
      "motivation": "Self-judgment, comparison, time pressure, perfectionism, 'should have it figured out' mentality"
    },
    "42-52": {
      "meal prep time": "Energy fluctuations, changing metabolism, recovery needs, hormone-related motivation changes",
      "eating out": "Changing preferences, health considerations, social expectations vs. body needs",
      "work schedule": "Stress response changes, energy fluctuations, recovery needs, changing priorities",
      "family obligations": "Teenage resistance, changing needs, identity evolution, sandwich generation pressures",
      "motivation": "Motivation changes, identity confusion, health concerns, comparison to younger self"
    },
    "52-65": {
      "meal prep time": "Complexity aversion, health limitations, routine disruption fears, energy management",
      "eating out": "Health restrictions, medication interactions, energy considerations, social anxiety about food choices",
      "work schedule": "Health considerations, energy management, simplicity desires, medication timing",
      "family obligations": "Identity shift, habit change resistance, self-worth concerns, caregiver role transition",
      "motivation": "Ageist beliefs, health limitations, motivation shifts, 'too late' thinking"
    },
    "65+": {
      "meal prep time": "Physical limitations, cooking challenges, energy conservation needs, independence concerns",
      "eating out": "Health limitations, medication interactions, digestion considerations, mobility concerns",
      "work schedule": "Cognitive considerations, energy limitations, routine importance, health prioritization",
      "family obligations": "Self-care resistance, health limitations, simplified needs, dependency fears",
      "motivation": "Ageist assumptions, health limitations, complexity aversion, 'too old' beliefs"
    }
  };

  return barriers[ageBracket]?.[challenge] || barriers[ageBracket]?.["meal prep time"] || "Age-specific challenges";
}

function getFailurePointPrediction(ageBracket, challenge, energyLevel) {
  const basePredictions = {
    "22-32": "Typically fails when social events conflict with meal plans or when budget pressures override health choices",
    "32-42": "Usually fails during high-stress periods when family/work demands peak and self-care feels selfish",
    "42-52": "Often fails when energy crashes coincide with hormone fluctuations and old methods stop working",
    "52-65": "Tends to fail when plans become too complex or when health issues create eating disruptions",
    "65+": "May fail when independence is threatened or when physical limitations make food prep challenging"
  };

  // Modify based on energy level
  if (energyLevel === "Terrible: I find that I'm always tired" || energyLevel === "Poor: I find that I'm often tired") {
    return basePredictions[ageBracket] + " - Especially vulnerable during low energy periods when willpower is depleted";
  }

  return basePredictions[ageBracket] || "May struggle during periods of high stress or major life changes";
}

function getSuccessPredictors(ageBracket, challenge, energyLevel) {
  const baseSuccess = {
    "22-32": "Succeeds when plans integrate with social life and support career/relationship goals",
    "32-42": "Succeeds when systems support family life and reduce rather than add stress",
    "42-52": "Succeeds when approach honors changing body needs and builds on life wisdom",
    "52-65": "Succeeds when plans are simple, health-supportive, and maintain independence",
    "65+": "Succeeds when nutrition supports vitality while respecting energy limitations"
  };

  if (energyLevel === "Good") {
    return baseSuccess[ageBracket] + " - High energy supports consistent execution and resilience";
  }

  return baseSuccess[ageBracket] || "Succeeds with age-appropriate, sustainable approaches";
}

function getMotivationDrivers(ageBracket, challenge) {
  const drivers = {
    "22-32": "Performance and appearance motivation, social confidence building, energy optimization, habit formation focus, future-self investment",
    "32-42": "Energy for family motivation, setting good examples, stress management priority, efficiency mindset, integration over perfection",
    "42-52": "Honoring body's evolution, health maintenance focus, strength preservation, adaptation confidence, wisdom integration",
    "52-65": "Independence preservation, health optimization, strength maintenance, quality of life focus, legacy thinking",
    "65+": "Independence motivation, vitality focus, dignity preservation, health maintenance, legacy consideration"
  };

  return drivers[ageBracket] || "Health and wellbeing optimization";
}

function getEliteCustomization(stressLevels, sleepSchedule, timeline, ageBracket) {
  let customization = `${timeline} approach for ${ageBracket} age group`;
  
  if (stressLevels === "High stress levels") {
    customization += " with stress-reduction prioritization";
  }
  
  if (sleepSchedule && (sleepSchedule.includes("poor") || sleepSchedule.includes("irregular"))) {
    customization += " and sleep-supportive modifications";
  }

  return customization;
}

function getEnergyImpactAnalysis(energyLevel, challenge) {
  const energyMappings = {
    "Good": `${challenge} approach can be more comprehensive with higher adherence expectations`,
    "Average": `${challenge} strategy needs realistic expectations with moderate energy allocation`,
    "Poor: I find that I'm often tired": `${challenge} solution must minimize energy drain and maximize restoration`,
    "Terrible: I find that I'm always tired": `${challenge} approach requires ultra-low friction with energy restoration as primary goal`
  };

  return energyMappings[energyLevel] || "Energy considerations integrated into approach";
}

function getExperienceIntegration(experience) {
  const experienceMappings = {
    "Never tried a meal plan before": "Beginner's mindset cultivation with learning focus and patience emphasis",
    "I've tried before but couldn't stick to it": "Address specific failure patterns, rebuild confidence, remove friction points",
    "I've had some success with meal plans before": "Build on what worked, refine approach, implement advanced strategies"
  };

  return experienceMappings[experience] || "Leverage existing experience while addressing past challenges";
}

function getSpecialConsiderations(pregnancy, plateau, digestion, bowelFreq) {
  let considerations = [];

  if (pregnancy && pregnancy !== "No") {
    considerations.push("Shift from aesthetic to nourishment psychology");
  }

  if (plateau && (plateau.includes("6") || plateau.includes("12"))) {
    considerations.push("Address frustration, metabolic concerns, patience building");
  }

  if (digestion === "No") {
    considerations.push("Focus on gut-brain axis connection and stress management");
  }

  if (bowelFreq && bowelFreq.includes && bowelFreq.includes("Less than")) {
    considerations.push("Constipation-digestion psychology integration");
  }

  return considerations.length > 0 ? considerations.join("; ") : "Standard psychological approach appropriate";
}

function getStateMatrixProfile(stress, sleep, energy) {
  return `Stress: ${stress || "Unknown"}, Sleep: ${sleep || "Unknown"}, Energy: ${energy || "Unknown"}`;
}

function getStateSpecificNeeds(stress, sleep, energy) {
  if ((stress === "High stress levels") && (energy === "Poor: I find that I'm often tired" || energy === "Terrible: I find that I'm always tired")) {
    return "Survival mode - ultra-simple, no-decision solutions required";
  } else if (stress === "High stress levels" && energy === "Good") {
    return "High performer - can handle complexity with stress management buffers";
  } else if (energy === "Poor: I find that I'm often tired" || energy === "Terrible: I find that I'm always tired") {
    return "Energy restoration prioritized with gentle progression";
  } else {
    return "Standard psychological approach with moderate complexity tolerance";
  }
}

function getPreferencePersonalityType(guidance, variety) {
  const guidanceType = guidance || "moderate";
  const varietyType = variety || "moderate";

  if (guidanceType && guidanceType.includes && varietyType && varietyType.includes) {
    if (guidanceType.includes("exact") && varietyType.includes("same")) {
      return "The Systematizer - High Control + Same Foods";
    } else if (guidanceType.includes("exact") && varietyType.includes("lot")) {
      return "The Structured Explorer - High Control + High Variety";
    } else if (guidanceType.includes("flexible") && varietyType.includes("same")) {
      return "The Efficient Minimalist - Flexible + Same Foods";
    } else if (guidanceType.includes("flexible") && varietyType.includes("lot")) {
      return "The Intuitive Adventurer - Flexible + High Variety";
    }
  }
  
  return "The Balanced Moderate - Structured Freedom";
}

function getPreferenceBasedNeeds(guidance, variety) {
  const personalityType = getPreferencePersonalityType(guidance, variety);

  const needsMappings = {
    "The Systematizer - High Control + Same Foods": "Exact same meals, exact times, exact portions with complete predictability",
    "The Structured Explorer - High Control + High Variety": "Variety with precise instructions and detailed meal rotation schedules",
    "The Efficient Minimalist - Flexible + Same Foods": "Simple principles with same foods and intuitive portion control",
    "The Intuitive Adventurer - Flexible + High Variety": "Maximum freedom and variety with principle-based eating",
    "The Balanced Moderate - Structured Freedom": "Framework for success with room for personal choice"
  };

  return needsMappings[personalityType] || "Balanced structure with flexibility options";
}

// Stephanie's Voice Functions
function getAgeAdaptedVoice(ageBracket, challenge) {
  const voices = {
    "22-32": `I remember those days! ${challenge} felt so overwhelming when you're trying to do everything. Let's make this work with your crazy schedule and social life.`,
    "32-42": `Trust me, I'm living this right now at 38. The constant juggling act with ${challenge} - I know exactly where you are.`,
    "42-52": `Your relationship with ${challenge} might be changing, and that's actually a good thing. We're building something deeper than willpower.`,
    "52-65": `You have so much wisdom about what works for you. Let's use that to create something sustainable around ${challenge}.`,
    "65+": `This is about staying strong and independent with ${challenge} - exactly what you deserve. You've earned the right to keep this simple while staying powerful.`
  };

  return voices[ageBracket] || "Let's tackle this challenge together with an approach that works for your life stage.";
}

function getAuthenticUnderstanding(ageBracket, challenge) {
  const understanding = {
    "22-32": `I get that you're building your life while trying to figure out ${challenge}. The pressure to have it all figured out is real, but honestly, most of us are still learning.`,
    "32-42": `The juggling act with ${challenge} while managing career and family - I see you. When you feel good, everyone benefits, and that's not selfish.`,
    "42-52": `Your body is going through some real changes, and fighting against them with ${challenge} is exhausting. Let's work WITH your body's evolution.`,
    "52-65": `You've learned what you like and what makes you feel good with ${challenge}. Let's honor that wisdom while optimizing for your current needs.`,
    "65+": `You've spent so much time caring for others. Now let's make sure you're well cared for too, especially around ${challenge}.`
  };

  return understanding[ageBracket] || "I understand the unique challenges you're facing right now.";
}

// Additional helper functions for remaining components...
function getLifeStageSolutionFocus(ageBracket, challenge) {
  const solutions = {
    "22-32": `Social integration priority with ${challenge} - making it work WITH your lifestyle, not against it`,
    "32-42": `Efficiency and family integration with ${challenge} - supporting your juggling act, not adding to it`,
    "42-52": `Honor your body's evolution with ${challenge} - adaptation strategies that feel natural`,
    "52-65": `Simplicity and health optimization with ${challenge} - leveraging your wisdom for sustainable success`,
    "65+": `Independence preservation with ${challenge} - maintaining vitality while respecting your energy`
  };

  return solutions[ageBracket] || "Age-appropriate solution strategies";
}

function getAgeAwareFailureWarning(ageBracket, challenge) {
  const warnings = {
    "22-32": `Watch out for social pressure derailing your ${challenge} progress - have backup plans for social events`,
    "32-42": `Beware of all-or-nothing thinking with ${challenge} when stress peaks - progress over perfection`,
    "42-52": `Don't fight your changing energy patterns with ${challenge} - adapt your approach as your body evolves`,
    "52-65": `Avoid overcomplicating ${challenge} - simple systems will serve you better than complex protocols`,
    "65+": `Don't let perfectionism block your ${challenge} progress - consistency over intensity`
  };

  return warnings[ageBracket] || "Be aware of age-specific failure patterns";
}

function getAgeSpecificSuccessTrigger(ageBracket, challenge) {
  const triggers = {
    "22-32": `You'll succeed with ${challenge} when it enhances your social life and supports your goals`,
    "32-42": `Success happens when ${challenge} makes your life easier, not harder - when it supports your family`,
    "42-52": `You'll thrive when ${challenge} honors your body's wisdom and builds on your life experience`,
    "52-65": `Success comes when ${challenge} is simple, sustainable, and supports your independence`,
    "65+": `You'll succeed when ${challenge} enhances your vitality without overwhelming your energy`
  };

  return triggers[ageBracket] || "Success comes through age-appropriate implementation";
}

function getIdentityReframe(ageBracket, challenge) {
  const reframes = {
    "22-32": `You're not 'bad at ${challenge}' - you're learning to build sustainable habits that will serve you for life`,
    "32-42": `You're not 'failing at ${challenge}' - you're modeling resilience and self-care for your family`,
    "42-52": `You're not 'behind with ${challenge}' - you're evolving with wisdom and honoring your body's changes`,
    "52-65": `You're not 'too old for ${challenge}' - you're optimizing your health with decades of life wisdom`,
    "65+": `You're not 'set in your ways with ${challenge}' - you're preserving your independence and vitality`
  };

  return reframes[ageBracket] || "Reframe limiting beliefs about your capabilities";
}

function getAgeAppropriateConfidence(ageBracket) {
  const confidence = {
    "22-32": "You have energy and time on your side - every healthy habit you build now pays dividends for decades",
    "32-42": "Your life experience gives you perspective that younger people don't have - use that wisdom",
    "42-52": "Your body's changes aren't working against you - they're guiding you toward what you really need",
    "52-65": "Your life wisdom is a superpower - you know what works and what doesn't better than anyone",
    "65+": "Your strength and independence are inspiring - every healthy choice protects what matters most to you"
  };

  return confidence[ageBracket] || "You have unique strengths for your life stage";
}

function getRealisticAgeExpectations(ageBracket, timeline) {
  const expectations = {
    "22-32": `With ${timeline} timeline: Expect steady progress with some social challenge navigation`,
    "32-42": `With ${timeline} timeline: Expect progress with occasional stress-related setbacks - that's normal`,
    "42-52": `With ${timeline} timeline: Expect sustainable progress that honors your changing body`,
    "52-65": `With ${timeline} timeline: Expect steady, health-focused progress with wisdom-guided adjustments`,
    "65+": `With ${timeline} timeline: Expect gentle, consistent progress that preserves your vitality`
  };

  return expectations[ageBracket] || "Age-appropriate progress expectations";
}

function getPreferenceMatchedLanguage(guidance) {
  if (guidance && guidance.includes) {
    if (guidance.includes("exact")) {
      return "Follow this exactly - Here's your specific plan with precise instructions";
    } else if (guidance.includes("very flexible")) {
      return "Understanding the principles - Listen to your body and adjust as needed";
    } else if (guidance.includes("flexible")) {
      return "Choose from these options - Here's how to adapt based on your needs";
    }
  }
  
  return "Here's your foundation with room to adjust - Core structure with adaptation options";
}

function getVarietyAcknowledgment(variety) {
  if (variety && variety.includes) {
    if (variety.includes("same")) {
      return "Love this! Simple is powerful. Let's nail your perfect routine.";
    } else if (variety.includes("little")) {
      return "Perfect balance - enough variety to stay interested, enough routine to stay simple.";
    } else if (variety.includes("lot")) {
      return "I get it - food should be exciting! Let's keep things interesting while hitting your goals.";
    }
  }
  
  return "We'll find the right balance of routine and variety for you.";
}

// Implementation Framework Functions
function getAgeAdaptedMealModifications(ageBracket, challenge) {
  const modifications = {
    "22-32": `${challenge} modifications: Social-event compatible, budget-friendly, portable options`,
    "32-42": `${challenge} modifications: Family-friendly, time-efficient, stress-reducing approaches`,
    "42-52": `${challenge} modifications: Energy-supportive, hormone-friendly, adaptable systems`,
    "52-65": `${challenge} modifications: Health-optimized, simple preparation, medication-friendly`,
    "65+": `${challenge} modifications: Independence-supporting, gentle prep, nutrient-dense focus`
  };

  return modifications[ageBracket] || "Age-appropriate meal modifications";
}

function getLifeStageWeeklyStructure(ageBracket, challenge) {
  const structures = {
    "22-32": `Weekly structure for ${challenge}: Flexible weekend approach, social event accommodation, weekly prep sessions`,
    "32-42": `Weekly structure for ${challenge}: Sunday family prep, weekday efficiency, stress-buffer meals`,
    "42-52": `Weekly structure for ${challenge}: Energy-aligned prep timing, hormone-supportive scheduling, gentle routines`,
    "52-65": `Weekly structure for ${challenge}: Consistent timing, health-appointment accommodation, simple weekly rhythm`,
    "65+": `Weekly structure for ${challenge}: Gentle daily routines, independence-preserving prep, regular meal timing`
  };

  return structures[ageBracket] || "Age-appropriate weekly structure";
}

function getAgeSpecificTroubleshooting(ageBracket) {
  const troubleshooting = {
    "22-32": "Social pressure resistance, budget meal solutions, energy optimization for busy schedules",
    "32-42": "Stress eating protocols, family resistance management, time-crunch solutions",
    "42-52": "Energy fluctuation adaptations, hormone-supportive timing, motivation maintenance",
    "52-65": "Health condition accommodations, medication timing considerations, simplicity maintenance",
    "65+": "Independence preservation, gentle progression, dignity-maintaining approaches"
  };

  return troubleshooting[ageBracket] || "Age-specific troubleshooting strategies";
}

function getAgeAppropriateSuccessMetrics(ageBracket) {
  const metrics = {
    "22-32": "Energy levels, social integration success, habit consistency, performance metrics",
    "32-42": "Family satisfaction, stress level management, energy for daily tasks, consistency over perfection",
    "42-52": "Energy stability, body adaptation success, health marker improvements, sustainable routines",
    "52-65": "Health optimization markers, independence maintenance, simplicity success, vitality preservation",
    "65+": "Independence preservation, vitality maintenance, dignity protection, gentle progress"
  };

  return metrics[ageBracket] || "Age-appropriate success measurements";
}

function getLifeStageSupportSystems(ageBracket) {
  const support = {
    "22-32": "Peer support networks, social accountability, mentor guidance, community resources",
    "32-42": "Family integration, partner support, professional networks, stress management resources",
    "42-52": "Health professional guidance, peer experience sharing, family understanding, adaptation support",
    "52-65": "Medical team coordination, peer wisdom sharing, family support, health advocacy",
    "65+": "Medical team partnership, family involvement, community support, independence advocacy"
  };

  return support[ageBracket] || "Age-appropriate support systems";
}

function getStateMatrixAdaptations(stress, sleep, energy, challenge) {
  if (stress === "High stress levels" && (energy === "Poor: I find that I'm often tired" || energy === "Terrible: I find that I'm always tired")) {
    return `${challenge} adaptations: 10-minute max activities, pre-made options, assembly-only approaches, stress-eating backup plans`;
  } else if (stress === "Low stress levels" && energy === "Good") {
    return `${challenge} adaptations: Can handle more complex approaches, batch cooking, variety exploration, optimization focus`;
  } else {
    return `${challenge} adaptations: Moderate complexity, realistic expectations, energy-aligned timing, stress buffers`;
  }
}

function getPsychologicalFrictionPoints(stress, sleep, energy) {
  let friction = [];

  if (stress === "High stress levels") friction.push("decision fatigue");
  if (sleep && sleep.includes("poor")) friction.push("morning motivation");
  if (energy === "Poor: I find that I'm often tired" || energy === "Terrible: I find that I'm always tired") friction.push("evening preparation");

  return friction.length > 0 ? friction.join(", ") : "Standard friction management";
}

function getStateOptimizedSolutions(stress, sleep, energy, challenge) {
  let solutions = [];

  if (stress === "High stress levels") {
    solutions.push(`stress-reducing ${challenge} solutions`);
  }
  if (sleep && sleep.includes("poor")) {
    solutions.push("sleep-supportive meal timing");
  }
  if (energy === "Poor: I find that I'm often tired" || energy === "Terrible: I find that I'm always tired") {
    solutions.push("energy-restoring nutrition focus");
  }

  return solutions.length > 0 ? solutions.join(", ") : "State-appropriate solutions";
}

function getPreferenceDrivenStructure(guidance, variety) {
  const personalityType = getPreferencePersonalityType(guidance, variety);

  if (personalityType.includes("Systematizer")) {
    return "Exact meal schedule with same foods daily, precise portion containers, detailed weekly routine";
  } else if (personalityType.includes("Explorer")) {
    return "3-week rotation menu with detailed recipes, structured variety, precise meal planning";
  } else if (personalityType.includes("Minimalist")) {
    return "Simple core meals with intuitive portions, batch-prep ingredients, flexible assembly";
  } else if (personalityType.includes("Adventurer")) {
    return "Macro-aware flexible framework, ingredient prep focus, principle-based choices";
  } else {
    return "Structured foundation with adaptation options, core meals plus variations";
  }
}

function getCognitiveLoadOptimization(guidance, variety) {
  const personalityType = getPreferencePersonalityType(guidance, variety);

  if (personalityType.includes("Systematizer")) {
    return "Eliminate all daily food decisions through complete routine establishment";
  } else if (personalityType.includes("Explorer")) {
    return "Reduce choice overwhelm through structured variety and detailed planning";
  } else if (personalityType.includes("Minimalist")) {
    return "Minimize decision points while maintaining sufficient options";
  } else if (personalityType.includes("Adventurer")) {
    return "Provide principles not rules to support autonomous decision-making";
  } else {
    return "Balance structure with choice to optimize decision-making comfort";
  }
}

// Messaging Functions
function getAgeAwareHeader(ageBracket, challenge) {
  const headers = {
    "22-32": `Let's Build Your Foundation: Mastering ${challenge} for Life`,
    "32-42": `The Juggling Act: Making ${challenge} Work with Your Busy Life`,
    "42-52": `Evolution & Adaptation: ${challenge} That Honors Your Body's Wisdom`,
    "52-65": `Wisdom in Action: Optimizing ${challenge} for Your Life Stage`,
    "65+": `Strength & Independence: ${challenge} That Supports Your Vitality`
  };

  return headers[ageBracket] || `Your Personalized ${challenge} Strategy`;
}

function getLifeStageEncouragement(ageBracket) {
  const encouragement = {
    "22-32": "You're building habits that will serve you for decades - every step matters!",
    "32-42": "Your dedication to health while managing everything else is incredible - keep going!",
    "42-52": "Your wisdom and body awareness are your superpowers - trust the process!",
    "52-65": "Your commitment to health optimization is inspiring - you're writing the playbook!",
    "65+": "Your focus on vitality and independence is powerful - you're showing what's possible!"
  };

  return encouragement[ageBracket] || "You're on the right path for your life stage!";
}

function getAgeSpecificProblemAcknowledgment(ageBracket, challenge) {
  const acknowledgments = {
    "22-32": `I know ${challenge} feels overwhelming when you're trying to do everything perfectly`,
    "32-42": `The struggle with ${challenge} while juggling family and career is real and exhausting`,
    "42-52": `Feeling like your old ${challenge} approaches don't work anymore is so frustrating`,
    "52-65": `The pressure to overcomplicate ${challenge} when simple is actually better is real`,
    "65+": `Worrying about independence while managing ${challenge} is completely understandable`
  };

  return acknowledgments[ageBracket] || `The challenges around ${challenge} are valid and understandable`;
}

function getAgeAdaptedSolutionConfidence(ageBracket, challenge) {
  const confidence = {
    "22-32": `This ${challenge} approach will grow with you and support your evolving lifestyle`,
    "32-42": `These ${challenge} strategies will actually make your life easier, not harder`,
    "42-52": `This ${challenge} plan honors where you are now and supports where you're going`,
    "52-65": `These ${challenge} solutions leverage your wisdom while optimizing your health`,
    "65+": `This ${challenge} approach protects your independence while enhancing your vitality`
  };

  return confidence[ageBracket] || `This ${challenge} solution is designed specifically for your life stage`;
}

function getOngoingAgeSupport(ageBracket) {
  const support = {
    "22-32": "Remember: You're learning and growing - be patient with yourself and celebrate small wins",
    "32-42": "Keep in mind: Progress over perfection - you're modeling resilience for your family",
    "42-52": "Remember: Your body is wise - trust its signals and adapt as needed",
    "52-65": "Keep in mind: Simple and sustainable wins - your consistency is your strength",
    "65+": "Remember: Every healthy choice preserves your independence - you're doing great"
  };

  return support[ageBracket] || "Remember: You're exactly where you need to be in your journey";
}

// Personal Notes Response Functions
function getAgeAwareEmpathy(ageBracket, notes) {
  const empathy = {
    "22-32": `At your age, dealing with "${notes}" while trying to build healthy habits takes real courage`,
    "32-42": `Managing "${notes}" on top of everything else you're juggling - I see how hard this is`,
    "42-52": `Navigating "${notes}" while your body is changing requires so much self-compassion`,
    "52-65": `Handling "${notes}" with all your life wisdom shows incredible strength`,
    "65+": `Facing "${notes}" while maintaining your independence takes remarkable resilience`
  };

  return empathy[ageBracket] || `I understand that "${notes}" adds complexity to your journey`;
}

function getLifeStagePlanAccommodation(ageBracket, notes) {
  const accommodation = {
    "22-32": `We'll build flexibility into your plan to work around "${notes}" without derailing your social life`,
    "32-42": `Your plan will include specific strategies to manage "${notes}" without adding family stress`,
    "42-52": `We'll adapt your approach to honor "${notes}" while supporting your body's evolution`,
    "52-65": `Your plan will accommodate "${notes}" while maintaining the simplicity you need`,
    "65+": `We'll ensure "${notes}" is managed while preserving your independence and routine`
  };

  return accommodation[ageBracket] || `Your plan will specifically address "${notes}"`;
}

function getAgeAppropriateReassurance(ageBracket, notes) {
  const reassurance = {
    "22-32": `"${notes}" doesn't define your ability to succeed - you're building skills that will last a lifetime`,
    "32-42": `"${notes}" is just one piece of your complex life - you're stronger than you realize`,
    "42-52": `"${notes}" is information, not limitation - your body's wisdom will guide you through`,
    "52-65": `"${notes}" is manageable with the right approach - your experience is your advantage`,
    "65+": `"${notes}" doesn't diminish your capability - your strength has gotten you this far`
  };

  return reassurance[ageBracket] || `"${notes}" is manageable with the right support and approach`;
}

function getAgeAdaptedSpecialInstructions(ageBracket, notes) {
  if (notes && notes.toLowerCase) {
    const lowerNotes = notes.toLowerCase();
    if (lowerNotes.includes("stress") || lowerNotes.includes("anxiety")) {
      return `For your age group, we'll focus on stress-reducing nutrition strategies that support your specific concerns`;
    } else if (lowerNotes.includes("energy") || lowerNotes.includes("tired")) {
      return `Given your age and energy concerns, we'll prioritize nutrition that restores and maintains energy`;
    } else if (lowerNotes.includes("time") || lowerNotes.includes("busy")) {
      return `For your life stage, we'll create time-efficient solutions that fit your schedule`;
    }
  }
  
  return `We'll customize your approach to specifically address your unique situation at your life stage`;
}

// ==========================================
// MAKE.COM INTEGRATION WRAPPER
// ==========================================

/**
 * Main function for Make.com JavaScript module
 * Processes both user data and calculations to provide psychology analysis
 * 
 * Usage in Make.com JavaScript module:
 * 
 * Input variables:
 * - userDataJson: The {{3.json}} data from Typeform
 * - calculationsResponse: The {{51.textResponse}} from Module-51-Calculations
 * 
 * This function will:
 * 1. Parse both input sources
 * 2. Run the psychology analysis
 * 3. Return the complete psychology results as JSON
 */
function processPsychologyAnalysis(input) {
  try {
    let userData, calculations;

    // Handle different input formats
    if (input && input.userDataJson && input.calculationsResponse) {
      // Standard Make.com format with both inputs
      userData = typeof input.userDataJson === 'string' ? JSON.parse(input.userDataJson) : input.userDataJson;
      calculations = typeof input.calculationsResponse === 'string' ? JSON.parse(input.calculationsResponse) : input.calculationsResponse;
    } else if (input && input.userDataJson) {
      // Only user data provided
      userData = typeof input.userDataJson === 'string' ? JSON.parse(input.userDataJson) : input.userDataJson;
      calculations = {}; // Empty calculations object
    } else if (typeof input === 'object' && input.age) {
      // Direct user data object
      userData = input;
      calculations = {};
    } else {
      throw new Error('Invalid input format. Expected userDataJson and calculationsResponse.');
    }

    // Handle nested JSON structure
    if (userData && userData.json && typeof userData.json === 'string') {
      userData = JSON.parse(userData.json);
    }

    // Validate user data
    if (!userData || typeof userData !== 'object') {
      throw new Error('No valid user data found in input');
    }

    // Run the psychology analysis
    const result = analyzePsychology(userData, calculations);

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
    analyzePsychology,
    processPsychologyAnalysis 
  };
} else if (typeof window !== 'undefined') {
  // Browser environment
  window.analyzePsychology = analyzePsychology;
  window.processPsychologyAnalysis = processPsychologyAnalysis;
}

// Self-test function
function runPsychologyTest() {
  console.log('Running Module 51 Psychology self-test...');
  
  const testUserData = {
    age: 35,
    gender: "female",
    biggestChallenge: "meal prep time",
    energyLevels: "Good",
    mealPlanExperience: "I've tried before but couldn't stick to it",
    stressLevels: "High stress levels",
    guidancePreference: "Flexible options with clear guidelines",
    mealVariety: "I enjoy a little variety each day",
    resultsTimeline: "moderate",
    extraNotesEnabled: "Yes",
    extraNotes: "I struggle with meal prep on weekends when the kids are home"
  };

  const testCalculations = {
    age_bracket: "32-42",
    bmr: 1450,
    training_day: { calories: 1800 }
  };

  try {
    const result = analyzePsychology(testUserData, testCalculations);
    
    // Basic validation
    if (!result.challenge_analysis || !result.stephanie_strategy) {
      console.error('PSYCHOLOGY TEST FAILED: Missing required sections');
      return false;
    }
    
    if (!result.challenge_analysis.primary_challenge) {
      console.error('PSYCHOLOGY TEST FAILED: Missing primary challenge analysis');
      return false;
    }

    // Test Make.com wrapper
    const wrapperResult = processPsychologyAnalysis({
      userDataJson: testUserData,
      calculationsResponse: testCalculations
    });
    
    if (wrapperResult.error) {
      console.error('PSYCHOLOGY TEST FAILED: Make.com wrapper error:', wrapperResult.message);
      return false;
    }
    
    console.log('✓ Challenge analysis: ' + result.challenge_analysis.primary_challenge);
    console.log('✓ Age bracket: ' + result.challenge_analysis.age_bracket);
    console.log('✓ Stephanie voice: ' + result.stephanie_strategy.age_adapted_voice.substring(0, 50) + '...');
    console.log('✓ Personal notes: ' + result.personal_notes_response.acknowledgment);
    console.log('✓ Make.com wrapper: Working');
    
    console.log('Module 51 Psychology self-test complete - ALL TESTS PASSED');
    return true;
  } catch (error) {
    console.error('PSYCHOLOGY TEST FAILED with error:', error);
    return false;
  }
}

// Uncomment to run self-test
// runPsychologyTest(); 