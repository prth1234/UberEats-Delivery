<template>
    <div class="main">
      <div class="links">
        <h2 class="title"  >Sign Up For a Greener World</h2>
        <div class="content">
          <p>Order Food</p>
          <p>Explore Night Delivery</p>
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
  
  .main {
    position: relative;
    top: -30px;
  }
  
  .title {
    font-family: 'Uber Move';
    white-space: nowrap; /* Prevent text from wrapping to the next line */
    overflow: hidden; /* Hide any text that overflows */
    text-overflow: ellipsis; /* Show ellipsis (...) for overflowed text */
    margin-right: auto; /* Push the "Order" title to the left */
  }
  
  .content {
    display: flex;
    margin-left: 20px; /* Adjust margin as needed */
  }
  
  /* Style for the paragraphs */
  p {
    margin-right: 20px; /* Add space between the paragraphs */
  }
  </style>
  