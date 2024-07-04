<template>
  <div>
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

<style >

.carousel-caption {
  position: absolute;
    bottom: 0px !important;
 left: 0% !important;
  width: 100%;
  height: auto;
  color: white;
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
      width: 100% !important;
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
  margin-top: 10px;
}
#arrow-left,
#arrow-right {
  background: none;
  border: none;
  cursor: pointer;
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
.dotposition .active {
  background-color: #FFEB3B;
}
</style>
