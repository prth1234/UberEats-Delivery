// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router'; // Import the router
import VueGoogleMaps from '@fawmi/vue-google-maps';


import PrimeVue from 'primevue/config';

import Button from "primevue/button"

// createApp(App).use(router).mount('#app');
// app.use(VueGoogleMaps, {
//     load: {
//       key: 'AIzaSyAgrmQKFgTQNPpdwbyrobLDlBkNxtCu0v4'
//     },
//    })


// const app = createApp(App);
// app=app.use(router);
// app.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyAgrmQKFgTQNPpdwbyrobLDlBkNxtCu0v4',
//     libraries: "places"

//   },
//  })
//  .mount("#app");

const app = createApp(App); // Create the Vue app instance
// Use VueGoogleMaps plugin

app.use(PrimeVue, { unstyled: true });
app.component('Button', Button);

// Register global components
// app.component('Navbar', Navbar);

// Mount the app to the DOM
app.use(router).mount('#app');