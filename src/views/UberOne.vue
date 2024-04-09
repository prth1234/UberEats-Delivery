<template>

<div class="card">
    <div class="card-image"></div>
    
</div>

  </template>
  <style scoped>
  .card {
  width: 1190px;
  background: rgb(0, 0, 0);
  padding: .4em;
  border-radius: 1rem;
  height: 150px;
}

.card-image {
  background-image: url('https://i.ibb.co/Xpvj3M1/Screenshot-2024-04-09-at-3-35-30-PM.png');
  background-size: cover; /* Ensures the image covers the entire element */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  width: 100%;
  height: 100%;
  border-radius: 6px; /* Simplified border-radius syntax */
}


.card-image:hover {
  transform: scale(0.98);
}

.category {
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: 600;
  color: rgb(63, 121, 230);
  padding: 10px 7px 0;
}

.category:hover {
  cursor: pointer;
}

.heading {
  font-weight: 600;
  color: rgb(61, 53, 53);
  padding: 7px;
}

.heading:hover {
  cursor: pointer;
}

.author {
  color: gray;
  font-weight: 400;
  font-size: 11px;
  padding-top: 20px;
}

.name {
  font-weight: 600;
}

.name:hover {
  cursor: pointer;
}
  
  </style>