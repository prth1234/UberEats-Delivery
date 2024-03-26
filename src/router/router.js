// src/router/router.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/home.vue';
import SignIn from '@/views/signin.vue'; // Assuming you have a SignIn view component
import Main from '@/views/main.vue'

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
    path: '/main',
    name: 'Main',
    component: Main,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
