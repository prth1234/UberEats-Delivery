<template>
    <div class="main-content">
      <!-- Left half with text -->
      <div class="text-content">
        <h2>
          <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_48,h_48/v1542249426/assets/4e/7ed09b-e0b3-423f-ab4f-23bec03d847c/original/lightning-filled.svg" alt="Charging" role="presentation" aria-hidden="true" class="icon-white">
          Charging Electric vehicles
        </h2>
        <p>Drivers on Uber Green help cities move more people with rides in electric cars, including hybrid electric vehicles, plug-in hybrids, and 100% battery electric vehicles.</p>
        <h2>
          <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_48,h_48/v1542249373/assets/75/df204b-0da4-4504-bc68-97433b937258/original/leaf-filled.svg" alt="Earth-friendly" role="presentation" aria-hidden="true" class="icon-white">
          Earth-friendly Cleaner mobility
        </h2>
        <p>In many cities around the world, more electric mobility is cleaner mobility. This means less local pollution and fewer climate-related emissions for cities, especially where electricity grids include an increasing share of renewable energy.</p>
      </div>
      
      <!-- Right half with image and emoji -->
      <div class="image-content">
        <div class="large">🌱</div> <!-- Move the 🌱 emoji above the image -->
        <img src="https://i.ibb.co/gRJcyYC/Product-Icon-removebg.png" alt="Uber Green" class="product-image">
      </div>
    </div>
  </template>
  
  <style scoped>
  .main-content {
    display: flex;
  }
  
  .text-content {
    flex: 1; /* Take up remaining space */
    padding-right: 10px; /* Adjust padding as needed */
    text-align: left;

  }
  
  .image-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px; /* Adjust padding as needed */
  }
  
  .product-image {
    max-width: 100%; /* Ensure image doesn't overflow */
    margin-top: -110px;
  }
  
  .large {
    font-size: 3rem; /* Adjust font size */
    margin-top:-10px;
  }
  
  .icon-white {
    margin-right: 10px; /* Adjust margin as needed */
    filter: invert(1); /* Invert the color to make it white */
  }
  </style>
  