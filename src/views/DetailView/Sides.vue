<template>
    <div class="picked-for-you">
      <div class="grid-container">
        <div class="grid-item" v-for="(item, index) in items" :key="index">
          <div class="item-content">
            <img :src="item.image" :alt="item.name" class="item-image" />
            <div class="item-info">
              <h3 style="text-align: left;">{{ item.name }}</h3>
              <p class="price" style="text-align: left;" >${{ item.price.toFixed(2) }}</p>
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
            name: "Chick-fil-A® OG Waffles",
            price: 10.29,
            image: "https://www.cfacdn.com/img/order/menu/Online/Sides%26treats/Medium_Lowered_1217shoot_1080x1080.png",
            quantity: 0,
          },
          {
            name: "Chick-fil-A® Fruit Cup",
            price: 8.55,
            image: "https://www.cfacdn.com/img/order/menu/Online/Sides%26treats/Jul19_OrganicAussieGreekYogurtParfaitCupGranola_pdp.png",
            quantity: 0,
          },
          {
            name: "Side Salad",
            price: 14.55,
            image: "https://www.chick-fil-a.com/-/media/images/cfacom/menu-items/sidesalad_desk.png",
            quantity: 0,
          },
          {
            name: "ChickMeal® Waffles Chips",
            price: 13.09,
            image: "https://www.cfacdn.com/img/order/menu/Online/Drinks/chips_1080.png",
            quantity: 0,
          },
          {
            name: "ChickSalad® Noodle Soup",
            price: 13.09,
            image: "https://www.cfacdn.com/img/order/menu/Online/Sides%26treats/Chicken-Noodle-Soup_Small_PDP.png",
            quantity: 0,
          },
          {
            name: "Chick-n-Macros Kale",
            price: 13.09,
            image: "https://www.cfacdn.com/img/order/menu/Online/Sides%26treats/kaleCrunch_lg_pdp.png",
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
    height: 80px;
  }
  
  .item-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
  
  .item-info {
    flex-grow: 1;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .item-info h3 {
    font-size: 12px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .price {
    font-size: 11px;
    color: #888;
    margin: 2px 0;
  }
  
  .quantity-control {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 11px;
  }
  
  .cart-button {
  background-color: transparent;
  color: green;
  border: none;
  border-radius: 50%; /* This will make the button a circle */
  width: 20px; /* Set the width and height to the same value */
  height: 20px; /* Set the width and height to the same value */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 11px;
  margin: 0 4px;
}
  
  .quantity-control span {
    margin: 0 4px;
  }
  </style>