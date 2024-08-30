<template>
  <div class="custom-co-banner">
    <b-carousel id="carousel1" v-model="slide" :interval="8000" controls>
      <b-carousel-slide
        v-for="(img, index) in items"
        :key="index"
        :img-src="img.imageSrc"
      ></b-carousel-slide>
    </b-carousel>

    <!-- จุดไข่ปลา -->
    <div class="custom-indicators">
      <button id="arrow-left" @click="prevSlide">
        <img src="~/assets/image/arrow-left.png" alt="left arrow" />
      </button>
      <div class="dotposition">
        <span
          v-for="(n, index) in items"
          :key="'dot-' + index"
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
      this.slide = this.slide === 0 ? this.items.length - 1 : this.slide - 1;
    },
    nextSlide() {
      this.slide = this.slide === this.items.length - 1 ? 0 : this.slide + 1;
    },
  },
};
</script>

<style scoped>
img {
    vertical-align: middle;
    border-style: none;
    width: 17px;
    position: relative;
    top: -2px;
}
.custom-co-banner {
  position: relative;
}
.custom-indicators {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
}
.dotposition {
  display: flex;
  gap: 5px;
}
.dotposition span {
  display: block;
  width: 10px;
  height: 10px;
  background-color: gray;
  border-radius: 50%;
  cursor: pointer;
}
.dotposition span.active {
  background-color: white;
}
</style>
