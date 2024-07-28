<template>
    <div class="top-picks-slider">
      <h2>Featured items</h2>
      <div class="slider-container">
        <button class="nav-button prev" @click="prevSlide">&lt;</button>
        <div class="slides-wrapper">
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
        <button class="nav-button next" @click="nextSlide">&gt;</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TopPicksSlider',
    data() {
      return {
        items: [
          { name: 'Chick-fil-A® Nuggets Meal', price: 15.29, image: 'path-to-nuggets-meal-image.jpg', rank: '#1 most liked' },
          { name: 'Chick-fil-A® Nuggets', price: 8.55, image: 'path-to-nuggets-image.jpg', rank: '#2 most liked' },
          { name: 'Spicy Southwest Salad', price: 14.55, image: 'path-to-salad-image.jpg', rank: '#3 most liked' },
          { name: 'Chick-fil-A Chick-n-Minis® Meal', price: 13.09, image: 'path-to-minis-meal-image.jpg' },
        ],
        currentIndex: 0
      }
    },
    methods: {
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      }
    }
  }
  </script>
  
  <style scoped>
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
    display: flex;
    align-items: center;
  }
  
  .slides-wrapper {
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  
  .slide {
    flex: 0 0 25%;
    padding: 10px;
    box-sizing: border-box;
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
  
  .nav-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  </style>