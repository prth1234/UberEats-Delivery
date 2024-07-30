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
            name: "Chick-fil-A® Nutella Jar",
            price: 15.29,
            image: "https://b.zmtcdn.com/data/dish_photos/ff6/89221ba732134c354e5e36fc784aeff6.jpeg?fit=around|130:130&crop=130:130;*,*",
            quantity: 0,
          },
          {
            name: "Chick-fil-A® Kitkat Jar",
            price: 19.55,
            image: "https://b.zmtcdn.com/data/dish_photos/ab9/008928907d91882101e09f998d923ab9.jpeg?fit=around|130:130&crop=130:130;*,*",
            quantity: 0,
          },
          {
            name: "Chick-fil-A® ParleG Jar",
            price: 14.55,
            image: "https://b.zmtcdn.com/data/dish_photos/9a6/5687a4c934c9489c53342f80388fd9a6.jpeg?fit=around|130:130&crop=130:130;*,*",
            quantity: 0,
          },
          {
            name: "ChickMeal® Orep Jar",
            price: 13.09,
            image: "https://b.zmtcdn.com/data/dish_photos/b51/a7d5bb66b985629fcdbce8c1cb82bb51.jpeg?fit=around|130:130&crop=130:130;*,*",
            quantity: 0,
          },
          {
            name: "ChickSalad® Caramel Jar",
            price: 14.29,
            image: "https://b.zmtcdn.com/data/dish_photos/5fc/32e9fd54fb72f021de4ff143fbf825fc.jpeg?fit=around|130:130&crop=130:130;*,*",
            quantity: 0,
          },
          {
            name: "Chick-n-Macros Brownie Jar",
            price: 14.09,
            image: "https://b.zmtcdn.com/data/dish_photos/045/89a10bed2a9df5f1cc17b71cf03af045.jpeg?fit=around|130:130&crop=130:130;*,*",
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
  }
  
  .quantity-control span {
    margin: 0 6px;
  }
  </style>