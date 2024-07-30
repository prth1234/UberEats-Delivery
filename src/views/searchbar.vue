<template>
  <div>
    <!-- Search icon -->
    <img
      src="https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png"
      alt="Search Icon"
      style="width: 25px; height: 25px; margin-left: -140px; margin-right: 50px; cursor: pointer;"
      @click="openPopup"
    >

    <!-- Popup container -->
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <div class="popup-header">
          <h2>Search</h2>
          <button @click="closePopup" aria-label="Close" class="close-button">x</button>
        </div>
        <div class="popup-body">
          <form class="form">
            <label for="search">
              <input 
                required
                autocomplete="off" 
                placeholder="Search for city, restaurant, cuisine, food, or dish" 
                id="search" 
                type="text" 
                style="color: black; font-family: Uber Move Light; font-weight: 100; font-size: 18px;"
                v-model="searchQuery"
                @input="searchAll"
                @keydown.down="moveDown"
                @keydown.up="moveUp"
                @keydown.enter.prevent="selectResult"
              >
              <div class="icon">
              <svg stroke-width="2.5" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-on">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
              <svg stroke-width="2.5" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-off">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
            </div>
              <button type="reset" class="close-btn" @click="clearSearch">
                <svg viewBox="0 0 20 20" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
                </svg>
              </button>
            </label>
            <div v-if="showSuggestions" class="suggestions">
              <div 
                v-if="filteredResults.length > 0"
                v-for="(result, index) in filteredResults" 
                :key="index" 
                @click="selectResult(result)"
                :class="{ 'selected': index === selectedIndex }"
                class="suggestion-item"
              >
                <span class="result-type">{{ result.type }}:</span> {{ result.name }}
              </div>
              <div v-if="showNotFound" class="not-found-message">
                Hmm... can't find this. Try again?
              </div>
            </div>
          </form>
          <h2 style="font-family: Uber Move; color: black; text-align: left; font-size: 20px;">Recent searches</h2>
          <div class="order-details">
            <div v-for="(address, index) in savedAddresses" :key="index" class="detail-item" style="flex-direction: column; align-items: center;">
              <span class="icon" style="margin-right: 20px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#5E5E5E"><title>Location marker</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1c2.4 0 4.9.9 6.7 2.8 3.7 3.7 3.7 9.8 0 13.4L12 24l-6.7-6.7c-3.7-3.7-3.7-9.8 0-13.5C7.1 1.9 9.6 1 12 1Zm0 18.8 4.6-4.6c2.5-2.6 2.5-6.7 0-9.3C15.4 4.7 13.7 4 12 4c-1.7 0-3.4.7-4.6 1.9-2.5 2.6-2.5 6.7 0 9.3l4.6 4.6Zm2-9.3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor"></path></svg>
              </span>
              <div style="text-align: left; color: black; margin-left: 40px; font-family: Uber Move; font-weight: 200;">
                <strong>{{ address }}</strong>
                <hr class="divider">
              </div>
              <span class="edit-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Edit"><title>Pencil</title><g fill="currentColor"><path d="m14.4 6.6 3 3L5 22H2v-3L14.4 6.6ZM19.071 1.99l-2.475 2.474 2.97 2.97 2.475-2.475-2.97-2.97Z"></path></g></svg></span>
            </div>
          </div>
          <div class="buttons-container">
            <button @click="closePopup" class="button" style="margin-top: 15px; font-family: 'Uber Move';">Done</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const showPopup = ref(false);
const searchQuery = ref('');
const showSuggestions = ref(false);
const showNotFound = ref(false);
const selectedIndex = ref(-1);
const savedAddresses = ref([]);



const restaurants = ref([
  'McDonald\'s', 'Burger King', 'Subway', 'Pizza Hut', 'KFC',
  'Domino\'s', 'Taco Bell', 'Wendy\'s', 'Starbucks', 'Dunkin\' Donuts'
  // Add more restaurants as needed
]);

const cuisines = ref([
  'Italian', 'Chinese', 'Mexican', 'Japanese', 'Indian',
  'Thai', 'French', 'Greek', 'Spanish', 'American'
  // Add more cuisines as needed
]);

const foods = ref([
  'Pizza', 'Burger', 'Sushi', 'Pasta', 'Tacos',
  'Curry', 'Salad', 'Steak', 'Sandwich', 'Ramen'
  // Add more foods as needed
]);

