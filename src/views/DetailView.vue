<template>
  <div class="restaurant-detail">
    <div class="poster">
      <img src="https://tb-static.uber.com/prod/image-proc/processed_images/4c7252776091efae1198aef7d3922e89/c9252e6c6cd289c588c3381bc77b1dfc.jpeg" alt="Chick-fil-A food">
      <div class="poster-actions">
        <button class="favorite" @click="toggleFavorite">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path :class="{ filled: isFavorite }" fill-rule="evenodd" clip-rule="evenodd" d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
          </svg>
        </button>
        <button class="more" @click="openPopup">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12Z" fill="black"/>
            <path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z" fill="black"/>
            <path d="M17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12Z" fill="black"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="content">
      <button class="group-order">
          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="gj dz gk gl"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm13 5h-3v-3h-3v3h-3v3h3v3h3v-3h3v-3zM1 23h12.1c-1-1.2-1.6-2.8-1.6-4.5 0-1.7.6-3.3 1.6-4.5H7c-3.3 0-6 2.7-6 6v3z"></path></g><defs><clipPath id="clip0"><path d="M0 0h24v24H0z"></path></clipPath></defs></svg>
        Group order
      </button>
      <h1>{{ restaurant.name }} ({{ restaurant.address }})</h1>
      <div class="restaurant-info">
        <span class="rating">{{ restaurant.rating }} ★ | </span>
        <span>({{ restaurant.ratingCount }}+) | </span>
        <span>{{ restaurant.categories.join(' • ') }} • </span>
        <span class="info-link">Info</span>
  
      </div>
  

      <p class="description">{{ restaurant.description }}</p>
      <transition name="fade">
        <div v-if="showNotification" class="notification">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" stroke="white" fill="white"/>
          </svg>
          <span style="font-family: Uber Move;">&nbsp&nbsp&nbsp&nbsp{{ notificationMessage }}</span>
        </div>
      </transition>
      <div v-if="showPopup" class="popup">
    <div class="popup-content">
      <div class="popup-header">
        <h2>{{ selectedTab.text }}</h2>
        <button @click="closePopup" aria-label="Close" class="close-button">
          x
        </button>
      </div>
      <div class="popup-body"></div></div></div>

      <!-- Rest of your component content... -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantDetailView',
  data() {
    return {
      isFavorite: false,
      showNotification: false,
      notificationMessage: '',
      showPopup: false,


      restaurant: {
        name: 'Chick-fil-A',
        address: '3707 State St',
        fullAddress: '3707 State St',
        rating: 4.7,
        ratingCount: 1500,
        categories: ['Fast Food', 'American', 'Breakfast and Brunch', 'Chicken'],
        deliveryUnavailable: true,
        description: 'Chick-fil-A on State Street in Santa Barbara offers a variety of fast food options, specializing in chicken-based dishes. Popular menu items among customers include the Spicy Chicken Sandwich Deluxe Meal and th...',
        // ... other data
      },
      // ... other data properties
    }
    
    

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
    toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.notificationMessage = this.isFavorite ? 'Added to favorites' : 'Removed from favorites';
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 2000); // Notification will disappear after 2 seconds
  },
  closePopup() {
      this.showPopup = false;
      if (this.selectedTab.text === "Offers") {
        this.deliveryOffer = this.initialOffer;
        this.updateOffer();
      }
    },
}
  // ... methods and other component options
}
</script>

<style scoped>
.restaurant-detail {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #101010;
  color: #ffffff;
}

.poster {
  position: relative;
  width: 100%;
  height: 300px; /* Adjusted height */
  overflow: hidden;
  border-radius: 8px 8px 0 0;
}

.poster img {
  width: 100%;
  height: 100%; /* Make sure the image covers the new height */
  object-fit: cover;
}

.poster-actions {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
}

.poster-actions button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
}

.content {
  padding: 0px;
  text-align: center;

}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
  text-align: left;
}

.restaurant-info {
  font-size: 14px;
  margin-bottom: 10px;
  text-align: left;
}

.rating {
  font-weight: bold;
}

.info-link {
  color: #5557ca;
  text-decoration: underline;
}

.delivery-status {
  color: #ff4500;
  margin-bottom: 10px;
}
.popup-body {
    display: flex;
    flex-direction: column;
  }

.group-order {
  float: right;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: #eee;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: black;
  font-family: "Uber Move";
}

.group-order svg {
  margin-right: 8px;
  transform: scale(0.7);
}

.description {
  margin-top: 20px;
  font-size: 14px;
  text-align: left;
}
.favorite svg path {
  stroke: black;
  fill: white;
}
.favorite svg path.filled {
  fill: black;
  stroke: black;
}

.notification {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  z-index: 1000;
}

.notification img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }}



  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.restaurant-details-img {
  max-width: 100%;
  height: auto;
}


/* Add more styles as needed for the rest of your component */
</style>
