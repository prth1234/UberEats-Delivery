<template>
    <div class="picked-for-you">
      <div class="grid-container">
        <div class="grid-item" v-for="(item, index) in items" :key="index">
          <div class="item-image-container">
            <img :src="item.image" :alt="item.name" class="item-image" />
          </div>
          <div class="item-info">
            <h3>{{ item.name }}</h3>
            <p class="price">${{ item.price.toFixed(2) }}</p>
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
  </template>



<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Chick-fil-A® Hot&Spicy",
          price: 10.29,
          image:
            "https://i.ibb.co/MgJVR9m/CFA51250-Summer24-Maple-Pepper-Bacon-On-White-Web-PLP-Hero-D-710x580-jpg-master-removebg-preview.png",
          rank: "＃ 1 most ordered",
          quantity: 0,
        },
        {
          name: "Chick-fil-A® Bacon",
          price: 8.55,
          image:
            "https://pngimg.com/d/fries_PNG27.png",
          rank: "＃ 2 most ordered",
          quantity: 0,
        },
        {
          name: "Spicy Southwest Pickle",
          price: 14.55,
          image:
            "https://static.vecteezy.com/system/resources/previews/039/113/424/non_2x/ai-generated-color-full-veggie-wrap-isolated-on-background-free-png.png",
          rank: "＃ 3 most ordered",
          quantity: 0,
        },
        // {
        //   name: "Chick-fil-A ChickMeal® Meal",
        //   price: 13.09,
        //   image:
        //     "https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/PLP%20updates/New%20menu%20module%20images/Spicy%20Chicken%20Sandwich.png?h=-1&w=-1&la=en",
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
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.grid-item {
  border: 1px solid #202020;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.item-image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  min-height: 200px; /* Set a minimum height for the image container */
}

.item-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.item-info {
  padding: 1rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item-info h3 {
  font-size: 1rem;
  margin: 0;
  text-align: center;
}

.item-info .price {
  font-size: 0.875rem;
  color: #888;
  margin: 0.5rem 0;
}

.quantity-control {
  display: flex;
  align-items: center;
  justify-content: center;
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