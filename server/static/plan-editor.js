// Plan Editor JavaScript
class MealPlanEditor {
    constructor() {
        this.planId = this.getPlanIdFromUrl();
        this.currentDay = 'training';
        this.planData = null;
        this.foodDatabase = [];
        this.unsavedChanges = false;
        
        this.init();
    }
    
    async init() {
        this.setupEventListeners();
        await this.loadPlanData();
        this.setupAutoSave();
    }
    
    getPlanIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('planId');
    }
    
    setupEventListeners() {
        // Header buttons
        document.getElementById('saveBtn').addEventListener('click', () => this.savePlan(true));
        document.getElementById('previewBtn').addEventListener('click', () => this.showPreview());
        document.getElementById('cancelBtn').addEventListener('click', () => this.cancel());
        
        // Day tabs
        document.querySelectorAll('.day-tab').forEach(tab => {
            tab.addEventListener('click', (e) => this.switchDay(e.target.dataset.day));
        });
        
        // Add meal button
        document.getElementById('addMealBtn').addEventListener('click', () => this.addMeal());
        
        // Food search
        const foodSearch = document.getElementById('foodSearch');
        foodSearch.addEventListener('input', debounce((e) => this.searchFoods(e.target.value), 300));
        
        // AI Assistant
        document.getElementById('aiSuggestBtn').addEventListener('click', () => this.getAISuggestions());
        
        // Preview modal
        document.getElementById('closePreviewBtn').addEventListener('click', () => this.hidePreview());
        
        // Track changes
        document.addEventListener('input', () => {
            this.unsavedChanges = true;
            this.updateMacroTotals();
        });
        
        // Warn before leaving with unsaved changes
        window.addEventListener('beforeunload', (e) => {
            if (this.unsavedChanges) {
                e.preventDefault();
                e.returnValue = '';
            }
        });
    }
    
    async loadPlanData() {
        try {
            this.showLoading();
            
            const response = await fetch(`/api/admin/plan/${this.planId}`);
            if (!response.ok) throw new Error('Failed to load plan');
            
            this.planData = await response.json();
            
            // Update header
            document.getElementById('clientName').textContent = this.planData.clientName;
            document.getElementById('clientEmail').textContent = this.planData.clientEmail;
            document.getElementById('planId').textContent = this.planData.id;
            document.getElementById('creationDate').textContent = new Date(this.planData.createdAt).toLocaleDateString();
            
            // Update targets
            this.updateTargets();
            
            // Render meals
            this.renderMeals();
            
            this.hideLoading();
        } catch (error) {
            console.error('Error loading plan:', error);
            alert('Failed to load meal plan. Please try again.');
            this.hideLoading();
        }
    }
    
    updateTargets() {
        const targets = this.planData.targets || {};
        
        document.getElementById('targetCalories').textContent = targets.calories || 0;
        document.getElementById('targetProtein').textContent = `${targets.protein || 0}g`;
        document.getElementById('targetCarbs').textContent = `${targets.carbsMax || 0}g`;
        document.getElementById('targetFats').textContent = `${targets.fats || 0}g`;
        
        this.updateMacroTotals();
    }
    
    renderMeals() {
        const container = document.getElementById('mealsContainer');
        const meals = this.planData.meals[this.currentDay] || [];
        
        container.innerHTML = '';
        
        meals.forEach((meal, index) => {
            container.appendChild(this.createMealCard(meal, index));
        });
        
        this.updateMacroTotals();
    }
    
    createMealCard(meal, mealIndex) {
        const card = document.createElement('div');
        card.className = 'meal-card';
        card.dataset.mealIndex = mealIndex;
        
        card.innerHTML = `
            <div class="meal-header">
                <input type="text" class="meal-name" value="${meal.name}" data-meal-index="${mealIndex}">
                <div class="meal-actions">
                    <button class="icon-btn" onclick="editor.duplicateMeal(${mealIndex})" title="Duplicate">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <rect x="1" y="1" width="10" height="10" stroke="currentColor" stroke-width="1.5" fill="none"/>
                            <rect x="5" y="5" width="10" height="10" stroke="currentColor" stroke-width="1.5" fill="white"/>
                        </svg>
                    </button>
                    <button class="icon-btn delete" onclick="editor.deleteMeal(${mealIndex})" title="Delete">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="food-list">
                ${meal.foods.map((food, foodIndex) => this.createFoodItem(food, mealIndex, foodIndex)).join('')}
            </div>
            <button class="add-food-btn" onclick="editor.showFoodSearch(${mealIndex})">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 4v8M4 8h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                Add Food
            </button>
            <div class="meal-totals">
                <div class="total-item">
                    <span class="total-label">Calories</span>
                    <span class="total-value" data-total="calories">${this.calculateMealTotal(meal, 'calories')}</span>
                </div>
                <div class="total-item">
                    <span class="total-label">Protein</span>
                    <span class="total-value" data-total="protein">${this.calculateMealTotal(meal, 'protein')}g</span>
                </div>
                <div class="total-item">
                    <span class="total-label">Carbs</span>
                    <span class="total-value" data-total="carbs">${this.calculateMealTotal(meal, 'carbs')}g</span>
                </div>
                <div class="total-item">
                    <span class="total-label">Fats</span>
                    <span class="total-value" data-total="fats">${this.calculateMealTotal(meal, 'fats')}g</span>
                </div>
            </div>
        `;
        
        // Add event listener for meal name changes
        const mealNameInput = card.querySelector('.meal-name');
        mealNameInput.addEventListener('input', (e) => {
            this.planData.meals[this.currentDay][mealIndex].name = e.target.value;
        });
        
        return card;
    }
    
    createFoodItem(food, mealIndex, foodIndex) {
        return `
            <div class="food-item" data-meal-index="${mealIndex}" data-food-index="${foodIndex}">
                <span class="food-name">${food.name}</span>
                <span class="macro">P/C/F</span>
                <input type="text" class="food-amount" value="${food.amount}" 
                       data-meal-index="${mealIndex}" data-food-index="${foodIndex}"
                       onchange="editor.updateFoodAmount(${mealIndex}, ${foodIndex}, this.value)">
                <span class="macro calories">${food.calories}</span>
                <span class="macro">${food.protein}g</span>
                <span class="macro">${food.carbs}g</span>
                <span class="macro">${food.fats}g</span>
                <button class="icon-btn delete" onclick="editor.deleteFood(${mealIndex}, ${foodIndex})" title="Delete">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        `;
    }
    
    calculateMealTotal(meal, macro) {
        return meal.foods.reduce((total, food) => total + (food[macro] || 0), 0).toFixed(macro === 'calories' ? 0 : 1);
    }
    
    updateMacroTotals() {
        const meals = this.planData?.meals[this.currentDay] || [];
        
        let totals = {
            calories: 0,
            protein: 0,
            carbs: 0,
            fats: 0
        };
        
        meals.forEach(meal => {
            meal.foods.forEach(food => {
                totals.calories += food.calories || 0;
                totals.protein += food.protein || 0;
                totals.carbs += food.carbs || 0;
                totals.fats += food.fats || 0;
            });
        });
        
        // Update display
        document.getElementById('currentCalories').textContent = Math.round(totals.calories);
        document.getElementById('currentProtein').textContent = `${Math.round(totals.protein)}g`;
        document.getElementById('currentCarbs').textContent = `${Math.round(totals.carbs)}g`;
        document.getElementById('currentFats').textContent = `${Math.round(totals.fats)}g`;
        
        // Update progress bars
        const targets = this.planData?.targets || {};
        this.updateProgressBar('calories', totals.calories, targets.calories);
        this.updateProgressBar('protein', totals.protein, targets.protein);
        this.updateProgressBar('carbs', totals.carbs, targets.carbsMax);
        this.updateProgressBar('fats', totals.fats, targets.fats);
    }
    
    updateProgressBar(macro, current, target) {
        const progressBar = document.getElementById(`${macro}Progress`);
        if (progressBar && target) {
            const percentage = Math.min((current / target) * 100, 100);
            progressBar.style.width = `${percentage}%`;
        }
    }
    
    switchDay(day) {
        this.currentDay = day;
        
        // Update tab appearance
        document.querySelectorAll('.day-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.day === day);
        });
        
        // Render meals for selected day
        this.renderMeals();
    }
    
    addMeal() {
        const newMeal = {
            name: `Meal ${this.planData.meals[this.currentDay].length + 1}`,
            foods: []
        };
        
        this.planData.meals[this.currentDay].push(newMeal);
        this.renderMeals();
        this.unsavedChanges = true;
    }
    
    deleteMeal(mealIndex) {
        if (confirm('Are you sure you want to delete this meal?')) {
            this.planData.meals[this.currentDay].splice(mealIndex, 1);
            this.renderMeals();
            this.unsavedChanges = true;
        }
    }
    
    duplicateMeal(mealIndex) {
        const meal = this.planData.meals[this.currentDay][mealIndex];
        const duplicate = JSON.parse(JSON.stringify(meal));
        duplicate.name = `${meal.name} (Copy)`;
        
        this.planData.meals[this.currentDay].splice(mealIndex + 1, 0, duplicate);
        this.renderMeals();
        this.unsavedChanges = true;
    }
    
    deleteFood(mealIndex, foodIndex) {
        this.planData.meals[this.currentDay][mealIndex].foods.splice(foodIndex, 1);
        this.renderMeals();
        this.unsavedChanges = true;
    }
    
    updateFoodAmount(mealIndex, foodIndex, newAmount) {
        const food = this.planData.meals[this.currentDay][mealIndex].foods[foodIndex];
        const originalAmount = parseFloat(food.amount) || 100;
        const newAmountNum = parseFloat(newAmount) || 100;
        const ratio = newAmountNum / originalAmount;
        
        // Update macros proportionally
        food.amount = newAmount;
        food.calories = Math.round(food.calories * ratio);
        food.protein = Math.round(food.protein * ratio * 10) / 10;
        food.carbs = Math.round(food.carbs * ratio * 10) / 10;
        food.fats = Math.round(food.fats * ratio * 10) / 10;
        
        this.renderMeals();
        this.unsavedChanges = true;
    }
    
    async searchFoods(query) {
        if (query.length < 3) {
            document.getElementById('searchResults').classList.remove('active');
            return;
        }
        
        try {
            const response = await fetch(`/api/foods?search=${encodeURIComponent(query)}`);
            const foods = await response.json();
            
            const resultsContainer = document.getElementById('searchResults');
            resultsContainer.innerHTML = foods.map(food => `
                <div class="search-result-item" onclick="editor.addFoodFromSearch(${JSON.stringify(food).replace(/"/g, '&quot;')})">
                    <div class="search-result-name">${food.name}</div>
                    <div class="search-result-macros">
                        Cal: ${food.calories} | P: ${food.protein}g | C: ${food.carbs}g | F: ${food.fats}g
                    </div>
                </div>
            `).join('');
            
            resultsContainer.classList.add('active');
        } catch (error) {
            console.error('Error searching foods:', error);
        }
    }
    
    showFoodSearch(mealIndex) {
        this.currentMealIndex = mealIndex;
        document.getElementById('foodSearch').focus();
    }
    
    addFoodFromSearch(food) {
        if (this.currentMealIndex === undefined) return;
        
        const newFood = {
            name: food.name,
            amount: '100g',
            calories: food.calories,
            protein: food.protein,
            carbs: food.carbs,
            fats: food.fats
        };
        
        this.planData.meals[this.currentDay][this.currentMealIndex].foods.push(newFood);
        this.renderMeals();
        this.unsavedChanges = true;
        
        // Clear search
        document.getElementById('foodSearch').value = '';
        document.getElementById('searchResults').classList.remove('active');
    }
    
    async getAISuggestions() {
        const request = document.getElementById('aiInput').value;
        if (!request.trim()) return;
        
        try {
            this.showLoading();
            
            const response = await fetch('/api/admin/ai-suggestions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    request,
                    currentMeals: this.planData.meals,
                    targets: this.planData.targets
                })
            });
            
            const data = await response.json();
            this.displayAISuggestions(data.suggestions);
            
            this.hideLoading();
        } catch (error) {
            console.error('Error getting AI suggestions:', error);
            alert('Failed to get AI suggestions. Please try again.');
            this.hideLoading();
        }
    }
    
    displayAISuggestions(suggestions) {
        const container = document.getElementById('aiSuggestions');
        
        if (!suggestions || suggestions.length === 0) {
            container.innerHTML = '<p style="color: #718096; font-size: 0.875rem;">No suggestions found. Try rephrasing your request.</p>';
            container.classList.add('active');
            return;
        }
        
        container.innerHTML = suggestions.map((suggestion, index) => `
            <div class="ai-suggestion">
                <div class="ai-suggestion-header">${suggestion.description}</div>
                <div class="ai-suggestion-detail">${this.formatSuggestionDetail(suggestion)}</div>
                <button class="btn btn-primary apply-suggestion-btn" onclick="editor.applySuggestion(${index})">
                    Apply This Change
                </button>
            </div>
        `).join('');
        
        container.classList.add('active');
        this.currentSuggestions = suggestions;
    }
    
    formatSuggestionDetail(suggestion) {
        switch (suggestion.type) {
            case 'replace':
                return `Replace "${suggestion.oldFood}" with "${suggestion.newFood}" in ${suggestion.meals.length} meal(s)`;
            case 'reduce_carbs':
                return `Reduce carbohydrates by ${suggestion.amount}g across multiple foods`;
            case 'make_vegetarian':
                return `Convert ${suggestion.replacements.length} items to vegetarian alternatives`;
            case 'increase_protein':
                return `Add protein-rich foods to increase total by ${suggestion.amount}g`;
            default:
                return 'Custom modification';
        }
    }
    
    applySuggestion(index) {
        const suggestion = this.currentSuggestions[index];
        
        switch (suggestion.type) {
            case 'replace':
                this.applyReplaceSuggestion(suggestion);
                break;
            case 'reduce_carbs':
                this.applyReduceCarbsSuggestion(suggestion);
                break;
            case 'make_vegetarian':
                this.applyVegetarianSuggestion(suggestion);
                break;
            case 'increase_protein':
                this.applyProteinSuggestion(suggestion);
                break;
        }
        
        this.renderMeals();
        this.unsavedChanges = true;
        
        // Clear suggestions
        document.getElementById('aiSuggestions').classList.remove('active');
    }
    
    applyReplaceSuggestion(suggestion) {
        suggestion.meals.forEach(mealInfo => {
            const food = this.planData.meals[mealInfo.dayType][mealInfo.mealIndex].foods[mealInfo.foodIndex];
            food.name = food.name.replace(new RegExp(suggestion.oldFood, 'gi'), suggestion.newFood);
            // Note: In production, you'd also update the macros based on the new food
        });
    }
    
    applyReduceCarbsSuggestion(suggestion) {
        suggestion.suggestions.forEach(item => {
            const food = this.planData.meals[item.dayType][item.mealIndex].foods[item.foodIndex];
            food.amount = item.newAmount;
            // Recalculate macros based on new amount
            const ratio = parseFloat(item.newAmount) / parseFloat(item.currentAmount);
            food.calories = Math.round(food.calories * ratio);
            food.protein = Math.round(food.protein * ratio * 10) / 10;
            food.carbs = Math.round(food.carbs * ratio * 10) / 10;
            food.fats = Math.round(food.fats * ratio * 10) / 10;
        });
    }
    
    applyVegetarianSuggestion(suggestion) {
        suggestion.replacements.forEach(item => {
            const food = this.planData.meals[item.dayType][item.mealIndex].foods[item.foodIndex];
            food.name = item.replacement;
            // Note: In production, you'd also update the macros based on the vegetarian alternative
        });
    }
    
    applyProteinSuggestion(suggestion) {
        // Add suggested protein foods to appropriate meals
        suggestion.suggestions.forEach(item => {
            // Find or create a snack meal
            let snackMeal = this.planData.meals[this.currentDay].find(meal => 
                meal.name.toLowerCase().includes('snack')
            );
            
            if (!snackMeal) {
                snackMeal = { name: 'Snack', foods: [] };
                this.planData.meals[this.currentDay].push(snackMeal);
            }
            
            snackMeal.foods.push({
                name: item.food,
                amount: item.amount,
                calories: item.calories,
                protein: item.protein,
                carbs: 5, // Estimate
                fats: 3   // Estimate
            });
        });
    }
    
    async savePlan(approved = false) {
        try {
            this.showLoading();
            
            const response = await fetch(`/api/admin/update-plan/${this.planId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    meals: this.planData.meals,
                    approved
                })
            });
            
            if (!response.ok) throw new Error('Failed to save plan');
            
            this.unsavedChanges = false;
            alert('Plan saved successfully!');
            
            if (approved) {
                // Redirect back to admin dashboard
                window.location.href = '/admin';
            }
            
            this.hideLoading();
        } catch (error) {
            console.error('Error saving plan:', error);
            alert('Failed to save plan. Please try again.');
            this.hideLoading();
        }
    }
    
    async showPreview() {
        try {
            const previewUrl = `/api/admin/plan/${this.planId}/preview`;
            document.getElementById('previewFrame').src = previewUrl;
            document.getElementById('previewModal').classList.add('active');
        } catch (error) {
            console.error('Error showing preview:', error);
            alert('Failed to load preview. Please try again.');
        }
    }
    
    hidePreview() {
        document.getElementById('previewModal').classList.remove('active');
        document.getElementById('previewFrame').src = '';
    }
    
    cancel() {
        if (this.unsavedChanges) {
            if (!confirm('You have unsaved changes. Are you sure you want to leave?')) {
                return;
            }
        }
        window.location.href = '/admin';
    }
    
    setupAutoSave() {
        // Auto-save every 5 minutes
        setInterval(() => {
            if (this.unsavedChanges) {
                this.savePlan(false);
            }
        }, 5 * 60 * 1000);
    }
    
    showLoading() {
        document.getElementById('loadingOverlay').classList.add('active');
    }
    
    hideLoading() {
        document.getElementById('loadingOverlay').classList.remove('active');
    }
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize editor when page loads
let editor;
document.addEventListener('DOMContentLoaded', () => {
    editor = new MealPlanEditor();
});