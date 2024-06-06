<template>
  <div>
    <div class="home-logo">
      <h1 style="font-size: 13.5rem;">MARKET</h1>
    </div>
    <div class="dis-center dis-contentimg">
      <div>
        <img class="pad-img" src="~/assets/image/home1.png" />
      </div>
      <div>
        <img class="pad-img" src="~/assets/image/home3.png" />
      </div>
      <div>
        <img class="pad-img" src="~/assets/image/home2.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // data: null,
    };
  },
  mounted() {
    // this.fetchData();
  },
  methods: {
    // async fetchData() {
    //   try {
    //     const response = await this.$axios.get('https://jsonplaceholder.typicode.com/posts/1');
    //     this.data = response.data;
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // }
  },
};
</script>
