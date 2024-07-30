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
        <img src="https://i.ibb.co/VDKzyML/Location-Icon-White.png" alt="Emoji" style="width: 20px; height: 20px; margin-left: -140px; margin-right:10px">
        <div class="delivery-info">
          <div data-testid="delivery-address-label" class="address-label">{{ displayedArea }}</div>
          <span class="separator">·</span>
          <div data-test="delivery-time" class="delivery-time">Now</div>
        </div>
      </a>

      <searchbar/>
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
            <li><a href="#" style="font-family: 'Uber Move'; color: #06C167;">Uber has a New Look ✨</a></li>
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
  <div v-if="showPopup" class="popup">
    <div class="popup-content">
      <div class="popup-header">
        <h2>Addresses</h2>
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
              v-model="searchQuery"
              @input="searchCities"
              @keydown.down="moveDown"
              @keydown.up="moveUp"
              @keydown.enter.prevent="selectCity"
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
    v-if="filteredCities.length > 0"
    v-for="(city, index) in filteredCities" 
    :key="index" 
    @click="selectCity(city)"
    :class="{ 'selected': index === selectedIndex }"
    class="suggestion-item"
  >
    {{ city }}
  </div>
  <div v-if="showNotFound" class="not-found-message">
    Hmm... can't find this address. Try again?
  </div>
</div>
        </form>
        <h2 style="font-family: Uber Move; color: black; text-align: left; font-size: 20px;">Saved address</h2>
        <div class="order-details">
          <div v-if="savedAddress" class="detail-item" style="flex-direction: column; align-items: center;">
            <span class="icon" style="margin-right: 20px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#5E5E5E"><title>Location marker</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1c2.4 0 4.9.9 6.7 2.8 3.7 3.7 3.7 9.8 0 13.4L12 24l-6.7-6.7c-3.7-3.7-3.7-9.8 0-13.5C7.1 1.9 9.6 1 12 1Zm0 18.8 4.6-4.6c2.5-2.6 2.5-6.7 0-9.3C15.4 4.7 13.7 4 12 4c-1.7 0-3.4.7-4.6 1.9-2.5 2.6-2.5 6.7 0 9.3l4.6 4.6Zm2-9.3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor"></path></svg>
            </span>
            <div style="text-align: left; color: black; margin-left: 40px; font-family: Uber Move; font-weight: 200;">
              <strong>{{ savedAddress }}</strong>
              <hr class="divider">
            </div>
            <span class="edit-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Edit"><title>Pencil</title><g fill="currentColor"><path d="m14.4 6.6 3 3L5 22H2v-3L14.4 6.6ZM19.071 1.99l-2.475 2.474 2.97 2.97 2.475-2.475-2.97-2.97Z"></path></g></svg></span>
          </div>
        </div>
        <div class="buttons-container">
          <button @click="saveAddress" class="button" style="margin-top: 15px; font-family: 'Uber Move';">Done</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import searchbar from './searchbar.vue';
const savedAddresses = ref([]);


const showPopup = ref(false);
const searchQuery = ref('');
const selectedArea = ref('');
const displayedArea = ref('HSR, Bengaluru');
const savedAddress = ref('');
const showSuggestions = ref(false);

