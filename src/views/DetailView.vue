<template>
  <div class="restaurant-detail">
    <div class="poster">
      <img
        src="https://tb-static.uber.com/prod/image-proc/processed_images/4c7252776091efae1198aef7d3922e89/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        alt="Chick-fil-A food" style="border-radius: 20px" />
      <div class="poster-actions">
        <button class="favorite" @click="toggleFavorite">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path :class="{ filled: isFavorite }" fill-rule="evenodd" clip-rule="evenodd"
              d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
              stroke="black" stroke-width="2" />
          </svg>
        </button>
        <button class="more" @click="openPopup">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12Z"
              fill="black" stroke="black" stroke-width="2" />
            <path
              d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z"
              fill="black" stroke="black" stroke-width="2" />
            <path
              d="M17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12Z"
              fill="black" stroke="black" stroke-width="2" />
          </svg>
        </button>
      </div>
    </div>

    <div class="content">

      <h1 style="font-size: 50px">
        {{ restaurant.name }} ({{ restaurant.address }})
      </h1>
      <div class="restaurant-info">
        <span class="rating">{{ restaurant.rating }} ★ | </span>
        <span>({{ restaurant.ratingCount }}+) | </span>
        <span>{{ restaurant.categories.join(" • ") }} • </span>
        <button class="more1" @click="openInfo">Info</button>
      </div>
      <!-- <p class="description">{{ restaurant.description }}</p> -->
      <div class="main-body-content">
        <div class="intial-content">
          <div class="top-picks-slider">
            <div class="header">
              <div class="header-container">
                <h2 style="
                  text-align: left;
                  font-family: Uber Move;
                  font-size: 35px;
                ">
                  Featured items
                </h2>
                <div class="nav-buttons">
                  <button class="nav-button prev" @click="prevSlide" aria-label="Previous slide">
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="i3 dq i4 i5">
                      <path d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z"></path>
                    </svg>
                  </button>
                  <button class="nav-button next" @click="nextSlide" aria-label="Next slide">
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="i3 dq i4 i5 k8"
                      style="transform: scaleX(-1)">
                      <path d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="slider-container">
              <div class="slides-wrapper" :style="{ transform: `translateX(-${currentIndex * 25}%)` }">
                <div class="slide" v-for="(item, index) in items" :key="index">
                  <div class="item-image">
                    <img :src="item.image" :alt="item.name" class="img-stuff" />
                    <span v-if="item.rank" class="rank-badge">{{
                      item.rank
                      }}</span>
                  </div>
                  <div class="item-details">
                    <div class="item-info">
                      <h3>{{ item.name }}</h3>
                      <p class="price">${{ item.price.toFixed(2) }}</p>
                    </div>
                    <button class="cart-button" @click="addToCart(index)">
                      <span v-if="item.quantity > 0">+ </span>
                      <span v-else>+</span>
                    </button>
                    <div v-if="item.quantity == 0">0</div>

                    <div v-if="item.quantity > 0">{{ item.quantity }}</div>

                    <button class="cart-button" @click="removeFromCart(index)">
                      <span>-</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="info-rectangle" style="width: 28%; padding: 20px;">
            <div style="display: flex; align-items: center; width: 350px;">
              <!-- Search Bar -->
              <div style="display: flex; align-items: center; flex-grow: 1; margin-right: 10px; border: none;"
                class="searchbarr">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="margin-right: 10px;">
                  <title>Search</title>
                  <path
                    d="M22.6 20.4 18.2 16c1.1-1.6 1.8-3.5 1.8-5.6C20 5.2 15.7.9 10.5.9S1 5.2 1 10.4s4.3 9.5 9.5 9.5c2.1 0 4-.7 5.6-1.8l4.4 4.4 2.1-2.1ZM4 10.5C4 6.9 6.9 4 10.5 4S17 6.9 17 10.5 14.1 17 10.5 17 4 14.1 4 10.5Z"
                    fill="currentColor"></path>
                </svg>
                <input type="text" placeholder="Search in store"
                  style="flex: 1; padding: 10px; border-radius: 4px; font-family: Uber Move; border: none; background-color: transparent; font-family: 'Uber Move Light'; font-size: 18px;"
                  onfocus="this.style.fontFamily='Uber Move Light'; this.style.fontSize='18px';"
                  onblur="this.style.fontFamily='Uber Move Light'; this.style.fontSize='18px';"></input>
              </div>
              <!-- Group Order Button -->
              <button class="group-order" @click="openGroupOrderPopup"
                style="background-color: transparent; color: azure; display: flex; align-items: center; border: none; ">
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="gj dz gk gl"
                  style="width: 24px; height: 24px; margin-right: 5px;">
                  <g clip-path="url(#clip0)">
                    <path fill-rule="evenodd" clip-rule="evenodd" fill="white"
                      d="M10 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm13 5h-3v-3h-3v3h-3v3h3v3h3v-3h3v-3zM1 23h12.1c-1-1.2-1.6-2.8-1.6-4.5 0-1.7.6-3.3 1.6-4.5H7c-3.3 0-6 2.7-6 6v3z">
                    </path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <path d="M0 0h24v24H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                Group order
              </button>
            </div>

            <hr class="divider3">
            <div class="toggle-container" style="margin-top: 20px; font-size: 18px;">
              <button class="toggle-button" :class="{ active: activeToggle === 'Delivery' }"
                @click="setActiveToggle('Delivery')">
                Delivery
              </button>
              <button class="toggle-button" :class="{ active: activeToggle === 'Pickup' }"
                @click="setActiveToggle('Pickup')">
                Pickup
              </button>
              <div class="slider" :style="sliderStyle"></div>
            </div>
            <button @click="openInfo" class="infobutton" style="color: white;">Info<svg width="2em" height="1em" style="font-size: 16px;"
                viewBox="0 0 24 24" fill="none" color="#5E5E5E">
                <title>Circle i</title>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm0 19c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8Zm-1.5-9v7h3v-7h-3ZM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                  fill="white"></path>
              </svg></button>

            <hr class="divider4">

            <button @click="openInfo" class="infobutton" style="color: white; font-size: 16px;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" data-v-167ce9ae=""><title data-v-167ce9ae="">Arrow clockwise</title><path d="M17.9 13c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.4 0 .9.1 1.3.2L9.7 12h3.7l4.4-6-4.4-6H9.7l3 4H12c-5 0-9 4-9 9s4 9 9 9 9-4 9-9h-3.1Z" fill="currentColor" data-v-167ce9ae=""></path></svg>
              Repeat Last </button>



          </div>






        </div>



        <div class="page-layout">
          <nav class="sidebar">
            <ul>
              <h1>Menu</h1>
              <p style="
                  font-family: Uber Move Light;
                  font-size: small;
                  margin-top: -10px;
                  margin-bottom: 30px;
                ">
                Open 24 hrs
              </p>
              <li v-for="section in sections" :key="section.id">
                <a :href="`#${section.id}`" :class="{ active: activeSection === section.id }"
                  @click="scrollToSection(section.id)">
                  <div style="margin-left: 25px; font-size: 20px">
                    {{ section.name }}
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          <main class="content">
            <div class="sections-container">
              <section v-for="section in sections" :key="section.id" :id="section.id" class="dynamic-section">
                <h2 style="
                  text-align: left;
                  margin-top: -72px;
                  font-family: Uber Move;
                ">
                  {{ section.name }}
                </h2>
                <div v-if="section.id === 'ratings'">
                  <div class="container-rect">
                    <div class="rectangle">
                      <div class="rating-container">
                        <span class="rating" style="font-size: 40px">{{
                          restaurant.rating
                          }}</span>
                        <span class="rating-count" style="margin-left: 10px">
                          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" color="#F6BC2F">
                            <title>Star</title>
                            <path
                              d="m12.458 1 3.646 7 7.813.5-5.73 5.5 2.084 8-7.813-4-7.812 4 2.083-8L1 8.5 8.813 8l3.645-7Z"
                              fill="currentColor"></path>
                          </svg>
                          <br />
                          <div style="font-weight: 20; color:darkgrey; font-size: 20px;"> {{ restaurant.ratingCount }}+
                            ratings </div>

                        </span>
                      </div>

                    </div>
                    <div class="rectangle">
                      <div class="testimonial">
                        <div class="testimonial-text" style="text-align: left; margin-left: 10px;">"Exactly what I
                          needed and desired. New for me. My body loved it. Go vegan. Better for Environement"</div>
                        <div class="testimonial-info">
                          <span class="stars" style="margin-right: 10px;">★★★★★</span>
                          <span class="author" style="margin-right: 10px;">Gracie</span>
                          <span class="date">19/4/24</span>
                        </div>
                      </div>
                    </div>
                    <div class="rectangle">
                      <div class="testimonial">
                        <div class="testimonial-text" style="text-align: left; margin-left: 10px;">"The chicken sandwich
                          was perfect. Fresh, tasty, and satisfying. Chick-fil-A always delivers quality"</div>
                        <div class="testimonial-info">
                          <span class="stars" style="margin-right: 10px;">★★★★★</span>
                          <span class="author" style="margin-right: 10px;">Amalda</span>
                          <span class="date">02/11/23</span>
                        </div>
                      </div>
                    </div>
                    <div class="rectangle">
                      <div class="testimonial">
                        <div class="testimonial-text" style="text-align: left; margin-left: 10px;">"Amazing experience
                          every time. The waffle fries and chicken nuggets are top-notch and best i ever had"</div>
                        <div class="testimonial-info">
                          <span class="stars" style="margin-right: 10px;">★★★★★</span>
                          <span class="author" style="margin-right: 10px;">Abraham</span>
                          <span class="date">28/10/23</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="section.id === 'picked-for-you'">
                  <StuffToOrder />
                </div>
                <div v-if="section.id === 'burger'">
                  <BreakfastOrder />
                </div>
                <div v-if="section.id === 'spiceitup'">
                  <Spiceitup />
                </div>
                <div v-if="section.id === 'entrees'">
                  <Entrees />
                </div>
                <div v-if="section.id === 'sides'">
                  <Sides />
                </div>
                <div v-if="section.id === 'beverages'">
                  <Beverages />
                </div>
                <div v-if="section.id === 'salads'">
                  <Salads />
                </div>
                <div v-if="section.id === 'treats'">
                  <Treats />
                </div>
                <div v-if="section.id === 'offers'">
                  <Offers />
                </div>
                <div v-if="section.id === 'dips'">
                  <Dips />
                </div>
                <div v-if="section.id === 'desserts'">
                  <Desserts />
                </div>









              </section>
            </div>
          </main>
        </div>
      </div>
      <transition name="fade">
        <div v-if="showNotification" class="notification">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
              stroke="white" fill="white" />
          </svg>
          <span style="font-family: Uber Move">&nbsp&nbsp&nbsp&nbsp{{ notificationMessage }}</span>
        </div>
      </transition>
      <div v-if="showPopup" class="modal-overlay">
        <!-- <div class="modal-content">
          <div class="popup-header">
            <h2>{{ selectedTab.text }}</h2>
            <button @click="closePopup" aria-label="Close" class="close-button">
              x
            </button>
          </div>
          <div class="popup-body" style="color: black; text-align: left">
            <div id="map"></div>
            <h1>{{ restaurant.name }}</h1>
            <div class="restaurant-info">
              <div class="information">
                <span class="rating">{{ restaurant.rating }} ★ | </span>
                <span>({{ restaurant.ratingCount }}+) | </span>
                <span>{{ restaurant.categories.join(" • ") }} • </span>
                <span class="info-link">Info</span>
              </div>

              <hr class="divider" />
              <div class="address">
                <svg width="29" height="29" viewBox="0 0 24 24" fill="none">
                  <title>Location marker</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1c2.4 0 4.9.9 6.7 2.8 3.7 3.7 3.7 9.8 0 13.4L12 24l-6.7-6.7c-3.7-3.7-3.7-9.8 0-13.5C7.1 1.9 9.6 1 12 1Zm0 18.8 4.6-4.6c2.5-2.6 2.5-6.7 0-9.3C15.4 4.7 13.7 4 12 4c-1.7 0-3.4.7-4.6 1.9-2.5 2.6-2.5 6.7 0 9.3l4.6 4.6Zm2-9.3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h3 style="margin-left: 5px; font-family: Uber Move">
                  {{ restaurant.fullAddress }}
                </h3>
                <svg
                  style="margin-left: 100px"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  color="#A6A6A6"
                >
                  <title>Copy</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 1h17v17H1V1Zm3 14h11V4H4v11Zm16 5V6h3v17H6v-3h14Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <hr class="divider" />
              <div class="opens-at">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <title>Clock</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12Zm3 0c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8Zm6.5 2.5V7h3v4.5H17v3h-6.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h3 style="margin-left: 5px; font-family: Uber Move">
                  {{ restaurant.OpeningTime }}
                </h3>
              </div>
              <hr class="divider" />
              <div class="opens-at">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <title>Star</title>
                  <path
                    d="M23.917 8.5 16.104 8l-3.646-7-3.646 7L1 8.5 6.73 14l-2.084 8 7.812-4 7.813 4-2.084-8 5.73-5.5Zm-8.855 4.7L16 16.8 12.458 15l-3.541 1.8.937-3.6-2.5-2.4 3.23-.2L12.457 7l1.875 3.6 3.23.2-2.5 2.4Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h3 style="margin-left: 5px; font-family: Uber Move">
                  {{ restaurant.rating }} | ({{ restaurant.ratingCount }}+
                  ratings)
                </h3>
              </div>
            </div>
          </div>
        </div> -->
        <div class="modal-content">
          <div class="popup-header">
            <div class="order-image">
              <img
                src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_300,h_300/v1666628796/assets/b0/b78d38-638b-460e-a387-d5e4178436de/original/Icon_Meal_Programs_150x150.svg"
                alt="Group Order Items" class="group-order-image">
              <button @click="closePopup" aria-label="Close" class="close-button">
                x
              </button>
            </div>
          </div>

          <div class="popup-body" style="color: black; text-align: left">


            <h1 style="margin-top: -10px; font-size: 35px;">{{ restaurant.name }}</h1>
            <!-- <p style="padding: 0px; margin-bottom: 0px; margin-top: 0px; font-family: Uber Move Light;">From Domino's</p> -->
            <!-- <p style="padding: 0px; margin-top: 0px;font-family: Uber Move Light;">Deliver to Santa Barbara</p> -->
            <div class="information" style="font-family: Uber Move Light;">
              <span class="rating">{{ restaurant.rating }} ★ | </span>
              <span>({{ restaurant.ratingCount }}+) | </span>
              <span>{{ restaurant.categories.join(" • ") }} • </span>
              <span class="info-link">Info</span>
            </div>

            <div class="order-details">
              <div class="detail-item">
                <span class="icon" style="margin-right: 20px;"><svg width="29" height="29" viewBox="0 0 24 24"
                    fill="none">
                    <title>Location marker</title>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 1c2.4 0 4.9.9 6.7 2.8 3.7 3.7 3.7 9.8 0 13.4L12 24l-6.7-6.7c-3.7-3.7-3.7-9.8 0-13.5C7.1 1.9 9.6 1 12 1Zm0 18.8 4.6-4.6c2.5-2.6 2.5-6.7 0-9.3C15.4 4.7 13.7 4 12 4c-1.7 0-3.4.7-4.6 1.9-2.5 2.6-2.5 6.7 0 9.3l4.6 4.6Zm2-9.3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                      fill="currentColor"></path>
                  </svg></span>
                <div>
                  <strong>{{ restaurant.fullAddress }}</strong>

                  <!-- <p style="margin-top: 0px;  font-family: Uber Move Light;">No deadline set</p> -->
                  <hr class="divider">

                </div>
                <span class="edit-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Edit">
                    <title>Pencil</title>
                    <g fill="currentColor">
                      <path
                        d="m14.4 6.6 3 3L5 22H2v-3L14.4 6.6ZM19.071 1.99l-2.475 2.474 2.97 2.97 2.475-2.475-2.97-2.97Z">
                      </path>
                    </g>
                  </svg></span>

              </div>
              <div class="detail-item">
                <span class="icon" style="margin-right: 20px;"><svg width="28" height="28" viewBox="0 0 24 24"
                    fill="none">
                    <title>Star</title>
                    <path
                      d="M23.917 8.5 16.104 8l-3.646-7-3.646 7L1 8.5 6.73 14l-2.084 8 7.812-4 7.813 4-2.084-8 5.73-5.5Zm-8.855 4.7L16 16.8 12.458 15l-3.541 1.8.937-3.6-2.5-2.4 3.23-.2L12.457 7l1.875 3.6 3.23.2-2.5 2.4Z"
                      fill="currentColor"></path>
                  </svg></span>
                <div>
                  <strong>{{ restaurant.OpeningTime }}</strong>
                  <!-- <p style="margin-top: 0px; font-family: Uber Move Light;">No spending limit</p> -->
                  <hr class="divider">

                </div>
                <span class="edit-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Edit">
                    <title>Pencil</title>
                    <g fill="currentColor">
                      <path
                        d="m14.4 6.6 3 3L5 22H2v-3L14.4 6.6ZM19.071 1.99l-2.475 2.474 2.97 2.97 2.475-2.475-2.97-2.97Z">
                      </path>
                    </g>
                  </svg></span>
              </div>

              <div class="detail-item">
                <span class="icon" style="margin-right: 20px;"><svg width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <title>Clock</title>
                    <path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm6 13h-8V4h3v7h5v3Z"
                      fill="currentColor"></path>
                  </svg></span>
                <div>
                  <strong>{{ restaurant.rating }} ({{ restaurant.ratingCount }}+ ratings)</strong>
                  <p style="margin-top: 0px; font-family: Uber Move Light;">{{ restaurant.categories.join(" • ") }} </p>
                  <hr class="divider">

                </div>
                <span class="edit-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Edit">
                    <title>Pencil</title>
                    <g fill="currentColor">
                      <path
                        d="m14.4 6.6 3 3L5 22H2v-3L14.4 6.6ZM19.071 1.99l-2.475 2.474 2.97 2.97 2.475-2.475-2.97-2.97Z">
                      </path>
                    </g>
                  </svg></span>
              </div>
            </div>

            <button @click="closeGroupOrderPopup" class="invite-button">Order Online</button>
          </div>
        </div>
      </div>
      <div v-if="showGroupOrderPopup" class="modal-overlay">
        <div class="modal-content">
          <div class="popup-header">
            <div class="order-image">
              <img src="https://www.ubereats.com/_static/599c925a5b7f753e.svg" alt="Group Order Items"
                class="group-order-image">
              <button @click="closeGroupOrderPopup" aria-label="Close" class="close-button">
                x
              </button>
            </div>
          </div>

          <div class="popup-body" style="color: black; text-align: left">


            <h1 style="margin-top: 20px; font-size: 35px;">Parth's group order</h1>
            <p style="padding: 0px; margin-bottom: 0px; margin-top: 0px; font-family: Uber Move Light;">From Domino's
            </p>
            <p style="padding: 0px; margin-top: 0px;font-family: Uber Move Light; font-size: 16px;">Deliver to Santa
              Barbara</p>

            <div class="order-details">
              <div class="detail-item">
                <span class="icon" style="margin-right: 20px;"><svg width="24" height="24" viewBox="0 0 24 24"
                    fill="none" data-v-167ce9ae="">
                    <title data-v-167ce9ae="">Clock</title>
                    <path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm6 13h-8V4h3v7h5v3Z"
                      fill="currentColor" data-v-167ce9ae=""></path>
                  </svg></span>
                <div>
                  <strong>People can order at any time</strong>

                  <p style="margin-top: 0px;  font-family: Uber Move Light;">No deadline set</p>
                  <hr class="divider2">

                </div>
                <span class="edit-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Edit">
                    <title>Pencil</title>
                    <g fill="currentColor">
                      <path
                        d="m14.4 6.6 3 3L5 22H2v-3L14.4 6.6ZM19.071 1.99l-2.475 2.474 2.97 2.97 2.475-2.475-2.97-2.97Z">
                      </path>
                    </g>
                  </svg></span>

              </div>
              <div class="detail-item">
                <span class="icon" style="margin-right: 20px;"><svg width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <title>Money</title>
                    <path
                      d="M1 4v16h22V4H1Zm5 5H3V6h3v3Zm6 6c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3Zm9 3h-3v-3h3v3Z"
                      fill="currentColor"></path>
                  </svg></span>
                <div>
                  <strong>You pay for everyone</strong>
                  <p style="margin-top: 0px; font-family: Uber Move Light;">No spending limit</p>
                  <hr class="divider2">

                </div>
                <span class="edit-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Edit">
                    <title>Pencil</title>
                    <g fill="currentColor">
                      <path
                        d="m14.4 6.6 3 3L5 22H2v-3L14.4 6.6ZM19.071 1.99l-2.475 2.474 2.97 2.97 2.475-2.475-2.97-2.97Z">
                      </path>
                    </g>
                  </svg></span>
              </div>

              <div class="detail-item">
                <span class="icon" style="margin-right: 20px;"><svg width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <title>Arrow clockwise</title>
                    <path
                      d="M17.9 13c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.4 0 .9.1 1.3.2L9.7 12h3.7l4.4-6-4.4-6H9.7l3 4H12c-5 0-9 4-9 9s4 9 9 9 9-4 9-9h-3.1Z"
                      fill="currentColor"></path>
                  </svg></span>
                <div>
                  <strong>Does not repeat</strong>
                  <p style="margin-top: 0px; font-family: Uber Move Light;">Set as a repeat group order to place at
                    recurring times</p>
                  <hr class="divider2">

                </div>
                <span class="edit-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Edit">
                    <title>Pencil</title>
                    <g fill="currentColor">
                      <path
                        d="m14.4 6.6 3 3L5 22H2v-3L14.4 6.6ZM19.071 1.99l-2.475 2.474 2.97 2.97 2.475-2.475-2.97-2.97Z">
                      </path>
                    </g>
                  </svg></span>
              </div>
            </div>

            <button class="invite-button">Invite people</button>
          </div>
        </div>
      </div>

      <div v-if="showInfo" class="modal-overlay">
        <div class="modal-content">
          <div class="popup-header">
            <h2>Store Info</h2>
            <button @click="closeInfo" aria-label="Close" class="close-button">
              x
            </button>
          </div>
          <div class="popup-body" style="color: black; text-align: left">
            <p style="font-weight: 100">{{ restaurant.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
// const container = document.querySelector('.toggle-container');
// const buttons = container.querySelectorAll('.toggle-button');
// const slider = container.querySelector('.slider');

// buttons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     buttons.forEach(btn => btn.classList.remove('active'));
//     button.classList.add('active');
//     slider.style.transform = `translateX(${index * 100}%)`;
//   });
// });
import StuffToOrder from './DetailView/StuffToOrder.vue'
import BreakfastOrder from './DetailView/BreakfastOrder.vue'
import Sidebarbody from "./Sidebarbody.vue";
import Spiceitup from './DetailView/Spiceitup.vue'
import Entrees from './DetailView/Entrees.vue'
import Sides from './DetailView/Sides.vue'
import Beverages from './DetailView/Beverages.vue'
import Salads from './DetailView/Salads.vue'
import Treats from './DetailView/Treats.vue'
import Offers from './DetailView/Offers.vue'
import Dips from './DetailView/Dips.vue'
import Desserts from './DetailView/Desserts.vue'
import Footer from './Footer.vue'
export default {
  components: {
    Sidebarbody, StuffToOrder, BreakfastOrder, Spiceitup, Entrees, Sides, Beverages, Salads, Treats, Offers, Dips, Desserts, Footer
  },
  name: "RestaurantDetailView",
  data() {
    return {
      isFavorite: false,
      showNotification: false,
      activeToggle: 'Delivery',


      notificationMessage: "",
      showPopup: false,
      showGroupOrderPopup: false,

      showInfo: false,
      selectedTab: { text: "Details" },
      activeSection: "",
      user: [
        { id: "1", mame: "Parth" }
      ],
      sections: [
        { id: "ratings", name: "Ratings" },
        { id: "picked-for-you", name: "Picked for you" },
        { id: "burger", name: "Burgers" },
        { id: "spiceitup", name: "Spice it Up" },
        { id: "entrees", name: "Entrées" },
        { id: "sides", name: "Sides" },
        { id: "beverages", name: "Beverages" },
        { id: "salads", name: "Salads" },
        { id: "treats", name: "Treats" },
        { id: "offers", name: "Offers" },
        { id: "dips", name: "Dips" },
        { id: "desserts", name: "Desserts" },
      ],
      items: [
        {
          name: "Chick-fil-A® Nuggets Meal",
          price: 15.29,
          image:
            "https://www.kitchenathoskins.com/wp-content/uploads/2020/09/air-fryer-chicken-nuggets-28.jpg",
          rank: " ＃ 1 most liked",
          quantity: 0,
        },
        {
          name: "Chick-fil-A® Nuggets",
          price: 8.55,
          image:
            "https://girlscangrill.com/wp-content/uploads/2015/12/copycat-chick-fil-a-chicken-nuggets-500x500.jpg",
          rank: "＃ 2 most liked",
          quantity: 0,
        },
        {
          name: "Spicy Southwest Salad",
          price: 14.55,
          image:
            "https://realhousemoms.com/wp-content/uploads/Copycat-Chick-Fil-A-Spicy-Southwest-Salad-RECIPE-CARD.jpg",
          rank: "＃ 3 most liked",
          quantity: 0,
        },
        {
          name: "Chick-fil-A ChickMeal® Meal",
          price: 13.09,
          image:
            "https://i.ibb.co/8XBLVc3/chick-fil-a-9jv-1200xx2918-2918-185-0.jpg",
          quantity: 0,
        },

        {
          name: "Chick-fil-A ChickSalad® Meal",
          price: 13.09,
          image:
            "https://summeryule.com/wp-content/uploads/2022/04/southwest-salad-chick-fil-a.jpeg",
          quantity: 0,
        },

        {
          name: "Chick-fil-A Chick-n-Macros Meal",
          price: 13.09,
          image:
            "https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Daypart%20Hero/Winter23/Winter23-DotCom-ChickenSandwich-D_720x748.jpg?h=748&w=720&la=en",
          quantity: 0,
        },
        {
          name: "Chick-fil-A Waffles",
          price: 13.09,
          image:
            "https://assets.entrepreneur.com/content/3x2/2000/20180403185342-12030542-10153912476520101-9019529450634602395-o.jpeg?format=pjeg&auto=webp&crop=1:1",
          quantity: 0,
        },
      ],
      currentIndex: 0,

      restaurant: {
        name: "Chick-fil-A",
        address: "3707 State St",
        fullAddress: "3707 State St, Santa Clara, United States",
        OpeningTime: "Everyday from 9am till 11pm",
        rating: 4.7,
        ratingCount: 1500,
        categories: [
          "Fast Food",
          "American",
          "Breakfast and Brunch",
          "Chicken",
        ],
        deliveryUnavailable: true,
        description:
          "Chick-fil-A on State Street in Santa Barbara offers a variety of fast food options, specializing in chicken-based dishes. Popular menu items among customers include the Spicy Chicken Sandwich Deluxe Meal.",
        // ... other data
      },
      // ... other data properties
    };
  },
  computed: {
    sliderStyle() {
      return {
        transform: this.activeToggle === 'Delivery' ? 'translateX(0)' : 'translateX(100%)',
      };
    },
  },
  methods: {
    setActiveToggle(toggle) {
      this.activeToggle = toggle;
    },
    handleScroll() {
      const scrollPosition = window.scrollY;
      for (let i = this.sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(this.sections[i].id);
        if (section.offsetTop <= scrollPosition) {
          this.activeSection = this.sections[i].id;
          break;
        }
      }
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      element.scrollIntoView({ behavior: "smooth" });
    },
    openPopup() {
      this.showPopup = true;
      this.$nextTick(() => {
        this.loadGoogleMapsScript();
      });
    },
    openInfo() {
      this.showInfo = true;
      console.log(this.showInfo);
    },
    closeInfo() {
      this.showInfo = false;
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
      this.notificationMessage = this.isFavorite
        ? "Added to favorites"
        : "Removed from favorites";
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, 2000); // Notification will disappear after 2 seconds
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    nextSlide() {
      if (this.currentIndex < this.items.length - 4) {
        this.currentIndex++;
      }
    },
    openGroupOrderPopup() {
      this.showGroupOrderPopup = true;

      this.selectedTab = { text: "Group Order" };
    },
    closeGroupOrderPopup() {
      this.showGroupOrderPopup = false;
    },
    addToCart(index) {
      this.items[index].quantity++;
    },
    removeFromCart(index) {
      if (this.items[index].quantity > 0) {
        this.items[index].quantity--;
      }
    },
    closePopup() {
      this.showPopup = false;
    },
    loadGoogleMapsScript() {
      if (typeof google === "undefined") {
        const script = document.createElement("script");

        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAgrmQKFgTQNPpdwbyrobLDlBkNxtCu0v4&callback=initMap`;

        script.async = true;

        script.defer = true;

        script.onload = this.initMap;

        document.head.appendChild(script);
      } else {
        this.initMap();
      }
    },

    initMap() {
      const uluru = { lat: -25.344, lng: 131.036 };

      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,

        center: uluru,
      });

      const marker = new google.maps.Marker({
        position: uluru,

        map: map,
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll(); // Initial check
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  // ... methods and other component options
};
</script>

<style scoped>
.infobutton {
  height: 44px;
  margin-left: 80px;
  font-family: Uber Move;
}

.infobutton svg {
  margin-left: 1px;
  margin-top: 5px;
  margin-bottom: -3px;
}

.searchbarr {
  border: none;
  border-radius: 20px;

}

.restaurant-detail {
  font-family: Arial, sans-serif;
  max-width: 1700px;
  margin: 0 auto;
  background-color: #101010;
  color: #ffffff;
  width: 1300px;
}

.poster {
  position: relative;
  width: 100%;
  height: 300px;
  /* Adjusted height */
  overflow: hidden;
  border-radius: 8px 8px 0 0;
}

.poster img {
  width: 100%;
  height: 100%;
  /* Make sure the image covers the new height */
  object-fit: cover;
}

.poster-actions {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
}

.poster-actions button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
}

.divider {
  border: none;
  height: 2px;
  background-color: #ebeaea;
  width: 400px;
  margin-top: 20px;
}

.divider2 {
  border: none;
  height: 2px;
  background-color: #ebeaea;
  width: 400px;
}

.divider3 {
  border: none;
  height: 1px;
  background-color: #1a1a1a;
  width: 300px;
}

.divider4 {
  border: none;
  height: 1px;
  background-color: #1a1a1a;
  width: 300px;
  margin-top: 30px;
}

.content {
  padding: 0px;
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
  text-align: left;
}

.restaurant-info {
  font-size: 14px;
  text-align: left;
}

.rating {
  font-weight: bold;
}

.info-link {
  color: #5557ca;
  text-decoration: underline;
}

.delivery-status {
  color: #ff4500;
  margin-bottom: 10px;
}

.group-order {
  float: right;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  width: 120px;
  background-color: transparent;
  /* Set to transparent for consistency */
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: azure;
  /* Ensures text color is azure */
  font-family: "Uber Move";
  text-overflow: hidden;
  width: 1200px;

}

.group-order svg {
  margin-right: 8px;
  transform: scale(1.3);
}


.description {
  margin-top: 20px;
  font-size: 14px;
  text-align: left;
}

.favorite svg path {
  stroke: black;
  fill: white;
}

.favorite svg path.filled {
  fill: black;
  stroke: black;
}

.notification {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  z-index: 1000;
}

.notification img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.modal-content {
  background: white;
  border-radius: 20px;
  position: relative;
  width: 500px;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.restaurant-details-img {
  max-width: 100%;
  height: auto;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
}

.popup-header h2 {
  font-family: "Uber Move";
  color: black;
  margin: 0;

}

.close-button {
  position: absolute;
  top: 5px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: rgb(0, 0, 0);
  /* Changed to white for better visibility on dark background */
  border: none;
  border-radius: 50%;

  width: 30px;
  height: 30px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 0;
  /* Ensure no padding affects the circle shape */
  line-height: 1;
  /* Helps center the 'x' vertically */
}


.popup-body {
  display: flex;
  flex-direction: column;
  font-family: Uber Move;
}

#map {
  height: 200px;
  /* Adjust the height as needed */

  width: 100%;
  /* The width is the width of the container */
}

.address {
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
}

.address svg {
  margin-right: 10px;
  transform: scale(0.7);
}

.opens-at {
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: -7px;
  margin-bottom: -7px;
}

.opens-at svg {
  margin-right: 10px;
  margin-top: -10px;
  margin-bottom: -10px;
  transform: scale(0.7);
}

.information {
  margin-bottom: 15px;
}

.top-picks-slider {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  transform: scale(0.7);
  align-items: left;
  margin-left: -180px;
  margin-top: -70px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.slider-container {
  overflow: hidden;
  width: 100%;
  text-align: left;
}

.slides-wrapper {
  display: flex;
  transition: transform 0.3s ease;
  width: fit-content;
}

.slide {
  flex: 0 0 25%;
  padding: 10px;
  box-sizing: border-box;
  width: 25%;
}

.item-image {
  position: relative;
}

.item-image img {
  width: 100%;
  border-radius: 8px;
}

.rank-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
}

.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-info {
  flex-grow: 1;
  text-align: left;
}

h3 {
  font-size: 23px;
}

.price {
  font-weight: bold;
  margin-top: 0;
}

.add-button {
  background-color: transparent;
  border: none;
  color: green;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  margin-left: 10px;
}

.rank-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
}

.more1 {
  padding: 0px;
  background-color: transparent;
  color: #5557ca;
}

h3 {
  font-size: 16px;
}

.info-rectangle {
  background-color: transparent;
  border: 2px solid #1a1a1a;
  width: 320px;
  margin-left: -120px;
  height: 350px;
  border-radius: 20px;

}

.price {
  font-weight: bold;
  margin-top: -10px;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-button {
  display: flex;
  border-radius: 50%;
  /* Changed to 50% for a perfect circle */
  width: 60px;
  /* Added fixed width */
  height: 60px;
  /* Added fixed height */
  align-items: center;
  justify-content: center;
  background-color: transparent;
  /* Or any color you prefer */
  border: none;
  cursor: pointer;
  margin: 0 5px;
}

.nav-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.nav-buttons svg {
  width: 24px;
  height: 24px;
}

.nav-buttons svg path {
  fill: #f3f3f3;
}

.nav-button.prev,
.nav-button.next {
  border-radius: 50%;
  /* Ensure perfect circle */
  background-color: #1a1a1a;
}

.cart-button {
  background-color: transparent;
  border: none;
  color: green;
  font-size: 18px;
  cursor: pointer;
  padding: 0px;
  width: 40px;
  /* Adjust width */
  height: 40px;
  /* Adjust height */
  border-radius: 50%;
  /* Make the button a circle */
  margin-left: 5px;
  margin-right: 5px;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-button:hover {
  background-color: rgba(0, 128, 0, 0.1);
}

.img-stuff {
  width: 100%;
  height: 100%;
}

.infobutton {
  background-color: transparent;
  padding: 0px;
  color: #5557ca;
}

.page-layout {
  display: flex;
}

.sidebar {
  width: 1250px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  background-color: transparent;
  padding: 25px 0px 0px 0px;
  text-align: left;
  font-size: 25px;
  font-family: Uber Move;
  margin-top: -100px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin-left: 0px;
}

.sidebar li {
  margin-bottom: 30px;
  margin-left: 0px;
}

.sidebar a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.sidebar a.active {
  /* border: 1px solid grey; */
  background-color: #1a1a1a;
  padding: 10px 0px 10px 0px;
  border-radius: 0px;
  width: 100%;
  display: block;
  position: relative;
  /* added */
}

.sidebar a.active::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 5px;
  /* adjust width as needed */
  background-color: rgb(54, 54, 54);
}

.content {
  flex-grow: 1;
  padding: 20px;
}

section {
  min-height: 500px;
  /* Adjust as needed to ensure scrolling */
}

.container-rect {
  display: flex;
  justify-content: space-between;
  /* Adjust spacing as needed */
  gap: 6px;
  /* Space between rectangles */
  padding: 0px;
  /* Optional padding for the container */
  margin-bottom: 60px;
}

.rectangle {
  width: 220px;
  /* Adjust the width as needed */
  height: 150px;
  /* Adjust the height as needed */
  background-color: transparent;
  border: 0.5px solid;
  border-color: #202020;
  /* Rectangle color */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  /* Text color */
  font-size: 24px;
  /* Text size */
  border-radius: 8px;
  /* Optional rounded corners */

}

.rectangle1 {
  width: 1000px;
  /* Adjust the width as needed */
  height: 150px;
  /* Adjust the height as needed */
  background-color: transparent;
  border: 0.5px solid;
  border-color: #202020;
  /* Rectangle color */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  /* Text color */
  font-size: 24px;
  /* Text size */
  border-radius: 8px;
  /* Optional rounded corners */

}

.testimonial-text {
  font-size: 16px;
  margin-bottom: 18px;
  font-family: Uber Move Light;
}

.testimonial-info {
  font-size: 12px;
  color: #666;
}

.sections-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* Increased gap between sections */
}

.dynamic-section {
  display: flex;
  flex-direction: column;
  min-height: auto;
  /* Remove fixed height */
}

.invite-button {
  background: black;
  color: white;
  border: none;
  padding: 15px;
  width: 100%;
  border-radius: 8px;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
}

.edit-icon {
  margin-left: auto;
}

.icon {
  font-size: 24px;
  margin-right: 15px;
}

.order-details {
  margin-top: 20px;
}

.detail-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

h2 {
  font-size: 24px;
  margin-bottom: 5px;
}

.modal-content {
  background: white;
  border-radius: 12px;
  padding: 20px;
  width: 90%;
  max-width: 500px;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.close-button,
.question-mark {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.order-image {
  position: relative;
  width: 100%;
  text-align: center;
  height: 200px;
  background-color: #ffffff;
}


.group-order-image {
  width: 100%;
  max-width: 300px;
  height: 220px;
  background-color: transparent;
}

.intial-content {
  display: flex;
  justify-content: center;
}

input::placeholder {
  font-family: 'Uber Move';
  /* Ensure you have this font imported */
  font-size: 18px;
  /* Adjust font size as needed */
  color: white;
  /* Optional: adjust the placeholder text color */
}

.toggle-container {
  display: inline-flex;
  background-color: transparent;
  border-radius: 10px;
  padding: 2px;
  position: relative;
  font-family: Uber Move;
  height: 44px;
}

.toggle-button {
  border: none;
  background-color: transparent;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
  z-index: 1;
}

.slider {
  position: absolute;
  top: 2px;
  left: 2px;
  bottom: 2px;
  width: calc(50% - 2px);
  background-color: white;
  border-radius: 9999px;
  transition: transform 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.toggle-button.active {
  color: black;
}

.toggle-button:not(.active) {
  color: white;
}

.toggle-button:focus {
  outline: none;
}
</style>
