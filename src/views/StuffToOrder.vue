<template>
    <div class="top-picks-slider">
      <div class="header">
        <div class="header-container">
          <h2 style="text-align: left; font-family: Uber Move; font-size: 30px;"></h2>
        </div>
      </div>
      <div class="slider-container">
        <div class="slides-wrapper">
          <div class="slide" v-for="(item, index) in items" :key="index">
            <div class="item-image">
              <img :src="item.image" :alt="item.name" class="img-stuff" />
              <span v-if="item.rank" class="rank-badge">{{ item.rank }}</span>
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
    },
    methods:{
        addToCart(index) {
      this.items[index].quantity++;
    },
    removeFromCart(index) {
      if (this.items[index].quantity > 0) {
        this.items[index].quantity--;
      }
    },
    }
}


</script>

<style scoped>
.top-picks-slider {
  font-family: Arial, sans-serif;
  max-width: 100%; /* Allow full width */
  margin: 0 auto;
  overflow: hidden;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.slider-container {
  overflow-x: scroll; /* Enable horizontal scrolling */
  display: flex;
  width: 100%;
  text-align: left;
  padding-bottom: 10px; /* Add some padding for better UX */
}

.slides-wrapper {
  display: flex;
  width: auto; /* Allow flexible width */
}

.slide {
  flex: 0 0 auto; /* Maintain item width */
  width: 300px; /* Set the width for each slide */
  padding: 10px;
  box-sizing: border-box;
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
  font-size: 16px;
}

.price {
  font-weight: bold;
  margin-top: -10px;
}

.cart-button {
  background-color: transparent;
  border: none;
  color: green;
  font-size: 18px;
  cursor: pointer;
  padding: 0px;
  width: 20px;
  height: 20px;
  border-radius: 30%;
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
  height: auto;
}
</style>