const cities = ref([
  'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ',
  'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA', 'Dallas, TX', 'San Jose, CA',
  'Austin, TX', 'Jacksonville, FL', 'San Francisco, CA', 'Columbus, OH', 'Indianapolis, IN',
  'Charlotte, NC', 'Seattle, WA', 'Denver, CO', 'El Paso, TX', 'Detroit, MI',
  'Boston, MA', 'Memphis, TN', 'Nashville, TN', 'Baltimore, MD', 'Oklahoma City, OK',
  'Las Vegas, NV', 'Louisville, KY', 'Milwaukee, WI', 'Albuquerque, NM', 'Tucson, AZ',
  'Fresno, CA', 'Sacramento, CA', 'Kansas City, MO', 'Mesa, AZ', 'Atlanta, GA',
  'Colorado Springs, CO', 'Virginia Beach, VA', 'Raleigh, NC', 'Omaha, NE', 'Miami, FL',
  'Cleveland, OH', 'Tulsa, OK', 'Oakland, CA', 'Minneapolis, MN', 'Wichita, KS',
  'Arlington, TX', 'Bakersfield, CA', 'Tampa, FL', 'Aurora, CO', 'Honolulu, HI',
  'Anaheim, CA', 'Santa Ana, CA', 'Corpus Christi, TX', 'Riverside, CA', 'St. Louis, MO',
  'Lexington, KY', 'Stockton, CA', 'Cincinnati, OH', 'St. Paul, MN', 'Toledo, OH',
  'Pittsburgh, PA', 'Greensboro, NC', 'Jersey City, NJ', 'Chandler, AZ', 'Fort Wayne, IN',
  'Buffalo, NY', 'Durham, NC', 'Madison, WI', 'Lubbock, TX', 'Chesapeake, VA',
  'Scottsdale, AZ', 'Irving, TX', 'Gilbert, AZ', 'North Las Vegas, NV', 'Winston-Salem, NC',
  'Hialeah, FL', 'Garland, TX', 'Fremont, CA', 'Richmond, VA', 'Boise, ID',
  'San Bernardino, CA', 'Spokane, WA', 'Baton Rouge, LA', 'Modesto, CA', 'Des Moines, IA',
  'Tacoma, WA', 'Augusta, GA', 'Akron, OH', 'Mobile, AL', 'Knoxville, TN',
  'Shreveport, LA', 'Waco, TX', 'Columbia, SC', 'Fargo, ND', 'Salem, OR',
  'Grand Rapids, MI', 'Oshkosh, WI', 'Cedar Rapids, IA', 'Chattanooga, TN', 'Little Rock, AR',
  'Augusta, GA', 'Akron, OH', 'Mobile, AL', 'Knoxville, TN', 'Shreveport, LA',
  'Waco, TX', 'Columbia, SC', 'Fargo, ND', 'Salem, OR', 'Grand Rapids, MI',
  'Oshkosh, WI', 'Cedar Rapids, IA', 'Cincinnati, OH', 'Cleveland, OH', 'Dayton, OH',
  'Akron, OH', 'Cleveland Heights, OH', 'Shaker Heights, OH', 'Lorain, OH', 'Youngstown, OH',
  'Mansfield, OH', 'Findlay, OH', 'Zanesville, OH', 'Marion, OH', 'Newark, OH',
  'Portsmouth, OH', 'Warren, OH', 'Ashtabula, OH', 'Tiffin, OH', 'Sandusky, OH',
  'Lancaster, OH', 'Mount Vernon, OH', 'Coshocton, OH', 'Bellefontaine, OH', 'Urbana, OH',
  'Hubbard, OH', 'Alliance, OH', 'Barberton, OH', 'Cuyahoga Falls, OH', 'Kent, OH',
  'Tallmadge, OH', 'Stow, OH', 'Ravenna, OH', 'Garrettsville, OH', 'Berea, OH',
  'Brunswick, OH', 'Medina, OH', 'Richfield, OH', 'Northfield, OH', 'Solon, OH',
  'Hudson, OH', 'Twinsburg, OH', 'Aurora, OH', 'Portage Lakes, OH', 'New Philadelphia, OH',
  'Cambridge, OH', 'Wooster, OH', 'Willard, OH', 'Ashland, OH', 'Madison, OH',
  'Mansfield, OH', 'Galion, OH', 'Wooster, OH', 'Mount Vernon, OH', 'Lima, OH',
  'London, OH', 'Lancaster, OH', 'Piqua, OH', 'Sidney, OH', 'Greenville, OH',
  'Troy, OH', 'Eaton, OH', 'Bellevue, OH', 'Ashland, OH', 'Perrysburg, OH',
  'Sylvania, OH', 'Oregon, OH', 'Maumee, OH', 'Westlake, OH', 'Avon, OH',
  'Avon Lake, OH', 'North Olmsted, OH', 'Brook Park, OH', 'Strongsville, OH', 'Berea, OH',
  'North Ridgeville, OH', 'Grafton, OH', 'Sheffield Lake, OH', 'Elyria, OH', 'Lorain, OH',
  'New London, OH', 'Attica, OH', 'Fostoria, OH', 'Upper Sandusky, OH', 'Wyandot, OH',
  'Montpelier, OH', 'Edon, OH', 'Hicksville, OH', 'Bryan, OH', 'Harrison, OH',
  'Ridgeville Corners, OH', 'Swanton, OH', 'Wauseon, OH', 'Pioneer, OH', 'Bryan, OH',
  'Paulding, OH', 'Ada, OH', 'Findlay, OH', 'Upper Sandusky, OH', 'Tiffin, OH',
  'Sandusky, OH', 'Bellevue, OH', 'Norwalk, OH', 'Marion, OH', 'Mount Vernon, OH',
  'Ashland, OH', 'Galion, OH', 'Shelby, OH', 'Lima, OH', 'Sidney, OH',
  'Troy, OH', 'Eaton, OH', 'Greenville, OH', 'Piqua, OH', 'Wapakoneta, OH',
  'St. Marys, OH', 'Celina, OH', 'Salina, OH', 'Coldwater, OH', 'Minster, OH',
  'Anna, OH', 'Jackson Center, OH', 'Versailles, OH', 'Russia, OH', 'Fort Loramie, OH',
  'New Bremen, OH', 'St. Henry, OH', 'Harrison, OH', 'Lawrenceburg, IN', 'Greendale, IN',
  'Aurora, IN', 'Versailles, IN', 'Madison, IN', 'Seymour, IN', 'Columbus, IN',
  'North Vernon, IN', 'Westfield, IN', 'Noblesville, IN', 'Carmel, IN', 'Fishers, IN',
  'Indianapolis, IN', 'Greenwood, IN', 'Bargersville, IN', 'Whiteland, IN', 'Shelbyville, IN',
  'Franklin, IN', 'Martinsville, IN', 'Mooresville, IN', 'Camby, IN', 'Plainfield, IN',
  'Speedway, IN', 'Danville, IN', 'Lebanon, IN', 'Zionsville, IN', 'Pittsboro, IN',
  'Crawfordsville, IN', 'Greencastle, IN', 'Brazil, IN', 'Russiaville, IN', 'Logansport, IN',
  'Peru, IN', 'Kokomo, IN', 'Monticello, IN', 'Winamac, IN', 'Delphi, IN',
  'Flora, IN', 'New Castle, IN', 'Anderson, IN', 'Pendleton, IN', 'Elwood, IN',
  'Tipton, IN', 'Noblesville, IN', 'Greenfield, IN', 'Batesville, IN', 'Madison, IN',
  'Seymour, IN', 'Columbus, IN', 'Shelbyville, IN', 'Franklin, IN', 'Martinsville, IN',
  'Mooresville, IN', 'Camby, IN', 'Plainfield, IN', 'Speedway, IN', 'Danville, IN',
  'Lebanon, IN', 'Zionsville, IN', 'Pittsboro, IN', 'Crawfordsville, IN', 'Greencastle, IN',
  'Brazil, IN', 'Russiaville, IN', 'Logansport, IN', 'Peru, IN', 'Monticello, IN',
  'Winamac, IN', 'Delphi, IN', 'Flora, IN', 'New Castle, IN']);



