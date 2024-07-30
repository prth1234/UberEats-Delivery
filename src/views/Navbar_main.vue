<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <nav class="navbar">
    <div class="container">
      <div class="logo-container" style="margin-right: 100px;">
        <a href="#" class="navbar-brand">
          <span style="background-image: linear-gradient(135deg, #8a4ba8, #ff66c4, #282c3d); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Uber</span>
          <span style="color: #06C167;"><b> Eats</b></span>
        </a>
      </div>
      <a @click="openPopup" class="location-button" href="#" style="display: fixed; margin-right: 40px;">
<!--        <div class="location-icon">🔗</div>-->
         <img src="https://i.ibb.co/VDKzyML/Location-Icon-White.png" alt="Emoji" style="width: 20px; height: 20px; margin-left: -140px; margin-right:10px">

        <div class="delivery-info">
          <div data-testid="delivery-address-label" class="address-label">{{ displayedArea }}</div>
          <span class="separator">·</span>
          <div data-test="delivery-time" class="delivery-time">Now</div>
        </div>
      </a>

<searchbar/>
      <ul class="nav-menu">
        <!-- <img src="https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png" alt="Emoji" style="width: 20px; height: 20px; margin-left: -140px; margin-right:120px"> -->

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
            <li><a href="#" style="font-family: 'Uber Move'; color: #06C167;">Uber has a New Look ✨</a></li>
<!--            <div class="svg1"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><title>Cart</title><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 18H21l2-12.5H6.5l-.5-3H.9v3h2.5L5.5 18Zm14-9.5-1 6.5H8L7 8.5h12.5ZM7.5 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor"></path></svg></div>-->
<!--            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">-->
<!--              <title>Cart</title>-->
<!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 18H21l2-12.5H6.5l-.5-3H.9v3h2.5L5.5 18Zm14-9.5-1 6.5H8L7 8.5h12.5ZM7.5 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor"></path>-->

<!--              &lt;!&ndash; Larger Bubble &ndash;&gt;-->
<!--              <circle cx="20" cy="4" r="5" fill="#4CAF50"/>-->

<!--              &lt;!&ndash; Adjusted Number &ndash;&gt;-->
<!--              <text x="20" y="4" font-family="Arial, sans-serif" font-size="7" fill="white" text-anchor="middle" dy=".3em">0</text>-->
<!--            </svg>-->
            <a  class="cart position-relative d-inline-flex" aria-label="View your shopping cart">
              <i class="fas fa fa-shopping-cart fa-lg"></i>
              <span class="cart-basket d-flex align-items-center justify-content-center">
            3
          </span>
            </a>
          </ul>
        </div>
      </ul>
      


    </div>
  </nav>
  <div v-if="showPopup" class="popup" >
    <div class="popup-content">
      <div class="popup-header">
        <h2>Addresses</h2>
  <!-- <img src="https://cdn-icons-png.flaticon.com/128/447/447031.png" alt="Emoji" style="width: 20px; height: 20px; margin-left: -140px;"> -->
        <button @click="closePopup" aria-label="Close" class="close-button">x</button>
      </div>
      <div class="popup-body">

        <form class="form">
          <label for="search">
            <input 
              required
              autocomplete="off" 
              placeholder="Search for an address" 
              id="search" 
              type="text" 
              style="color: black; font-family: Uber Move Light; font-weight: 100; font-size: 18px;"
              @input="searchCities"
              @keydown.down="moveDown"
              @keydown.up="moveUp"
              @keydown.enter="selectCity"
            >
            <div class="icon">
              <svg stroke-width="2.5" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-on">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
              <svg stroke-width="2.5" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-off">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
            </div>
            <button type="reset" class="close-btn">
              <svg viewBox="0 0 20 20" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
              </svg>
            </button>
          </label>
          <div id="suggestions" class="suggestions">
            <div v-for="(city, index) in cities" :key="index" @click="selectCity(city)">
              {{ city }}
            </div>
          </div>
        </form>
        <h2 style="font-family: Uber Move; color: black; text-align: left; font-size: 20px;">Saved address</h2>
        <div class="order-details">
        <div class="detail-item" style="flex-direction: column; align-items: center;">
          <span class="icon" style="margin-right: 20px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#5E5E5E"><title>Location marker</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1c2.4 0 4.9.9 6.7 2.8 3.7 3.7 3.7 9.8 0 13.4L12 24l-6.7-6.7c-3.7-3.7-3.7-9.8 0-13.5C7.1 1.9 9.6 1 12 1Zm0 18.8 4.6-4.6c2.5-2.6 2.5-6.7 0-9.3C15.4 4.7 13.7 4 12 4c-1.7 0-3.4.7-4.6 1.9-2.5 2.6-2.5 6.7 0 9.3l4.6 4.6Zm2-9.3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor"></path></svg>

          </span>
          <div style="text-align: left; color: black; margin-left: 40px;">
            <strong>Santa Barbara</strong>

            <hr class="divider">

          </div>
          <span class="edit-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Edit"><title>Pencil</title><g fill="currentColor"><path d="m14.4 6.6 3 3L5 22H2v-3L14.4 6.6ZM19.071 1.99l-2.475 2.474 2.97 2.97 2.475-2.475-2.97-2.97Z"></path></g></svg></span>
     
        </div>
        
      </div>

        <!-- <div class="address-input">
          <label for="delivery-address">Select an area</label>
          <div class="search">
            <div class="group">
              <select v-model="selectedArea" @change="onAreaChange" class="input">
  <option value="" disabled >Select an area</option>
  <option value="Hsr, Bangalore">Hsr, Bangalore</option>
  <option value="South Delhi Extension, Delhi">South Delhi Extension, Delhi</option>
  <option value="Malya Nagar Chennai">Malya Nagar Chennai</option>
  <option value="Greater Noida, Noida">Greater Noida, Noida</option>
  <option value="The bagh, Kolkata">The bagh, Kolkata</option>
  <option value="Atilia, Mumbai">Antilia, Mumbai</option>
  <option value="Cyber Hub, Hyderabad">Cyber Hub, Hyderabad</option>
  <option value="IT Hub, Pune">IT Hub, Pune</option>
  <option value="Trade Centre, Ahmedabad">Trade Centre, Ahmedabad</option>
  <option value="The Bagh, Jaipur">The Bagh, Jaipur</option>
