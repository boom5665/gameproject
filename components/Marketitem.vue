<template>
  <div class="slider-container Marketitem">
    <div class="slider" ref="slider">
      <div class="tpn_card" v-for="(item, index) in items" :key="item.id || index">
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
                  padding: 2px 1.5px;
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
