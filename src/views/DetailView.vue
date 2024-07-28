<template>
  <div class="restaurant-detail">
    <header class="header">
      <h1>{{ restaurant.name }} ({{ restaurant.address }})</h1>
      <div class="restaurant-info">
        <span class="rating">{{ restaurant.rating }} ★</span>
        <span>({{ restaurant.ratingCount }}+)</span>
        <span>{{ restaurant.categories.join(' • ') }}</span>
        <span class="info-icon">ⓘ</span>
      </div>
      <div v-if="restaurant.deliveryUnavailable" class="delivery-status">
        <span class="icon">🚫</span> Delivery unavailable
      </div>
      <p class="description">{{ restaurant.description }}</p>
    </header>

    <div class="main-content">
      <section class="delivery-section">
        <div class="delivery-input">
          <span class="icon">📍</span>
          <input type="text" placeholder="Enter your address" v-model="deliveryAddress">
        </div>
        <button class="login-button" @click="logIn">
          <span class="icon">👤</span> Log in for saved address
        </button>
      </section>

      <section class="rating-reviews">
        <div v-for="review in restaurant.reviews" :key="review.id" class="review">
          <div class="stars">★★★★★</div>
          <span>{{ review.author }} • {{ review.date }}</span>
        </div>
        <button class="show-more" @click="showMoreReviews">↓ Show more</button>
      </section>

      <section class="map-section">
        <div class="map-placeholder"></div>
      </section>
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
        rating: 4.7,
        ratingCount: 1500,
        categories: ['Fast Food', 'American', 'Breakfast and Brunch', 'Chicken'],
        deliveryUnavailable: true,
        description: 'Chick-fil-A on State Street in Santa Barbara offers a variety of fast food options, specializing in chicken-based dishes. Popular menu items among customers include the Spicy Chicken Sandwich Deluxe Meal and th...',
        reviews: [
          { id: 1, author: 'joel E.', date: '02/27/24' },
          { id: 2, author: 'Crystal C.', date: '05/24/24' },
        ],
      },
      deliveryAddress: '',
    }
  },
  methods: {
    logIn() {
      // Implement login logic
      console.log('Logging in...');
    },
    showMoreReviews() {
      // Implement logic to show more reviews
      console.log('Showing more reviews...');
    },
  },
}
</script>

<style scoped>
.restaurant-detail {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #121212;
  color: white;
}

.header {
  background-color: #1E1E1E;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.restaurant-info {
  font-size: 14px;
  margin-bottom: 10px;
}

.delivery-status {
  font-size: 14px;
  color: #ff4500;
  margin-bottom: 10px;
}

.description {
  font-size: 14px;
}

.main-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.delivery-section, .rating-reviews, .map-section {
  background-color: #2C2C2C;
  padding: 20px;
  border-radius: 8px;
}

.delivery-input {
  display: flex;
  align-items: center;
  border: 1px solid #444;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 10px;
  background-color: #1E1E1E;
}

.delivery-input input {
  border: none;
  background: transparent;
  color: white;
  flex-grow: 1;
  margin-left: 8px;
}

.login-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.review {
  margin-bottom: 20px;
}

.show-more {
  background: none;
  border: none;
  color: #3EA6FF;
  cursor: pointer;
}

.map-placeholder {
  background-color: #1E1E1E;
  height: 200px;
  border-radius: 8px;
}

.icon {
  margin-right: 5px;
}

@media (max-width: 768px) {
  .main-content {
    grid-template-columns: 1fr;
  }
}
</style>