<template>
  <!-- <Navbar/> -->
  <section >
    <div class="flex bg-white items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
      <div class="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
        <div class="mb-2 flex justify-center"></div>
        <h2 class="text-center text-1xl font-bold leading-tight text-black" style="font-family: Uber Move;">Sign in to your uber account</h2>
        <a class="mt-2 text-center text-sm text-gray-600" href="#" >Don't have an account? Create a free account</a>
        <form class="mt-8" method="POST" action="#" style="margin-top: 20px;">
          <div class="space-y-5">
            <div>
              <label class="text-base font-medium text-gray-900" >Email address</label>
              <div class="mt-2" style="margin-top: 10px;">
                <input placeholder="Enter Your Email" type="email" class="form-input" />
              </div>
            </div>  
            <div>
              <div class="flex items-center justify-between">
                <label class="text-base font-medium text-gray-900">Password</label>
                <br/>
               

             
              </div>
              <div class="mt-2">
                <input placeholder="Enter Your Password" type="password" class="form-input" />
              </div>
              <a class="text-sm font-semibold text-black hover:underline" href="#">Forgot password?</a>

            </div>
            <div style="margin-top: 20px;">
              <!-- <button class="form-button" type="button" style="background-color: white; color: black; margin-bottom: 10px; margin-top: 10px; align-content:;">Get started</button> -->
              <button @click="redirectToMain" class="form-button-google" type="button" style="background-color: #1a1a1a; color: white; border-radius: 10px; margin-bottom: 10px; margin-top: 10px;">Continue</button>

            </div>
          </div>
        </form>
        <div class="sign-google">
          <button class="form-button-google" type="button" style="background-color: white; color: black;border-radius: 10px; ">

            <span class="mr-2 inline-block" style="align-items: center;">
              <svg
              fill="currentColor"
              viewBox="0 0 25  25" 
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-rose-500"
              width="15px"
              height="10px"
              
            >
              <path
                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
              ></path>
            </svg>
           
            Sign in with Google 

            </span>
            <!-- <img src="./favicon.ico"> -->
          </button>
          
        </div>

        <div class="sign-google">
          <button class="form-button-google" type="button" style="background-color: white; color: black;border-radius: 10px; margin-top: 10px; ">

            <span class="mr-2 inline-block" style="align-items: center;">
              <!-- <svg
              fill="currentColor"
              viewBox="0 0 25  25" 
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-rose-500"
              width="15px"
              height="10px"
              
            >
              <path
                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
              ></path>
            </svg> -->
  

            🍎 Sign in with Apple 

            </span>
            <!-- <img src="./favicon.ico"> -->
          </button>
        </div>





        
      </div>
    </div>
  </section>
</template>
<script setup>
import { useRouter } from 'vue-router';
// import Navbar from './components/navbar.vue'; // Check the path and file extension

const router = useRouter();

const redirectToMain = () => {
  router.push('/main'); // Redirect to '/main' route
};
</script>

<style scoped>
:root {
  --primary-color: #000; /* Primary color variable */
  --secondary-color: #fff; /* Secondary color variable */
  --border-color: #d2d6dc; /* Border color variable */
  --hover-color: #f0f2f5; /* Hover color variable */
  font-family: 'Uber Move';
  /* background-color: #f0f2f5; */

}

.form-input {
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  border: 1px solid var(--border-color); /* Using border color variable */
  background-color: transparent;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-color: #1a1a1a;
}

.form-button {
  width: 100%;
  height: 2.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--secondary-color); /* Using secondary color variable */
  border-radius: 0.375rem;
  background-color: var(--primary-color); /* Using primary color variable */
  transition: background-color 0.15s ease-in-out;
}

.form-button-google {
  width: 100%;
  height: 2.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-color); /* Using primary color variable */
  border-radius: 0.375rem;
  border: 1px solid var(--border-color); /* Using border color variable */
  background-color: var(--secondary-color); /* Using secondary color variable */
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
span{
  
}
@font-face {
    font-family: 'Uber Move';
    src: url('food-delivery/src/assets/UberMoveBold.otf') format('opentype'); /* Change the path as per your font file's location */
    font-weight: normal;
    font-style: normal;
  }
  .sign-google{
    display: flex;
    justify-content: center;
    align-items: auto;
    text-align: auto;
    font-family: "Uber Move",
  }

.form-button-google:hover {
  background-color: var(--hover-color); /* Using hover color variable */
  border-color: var(--border-color); /* Using border color variable */
}
</style>
