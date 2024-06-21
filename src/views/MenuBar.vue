<template>
  <div class="menu-bar">
    <div v-for="(tab, index) in tabs" :key="index" class="button-content">
      <button
        :data-baseweb="tab.dataBaseweb"
        :tabindex="tab.tabIndex"
        :aria-checked="tab.ariaChecked"
        :role="tab.role"
        class="button"
        style="display: inline-block; border-radius: 400px;"
        @click="openPopup(tab)"

      >
        <svg
          v-if="tab.svgPath"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          style="vertical-align: text-bottom; width: auto; height: 1.2em;"
        >
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
        <button @click="closePopup" aria-label="Close" class="close-button">x</button>
      </div>
      <div class="popup-body">
        <div v-if="selectedTab.text === 'Offers'" class="input-container" style="color: black;">
          <p>Offers content goes here.</p>
        </div>
        <div v-else-if="selectedTab.text === 'Delivery fee'" class="input-container" style="color: black;">
          <div class="slider-container">
    <input type="range" min="1" max="4" value="1" step="1" class="slider" />
  </div>
        </div>
        <div v-else-if="selectedTab.text === 'Under 30 mins'" class="input-container" style="color: black;">
          <p>Under 30 mins content goes here.</p>
        </div>
        <div v-else-if="selectedTab.text === 'Best overall'" class="input-container" style="color: black;">
          <p>Best overall content goes here.</p>
        </div>
        <div v-else-if="selectedTab.text === 'Rating'" class="input-container" style="color: black;">
          <p>Rating content goes here.</p>
        </div>
        <div v-else-if="selectedTab.text === 'Price'" class="input-container" style="color: black;">
          <p>Price content goes here.</p>
        </div>
        <div v-else-if="selectedTab.text === 'Dietary'" class="input-container" style="color: black;">
          <p>Dietary content goes here.</p>
        </div>
        <div v-else-if="selectedTab.text === 'Sort'" class="input-container"style="color: black;" >
          <p>Sort content goes here.</p>
        </div>
      </div>
    </div>
  </div>




</template>
<script>

const sliderTrack = document.getElementById('slider-track');
const increments = document.querySelectorAll('.increment');

increments.forEach(increment => {
  increment.addEventListener('click', function() {
    // Change styles or add a marker element to indicate selection here
  });
});
export default {
  data() {
    return {
      showPopup: false,
      selectedTab: null,
      tabs: [
        {
          text: 'Offers',
          dataBaseweb: 'button-group',
          tabIndex: '0',
          ariaChecked: 'false',
          role: 'checkbox',
          svgPath: 'M19 5v5.8l-9 9-5.8-5.7 9-9H19V5Zm3-3H12L0 14l10 10 12-12V2Z',
          svgTitle: 'Tag',
        },
        {
          text: 'Delivery fee',
          tabIndex: '0',
          ariaChecked: 'false',
          role: 'checkbox',
          svgPath: 'M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z',
          svgTitle: 'Chevron down small',
        },
        {
          text: 'Under 30 mins',
          tabIndex: '0',
          ariaChecked: 'false',
          role: 'checkbox',
        },
        {
          text: 'Best overall',
          tabIndex: '0',
          ariaChecked: 'false',
          role: 'checkbox',
          svgPath: 'm15 9 8-8h-6l-5 5-5-5H1l8 8h6ZM6 13.5v6l6 3.5 6-3.5v-6L12 10l-6 3.5Zm3 4.51v-3.02l3-1.75 3 1.75v3.02l-3 1.75-3-1.75Z',
          svgTitle: 'Medal',
        },
        {
          text: 'Rating',
          tabIndex: '0',
          ariaChecked: 'false',
          role: 'checkbox',
          svgPath: 'M23.917 8.5 16.104 8l-3.646-7-3.646 7L1 8.5 6.73 14l-2.084 8 7.812-4 7.813 4-2.084-8 5.73-5.5Zm-8.855 4.7L16 16.8 12.458 15l-3.541 1.8.937-3.6-2.5-2.4 3.23-.2L12.457 7l1.875 3.6 3.23.2-2.5 2.4Z',
          svgTitle: 'Star',
        },
        {
          text: 'Price',
          tabIndex: '0',
          ariaChecked: 'false',
          role: 'checkbox',
          svgPath: 'M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z',
          svgTitle: 'Chevron down small',
        },
        {
          text: 'Dietary',
          tabIndex: '0',
          ariaChecked: 'false',
          role: 'checkbox',
          svgPath: 'M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z',
          svgTitle: 'Chevron down small',
        },
        {
          text: 'Sort',
          tabIndex: '0',
          ariaChecked: 'false',
          role: 'checkbox',
          svgPath: 'M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z',
          svgTitle: 'Chevron down small',
        },
      ],
    };
  },
  methods: {
    openPopup(tab) {
      this.selectedTab = tab;
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
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
#slider-container {
  width: 200px;
  height: 30px;
}

#slider-track {
  background-color: #ddd;
  height: 10px;
  position: relative;
}

#slider-handle {
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%); /* Center handle vertically */
  cursor: pointer; /* Indicate draggable cursor */
}

.increment {
  display: inline-block;
  margin-right: 10px;
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
  width: 540px;
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

.slider-container {
  width: 200px;
  height: 30px;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 5px;
  background: black; /* Black to white gradient */
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
  background: black; /* Black thumb */
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: black; /* Black thumb for Firefox */
  cursor: pointer;
}
</style>
