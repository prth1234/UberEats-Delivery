<template>
    <h2 class="h2-class">Healthy options to explore</h2>
    <div class="lol">
    <div class="content-main">



        <div class="card work">
            <div class="img-section">
             
            </div>
            <div class="card-desc">
                <div class="card-header">
                    <div class="card-title"> Order Now</div>
                    <div class="card-menu">

                    </div>
                </div>
                <div class="card-time">California Burrito</div>
                <p class="recent">300 🚛 in last hr</p>
            </div>
        </div>


        <div class="card work">
            <div class="img-section">
                
            </div>
            <div class="card-desc">
                <div class="card-header">
                    <div class="card-title">Order Now</div>
                    <div class="card-menu">

                    </div>
                </div>
                <div class="card-time">Subway India</div>
                <p class="recent">92 🚛 in last hr</p>
            </div>
        </div>
        <div class="card work">
            <div class="img-section">
                
            </div>
            <div class="card-desc">
                <div class="card-header">
                    <div class="card-title">Order Now</div>
                    <div class="card-menu">

                    </div>
                </div>
                <div class="card-time">Zero Calories</div>
                <p class="recent">15 🚛 in last hr</p>
            </div>
        </div>
        <div class="card work">
            <div class="img-section">
                
            </div>
            <div class="card-desc">
                <div class="card-header">
                    <div class="card-title">Order Now</div>
                    <div class="card-menu">

                    </div>
                </div>
                <div class="card-time">Denny's Kitchen</div>
                <p class="recent">12 🚛 in last hr</p>
            </div>
        </div>
        <div class="card work">
            <div class="img-section">
                
            </div>
            <div class="card-desc">
                <div class="card-header">
                    <div class="card-title">Order Now</div>
                    <div class="card-menu">

                    </div>
                </div>
                <div class="card-time">Onestar Pizza</div>
                <p class="recent">29 🚛 in last hr</p>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import Card from 'primevue/card';
</script>

<style scoped>
.content-main {
    font-family: "Uber Move", sans-serif;
    width: 100%;
    height: 8rem;
    /* Specify the height with a unit like 'rem' */
    display: flex;
    font-family: 'Uber Move';
}

.custom-card {
    border-radius: 8px;
    /* Rounded corners */
    padding: 16px;
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
    font-family: "Arial";
    color: #fff;
    display: grid;
    cursor: pointer;
    grid-template-rows: 50px 1fr;
}

.card:hover .img-section {
    transform: translateY(1em);
}

.card-desc {
    border-radius: 10px;
    padding: 15px;
    position: relative;
    top: -10px;
    display: grid;
    gap: 10px;
    background: var(--primary-clr);
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
    background: hsl(0, 0%, 100%);
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
    font-family: 'Uber Move'
}

</style>

<script>
export default {
    name: 'HelloMain'
}
</script>