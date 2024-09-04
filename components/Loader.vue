<!-- components/Loader.vue -->
<template>
  <div v-if="isLoading" class="loader-overlay">
    <span class="loader">
      <img src="~/assets/image/Logo-Gamemarket.png" alt="Search" class="Logo-img" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
