<template>
  <div class="restaurant-detail">
    <div class="poster">
      <img
        src="https://tb-static.uber.com/prod/image-proc/processed_images/4c7252776091efae1198aef7d3922e89/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        alt="Chick-fil-A food"
        style="border-radius: 20px"
      />
      <div class="poster-actions">
        <button class="favorite" @click="toggleFavorite">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              :class="{ filled: isFavorite }"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </button>
        <button class="more" @click="openPopup">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12Z"
              fill="black"
              stroke="black"
              stroke-width="2"
            />
            <path
              d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z"
              fill="black"
              stroke="black"
              stroke-width="2"
            />
            <path
              d="M17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12Z"
              fill="black"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="content">
      <button class="group-order">
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          class="gj dz gk gl"
        >
          <g clip-path="url(#clip0)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm13 5h-3v-3h-3v3h-3v3h3v3h3v-3h3v-3zM1 23h12.1c-1-1.2-1.6-2.8-1.6-4.5 0-1.7.6-3.3 1.6-4.5H7c-3.3 0-6 2.7-6 6v3z"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0"><path d="M0 0h24v24H0z"></path></clipPath>
          </defs>
        </svg>
        Group order
      </button>
      <h1 style="font-size: 30px">
        {{ restaurant.name }} ({{ restaurant.address }})
      </h1>
      <div class="restaurant-info">
        <span class="rating">{{ restaurant.rating }} ★ | </span>
        <span>({{ restaurant.ratingCount }}+) | </span>
        <span>{{ restaurant.categories.join(" • ") }} • </span>
        <span class="info-link">Info</span>
      </div>
      <p class="description">{{ restaurant.description }}</p>
      <ToppicksSlider />
      <div class="top-picks-slider">
    <div class="header">
      <div class="header-container">
  <h2 style="text-align: left; font-family: Uber Move;">Featured items</h2>
  <div class="nav-buttons">
              <button class="nav-button prev" @click="prevSlide" aria-label="Previous slide">
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="i3 dq i4 i5"><path d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z"></path></svg>
              </button>
              <button class="nav-button next" @click="nextSlide" aria-label="Next slide">
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="i3 dq i4 i5 k8"><path d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z"></path></svg>
              </button> 
        </div>
</div>


    </div>
    <div class="slider-container">
  <div class="slides-wrapper" :style="{ transform: `translateX(-${currentIndex * 25}%)` }">
    <div class="slide" v-for="(item, index) in items" :key="index">
      <div class="item-image">
            <img :src="item.image" :alt="item.name">
            <span v-if="item.rank" class="rank-badge">{{ item.rank }}</span>
            <button class="add-button">+</button>
          </div>
          <h3>{{ item.name }}</h3>
          <p class="price">${{ item.price.toFixed(2) }}</p>

    </div>
  </div>
