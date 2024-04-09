<template>
  <div>
    <div v-if="showLoader">
      <h1 class="logo">Uber<span style="color:#06C167;"> Eats</span></h1>
      <div class="progress"></div>
    </div>
    <div v-else class="content">
      <!-- <p>Hello Main</p> -->
      <Navbar />
      <MenuBar />
<div class="slider">
  <ImageSlider/>
</div>
<MainContent/>
<div class="more">

<Card/>
<UberOne/>
<Collections/>

</div>
<Footer/>
     
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from './Navbar_main.vue'; // Adjust the path as needed
import MenuBar from './MenuBar.vue'
import ImageSlider from './imageBar.vue'
import MainContent from './mainContent.vue'
import UberOne from './UberOne.vue'
import Card from './Card.vue'
import Collections from './Collections.vue'
import Footer from './Footer.vue'
export default defineComponent({
  components: {
    Navbar,MenuBar,ImageSlider,MainContent, Card,UberOne,Collections, Footer
  },
  data() {
    return {
      showLoader: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  },
});
</script>
  <style scoped>
  :root {
    --primary-color: #ffffff; /* Primary color variable */
    --background-color: #782727; /* Change to white */
    --secondary-color: #fff; /* Secondary color variable */
    --border-color: #d2d6dc; /* Border color variable */
    --hover-color: #f0f2f5; /* Hover color variable */
    font-family: 'Uber Move';
  }
  .content{
    display:flex-start;
    

  }

  .define-color{
    background-color: #101010;
  }
  
  .canvas {
  background-color: #000000; /* Black background color */
  font-family: 'Uber Move';
}

 .more{
  margin-top: 60px;
  margin-left:45px;
 }
  
  .logo {
    margin-top: 0; /* Remove top margin */
  }
  .slider{
    transform: scale(0.5);

    /* margin-top: 10px; */
  }
  
  .progress-loader {
    top: 70%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    width: 150px;
    background: rgba(0, 0, 0, 0.253);
    height: 3px;
    border-radius: 7px;
  }
  
  
  .progress {
    content: '';
    width: 1px;
    height: 3px;
    border-radius: 7px;
    background: rgb(255, 255, 255);
    transition: 0.5s;
    animation: loading1274 2s ease infinite;
  }


  
  @keyframes loading1274 {
    0% {
      width: 0%;
    }
    10% {
      width: 10%;
    }
    50% {
      width: 40%;
    }
    60% {
      width: 60%;
    }
    100% {
      width: 100%;
    }
  }
  /* Other styles remain unchanged */
  </style>
  