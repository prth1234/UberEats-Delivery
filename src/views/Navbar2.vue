<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo-container">
        <a href="#" class="navbar-brand">
          <span style="color: white;"><b>Uber</b></span>
          <span style="color: #06C167;font-family: 'Uber Move';"><b> Green</b></span>
        </a>
      </div>
       
      <ul class="nav-menu">
        <div class="nav-links">
          <ul class="nav-menu">
            <li><a href="#" style="font-family: 'Uber Move'; ">Ride</a></li>
            <li><a href="#" style="font-family: 'Uber Move';">Drive</a></li>
            <li><a href="#" style="font-family: 'Uber Move';">Business</a></li>
            <li><a href="#" style="font-family: 'Uber Move';">Uber Eats</a></li>
            <li><a href="#" style="font-family: 'Uber Move'; color: #06C167;">Uber has a New Look✨</a></li>
          </ul>
        </div>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: transparent;
  position: fixed; /* Position fixed to stick to the top */
  top: -17px; /* Stick to the top of the viewport */
  left: 0;
  right: 0;
  z-index: 1000;
  height: 7vh;
  width: 100%; /* Take full width */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow */
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.logo-container{
  left: -100px;
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
</style>