</select>
            </div>
          </div>
        </div> -->
        <div class="buttons-container">
          <button @click="searchAreas" class="button" style="margin-top: 15px;   font-family: 'Uber Move';">Done</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import searchbar from './searchbar.vue';
// Define refs for data
const showPopup = ref(false);
const searchQuery = ref('');
const selectedArea = ref('');
const displayedArea = ref('HSR, Bengaluru','Santa Clara'); // Initialize displayedArea with default value


// Function to open the popup
function openPopup() {
  showPopup.value = true;
}

// Function to close the popup
function closePopup() {
  showPopup.value = false;
}

// Function to handle the search logic
function searchAreas() {
  // Update displayedArea with the selected option
  displayedArea.value = selectedArea.value;
  console.log('Searching for:', displayedArea.value); // Log the selected area for demonstration
  closePopup(); // Close the popup after selecting an area
}

// Function to handle the change in the selected area
function onAreaChange() {
  console.log('Selected Area:', selectedArea.value); // Log the selected area for demonstration
}


const cities = ref([]);
const currentIndex = ref(-1);

const searchCities = async () => {
  const query = searchQuery.value.trim();
  if (query.length > 2) {
    const response = await fetch(`https://api.teleport.org/api/cities/?search=${query}`);
    const data = await response.json();
    cities.value = data.results.map(city => city.name);
  } else {
    cities.value = [];
  }
};

const moveDown = () => {
  if (currentIndex.value < cities.value.length - 1) {
    currentIndex.value++;
  }
};

const moveUp = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const selectCity = (city) => {
  displayedArea.value = city;
  closePopup();
};

// Function to open the popup





</script>

<style scoped>


.divider{
  color: #f3f3f3;
  background-color: #f3f3f3;
  border: none;
  height: 2px;
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
.svg1{
  margin-left:10px;
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
  height: 400px;
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
  border: None;

  border-radius: 0; /* Change to 0 to remove rounded edges */
  margin-bottom: 0px;
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
  background-color: #000000;
  height: 59px;
  width: 400px;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 500; /* Change to 0 to remove rounded edges */
  cursor: pointer;
  font-family: 'Uber Move';
}

.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}


.label-warning[href],
.badge-warning[href] {
  background-color: #ffffff;
}
#lblCartCount {
  font-size: 12px;
  background:  #06C167;
  color: #fff;
  padding: 0 5px;
  vertical-align: top;
  margin-left: -10px;
}

li {
  list-style: none;
}

.fa,
.fas {
  font-family: 'FontAwesome';
}

ul li a {
  font-size: 1.1rem;
  color: #343a40;
}

ul li a.cart:hover {
  text-decoration: none;
  color: #b40808;
}

