

<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import Logo from './components/logo.vue'
import DeliveryForm from './components/DeliveryForm.vue'
import Navbar from './components/navbar.vue'
import ImageBar from './components/imageBar.vue'
import Home from './components/home.vue'
</script>

<template>
<Home/>
  
</template>

<style scoped>

</style> -->


<template>
  <div>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>