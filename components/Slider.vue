<template>
  <div class="slider-container">
    <!-- Slider -->
    <div class="slider" ref="slider">
      <slide-item v-for="item in items" :key="item.id" :item="item" />
    </div>
    <!-- Navigation Buttons -->
    <div class="center-flex">
      <button
        v-if="items.length > 6"
        class="button left"
        @click="slide('left')"
      >
        <img src="~/assets/image/arrow-left.png" alt="Left Arrow" />
      </button>
      <button
        v-if="items.length > 6"
        class="button right"
        @click="slide('right')"
      >
        <img src="~/assets/image/arrow-right.png" alt="Right Arrow" />
      </button>
    </div>
  </div>
</template>

<script>
import SlideItem from "./SlideItem.vue";

export default {
  components: {
    SlideItem,
  },
  props: {
    items: Array,
    interval: Number,
  },
  data() {
    return {
      activeDot: 0,
      autoSlideInterval: null,
    };
  },
  computed: {
    numberOfDots() {
      return Math.ceil(this.items.length / 4); // Divide items by 4 because 4 items are displayed per slide
    },
  },
  mounted() {
    if (this.items.length > 6) {
      // Start auto-slide only when there are more than 6 items
      this.startAutoSlide();
    }
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
    this.stopAutoSlide();
  },
  methods: {
    startAutoSlide() {
      if (this.items.length > 6) {
        // Check the number of items before starting auto-slide
        this.autoSlideInterval = setInterval(() => {
          this.slide("right");
        }, 5000); // Change to the interval you want
      }
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },
    handleResize() {
      this.goToSlide(this.activeDot);
    },
    goToSlide(index) {
      this.activeDot = index;
      const slider = this.$refs.slider;
      const slideWidth = slider.clientWidth / 1.2; // Number of items per slide
      const totalSlides = this.numberOfDots;
      slider.style.left = `-${index * slideWidth}px`;
      console.log(`Going to slide ${index}, slider width: ${slider.clientWidth}, slide width: ${slideWidth}`);
    },
    slide(direction) {
      if (this.items.length <= 6) return; // Exit if the number of items is 6 or less

      const slider = this.$refs.slider;
      const slideWidth = slider.clientWidth / 4; // Number of items per slide
      const totalSlides = this.numberOfDots;
      let newIndex = this.activeDot;

      if (direction === "right") {
        if (newIndex < totalSlides - 1) {
          newIndex++;
        } else {
          newIndex = 0; // Go back to the first slide
          // alert('Reached the first slide'); // Show alert when sliding back to the first slide
        }
      } else if (direction === "left") {
        if (newIndex > 0) {
          newIndex--;
        } else {
          newIndex = totalSlides - 1; // Go to the last slide
          // alert('Reached the last slide'); // Show alert when sliding to the last slide
        }
      }

      this.goToSlide(newIndex);
    },
  },
};
</script>


<style scoped>
.slider-container {
  position: relative;
  overflow: hidden;
}

.slider {
  display: flex;
  transition: left 0.5s ease;
}

.center-flex {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 40%;
  transform: translateY(-50%);
  z-index: 100;
}

.button {
  background-color: #000; /* สีม่วงสำหรับพื้นหลัง */
  border: none;
  cursor: pointer;
  border-radius: 4px; /* เพิ่มความโค้งให้ปุ่ม */
  padding: 10px; /* เพิ่มพื้นที่ภายในปุ่ม */
}

.button img {
  width: 24px; /* ขนาดของลูกศร */
  height: 24px;
  vertical-align: middle; /* จัดแนวให้ลูกศรอยู่ตรงกลาง */
}

.left {
  position: absolute;
  left: 10px;
}

.right {
  position: absolute;
  right: 10px;
}
</style>
