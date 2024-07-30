<template>
  <div class="card-main">
    <h2 class="h2-class" style="margin-bottom: 10px;">Best Overall Rating ⭐️</h2>
    <div class="cards" style="display: flex; gap: 10px; align-self: center;">
      <router-link 
        v-for="item in bestOverallRating" 
        :key="item.id" 
        :to="{ path: '/detail-view', query: { id: item.id } }"
        class="card"
      >
        <div class="image_container">
          <img :src="item.imageUrl" alt="Card Image" />
        </div>
        <div class="title"></div>
        <div class="action">
          <div class="price">
            <span>{{ item.title }}</span>
            <span style="font-weight: 100; text-align: left; font-size: smaller;"> | {{ item.price }}</span>
          </div>
        </div>
      </router-link>
    </div>

    <h2 class="h2-class" style="margin-bottom: 10px;">Cheat day 💪<br /></h2>
    <div class="cards" style="display: flex; gap: 10px; align-self: center;">
      <router-link 
        v-for="item in cheatDay" 
        :key="item.id" 
        :to="{ path: '/detail-view', query: { id: item.id } }"
        class="card"
      >
        <div class="image_container">
          <img :src="item.imageUrl" alt="Card Image" />
        </div>
        <div class="title"></div>
        <div class="action">
          <div class="price">
            <span>{{ item.title }}</span>
            <span style="font-weight: 100; text-align: left; font-size: smaller;"> | {{ item.price }}</span>
          </div>
        </div>
      </router-link>
    </div>

    <h2 class="h2-class" style="margin-bottom: 10px;">Frozen desserts ❄️<br /></h2>
    <div class="cards" style="display: flex; gap: 10px; align-self: center;">
      <router-link 
        v-for="item in frozenDesserts" 
        :key="item.id" 
        :to="{ path: '/detail-view', query: { id: item.id } }"
        class="card"
      >
        <div class="image_container">
          <img :src="item.imageUrl" alt="Card Image" />
        </div>
        <div class="title"></div>
        <div class="action">
          <div class="price">
            <span>{{ item.title }}</span>
            <span style="font-weight: 100; text-align: left; font-size: smaller;"> | {{ item.price }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      bestOverallRating: [
        {
          id: 1,
          imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/7ab1e30c2b1251dfed70a083a74a8da9/783282f6131ef2258e5bcd87c46aa87e.jpeg',
          title: 'Little Caesers',
          price: '$6.99',
        },
        {
          id: 2,
          imageUrl: 'https://d1fd34dzzl09j.cloudfront.net/2023/07/Catering%20Lifestyle%20Image%20-%20Chick-fil-A%C2%AE%20Nuggets%20Tray%202%201_master-2.jpg',
          title: 'Chick Fill A',
          price: '$4.98',
        },
        {
          id: 3,
          imageUrl: 'https://b.zmtcdn.com/data/pictures/chains/5/61555/08c9ca1fa6ab9ac6aeafe2f4dcda1600_featured_v2.jpg',
          title: 'Burger King',
          price: '$3.93',
        },
        {
          id: 4,
          imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/93b92a84c894b74e38d2015b012c761f/e00617ce8176680d1c4c1a6fb65963e2.png',
          title: 'Los Gatos Wines',
          price: '$19.99',
        },
        {
          id: 5,
          imageUrl: 'https://entrackr.com/storage/2023/09/Swiggy-instamart.jpg',
          title: 'Stay-Home Date',
          price: '10 mins',
        },
      ],
      cheatDay: [
        {
          id: 6,
          imageUrl: 'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2023-10/wendy%27s.jpg',
          title: "Wendy's (990)",
          price: '$3.99',
        },
        {
          id: 7,
          imageUrl: 'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/897098eb-1615-4ae2-a3b5-1d66599b49b8.png',
          title: 'The meltdown',
          price: '$2.98',
        },
        {
          id: 8,
          imageUrl: 'https://www.mishry.com/wp-content/uploads/2019/06/packaged-food-brands.png',
          title: 'Zomato',
          price: '15 mins',
        },
        {
          id: 9,
          imageUrl: 'https://static.startuptalky.com/2022/05/food-chains--2-.jpg',
          title: 'Pizza Hut',
          price: '$10.99',
        },
        {
          id: 10,
          imageUrl: 'https://media.timeout.com/images/105757031/image.jpg',
          title: 'Subway',
          price: '$6.49',
        },
      ],
      frozenDesserts: [
        {
          id: 11,
          imageUrl: 'https://www.havmor.com/sites/default/files/2023-12/havmor-cookies.jpg',
          title: 'Havemor',
          price: '$0.99',
        },
        {
          id: 12,
          imageUrl: 'https://pbs.twimg.com/media/F8zSIMuaUAATA8v?format=jpg&name=4096x4096',
          title: 'Baskin Robins',
          price: '$3.98',
        },
        {
          id: 13,
          imageUrl: 'https://polarbear.co.in/wp-content/uploads/2022/01/banner-1-4.jpg',
          title: 'Polar Bear',
          price: '$3.93',
        },
        {
          id: 14,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMWGjTEVr7hXaIIndnyJg6ucKbVoGJCo-2Jv3jd_o3fg&s',
          title: "Eddy's",
          price: '$19.99',
        },
        {
          id: 15,
          imageUrl: 'https://assets.epicurious.com/photos/5dd311e03b6bcb0008814284/16:9/w_2560%2Cc_limit/PieDough_111519_13269.jpg',
          title: 'Pie World',
          price: '$9.99',
        },
      ],
    };
  },
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
}

.card {
  --bg-card: #0000;
  --primary: #ffffff;
  --primary-800: #ffffff;
  --primary-shadow: #ffffff;
  --light: #d9d9d9;
  --zinc-800: #ffffff;
  --bg-linear: linear-gradient(0deg, var(--primary) 50%, var(--light) 125%);

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  width: calc(50% - 10px);
  height: 10.5rem;
  background-color: var(--bg-card);
  border-radius: 1rem;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
}

.image_container {
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 5;
  height: 19rem;
  background-color: var(--primary-400);
  border-radius: 0.9rem;
  width: 100%;
  transition: transform 0.3s ease;
}

.card:hover .image_container img {
  transform: scale(1.1);
}

.image_container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
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