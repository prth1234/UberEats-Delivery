<template>
  <div class="main-content">
    <!-- Left half with text -->
    <div class="text-content">
      <h2>
       ❏ &nbsp;&nbsp;&nbsp;&nbsp;Register with Uber Eats
      </h2>
      <p>Drivers on Uber Green help cities move more people with rides in electric cars, including hybrid electric vehicles, plug-in hybrids, and 100% battery electric vehicles.</p>
      <h2>
        ❏ &nbsp;&nbsp;&nbsp;&nbsp; Background Check
      </h2>
      
      <p style="margin-bottom: 35px;">In many cities around the world, more electric mobility is cleaner mobility. This means less local pollution and fewer climate-related emissions for cities, especially where electricity grids include an increasing share of renewable energy.</p>
      
      <h2>
        ❏ &nbsp;&nbsp;&nbsp;&nbsp;Accept Delivery Requests
      </h2>
      <p>Drivers on Uber Green help cities move more people with rides in electric cars, including hybrid electric vehicles, plug-in hybrids, and 100% battery electric vehicles.</p>
      <h2>
        ❏ &nbsp;&nbsp;&nbsp;&nbsp;Navigate to Pickup Location
      </h2>
      
      <p style="margin-bottom: 35px;">In many cities around the world, more electric mobility is cleaner mobility. This means less local pollution and fewer climate-related emissions for cities, especially where electricity grids include an increasing share of renewable energy.</p>
      
      <h2>
        ❏ &nbsp;&nbsp;&nbsp;&nbsp; Pick Up the Order and Deliver !!!
      </h2>
      <p>Drivers on Uber Green help cities move more people with rides in electric cars, including hybrid electric vehicles, plug-in hybrids, and 100% battery electric vehicles.</p>
    

      <!-- Use router-link to navigate to "/joinus" -->
    </div>
    
    
    <!-- Right half with image and emoji -->
    <div class="image-content">
      <!-- <div class="large">🌱</div> Move the 🌱 emoji above the image -->
      <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_956/v1696243800/assets/62/3b076a-3406-4f3b-89de-2cf1a2ccb907/original/uber-one.jpg" alt="Uber Green" class="product-image">
    </div>

    
  </div>
  <router-link to="/sign-in-green"><u>Green Sign In</u></router-link>

</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

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
  width:450px;
  height:450px;
  margin-top: 180px;
  margin-left:100px;
}

.product-image {
  max-width: 100%; /* Ensure image doesn't overflow */
  margin-top: -110px;
}

.large {
  font-size: 3rem; /* Adjust font size */
  margin-top: -10px;
}

.icon-white {
  margin-right: 10px; /* Adjust margin as needed */
  filter: invert(1); /* Invert the color to make it white */
}

.join-button {
  margin-top: 20px; /* Adjust margin as needed */
  background-color: #06C167; /* Button color */
  color: #fff; /* Text color */
  padding: 10px 20px; /* Adjust padding as needed */
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

.join-button:hover {
  background-color: #05a55e; /* Hover color */
}
</style>
