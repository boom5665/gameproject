<!-- Slider.vue -->
<template>
  <div class="slider-container">
    <!-- Slider -->
    <div class="slider" ref="slider">
      <slide-item v-for="item in items" :key="item.id" :item="item" />
    </div>
    <!-- ปุ่มนำทาง -->
    <div class="center-flex">
      <button class="botton left" id="arrow-left" @click="slide('left')">
        <img src="~/assets/image/arrow-left.png" alt="" />
      </button>
      <button class="botton right" id="arrow-right" @click="slide('right')">
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
    setInterval(() => {
      this.slide("right");
    }, 5000); // เปลี่ยนเป็นระยะเวลาที่คุณต้องการ

    // เพิ่ม event listener สำหรับ resize
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    // ลบ event listener เมื่อ component ถูกทำลาย
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      // คำนวณตำแหน่งใหม่เมื่อมีการเปลี่ยนแปลงขนาดหน้าจอ
      this.goToSlide(this.activeDot);
    },
    goToSlide(index) {
      this.activeDot = index;
      const slider = this.$refs.slider;
      slider.style.left = `-${index * this.interval * 2}px`;
    },
    slide(direction) {
      const slider = this.$refs.slider;
      const currentLeft = parseInt(getComputedStyle(slider).left) || 0;
      let newLeft;

      if (direction === "right") {
        if (
          Math.abs(currentLeft) + this.interval + slider.clientWidth >=
          slider.scrollWidth
        ) {
          newLeft = -(slider.scrollWidth - slider.clientWidth);
        } else {
          newLeft = currentLeft - this.interval;
        }
      } else if (direction === "left") {
        newLeft = currentLeft + this.interval;
        if (newLeft > 0) {
          newLeft = 0;
        }
      }

      this.activeDot = Math.abs(newLeft) / (this.interval * 2);
      slider.style.left = `${newLeft}px`;
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
