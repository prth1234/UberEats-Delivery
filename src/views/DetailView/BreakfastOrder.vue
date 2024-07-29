<template>
    <div class="picked-for-you">
      <div class="grid-container">
        <div class="grid-item" v-for="(item, index) in items" :key="index">
          <div class="item-content">
            <div class="item-details">
              <div class="item-info">
                <img :src="item.image" :alt="item.name" class="item-image" />
                <div>
                  <h3>{{ item.name }}</h3>
                  <p class="price">${{ item.price.toFixed(2) }}</p>
                  <p class="rank">{{ item.rank }}</p>
                </div>
              </div>
              <div class="quantity-control">
                <button class="cart-button" @click="addToCart(index)">
                  <span v-if="item.quantity > 0">+</span>
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
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          {
            name: "Chick-fil-A® OG Burger",
            price: 10.29,
            image:
              "https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/PLP%20updates/Maple%20Pepper%20Bacon/CFA_Summer24_MaplePepperBacon_Bun_WebPLP_Ingredients_200x200.png_master.png",
            rank: "＃ 1 most ordered",
            quantity: 0,
          },
          {
            name: "Chick-fil-A® Bacon",
            price: 8.55,
            image:
              "https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/PLP%20updates/Maple%20Pepper%20Bacon/CFA_Summer24_MaplePepperBacon_Bacon_WebPLP_Ingredients_200x200.png_master.png",
            rank: "＃ 2 most ordered",
            quantity: 0,
          },
          {
            name: "Spicy Southwest Pickle",
            price: 14.55,
            image:
              "https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/PLP%20updates/Maple%20Pepper%20Bacon/CFA_Summer24_MaplePepperBacon_Pickles_WebPLP_Ingredients_200x200.png_master.png",
            rank: "＃ 3 most ordered",
            quantity: 0,
          },
          {
            name: "Chick-fil-A ChickMeal® Meal",
            price: 13.09,
            image:
              "https://i.ibb.co/8XBLVc3/chick-fil-a-9jv-1200xx2918-2918-185-0.jpg",
            quantity: 0,
          },
          // Uncomment the items below if you want to add them
          // {
          //   name: "Chick-fil-A ChickSalad® Meal",
          //   price: 13.09,
          //   image:
          //     "https://summeryule.com/wp-content/uploads/2022/04/southwest-salad-chick-fil-a.jpeg",
          //   quantity: 0,
          // },
          // {
          //   name: "Chick-fil-A Chick-n-Macros Meal",
          //   price: 13.09,
          //   image:
          //     "https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Daypart%20Hero/Winter23/Winter23-DotCom-ChickenSandwich-D_720x748.jpg?h=748&w=720&la=en",
          //   quantity: 0,
          // },
          // {
          //   name: "Chick-fil-A Waffles",
          //   price: 13.09,
          //   image:
          //     "https://assets.entrepreneur.com/content/3x2/2000/20180403185342-12030542-10153912476520101-9019529450634602395-o.jpeg?format=pjeg&auto=webp&crop=1:1",
          //   quantity: 0,
          // },
        ],
        currentIndex: 0,
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
  }
  
  h2 {
    text-align: left;
    font-family: "Uber Move", sans-serif;
    font-size: 35px;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  .grid-item {
    border: 1px solid #202020;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
  }
  
  .item-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .item-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .item-info {
    display: flex;
    align-items: center;
  }
  
  .item-info img {
    width: 100px;
    height: auto;
    margin-right: 1rem;
  }
  
  .item-info h3 {
    font-size: 1.25rem;
    margin: 0;
  }
  
  .item-info .price {
    font-size: 1rem;
    color: #888;
  }
  
  .item-info .rank {
    font-size: 0.875rem;
    color: #666;
  }
  
  .quantity-control {
    display: flex;
    align-items: center;
  }
  
  .cart-button {
    background-color: #f8f8f8;
    border: 1px solid #eaeaea;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 0.5rem;
  }
  
  .cart-button:hover {
    background-color: #eaeaea;
  }
  
  .quantity-control div {
    margin: 0 0.5rem;
  }
  </style>
  