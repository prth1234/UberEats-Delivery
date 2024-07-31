<template>
    <div class="picked-for-you">
      <div class="grid-container">
        <div class="grid-item" v-for="(item, index) in items" :key="index">
          <div class="item-content">
            <div class="item-details">
              <div class="item-info">
                <img :src="item.image" :alt="item.name" class="item-image" />
                <div>
                  <h3 style="font-size: 14px;">{{ item.name }}</h3>
                  <p class="price" style="font-size: 12px;">${{ item.price.toFixed(2) }}</p>
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
              "https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/PLP%20updates/New%20menu%20module%20images/Chick-fil-A_Chicken_Sandwich_200x200.png?h=-1&w=-1&la=en",
            rank: "＃ 1 most ordered",
            quantity: 0,
          },
          {
            name: "Chick-fil-A® Bacon",
            price: 8.55,
            image:
              "https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/PLP%20updates/Maple%20Pepper%20Bacon/2.png?h=-1&w=-1&la=en",
            rank: "＃ 2 most ordered",
            quantity: 0,
          },
          {
            name: "Spicy Southwest Pickle",
            price: 14.55,
            image:
              "https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/PLP%20updates/Maple%20Pepper%20Bacon/3.png?h=-1&w=-1&la=en",
            rank: "＃ 3 most ordered",
            quantity: 0,
          },
          {
            name: "Chick-fil-A ChickMeal® Meal",
            price: 13.09,
            image:
              "https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/PLP%20updates/New%20menu%20module%20images/Spicy%20Chicken%20Sandwich.png?h=-1&w=-1&la=en",
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
    margin-bottom: 70px;
    margin-top: 10px;
  }
  
  h2 {
    text-align: left;
    font-family: "Uber Move", sans-serif;
    font-size: 35px;
  }

  .item-image{
    margin-right: 10px;
    padding-right: 15px ;
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
    margin-top: 10px;
    margin-bottom: 0px;
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
    text-align: left;
    margin-top: -3px;
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
  background-color: transparent;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 0.5rem;
  color: green;
  border: 1px solid transparent;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-button:hover {
  background-color: transparent;
  border-color: transparent;
}

.quantity-control div {
  margin: 0 0.5rem;
}
  </style>
  