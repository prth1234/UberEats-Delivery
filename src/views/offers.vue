<template>
    
    <div class="cards" style="display: flex; gap:10px; align-self: center;">
        <div class='crave-text'>Crave it? get it.</div>

        <div class="card">
            <div class="image_container">
                <img src="https://i.ibb.co/xqYjdzg/Screenshot-2024-04-09-at-9-27-06-PM.png">
            </div>
            <div class="title"></div>
            <div class="action">
                <div class="price">
                    <span>Best Pies</span>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="image_container">
                <img src="https://i.ibb.co/R3LvkXL/Screenshot-2024-04-09-at-9-27-21-PM.png">
            </div>
            <div class="title"></div>
            <div class="action">
                <div class="price">
                    <span>Complete Meal Box</span>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
.cards-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    flex-wrap: wrap;
}

.crave-text{
    font-family: 'Uber Move';
    font-size: 45px;
    margin-right: 200px;

}

.cards {
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 1200px;
    margin-bottom: 35px;
    margin-top: 50px;
}

.card {
    --bg-card: #0000;
    --primary: #ffffff;
    --primary-800: #ffffff;
    --primary-shadow: #2e1065;
    --light: #d9d9d9;
    --zinc-800: #18181b;
    --bg-linear: linear-gradient(0deg, var(--primary) 50%, var(--light) 125%);

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    width: 20rem;
    height: 13rem;
    background-color: var(--bg-card);
    border-radius: 1rem;
}

.image_container {
    overflow: hidden;
    cursor: pointer;
    position: relative;
    z-index: 5;
    height: 100%;
    background-color: var(--primary-800);
    border-radius: 0.9rem;
    width: 100%;
}

.image_container img {
    width: 120%; /* Increase the width slightly to zoom in */
    height: 100%; /* Increase the height slightly to zoom in */
    object-fit: cover;
}

.title {
    overflow: hidden;
    text-align: left;
    width: 100%;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--light);
    text-transform: capitalize;
    text-overflow: ellipsis;
}

.action {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.price {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--light);
}

h3 {
    font-size: 1.5rem;
    margin: 0;
}

.h2-class {
    text-align: left;
    font-family: 'Uber Move';
    margin-bottom: -10px;
}
</style>
