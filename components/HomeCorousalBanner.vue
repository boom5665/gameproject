<template>
  <div>
    <b-carousel id="carousel1" v-model="slide" :interval="8000" controls>
      <b-carousel-slide
        v-for="(img, index) in items"
        :key="index"
        :img-src="img.imageSrc"
      ></b-carousel-slide>
    </b-carousel>

    <!-- จุดไข่ปลา-->
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
      return this.slide % this.items.length;
    },
  },
  methods: {
    goToSlide(index) {
      this.slide = index;
    },
    prevSlide() {
      if (this.slide === 0) {
        this.slide = this.items.length - 1;
      } else {
        this.slide--;
      }
    },
    nextSlide() {
      if (this.slide === this.items.length - 1) {
        this.slide = 0;
      } else {
        this.slide++;
      }
    },
  },
};
</script>

<style scoped>
.custom-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.custom-indicators span {
  display: inline-block;
  width: 10px; /* ปรับขนาดของจุดไข่ปลาตามต้องการ */
  height: 10px; /* ปรับขนาดของจุดไข่ปลาตามต้องการ */
  border-radius: 50%; /* ทำให้เป็นรูปวงกลม */
  background-color: #ccc; /* สีของจุดไข่ปลา */
  margin: 0 5px; /* ระยะห่างระหว่างจุดไข่ปลา */
  cursor: pointer;
}

.custom-indicators span.active {
  background-color: #ffeb3b; /* สีของจุดไข่ปลาเมื่อเป็นสไลด์ปัจจุบัน */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.custom-prev,
.custom-next {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}

.carousel-inner {
  border: none; /* เอาเส้นขอบออก */
}

.carousel-indicators li {
  display: none !important;
}

#arrow-left,
#arrow-right {
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
}

#arrow-left {
  z-index: 0;
}

#arrow-right {
  z-index: 0;
}

.dotposition {
  position: relative;
  top: 7px;
}
</style>
