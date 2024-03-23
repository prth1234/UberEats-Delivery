<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1 class="ah-heading">{{ msg }}</h1>
  <div class="container" style="margin-bottom: 150px;"></div>


 
</template>

<style scoped>
.read-the-docs {
  color: #661212;
}
</style>
