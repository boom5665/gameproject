<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <b-carousel id="carousel1" v-model="slide" controls indicators>
          <b-carousel-slide v-for="(slide, index) in slides" :key="index" :img-src="slide.img" :caption="slide.caption">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.text }}</p>
          </b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      slides: [
        {
          title: 'Slide 1',
          img: 'https://via.placeholder.com/220x320',
          caption: 'Caption 1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          title: 'Slide 2',
          img: 'https://via.placeholder.com/220x320',
          caption: 'Caption 2',
          text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          title: 'Slide 3',
          img: 'https://via.placeholder.com/220x320',
          caption: 'Caption 3',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]
    };
  }
};
</script>

<style>
/* Optional CSS styles for customization */
</style>
