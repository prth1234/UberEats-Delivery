<template>
    <div class="star-rating">
      <span
        v-for="star in stars"
        :key="star"
        class="star"
        :class="{ highlighted: star <= rating }"
        @click="setRating(star)"
      >&#9733;</span>
    </div>
    <p>Over {{rating}}</p>
  </template>
  
  <script>
  export default {
    name: 'StarRating',
    data() {
      return {
        stars: [1, 2, 3, 4, 5],
        rating: 2,
      };
    },
    methods: {
      setRating(star) {
        this.rating = star;
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
  }
  
  .star-rating {
    font-size: 2rem;
    cursor: pointer;
  }
  
  .star {
    color: rgb(254, 254, 254);
    -webkit-text-stroke: 1px black;
    transition: color 0.2s;
  }
  
  .star.highlighted {
    color: black;
  }
  </style>
  