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
            <input type="range" min="0" max="3" v-model.number="deliveryOfferStep" step="1" class="slider" @input="updateOffer" />

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
            <input type="range" min="0" max="3" v-model.number="deliveryFee" step="1" class="slider" @input="updateDeliveryFee" />

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
              <span :class="{ 'selected1': selectedRating['1'] }">1+</span>
              <span :class="{ 'selected1': selectedRating['2'] }">2+</span>
              <span :class="{ 'selected1': selectedRating['3'] }">3+</span>
              <span :class="{ 'selected1': selectedRating['4'] }">4+</span>
              <span :class="{ 'selected1': selectedRating['5'] }">5</span>

            </div>
            <input type="range" min="0" max="4" v-model.number="ratingValue" step="1" class="slider" @input="updateRating" />

          </div>
          <!--          <p>{{ formattedDeliveryFee }}</p>-->
          <button class="apply-button" @click="applyOffer">Apply</button>
        </div>
        <div v-else-if="selectedTab.text === 'Price'" class="input-container" style="color: black">
          <p>Price content goes here.</p>
        </div>
        <div v-else-if="selectedTab.text === 'Dietary'" class="input-container" style="color: black">
          <p>Dietary content goes here.</p>
        </div>
        <div v-else-if="selectedTab.text === 'Sort'" class="input-container" style="color: black">
          <p>Sort content goes here.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Star from './star.vue'
</script>

<script>
export default {
  data() {
    return {
      showPopup: false,
      selectedTab: null,
      deliveryFee: 5,
      deliveryOffer: 10,
      initialOffer: 10,
      deliveryOfferStep: 0, // This will correspond to the slider position
      ratingValue:5,

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
          this.initialOffer = this.deliveryOffer;
        }
      }
    },
    toggleBestOverall() {
      if (this.selectedTab.text === 'Best overall') {
        this.selectedTab.selected = !this.selectedTab.selected;
        this.bestOverallSelected = this.selectedTab.selected;
      }
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
    updateOffer() {
      this.deliveryOffer = this.deliveryOfferValues[this.deliveryOfferStep];
      // if (this.deliveryOffer <= 10) {
      //   this.formattedOfferValue = "";
      // } else if (this.deliveryOffer <= 25) {
      //   this.formattedOfferValue = "";
      // } else if (this.deliveryOffer <= 35) {
      //   this.formattedOfferValue = "";
      // } else {
      //   this.formattedOfferValue = "";
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
    }
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

  .slider {
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
    background: white;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
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
    border-radius: 10px;
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

  .offer-options span.selected1 {
    background-color: #000000;
    color: #ffffff;
  }

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 2px;
    background: #ddd;
    outline: none;
    margin: 10px 0;
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
  </style>