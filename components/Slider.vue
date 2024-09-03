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
      return Math.ceil(this.items.length / 4); // จำนวนสไลด์ที่จำเป็น
    },
  },
  mounted() {
    if (this.items.length > 6) {
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
        this.autoSlideInterval = setInterval(() => {
          this.slide("right");
        }, 100000000000); // การตั้งค่าเวลาอัตโนมัติ
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
      const slideWidth = slider.clientWidth / 1.2; // ขนาดของแต่ละสไลด์
      slider.style.left = `-${index * slideWidth}px`;
      console.log(`Going to slide ${index}, slider width: ${slider.clientWidth}, slide width: ${slideWidth}`);
    },
    slide(direction) {
      if (this.items.length <= 6) return;

      const slider = this.$refs.slider;
      const slideWidth = slider.clientWidth / 3; // ขนาดของแต่ละสไลด์
      const totalSlides = this.numberOfDots;
      let newIndex = this.activeDot;

      if (direction === "right") {
        if (newIndex < totalSlides - 1) {
          newIndex++;
        } else {
          newIndex = 0; // กลับไปที่สไลด์แรก
        }
      } else if (direction === "left") {
        if (newIndex > 0) {
          newIndex--;
        } else {
          newIndex = totalSlides - 1; // ไปที่สไลด์สุดท้าย
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
  width: 100%; /* กำหนดความกว้างเป็น 100% */
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
  background-color: #000; /* สีพื้นหลังของปุ่ม */
  border: none;
  cursor: pointer;
  border-radius: 4px; /* ขอบโค้งของปุ่ม */
  padding: 10px; /* ขนาดพื้นที่ภายในปุ่ม */
}

.button img {
  width: 24px; /* ขนาดของลูกศร */
  height: 24px;
  vertical-align: middle; /* จัดแนวลูกศรให้ตรงกลาง */
}

.left {
  position: absolute;
  left: 10px; /* ระยะห่างจากซ้าย */
}

.right {
  position: absolute;
  right: 10px; /* ระยะห่างจากขวา */
}
</style>
