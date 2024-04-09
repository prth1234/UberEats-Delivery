<template>
    <div>
      <!-- Main content here -->
      <hr class="divider">
      <footer class="uber-footer">
      
        <div class="footer-container">
            <a href="#" class="navbar-brand" style="font-size: 30px;">
              <span style="background-image: linear-gradient(135deg, #8a4ba8, #ff66c4, #282c3d); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Uber</span>
              <span style="color: #06C167;"><b> Eats</b></span>
            </a>
           
          <div class="footer-logo" style="margin-bottom: 40px;">
            
          </div>
          <div class="links-container">
            <div class="footer-links">
              <ul>
                <!-- First set of footer links -->
                <li><a href="https://play.google.com/store/apps/details?id=com.ubercab.eats">Get it on Google Play</a></li>
                <li><a href="https://help.uber.com/ubereats">Get Help</a></li>
                <li><a href="https://www.ubereats.com/gift-cards">Buy gift cards</a></li>
                <li><a href="https://restaurants.ubereats.com/">Add your restaurant</a></li>
                <li><a href="https://www.uber.com/deliver/">Sign up to deliver</a></li>
                <li><a href="https://www.ubereats.com/business">Create a business account</a></li>
              </ul>
            </div>
            <div class="footer-links">
              <ul>
                <!-- Second set of footer links -->
                <li><a href="https://www.ubereats.com/promotions">Promotions</a></li>
                <li><a href="https://www.ubereats.com/">Restaurants near me</a></li>
                <li><a href="https://www.ubereats.com/cities">View all cities</a></li>
                <li><a href="https://www.ubereats.com/country">View all countries</a></li>
                <li><a href="https://www.ubereats.com/">Pickup near me</a></li>
                <li><a href="https://www.ubereats.com/about">About Uber Eats</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="social-icons" style="margin-top: 40px;">
          <a href="#"><img src="https://www.example.com/facebook-icon.png" alt="Facebook"></a>
          <a href="#"><img src="https://www.example.com/twitter-icon.png" alt="Twitter"></a>
          <a href="#"><img src="https://www.example.com/instagram-icon.png" alt="Instagram"></a>
        </div>
        <div class="legal-text">
          <p>&copy; 2024 Uber Technologies Inc. | <a href="#">Privacy Policy</a> | <a href="#">Terms</a> | <a href="#">Pricing</a> | <a href="#">Do not sell or share my personal information</a></p>
          <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  .uber-footer {
    color: #fff;
    flex-grow: 1;
    margin-top: -3px;
  }
  
  .divider {
    border: none;
    height: 1px;
    background-color: #1d1b1b;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-logo img {
    height: 50px;

  }
  
  .links-container {
    display: flex;
    gap:80px;
    width:600px;
    max-width: 1200px;
    font-family: 'Uber Light';
color: #555050;
text-align: left;

  }
  
  .footer-links {
    margin-right: 20px;
    margin-top: 70px;
    font-size: 17px;
  }






  
  .footer-links h3 {
    color: #fff;
  }
  
  .footer-links ul {
    list-style-type: none;
    padding: 0;
  }
  
  .footer-links li {
    margin-bottom: 10px;
  }
  
  .footer-links a {
    color: #fff;
    text-decoration: none;
  }
  
  .social-icons a {
    margin-right: 10px;
  }
  
  .social-icons img {
    height: 30px;
  }
  
  .legal-text {
    margin-top: 20px;
    text-align: center;
  }

 
  </style>
  