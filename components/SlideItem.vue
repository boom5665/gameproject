<!-- SlideItem.vue -->
<template>
  <div class="tpn_card">
    <div class="dis-tpn">
      <div>
        <img
          :src="item.market_shops.logo_img"
          style="width: 26px; height: 26px; margin-right: 5px"
        />
      </div>
      <div style="font-size: 14px; margin-right: 20px">
        {{ item.market_shops.name }}
      </div>
      <div style="display: flex">
        <div class="loveimg">
          <img
            src="~/assets/image/love2.png"
            style="
              width: 18px;
              height: 18px;
              padding: 2.386px 1.5px 2.386px 1.501px;
            "
          />
        </div>
        <div>{{ item.market_shops_id }}</div>
      </div>
    </div>
    <img :src="item.img" class="tpn_cardimg" />
    <div class="content-under">{{ item.market_shops.review_count  }}</div>
    <div class="font">{{ item.description }}</div>
    <div class="display">
      <div>฿ {{ item.price }}</div>
      <div class="buttonshop">
        <img
          src="~/assets/image/addcart.png"
          style="width: 26px; height: 26px; margin-right: 5px"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.tpn_card {
  flex: 0 0 220px;
  margin-right: 20px;
}
/* เพิ่มสไตล์ .tpn_card ที่มีอยู่ในส่วนที่แล้วที่นี่ */
.dis-tpn{
  display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}
</style>
