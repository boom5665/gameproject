<template>
  <div class="slider-container">
    <div class="slider" ref="slider">
      <div class="tpn_card" v-for="item in items" :key="item.id">
        <div style="display: flex">
          <div>
            <img
              :src="item.logoSrc"
              style="width: 26px; height: 26px; margin-right: 5px"
            />
          </div>
          <div style="font-size: 14px">{{ item.title }}</div>
          <div style="display: flex">
            <div class="loveimg">
              <img
                :src="item.loveSrc"
                style="
                  width: 18px;
                  height: 18px;
                  padding: 2.386px 1.5px 2.386px 1.501px;
                "
              />
            </div>
            <div>{{ item.loveCount }}</div>
          </div>
        </div>
        <img :src="item.imageSrc" class="tpn_cardimg" />
        <div class="content-under">{{ item.subtitle }}</div>
        <div class="font">{{ item.description }}</div>
        <div class="display">
          <div>฿ {{ item.price }}</div>
          <div class="buttonshop">
            <img
              :src="item.cartSrc"
              style="width: 26px; height: 26px; margin-right: 5px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.slider-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.slider {
  display: flex;
  transition: left 0.3s ease;
  position: relative;
  left: 0;
  flex-direction: row;
  flex-wrap: wrap;
}

.tpn_card {
  flex: 0 0 220px;
  margin-right: 20px;
}
</style>