const dishes = ref([
  'Margherita Pizza', 'Cheeseburger', 'California Roll', 'Spaghetti Carbonara', 'Fish Tacos',
  'Chicken Tikka Masala', 'Caesar Salad', 'Filet Mignon', 'Club Sandwich', 'Tonkotsu Ramen'
  // Add more specific dishes as needed
]);

const filteredResults = computed(() => {
  if (searchQuery.value.length < 2) return [];
  const query = searchQuery.value.toLowerCase();
  
  // const matchingCities = cities.value.filter(city => 
  //   city.toLowerCase().includes(query)
  // ).map(item => ({ type: 'City', name: item }));
  
  const matchingRestaurants = restaurants.value.filter(restaurant => 
    restaurant.toLowerCase().includes(query)
  ).map(item => ({ type: 'Restaurant', name: item }));
  
  const matchingCuisines = cuisines.value.filter(cuisine => 
    cuisine.toLowerCase().includes(query)
  ).map(item => ({ type: 'Cuisine', name: item }));
  
  const matchingFoods = foods.value.filter(food => 
    food.toLowerCase().includes(query)
  ).map(item => ({ type: 'Food', name: item }));
  
  const matchingDishes = dishes.value.filter(dish => 
    dish.toLowerCase().includes(query)
  ).map(item => ({ type: 'Dish', name: item }));
  
  return [
    // ...matchingCities,
    ...matchingRestaurants,
    ...matchingCuisines,
    ...matchingFoods,
    ...matchingDishes
  ];
});

function openPopup() {
  showPopup.value = true;
  if (savedAddresses.value.length > 0) {
    searchQuery.value = savedAddresses.value[0];
  }
}

function closePopup() {
  showPopup.value = false;
  searchQuery.value = '';
  showSuggestions.value = false;
  showNotFound.value = false;
}

function searchAll() {
  selectedIndex.value = -1;
  showSuggestions.value = searchQuery.value.length >= 2;
  showNotFound.value = searchQuery.value.length >= 2 && filteredResults.value.length === 0;
}

function moveDown() {
  if (selectedIndex.value < filteredResults.value.length - 1) {
    selectedIndex.value++;
  }
}

function moveUp() {
  if (selectedIndex.value > 0) {
    selectedIndex.value--;
  }
}

function selectResult(result) {
  if (typeof result === 'string') {
    searchQuery.value = result;
  } else {
    searchQuery.value = result.name;
  }
  if (!savedAddresses.value.includes(searchQuery.value)) {
    savedAddresses.value.unshift(searchQuery.value);
    // Keep only the last 3 searches
    if (savedAddresses.value.length > 3) {
      savedAddresses.value.pop();
    }
  }
  showSuggestions.value = false;
  showNotFound.value = false;
  closePopup();
}

function clearSearch() {
  searchQuery.value = '';
  showSuggestions.value = false;
  showNotFound.value = false;
}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 400px;
}

.divider{
  border: None;
  color: #f3f3f3;
  height: 3px;
  background-color: #f3f3f3;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.popup-header h2 {
  font-family: 'Uber Move';
  color: black;
  margin: 0;
}

.close-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: black;
}

.popup-body {
  display: flex;
  flex-direction: column;
}

.form {
  --input-bg: #f3f3f3;
  color: black;
  --padding: 1.5em;
  --rotate: 80deg;
  --gap: 2em;
  --icon-change-color: #000000;
  --height: 55px;
  width: 380px;
  padding-inline-end: 1em;
  background: var(--input-bg);
  position: relative;
  border-radius: 20px;
}

.form label {
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--height);
}

.form input {
  width: 100%;
  padding-inline-start: calc(var(--padding) + var(--gap));
  outline: none;
  background: none;
  border: 0;
}

.icon {
  position: absolute;
  left: var(--padding);
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  right: calc(var(--padding) - var(--gap));
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  padding: 0.1em;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: 0.3s;
  opacity: 0;
  transform: scale(0);
  visibility: hidden;
}

.suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 2px solid #f3f3f3;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
  border-radius: 10px;
}

.suggestion-item {
  padding: 10px;
  cursor: pointer;
  text-align: left;
}

.suggestion-item:hover, .suggestion-item.selected {
  background-color: #f0f0f0;
}

.result-type {
  font-weight: bold;
  margin-right: 5px;
}

.not-found-message {
  padding: 10px;
  color: #666;
  text-align: center;
  font-family: 'Uber Move';
}

.button {
  background-color: #000000;
  height: 59px;
  width: 100%;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 500px;
  cursor: pointer;
  font-family: 'Uber Move';
  margin-top: 15px;
}

.order-details {
  margin-top: 20px;}
  
  
  </style>