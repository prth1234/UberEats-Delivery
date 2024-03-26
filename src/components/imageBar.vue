<template>
  <div class="container">
    <div class="image-container">
      <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/88d55f7112efe55f.webp" alt="Image 1">
      <p>Feed your employees</p>
    </div>
    <div class="image-container">
      <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/711d51ca1b458931.webp" alt="Image 2">
      <p>Your restaurant delivered</p>
    </div>
    <div class="image-container">
      <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/16522a701585873b.webp" alt="Image 3">
      <p>Deliver with Uber Eats</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 70px;
}

.image-container {
  text-align: center;
}

.image-container img {
  width: 400px; /* Adjust the width as needed */
  height: 300px; /* Adjust the height as needed */
  object-fit: cover; /* Maintain aspect ratio */
  border-radius: 8px; /* Apply border radius for rounded corners */
  margin-bottom: 10px;
  margin-right: 20px;

}

.image-container p {
  margin: 0;
  font-family: 'Uber Move', sans-serif;
  color: white;
}
</style>
