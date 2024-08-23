<template>
  <div class="co-new">
    <b-carousel id="carousel1" v-model="slide" :interval="8000" controls>
      <b-carousel-slide
        v-for="(img, index) in items"
        :key="index"
        :img-src="img.imageSrc"
      >
        <div class="carousel-caption">
          <div class="caption-content">
            <div class="caption-title">{{ img.title }}</div>
            <div class="caption-subtitle">{{ img.subtitle }}</div>
          </div>
        </div>
      </b-carousel-slide>
    </b-carousel>

    <!-- จุดไข่ปลา -->
    <div class="custom-indicators">
      <button id="arrow-left" @click="prevSlide">
        <img src="~/assets/image/arrow-left.png" alt="left arrow" />
      </button>
      <div class="dotposition">
        <span
          v-for="(n, index) in items.length"
          :key="index"
          @click="goToSlide(index)"
          :class="{ active: index === currentSlide }"
        ></span>
      </div>

      <button id="arrow-right" @click="nextSlide">
        <img src="~/assets/image/arrow-right.png" alt="right arrow" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      slide: 0,
    };
  },
  computed: {
    currentSlide() {
      return this.slide;
    },
  },
  methods: {
    goToSlide(index) {
      this.slide = index;
    },
    prevSlide() {
      this.slide = (this.slide === 0) ? this.items.length - 1 : this.slide - 1;
    },
    nextSlide() {
      this.slide = (this.slide === this.items.length - 1) ? 0 : this.slide + 1;
    },
  },
  watch: {
    slide(newSlide) {
      this.$nextTick(() => {
        // This ensures that the view is updated after slide change
        const dots = document.querySelectorAll('.dotposition span');
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === newSlide);
        });
      });
    },
  },
};
</script>
<style scoped>
.co-new {
  position: relative;
  /* เพิ่มการตั้งค่าที่เกี่ยวข้องกับตำแหน่งของ carousel และ caption */
}

.carousel-caption {
  position: absolute;
  bottom: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: auto;
  color: white;
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
}

.caption-content {
  max-width: 100%;
}

.caption-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.caption-subtitle {
  font-size: 16px;
}

.custom-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px; /* หรือปรับตำแหน่งตามที่ต้องการ */
  width: 100%;
}

#arrow-left,
#arrow-right {
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}

#arrow-left img,
#arrow-right img {
  width: 24px; /* ปรับขนาดไอคอนตามที่ต้องการ */
  height: auto;
}

.dotposition {
  display: flex;
  align-items: center;
}

.dotposition span {
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}

.dotposition span.active {
  background-color: #5c25f2; /* เปลี่ยนสีตามที่ต้องการ */
}
</style>
