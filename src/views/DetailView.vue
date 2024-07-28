<template>
  <div class="restaurant-detail">
    <div class="poster">
      <img src="https://tb-static.uber.com/prod/image-proc/processed_images/4c7252776091efae1198aef7d3922e89/c9252e6c6cd289c588c3381bc77b1dfc.jpeg" alt="Chick-fil-A food">
      <div class="poster-actions">
        <button class="favorite">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" stroke="black" fill="white"/>
          </svg>
        </button>
        <button class="more">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12Z" fill="black"/>
            <path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z" fill="black"/>
            <path d="M17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12Z" fill="black"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="content">
      <h1>{{ restaurant.name }} ({{ restaurant.address }})</h1>
      <div class="restaurant-info">
        <span class="rating">{{ restaurant.rating }} ★</span>
        <span>({{ restaurant.ratingCount }}+)</span>
        <span>{{ restaurant.categories.join(' • ') }}</span>
        <span class="info-link">• Info</span>
      </div>
      <div v-if="restaurant.deliveryUnavailable" class="delivery-status">
        <span class="icon">🚫</span> Delivery unavailable
      </div>
      <p>{{ restaurant.fullAddress }}</p>
      <button class="group-order">Group order</button>

      <p class="description">{{ restaurant.description }}</p>

      <!-- Rest of your component content... -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantDetailView',
  data() {
    return {
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
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.restaurant-info {
  font-size: 14px;
  margin-bottom: 10px;
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
  padding: 8px 16px;
  background-color: transparent;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.description {
  margin-top: 20px;
  font-size: 14px;
}

/* Add more styles as needed for the rest of your component */
</style>