</div>
  </div>
      <transition name="fade">
        <div v-if="showNotification" class="notification">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
              stroke="white"
              fill="white"
            />
          </svg>
          <span style="font-family: Uber Move"
            >&nbsp&nbsp&nbsp&nbsp{{ notificationMessage }}</span
          >
        </div>
      </transition>
      <div v-if="showPopup" class="modal-overlay">
        <div class="modal-content">
          <div class="popup-header">
            <h2>{{ selectedTab.text }}</h2>
            <button @click="closePopup" aria-label="Close" class="close-button">
              x
            </button>
          </div>
          <div class="popup-body" style="color: black; text-align: left">
            <div id="map"></div>
            <h1>{{ restaurant.name }}</h1>
            <div class="restaurant-info">
              <div class="information">
                <span class="rating">{{ restaurant.rating }} ★ | </span>
                <span>({{ restaurant.ratingCount }}+) | </span>
                <span>{{ restaurant.categories.join(" • ") }} • </span>
                <span class="info-link">Info</span>
              </div>

              <hr class="divider" />
              <div class="address">
                <svg width="29" height="29" viewBox="0 0 24 24" fill="none">
                  <title>Location marker</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1c2.4 0 4.9.9 6.7 2.8 3.7 3.7 3.7 9.8 0 13.4L12 24l-6.7-6.7c-3.7-3.7-3.7-9.8 0-13.5C7.1 1.9 9.6 1 12 1Zm0 18.8 4.6-4.6c2.5-2.6 2.5-6.7 0-9.3C15.4 4.7 13.7 4 12 4c-1.7 0-3.4.7-4.6 1.9-2.5 2.6-2.5 6.7 0 9.3l4.6 4.6Zm2-9.3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h3 style="margin-left: 5px; font-family: Uber Move">
                  {{ restaurant.fullAddress }}
                </h3>
                <svg
                  style="margin-left: 100px"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  color="#A6A6A6"
                >
                  <title>Copy</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 1h17v17H1V1Zm3 14h11V4H4v11Zm16 5V6h3v17H6v-3h14Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <hr class="divider" />
              <div class="opens-at">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <title>Clock</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12Zm3 0c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8Zm6.5 2.5V7h3v4.5H17v3h-6.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h3 style="margin-left: 5px; font-family: Uber Move">
                  {{ restaurant.OpeningTime }}
                </h3>
              </div>
              <hr class="divider" />
              <div class="opens-at">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <title>Star</title>
                  <path
                    d="M23.917 8.5 16.104 8l-3.646-7-3.646 7L1 8.5 6.73 14l-2.084 8 7.812-4 7.813 4-2.084-8 5.73-5.5Zm-8.855 4.7L16 16.8 12.458 15l-3.541 1.8.937-3.6-2.5-2.4 3.23-.2L12.457 7l1.875 3.6 3.23.2-2.5 2.4Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h3 style="margin-left: 5px; font-family: Uber Move">
                  {{ restaurant.rating }} | ({{ restaurant.ratingCount }}+
                  ratings)
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ToppicksSlider from "./ToppicksSlider.vue";
export default {
  name: "RestaurantDetailView",
  data() {
    return {
      isFavorite: false,
      showNotification: false,
      notificationMessage: "",
      showPopup: false,
      selectedTab: { text: "Details" },
      items: [
          { name: 'Chick-fil-A® Nuggets Meal', price: 15.29, image: 'https://www.kitchenathoskins.com/wp-content/uploads/2020/09/air-fryer-chicken-nuggets-28.jpg', rank: '#1 most liked' },
          { name: 'Chick-fil-A® Nuggets', price: 8.55, image: 'https://girlscangrill.com/wp-content/uploads/2015/12/copycat-chick-fil-a-chicken-nuggets-500x500.jpg', rank: '#2 most liked' },
          { name: 'Spicy Southwest Salad', price: 14.55, image: 'https://realhousemoms.com/wp-content/uploads/Copycat-Chick-Fil-A-Spicy-Southwest-Salad-RECIPE-CARD.jpg', rank: '#3 most liked' },
          { name: 'Chick-fil-A ChickMeal® Meal', price: 13.09, image: 'https://media.bizj.us/view/img/11579235/chick-fil-a-9jv*1200xx2918-2918-185-0.jpg' },

          { name: 'Chick-fil-A ChickSalad® Meal', price: 13.09, image: 'https://summeryule.com/wp-content/uploads/2022/04/southwest-salad-chick-fil-a.jpeg' },

          { name: 'Chick-fil-A Chick-n-Macros Meal', price: 13.09, image: 'https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Daypart%20Hero/Winter23/Winter23-DotCom-ChickenSandwich-D_720x748.jpg?h=748&w=720&la=en' },


        ],
        currentIndex: 0,

      restaurant: {
        name: "Chick-fil-A",
        address: "3707 State St",
        fullAddress: "3707 State St, Santa Clara, United States",
        OpeningTime: "Everyday from 9am till 11pm",
        rating: 4.7,
        ratingCount: 1500,
        categories: [
          "Fast Food",
          "American",
          "Breakfast and Brunch",
          "Chicken",
        ],
        deliveryUnavailable: true,
        description:
          "Chick-fil-A on State Street in Santa Barbara offers a variety of fast food options, specializing in chicken-based dishes. Popular menu items among customers include the Spicy Chicken Sandwich Deluxe Meal and th...",
        // ... other data
      },
      // ... other data properties
    };
  },
  methods: {
    openPopup() {
      this.showPopup = true;
      this.$nextTick(() => {
        this.loadGoogleMapsScript();
      });
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
      this.notificationMessage = this.isFavorite
        ? "Added to favorites"
        : "Removed from favorites";
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, 2000); // Notification will disappear after 2 seconds
    },
    prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  },
  nextSlide() {
    if (this.currentIndex < this.items.length - 4) {
      this.currentIndex++;
    }
  },
    closePopup() {
      this.showPopup = false;
    },
    loadGoogleMapsScript() {
      if (typeof google === "undefined") {
        const script = document.createElement("script");

        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAgrmQKFgTQNPpdwbyrobLDlBkNxtCu0v4&callback=initMap`;

        script.async = true;

        script.defer = true;

        script.onload = this.initMap;

        document.head.appendChild(script);
      } else {
        this.initMap();
      }
    },

    initMap() {
      const uluru = { lat: -25.344, lng: 131.036 };

      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,

        center: uluru,
      });

      const marker = new google.maps.Marker({
        position: uluru,

        map: map,
      });
    },
  },
  // ... methods and other component options
};
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
.divider {
  border: none;
  height: 2px;
  background-color: #ebeaea;
  width: 100%;
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
  }
}

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
  border-radius: 20px;
  position: relative;
  width: 500px;
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

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
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

#map {
  height: 200px; /* Adjust the height as needed */

  width: 100%; /* The width is the width of the container */
}
.address {
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: -7px;
  margin-bottom: -7px;
}

.address svg {
  margin-right: 10px;
}
.opens-at {
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: -7px;
  margin-bottom: -7px;
}

.opens-at svg {
  margin-right: 10px;
  margin-top: -10px;
  margin-bottom: -10px;
}
.information {
  margin-bottom: 15px;
}
.top-picks-slider {
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .slider-container {
  overflow: hidden;
  width: 100%;
}
  
.slides-wrapper {
  display: flex;
  transition: transform 0.3s ease;
  width: fit-content;
}
  
.slide {
  flex: 0 0 25%;
  padding: 10px;
  box-sizing: border-box;
  width: 25%;
}
  
  .item-image {
    position: relative;
    margin-bottom: 10px;
  }
  
  .item-image img {
    width: 100%;
    border-radius: 8px;
  }
  
  .rank-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #4CAF50;
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 12px;
  }
  
  .add-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: 20px;
    cursor: pointer;
  }
  
  h3 {
    font-size: 16px;
    margin-bottom: 5px;
  }
  
  .price {
    font-weight: bold;


  }
  
  .header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-button {
  display: flex;
}

.nav-buttons {
  width: 36px;  /* Set a specific width */
  height: 36px; /* Ensure height is the same as width to form a perfect circle */
  border-radius: 18px; /* Half of width/height to make it round */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a; /* Or any color you prefer */
  border: none;
  cursor: pointer;
  margin: 0 5px; /* Add some space around the buttons */
}

.nav-button svg {
  width: 24px;
  height: 24px;
}

.nav-button svg path {
  fill: rgb(255, 255, 255); /* Use currentColor to inherit the button's color */
}

 
</style>
