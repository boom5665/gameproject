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

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
     const $slider = $(this.$refs.slider);
    $(this.$refs.slider).slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
      touchMove: true, // Enable touch movement
      draggable: true, // Enable draggable
    });
     $slider.on('afterChange', function(event, slick, currentSlide){
      // Restart autoplay after user interaction
      $slider.slick('slickPlay');
    });
  },
};
</script>

<style>
.slider-container {
  width: 80%;
  margin: 0px auto;
}
.slick-slide img {
  width: 100%;
}
</style>

<style scoped>


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

.dis-play-recom {
  display: flex;
  justify-content: space-between;
  padding: 25px;
}

.img-recom {
  width: 26px;
  height: 26px;
  margin-right: 5px;
  top: -5px;
  position: relative;
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
