<template>


<div class="top-picks-slider">
          <div class="header">
            <div class="header-container">
              <h2
                style="
                  text-align: left;
                  font-family: Uber Move;
                  font-size: 30px;
                "
              >
              </h2>
          
            </div>
          </div>
          <div class="slider-container">
            <div
              class="slides-wrapper"
              :style="{ transform: `translateX(-${currentIndex * 25}%)` }"
            >
              <div class="slide" v-for="(item, index) in items" :key="index">
                <div class="item-image">
                  <img :src="item.image" :alt="item.name" class="img-stuff" />
                  <span v-if="item.rank" class="rank-badge">{{
                    item.rank
                  }}</span>
                </div>
                <div class="item-details">
                  <div class="item-info">
                    <h3>{{ item.name }}</h3>
                    <p class="price">${{ item.price.toFixed(2) }}</p>
                  </div>
                  <button class="cart-button" @click="addToCart(index)">
                    <span v-if="item.quantity > 0">+ </span>
                    <span v-else>+</span>
                  </button>
                  <div v-if="item.quantity == 0">0</div>

                  <div v-if="item.quantity > 0">{{ item.quantity }}</div>

                  <button class="cart-button" @click="removeFromCart(index)">
                    <span>-</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>


<script>
export default{
    data(){
        return {
            items: [
        {
          name: "Chick-fil-A® Nuggets Meal",
          price: 15.29,
          image:
            "https://www.kitchenathoskins.com/wp-content/uploads/2020/09/air-fryer-chicken-nuggets-28.jpg",
          rank: " ＃ 1 most liked",
          quantity: 0,
        },
        {
          name: "Chick-fil-A® Nuggets",
          price: 8.55,
          image:
            "https://girlscangrill.com/wp-content/uploads/2015/12/copycat-chick-fil-a-chicken-nuggets-500x500.jpg",
          rank: "＃ 2 most liked",
          quantity: 0,
        },
        {
          name: "Spicy Southwest Salad",
          price: 14.55,
          image:
            "https://realhousemoms.com/wp-content/uploads/Copycat-Chick-Fil-A-Spicy-Southwest-Salad-RECIPE-CARD.jpg",
          rank: "＃ 3 most liked",
          quantity: 0,
        },
        {
          name: "Chick-fil-A ChickMeal® Meal",
          price: 13.09,
          image:
            "https://i.ibb.co/8XBLVc3/chick-fil-a-9jv-1200xx2918-2918-185-0.jpg",
          quantity: 0,
        },

        {
          name: "Chick-fil-A ChickSalad® Meal",
          price: 13.09,
          image:
            "https://summeryule.com/wp-content/uploads/2022/04/southwest-salad-chick-fil-a.jpeg",
          quantity: 0,
        },

        {
          name: "Chick-fil-A Chick-n-Macros Meal",
          price: 13.09,
          image:
            "https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Daypart%20Hero/Winter23/Winter23-DotCom-ChickenSandwich-D_720x748.jpg?h=748&w=720&la=en",
          quantity: 0,
        },
        {
          name: "Chick-fil-A Waffles",
          price: 13.09,
          image:
            "https://assets.entrepreneur.com/content/3x2/2000/20180403185342-12030542-10153912476520101-9019529450634602395-o.jpeg?format=pjeg&auto=webp&crop=1:1",
          quantity: 0,
        },
      ],
      currentIndex: 0,
        }
    }
}


</script>


<style scoped>
.restaurant-detail {
  font-family: Arial, sans-serif;
  max-width: 1700px;
  margin: 0 auto;
  background-color: #101010;
  color: #ffffff;
  width: 1300px;
}

.poster {
  position: relative;
  width: 100%;
  height: 300px; /* Adjusted height */
  overflow: hidden;
  border-radius: 8px 8px 0 0;
}

.poster img {
  width: 100%;
  height: 100%; /* Make sure the image covers the new height */
  object-fit: cover;
}

.poster-actions {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
}

.poster-actions button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
}
.divider {
  border: none;
  height: 2px;
  background-color: #ebeaea;
  width: 100%;
}

.content {
  padding: 0px;
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
  text-align: left;
}

.restaurant-info {
  font-size: 14px;
  text-align: left;
}

.rating {
  font-weight: bold;
}

.info-link {
  color: #5557ca;
  text-decoration: underline;
}

.delivery-status {
  color: #ff4500;
  margin-bottom: 10px;
}

.group-order {
  float: right;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  width: 120px;
  background-color: #eee;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: black;
  font-family: "Uber Move";
}

.group-order svg {
  margin-right: 8px;
  transform: scale(0.7);
}

.description {
  margin-top: 20px;
  font-size: 14px;
  text-align: left;
}

.favorite svg path {
  stroke: black;
  fill: white;
}

.favorite svg path.filled {
  fill: black;
  stroke: black;
}

.notification {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  z-index: 1000;
}

