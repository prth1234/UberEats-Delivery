
<template>
    <div class="navbar">

        <Navbar/>

    </div>


<!-- <Barrr/> -->

<ContentGreen/>
    
  
    
   
</template>
<script setup>
import { useRouter } from 'vue-router';
// import Navbar from './components/navbar.vue'; // Check the path and file extension
import Navbar from './Navbar2.vue';
import Barrr from './barrr.vue';
import ContentGreen from './Content-green.vue';

const router = useRouter();

// const redirectToMain = () => {
//   router.push('/main'); // Redirect to '/main' route
// };
</script>

<style scoped>

.h2{
    font-family: 'Uber Move';
    text-align: left;
}

.content{
    text-align: left;
    display: flex;
    vertical-align: center;
}

.divider {
    border: none;
    height: 1px;
    background-color: #1d1b1b;
    position: relative;
    top:-110px;
  }

</style>