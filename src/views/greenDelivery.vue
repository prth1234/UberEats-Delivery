<template>
    <div class='crave-text' >Uber goes <span style="color: #06C167;"><b> Green 🌱</b></span></div> 

<div class="mmm">
<div class="card">
  <div class="header">
    <span class="icon">
    
    </span>
    <p class="alert"></p>
  </div>

  <p class="message"><b>
    Uber has expanded its services to include environmentally friendly options like Green Delivery, promoting sustainability in urban transportation. Through initiatives like Green Delivery, Uber aims to reduce carbon emissions and contribute to a greener future for urban mobility. 
</b> </p>

  <div class="actions">
    <a class="read" href="" style="font-family: 'Uber Move';">
      Take a Look
    </a>

    <a class="mark-as-read" href="" style="font-family: 'Uber Move';">
      Mark as Read
    </a>
  </div>
</div>



</div>
   
          </template>
          <style scoped>
      
      .card {
  max-width: 2900px;
  width: 2900px;
  border-width: 1px;
  border-color: rgb(0, 0, 0);
  border-radius: 1rem;
  background-image: url('https://i.ibb.co/NLSd2jz/Untitled-design-1.png'); /* Replace 'path/to/your/image.jpg' with the actual path to your background image */
  background-size: cover; /* Ensures the image covers the entire background */
  padding: 1rem;
  margin-top: 50px;
  margin-bottom: 50px;
  color: rgb(0, 0, 0);

}


.crave-text{
    font-family: 'Uber Move';
    font-size: 45px;
    margin-right: 200px;
    text-align: left;
    margin-top: 30px;

}

.mmm{
    display: flex;
    gap:20px;
}



.header {
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  gap: 1rem;
}

.icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #06C167;
  padding: 0.5rem;
  color: rgba(255, 255, 255, 1);
}

.icon svg {
  height: 1rem;
  width: 1rem;
}

.alert {
  font-weight: 600;
  color: rgba(107, 114, 128, 1);
}

.message {
  margin-top: 1rem;
  color: rgb(255, 255, 255);
  font-family: 'Uber Move';
}

.actions {
  margin-top: 1.5rem;
  gap:10px;
}

.actions a {
  text-decoration: none;
  display: inline-block;
  margin-right: 10px; /* Adjust as needed for the desired gap */

}

.mark-as-read, .read {
  display: inline-block;
  border-radius: 0.5rem;
  width: 100px;
  padding: 0.75rem 1.25rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
}

.read {
  background-color: #06C167;
  color: rgba(255, 255, 255, 1);
  
}

.mark-as-read {
  margin-top: 0.5rem;
  background-color: rgba(249, 250, 251, 1);
  color: rgba(107, 114, 128, 1);
  transition: all .15s ease;
}

.mark-as-read:hover {
  background-color: rgb(230, 231, 233);
}
          
          </style>