<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<div class="container">
    <h1 class="ah-logo">
      Uber 
    </h1>

    <div class="card">
      <!-- Your card content here -->
    </div>
  </div>

  <div class="card">


   
  </div>

 
</template>

<style scoped>
.read-the-docs {
  color: #661212;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  align-items: flex-start; /* Center content horizontally */
  height: 0vh; /* Set the height of the container to full viewport height */
}

</style>
