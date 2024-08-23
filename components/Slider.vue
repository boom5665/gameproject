<template>
  <div class="slider-container">
    <!-- Slider -->
    <div class="slider" ref="slider">
      <slide-item v-for="item in items" :key="item.id" :item="item" />
    </div>
    <!-- ปุ่มนำทาง -->
    <div class="center-flex">
      <button class="botton left" @click="slide('left')">
        <img src="~/assets/image/arrow-left.png" alt="" />
      </button>
      <button class="botton right" @click="slide('right')">
        <img src="~/assets/image/arrow-right.png" alt="" />
      </button>
    </div>

    <!-- จุดสำหรับนำทาง -->
    <div class="dots">
      <span
        class="dot"
        v-for="(dot, index) in numberOfDots"
        :key="index"
        :class="{ active: index === activeDot }"
        @click="goToSlide(index)"
      ></span>
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
    };
  },
  computed: {
    numberOfDots() {
      return Math.ceil(this.items.length / 4); // แบ่งจำนวน items ด้วย 4 เพราะว่าแสดง 4 items ต่อ slide
    },
  },
  mounted() {
    this.startAutoSlide();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
    this.stopAutoSlide();
  },
  methods: {
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.slide("right");
      }, 5000); // เปลี่ยนเป็นระยะเวลาที่คุณต้องการ
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
      const slideWidth = slider.clientWidth / 4; // จำนวน items ต่อ slide
      slider.style.left = `-${index * slideWidth}px`;
    },
    slide(direction) {
      const slider = this.$refs.slider;
      const slideWidth = slider.clientWidth / 4; // จำนวน items ต่อ slide
      const totalSlides = this.numberOfDots;
      let newIndex = this.activeDot;

      if (direction === "right") {
        if (newIndex < totalSlides - 1) {
          newIndex++;
        } else {
          newIndex = 0; // กลับไปที่ slide แรก
        }
      } else if (direction === "left") {
        if (newIndex > 0) {
          newIndex--;
        } else {
          newIndex = totalSlides - 1; // ไปที่ slide สุดท้าย
        }
      }

      this.goToSlide(newIndex);
    },
  },
};
</script>

<style>
.center-flex {
  display: flex;
  justify-content: center;
}
.botton {
  cursor: pointer;
  color: black;
  background: transparent;
  border: none;
}
.right {
  position: relative;
  right: -45px;
  top: 20px;
  z-index: 100;
}
.left {
  position: relative;
  left: -45px;
  top: 20px;
  z-index: 100;
}
</style>
