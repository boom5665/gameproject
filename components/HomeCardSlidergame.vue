<template>
  <div class="slider-container slider-game">
    <div class="slider" ref="slider">
      <div class="tpn_game" v-for="item in items" :key="item.id">
        <img :src="item.img" class="tpn_cardimg" />
        <div class="content-game-under">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    const $slider = $(this.$refs.slider);
    $slider.slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1, // Default number of slides to show
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
      touchMove: true, // Enable touch movement
      draggable: true, // Enable draggable
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $slider.on("afterChange", function (event, slick, currentSlide) {
      // Restart autoplay after user interaction
      $slider.slick("slickPlay");
    });
  },
};
</script>

<style>

</style>
