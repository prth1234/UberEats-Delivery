<template>
    <!-- <h2 class="h2-class">Healthy options to explore</h2> -->
    <div class="lol">
    <div class="content-main">



        <div class="card work">
            <div class="img-section">
             
            </div>
            <div class="card-desc">
                <div class="card-header">
                    <div class="card-menu">

                    </div>
                </div>
                <div class="card-time">Snacking</div>
                <p class="recent" style="font-size: 16px; font-weight: 70; color: #D9D9D9;">30 mins delivery </p>
                <!-- <span><svg width="24px" height="24px" fill="none" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" aria-label="When" role="img" focusable="false" style="fill: #FFFFFF;"><path d="M12 2.83398C6.91671 2.83398 2.83337 6.91732 2.83337 12.0007C2.83337 17.084 6.91671 21.1673 12 21.1673C17.0834 21.1673 21.1667 17.084 21.1667 12.0007C21.1667 6.91732 17.0834 2.83398 12 2.83398ZM17 13.6673H10.3334V5.33398H12.8334V11.1673H17V13.6673Z" fill="#000000"></path></svg>
                </span> -->
            </div>
        </div>


        <div class="card work">
            <div class="img-section">
                
            </div>
            <div class="card-desc">
                <div class="card-header">
                    <div class="card-menu">

                    </div>
                </div>
                <div class="card-time">Dining</div>
                <p class="recent" style="font-size: 16px; font-weight: 70; color: #D9D9D9;">Under $10</p>
            </div>
        </div>
        <div class="card work">
            <div class="img-section">
                
            </div>
            <div class="card-desc">
                <div class="card-header">
                    <div class="card-menu">

                    </div>
                </div>
                <div class="card-time">No Calories</div>
                <p class="recent" style="font-size: 16px; font-weight: 70; color: #D9D9D9;">Less than 10 calories</p>
            </div>
        </div>
        <div class="card work">
            <div class="img-section">
                
            </div>
            <div class="card-desc">
                <div class="card-header">
                    <div class="card-menu">

                    </div>
                </div>
                <div class="card-time">Groceries</div>
                <p class="recent" style="font-size: 16px; font-weight: 70; color: #D9D9D9;">15 mins away</p>
            </div>
        </div>
        <div class="card work">
            <div class="img-section">
                
            </div>
            <div class="card-desc">
                <div class="card-header">
                    <div class="card-menu">

                    </div>
                </div>
                <div class="card-time">Nightlife</div>
                <p class="recent" style="font-size: 16px; font-weight: 70; color: #D9D9D9;">12am - 5am</p>
            </div>
        </div>
    </div>
    </div>




    
</template>


<style scoped>
.content-main {
    width: 100%;
    height: 7rem;
    /* Specify the height with a unit like 'rem' */
    display: flex;
}
.lol{
    margin-top: -140px;
}
.custom-card {
    border-radius: 8px;
    /* Rounded corners */
    /* Padding inside the card */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    /* Box shadow for depth */
}

.custom-card-title {
    color: #333;
    /* Custom title color */
    font-weight: bold;
    /* Bold title */
}


.custom-card-content {
    color: #666;
    /* Custom content color */
}

.card {
    --primary-clr: #1A1A1A;
    --dot-clr: #BBC0FF;
    --play: hsl(195, 74%, 62%);
    width: 200px;
    height: 170px;
    border-radius: 10px;
}

.card {
  --primary-clr: #1A1A1A;
  --dot-clr: #BBC0FF;
  --play: hsl(195, 74%, 62%);
  width: 200px;
  height: 170px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  grid-template-rows: 50px 1fr;
  position: relative; /* To make sure the animation effect is applied correctly */
  overflow: hidden; /* Ensure content stays within card boundary */
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition for hover effect */
}

.card:hover {
  transform: scale(1.05); /* Slightly increase the size of the card on hover */
}
.card:hover .card-time {
  background: linear-gradient(135deg, #8a4ba8, #ff66c4, #282c3d);
  //background: #06C167;

  -webkit-background-clip: text; /* Clip background to the text */
  -webkit-text-fill-color: transparent; /* Make the text color transparent so the gradient shows through */
}
.img-section {
  transition: transform 0.3s ease; /* Smooth transition for image section */
}

.card:hover .img-section {
  transform: scale(1.1); /* Slightly enlarge the image section on hover */
}

.card-desc {
  border-radius: 10px;
  padding: 15px;
  position: relative;
  display: grid;
  gap: 1px;
  transition: background-color 0.3s ease; /* Smooth transition for background color */
}

.card-time {
    font-size: 1.7em;
    font-weight: 500;
    font-family: 'Uber Move';
}

.img-section {
    transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /* background: hsl(0, 41%, 20%); */
}

.card-header {
    display: flex;
    align-items: center;
    width: 100%;
}

.card-title {
    flex: 1;
    font-size: 0.9em;
    font-weight: 500;
    font-family: 'Uber Move';
}




.card-menu {
    display: flex;
    gap: 4px;
    margin-inline: auto;
}

.card svg {
    float: right;
    max-width: 100%;
    max-height: 100%;
}

.h2-class {
    text-align: left;
    font-family: 'Uber Move';
}

.card .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--dot-clr);
}

.card .recent {
    line-height: 0;
    font-size: 0.8em;
    /* font-family: 'Uber Move'; */
    display:flex-column;
}

.recent{
    font-size: 12px;
}

.card-work{
    margin-top: -50px;
}


</style>
