<template>
  <div>
    <div>
      <HomeCorousalBanner :items="itemsbanner" />
    </div>
    <Marketprofile />
    <div class="card-shop" style="margin-top: 60px">
      <Marketshopall />
    </div>
  </div>
</template>

<script>
import HomeCorousalBanner from "./HomeCorousalBanner.vue";
export default {
  components: {
    HomeCorousalBanner,
  },
  components: {},
  data() {
    return {
      itemsbanner: [
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
      ],
    };
  },

  computed: {},
  methods: {},
};
</script>


