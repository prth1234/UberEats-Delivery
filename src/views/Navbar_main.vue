<template>
    <nav class="navbar">
      <div class="container">
        



    


<div style="display: flex; justify-content:flex-end;">
    <input type="checkbox" id="checkbox1">
        <label for="checkbox1" class="toggle1">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label>
        <a href="#" class="navbar-brand" style="font-family: 'Uber Move'; padding-left: 20px;">
            
  <span style="background-image: linear-gradient(135deg, #8a4ba8, #ff66c4, #282c3d); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Uber</span>
  <span style="color: #06C167;"><b> Eats</b></span>
</a>
<!-- <a href="#" style="font-family: 'Uber Move';">Pickup     </a> -->
<!-- <label class="switch">
  <input type="checkbox">
  <span class="slider"></span>
</label> -->


</div>
<!-- <div class="rectangle">
        📍 Bangalore, Karnataka
    </div>
    <div class="rectangle">
        📍 Bangalore, Karnataka
    </div> -->
    <a data-testid="edit-delivery-location-button" class="be bf bg bh d4 al aq cd cl ec hu af hv hw b1 gh gi gj da db" href="/feed?diningMode=DELIVERY&amp;mod=deliveryDetails&amp;pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlNhbnRhJTIwQ2xhcml0YSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpKeGpWckRPR3dvQVJTTllGYy1DUFNsWSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EzNC4zOTE2NjQxJTJDJTIybG9uZ2l0dWRlJTIyJTNBLTExOC41NDI1ODYlN0Q%3D&amp;ps=1">
  <div class="d1 cj dz" style="margin-right: 10px; vertical-align: auto; display: flex; justify-content: 10px;">
    <svg width="16px"  height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Deliver to" role="img" focusable="false" color="#ffff">
      <path d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z" fill="#000000"></path>
    </svg>
  </div>
  <div class="spacer _8"></div>
  <div data-testid="delivery-address-label" class="hq bn bl jz" style="width: 100px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; border-radius: 500px;">Santa Clarita is a very long text that will be truncated with an ellipsis</div>
  <span class="be bf dr ds hx hr cd">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <div data-test="delivery-time" class="hq bn bl hy">Now</div>
