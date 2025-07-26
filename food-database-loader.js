// Food Database Loader for Module-58
const fs = require('fs');
const path = require('path');

class FoodDatabase {
  constructor() {
    this.foods = [];
    this.loadDatabase();
  }

  loadDatabase() {
    try {
      const csvPath = path.join(__dirname, 'Nutritional Database.csv');
      const csvContent = fs.readFileSync(csvPath, 'utf-8');
      
      // Parse CSV (skip header row if exists)
      const lines = csvContent.split('\n').filter(line => line.trim());
      
      lines.forEach((line, index) => {
        // Skip the header row
        if (index === 0 && line.includes('Protein')) return;
        
        // Handle quoted fields properly
        const parts = this.parseCSVLine(line);
        if (parts.length >= 7) {
          const food = {
            amount: parseFloat(parts[0]) || 100,
            unit: parseFloat(parts[1]) || 3.53, // oz conversion
            name: parts[2] ? parts[2].trim().replace(/"/g, '') : '',
            protein: this.parseNutrientValue(parts[3]),
            carbs: this.parseNutrientValue(parts[4]),
            fats: this.parseNutrientValue(parts[5]),
            calories: parseFloat(parts[6]) || 0,
            fiber: 0 // Will be added later based on food type
          };
          
          // Estimate fiber for vegetables
          if (this.isVegetable(food.name)) {
            food.fiber = Math.round(food.carbs * 0.4); // Rough estimate
          }
          
          // Only add valid foods
          if (food.name && food.calories > 0) {
            this.foods.push(food);
          }
        }
      });
      
      console.log(`Loaded ${this.foods.length} foods from database`);
    } catch (error) {
      console.error('Error loading food database:', error);
      this.loadFallbackFoods();
    }
  }

  parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    
    if (current) {
      result.push(current);
    }
    
    return result;
  }

  parseNutrientValue(value) {
    if (!value) return 0;
    // Handle values like "23.1g" or "0.40 g"
    const cleanValue = value.replace(/[^0-9.]/g, '');
    return parseFloat(cleanValue) || 0;
  }

  isVegetable(foodName) {
    const vegetables = ['broccoli', 'spinach', 'asparagus', 'lettuce', 'kale', 
                       'cauliflower', 'brussels', 'green beans', 'cucumber', 'capsicum'];
    return vegetables.some(veg => foodName.toLowerCase().includes(veg));
  }

  loadFallbackFoods() {
    // Fallback to hardcoded foods if CSV fails
    this.foods = [
      { name: "Chicken Breast", amount: 100, protein: 31, carbs: 0, fats: 3.6, fiber: 0, calories: 165 },
      { name: "White Rice", amount: 100, protein: 2.7, carbs: 28, fats: 0.3, fiber: 0.4, calories: 130 },
      { name: "Broccoli", amount: 100, protein: 2.8, carbs: 7, fats: 0.4, fiber: 2.6, calories: 34 }
    ];
  }

  // Get foods by category
  getProteins(userPreferences = []) {
    const proteinFoods = this.foods.filter(food => 
      food.protein > 10 && // Good protein content (lowered to include Greek Yogurt)
      food.carbs < 15 &&   // Low-moderate carbs
      food.protein > food.carbs && // More protein than carbs
      !this.isVegetable(food.name)
    );
    
    // Prioritize user preferences
    return this.sortByPreference(proteinFoods, userPreferences);
  }

  getCarbs(userPreferences = []) {
    const carbFoods = this.foods.filter(food => 
      food.carbs > 20 &&   // High carb content
      food.protein < 10 && // Not primarily protein
      !this.isVegetable(food.name)
    );
    
    return this.sortByPreference(carbFoods, userPreferences);
  }

  getFats(userPreferences = []) {
    const fatFoods = this.foods.filter(food => 
      food.fats > 10 &&    // High fat content
      food.carbs < 10      // Low carbs
    );
    
    return this.sortByPreference(fatFoods, userPreferences);
  }

  getVegetables() {
    return this.foods.filter(food => this.isVegetable(food.name));
  }

  sortByPreference(foods, preferences) {
    if (!preferences || preferences.length === 0) return foods;
    
    // Create a map of preference rankings
    const preferenceMap = {};
    preferences.forEach((pref, index) => {
      preferenceMap[pref.toLowerCase()] = index;
    });
    
    // Sort foods: preferences first (in order), then others
    return foods.sort((a, b) => {
      const aRank = this.getPreferenceRank(a.name, preferenceMap);
      const bRank = this.getPreferenceRank(b.name, preferenceMap);
      
      if (aRank !== -1 && bRank !== -1) {
        return aRank - bRank; // Both are preferences, sort by rank
      } else if (aRank !== -1) {
        return -1; // a is preference, b is not
      } else if (bRank !== -1) {
        return 1;  // b is preference, a is not
      }
      return 0; // Neither is preference
    });
  }

  getPreferenceRank(foodName, preferenceMap) {
    const lowerName = foodName.toLowerCase();
    for (const [pref, rank] of Object.entries(preferenceMap)) {
      if (lowerName.includes(pref)) {
        return rank;
      }
    }
    return -1; // Not a preference
  }

  // Find a specific food by name
  findFood(name) {
    return this.foods.find(food => 
      food.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}

// Create singleton instance
const foodDatabase = new FoodDatabase();

module.exports = foodDatabase; 