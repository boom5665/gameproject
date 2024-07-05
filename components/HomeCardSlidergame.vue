<template>
  <div class="slider-container">
    <div class="slider" ref="slider">
      <div class="tpn_game" v-for="item in items" :key="item.id">
        <img :src="item.imageSrc" class="tpn_cardimg" />
        <div class="content-game-under">{{ item.subtitle }}</div>
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
      slidesToShow: 4, // Default number of slides to show
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
.slider-container {
  width: 80%;
  margin: 0 auto;
}

.slick-slide img {
  width: 100%;
}

.slider {
  display: flex;
  transition: left 0.3s ease;
  position: relative;
  left: 0;
}

.tpn_cardimg {
  width: 164px;
  height: 164px;
  border-radius: 164px;
}

.tpn_game {
  flex: 0 0 50px; /* กำหนดความกว้างของแต่ละการ์ด */
  margin-right: 20px; /* เพิ่มช่องว่างระหว่างการ์ด */
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
}

.content-game-under {
  color: var(--color-black-white-900, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>
