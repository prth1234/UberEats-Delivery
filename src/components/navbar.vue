<template>
    <nav class="navbar">
      <div class="container">
        <a href="#" class="navbar-brand" style="font-family: 'Uber Move';">
  <span style="background-image: linear-gradient(135deg, #8a4ba8, #ff66c4, #282c3d); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Uber</span>
  <span style="color: #06C167;"><b> Eats</b></span>
</a>
        <ul class="nav-menu">
          <li><a href="#" style="font-family: 'Uber Move';">Cabs     </a></li>
          <li><a href="#" style="font-family: 'Uber Move';">Story     </a></li>
          <li><a href="#" style="font-family: 'Uber Move';">Business     </a></li>
          <li><a href="#" style="font-family: 'Uber Move';">About us     </a></li>
          <li><a href="#" style="font-family: 'Uber Move'; color: #06C167;">Uber has a New Look✨    </a></li>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><title>Cart</title><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 18H21l2-12.5H6.5l-.5-3H.9v3h2.5L5.5 18Zm14-9.5-1 6.5H8L7 8.5h12.5ZM7.5 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor"></path></svg>

        </ul>
      </div>
    </nav>
  </template>
  
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
  </style>
  