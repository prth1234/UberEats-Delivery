<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo-container">
        <a href="#" class="navbar-brand">
          <span style="background-image: linear-gradient(135deg, #8a4ba8, #ff66c4, #282c3d); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Uber</span>
          <span style="color: #06C167;"><b>Eats</b></span>
        </a>
      </div>
      <a data-testid="edit-delivery-location-button" class="location-button" href="/feed?diningMode=DELIVERY&amp;mod=deliveryDetails&amp;pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlNhbnRhJTIwQ2xhcml0YSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpKeGpWckRPR3dvQVJTTllGYy1DUFNsWSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EzNC4zOTE2NjQxJTJDJTIybG9uZ2l0dWRlJTIyJTNBLTExOC41NDI1ODYlN0Q%3D&amp;ps=1">
        <div class="location-icon">🔗</div>
        <div class="delivery-info">
          <div data-testid="delivery-address-label" class="address-label">HSR, Bengaluru is a very long text that will be truncated with an ellipsis</div>
          <span class="separator">·</span>
          <div data-test="delivery-time" class="delivery-time">Now</div>
        </div>
        
      </a>
      <ul class="nav-menu">
        <input type="checkbox" name="check-toggle" id="checkbox" hidden="">
        <label for="checkbox" class="toggle">
          <div class="toggle__circle"></div>
        </label>
        <div class="nav-links">
          <ul class="nav-menu">
            <li><a href="#" style="font-family: 'Uber Move';">Cabs</a></li>
            <li><a href="#" style="font-family: 'Uber Move';">Story</a></li>
            <li><a href="#" style="font-family: 'Uber Move';">Business</a></li>
            <li><a href="#" style="font-family: 'Uber Move';">About us</a></li>
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
  position: relative;
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

.location-button {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
}

.location-icon {
  margin-right: 10px;
  font-size: 20px;
}

.delivery-info {
  display: flex;
  align-items: center;
}

.address-label {
  font-family: 'Uber Move';
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 500px;
}

.separator {
  margin: 0 5px;
}

.delivery-time {
  font-family: 'Uber Move';
}

</style>