const selectedIndex = ref(-1);

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
  showSuggestions.value = searchQuery.value.length >= 1;
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
  width: 60px; /* 120px * 0.5 */
  height: 30px; /* 60px * 0.5 */
  background-color: var(--bg-toggle);
  box-shadow: 0 .15rem 2.5rem 0 rgba(125, 125, 125, 0.25); /* Adjusted for scale */
  border-radius: 2rem; /* 4rem * 0.5 */
  display: flex;
  align-items: center;
  padding: 0 .15rem; /* 0.3rem * 0.5 */
  transition: background-color 400ms;
}

.toggle__circle {
  width: 25px; /* 50px * 0.5 */
  height: 25px; /* 50px * 0.5 */
  cursor: pointer;
  background-color: var(--bg-circle);
  border-radius: 50%;
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
  width: 7.5px; /* 15px * 0.5 */
  height: 12.5px; /* 25px * 0.5 */
  left: 32%;
  border-radius: 0% 100% 0% 100% / 0% 27% 73% 100%;
  transform: translateX(-70%) rotate(-2deg);
}

.toggle__circle::after {
  width: 12.5px; /* 25px * 0.5 */
  height: 15px; /* 30px * 0.5 */
  left: 48%;
  border-radius: 100% 0% 100% 0% / 100% 0% 100% 0%;
  transform: rotate(-20deg);
}

#checkbox:checked + .toggle > .toggle__circle {
  margin-left: calc(60px - (.15rem * 2) - 25px); /* Adjusted for scale */
}

#checkbox:checked + .toggle {
  --bg-toggle: hsl(96, 85%, 34%);
  --bg-circle: hsl(0, 0%, 96%);
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



</style>