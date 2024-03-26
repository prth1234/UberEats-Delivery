
<template>
  <div class="container">
    <h1 class="delivery-heading">Order delivery near you 👀</h1>
    <div class="address-input">
      <label for="delivery-address"></label>
      <div class="search">
        <div class="group">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
            <!-- Your SVG path here -->
          </svg>
          <input placeholder="Search for restaurant, cuisine, or a dish" type="search" class="input" v-model="address">
        </div>
      </div>
    </div>
    <div class="buttons-container">

      <div class="dropdown">
        <button @click="toggleDropdown" class="dropdown-button">
          Deliver {{ deliveryOption === 'now' ? 'now 👇🏻' : 'later ⏰' }} 
        </button>
        <div v-if="showDropdown" class="dropdown-content" >
          <a @click="setDeliveryOption('now')">Deliver now</a>
          <a @click="setDeliveryOption('later')">Schedule for later</a>
        </div>
      </div>
      <button class="button">Search here</button>

    </div>
    <p>Or 
      
      <!-- <a href="#" style="font-family: 'Uber Move', sans-serif;">Sign In</a> -->
      <router-link to="/sign-in">Sign In</router-link>

    
    
    </p>
  </div>
  <div v-if="showPopup" class="popup">
    <!-- Popup content -->
    <div class="popup-content">
      <div class="popup-header">
        <h2 style="color: black; font-family: 'Uber Move';">Pick a time</h2>
        <button @click="closePopup" aria-label="Close" class="close-button">
          <!-- <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M19.5831 6.24931-1.8333-1.83329-5.75 5.83328-5.75-5.83328-1.8333 1.83329 5.8333 5.74999-5.8333 5.75 1.8333 1.8333 5.75-5.8333 5.75 5.8333 1.8333-1.8333-5.8333-5.75z" fill="#000000"></path>
          </svg> -->
          x

        </button>
      </div>
      <div class="popup-body">
        <!-- Add your date and time selection inputs here -->
        
        <select v-model="selectedDate" aria-label="Select delivery date" style="width: 400px; height: 50px; color: black; background-color: #f4f4f4; border-color:#f4f4f4; font-size: 18px; color: black;">
    <!-- Options for delivery date -->
    <option value="" >Today, Sat, Mar 23</option>

    <!-- <option value="2024-03-23" disabled selected>Today, Sat, Mar 23</option> -->
    <option value="2024-03-24">Tomorrow, Sun, Mar 24</option>
    <option value="2024-03-25">Tuesday, Mon, Mar 25</option>
    <option value="2024-03-26">Wednesday, Tue, Mar 26</option>
    <option value="2024-03-27">Thursday, Wed, Mar 27</option>
    <option value="2024-03-28">Friday, Thu, Mar 28</option>
    <!-- Add more date options if needed -->
  </select>

  <br/>
  <br/>
  
  <select v-model="selectedTime" aria-label="Select delivery time" style="width: 400px; height: 50px; color: black; background-color: #f4f4f4; border-color:#f4f4f4; font-size: 18px;">
    <!-- Options for delivery time -->
    <option value="">10:45 AM - 11:15 AM</option>

    <!-- <option value="{&quot;startTime&quot;:1365,&quot;startTimeMs&quot;:1711214100340,&quot;endTime&quot;:1395}">10:45 AM - 11:15 AM</option> -->
    <option value="{&quot;startTime&quot;:1380,&quot;startTimeMs&quot;:1711215000340,&quot;endTime&quot;:1410}">11:15 AM - 1:30 PM</option>
    <option value="{&quot;startTime&quot;:1410,&quot;startTimeMs&quot;:1711215000340,&quot;endTime&quot;:1440}">1:30 PM - 4:30 PM</option>
    <option value="{&quot;startTime&quot;:1440,&quot;startTimeMs&quot;:1711215000340,&quot;endTime&quot;:1470}">4:00 PM - 7:30 PM</option>
    <option value="{&quot;startTime&quot;:1470,&quot;startTimeMs&quot;:1711215000340,&quot;endTime&quot;:1500}">7:00 PM - 11:30 PM</option>
    <option value="{&quot;startTime&quot;:1500,&quot;startTimeMs&quot;:1711215000340,&quot;endTime&quot;:1530}">Night Delivery</option>
    <!-- Add more time options if needed -->
  </select>
        <br/>
        <div style="padding-top:30px">
        <button @click="saveSchedule; closePopup()" aria-label="Save scheduled delivery preference" class="save-button" style="background-color: black; color: white;">Schedule</button>
        <button @click="setDeliveryOption('now'); closePopup()" aria-label="Save scheduled delivery preference" class="save-button" style="background-color: #f4f4f4; color: black;">Deliver Now</button>
</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import './style.css'

const address = ref(''); // Address input value
const showDropdown = ref(false); // Flag to show/hide dropdown
const deliveryOption = ref('now'); // Default delivery option
const showPopup = ref(false); // Flag to show/hide the popup


function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

// function setDeliveryOption(option) {
//   deliveryOption.value = option;
//   toggleDropdown(); // Hide the dropdown after selecting an option
// }
function setDeliveryOption(option) {
      if (option === 'later') {
        deliveryOption.value = option;
        showPopup.value = true;
      } else {
        deliveryOption.value = option;
        toggleDropdown();
      }
    }
    function closePopup() {
      showPopup.value = false;
    }
</script>
<script>
export default {
  data() {
    return {
      selectedDate: '',
      selectedTime: '',
    };
  },
};
</script>
<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Uber Move';
}

.buttons-container {
  display: flex;
  margin-top: 30px;
}

.dropdown {
  position: relative;
}

.dropdown-button {
  padding: 20px 30px;
  border-radius: 4px;
  background-color: white;
  color: #0d0c22;
  border: 2px solid #0d0c22;
  cursor: pointer;
  margin-right: 10px;
  font-family: 'Uber Move', sans-serif;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}


.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.delivery-heading {
  font-size: 40px;
}

.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 1000px;
}

button {
  padding: 20px 30px;
  border-radius: 4px;
  background-color:white;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  color: #0d0c22;
  font-family:   'Uber Move', sans-serif; /* Use 'sans-serif' as fallback */

}


.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(255, 255, 255, 0.5);  */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0);
  border-color: rgba(255, 255, 255, 0);

  
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.popup-body {
  margin-bottom: 20px;
  width: 500px;
  height: 200px;
  border-radius: 40px;
}


.input {
  width: 1000px;
  font-family: 'Uber Move', sans-serif;
  height: 55px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: .3s ease;
}


.input::placeholder {
  color: #9e9ea7;
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
}
/* .select{
  co
} */
.select-container {
  position: relative;
  width: 100%;
  background-color: #000000;
}



/* Style for the dropdown select */
.select-container select {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  appearance: none; /* Remove default arrow */
  background-color: #f3f3f4;
  color: #f2f2fd;
  cursor: pointer;
  color: aqua;
}

/* Style for the custom dropdown arrow */
.select-container::after {
  content: '';
  position: absolute;
  top: calc(50% - 3px);
  right: 10px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid #9e9ea7; /* Arrow color */
  pointer-events: none;
}



</style>