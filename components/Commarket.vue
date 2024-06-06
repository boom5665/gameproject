<template>
  <div>
    <b-carousel
      id="carousel-1"
      style="width: 100%; height: 300px;"
      controls
      indicators
      background="#ababab"
    >
      <b-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :caption="slide.caption"
        :text="slide.text"
      >
        <img
          :src="slide.src"
          class="d-block w-100"
          alt="Slide image"
          style="height: 300px; object-fit: cover;"
        />
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          src: 'home1.png',
          caption: 'First Slide',
          text: 'This is the first slide'
        },
        {
          src: 'home1.png',
          caption: 'Second Slide',
          text: 'This is the second slide'
        },
        {
          src: 'home1.png',
          caption: 'Third Slide',
          text: 'This is the third slide'
        }
      ]
    }
  }
}
</script>

<style>
.carousel-indicators {
  bottom: 10px;
}

.carousel-indicators li {
  background-color: #fff;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.carousel-indicators .active {
  background-color: #000;
}
</style>
