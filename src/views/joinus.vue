<template>
    <div class="body">
      <div class="navbar">
        <hr class="divider">
        <Navbar/>
      </div>
  
      <Barrr2/>
      <ContentGreen2/>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import Navbar from './Navbar2.vue';
  import Barrr2 from './barrr2.vue';
  import ContentGreen2 from './Content-joinus.vue';
  
  const router = useRouter();
  </script>
  
  <style scoped>
  /* Use body tag as the root element to apply background */
  
  .body {
    /* background-image: url('https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1705092393/assets/b8/6388c9-17aa-4be7-a5fb-7d9f268f5a83/original/Uber-Eats-gift-cards.png');
    background-size: cover; */
    background-repeat: no-repeat;
    font-family: 'Uber Move';
    text-align: left;
    margin: 0; /* Remove default body margin */
    padding: 0; /* Remove default body padding */
  }


  
  .navbar {
    /* Your navbar styles here */
  }
  
  .divider {
    border: none;
    height: 1px;
    background-color: #1d1b1b;
    position: relative;
    top: -20px;
  }
  
  /* Additional styles for your components */
  </style>
  