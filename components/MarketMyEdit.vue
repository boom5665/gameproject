<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <div><ShopStore :items="items" /></div>
    </div>
  </div>
</template>

<script>
import ShopStore from "@/components/ShopStore.vue";
export default {
  components: {
    ShopStore,
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>



<style>
</style>
