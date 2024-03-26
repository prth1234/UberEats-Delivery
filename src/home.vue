
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Logo from './components/logo.vue'
import DeliveryForm from './components/DeliveryForm.vue'
import Navbar from './components/navbar.vue'
import ImageBar from './components/imageBar.vue'
import './style.css'
</script>

<template>
  <Navbar/>
<Logo/>
  <!-- <HelloWorld msg= "Best Food Delivery App in India 🍔🍱"/> -->
  <Logo/>
  <DeliveryForm/>
  
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
