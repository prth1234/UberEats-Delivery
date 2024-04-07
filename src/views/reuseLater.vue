<template>
  <div class="content-main">
    <p style="color:rgb(255, 255, 255)">Hello Main</p>
    <Button label="Submit" class="btn" />
    <Button label="Submit" icon="pi pi-check" />
  </div>
</template>

<script setup>
import Button from 'primevue/button';
</script>

<style scoped>
.content-main {
  background-color: #1a1a1a;
  font-family: "Uber Move", sans-serif;
  width: 100%;
  height: 8rem; /* Specify the height with a unit like 'rem' */
  display: flex;
}

.btn {
  background-color: white;
  color: #1a1a1a;
}
</style>

<script>
export default {
  name: 'HelloMain'
}
</script>
