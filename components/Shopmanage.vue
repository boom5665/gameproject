<template>
  <div class="slider-container Marketitem">
    <div class="slider" ref="slider">
      <div
        class="tpn_card"
        v-for="(item, index) in items"
        :key="item.id || index"
      >
        <img :src="item.imageSrc" class="tpn_cardimg" />
        <div class="content-under">{{ item.subtitle }}</div>
        <div class="font">{{ item.description }}</div>
        <div class="display">
          <div class="price">฿ {{ item.price }}</div>
          <div class="">
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
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.content-under {
  background: #ffeb3b;
  color: #000;
}
.font {
  color: #bababa;
  font-size: 12px;
  margin: 10px 0px;
}
.price {
  color: #ffff;
  font-size: 16px;
}
.tpn_card {
  margin: 5px;
  cursor: pointer;
}
.Marketitem .slider {
  display: flex;
  transition: left 0.3s ease;
  position: relative;
  left: 0;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
