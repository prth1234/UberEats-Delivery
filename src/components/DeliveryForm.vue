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
          <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="When" role="img" focusable="false" style="vertical-align: middle; margin-right: 5px;">
            <path d="M12 2.83398C6.91671 2.83398 2.83337 6.91732 2.83337 12.0007C2.83337 17.084 6.91671 21.1673 12 21.1673C17.0834 21.1673 21.1667 17.084 21.1667 12.0007C21.1667 6.91732 17.0834 2.83398 12 2.83398ZM17 13.6673H10.3334V5.33398H12.8334V11.1673H17V13.6673Z" fill="#000000"></path>
          </svg>
          {{ deliveryText }}
        </button>
        <div v-if="showDropdown" class="dropdown-content">
          <a @click="setDeliveryOption('now')">
            <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="When" role="img" focusable="false" style="vertical-align: middle; margin-right: 5px;">
              <path d="M12 2.83398C6.91671 2.83398 2.83337 6.91732 2.83337 12.0007C2.83337 17.084 6.91671 21.1673 12 21.1673C17.0834 21.1673 21.1667 17.084 21.1667 12.0007C21.1667 6.91732 17.0834 2.83398 12 2.83398ZM17 13.6673H10.3334V5.33398H12.8334V11.1673H17V13.6673Z" fill="#000000"></path>
            </svg>
            Deliver now
          </a>
          <a @click="setDeliveryOption('later')">
            <svg width="20px" height="20px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="vertical-align: middle; margin-right: 5px;">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1666 8.66732V5.33398H18.6666V2.83398H16.1666V5.33398H7.83325V2.83398H5.33325V5.33398H2.83325V8.66732H21.1666ZM21.1666 21.1673H2.83325V10.334H21.1666V21.1673ZM8.66658 13.6673H6.16658V16.1673H8.66658V13.6673Z" fill="currentColor"></path>
            </svg>
            Schedule for later
          </a>
        </div>
      </div>
      <button class="button1">Search here</button>
    </div>
    <p>Or <router-link to="/sign-in"><u>Sign In</u></router-link></p>
  </div>
  <div v-if="showPopup" class="popup">
    <div class="popup-content">
      <div class="popup-header">
        <h2 style="color: black; font-family: 'Uber Move';">Pick a time</h2>
        <button @click="closePopup" aria-label="Close" class="close-button">x</button>
      </div>
      <div class="popup-body">
        <select v-model="selectedDate" @change="updateDeliveryText" aria-label="Select delivery date" style="width: 400px; height: 50px; color: black; background-color: #f4f4f4; border-color:#f4f4f4; font-size: 18px; color: black;">
          <option value="">Today, Sat, Mar 23</option>
          <option value="Tomorrow, Sun, Mar 24">Tomorrow, Sun, Mar 24</option>
          <option value="Monday, Mar 25">Monday, Mar 25</option>
          <option value="Tuesday, Mar 26">Tuesday, Mar 26</option>
          <option value="Wednesday, Mar 27">Wednesday, Mar 27</option>
          <option value="Thursday, Mar 28">Thursday, Mar 28</option>
        </select>
        <br/>
        <br/>
        <select v-model="selectedTime" @change="updateDeliveryText" aria-label="Select delivery time" style="width: 400px; height: 50px; color: black; background-color: #f4f4f4; border-color:#f4f4f4; font-size: 18px;">
          <option value="">10:45 AM - 11:15 AM</option>
          <option value="11:15 AM - 1:30 PM">11:15 AM - 1:30 PM</option>
          <option value="1:30 PM - 4:30 PM">1:30 PM - 4:30 PM</option>
          <option value="4:00 PM - 7:30 PM">4:00 PM - 7:30 PM</option>
          <option value="7:00 PM - 11:30 PM">7:00 PM - 11:30 PM</option>
          <option value="Night Delivery">Night Delivery</option>
        </select>
        <br/>
        <div style="padding-top:30px">
          <button @click="saveSchedule" aria-label="Save scheduled delivery preference" class="save-button" style="background-color: black; color: white;">Schedule</button>
          <button @click="setDeliveryOption('now'); closePopup()" aria-label="Save scheduled delivery preference" class="save-button" style="background-color: #f4f4f4; color: black;">Deliver Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const address = ref('');
    const showDropdown = ref(false);
    const deliveryOption = ref('now');
    const showPopup = ref(false);
    const selectedDate = ref('');
    const selectedTime = ref('');

    const deliveryText = computed(() => {
      if (deliveryOption.value === 'now') {
        return 'Deliver now';
      } else if (selectedDate.value && selectedTime.value) {
        return `${selectedDate.value}, ${selectedTime.value}`;
      } else {
        return 'Schedule for later';
      }
    });

    function toggleDropdown() {
      showDropdown.value = !showDropdown.value;
    }

    function setDeliveryOption(option) {
      if (option === 'later') {
        deliveryOption.value = option;
        showPopup.value = true;
      } else {
        deliveryOption.value = option;
        selectedDate.value = '';
        selectedTime.value = '';
        toggleDropdown();
      }
    }

    function closePopup() {
      showPopup.value = false;
    }

    function updateDeliveryText() {
      if (selectedDate.value && selectedTime.value) {
        deliveryOption.value = 'later';
      }
    }

    function saveSchedule() {
      if (selectedDate.value && selectedTime.value) {
        deliveryOption.value = 'later';
        closePopup();
      } else {
        alert('Please select both date and time');
      }
    }

    return {
      address,
      showDropdown,
      deliveryOption,
      showPopup,
      selectedDate,
      selectedTime,
      deliveryText,
      toggleDropdown,
      setDeliveryOption,
      closePopup,
      updateDeliveryText,
      saveSchedule
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Uber Move', sans-serif;
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
  text-align: left;
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
  background-color: white;
  color: #0d0c22;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  font-family: 'Uber Move', sans-serif;
}

.button1 {
  padding: 20px 30px;
  border-radius: 4px;
  background-color: #1a1a1a;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  font-family: 'Uber Move', sans-serif;
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
  background-color: rgba(255, 255, 255, 0.5);
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

.select-container {
  position: relative;
  width: 100%;
  background-color: #000000;
}

.select-container select {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  appearance: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  cursor: pointer;
}

.select-container::after {
  content: '';
  position: absolute;
  top: calc(50% - 3px);
  right: 10px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid #9e9ea7;
  pointer-events: none;
}
</style>