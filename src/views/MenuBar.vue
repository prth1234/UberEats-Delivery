<template>
  <div class="menu-bar">
    <div v-for="(tab, index) in tabs" :key="index" class="button-content">
      <button :data-baseweb="tab.dataBaseweb" :tabindex="tab.tabIndex" :aria-checked="tab.ariaChecked" :role="tab.role"
              class="button" style="display: inline-block; border-radius: 400px" @click="openPopup(tab)">
        <svg v-if="tab.svgPath" width="1em" height="1em" viewBox="0 0 24 24" fill="none"
             style="vertical-align: text-bottom; width: auto; height: 1.2em">
          <title>{{ tab.svgTitle }}</title>
          <path :d="tab.svgPath" fill="currentColor"></path>
        </svg>
        {{ tab.text }}
      </button>
    </div>
  </div>
  <div v-if="showPopup" class="popup">
    <div class="popup-content">
      <div class="popup-header">
        <h2>{{ selectedTab.text }}</h2>
        <button @click="closePopup" aria-label="Close" class="close-button">
          x
        </button>
      </div>
      <div class="popup-body">
        <div v-if="selectedTab.text === 'Offers'" class="input-container" style="color: black">
          <div class="offer-slider-container">
            <div class="offer-options">
              <span :class="{ 'selected': selectedOfferClass['10'] }">10%</span>
              <span :class="{ 'selected': selectedOfferClass['25'] }">25%</span>
              <span :class="{ 'selected': selectedOfferClass['35'] }">35%</span>
              <span :class="{ 'selected': selectedOfferClass['35plus'] }">35%+</span>
            </div>
            <input type="range" min="0" max="3" v-model.number="deliveryOfferStep" step="1" class="slider"
                   @input="updateSliderBackground($event); updateOffer()"
                   ref="offerSlider" />
          </div>
          <button class="apply-button" @click="applyOffer">Apply</button>
        </div>
        <div v-else-if="selectedTab.text === 'Delivery fee'" class="input-container" style="color: black">
<!--          <div class="slider-container" style="width: 200px; height: 30px; margin: auto;">-->
<!--            <input type="range" min="5" max="8" v-model="deliveryFee" step="1" class="slider"-->
<!--                   @input="updateDeliveryFee" />-->
<!--          </div>-->
          <div class="offer-slider-container">
            <div class="offer-options">
              <span :class="{ 'selected': selectedDeliveryClass['10'] }">$1</span>
              <span :class="{ 'selected': selectedDeliveryClass['25'] }">$3</span>
              <span :class="{ 'selected': selectedDeliveryClass['35'] }">$5</span>
              <span :class="{ 'selected': selectedDeliveryClass['35plus'] }">$10+</span>
            </div>
            <input type="range" min="0" max="3" v-model.number="deliveryFee" step="$1" class="slider"
                   @input="updateSliderBackground($event); updateDeliveryFee()" />
          </div>
