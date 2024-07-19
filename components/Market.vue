<template>
  <div class="market-home">
    <div>
      <HomeCorousalBanner :items="itemsbanners" />
    </div>

    <div>
      <Marketprofile />
    </div>

    <div class="card-shop" style="margin-top: 60px">
      <Marketshopall />
    </div>
  </div>
</template>

<script>
import HomeCorousalBanner from "./HomeCorousalBanner.vue";
import Marketprofile from "./Marketprofile.vue";
import Marketshopall from "./Marketshopall.vue";

export default {
  components: {
    HomeCorousalBanner,
    Marketprofile,
    Marketshopall,
  },
  data() {
    return {
      itemsbanners: [
        { id: 1, imageSrc: require("~/assets/image/AD.png") },
        { id: 2, imageSrc: require("~/assets/image/AD.png") },
        { id: 3, imageSrc: require("~/assets/image/AD.png") },
        { id: 4, imageSrc: require("~/assets/image/AD.png") },
      ],
    };
  },
};
</script>