.notification img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  width: 500px;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.restaurant-details-img {
  max-width: 100%;
  height: auto;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.popup-header h2 {
  font-family: "Uber Move";
  color: black;
  margin: 0;
}

.close-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: black;
}

.popup-body {
  display: flex;
  flex-direction: column;
}

#map {
  height: 200px; /* Adjust the height as needed */

  width: 100%; /* The width is the width of the container */
}
.address {
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
}

.address svg {
  margin-right: 10px;
  transform: scale(0.7);
}
.opens-at {
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: -7px;
  margin-bottom: -7px;
}

.opens-at svg {
  margin-right: 10px;
  margin-top: -10px;
  margin-bottom: -10px;
  transform: scale(0.7);
}
.information {
  margin-bottom: 15px;
}
.top-picks-slider {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  transform: scale(0.7);
  align-items: left;
  margin-left: -180px;
  margin-top: -125px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.slider-container {
  overflow: hidden;
  width: 100%;
  text-align: left;
}

.slides-wrapper {
  display: flex;
  transition: transform 0.3s ease;
  width: fit-content;
}

.slide {
  flex: 0 0 25%;
  padding: 10px;
  box-sizing: border-box;
  width: 25%;
}

.item-image {
  position: relative;
}

.item-image img {
  width: 100%;
  border-radius: 8px;
}

.rank-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
}

.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-info {
  flex-grow: 1;
  text-align: left;
}

h3 {
  font-size: 23px;
}

.price {
  font-weight: bold;
  margin-top: 0;
}

.add-button {
  background-color: transparent;
  border: none;
  color: green;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  margin-left: 10px;
}

.rank-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
}
.more1 {
  padding: 0px;
  background-color: transparent;
  color: #5557ca;
}

h3 {
  font-size: 16px;
}

.price {
  font-weight: bold;
  margin-top: -10px;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.nav-button {
  display: flex;
  border-radius: 50%;
}

.nav-buttons {
  border-radius: 100px; /* Half of width/height to make it round */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #1a1a1a; /* Or any color you prefer */
  border: none;
  cursor: pointer;
  margin: 0 5px; /* Add some space around the buttons */
  margin-right: 10px;
}

.nav-buttons svg {
  width: 24px;
  height: 24px;
}

.nav-buttons svg path {
  fill: rgb(255, 255, 255); /* Use currentColor to inherit the button's color */
}
.nav-button.prev {
  border-radius: 1000px;
}
.nav-button.next {
  border-radius: 1000px;
}
.cart-button {
  background-color: transparent;
  border: none;
  color: green;
  font-size: 18px;
  cursor: pointer;
  padding: 0px;
  width: 40px; /* Adjust width */
  height: 40px; /* Adjust height */
  border-radius: 50%; /* Make the button a circle */
  margin-left: 5px;
  margin-right: 5px;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-button:hover {
  background-color: rgba(0, 128, 0, 0.1);
}
.img-stuff {
  width: 100%;
  height: 100%;
}

.infobutton {
  background-color: transparent;
  padding: 0px;
  color: #5557ca;
}

.page-layout {
  display: flex;
}

.sidebar {
  width: 270px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  background-color: transparent;
  padding: 25px 0px 0px 0px;
  text-align: left;
  font-size: 25px;
  font-family: Uber Move;
  margin-top: -100px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin-left: 0px;
}

.sidebar li {
  margin-bottom: 30px;
  margin-left: 0px;
}

.sidebar a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.sidebar a.active {
  /* border: 1px solid grey; */
  background-color: #1a1a1a;
  padding: 10px 0px 10px 0px;
  border-radius: 0px;
  width: 100%;
  display: block;
  position: relative; /* added */
}

.sidebar a.active::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 5px; /* adjust width as needed */
  background-color: rgb(54, 54, 54);
}
.content {
  flex-grow: 1;
  padding: 20px;
}

section {
  min-height: 500px; /* Adjust as needed to ensure scrolling */
}
.container-rect {
  display: flex;
  justify-content: space-between; /* Adjust spacing as needed */
  gap: 6px; /* Space between rectangles */
  padding: 0px; /* Optional padding for the container */
  margin-bottom: 60px;
}

.rectangle {
  width: 220px; /* Adjust the width as needed */
  height: 150px; /* Adjust the height as needed */
  background-color: transparent;
  border: 0.5px solid;
  border-color: #3a3a3a; /* Rectangle color */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white; /* Text color */
  font-size: 24px; /* Text size */
  border-radius: 8px; /* Optional rounded corners */
  
}
.testimonial-text {
  font-size: 16px;
  margin-bottom: 18px;
  font-family: Uber Move Light;
}

.testimonial-info {
  font-size: 12px;
  color: #666;
}

.sections-container {
  display: flex;
  flex-direction: column;
  gap: 30px; /* Increased gap between sections */
}

.dynamic-section {
  display: flex;
  flex-direction: column;
  min-height: auto; /* Remove fixed height */
}
</style>