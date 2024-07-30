<template>
    <div class="picked-for-you">
      <div class="grid-container">
        <div class="grid-item" v-for="(item, index) in items" :key="index">
          <div class="item-content">
            <div class="image-container">
              <img :src="item.image" :alt="item.name" class="item-image" />
            </div>
            <div class="item-info">
              <h3>{{ item.name }}</h3>
              <p class="price">${{ item.price.toFixed(2) }}</p>
              <div class="quantity-control">
                <button class="cart-button" @click="addToCart(index)">+</button>
                <span>{{ item.quantity }}</span>
                <button class="cart-button" @click="removeFromCart(index)">-</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        items: [
          {
            name: "Chick-fil-A® OG Ice Tea",
            price: 10.29,
            image: "https://www.cfacdn.com/img/order/menu/Online/Drinks/tea_pdp.png",
            quantity: 0,
          },
          {
            name: "Chick-fil-A® Lemonade",
            price: 8.55,
            image: "https://www.cfacdn.com/img/order/menu/Online/Drinks/lemonade_pdp.png",
            quantity: 0,
          },
          {
            name: "Sun Joy",
            price: 14.55,
            image: "https://www.cfacdn.com/img/order/menu/Mobile/Beverages/Menu%20Item/Sunjoy_SIMP_1080x1080.png",
            quantity: 0,
          },
          {
            name: "ChickMeal® Iced Coffee",
            price: 13.09,
            image: "https://www.cfacdn.com/img/order/menu/Online/Drinks/2022IcedCoffee_1080x1080.png",
            quantity: 0,
          },
          {
            name: "Coca Cola",
            price: 13.09,
            image: "https://www.cfacdn.com/img/order/COM/Menu_Refresh/Drinks/Drinks%20PDP/_0000s_0022_Feed_Menu_0000_Drinks_Coca-cola.png",
            quantity: 0,
          },
          {
            name: "Diet Coke",
            price: 13.09,
            image: "https://www.cfacdn.com/img/order/COM/Menu_Refresh/Drinks/Drinks%20PDP/_0000s_0022_Feed_Menu_0000_Drinks_Coca-cola.png",
            quantity: 0,
          },
        ],
      };
    },
    methods: {
      addToCart(index) {
        this.items[index].quantity++;
      },
      removeFromCart(index) {
        if (this.items[index].quantity > 0) {
          this.items[index].quantity--;
        }
      },
    },
  };
  </script>
 <style scoped>
 .picked-for-you {
   font-family: Arial, sans-serif;
   max-width: 1200px;
   margin: 0 auto;
   margin-bottom: 70px;
 }
 
 .grid-container {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 10px;
 }
 
 .grid-item {
   border: 1px solid #202020;
   border-radius: 8px;
   overflow: hidden;
 }
 
 .item-content {
   display: flex;
   height: 100px;
 }
 
 .image-container {
   width: 30%; /* Changed from 25% to 30% */
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: transparent;
 }
 
 .item-image {
   max-width: 100%;
   max-height: 100%;
   object-fit: contain;
 }
 
 .item-info {
   flex-grow: 1;
   width: 70%; /* Changed from 75% to 70% */
   padding: 10px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-left: 15px;

 }
 
 .item-info h3 {
   font-size: 14px;
   margin: 0;
   text-align: left;
 }
 
 .price {
   font-size: 12px;
   color: #888;
   margin: 4px 0;
   text-align: left;
 }
 
 .quantity-control {
   display: flex;
   justify-content: flex-start;
   align-items: center;
   font-size: 12px;
 }
 
 .cart-button {
   background-color: transparent;
   color: green;
   border: none;
   border-radius: 50%;
   width: 24px;
   height: 24px;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   font-size: 14px;
   margin: 0 4px;
   margin-left: 0px;
 }
 
 .quantity-control span {
   margin: 0 6px;
 }
 </style>