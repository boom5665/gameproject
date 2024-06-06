<template>
  <div>
    <div class="home-logo">
      <h1 style="font-size: 13.5rem">LOGO</h1>
    </div>
    <div class="dis-center dis-contentimg">
      <div class="card-container">
        <div class="card">
          <img
            src="~/assets/image/home1.png"
            alt="Card Image"
            class="card-image"
          />
          <div class="card-content">
            <h2>E-SPORTS</h2>
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <img
            src="~/assets/image/home3.png"
            alt="Card Image"
            class="card-image"
          />
          <div class="card-content">
            <h2>MARKETPLACE</h2>
          </div>
        </div>
      </div>
            <div class="card-container">
        <div class="card">
          <img
            src="~/assets/image/home2.png"
            alt="Card Image"
            class="card-image"
          />
          <div class="card-content text-card" >
            <h2 >COMING SOON</h2>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
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
