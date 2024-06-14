<template>
  <div>
    <div>
      <HomeCorousalBanner />
    </div>
      <Marketprofile />
    <div class="card-shop" style="margin-top: 60px">
      <Marketshopall />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },

  computed: {},
  methods: {},
};
</script>

<style>
.card-shop{
  background: var(--Color-Primary-700, #3A179A);
}
</style>
