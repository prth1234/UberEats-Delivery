<template>
    <div class="main">
    <div class="links">
      <h2 class="title">Order</h2>
      <div class="content">
        <p>Our Story</p>
        <p>See Prices</p>
        <p>Explore Night</p>
        <p>Green Delivery</p>
      </div>
    </div>
</div>
  </template>
  
  <style scoped>
  .links {
    display: flex;
    justify-content: space-between; /* Distribute items evenly, pushing first item to the left and last item to the right */
    align-items: center; /* Align items vertically in the center */
    font-family: 'Uber Move';
    padding: 10px; /* Optional: Add some padding to the container */
  }

  .main{
    position: relative;
    top:-400px
  }
  
  .title {
    font-family: 'Uber Move';
    margin-right: auto; /* Push the "Order" title to the left */
  }
  
  .content {
    display: flex;
    margin-left:600px;
  }
  
  /* Style for the paragraphs */
  p {
    margin-right: 20px; /* Add space between the paragraphs */
  }
  </style>
  