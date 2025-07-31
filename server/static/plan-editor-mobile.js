// Mobile-Friendly Plan Editor JavaScript
class MobilePlanEditor {
    constructor() {
        console.log('🔧 MobilePlanEditor constructor started');
        this.planId = new URLSearchParams(window.location.search).get('planId');
        console.log('📋 Plan ID:', this.planId);
        this.currentDay = 'training';
        this.planData = null;
        this.currentMealData = null;
        this.selectedFood = null;
        
        this.init();
    }
    
    async init() {
        console.log('🚀 Initializing plan editor...');
        // Setup event listeners
        this.setupEventListeners();
        console.log('✅ Event listeners set up');
        
        // Load plan data
        await this.loadPlanData();
        console.log('✅ Plan data loaded');
        
        // Render initial view
        this.renderMeals();
        console.log('✅ Meals rendered');
        this.updateMacroSummary();
        console.log('✅ Macro summary updated');
    }
    
    setupEventListeners() {
        console.log('🔧 Setting up event listeners...');
        
        // Save button
        const saveBtn = document.getElementById('saveBtn');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                this.savePlan();
            });
            console.log('✅ Save button listener added');
        } else {
            console.error('❌ Save button not found');
        }
        
        // Day tab switching
        const dayTabs = document.querySelectorAll('.day-tab');
        if (dayTabs.length > 0) {
            dayTabs.forEach(tab => {
                tab.addEventListener('click', (e) => {
                    const day = e.target.dataset.day;
                    this.switchDay(day);
                });
            });
            console.log('✅ Day tab listeners added');
        } else {
            console.error('❌ Day tabs not found');
        }
        
        // Add meal button
        const addMealBtn = document.getElementById('addMealBtn');
        if (addMealBtn) {
            addMealBtn.addEventListener('click', () => {
                this.addNewMeal();
            });
            console.log('✅ Add meal button listener added');
        } else {
            console.error('❌ Add meal button not found');
        }
        
        // Modal close button
        const closeSwapModal = document.getElementById('closeSwapModal');
        if (closeSwapModal) {
            closeSwapModal.addEventListener('click', () => {
                this.closeSwapModal();
            });
            console.log('✅ Close modal button listener added');
        } else {
            console.error('❌ Close modal button not found');
        }
        
        // Swap search input
        const swapSearchInput = document.getElementById('swapSearchInput');
        if (swapSearchInput) {
            swapSearchInput.addEventListener('input', (e) => {
                this.searchFoods(e.target.value);
            });
            console.log('✅ Search input listener added');
        } else {
            console.error('❌ Search input not found');
        }
    }
    
    async loadPlanData() {
        console.log('📡 Loading plan data for ID:', this.planId);
        try {
            const response = await fetch(`/api/admin/plan/${this.planId}`);
            console.log('📡 API response status:', response.status);
            const data = await response.json();
            console.log('📡 API response data:', data);
            
            this.planData = data;
            console.log('✅ Plan data set:', this.planData);
            
        } catch (error) {
            console.error('❌ Error loading plan data:', error);
            alert('Failed to load meal plan');
        }
    }
    
    switchDay(day) {
        this.currentDay = day;
        
        // Update tab states
        document.querySelectorAll('.day-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.day === day);
        });
        
        // Re-render meals
        this.renderMeals();
        this.updateMacroSummary();
    }
    
    renderMeals() {
        const container = document.getElementById('mealsContainer');
        const meals = this.planData?.meals?.[this.currentDay] || [];
        
        if (meals.length === 0) {
            container.innerHTML = '<div class="loading">No meals found</div>';
            return;
        }
        
        container.innerHTML = meals.map((meal, mealIndex) => `
            <div class="meal-card ${mealIndex === 0 ? 'expanded' : ''}" data-meal-index="${mealIndex}">
                <div class="meal-header" onclick="editor.toggleMeal(${mealIndex})">
                    <div>
                        <div class="meal-title">${meal.name}</div>
                        <div class="meal-calories">${this.calculateMealCalories(meal)} cal</div>
                    </div>
                    <div class="meal-toggle">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M6 9l6 6 6-6"/>
                        </svg>
                    </div>
                </div>
                <div class="meal-content">
                    ${meal.foods.map((food, foodIndex) => `
                        <div class="food-item">
                            <div class="food-info">
                                <div class="food-name">${food.name}</div>
                                <div class="food-macros">
                                    ${food.protein}g P • ${food.carbs}g C • ${food.fats}g F • ${food.calories} cal
                                </div>
                            </div>
                            <div class="food-actions">
                                <span class="food-amount">${food.amount}</span>
                                <button class="swap-button" onclick="editor.openSwapModal(${mealIndex}, ${foodIndex})">
                                    Swap
                                </button>
                            </div>
                        </div>
                    `).join('')}
                    <button class="add-food-button" onclick="editor.addFood(${mealIndex})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 5v14m-7-7h14"/>
                        </svg>
                        Add Food
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    toggleMeal(mealIndex) {
        const mealCard = document.querySelector(`.meal-card[data-meal-index="${mealIndex}"]`);
        mealCard.classList.toggle('expanded');
    }
    
    calculateMealCalories(meal) {
        return meal.foods.reduce((total, food) => total + (food.calories || 0), 0);
    }
    
    updateMacroSummary() {
        const meals = this.planData?.meals?.[this.currentDay] || [];
        let totals = { calories: 0, protein: 0, carbs: 0, fats: 0 };
        
        meals.forEach(meal => {
            meal.foods.forEach(food => {
                totals.calories += food.calories || 0;
                totals.protein += food.protein || 0;
                totals.carbs += food.carbs || 0;
                totals.fats += food.fats || 0;
            });
        });
        
        document.getElementById('currentCalories').textContent = Math.round(totals.calories);
        document.getElementById('currentProtein').textContent = Math.round(totals.protein) + 'g';
        document.getElementById('currentCarbs').textContent = Math.round(totals.carbs) + 'g';
        document.getElementById('currentFats').textContent = Math.round(totals.fats) + 'g';
    }
    
    openSwapModal(mealIndex, foodIndex) {
        this.selectedFood = { mealIndex, foodIndex };
        const modal = document.getElementById('swapModal');
        modal.style.display = 'block';
        
        // Load swap options
        this.loadSwapOptions();
    }
    
    closeSwapModal() {
        const modal = document.getElementById('swapModal');
        modal.style.display = 'none';
        this.selectedFood = null;
    }
    
    async loadSwapOptions() {
        const container = document.getElementById('swapOptions');
        container.innerHTML = '<div class="loading">Loading alternatives...</div>';
        
        // Simulate loading alternatives (in real app, fetch from database)
        setTimeout(() => {
            const alternatives = [
                { name: 'Grilled Salmon', protein: 35, carbs: 0, fats: 15, calories: 275 },
                { name: 'Turkey Breast', protein: 30, carbs: 0, fats: 3, calories: 147 },
                { name: 'Tofu', protein: 20, carbs: 4, fats: 12, calories: 200 },
                { name: 'Lean Beef', protein: 32, carbs: 0, fats: 10, calories: 218 }
            ];
            
            container.innerHTML = alternatives.map(food => `
                <div class="swap-option" onclick="editor.selectSwap('${food.name}', ${food.protein}, ${food.carbs}, ${food.fats}, ${food.calories})">
                    <div class="swap-option-name">${food.name}</div>
                    <div class="swap-option-macros">
                        ${food.protein}g P • ${food.carbs}g C • ${food.fats}g F • ${food.calories} cal
                    </div>
                </div>
            `).join('');
        }, 500);
    }
    
    selectSwap(name, protein, carbs, fats, calories) {
        if (!this.selectedFood) return;
        
        const { mealIndex, foodIndex } = this.selectedFood;
        const meal = this.planData.meals[this.currentDay][mealIndex];
        
        // Update the food
        meal.foods[foodIndex] = {
            ...meal.foods[foodIndex],
            name,
            protein,
            carbs,
            fats,
            calories
        };
        
        // Close modal and re-render
        this.closeSwapModal();
        this.renderMeals();
        this.updateMacroSummary();
        
        // Show success feedback
        this.showToast('Food swapped successfully');
    }
    
    searchFoods(query) {
        // Implement food search functionality
        console.log('Searching for:', query);
    }
    
    addFood(mealIndex) {
        const newFood = {
            name: 'New Food',
            amount: '100g',
            protein: 0,
            carbs: 0,
            fats: 0,
            calories: 0
        };
        
        this.planData.meals[this.currentDay][mealIndex].foods.push(newFood);
        this.renderMeals();
        this.updateMacroSummary();
    }
    
    addNewMeal() {
        const newMeal = {
            name: `Meal ${this.planData.meals[this.currentDay].length + 1}`,
            foods: []
        };
        
        this.planData.meals[this.currentDay].push(newMeal);
        this.renderMeals();
        
        // Scroll to new meal
        setTimeout(() => {
            const newMealCard = document.querySelector('.meal-card:last-child');
            newMealCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            newMealCard.classList.add('expanded');
        }, 100);
    }
    
    async savePlan() {
        const saveBtn = document.getElementById('saveBtn');
        saveBtn.textContent = 'Saving...';
        saveBtn.disabled = true;
        
        try {
            const response = await fetch(`/api/admin/update-plan/${this.planId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    meals: this.planData.meals,
                    action: 'save'
                })
            });
            
            if (response.ok) {
                this.showToast('Plan saved successfully!', 'success');
                setTimeout(() => {
                    window.location.href = '/admin-dashboard.html';
                }, 1500);
            } else {
                throw new Error('Failed to save plan');
            }
        } catch (error) {
            console.error('Error saving plan:', error);
            this.showToast('Failed to save plan', 'error');
            saveBtn.textContent = 'Save Changes';
            saveBtn.disabled = false;
        }
    }
    
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            z-index: 300;
            animation: slideUp 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideDown 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Initialize editor when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 DOM loaded, initializing editor...');
    const editor = new MobilePlanEditor();
}); 