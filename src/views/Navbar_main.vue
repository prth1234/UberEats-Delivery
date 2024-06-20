<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo-container">
        <a href="#" class="navbar-brand">
          <span style="background-image: linear-gradient(135deg, #8a4ba8, #ff66c4, #282c3d); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Uber</span>
          <span style="color: #06C167;"><b>Eats</b></span>
        </a>
      </div>
      <a @click="openPopup" class="location-button" href="#">
        <div class="location-icon">🔗</div>
        <div class="delivery-info">
          <div data-testid="delivery-address-label" class="address-label">HSR, Bengaluru is a very long text that will be truncated with an ellipsis</div>
          <span class="separator">·</span>
          <div data-test="delivery-time" class="delivery-time">Now</div>
        </div>
      </a>
      <ul class="nav-menu">
        <input type="checkbox" name="check-toggle" id="checkbox" hidden="">
        <label for="checkbox" class="toggle">
          <div class="toggle__circle"></div>
        </label>
        <div class="nav-links">
          <ul class="nav-menu">
            <li><a href="#" style="font-family: 'Uber Move';">Cabs</a></li>
            <li><a href="#" style="font-family: 'Uber Move';">Story</a></li>
            <li><a href="#" style="font-family: 'Uber Move';">Business</a></li>
            <li><a href="#" style="font-family: 'Uber Move';">About us</a></li>
            <li><a href="#" style="font-family: 'Uber Move'; color: #06C167;">Uber has a New Look✨</a></li>
          </ul>
        </div>
      </ul>
    </div>
  </nav>

  <div v-if="showPopup" class="popup" >
    <div class="popup-content">
      <div class="popup-header">
        <h2>Search for delivery areas</h2>
        <button @click="closePopup" aria-label="Close" class="close-button">x</button>
      </div>
      <div class="popup-body">
        <div class="address-input">
          <label for="delivery-address">Select an area</label>
          <div class="search">
            <div class="group">
              <select v-model="selectedArea" @change="onAreaChange" class="input" >
                <option value="" disabled>Select an area</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Delhi">Delhi</option>
                <option value="Chennai">Chennai</option>
                <option value="Noida">Noida</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Jaipur">Jaipur</option>
              </select>
            </div>
          </div>
        </div>
        <div class="buttons-container">
          <button @click="searchAreas" class="button">Search here</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showPopup = ref(false);
const searchQuery = ref('');
const selectedArea = ref('');

function openPopup() {
  showPopup.value = true;
}

function closePopup() {
  showPopup.value = false;
}

function searchAreas() {
  // Implement your search logic here
  console.log('Searching for:', searchQuery.value);
  closePopup();
}

function onAreaChange() {
  console.log('Selected Area:', selectedArea.value);
}
</script>

<style scoped>
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
  border-radius: 500px; /* Change to 0 to remove rounded edges */
  position: relative;
  transition: margin 400ms ease-in-out, background-color 1000ms;
}

.toggle__circle::after,
.toggle__circle::before {
  content: '';
  position: absolute;
  background-color: var(--bg-toggle);
  bottom: 118%;
  transform-origin: bottom left;
}

.toggle__circle::before {
  width: 6px;
  height: 10px;
  left: 32%;
  border-radius: 0% 100% 0% 100% / 0% 27% 73% 100%;
  transform: translateX(-70%) rotate(-2deg);
}

.toggle__circle::after {
  width: 12px;
  height: 15px;
  left: 48%;
  border-radius: 100% 0% 100% 0% / 100% 0% 100% 0%;
  transform: rotate(-20deg);
}

#checkbox:checked + .toggle > .toggle__circle {
  margin-left: calc(60px - 24px);
}

#checkbox:checked + .toggle {
  --bg-toggle: hsl(96, 85%, 34%);
  --bg-circle: hsl(0, 0%, 96%);
}

#checkbox {
  display: none;
}

.location-button {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
}

.location-icon {
  margin-right: 10px;
  font-size: 20px;
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
  /* Remove border-radius for rectangle shape */
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
  border-radius: 15px; /* Remove border-radius for rectangle shape */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
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

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 0; /* Change to 0 to remove rounded edges */
  margin-bottom: 15px;
  font-family: 'Uber Move';
  box-sizing: border-box;
  background-color: #f4f4f4;
  -webkit-appearance: menulist;
  -moz-appearance: menulist;
  appearance: menulist;
  font-size: 1.15rem; /* Increase font size */
  color: black; /* Text color */
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
}

.button {
  background-color: #06C167;
  height: 59px;
  width: 149px;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 500; /* Change to 0 to remove rounded edges */
  cursor: pointer;
  font-family: 'Uber Move';
}
</style>