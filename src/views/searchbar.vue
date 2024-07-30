<template>
    <div>
      <!-- Image trigger for the popup -->
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
          <br><br>
          <div class="popup-body">
            <div class="input-container">
              <select v-model="selectedCategory" id="search-category" class="input dropdown" style="font-family: Arial, Helvetica, sans-serif;">
                <option value="" enabled>All</option>
                <option value="Fast food">Fast food</option>
                <option value="Cuisine">Cuisine</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Chain">Chain</option>
                <option value="Area">Area</option>
                <option value="Dish">Dish</option>
              </select>
              <input type="text" v-model="searchQuery" placeholder="Search for a category" class="search-input" style="font-family: Arial, Helvetica, sans-serif;">
            </div>
            <div class="buttons-container">
              <button @click="search" class="button">Search</button>
            </div>
          </div>
        </div>
      </div>




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
 
        <div class="buttons-container">
          <button @click="saveAddress" class="button" style="margin-top: 15px; font-family: 'Uber Move';">Done</button>
        </div>
      </div>
    </div>
  </div>



    </div>
  </template>
  
  <script setup>
  import { ref,computed } from 'vue';
  
  // Define refs for data
  const showPopup = ref(false);
  const selectedCategory = ref('');
  const searchQuery = ref('');
  
  // Function to open the popup
  // const openPopup = () => {
  //   showPopup.value = true;
  // };
  
  // Function to close the popup
  // const closePopup = () => {
  //   showPopup.value = false;
  // };
  
  // Function to handle the search logic
  const search = () => {
    console.log('Searching for:', searchQuery.value, 'in category:', selectedCategory.value);
    closePopup(); // Close the popup after initiating search
  };

import searchbar from './searchbar.vue';
const savedAddresses = ref([]);


const selectedArea = ref('');
const displayedArea = ref('HSR, Bengaluru');
const savedAddress = ref('');
const showSuggestions = ref(false);

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
const selectedIndex = ref(-1);
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
  savedAddress.value = searchQuery.value;
  showSuggestions.value = false;
  showNotFound.value = false;  // Reset the "not found" message
}

const filteredResults = computed(() => {
  if (searchQuery.value.length < 2) return [];
  const query = searchQuery.value.toLowerCase();
  
  const matchingCities = cities.value.filter(city => 
    city.toLowerCase().includes(query)
  ).map(item => ({ type: 'City', name: item }));
  
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
    ...matchingCities,
    ...matchingRestaurants,
    ...matchingCuisines,
    ...matchingFoods,
    ...matchingDishes
  ];
});
const filteredCities = computed(() => {
  if (searchQuery.value.length < 2) return [];
  return cities.value.filter(city => 
    city.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

function openPopup() {
  showPopup.value = true;
  if (savedAddress.value) {
    searchQuery.value = savedAddress.value;
  }
}

function closePopup() {
  showPopup.value = false;
  searchQuery.value = '';
  showSuggestions.value = false;
}

function searchCities() {
  selectedIndex.value = -1;
  showSuggestions.value = searchQuery.value.length >= 2;
}

function moveDown() {
  if (selectedIndex.value < filteredCities.value.length - 1) {
    selectedIndex.value++;
  }
}

function moveUp() {
  if (selectedIndex.value > 0) {
    selectedIndex.value--;
  }
}

function selectCity(city) {
  if (typeof city === 'string') {
    searchQuery.value = city;
  } else {
    searchQuery.value = filteredCities.value[selectedIndex.value];
  }
  if (!savedAddresses.value.includes(searchQuery.value)) {
    savedAddresses.value.unshift(searchQuery.value);
    // Keep only the last 3 addresses
    if (savedAddresses.value.length > 3) {
      savedAddresses.value.pop();
    }
  }
  savedAddress.value = searchQuery.value;
  showSuggestions.value = false;
  showNotFound.value = false;  // Reset the "not found" message

}
function searchAll() {
  selectedIndex.value = -1;
  showSuggestions.value = searchQuery.value.length >= 2;
  showNotFound.value = searchQuery.value.length >= 2 && filteredResults.value.length === 0;
}
function saveAddress() {
  if (savedAddress.value) {
    displayedArea.value = savedAddress.value;
  }
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
    text-align: center;
    width: 540px;
    height: 270px;
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
  
  .input-container {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .input {
    padding: 10px;
    border-radius: 5px;
    font-family: 'Uber Move';
    box-sizing: border-box;
    background-color: #f4f4f4;
    font-size: 1.15rem;
    color: black;
  }
  
  .dropdown {
    width: 30%;
    margin-right: 10px;
    border:None,
  }
  
  .search-input {
    width: 70%;
    padding: 10px;
    border: None;
    font-family: 'Uber Move';
    box-sizing: border-box;
    background-color: #f4f4f4;
    font-size: 1.15rem;
    color: black;
  }
  
  .button {
    background-color: #000000;
    height: 59px;
    width: 100%;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Uber Move';
  }
  .divider {
  color: #f3f3f3;
  background-color: #f3f3f3;
  border: none;
  height: 4px;
  margin-top: 30px;
  width: 438px;
  margin-left: -60px;
}

.navbar {
  background-color: transparent;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.navbar-brand {
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
}

.nav-menu {
  list-style: none;
  display: flex;
}

.nav-menu li {
  margin-right: 1rem;
}

.nav-menu li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-menu li a:hover {
  color: #ccc;
}

.buttons-container{
  margin-top: 210px;
  position: fixed;
}

.toggle {
  --bg-toggle: hsl(0, 0%, 96%);
  --bg-circle: hsl(96, 85%, 34%);
  width: 60px;
  height: 30px;
  background-color: var(--bg-toggle);
  box-shadow: 0 .2rem 3rem 0 rgba(125, 125, 125, 0.25);
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  padding: 0 .2rem;
  transition: background-color 400ms;
}

.toggle__circle {
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: var(--bg-circle);
  border-radius: 500px;
  position: relative;
  transition: margin 400ms ease-in-out, background-color 1000ms;
}

.location-button {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
}

.delivery-info {
  display: flex;
  align-items: center;
}

.address-label {
  font-family: 'Uber Move';
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.separator {
  margin: 0 5px;
}

.delivery-time {
  font-family: 'Uber Move';
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(214, 213, 213, 0.5);
  z-index: 1000;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  height: 350px;
  width: 400px;
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
  margin-right: 0px;
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

.form svg {
  color: #111;
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  position: absolute;
  height: 15px;
  transform: scale(1.7);
}

.icon {
  position: absolute;
  left: var(--padding);
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.swap-off {
  transform: rotate(-80deg);
  opacity: 0;
  visibility: hidden;
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

.button {
  background-color: #000000;
  height: 59px;
  width: 400px;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 500px;
  cursor: pointer;
  font-family: 'Uber Move';
}

.order-details {
  margin-top: 20px;
}

.not-found-message {
  padding: 10px;
  color: #666;
  text-align: center;
  font-family: 'Uber Move';
}

.result-type {
  font-weight: bold;
  margin-right: 5px;
}
  </style>
  