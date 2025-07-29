// Supplement Parser Module
// Parses supplement strings from Module 57 into structured data

/**
 * Parse a supplement string into structured data
 * @param {string} supplementString - Raw supplement string from Module 57
 * @returns {Array} Array of parsed supplement objects
 */
function parseSupplementString(supplementString) {
  if (!supplementString || typeof supplementString !== 'string') {
    return [];
  }

  const supplements = [];
  
  // Split by common delimiters (+ or ,)
  const parts = supplementString.split(/[+,]/).map(s => s.trim()).filter(s => s);
  
  parts.forEach(part => {
    // Enhanced regex to capture various supplement formats
    // Matches: Name + Dose + Unit + Optional timing (AM/PM/etc)
    const patterns = [
      // Standard format: "Tribulus 1000mg AM"
      /^([A-Za-z0-9\s\-()]+?)\s+(\d+(?:\.\d+)?)\s*(mg|g|IU|mcg|ml|billion CFU|CFU)(?:\s+(AM|PM|before bed|with meals?|on empty stomach))?/i,
      // Format with parentheses: "Vitamin D3 (5000IU)"
      /^([A-Za-z0-9\s\-]+?)\s*\((\d+(?:\.\d+)?)\s*(mg|g|IU|mcg|ml)\)/i,
      // Format with dash: "B-Complex - methylated"
      /^([A-Za-z0-9\s\-]+?)(?:\s+-\s+([A-Za-z\s]+))?$/i,
      // Simple name only format
      /^([A-Za-z0-9\s\-()]+)$/i
    ];
    
    let matched = false;
    
    for (const pattern of patterns) {
      const match = part.match(pattern);
      if (match) {
        let name = match[1].trim();
        let dose = match[2] || '';
        let unit = match[3] || '';
        let timing = match[4] || '';
        
        // Clean up the name
        name = name.replace(/\s+/g, ' ').trim();
        
        // Handle special cases
        if (name.toLowerCase().includes('vitamin d') && !name.includes('3')) {
          name = name.replace(/vitamin d/i, 'Vitamin D3');
        }
        
        // Format dose and unit
        const amount = dose && unit ? `${dose}${unit}` : dose || 'As directed';
        
        supplements.push({
          name: name,
          amount: amount,
          timing: timing || 'As directed',
          fullDescription: part
        });
        
        matched = true;
        break;
      }
    }
    
    // If no pattern matched, use the whole string as name
    if (!matched) {
      supplements.push({
        name: part.trim(),
        amount: 'As directed',
        timing: 'As directed',
        fullDescription: part
      });
    }
  });
  
  return supplements;
}

/**
 * Determine supplement priority based on category and tier
 * @param {string} supplementCategory - The category from Module 57
 * @param {string} supplementName - The supplement name
 * @param {string} tier - User's supplement tier
 * @returns {string} Priority level
 */
function getSupplementPriority(supplementCategory, supplementName, tier) {
  // Essential supplements
  if (supplementCategory === 'age_optimized_daily_foundation' || 
      supplementCategory === 'Daily Foundation' ||
      (supplementName.toLowerCase().includes('protein') && tier === 'protein_only') ||
      supplementName.toLowerCase().includes('vitamin d') ||
      supplementName.toLowerCase().includes('b-complex') ||
      supplementName.toLowerCase().includes('magnesium')) {
    return 'Essential';
  }
  
  // High priority supplements
  if (supplementCategory === 'energy_vitality_stack' || 
      supplementCategory === 'Energy & Vitality' ||
      supplementName.toLowerCase().includes('creatine') ||
      supplementName.toLowerCase().includes('tribulus') ||
      supplementName.toLowerCase().includes('red ginseng') ||
      supplementName.toLowerCase().includes('omega-3')) {
    return 'High';
  }
  
  // Important supplements
  if (supplementCategory === 'recovery_sleep_stack' || 
      supplementCategory === 'Recovery & Sleep' ||
      supplementName.toLowerCase().includes('ashwagandha') ||
      supplementName.toLowerCase().includes('glycine') ||
      supplementName.toLowerCase().includes('melatonin')) {
    return 'Important';
  }
  
  // Optional supplements
  return 'Optional';
}

/**
 * Get supplement timing recommendations based on caffeine intake
 * @param {Object} userData - User data containing caffeine information
 * @param {string} supplementName - The supplement name
 * @param {string} defaultTiming - Default timing from Module 57
 * @returns {string} Adjusted timing recommendation
 */
function getSupplementTiming(userData, supplementName, defaultTiming) {
  const name = supplementName.toLowerCase();
  
  // Calculate total caffeine servings
  let totalCaffeineServings = 0;
  if (userData.drinksCoffee === "Yes" && userData.numberOfCoffees) {
    totalCaffeineServings += parseInt(userData.numberOfCoffees) || 0;
  }
  if (userData.otherCaffeine === "Energy Drinks" && userData.energyDrinksPerDay) {
    totalCaffeineServings += parseInt(userData.energyDrinksPerDay) || 0;
  }
  
  // High caffeine user adjustments (4+ servings)
  if (totalCaffeineServings >= 4) {
    if (name.includes('tribulus') || name.includes('ginseng') || name.includes('energy')) {
      return defaultTiming + ' (take 30-60min before first coffee)';
    }
    if (name.includes('l-theanine')) {
      return 'With each coffee serving';
    }
  }
  
  // Standard timing adjustments
  if (name.includes('magnesium') || name.includes('glycine') || name.includes('melatonin')) {
    return '30-60min before bed';
  }
  
  if (name.includes('ashwagandha') && defaultTiming.toLowerCase().includes('pm')) {
    return 'With dinner';
  }
  
  if (name.includes('creatine')) {
    return 'Post-workout or anytime';
  }
  
  if (name.includes('vitamin d')) {
    return 'Morning with breakfast';
  }
  
  return defaultTiming;
}

/**
 * Format supplements for display in a table
 * @param {Array} supplements - Array of supplement objects
 * @param {Object} userData - User data
 * @returns {Array} Formatted supplement objects ready for display
 */
function formatSupplementsForTable(supplements, userData) {
  return supplements.map(supp => {
    const priority = getSupplementPriority(supp.category || '', supp.name, userData.supplementTier || 'protein_only');
    const timing = getSupplementTiming(userData, supp.name, supp.timing);
    
    // Determine with/without food
    let withFood = 'With food';
    const name = supp.name.toLowerCase();
    
    if (name.includes('tribulus') || name.includes('ginseng')) {
      withFood = 'Empty stomach*';
    } else if (name.includes('glycine') || name.includes('melatonin')) {
      withFood = 'Empty stomach';
    } else if (name.includes('creatine')) {
      withFood = 'Anytime';
    } else if (name.includes('omega') || name.includes('vitamin d') || name.includes('vitamin a') || 
               name.includes('vitamin e') || name.includes('vitamin k')) {
      withFood = 'With food (fat)';
    }
    
    return {
      name: supp.name,
      amount: supp.amount,
      timing: timing,
      withFood: withFood,
      priority: priority,
      checked: false
    };
  });
}

module.exports = {
  parseSupplementString,
  getSupplementPriority,
  getSupplementTiming,
  formatSupplementsForTable
};