<!--          <p>{{ formattedDeliveryFee }}</p>-->
          <button class="apply-button" @click="applyOffer">Apply</button>

        </div>
        <div v-else-if="selectedTab.text === 'Under 30 mins'" class="input-container" style="color: black">
          <input id="btn" type="checkbox" @change="toggleSelection(selectedTab)" :checked="selectedTab.ariaChecked === 'true'" style="color: black"/>
          <label for="btn"></label>
          <div class="plate" :class="{ 'checked': selectedTab.ariaChecked === 'true' }"></div>
          <button class="apply-button" @click="applyOffer">Apply</button>

        </div>
        <div v-else-if="selectedTab.text === 'Best overall'" class="input-container" style="color: black">
          <div @click="toggleBestOverall"
               :class="{ 'best-overall-selected': bestOverallSelected }"
               class="best-overall-content">
            <p>Best overall content goes here.</p>
          </div>
        </div>
        <div v-else-if="selectedTab.text === 'Rating'" class="input-container" style="color: black">
          <div class="offer-slider-container">
            <div class="offer-options">
              <span :class="{ 'selected': selectedRating['1'] }">1+</span>
              <span :class="{ 'selected': selectedRating['2'] }">2+</span>
              <span :class="{ 'selected': selectedRating['3'] }">3+</span>
              <span :class="{ 'selected': selectedRating['4'] }">4+</span>
              <span :class="{ 'selected': selectedRating['5'] }">5</span>

            </div>
            <input type="range" min="0" max="4" v-model.number="ratingValue" step="1" class="slider" @input="updateSliderBackground($event); updateRating()"  />

          </div>
          <!--          <p>{{ formattedDeliveryFee }}</p>-->
          <button class="apply-button" @click="applyOffer">Apply</button>
        </div>
        <div v-else-if="selectedTab.text === 'Price'" class="input-container" style="color: black">
          <div style="display: flex; gap: 10px; font-family: Uber Move Light;">
            <button
                v-for="price in ['$', '$$', '$$$', '$$$$']"
                :key="price"
                class="price-button"
                :class="{ 'selected': selectedPrice === price }"
                @click="selectPrice(price)"
            >
              {{ price }}
            </button>
          </div>
          <button class="apply-button" @click="applyOffer">Apply</button>
        </div>
        <div v-else-if="selectedTab.text === 'Dietary'" class="input-container" style="color: black">
          <form style="display: flex; gap: 15px; flex-direction: column;">

            <label class="checkbox-label">
              <label class="custom-checkbox">
                <input type="checkbox" id="vegetarian" name="vegetarian" value="Vegetarian">
                <span class="checkmark"></span>
              </label>
              <h4 style="font-family:'Uber Move Light'; ">Vegetarian</h4>


            </label>
            <hr class="divider">

            <label class="checkbox-label">
              <label class="custom-checkbox">
                <input type="checkbox" id="vegan" name="vegan" value="Vegan" checked>
                <span class="checkmark"></span>
              </label>
              <h4 style="font-family:'Uber Move Light'; ">Vegan</h4>
            </label>
            <hr class="divider">


            <label class="checkbox-label">
              <label class="custom-checkbox">
                <input type="checkbox" id="gluten" name="gluten-free" value="Gluten-free" checked>
                <span class="checkmark"></span>
              </label>
              <h4 style="font-family:'Uber Move Light'; ">Gluten Free</h4>
            </label>
            <hr class="divider">


            <label class="checkbox-label">
              <label class="custom-checkbox">
                <input type="checkbox" id="halal" name="halal" value="Halal">
                <span class="checkmark"></span>
              </label>
              <h4 style="font-family:'Uber Move Light'; ">Halal</h4>
            </label>
            <hr class="divider">


          </form>
          <button class="apply-button" @click="applyDietaryFilters">Apply</button>
        </div>
        <div v-else-if="selectedTab.text === 'Sort'" class="input-container" style="color: black">
          <form style="display: flex; gap: 15px; flex-direction: column;">
            <label class="checkbox-label">
              <label class="custom-radio">
                <input type="radio" id="vegetarian" name="option" value="Vegetarian">
                <span class="checkmark1"></span>
              </label>
              <h4 style="font-family: 'Uber Move Light';">Recommended</h4>
            </label>
            <hr class="divider">

            <label class="checkbox-label">
              <label class="custom-radio">
                <input type="radio" id="vegan" name="option" value="Vegan" checked>
                <span class="checkmark1"></span>
              </label>
              <h4 style="font-family: 'Uber Move Light';">Rating</h4>
            </label>
            <hr class="divider">

            <label class="checkbox-label">
              <label class="custom-radio">
                <input type="radio" id="gluten" name="option" value="Gluten-free">
                <span class="checkmark1"></span>
              </label>
              <h4 style="font-family: 'Uber Move Light';">Delivery Time</h4>
            </label>
            <hr class="divider">

            <label class="checkbox-label">
              <label class="custom-radio">
                <input type="radio" id="halal" name="option" value="Halal">
                <span class="checkmark1"></span>
              </label>
              <h4 style="font-family: 'Uber Move Light';">Offers</h4>
            </label>
            <hr class="divider">
          </form>           <button class="apply-button" @click="applyOffer">Apply</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>

