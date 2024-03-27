<template>
  <div id="image-slider" class="splide">
    <div class="splide__track">
      <ul class="splide__list">
        <li v-for="(slide, index) in slides" :key="index" class="splide__slide">
          <img :src="slide.image" alt="Slide Image">
          <div class="caption">
            {{ slide.description }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9lYExcTMO2pfq58u_UdDqcM5GUgn4EijqbgO-n9FGaw&s',
          description: 'Description 01'
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9lYExcTMO2pfq58u_UdDqcM5GUgn4EijqbgO-n9FGaw&s',
          description: 'Description 02'
        }
      ]
    };
  },
  mounted() {
    new Splide('#image-slider', {
      type: 'fade',
      heightRatio: 0.5,
      autoplay: true,
      interval: 3000,
    }).mount();
  }
};
</script>

<style scoped>

</style>
