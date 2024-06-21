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
                <option value="" disabled>Select a category</option>
                <option value="All">All</option>
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
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Define refs for data
  const showPopup = ref(false);
  const selectedCategory = ref('');
  const searchQuery = ref('');
  
  // Function to open the popup
  const openPopup = () => {
    showPopup.value = true;
  };
  
  // Function to close the popup
  const closePopup = () => {
    showPopup.value = false;
  };
  
  // Function to handle the search logic
  const search = () => {
    console.log('Searching for:', searchQuery.value, 'in category:', selectedCategory.value);
    closePopup(); // Close the popup after initiating search
  };
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
  </style>
  