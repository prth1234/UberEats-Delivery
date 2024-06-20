<template>
  <div class="cards" style="display: flex; gap:10px; align-self: center;">
    <div class="card" v-for="(item, index) in items" :key="index">
      <div class="image_container">
        <img :src="item.img" />
      </div>
      <div class="title"></div>
      <div class="action">
        <div class="price">
          <span>{{ item.title }}</span>
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
          title: "Best Pies",
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/c7b16799625ed21af8bd4b030d16792e/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        },
        {
          title: "Complete Meal Box",
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/32e3591b0a8419eed3358d423f164a9e/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        },
        {
          title: "Finger Lickin' Good",
          img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/f01666ac73626461d7455d9c24005cd4"
        },
        {
          title: "Code.Coffee.Conquer",
          img: "https://foodondemand.com/wp-content/uploads/2020/01/Starbucks-LR.jpg"
        },
        {
          title: "Happy Meals for Kids",
          img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1c999aef-c166-496d-a9f1-8508e83e6d5a_23683.jpg"
        }
      ]
    };
  }
};
</script>
      <style scoped>
    .cards-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  flex-wrap: wrap;
}

.cards {
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 1200px;
  margin-bottom: 35px;
  margin-top: 50px;
}

.card {
  --bg-card: #0000;
  --primary: #6d28d9;
  --primary-800: #4c1d95;
  --primary-shadow: #2e1065;
  --light: #d9d9d9;
  --zinc-800: #18181b;
  --bg-linear: linear-gradient(0deg, var(--primary) 50%, var(--light) 125%);

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  width: calc(50% - 10px);
  height: 21rem;
  background-color: var(--bg-card);
  border-radius: 1rem;
}

.image_container {
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 5;
  height: 100%;
  background-color: var(--primary-800);
  border-radius: 0.9rem;
  width: 100%;
}

.image_container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  overflow: hidden;
  text-align: left;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--light);
  text-transform: capitalize;
  text-overflow: ellipsis;
}

.action {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.price {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--light);
}

h3 {
  font-size: 1.5rem;
  margin: 0;
}

.h2-class {
  text-align: left;
  font-family: 'Uber Move';
  margin-bottom: -10px;
}

      
      </style>