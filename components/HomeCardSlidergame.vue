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
    const totalItems = this.items.length;

    // Function to determine slidesToShow based on screen width
    const getSlidesToShow = () => {
      if (totalItems <= 6) {
        return totalItems; // Show all items if less than or equal to 6
      }
      return (
        {
          1600: 7,
          1500: 6,
          1400: 5,
          1300: 4,
          1200: 3,
          992: 2,
          768: 1,
        }[window.innerWidth] || 6.6
      ); // Default to 6.6 if width is not in breakpoints
    };

    // Initialize Slick Carousel
    $slider.slick({
      speed: 1000,
      slidesToShow: getSlidesToShow(), // Number of slides to show based on screen width
      slidesToScroll: 1,
      // adaptiveHeight: true,
      // autoplay: true,
      autoplaySpeed: 10000,
      touchMove: true,
      draggable: true,
      pauseOnHover: true, // Pause on hover
      pauseOnFocus: true, // Pause on focus
      centerMode: false, // Center the active slide
      centerPadding: "0px", // Padding for center mode // Pause on hover

    });

    // Add event listeners for touchend and mouseup
    $slider.on('touchend mouseup', function () {
      $slider.slick('slickPause'); // Pause the slider
    });

    // Update slidesToShow on window resize
    window.addEventListener("resize", () => {
      $slider.slick("slickSetOption", "slidesToShow", getSlidesToShow(), true);
    });
  },
};
</script>