ul li a.cart .cart-basket {
  font-size: .6rem;
  position: absolute;
  top: -6px;
  right: -5px;
  width: 15px;
  height: 15px;
  color: #fff;
  background-color: #ffffff;
  border-radius: 50%;
}

/* From uiverse.io by @satyamchaudharydev */
/* this button is inspired by -- whatsapp input */
/* == type to see fully interactive and click the close buttom to remove the text  == */

.form {
  --input-bg: #FFf;
 /*  background of input */
  --padding: 1.5em;
  --rotate: 80deg;
 /*  rotation degree of input*/
  --gap: 2em;
  /*  gap of items in input */
  --icon-change-color: #15A986;
 /*  when rotating changed icon color */
  --height: 40px;
 /*  height */
  width: 200px;
  padding-inline-end: 1em;
 /*  change this for padding in the end of input */
  background: var(--input-bg);
  position: relative;
  border-radius: 100px;
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
/* style for both icons -- search,close */
.form svg {
  /* display: block; */
  color: #111;
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  position: absolute;
  height: 15px;
}
/* search icon */
.icon {
  position: absolute;
  left: var(--padding);
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  display: flex;
  justify-content: center;
  align-items: center;
}
/* arrow-icon*/
.swap-off {
  transform: rotate(-80deg);
  opacity: 0;
  visibility: hidden;
}
/* close button */
.close-btn {
  /* removing default bg of button */
  background: none;
  border: none;
  right: calc(var(--padding) - var(--gap));
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111;
  padding: 0.1em;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: 0.3s;
  opacity: 0;
  transform: scale(0);
  visibility: hidden;
}


#search-box {
  background-color: #f2f2f2; /* light gray background */
  border: 1px solid #ccc; /* gray border */
  border-radius: 10px; /* rounded edges */
  padding: 10px; /* padding to make the text not stick to the edges */
  width: 300px; /* fixed width */
}

#result {
  border: 1px dotted #ccc;
  padding: 3px;
}

#result ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#result ul li {
  padding: 5px 0;
}

#result ul li:hover {
  background: #eee;
}

/* From uiverse.io by @satyamchaudharydev */
/* this button is inspired by -- whatsapp input */
/* == type to see fully interactive and click the close buttom to remove the text  == */

.form {
  --input-bg: #f3f3f3;
  color: black;
 /*  background of input */
  --padding: 1.5em;
  --rotate: 80deg;
 /*  rotation degree of input*/
  --gap: 2em;
  /*  gap of items in input */
  --icon-change-color: #000000;
 /*  when rotating changed icon color */
  --height: 55px;
 /*  height */
  width: 380px;
  padding-inline-end: 1em;
  margin-right: 0px;
 /*  change this for padding in the end of input */
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
/* style for both icons -- search,close */
.form svg {
  /* display: block; */
  color: #111;
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  position: absolute;
  height: 15px;
  transform: scale(1.7);
}
/* search icon */
.icon {
  position: absolute;
  left: var(--padding);
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  display: flex;
  justify-content: center;
  align-items: center;
}
/* arrow-icon*/
.swap-off {
  transform: rotate(-80deg);
  opacity: 0;
  visibility: hidden;
}
/* close button */
.close-btn {
  /* removing default bg of button */
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

.form input:focus ~ .icon {
  transform: rotate(var(--rotate)) scale(1.3);
}

.form input:focus ~ .icon .swap-off {
  opacity: 1;
  transform: rotate(-80deg);
  visibility: visible;
  color: var(--icon-change-color);
}

.form input:focus ~ .icon .swap-on {
  opacity: 0;
  visibility: visible;
}

.form input:valid ~ .icon {
  transform: scale(1.3) rotate(var(--rotate))
}

.form input:valid ~ .icon .swap-off {
  opacity: 1;
  visibility: visible;
  color: var(--icon-change-color);
}

.form input:valid ~ .icon .swap-on {
  opacity: 0;
  visibility: visible;
}

.form input:valid ~ .close-btn {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  transition: 0s;
}

@font-face {
    font-family: "Uber Move Light";
    src: url("https://db.onlinewebfonts.com/t/79dd8fd82129493e2894679950d5b897.eot");
    src: url("https://db.onlinewebfonts.com/t/79dd8fd82129493e2894679950d5b897.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/79dd8fd82129493e2894679950d5b897.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/79dd8fd82129493e2894679950d5b897.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/79dd8fd82129493e2894679950d5b897.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/79dd8fd82129493e2894679950d5b897.svg#Uber Move Light")format("svg");
}

.order-details {
  margin-top: 20px;
}


</style>