export default {
 
  data() {
  
    return {
      showPopup: false,
      selectedTab: null,
      deliveryFee: 0,
      deliveryOffer: 10,
      selectedPrice: null,

      initialOffer: 10,
      deliveryOfferStep: 0, // This will correspond to the slider position
      ratingValue:5,
      dietaryOptions: [
        { id: 'vegetarian', label: 'Vegetarian', checked: false },
        { id: 'vegan', label: 'Vegan', checked: false },
        { id: 'gluten-free', label: 'Gluten-free', checked: false },
        { id: 'halal', label: 'Halal', checked: false },
      ],
      deliveryOfferValues: [10, 25, 35, 36],
      formattedDeliveryFeeValue: "Under $5 delivery",
      formattedOfferValue: "10% off on delivery",
      bestOverallSelected: false,
      tabs: [
        {
          text: "Offers",
          dataBaseweb: "button-group",
          tabIndex: "0",
          ariaChecked: "false",
          role: "checkbox",
          svgPath: "M19 5v5.8l-9 9-5.8-5.7 9-9H19V5Zm3-3H12L0 14l10 10 12-12V2Z",
          svgTitle: "Tag",
        },
        {
          text: "Delivery fee",
          tabIndex: "0",
          ariaChecked: "false",
          role: "checkbox",
          svgPath: "M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z",
          svgTitle: "Chevron down small",
        },
        {
          text: "Under 30 mins",
          tabIndex: "0",
          ariaChecked: "false",
          role: "checkbox",
        },
        {
          text: "Best overall",
          tabIndex: "0",
          ariaChecked: "false",
          role: "checkbox",
          svgPath: "m15 9 8-8h-6l-5 5-5-5H1l8 8h6ZM6 13.5v6l6 3.5 6-3.5v-6L12 10l-6 3.5Zm3 4.51v-3.02l3-1.75 3 1.75v3.02l-3 1.75-3-1.75Z",
          svgTitle: "Medal",
          selected: false
        },
        {
          text: "Rating",
          tabIndex: "0",
          ariaChecked: "false",
          role: "checkbox",
          svgPath: "M23.917 8.5 16.104 8l-3.646-7-3.646 7L1 8.5 6.73 14l-2.084 8 7.812-4 7.813 4-2.084-8 5.73-5.5Zm-8.855 4.7L16 16.8 12.458 15l-3.541 1.8.937-3.6-2.5-2.4 3.23-.2L12.457 7l1.875 3.6 3.23.2-2.5 2.4Z",
          svgTitle: "Star",
        },
        {
          text: "Price",
          tabIndex: "0",
          ariaChecked: "false",
          role: "checkbox",
          svgPath: "M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z",
          svgTitle: "Chevron down small",
        },
        {
          text: "Dietary",
          tabIndex: "0",
          ariaChecked: "false",
          role: "checkbox",
          svgPath: "M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z",
          svgTitle: "Chevron down small",
        },
        {
          text: "Sort",
          tabIndex: "0",
          ariaChecked: "false",
          role: "checkbox",
          svgPath: "M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z",
          svgTitle: "Chevron down small",
        },
      ],
    };
  },
  methods: {
    openPopup(tab) {
      if (tab.text === "Best overall") {
        tab.selected = !tab.selected;
      } else {
        this.selectedTab = tab;
        this.showPopup = true;
        if (tab.text === "Offers") {
          this.deliveryOfferStep = 0; // Reset to minimum value
          this.initialOffer = this.deliveryOffer;
        }
        this.$nextTick(() => {
          this.setInitialSliderBackground();
        });
      }
    },
    applyDietaryFilters() {
      // Implement the logic to apply the selected dietary filters
      const selectedFilters = this.dietaryOptions
          .filter(option => option.checked)
          .map(option => option.label);
      console.log('Applied dietary filters:', selectedFilters);
      this.closePopup();
    },
    toggleBestOverall() {
      if (this.selectedTab.text === 'Best overall') {
        this.selectedTab.selected = !this.selectedTab.selected;
        this.bestOverallSelected = this.selectedTab.selected;
      }
    },
    selectPrice(price) {
      this.selectedPrice = price;
    },
    closePopup() {
      this.showPopup = false;
      if (this.selectedTab.text === "Offers") {
        this.deliveryOffer = this.initialOffer;
        this.updateOffer();
      }
    },
    applyOffer() {
      // The current offer is already saved in real-time
      this.closePopup();
    },
     selectButton(selectedDiv) {
  // Remove the 'selected' class from all buttons
  const buttons = document.querySelectorAll('.rounded-rectangle');
  buttons.forEach(button => button.classList.remove('selected'));

  // Add the 'selected' class to the clicked button
  selectedDiv.classList.add('selected');
},
    updateDeliveryFee() {
      // if (this.deliveryFee <= 5) {
      //   this.formattedDeliveryFeeValue = ``;
      // } else if (this.deliveryFee <= 6) {
      //   this.formattedDeliveryFeeValue = ``;
      // } else if (this.deliveryFee <= 7) {
      //   this.formattedDeliveryFeeValue = ``;
      // } else {
      //   this.formattedDeliveryFeeValue = ``;
      // }
    },

    updateRating() {
      this.ratingValue = this.formattedRatingValue[this.updateRating];
      // if (this.ratingValue <= 10) {
      //   this.formattedRatingValue = "";
      // } else if (this.ratingValue <= 25) {
      //   this.formattedRatingValue = "";
      // } else if (this.ratingValue <= 35) {
      //   this.formattedRatingValue = "";
      // } else {
      //   this.formattedRatingValue = "";
      // }
    },
    toggleSelection(tab) {
      if (tab.ariaChecked === 'true') {
        tab.ariaChecked = 'false';
      } else {
        this.tabs.forEach(t => t.ariaChecked = 'false');
        tab.ariaChecked = 'true';
      }
    },
    updateSliderBackground(event) {
      const value = parseFloat(event.target.value);
      const min = parseFloat(event.target.min);
      const max = parseFloat(event.target.max);
      const percentage = ((value - min) / (max - min)) * 100;
      event.target.style.background = `linear-gradient(to right, #000 0%, #000 ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;
    },
    setInitialSliderBackground() {
      const sliders = this.$el.querySelectorAll('.slider');
      sliders.forEach(slider => {
        slider.value = slider.min;
        slider.style.background = '#ddd';
      });
    },

    updateOffer() {
      this.deliveryOffer = this.deliveryOfferValues[this.deliveryOfferStep];
      this.updateSliderBackground({ target: this.$refs.offerSlider });
    },
  },
  computed: {
    formattedDeliveryFee() {
      return this.formattedDeliveryFeeValue;
    },
    formattedOffer() {
      return this.formattedOfferValue;
    },
    selectedOfferClass() {
      return {
        '10': this.deliveryOfferStep === 0,
        '25': this.deliveryOfferStep === 1,
        '35': this.deliveryOfferStep === 2,
        '35plus': this.deliveryOfferStep === 3
      };
    },
    selectedDeliveryClass() {
      return {
        '10': this.deliveryFee === 0,
        '25': this.deliveryFee === 1,
        '35': this.deliveryFee === 2,
        '35plus': this.deliveryFee === 3
      };
    },
    selectedRating() {
      return {
        '1': this.ratingValue === 0,
        '2': this.ratingValue === 1,
        '3': this.ratingValue === 2,
        '4': this.ratingValue === 3,
        '5': this.ratingValue === 4,
      };
    }
  },
};
</script>
  <style scoped>
  .price-button {
    width: 80px;
    height: 40px;
    background-color: #F3F3F3;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: black;
    border: 2px solid transparent;
    cursor: pointer;
  }

  .price-button.selected {
    border-color: black;
    border-width: 2px;
  }

  .menu-bar {
    display: flex;
    gap: 25px;
    width: 100%;
    position: relative;
    top: 4.5px;
    left: 30px;
  }


  .slider-container {
    width: 200px;
    height: 30px;
  }
  .divider {
    width: 350px;
    background-color: #f3f3f3;
    margin:0px;
    border: none;
    height: 3px;
  }

  .slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 3px;
    background: #ddd;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
  }

  .slider1 {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 3px;
    background: black;
    border-radius: 10px;
    outline: none;
    cursor: pointer;

  }


  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #000;
    cursor: pointer;
  }



  .slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #000;
    cursor: pointer;
  }
  .button-content {
    display: flex;
    vertical-align: baseline;
    align-items: center;
  }

  .button {
    width: auto;
    white-space: nowrap;
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
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    text-align: center;
    width: 400px;
    justify-content: center;
    align-items: center;
  }

  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .popup-header h2 {
    font-family: "Uber Move";
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

  body {
    height: 100vh;
    background-image: linear-gradient(45deg, #555 10%, #888 90%);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .plate {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 100vw;
    height: 0;
    padding-bottom: 100%;
    border-radius: 50%;
    transform: translate(-50%, -50%) rotate(0) scale(2);
    z-index: -1;
    background-image: repeating-conic-gradient(
      from 45deg at 50% 50%,
      #4a4 0deg 10deg,
      #5b5 10deg 20deg,
      #6c6 20deg 30deg
    );
    visibility: hidden;
    opacity: 0;
  }

  @keyframes rot {
    to {
      transform: translate(-50%, -50%) rotate(360deg) scale(2);
    }
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] ~ label {
    position: relative;
    display: block;
    width: 70px;
    height: 36px;
    border-radius: 20px;
    border: 2px solid #8f8c8c;
    transition: transform 200ms cubic-bezier(0.41, -0.01, 0.63, 1.09);
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
  }

  input[type="checkbox"] ~ label::before,
  input[type="checkbox"] ~ label::after {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 34px;
    height: 34px;
    border-radius: 18px;
    content: "";
    transition: all 220ms cubic-bezier(0.76, 0.01, 0.15, 0.97);
  }

  input[type="checkbox"] ~ label::before {
    background-image: linear-gradient(45deg, #383 10%, #4b4 90%);
  }

  input[type="checkbox"] ~ label::after {
    background-color: #999;
  }

  input[type="checkbox"]:checked ~ label {
    border: 2px solid #fff;
    transform: scale(1.01);
    box-shadow: 0 0 60px 5px #9f9;
    border-color: #afa;
    background: rgba(0, 128, 0, 0.6);
  }

  input[type="checkbox"]:checked ~ label::before {
    width: 68px;
  }

  input[type="checkbox"]:checked ~ label::after {
    transform: translateX(34px);
    background-color: #4c4;
    box-shadow: -4px 0 4px rgba(0, 0, 0, 0.1);
  }

  input[type="checkbox"]:checked ~ div {
    opacity: 1;
    visibility: visible;
    transition: opacity 240ms, visibility 0s;
    animation: rot 3s linear forwards;
  }

  input[type="checkbox"]:checked ~ div.plate {
    opacity: 1;
    visibility: visible;
  }

  .plate.checked {
    opacity: 1;
    visibility: visible;
  }

  .best-overall-content {
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .best-overall-selected {
    background-color: #4CAF50; /* Green background */
    color: white; /* White text */
  }

  .best-overall-content {
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .best-overall-selected {
    background-color: #4CAF50; /* Green background */
    color: white; /* White text */
  }
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    width: 100%;
  }

  .offer-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .offer-slider-container {
    width: 100%;
    max-width: 300px;
    position: relative;
  }

  .offer-options {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
  }

  .offer-options span {
    padding: 5px 10px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 14px;
  }

  .offer-options span.selected {
    background-color: #000000;
    color: #fff;
  }



  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 2px;
    background: #ddd;
    outline: none;
    margin: 10px 0;
    background: linear-gradient(to right, #000 0%, #000 50%, #ddd 50%, #ddd 100%);

  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #000;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #000;
    cursor: pointer;
  }
  .slider::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    color: #000;
  }

  .slider::-moz-range-progress {
    background-color: #000;
  }

  .apply-button {
    background-color: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    font-size: 16px;
  }

  .custom-checkbox {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 25px; /* Adjust as needed */
  }

  .custom-checkbox input[type="checkbox"] {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .custom-checkbox .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border: 3px solid grey;
  }

  .custom-checkbox input[type="checkbox"]:checked ~ .checkmark {
    background-color: #000;
    border: 3px solid black;

  }

  .custom-checkbox .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .custom-checkbox input[type="checkbox"]:checked ~ .checkmark:after {
    display: block;
  }

  .custom-checkbox .checkmark:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  .checkbox-label {
    display: flex;
    align-items: center;
  }

  .checkbox-label h4 {
    margin: 0;
  }




  .custom-radio {
    position: relative;
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #ffffff;
    border: 2px solid #818181;
    cursor: pointer;
    vertical-align: middle;
    margin-right:15px;
  }

  .custom-radio input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .custom-radio .checkmark1 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    background-color: #ffffff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: background-color 0.3s ease;
  }

  .custom-radio input:checked ~ .checkmark1 {
    background-color: #000000;
  }


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




  </style>