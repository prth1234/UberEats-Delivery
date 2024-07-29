<template>
  <div class="picked-for-you">
    <div class="card">
        <div class="header">
          <span class="icon"></span>
          <p class="alert"></p>
        </div>
  
        <p class="message"><b>
          Uber has expanded its services to include environmentally friendly options like Green Delivery, promoting sustainability in urban transportation. Through initiatives like Green Delivery, Uber aims to reduce carbon emissions and contribute to a greener future for urban mobility.
        </b></p>
  
        <div class="actions">
          <!-- Updated anchor tag with router-link -->
          <router-link to="/green" class="read" style="font-family: 'Uber Move';">
            Take a Look
          </router-link>
  
          <!-- Updated anchor tag to redirect to /sign-in-green -->
          <router-link to="/sign-in-green" class="mark-as-read" style="font-family: 'Uber Move';">
            Join us
          </router-link>
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
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 0px;
}

.item-image-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.item-image {
  width: 100%;
  height: auto;
  border-radius: 20px;
}

.item-info {
  text-align: center;
  margin-top: 1rem;
}

.item-info h3 {
  font-size: 1rem;
  margin: 0;
}

.item-info .price {
  font-size: 0.875rem;
  color: #888;
  margin-top: 0.5rem;
}

.quantity-control {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
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

.card {
  max-width: 3000px;
  width: 1000px;
  border-width: 1px;
  border-color: rgb(0, 0, 0);
  border-radius: 1rem;
  background-image: url('https://i.ibb.co/NLSd2jz/Untitled-design-1.png'); /* Replace 'path/to/your/image.jpg' with the actual path to your background image */
  background-size: cover; /* Ensures the image covers the entire background */
  padding: 1rem;
  margin-top: 20px;
  margin-bottom: 50px;
  color: rgb(0, 0, 0);

}


.crave-text{
    font-family: 'Uber Move';
    font-size: 45px;
    margin-right: 200px;
    text-align: left;
    margin-top: 30px;

}

.mmm{
    display: flex;
    gap:20px;
}



.header {
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  gap: 1rem;
}

.icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #06C167;
  padding: 0.5rem;
  color: rgba(255, 255, 255, 1);
}

.icon svg {
  height: 1rem;
  width: 1rem;
}

.alert {
  font-weight: 600;
  color: rgba(107, 114, 128, 1);
}

.message {
  margin-top: 1rem;
  color: rgb(255, 255, 255);
  font-family: 'Uber Move';
}

.actions {
  margin-top: 1.5rem;
  gap:10px;
}

.actions a {
  text-decoration: none;
  display: inline-block;
  margin-right: 10px; /* Adjust as needed for the desired gap */

}

.mark-as-read, .read {
  display: inline-block;
  border-radius: 0.5rem;
  width: 100px;
  padding: 0.75rem 1.25rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
}

.read {
  background-color: #06C167;
  color: rgba(255, 255, 255, 1);
  
}

.mark-as-read {
  margin-top: 0.5rem;
  background-color: rgba(249, 250, 251, 1);
  color: rgba(107, 114, 128, 1);
  transition: all .15s ease;
}

.mark-as-read:hover {
  background-color: rgb(230, 231, 233);
}
         
</style>
