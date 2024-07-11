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


