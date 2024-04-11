<template>
  <!-- <Navbar/> -->
<Navbar/>
  <section >
    <div class="flex bg-white items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8" style="margin-bottom: 10px; width: 300px;">
      <div class="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md" style="margin-bottom: 10px;">
        <div class="mb-2 flex justify-center"></div>
        <h2 class="text-center text-1xl font-bold leading-tight text-black" style="font-family: Uber Move; text-align: left; color: #06c167;">What's your phone number or email?</h2>
        <!-- <a class="mt-2 text-center text-sm text-gray-600" href="#" >Don't have an account? Create a free account</a> -->
        <form class="mt-8" method="POST" action="#" style="margin-top: 20px;">
          <div class="space-y-5">
            <div>
            
              <div class="mt-2" style="margin-top: 10px; ">
                <input placeholder="Enter your phone number or email" type="email" class="form-input" />
              </div>
            </div>  
            <div style="margin-bottom: 20px;">
              <!-- <div class="flex items-center justify-between">
                <label class="text-base font-medium text-gray-900">Password</label>
                <br/>
               

             
              </div>
              <div class="mt-2">
                <input placeholder="Enter Your Password" type="password" class="form-input" />
              </div> -->
              <!-- <a class="text-sm font-semibold text-black hover:underline" href="#" >Forgot password?</a> -->

            </div>
            <div style="margin-top: 10px;">
              <!-- <button class="form-button" type="button" style="background-color: white; color: black; margin-bottom: 10px; margin-top: 10px; align-content:;">Get started</button> -->
              <button @click="redirectToMain" class="form-button" type="button" style="background-color: #1a1a1a; color: white; border-radius: 10px; margin-bottom: 10px; margin-top: 0px; font-family: 'Uber Move'; ">Continue</button>

            </div>

            <div class="divider">or</div>
          
          </div>
        </form>
        <div class="signin">
        <div class="sign-google">
  <button  @click="redirectToMain" class="form-button-google" type="button" style="background-color: white; color: black;border-radius: 10px; ">
    <svg width="18" height="18" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" class="cw cx" preserveAspectRatio="xMidYMid">
      <path d="M255.9 133.5c0-10.8-.9-18.6-2.8-26.7H130.6v48.4h71.9a63.8 63.8 0 01-26.7 42.4l-.2 1.6 38.7 30 2.7.3c24.7-22.8 38.9-56.3 38.9-96" fill="#4285F4"></path>
      <path d="M130.6 261.1c35.2 0 64.8-11.6 86.4-31.6l-41.2-32c-11 7.8-25.8 13.1-45.2 13.1a78.6 78.6 0 01-74.3-54.2l-1.5.1-40.3 31.2-.6 1.5C35.4 231.8 79.5 261 130.6 261" fill="#34A853"></path>
      <path d="M56.3 156.4a80.4 80.4 0 01-.2-51.7V103L15.3 71.3l-1.4.6a130.7 130.7 0 000 117.3l42.4-32.8" fill="#FBBC05"></path>
      <path d="M130.6 50.5c24.5 0 41 10.6 50.4 19.4L218 34C195.2 13 165.8 0 130.6 0 79.5 0 35.4 29.3 13.9 72l42.2 32.7a79 79 0 0174.4-54.2" fill="#EB4335"></path>
    </svg>
  </button>
</div>


<div  @click="redirectToMain" class="sign-apple" style="margin-top: 10px;margin-bottom: 22px;">
  <button class="form-button-google" type="button" style="background-color: white; color: black; border-radius: 10px; ">
    <svg width="22" height="22" viewBox="0 0 22 22" fill="#000000" xmlns="http://www.w3.org/2000/svg" class="cw cx">
      <g transform="matrix( 1 0 0 1 3 1 )">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2676 3.23104C11.9166 2.39314 12.4087 1.20886 12.2307 0C11.1698 0.0737252 9.92984 0.752465 9.2063 1.63717C8.54675 2.43878 8.00468 3.63126 8.21639 4.78863C9.37613 4.8249 10.5731 4.12978 11.2676 3.23104ZM17 14.6022C16.5359 15.6367 16.3125 16.099 15.7146 17.0153C14.8806 18.2943 13.7046 19.887 12.2459 19.8987C10.9512 19.9128 10.6173 19.0503 8.85967 19.0608C7.10203 19.0702 6.73561 19.9151 5.4386 19.9022C3.98106 19.8894 2.86668 18.4523 2.03264 17.1732C-0.300809 13.5993 -0.546251 9.404 0.892672 7.17235C1.91632 5.58785 3.53089 4.66101 5.04775 4.66101C6.59136 4.66101 7.56267 5.51295 8.84106 5.51295C10.0811 5.51295 10.836 4.65867 12.6216 4.65867C13.9733 4.65867 15.4052 5.39944 16.4242 6.67734C13.0834 8.5193 13.6243 13.3185 17 14.6022Z" fill="#000000" opacity="1"></path>
      </g>
    </svg>
  </button>
</div>

</div>








        
      </div>
    </div>
   

  </section>
</template>
<script setup>
import { useRouter } from 'vue-router';
// import Navbar from './components/navbar.vue'; // Check the path and file extension
import Navbar from './Navbar.vue'
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



.signin{
  margin-top: 20px;
}


.input{
  color: #ffffff;
  border-radius: 500px;
}

.divider {
  font-size: 8px;
  display: flex;
  align-items: center;
}

.divider::before, .divider::after {
  flex: 1;
  content: '';
  padding: 0.5px;
  background-color: #1a1a1a;
  margin: 5px;
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
  height: 3rem;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--secondary-color); /* Using secondary color variable */
  border-radius: 0.375rem;
  background-color: var(--primary-color); /* Using primary color variable */
  transition: background-color 0.15s ease-in-out;
}

form-button-QR {

  
width: 100%;
height: 3rem;
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
  height: 3rem;
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
    align-items: center; /* Align items vertically in center */
    text-align: auto;
    font-family: "Uber Move";
  }
  .sign-apple{
    display: flex;
    justify-content: center;
    align-items: auto;
    text-align: auto;
    font-family: "Uber Move";

  }

.form-button-google:hover {
  background-color: var(--hover-color); /* Using hover color variable */
  border-color: var(--border-color); /* Using border color variable */
}

.input:hover{
  border-color: #d2d6dc;
}

.logo-svg{
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px; /* Adjust margin as needed */
}
</style>
