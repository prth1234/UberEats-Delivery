// src/router/router.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/home.vue';
import SignIn from '@/views/signin.vue'; // Assuming you have a SignIn view component
import Main from '@/views/main.vue'
import Green from '@/views/green.vue'
import JoinUs from '@/views/joinus.vue'
import SignInGreen from '@/views/signingreen.vue'; // Assuming you have a SignIn view component


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/sign-in-green',
    name: 'SignInGreen',
    component: SignInGreen,
  },
  
  {
    path: '/main',
    name: 'Main',
    component: Main,
  },
  {
    path: '/green',
    name: 'Green',
    component: Green,
  },
  {
    path: '/join-us',
    name: 'JoinUs',
    component: JoinUs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
