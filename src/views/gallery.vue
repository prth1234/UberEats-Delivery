<template>
  <div class="card-main">
    <h2 class="h2-class" style="margin-bottom: 10px;">Purest Wine Collection 🍷</h2>
    <div class="cards" style="display: flex; gap: 10px; align-self: center;">
      <div class="card" v-for="wine in wineCollection" :key="wine.id">
        <div class="image_container">
          <img :src="wine.imageUrl" alt="Wine Image" />
        </div>
        <div class="title"></div>
        <div class="action">
          <div class="price">
            <span>{{ wine.title }}</span>
            <span style="font-weight: 100; text-align: left; font-size: smaller;"> | {{ wine.age }}</span>
          </div>
        </div>
      </div>
    </div>

    <h2 class="h2-class" style="margin-bottom: 10px;">Beer 🍻<br /></h2>
    <div class="cards" style="display: flex; gap: 10px; align-self: center;">
      <div class="card" v-for="beer in beerCollection" :key="beer.id">
        <div class="image_container">
          <img :src="beer.imageUrl" alt="Beer Image" />
        </div>
        <div class="title"></div>
        <div class="action">
          <div class="price">
            <span>{{ beer.title }}</span>
            <span style="font-weight: 100; text-align: left; font-size: smaller;"> | {{ beer.time }}</span>
          </div>
        </div>
      </div>
    </div>

    <h2 class="h2-class" style="margin-bottom: 10px;">Chocolate Craving 🍫<br /></h2>
    <div class="cards" style="display: flex; gap: 10px; align-self: center;">
      <div class="card" v-for="chocolate in chocolateCollection" :key="chocolate.id">
        <div class="image_container">
          <img :src="chocolate.imageUrl" alt="Chocolate Image" />
        </div>
        <div class="title"></div>
        <div class="action">
          <div class="price">
            <span>{{ chocolate.title }}</span>
            <span style="font-weight: 100; text-align: left; font-size: smaller;"> | {{ chocolate.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      wineCollection: [
        {
          id: 1,
          imageUrl: 'https://media.winefolly.com/Chardonnay-wine-tasting-WineFolly.jpg',
          title: 'Chardonnay',
          age: '15 y.o.',
        },
        {
          id: 2,
          imageUrl: 'https://media.winefolly.com/Merlot-wine-tasting-WineFolly.jpg',
          title: 'Merlot',
          age: '12 y.o.',
        },
        {
          id: 3,
          imageUrl: 'https://media.winefolly.com/Bordeaux-Blend-Red-wine-tasting-WineFolly.jpg',
          title: 'Red Bordeaux',
          age: '20 y.o.',
        },
        {
          id: 4,
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGIXaMO7hQwZwoHsAUW7VYR_ZnMmp8uHqFGH6f_tVlaYeGw7lPLtHDWsrvOl5v5XrUkU&usqp=CAU',
          title: 'Marsanne',
          age: '9 y.o.',
        },
        {
          id: 5,
          imageUrl: 'https://i.pinimg.com/736x/15/4a/58/154a5846046acd8ec50ebdab82a70ea8.jpg',
          title: 'Grenache Blanc',
          age: '10 mins',
        },
      ],
      beerCollection: [
        {
          id: 6,
          imageUrl: 'https://www.thedrinksbusiness.com/content/uploads/2022/07/iStock-576563556-scaled.jpg',
          title: 'Bottled Beer',
          time: '10 mins',
        },
        {
          id: 7,
          imageUrl: 'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/uptown-fresh-beer.jpg',
          title: 'Fresh Beer',
          time: '20 mins',
        },
        {
          id: 8,
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/2013_Augustiner_Weissbier_Munich_pub.jpg',
          title: 'Wheat Beer',
          time: '15 mins',
        },
        {
          id: 9,
          imageUrl: 'https://media.wired.com/photos/5932be26a312645844996bea/191:100/w_1280,c_limit/beer_cans_f.jpg',
          title: 'Canned Beer',
          time: '7 mins',
        },
        {
          id: 10,
          imageUrl: 'https://www.spicejungle.com/wp/files/2018/04/How-To-Make-Root-Beer.jpg',
          title: 'Root Beer',
          time: '30 mins',
        },
      ],
      chocolateCollection: [
        {
          id: 11,
          imageUrl: 'https://handletheheat.com/wp-content/uploads/2021/02/chocolate-cupcakes-SQUARE-500x500.png',
          title: 'Chocolate House',
          price: '$3.99',
        },
        {
          id: 12,
          imageUrl: 'https://m.media-amazon.com/images/I/914Zu5LlgpL._AC_UF1000,1000_QL80_.jpg',
          title: 'Lindt',
          price: '$3.98',
        },
        {
          id: 13,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDG7R_Al8PFiKBgr5RMlvJE2mO0wnQlUxpVzq-gzXs0g&s',
          title: 'Snickers',
          price: '$3.93',
        },
        {
          id: 14,
          imageUrl:
            'https://rukminim2.flixcart.com/image/850/1000/khf63680/chocolate/i/1/h/108-kisses-milk-chocolate-36-gm-pack-of-3-pouch-hershey-s-original-imafxfsh9ufyeajy.jpeg?q=90&crop=false',
          title: "Hershey's",
          price: '$19.99',
        },
        {
          id: 15,
          imageUrl: 'https://m.media-amazon.com/images/I/61pzQRTVCOL.jpg',
          title: 'Mars',
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
    justify-content: center; /* Horizontally center the cards */
    align-items: center; /* Vertically center the cards */
    height: 100vh; /* Make the container full height of the viewport */
    background-color: #f0f0f0; /* Optional: Add background color */
    flex-wrap: wrap;
    
  }
  
  .cards {
    display: flex;
    align-items: center; /* Vertically center the cards inside */
    gap: 10px;
    max-width: 1200px; /* Optional: Set maximum width for the cards */
    margin-bottom: 35px;
  }



  .card {
    --bg-card: #0000;
    --primary: #ffffff;
    --primary-800: #ffffff;
    --primary-shadow: #2e1065;
    --light: #d9d9d9;
    --zinc-800: #18181b;
    --bg-linear: linear-gradient(0deg, var(--primary) 50%, var(--light) 125%);

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    width: calc(50% - 10px);
    height: 14.5rem;
    background-color: var(--bg-card);
    border-radius: 1rem;
    overflow: hidden; /* Add this to prevent image from overflowing on zoom */
  }

  .image_container {
    overflow: hidden;
    cursor: pointer;
    position: relative;
    z-index: 5;
    height: 19rem;
    background-color: var(--primary-800);
    border-radius: 0.9rem;
    width: 100%;
  }

  .image_container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease; /* Add transition for smooth animation */
  }

  /* Add this new rule for the hover effect */
  .card:hover .image_container img {
    transform: scale(1.1); /* Zoom in by 10% on hover */
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