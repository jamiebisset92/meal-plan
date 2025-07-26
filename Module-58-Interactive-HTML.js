// Interactive HTML Generator for Module-58
function generateInteractiveHTML(meals, targets, userData) {
  const methodology = targets.methodology || 'moderate';
  
  // Convert meal data to interactive format
  const formatMealData = (meals, targets) => {
    return meals.map(meal => ({
      name: meal.name,
      calories: Math.round(meal.totals.calories),
      foods: meal.components.map(food => ({
        name: food.name,
        amount: food.amount,
        macros: `P: ${Math.round(food.protein)}g • C: ${Math.round(food.carbs)}g • F: ${Math.round(food.fats)}g`,
        calories: Math.round(food.calories),
        checked: false
      }))
    }));
  };
  
  // Generate different day types (simplified for now)
  const trainingData = {
    calories: targets.calories,
    protein: `${targets.protein}g min`,
    carbs: `${targets.hierarchical.carb_range.min}-${targets.hierarchical.carb_range.max}g`,
    fats: `${targets.fat}g`,
    water: "3.5L",
    meals: formatMealData(meals, targets)
  };
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${userData.first_name}'s Interactive Meal Plan - Stephanie Sanzo Nutrition</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: #f5f5f5;
            min-height: 100vh;
            color: #1a1a1a;
        }

        .container {
            max-width: 414px;
            margin: 0 auto;
            background: #ffffff;
            min-height: 100vh;
        }

        .header {
            background: #ffffff;
            padding: 20px;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 100;
            border-bottom: 1px solid #e5e5e5;
        }

        .header h1 {
            font-size: 24px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 4px;
        }

        .header .subtitle {
            font-size: 14px;
            color: #666;
            font-weight: 400;
        }

        .progress-bar {
            background: #f0f0f0;
            height: 4px;
            margin-top: 15px;
            overflow: hidden;
        }

        .progress-fill {
            background: #1a1a1a;
            height: 100%;
            width: 0%;
            transition: width 0.3s ease;
        }

        .calendar-strip {
            display: flex;
            padding: 12px 8px;
            background: #ffffff;
            border-bottom: 1px solid #e5e5e5;
            gap: 4px;
            justify-content: space-between;
        }

        .day-tab {
            flex: 1;
            padding: 16px 4px;
            background: linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%);
            border: 1px solid #e0e0e0;
            border-radius: 12px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .day-tab:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            border-color: #d0d0d0;
        }

        .day-tab.active {
            background: linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.15);
            border-color: #1a1a1a;
        }

        .day-tab.active .day-name,
        .day-tab.active .day-number {
            color: white;
        }

        .day-indicator {
            position: absolute;
            bottom: 4px;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 4px;
            border-radius: 50%;
            opacity: 0.6;
        }

        .day-tab.training .day-indicator {
            background: #1a1a1a;
        }

        .day-tab.rest .day-indicator {
            background: #666;
        }

        .day-tab.refeed .day-indicator {
            background: #333;
        }

        .day-name {
            font-weight: 500;
            font-size: 11px;
            color: #666;
            margin-bottom: 4px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .day-number {
            font-size: 18px;
            font-weight: 600;
            color: #1a1a1a;
        }

        .day-header {
            padding: 20px;
            background: #ffffff;
            border-bottom: 1px solid #e5e5e5;
            text-align: center;
        }

        .day-header h2 {
            font-size: 20px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 4px;
        }

        .day-header .day-type-label {
            font-size: 14px;
            color: #666;
            font-weight: 400;
        }

        .calories-display {
            background: #f8f8f8;
            padding: 24px;
            margin: 16px;
            border-radius: 12px;
            text-align: center;
        }

        .calories-main {
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 4px;
            color: #1a1a1a;
        }

        .calories-label {
            font-size: 12px;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .macros-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            margin: 16px;
        }

        .macro-card {
            background: #f8f8f8;
            border-radius: 8px;
            padding: 16px 12px;
            text-align: center;
        }

        .macro-value {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 4px;
            color: #1a1a1a;
        }

        .macro-label {
            font-size: 11px;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .meals-section {
            margin: 16px;
            padding-bottom: 80px;
        }

        .meal-card {
            background: #ffffff;
            border: 1px solid #e5e5e5;
            border-radius: 12px;
            margin-bottom: 12px;
            overflow: hidden;
        }

        .meal-header {
            background: #f8f8f8;
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e5e5e5;
        }

        .meal-title {
            font-weight: 600;
            font-size: 16px;
            color: #1a1a1a;
        }

        .meal-calories {
            font-size: 14px;
            color: #666;
            font-weight: 500;
        }

        .meal-body {
            padding: 0;
        }

        .food-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            border-bottom: 1px solid #f0f0f0;
        }

        .food-item:last-child {
            border-bottom: none;
        }

        .food-info {
            flex: 1;
        }

        .food-name {
            font-weight: 500;
            font-size: 14px;
            margin-bottom: 4px;
            color: #1a1a1a;
        }

        .food-amount {
            font-size: 12px;
            color: #666;
            margin-bottom: 2px;
        }

        .food-macros {
            font-size: 11px;
            color: #999;
        }

        .check-button {
            width: 28px;
            height: 28px;
            border: 2px solid #e5e5e5;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 12px;
            font-size: 16px;
        }

        .check-button.checked {
            background: #1a1a1a;
            border-color: #1a1a1a;
            color: white;
        }

        .swap-button {
            background: transparent;
            color: #666;
            border: 1px solid #e5e5e5;
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 500;
            cursor: pointer;
            margin-left: 8px;
            transition: all 0.2s ease;
        }

        .swap-button:hover {
            background: #f8f8f8;
            border-color: #ccc;
        }

        .bottom-nav {
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            max-width: 414px;
            background: white;
            border-top: 1px solid #e5e5e5;
            padding: 12px;
            display: flex;
            justify-content: space-around;
        }

        .nav-button {
            background: none;
            border: none;
            font-size: 11px;
            color: #666;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            padding: 8px 12px;
            border-radius: 8px;
            transition: all 0.2s ease;
        }

        .nav-button.active {
            color: #1a1a1a;
            background: #f8f8f8;
        }

        .nav-icon {
            font-size: 20px;
        }

        @media (max-width: 430px) {
            .container {
                max-width: 100%;
            }
        }

        .fade-in {
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${userData.first_name}'s Meal Plan</h1>
            <div class="subtitle">By Stephanie Sanzo</div>
            <div class="progress-bar">
                <div class="progress-fill" id="progressFill"></div>
            </div>
        </div>

        <div class="calendar-strip">
            <div class="day-tab training active" data-day="monday" data-dayname="Monday">
                <div class="day-name">MON</div>
                <div class="day-number">28</div>
                <div class="day-indicator"></div>
            </div>
            <div class="day-tab rest" data-day="tuesday" data-dayname="Tuesday">
                <div class="day-name">TUE</div>
                <div class="day-number">29</div>
                <div class="day-indicator"></div>
            </div>
            <div class="day-tab training" data-day="wednesday" data-dayname="Wednesday">
                <div class="day-name">WED</div>
                <div class="day-number">30</div>
                <div class="day-indicator"></div>
            </div>
            <div class="day-tab rest" data-day="thursday" data-dayname="Thursday">
                <div class="day-name">THU</div>
                <div class="day-number">31</div>
                <div class="day-indicator"></div>
            </div>
            <div class="day-tab training" data-day="friday" data-dayname="Friday">
                <div class="day-name">FRI</div>
                <div class="day-number">1</div>
                <div class="day-indicator"></div>
            </div>
            <div class="day-tab refeed" data-day="saturday" data-dayname="Saturday">
                <div class="day-name">SAT</div>
                <div class="day-number">2</div>
                <div class="day-indicator"></div>
            </div>
            <div class="day-tab rest" data-day="sunday" data-dayname="Sunday">
                <div class="day-name">SUN</div>
                <div class="day-number">3</div>
                <div class="day-indicator"></div>
            </div>
        </div>

        <div class="content-padding">
            <div class="day-header" id="dayHeader">
                <h2>Monday</h2>
                <div class="day-type-label">Training Day</div>
            </div>

            <div class="calories-display">
                <div class="calories-main" id="dailyCalories">2,140</div>
                <div class="calories-label">CALORIES</div>
            </div>

            <div class="macros-grid">
                <div class="macro-card">
                    <div class="macro-value" id="proteinTotal">130g</div>
                    <div class="macro-label">PROTEIN</div>
                </div>
                <div class="macro-card">
                    <div class="macro-value" id="carbsTotal">211g</div>
                    <div class="macro-label">CARBS</div>
                </div>
                <div class="macro-card">
                    <div class="macro-value" id="fatsTotal">89g</div>
                    <div class="macro-label">FAT</div>
                </div>
            </div>

            <div class="meals-section" id="mealsContainer">
                <!-- Meal cards will be inserted here -->
            </div>
        </div>

        <div class="bottom-nav">
            <button class="nav-button active">
                <div class="nav-icon">📊</div>
                <div>Today</div>
            </button>
            <button class="nav-button" onclick="alert('Food swap feature coming soon!')">
                <div class="nav-icon">🔄</div>
                <div>Swap Foods</div>
            </button>
            <button class="nav-button" onclick="alert('Progress tracking coming soon!')">
                <div class="nav-icon">📈</div>
                <div>Progress</div>
            </button>
            <button class="nav-button" onclick="alert('Settings coming soon!')">
                <div class="nav-icon">⚙️</div>
                <div>Settings</div>
            </button>
        </div>
    </div>

    <script>
        // Extract plan ID from URL
        const planId = window.location.pathname.split('/').pop().replace('.html', '');
        
        // Meal plan data from Module-58 (actual generated data)
        const mealPlanData = {
            training: ${JSON.stringify(trainingData)},
            rest: ${JSON.stringify(trainingData)}, // Will be generated properly in future
            refeed: ${JSON.stringify(trainingData)} // Will be generated properly in future
        };

        // Current state
        let currentDay = 'monday';
        let currentDayType = 'training';
        let progressData = {
            checkedItems: {},
            currentDay: 'monday'
        };

        // Initialize app
        async function init() {
            await loadProgress();
            setupCalendarTabs();
            updateDisplay();
        }

        // Save progress to both local storage and server
        async function saveProgress() {
            // Update progress data
            progressData.currentDay = currentDay;
            
            // Save to local storage immediately
            localStorage.setItem(\`mealPlan_\${planId}\`, JSON.stringify(progressData));
            
            // Save to server in background
            try {
                await fetch(\`/api/progress/\${planId}\`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(progressData)
                });
            } catch (error) {
                console.error('Failed to sync to server:', error);
                // Local storage still works even if server fails
            }
        }

        // Load progress from server or local storage
        async function loadProgress() {
            try {
                // Try server first
                const response = await fetch(\`/api/progress/\${planId}\`);
                const result = await response.json();
                
                if (result.success && result.data) {
                    progressData = result.data;
                    currentDay = progressData.currentDay || 'monday';
                    
                    // Update local storage with server data
                    localStorage.setItem(\`mealPlan_\${planId}\`, JSON.stringify(progressData));
                } else {
                    // Fallback to local storage
                    loadFromLocalStorage();
                }
            } catch (error) {
                // Server unavailable, use local storage
                loadFromLocalStorage();
            }
        }

        // Load from local storage
        function loadFromLocalStorage() {
            const saved = localStorage.getItem(\`mealPlan_\${planId}\`);
            if (saved) {
                progressData = JSON.parse(saved);
                currentDay = progressData.currentDay || 'monday';
            }
        }

        function setupCalendarTabs() {
            const tabs = document.querySelectorAll('.day-tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    currentDay = tab.dataset.day;
                    currentDayType = tab.classList.contains('training') ? 'training' : 
                                   tab.classList.contains('refeed') ? 'refeed' : 'rest';
                    
                    // Update day header
                    const dayHeader = document.getElementById('dayHeader');
                    const dayName = tab.dataset.dayname;
                    const dayTypeLabel = currentDayType === 'training' ? 'Training Day' : 
                                       currentDayType === 'refeed' ? 'Refeed Day' : 'Rest Day';
                    
                    dayHeader.innerHTML = \`
                        <h2>\${dayName}</h2>
                        <div class="day-type-label">\${dayTypeLabel}</div>
                    \`;
                    
                    updateDisplay();
                    saveProgress(); // Save when switching days
                });
            });
            
            // Set active day from saved progress
            tabs.forEach(tab => {
                if (tab.dataset.day === currentDay) {
                    tab.classList.add('active');
                    currentDayType = tab.classList.contains('training') ? 'training' : 
                                   tab.classList.contains('refeed') ? 'refeed' : 'rest';
                } else {
                    tab.classList.remove('active');
                }
            });
        }



        function updateDisplay() {
            const data = mealPlanData[currentDayType];
            
            // Restore checked states from saved progress
            if (progressData.checkedItems) {
                data.meals.forEach((meal, mealIndex) => {
                    meal.foods.forEach((food, foodIndex) => {
                        const key = \`\${currentDay}_\${currentDayType}_\${mealIndex}_\${foodIndex}\`;
                        if (progressData.checkedItems[key] !== undefined) {
                            food.checked = progressData.checkedItems[key];
                        }
                    });
                });
            }
            

            // Calculate actual totals from meals
            let totalCalories = 0;
            let totalProtein = 0;
            let totalCarbs = 0;
            let totalFats = 0;
            
            data.meals.forEach(meal => {
                meal.foods.forEach(food => {
                    totalCalories += food.calories;
                    // Extract macros from the "P: 31g • C: 0g • F: 4g" format
                    const macroMatch = food.macros.match(/P: (\\d+)g • C: (\\d+)g • F: ([\\d.]+)g/);
                    if (macroMatch) {
                        totalProtein += parseInt(macroMatch[1]);
                        totalCarbs += parseInt(macroMatch[2]);
                        totalFats += parseFloat(macroMatch[3]);
                    }
                });
            });
            
            // Update display with calculated totals
            document.getElementById('dailyCalories').textContent = Math.round(totalCalories).toLocaleString();
            document.getElementById('proteinTotal').textContent = Math.round(totalProtein) + 'g';
            document.getElementById('carbsTotal').textContent = Math.round(totalCarbs) + 'g';
            document.getElementById('fatsTotal').textContent = Math.round(totalFats) + 'g';
            
            renderMeals(data.meals);
            updateOverallProgress();
            
            document.querySelector('.content-padding').classList.add('fade-in');
            setTimeout(() => {
                document.querySelector('.content-padding').classList.remove('fade-in');
            }, 300);
        }

        function renderMeals(meals) {
            const container = document.getElementById('mealsContainer');
            container.innerHTML = '';
            
            meals.forEach((meal, mealIndex) => {
                const mealCard = document.createElement('div');
                mealCard.className = 'meal-card';
                
                mealCard.innerHTML = \`
                    <div class="meal-header">
                        <div class="meal-title">\${meal.name}</div>
                        <div class="meal-calories">\${Math.round(meal.calories)} cals</div>
                    </div>
                    <div class="meal-body">
                        \${meal.foods.map((food, foodIndex) => \`
                            <div class="food-item">
                                <div class="food-info">
                                    <div class="food-name">\${food.name}</div>
                                    <div class="food-amount">\${food.amount}</div>
                                    <div class="food-macros">\${food.macros} • \${food.calories} cals</div>
                                </div>
                                <button class="swap-button" onclick="swapFood(\${mealIndex}, \${foodIndex})">Swap</button>
                                <div class="check-button \${food.checked ? 'checked' : ''}" onclick="toggleFood(\${mealIndex}, \${foodIndex})">
                                    \${food.checked ? '✓' : ''}
                                </div>
                            </div>
                        \`).join('')}
                    </div>
                \`;
                
                container.appendChild(mealCard);
            });
        }

        function toggleFood(mealIndex, foodIndex) {
            const data = mealPlanData[currentDayType];
            const food = data.meals[mealIndex].foods[foodIndex];
            food.checked = !food.checked;
            
            // Save checked state
            const key = \`\${currentDay}_\${currentDayType}_\${mealIndex}_\${foodIndex}\`;
            if (!progressData.checkedItems) progressData.checkedItems = {};
            progressData.checkedItems[key] = food.checked;
            
            renderMeals(data.meals);
            updateOverallProgress();
            saveProgress(); // Save food check progress
        }

        function swapFood(mealIndex, foodIndex) {
            const food = mealPlanData[currentDayType].meals[mealIndex].foods[foodIndex];
            alert(\`Food swap feature for \${food.name} will show macro-equivalent alternatives here!\`);
        }

        function updateOverallProgress() {
            const data = mealPlanData[currentDayType];
            let checkedCalories = 0;
            let totalCalories = 0;
            
            data.meals.forEach(meal => {
                meal.foods.forEach(food => {
                    totalCalories += food.calories;
                    if (food.checked) {
                        checkedCalories += food.calories;
                    }
                });
            });
            
            const progress = (checkedCalories / totalCalories) * 100;
            document.getElementById('progressFill').style.width = progress + '%';
        }

        // Initialize when page loads
        init();
    </script>
</body>
</html>`;
}

// Helper functions for different day types
function generateRestDayMeals(targets, userData) {
  // Simplified - would generate actual rest day meals
  return {
    calories: Math.round(targets.calories * 0.85),
    protein: `${Math.round(targets.protein * 0.9)}g min`,
    carbs: `${Math.round(targets.hierarchical.carb_range.min * 0.8)}-${Math.round(targets.hierarchical.carb_range.max * 0.8)}g`,
    fats: `${Math.round(targets.fat * 1.1)}g`,
    water: "3.0L",
    meals: [] // Would generate actual meals
  };
}

function generateRefeedDayMeals(targets, userData) {
  // Simplified - would generate actual refeed day meals
  return {
    calories: Math.round(targets.calories * 1.2),
    protein: `${targets.protein}g min`,
    carbs: `${Math.round(targets.hierarchical.carb_range.min * 1.5)}-${Math.round(targets.hierarchical.carb_range.max * 1.5)}g`,
    fats: `${Math.round(targets.fat * 0.8)}g`,
    water: "3.5L",
    meals: [] // Would generate actual meals
  };
}

module.exports = {
  generateInteractiveHTML,
  generateRestDayMeals,
  generateRefeedDayMeals
}; 