</a>
<GoogleMaps/>


   
        <ul class="nav-menu">
            <input type="checkbox" name="check-toggle" id="checkbox" hidden="" >
        <label for="checkbox" class="toggle" style="margin-right: 15px ;">
            <div class="toggle__circle" ></div>
        </label> 
          <li><a href="#" style="font-family: 'Uber Move';">Cabs     </a></li>
          <li><a href="#" style="font-family: 'Uber Move';">Story     </a></li>
          <li><a href="#" style="font-family: 'Uber Move';">Business     </a></li>
          <li><a href="#" style="font-family: 'Uber Move';">About us     </a></li>
          <li><a href="#" style="font-family: 'Uber Move'; color: #06C167;">Uber has a New Look✨    </a></li>

        </ul>
      </div>
    </nav>
  </template>
  <script>
  import GoogleMaps from './GoogleMaps.vue'
  export default {
    data() {
      return {
        isDelivery: true, // Initial state for delivery toggle
      };
    },
    methods: {
      toggleDelivery() {
        this.isDelivery = !this.isDelivery; // Toggle between delivery and pickup
      },
      // Other methods if needed
    },
  };
  </script>
  <style scoped>
  
  .navbar {
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }
  
  .navbar-brand {
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
  }
  
  .nav-menu {
    list-style: none;
    display: flex;
  }
  
  .nav-menu li {
    margin-right: 1rem;
  }
  
  .nav-menu li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
  }
  
  .nav-menu li a:hover {
    color: #ccc; /* Change hover color if needed */
  }

  .btn-container {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.btn-color-mode-switch {
  display: inline-block;
  margin: 0px;
  position: relative;
}

.btn-color-mode-switch > label.btn-color-mode-switch-inner {
  margin: 0px;
  width: 140px;
  height: 40px;
  background-color: #fcce8a;
  border-radius: 26px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
    /*box-shadow: 0px 0px 8px 0px rgba(17, 17, 17, 0.34) inset;*/
  display: block;
}

.btn-color-mode-switch > label.btn-color-mode-switch-inner:before {
  content: attr(data-on);
  position: absolute;
  font-size: 20px;
  font-weight: 600;
  top: 7px;
  right: 20px;
  color: #222;
}

.btn-color-mode-switch > label.btn-color-mode-switch-inner:after {
  content: attr(data-off);
  width: 70px;
  height: 25px;
  background: #fff;
  border-radius: 26px;
  position: absolute;
  font-size: 20px;
  display: flex;
  justify-content: center;
  left: 2px;
  top: 2px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 6px -2px #111;
  padding: 5px 0px;
  color: #222;
  font-weight: 600;
}

.btn-color-mode-switch input[type="checkbox"] {
  cursor: pointer;
  width: 50px;
  height: 25px;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  margin: 0px;
}

.btn-color-mode-switch input[type="checkbox"]:checked + label.btn-color-mode-switch-inner {
  background-color: #fcce8a;
}

.btn-color-mode-switch input[type="checkbox"]:checked + label.btn-color-mode-switch-inner:after {
  content: attr(data-on);
  left: 68px;
}

.btn-color-mode-switch input[type="checkbox"]:checked + label.btn-color-mode-switch-inner:before {
  content: attr(data-off);
  right: auto;
  left: 20px;
}
.gh {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px; /* Adjust margin as needed */
}

.be, .bg {
  padding: 10px 20px; /* Adjust padding as needed */
  color: #fff; /* Button text color */
  border-radius: 5px; /* Button border radius */
  cursor: pointer;
  transition: background-color 0.3s ease-in-out; /* Smooth transition for hover effect */
}


/* Your scoped styles for the Navbar */
/* Styles for the custom toggle switch */
.toggle-switch {
  display: flex;
  align-items: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px; /* Adjust width as needed */
  height: 34px; /* Adjust height as needed */
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px; /* Adjust height as needed */
  width: 26px; /* Adjust width as needed */
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #ad21f3; /* Toggle switch active background color */
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3; /* Toggle switch focus style */
}

input:checked + .slider:before {
  transform: translateX(26px); /* Adjust translation distance as needed */
}

.slider.round {
  border-radius: 34px;
}






.toggle {
  --bg-toggle: hsl(0, 0%, 96%);
  --bg-circle: hsl(96, 85%, 34%);
  width: 60px; /* Adjust the width as needed */
  height: 30px; /* Adjust the height as needed */
  background-color: var(--bg-toggle);
  box-shadow: 0 .2rem 3rem 0 rgba(125, 125, 125, 0.25);
  border-radius: 1.5rem; /* Adjust border-radius to maintain roundness */
  display: flex;
  align-items: center;
  padding: 0 .2rem;
  transition: background-color 400ms;
}


.toggle__circle {
  width: 24px; /* Adjust the width as needed */
  height: 24px; /* Adjust the height as needed */
  cursor: pointer;
  background-color: var(--bg-circle);
  border-radius: 50%;
  position: relative;
  transition: margin 400ms ease-in-out, background-color 1000ms;
}

.toggle__circle::after,
.toggle__circle::before {
  content: '';
  position: absolute;
  background-color: var(--bg-toggle);
  bottom: 118%;
  transform-origin: bottom left;
}

.toggle__circle::before {
  width: 6px; /* Adjust the width as needed */
  height: 10px; /* Adjust the height as needed */
  left: 32%;
  border-radius: 0% 100% 0% 100% / 0% 27% 73% 100%;
  transform: translateX(-70%) rotate(-2deg);
}

.toggle__circle::after {
  width: 12px; /* Adjust the width as needed */
  height: 15px; /* Adjust the height as needed */
  left: 48%;
  border-radius: 100% 0% 100% 0% / 100% 0% 100% 0%;
  transform: rotate(-20deg);
}

#checkbox:checked + .toggle > .toggle__circle {
  margin-left: calc(60px - 24px); /* Adjusted margin calculation */
}

#checkbox:checked + .toggle {
  --bg-toggle: hsl(96, 85%, 34%);
  --bg-circle: hsl(0, 0%, 96%);
}

#checkbox {
  display: none;
}

.toggle1 {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .3s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: white;
  border-radius: 5px;
  transition-duration: .3s;
}

#checkbox1:checked + .toggle1 .bars {
  margin-left: 13px;
}

#checkbox1:checked + .toggle1 #bar2 {
  transform: rotate(135deg);
  margin-left: 0;
  transform-origin: center;
  transition-duration: .3s;
}

#checkbox1:checked + .toggle1 #bar1 {
  transform: rotate(45deg);
  transition-duration: .3s;
  transform-origin: left center;
}

#checkbox1:checked + .toggle1 #bar3 {
  transform: rotate(-45deg);
  transition-duration: .3s;
  transform-origin: left center;
}
.rectangle {
    width: 196px; /* Width of the rectangle */
    height: 28px; /* Height of the rectangle */
    background-color: rgb(26, 26, 26); /* Background color of the rectangle */
    border: 1px solid #ccc; /* Border around the rectangle */
    border-radius: 500px; /* Border radius to make corners rounded */
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Shadow effect for the rectangle */
    margin: 20px; /* Margin around the rectangle */
    padding: 10px; /* Padding inside the rectangle */
    text-align: center; /* Center text horizontally */
    vertical-align: center;
    line-height: 28px; /* Center text vertically (same as height of rectangle) */
    font-family: 'Uber Move'; /* Font family for text */
    font-size: 18px; /* Font size for text */
}

















  </style>
  