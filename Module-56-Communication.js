// MODULE 56 - COMMUNICATION PROFILE
// Stephanie Sanzo's advanced communication specialist with age-responsive personality adaptation
// Processes user data, calculations, and psychology analysis for personalized coaching communication

/**
 * Main communication analysis function
 * @param {Object} userData - User data from Typeform
 * @param {Object} calculations - Results from Module-51-Calculations.js
 * @param {Object} psychologyAnalysis - Results from Module-54-Psychology.js
 * @returns {Object} Complete communication profile with Stephanie's adaptive voice
 */
function analyzeCommunication(userData, calculations, psychologyAnalysis) {
  // Initialize result structure
  const result = {
    communication_analysis: {},
    stephanie_voice_adaptation: {},
    personalized_messaging: {},
    advanced_customization: {}
  };

  // Extract key data points
  const {
    age = 30,
    planPriorities = "convenience",
    guidancePreference = "flexible options",
    stressLevels,
    sleepSchedule,
    energyLevels = "Good",
    resultsTimeline = "moderate",
    pregnancyStatus,
    weightPlateau,
    plateauDietingStatus,
    goodDigestion,
    bowelFrequency,
    mealPlanExperience = "Never tried",
    extraNotesEnabled = "No",
    extraNotes = "",
    biggestChallenge = "meal prep time"
  } = userData;

  // Get data from psychology analysis
  const ageBracket = psychologyAnalysis?.challenge_analysis?.age_bracket || determineAgeBracket(age);
  const stateMatrixProfile = psychologyAnalysis?.challenge_analysis?.state_matrix_profile || `Stress: ${stressLevels}, Sleep: ${sleepSchedule}, Energy: ${energyLevels}`;
  const preferencePersonalityType = psychologyAnalysis?.challenge_analysis?.preference_personality_type || "The Balanced Moderate";

  // ===========================================
  // COMMUNICATION ANALYSIS
  // ===========================================
  
  result.communication_analysis = {
    age_bracket: ageBracket,
    primary_priority: determinePrimaryPriority(planPriorities),
    guidance_preference: normalizeGuidancePreference(guidancePreference),
    age_appropriate_stress_needs: getAgeAppropriateStressNeeds(ageBracket, stressLevels),
    life_stage_timeline_matching: getLifeStageTimelineMatching(ageBracket, resultsTimeline),
    age_specific_motivation_style: getAgeSpecificMotivationStyle(ageBracket, planPriorities),
    age_perfectionism_considerations: getAgePerfectionismConsiderations(ageBracket),
    state_matrix_communication_needs: getStateMatrixCommunicationNeeds(stressLevels, sleepSchedule, energyLevels),
    cognitive_load_assessment: getCognitiveLoadAssessment(stressLevels, sleepSchedule, energyLevels),
    special_conditions_present: getSpecialConditionsPresent(pregnancyStatus, weightPlateau, goodDigestion),
    condition_communication_priority: getConditionCommunicationPriority(pregnancyStatus, weightPlateau, goodDigestion, bowelFrequency),
    experience_level: normalizeExperienceLevel(mealPlanExperience),
    experience_confidence_assessment: getExperienceConfidenceAssessment(mealPlanExperience, ageBracket)
  };

  // ===========================================
  // STEPHANIE'S VOICE ADAPTATION
  // ===========================================
  
  result.stephanie_voice_adaptation = {
    age_responsive_tone: getAgeResponsiveTone(ageBracket, planPriorities),
    life_stage_language_style: getLifeStageLanguageStyle(ageBracket, guidancePreference),
    age_appropriate_instruction_style: getAgeAppropriateInstructionStyle(ageBracket, guidancePreference),
    age_matched_motivation_approach: getAgeMatchedMotivationApproach(ageBracket, planPriorities),
    life_stage_confidence_building: getLifeStageConfidenceBuilding(ageBracket),
    natural_name_usage_style: getNaturalNameUsageStyle(ageBracket),
    state_adapted_energy_level: getStateAdaptedEnergyLevel(stressLevels, sleepSchedule, energyLevels),
    complexity_adaptation: getComplexityAdaptation(stressLevels, sleepSchedule, energyLevels),
    special_condition_voice_shift: getSpecialConditionVoiceShift(pregnancyStatus, weightPlateau, goodDigestion),
    condition_specific_language: getConditionSpecificLanguage(pregnancyStatus, weightPlateau, goodDigestion),
    experience_adapted_explanation_depth: getExperienceAdaptedExplanationDepth(mealPlanExperience),
    trust_building_approach: getTrustBuildingApproach(mealPlanExperience, ageBracket)
  };

  // ===========================================
  // PERSONALIZED MESSAGING
  // ===========================================
  
  result.personalized_messaging = {
    age_adaptive_header_voice: getAgeAdaptiveHeaderVoice(ageBracket, planPriorities, biggestChallenge),
    life_stage_meal_instruction_style: getLifeStageMealInstructionStyle(ageBracket, guidancePreference),
    age_specific_encouragement_approach: getAgeSpecificEncouragementApproach(ageBracket, energyLevels),
    age_aware_problem_solving_voice: getAgeAwareProblemSolvingVoice(ageBracket, biggestChallenge),
    life_stage_success_celebration: getLifeStageSuccessCelebration(ageBracket)
  };

  // ===========================================
  // ADVANCED CUSTOMIZATION
  // ===========================================
  
  result.advanced_customization = {
    age_specific_failure_point_communication: getAgeSpecificFailurePointCommunication(ageBracket, biggestChallenge),
    life_stage_success_trigger_presentation: getLifeStageSuccessTriggerPresentation(ageBracket, biggestChallenge),
    age_responsive_identity_building: getAgeResponsiveIdentityBuilding(ageBracket, biggestChallenge),
    age_appropriate_liftit_integration: getAgeAppropriateLiftitIntegration(ageBracket, planPriorities),
    life_stage_wisdom_integration: getLifeStageWisdomIntegration(ageBracket),
    state_matrix_message_framing: getStateMatrixMessageFraming(stressLevels, sleepSchedule, energyLevels),
    energy_matched_motivation: getEnergyMatchedMotivation(energyLevels, ageBracket),
    stress_aware_encouragement: getStressAwareEncouragement(stressLevels, ageBracket),
    special_condition_framing: getSpecialConditionFraming(pregnancyStatus, weightPlateau, goodDigestion),
    condition_celebration_style: getConditionCelebrationStyle(pregnancyStatus, weightPlateau, goodDigestion),
    sensitivity_adaptations: getSensitivityAdaptations(goodDigestion, bowelFrequency),
    experience_validation_style: getExperienceValidationStyle(mealPlanExperience, ageBracket),
    beginner_support_level: getBeginnerSupportLevel(mealPlanExperience),
    success_building_strategy: getSuccessBuildingStrategy(mealPlanExperience, ageBracket)
  };

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

function normalizeGuidancePreference(guidancePreference) {
  if (!guidancePreference) return "flexible";
  
  const pref = guidancePreference.toLowerCase();
  if (pref.includes("exact") || pref.includes("strict")) return "exact";
  if (pref.includes("very flexible") || pref.includes("general principles")) return "very_flexible";
  if (pref.includes("mix") || pref.includes("both")) return "mixed";
  return "flexible";
}

function normalizeExperienceLevel(experience) {
  if (!experience) return "never_tried";
  
  const exp = experience.toLowerCase();
  if (exp.includes("never")) return "never_tried";
  if (exp.includes("couldn't stick") || exp.includes("tried before")) return "couldnt_stick";
  if (exp.includes("some success")) return "some_success";
  
  return "never_tried";
}

// Communication Analysis Functions
function getAgeAppropriateStressNeeds(ageBracket, stressLevels) {
  const stressNeedsMap = {
    "22-32": {
      "High stress levels": "Needs encouragement that stress is temporary and habit-building focus",
      "Moderate stress levels": "Standard supportive communication with energy optimization",
      "Low stress levels": "Can handle ambitious goals and complex strategies"
    },
    "32-42": {
      "High stress levels": "Requires stress-reduction prioritization and family-aware messaging",
      "Moderate stress levels": "Balanced approach with efficiency focus and realistic expectations",
      "Low stress levels": "Opportunity for comprehensive optimization and skill building"
    },
    "42-52": {
      "High stress levels": "Gentle approach emphasizing body wisdom and stress-hormone awareness",
      "Moderate stress levels": "Adaptation-focused with change acceptance messaging",
      "Low stress levels": "Health optimization opportunity with wisdom integration"
    },
    "52-65": {
      "High stress levels": "Simplicity emphasis with health-protective communication",
      "Moderate stress levels": "Wisdom-honoring approach with gentle progression",
      "Low stress levels": "Legacy-building opportunity with mastery focus"
    },
    "65+": {
      "High stress levels": "Ultra-gentle with independence preservation focus",
      "Moderate stress levels": "Dignity-maintaining with simple effective messaging",
      "Low stress levels": "Vitality celebration with sustainable progress"
    }
  };

  return stressNeedsMap[ageBracket]?.[stressLevels] || stressNeedsMap[ageBracket]?.["Moderate stress levels"] || "Standard stress-aware communication";
}

function getLifeStageTimelineMatching(ageBracket, timeline) {
  const timelineMatching = {
    "22-32": {
      "conservative": "Gentle foundation building with long-term perspective",
      "moderate": "Balanced progress with social life integration",
      "aggressive": "High energy channeling for maximum results"
    },
    "32-42": {
      "conservative": "Sustainable family-friendly progress",
      "moderate": "Efficient progress within life demands",
      "aggressive": "Ambitious but sustainable high-achiever approach"
    },
    "42-52": {
      "conservative": "Body-honoring gentle progression",
      "moderate": "Adaptation-focused realistic timeline",
      "aggressive": "Health-optimized intensive approach"
    },
    "52-65": {
      "conservative": "Wisdom-guided gentle progress",
      "moderate": "Health-focused steady advancement",
      "aggressive": "Vitality-optimized ambitious but safe"
    },
    "65+": {
      "conservative": "Independence-preserving gentle approach",
      "moderate": "Vitality-supporting steady progress",
      "aggressive": "Strength-focused intensive but careful"
    }
  };

  return timelineMatching[ageBracket]?.[timeline] || "Age-appropriate timeline matching";
}

function getAgeSpecificMotivationStyle(ageBracket, priority) {
  const motivationStyles = {
    "22-32": {
      "convenience": "Future-self investment with efficiency emphasis",
      "results": "Performance and aesthetic achievement focus",
      "flexibility": "Social integration and lifestyle enhancement",
      "learning": "Foundation building and skill development",
      "sustainability": "Lifetime habit creation and long-term thinking"
    },
    "32-42": {
      "convenience": "Family efficiency and energy management",
      "results": "Energy for family and career performance",
      "flexibility": "Life balance and relationship integration",
      "learning": "Decision confidence and practical wisdom",
      "sustainability": "Life-stage adaptability and stress resilience"
    },
    "42-52": {
      "convenience": "Energy conservation and body wisdom",
      "results": "Health optimization and strength preservation",
      "flexibility": "Adaptation and change navigation",
      "learning": "Body change understanding and wisdom integration",
      "sustainability": "Hormonal support and gentle transitions"
    },
    "52-65": {
      "convenience": "Simplicity and health support",
      "results": "Vitality optimization and independence maintenance",
      "flexibility": "Quality choices and selective engagement",
      "learning": "Wisdom building and mastery development",
      "sustainability": "Legacy health and long-term vitality"
    },
    "65+": {
      "convenience": "Independence support and gentle efficiency",
      "results": "Vitality preservation and functional optimization",
      "flexibility": "Joy-focused and connection-supportive",
      "learning": "Gentle exploration and vitality understanding",
      "sustainability": "Independence maintenance and dignity preservation"
    }
  };

  return motivationStyles[ageBracket]?.[priority] || "Age-appropriate motivation";
}

function getAgePerfectionismConsiderations(ageBracket) {
  const perfectionismMap = {
    "22-32": "Address perfectionism with learning mindset emphasis and progress over perfection messaging",
    "32-42": "Combat all-or-nothing thinking with family stress awareness and self-compassion focus",
    "42-52": "Gentle perfectionism release with body change acceptance and adaptation focus",
    "52-65": "Simplicity over perfection with wisdom honoring and health prioritization",
    "65+": "Dignity preservation over perfection with gentle progress and self-acceptance"
  };

  return perfectionismMap[ageBracket] || "Standard perfectionism considerations";
}

function getStateMatrixCommunicationNeeds(stress, sleep, energy) {
  // Survival mode states
  if (stress === "High stress levels" && (energy === "Poor: I find that I'm often tired" || energy === "Terrible: I find that I'm always tired")) {
    return "Ultra-gentle, zero pressure, shortest possible instructions, maximum compassion";
  }
  
  // High performer states
  if ((stress === "Low stress levels" || stress === "Moderate stress levels") && energy === "Good") {
    return "Energetic and ambitious, can handle complexity, performance-focused language";
  }
  
  // Compensating states
  if ((sleep && sleep.includes && sleep.includes("poor")) && energy === "Good") {
    return "Acknowledge compensation pattern, gentle warnings about sustainability, strategic energy management";
  }
  
  // Depleted states
  if (stress === "High stress levels" && energy === "Good") {
    return "Stress-aware messaging, energy restoration focus, stress management priority";
  }

  return "Balanced communication approach with moderate complexity tolerance";
}

function getCognitiveLoadAssessment(stress, sleep, energy) {
  if (stress === "High stress levels" && (energy === "Poor: I find that I'm often tired" || energy === "Terrible: I find that I'm always tired")) {
    return "high";
  } else if ((stress === "Low stress levels" || !stress) && energy === "Good") {
    return "low";
  } else {
    return "medium";
  }
}

function getSpecialConditionsPresent(pregnancy, plateau, digestion) {
  let conditions = [];
  
  if (pregnancy && pregnancy !== "No") conditions.push("pregnancy/breastfeeding");
  if (plateau && (plateau.includes("6") || plateau.includes("12"))) conditions.push("weight plateau");
  if (digestion === "No") conditions.push("digestive issues");
  
  return conditions.length > 0 ? conditions.join(", ") : "none";
}

function getConditionCommunicationPriority(pregnancy, plateau, digestion, bowelFreq) {
  if (pregnancy && pregnancy !== "No") return "pregnancy/breastfeeding status";
  if (digestion === "No" || (bowelFreq && bowelFreq.includes && bowelFreq.includes("Less than"))) return "digestive health";
  if (plateau && (plateau.includes("6") || plateau.includes("12"))) return "plateau frustration management";
  return "standard approach";
}

function getExperienceConfidenceAssessment(experience, ageBracket) {
  const experienceMap = {
    "never_tried": {
      "22-32": "Build confidence from zero with beginner-friendly approach",
      "32-42": "Address 'should know this by now' feelings with normalization",
      "42-52": "Position as advantage - no bad habits to break",
      "52-65": "Celebrate openness to learning with gentle confidence building",
      "65+": "Honor vitality and openness with gentle encouragement"
    },
    "couldnt_stick": {
      "22-32": "Remove shame, focus on what's different this time",
      "32-42": "Acknowledge life complexity, build sustainable approach",
      "42-52": "Honor body changes, adapt to current needs",
      "52-65": "Leverage wisdom, simplify for success",
      "65+": "Focus on gentle sustainability over past perfection"
    },
    "some_success": {
      "22-32": "Build on knowledge, level up approach",
      "32-42": "Optimize for current life demands",
      "42-52": "Adapt successful foundation to current body needs",
      "52-65": "Refine approach with life-stage wisdom",
      "65+": "Honor past success, enhance sustainability"
    }
  };

  return experienceMap[experience]?.[ageBracket] || "Standard confidence building approach";
}

// Stephanie's Voice Adaptation Functions
function getAgeResponsiveTone(ageBracket, priority) {
  const toneMap = {
    "22-32": {
      "convenience": "Energetic and practical with future-focused messaging",
      "results": "Ambitious and performance-driven with transformation focus",
      "flexibility": "Social and lifestyle-integrated with fun emphasis",
      "learning": "Educational and foundational with growth mindset",
      "sustainability": "Long-term thinking with habit-building focus"
    },
    "32-42": {
      "convenience": "Understanding and efficient with family-aware messaging",
      "results": "Authoritative but realistic with stress-resistant focus",
      "flexibility": "Adaptable and life-integrated with balance emphasis",
      "learning": "Practical wisdom with decision-making confidence",
      "sustainability": "Life-stage adaptable with resilience building"
    },
    "42-52": {
      "convenience": "Gentle efficiency with body-wisdom honoring",
      "results": "Health-focused optimization with strength preservation",
      "flexibility": "Adaptive and change-supportive with evolution acceptance",
      "learning": "Wisdom-building with change understanding",
      "sustainability": "Transition-supportive with hormonal awareness"
    },
    "52-65": {
      "convenience": "Simple and health-supportive with wisdom respect",
      "results": "Vitality-focused with independence optimization",
      "flexibility": "Quality-focused with selective engagement",
      "learning": "Mastery-building with experience honoring",
      "sustainability": "Legacy-focused with long-term vitality"
    },
    "65+": {
      "convenience": "Gentle and independence-supporting with dignity respect",
      "results": "Vitality-preserving with functional optimization",
      "flexibility": "Joy-focused with connection-supportive",
      "learning": "Gentle exploration with vitality celebration",
      "sustainability": "Independence-maintaining with gentle longevity"
    }
  };

  return toneMap[ageBracket]?.[priority] || "Warm and supportive with age-appropriate energy";
}

function getLifeStageLanguageStyle(ageBracket, guidance) {
  const styleMap = {
    "22-32": "Energetic and casual with social references, 'let's crush this together' vibes",
    "32-42": "Relatable juggling-life language, 'I'm living this too at 38' authenticity",
    "42-52": "Body-wisdom language with evolution acceptance, 'your body is teaching you' messaging",
    "52-65": "Respect-filled with wisdom acknowledgment, 'you know what works' validation",
    "65+": "Gentle with independence celebration, 'you've earned this' honor"
  };

  return styleMap[ageBracket] || "Age-appropriate conversational style";
}

function getAgeAppropriateInstructionStyle(ageBracket, guidance) {
  const instructionMap = {
    "exact": {
      "22-32": "Detailed precision with performance optimization focus",
      "32-42": "Strategic precision within life demands",
      "42-52": "Gentle precision honoring body needs",
      "52-65": "Simple precision with clear guidelines",
      "65+": "Clear gentle guidelines supporting independence"
    },
    "flexible": {
      "22-32": "Adaptable framework with social situation navigation",
      "32-42": "Life-chaos adaptable with family integration",
      "42-52": "Body-change adaptable with evolution support",
      "52-65": "Wisdom-honoring flexible with simplicity",
      "65+": "Gentle flexibility with vitality support"
    },
    "very_flexible": {
      "22-32": "Principle mastery with situation navigation training",
      "32-42": "Life-mastery principles with chaos navigation",
      "42-52": "Evolution-ready principles with change adaptation",
      "52-65": "Wisdom-supporting principles with self-awareness",
      "65+": "Simple principles with vitality support"
    }
  };

  return instructionMap[guidance]?.[ageBracket] || "Age-appropriate instruction delivery";
}

function getAgeMatchedMotivationApproach(ageBracket, priority) {
  const motivationMap = {
    "22-32": "Future-self investment with energy channeling and achievement focus",
    "32-42": "Family energy support with efficiency and stress management",
    "42-52": "Body wisdom honoring with health optimization and adaptation",
    "52-65": "Independence preservation with vitality optimization and wisdom",
    "65+": "Dignity celebration with vitality preservation and gentle progress"
  };

  return motivationMap[ageBracket] || "Age-appropriate motivation style";
}

function getLifeStageConfidenceBuilding(ageBracket) {
  const confidenceMap = {
    "22-32": "You have energy and time on your side - every step builds lifelong strength",
    "32-42": "Your life experience gives you perspective and wisdom others don't have",
    "42-52": "Your body's evolution guides you toward what you really need now",
    "52-65": "Your life wisdom is a superpower - you know yourself better than anyone",
    "65+": "Your strength and independence inspire everyone around you"
  };

  return confidenceMap[ageBracket] || "You have unique strengths for your life stage";
}

function getNaturalNameUsageStyle(ageBracket) {
  const nameUsageMap = {
    "22-32": "Enthusiastic name usage in victories - 'You're crushing this, Sarah!'",
    "32-42": "Supportive name usage in understanding - 'I see you, Michelle'",
    "42-52": "Respectful name usage in wisdom acknowledgment - 'You know your body, Lisa'",
    "52-65": "Honoring name usage in mastery - 'Your experience shows, Patricia'",
    "65+": "Dignified name usage in celebration - 'You're inspiring, Margaret'"
  };

  return nameUsageMap[ageBracket] || "Natural, warm name integration";
}

// State and Condition Functions
function getStateAdaptedEnergyLevel(stress, sleep, energy) {
  if (energy === "Good") {
    return "Match their energy with enthusiasm and ambitious language";
  } else if (energy === "Terrible: I find that I'm always tired" || energy === "Poor: I find that I'm often tired") {
    return "Gentle, low-energy communication with restoration focus";
  } else {
    return "Moderate energy communication with realistic expectations";
  }
}

function getComplexityAdaptation(stress, sleep, energy) {
  const cognitiveLoad = getCognitiveLoadAssessment(stress, sleep, energy);
  
  if (cognitiveLoad === "high") {
    return "Maximum 3 key points, bullet format, action-focused minimal explanation";
  } else if (cognitiveLoad === "low") {
    return "Can handle detailed explanations, science backing, optimization strategies";
  } else {
    return "Balance of action and explanation with key concepts and brief rationale";
  }
}

function getSpecialConditionVoiceShift(pregnancy, plateau, digestion) {
  if (pregnancy && pregnancy !== "No") {
    return "Shift to nourishment language, strength for two, celebration of body's work";
  } else if (plateau && (plateau.includes("6") || plateau.includes("12"))) {
    return "Patience and trust-building language, metabolic healing focus, victory redefinition";
  } else if (digestion === "No") {
    return "Gentle, healing-focused language with gut-brain connection awareness";
  } else {
    return "Standard supportive language with condition awareness";
  }
}

function getConditionSpecificLanguage(pregnancy, plateau, digestion) {
  if (pregnancy && pregnancy !== "No") {
    return "Nourishment, strength, growing, supporting, energy for two, incredible work";
  } else if (plateau && (plateau.includes("6") || plateau.includes("12"))) {
    return "Patience, trust, healing, metabolic reset, non-scale victories, body wisdom";
  } else if (digestion === "No") {
    return "Gentle, healing, soothing, gut-friendly, comfort, natural support";
  } else {
    return "Standard empowering and supportive terminology";
  }
}

function getExperienceAdaptedExplanationDepth(experience) {
  const depthMap = {
    "never_tried": "Extra explanations for basics, anticipate questions, more reassurance",
    "couldnt_stick": "Focus on what's different, validate past struggles, build trust gradually",
    "some_success": "Skip basics, dive into optimization, respect existing knowledge"
  };

  return depthMap[experience] || "Standard explanation depth";
}

function getTrustBuildingApproach(experience, ageBracket) {
  if (experience === "couldnt_stick") {
    const trustMap = {
      "22-32": "Focus on life-stage differences and social integration improvements",
      "32-42": "Emphasize family-life integration and stress-resistant systems",
      "42-52": "Honor body changes and adaptation to current needs",
      "52-65": "Leverage wisdom and simplify for sustainable success",
      "65+": "Gentle approach with independence and vitality focus"
    };
    return trustMap[ageBracket] || "Gradual trust building with past experience validation";
  } else if (experience === "never_tried") {
    return "Build confidence from zero with gentle progression and celebration of firsts";
  } else {
    return "Build on existing success with optimization and refinement focus";
  }
}

// Messaging Functions
function getAgeAdaptiveHeaderVoice(ageBracket, priority, challenge) {
  const headerMap = {
    "22-32": "Let's build something incredible together! Your energy + smart strategy = amazing results",
    "32-42": "I get the juggle - let's create something that actually makes your life easier",
    "42-52": "Your body's wisdom + smart nutrition = the perfect combination for where you are now",
    "52-65": "Let's use everything you've learned to create your most sustainable approach yet",
    "65+": "Your strength and independence inspire me - let's enhance your vitality beautifully"
  };

  return headerMap[ageBracket] || "Let's create something perfect for exactly where you are in life";
}

function getLifeStageMealInstructionStyle(ageBracket, guidance) {
  const instructionStyleMap = {
    "22-32": "Quick, portable, social-life friendly with energy optimization",
    "32-42": "Family-integrated, time-efficient with stress-management focus",
    "42-52": "Body-supportive, energy-aligned with gentle progression",
    "52-65": "Health-optimized, simple preparation with medication awareness",
    "65+": "Independence-supporting, gentle prep with nutrient density focus"
  };

  return instructionStyleMap[ageBracket] || "Age-appropriate meal instruction style";
}

function getAgeSpecificEncouragementApproach(ageBracket, energy) {
  const encouragementMap = {
    "22-32": "You're building habits that will serve you for decades - every step matters!",
    "32-42": "Your dedication while managing everything else is incredible - keep going!",
    "42-52": "Your wisdom and body awareness are your superpowers - trust the process!",
    "52-65": "Your commitment to health optimization is inspiring - you're showing what's possible!",
    "65+": "Your focus on vitality and independence is powerful - you're writing the playbook!"
  };

  return encouragementMap[ageBracket] || "You're exactly where you need to be - keep moving forward!";
}

function getAgeAwareProblemSolvingVoice(ageBracket, challenge) {
  const problemSolvingMap = {
    "22-32": "Let's figure this out together - you've got the energy, I've got the strategy",
    "32-42": "I know life's throwing everything at you - we'll make this work WITH your chaos",
    "42-52": "Your body's teaching you something - let's listen and adapt together",
    "52-65": "You know what works for you - let's refine and optimize from that wisdom",
    "65+": "Simple, effective solutions that honor your energy and independence"
  };

  return problemSolvingMap[ageBracket] || "We'll solve this together with an approach that fits your life";
}

function getLifeStageSuccessCelebration(ageBracket) {
  const celebrationMap = {
    "22-32": "You're absolutely crushing this! Your future self is going to thank you so much",
    "32-42": "Look at you making it work with everything on your plate - you're incredible!",
    "42-52": "Your body is responding beautifully to this wisdom-based approach - amazing!",
    "52-65": "You're proving that the best years are ahead - this is inspiring to watch!",
    "65+": "Your vitality and commitment are absolutely beautiful - you're showing everyone what's possible!"
  };

  return celebrationMap[ageBracket] || "You're doing amazing - I'm so proud of your progress!";
}

// Advanced Customization Functions
function getAgeSpecificFailurePointCommunication(ageBracket, challenge) {
  const failurePointMap = {
    "22-32": "Watch out for social events derailing progress - we'll prep for those moments",
    "32-42": "Stress peaks are your vulnerable moments - we've got strategies for that",
    "42-52": "Energy crashes can shake confidence - we'll adapt when that happens",
    "52-65": "Complexity can feel overwhelming - we'll keep it beautifully simple",
    "65+": "Independence concerns can create hesitation - we'll preserve that autonomy"
  };

  return failurePointMap[ageBracket] || "We'll navigate challenges together with age-appropriate strategies";
}

function getLifeStageSuccessTriggerPresentation(ageBracket, challenge) {
  const successTriggerMap = {
    "22-32": "Success happens when this enhances your social life and supports your goals",
    "32-42": "You'll thrive when this makes family life easier, not harder",
    "42-52": "Success comes when you honor your body's wisdom and energy patterns",
    "52-65": "You'll succeed when it's simple, sustainable, and supports independence",
    "65+": "Success is when nutrition enhances vitality without overwhelming energy"
  };

  return successTriggerMap[ageBracket] || "Success comes through age-appropriate, sustainable implementation";
}

function getAgeResponsiveIdentityBuilding(ageBracket, challenge) {
  const identityMap = {
    "22-32": "You're not 'bad at this' - you're building lifelong skills that will serve you forever",
    "32-42": "You're not 'failing' - you're modeling resilience and self-care for your family",
    "42-52": "You're not 'behind' - you're evolving with wisdom and honoring your body's changes",
    "52-65": "You're not 'too old' - you're optimizing health with decades of life wisdom",
    "65+": "You're not 'set in your ways' - you're preserving independence and vitality"
  };

  return identityMap[ageBracket] || "Reframe limiting beliefs with age-appropriate empowerment";
}

function getAgeAppropriateLiftitIntegration(ageBracket, priority) {
  const liftitMap = {
    "22-32": {
      "convenience": "LIFTit makes tracking super quick when you're on the go",
      "results": "Track everything in LIFTit to maximize your transformation data",
      "flexibility": "LIFTit's macro tracking is perfect for social eating flexibility",
      "learning": "LIFTit tracks patterns that teach you about your metabolism",
      "sustainability": "The LIFTit community shows you people maintaining results across decades"
    },
    "32-42": {
      "convenience": "Track flexibly around your crazy schedule with LIFTit",
      "results": "LIFTit's detailed tracking shows how your body responds to precision",
      "flexibility": "Adjust on the fly with LIFTit for any family or work situation",
      "learning": "Use LIFTit data to understand how your body responds to different approaches",
      "sustainability": "See how LIFTit members adapt their approach through different life stages"
    },
    "42-52": {
      "convenience": "LIFTit's simple interface is perfect when you don't want complexity",
      "results": "Use LIFTit to track how nutrition affects your energy and strength",
      "flexibility": "LIFTit helps you maintain flexibility while supporting your changing needs",
      "learning": "LIFTit helps you see how nutrition affects your changing body",
      "sustainability": "Connect with LIFTit members navigating similar life transitions"
    },
    "52+": {
      "convenience": "LIFTit keeps it straightforward - just what you need",
      "results": "LIFTit helps you see which foods make you feel your best",
      "flexibility": "LIFTit's simple tracking keeps you flexible without complexity",
      "learning": "LIFTit's simple tracking helps you understand what works best for you",
      "sustainability": "The LIFTit community celebrates sustainable health at every age"
    }
  };

  const ageGroup = ageBracket === "65+" ? "52+" : ageBracket;
  return liftitMap[ageGroup]?.[priority] || "LIFTit supports your journey with age-appropriate tracking";
}

function getLifeStageWisdomIntegration(ageBracket) {
  const wisdomMap = {
    "22-32": "Honor your energy and social connections while building foundation knowledge",
    "32-42": "Leverage your life experience and perspective while managing complex demands",
    "42-52": "Trust your body's wisdom and adapt with the confidence of lived experience",
    "52-65": "Your decades of experience are your greatest asset - we build on that foundation",
    "65+": "Your life wisdom and strength inspire everyone - we honor that in every recommendation"
  };

  return wisdomMap[ageBracket] || "Honor your life experience and wisdom in every aspect";
}

function getStateMatrixMessageFraming(stress, sleep, energy) {
  if (stress === "High stress levels" && (energy === "Poor: I find that I'm often tired" || energy === "Terrible: I find that I'm always tired")) {
    return "Frame everything as support, not challenge - 'this will help you rest easier tonight'";
  } else if (energy === "Good" && (!stress || stress !== "High stress levels")) {
    return "Frame with achievement and optimization - 'let's maximize this energy you've got'";
  } else {
    return "Frame with gentle progress and realistic expectations";
  }
}

function getEnergyMatchedMotivation(energy, ageBracket) {
  if (energy === "Good") {
    return `Channel your great energy into building something incredible for your ${ageBracket} life stage`;
  } else if (energy === "Poor: I find that I'm often tired" || energy === "Terrible: I find that I'm always tired") {
    return `Let's use nutrition to restore your energy gently - you deserve to feel vibrant at ${ageBracket}`;
  } else {
    return `We'll work with your energy level to create sustainable progress for your ${ageBracket} stage`;
  }
}

function getStressAwareEncouragement(stress, ageBracket) {
  if (stress === "High stress levels") {
    const stressEncouragement = {
      "22-32": "This stress is temporary but the habits we build now will serve you forever",
      "32-42": "I know the stress feels never-ending right now - let's create something that actually reduces it",
      "42-52": "Stress affects us differently as we age - let's focus on what genuinely supports your peace",
      "52-65": "You've handled stress before - now let's use nutrition to support your resilience",
      "65+": "Stress can be draining at this stage - let's create gentle, restorative support"
    };
    return stressEncouragement[ageBracket] || "We'll work with your stress level, not against it";
  } else {
    return "Your stress levels are manageable - perfect time to build healthy momentum";
  }
}

// Special Condition Functions
function getSpecialConditionFraming(pregnancy, plateau, digestion) {
  if (pregnancy && pregnancy !== "No") {
    return "Frame everything around nourishment, strength, and supporting the incredible work your body is doing";
  } else if (plateau && (plateau.includes("6") || plateau.includes("12"))) {
    return "Frame around metabolic healing, trust in the process, and celebrating non-scale victories";
  } else if (digestion === "No") {
    return "Frame around gentle healing, gut-brain harmony, and comfortable, sustainable choices";
  } else {
    return "Standard empowering framework with health optimization focus";
  }
}

function getConditionCelebrationStyle(pregnancy, plateau, digestion) {
  if (pregnancy && pregnancy !== "No") {
    return "Celebrate energy, strength, nourishment choices, and the amazing work your body is doing";
  } else if (plateau && (plateau.includes("6") || plateau.includes("12"))) {
    return "Celebrate consistency, non-scale victories, energy improvements, and trusting the process";
  } else if (digestion === "No") {
    return "Celebrate comfort improvements, gentle choices, and gut-healing progress";
  } else {
    return "Celebrate all forms of progress with enthusiasm and recognition";
  }
}

function getSensitivityAdaptations(digestion, bowelFreq) {
  if (digestion === "No" || (bowelFreq && bowelFreq.includes && bowelFreq.includes("Less than"))) {
    return "Use gentle, healing-focused language and avoid clinical digestive terminology";
  } else {
    return "Standard supportive language with health awareness";
  }
}

function getExperienceValidationStyle(experience, ageBracket) {
  if (experience === "couldnt_stick") {
    return `Validate their courage for trying again and acknowledge how life at ${ageBracket} requires different approaches`;
  } else if (experience === "never_tried") {
    return `Celebrate their openness to learning and frame as perfect timing for their ${ageBracket} life stage`;
  } else {
    return `Honor their past success and focus on optimizing for their current ${ageBracket} needs`;
  }
}

function getBeginnerSupportLevel(experience) {
  if (experience === "never_tried") {
    return "Maximum support with extra explanations, frequent reassurance, and celebration of first steps";
  } else if (experience === "couldnt_stick") {
    return "Moderate support with focus on what's different and building confidence gradually";
  } else {
    return "Standard support with optimization focus and respect for existing knowledge";
  }
}

function getSuccessBuildingStrategy(experience, ageBracket) {
  const strategyMap = {
    "never_tried": `Build confidence from zero with age-appropriate progression for ${ageBracket}`,
    "couldnt_stick": `Remove barriers that caused past struggles while adapting to ${ageBracket} life stage`,
    "some_success": `Optimize existing foundation for current ${ageBracket} needs and goals`
  };

  return strategyMap[experience] || "Age-appropriate success building strategy";
}

// ==========================================
// MAKE.COM INTEGRATION WRAPPER
// ==========================================

/**
 * Main function for Make.com JavaScript module
 * Processes user data, calculations, and psychology analysis for communication profile
 * 
 * Usage in Make.com JavaScript module:
 * 
 * Input variables:
 * - userDataJson: The {{3.json}} data from Typeform
 * - calculationsResponse: The {{51.textResponse}} from Module-51-Calculations
 * - psychologyResponse: The {{54.textResponse}} from Module-54-Psychology
 * 
 * This function will:
 * 1. Parse all three input sources
 * 2. Run the communication analysis
 * 3. Return the complete communication profile as JSON
 */
function processCommunicationAnalysis(input) {
  try {
    let userData, calculations, psychologyAnalysis;

    // Handle different input formats
    if (input && input.userDataJson && input.calculationsResponse && input.psychologyResponse) {
      // Standard Make.com format with all three inputs
      userData = typeof input.userDataJson === 'string' ? JSON.parse(input.userDataJson) : input.userDataJson;
      calculations = typeof input.calculationsResponse === 'string' ? JSON.parse(input.calculationsResponse) : input.calculationsResponse;
      psychologyAnalysis = typeof input.psychologyResponse === 'string' ? JSON.parse(input.psychologyResponse) : input.psychologyResponse;
    } else if (input && input.userDataJson) {
      // Partial input - work with what we have
      userData = typeof input.userDataJson === 'string' ? JSON.parse(input.userDataJson) : input.userDataJson;
      calculations = input.calculationsResponse ? (typeof input.calculationsResponse === 'string' ? JSON.parse(input.calculationsResponse) : input.calculationsResponse) : {};
      psychologyAnalysis = input.psychologyResponse ? (typeof input.psychologyResponse === 'string' ? JSON.parse(input.psychologyResponse) : input.psychologyResponse) : {};
    } else if (typeof input === 'object' && input.age) {
      // Direct user data object
      userData = input;
      calculations = {};
      psychologyAnalysis = {};
    } else {
      throw new Error('Invalid input format. Expected userDataJson and optionally calculationsResponse and psychologyResponse.');
    }

    // Handle nested JSON structure
    if (userData && userData.json && typeof userData.json === 'string') {
      userData = JSON.parse(userData.json);
    }

    // Validate user data
    if (!userData || typeof userData !== 'object') {
      throw new Error('No valid user data found in input');
    }

    // Run the communication analysis
    const result = analyzeCommunication(userData, calculations, psychologyAnalysis);

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
    analyzeCommunication,
    processCommunicationAnalysis 
  };
} else if (typeof window !== 'undefined') {
  // Browser environment
  window.analyzeCommunication = analyzeCommunication;
  window.processCommunicationAnalysis = processCommunicationAnalysis;
}

// Self-test function
function runCommunicationTest() {
  console.log('Running Module 56 Communication self-test...');
  
  const testUserData = {
    age: 35,
    planPriorities: "convenience",
    guidancePreference: "Flexible options with clear guidelines",
    stressLevels: "High stress levels",
    energyLevels: "Good",
    mealPlanExperience: "I've tried before but couldn't stick to it",
    biggestChallenge: "meal prep time",
    extraNotesEnabled: "Yes",
    extraNotes: "I struggle with meal prep on weekends"
  };

  const testCalculations = {
    age_bracket: "32-42",
    bmr: 1450
  };

  const testPsychology = {
    challenge_analysis: {
      age_bracket: "32-42",
      preference_personality_type: "The Balanced Moderate",
      state_matrix_profile: "Stress: High, Sleep: Good, Energy: Good"
    }
  };

  try {
    const result = analyzeCommunication(testUserData, testCalculations, testPsychology);
    
    // Basic validation
    if (!result.communication_analysis || !result.stephanie_voice_adaptation) {
      console.error('COMMUNICATION TEST FAILED: Missing required sections');
      return false;
    }
    
    if (!result.communication_analysis.age_bracket) {
      console.error('COMMUNICATION TEST FAILED: Missing age bracket analysis');
      return false;
    }

    // Test Make.com wrapper
    const wrapperResult = processCommunicationAnalysis({
      userDataJson: testUserData,
      calculationsResponse: testCalculations,
      psychologyResponse: testPsychology
    });
    
    if (wrapperResult.error) {
      console.error('COMMUNICATION TEST FAILED: Make.com wrapper error:', wrapperResult.message);
      return false;
    }
    
    console.log('✓ Age bracket: ' + result.communication_analysis.age_bracket);
    console.log('✓ Primary priority: ' + result.communication_analysis.primary_priority);
    console.log('✓ Voice tone: ' + result.stephanie_voice_adaptation.age_responsive_tone.substring(0, 60) + '...');
    console.log('✓ Header voice: ' + result.personalized_messaging.age_adaptive_header_voice.substring(0, 60) + '...');
    console.log('✓ Make.com wrapper: Working');
    
    console.log('Module 56 Communication self-test complete - ALL TESTS PASSED');
    return true;
  } catch (error) {
    console.error('COMMUNICATION TEST FAILED with error:', error);
    return false;
  }
}

// Uncomment to run self-test
// runCommunicationTest(); 