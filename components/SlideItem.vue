<template>
  <div class="tpn_card">
    <div class="dis-tpn">
      <div>
        <img
          :src="item.market_shops.logo_img"
          style="width: 26px; height: 26px; margin-right: 5px"
          alt="Shop Logo"
        />
      </div>
      <div class="fontname">
        {{ item.market_shops.name }}
      </div>
      <div class="love-box">
        <div class="loveimg">
          <img
            src="~/assets/image/love2.png"
            style="
              width: 18px;
              height: 18px;
              padding: 2.386px 1.5px 2.386px 1.501px;
            "
            alt="Love Icon"
          />
        </div>
        <div>{{ item.market_shops_id }}</div>
      </div>
    </div>
    <img :src="item.img" class="tpn_cardimg" alt="Product Image" />
    <div class="content-under">{{ item.market_shops.review_count }}</div>
    <div class="font">{{ item.description }}</div>
    <div class="display">
      <div>฿ {{ item.price }}</div>
      <div class="buttonshop">
        <NuxtLink class="text-nav" :to="`/ShopPayment/${item.id}`">
          <img
            src="~/assets/image/addcart.png"
            style="width: 26px; height: 26px; margin-right: 5px"
            alt="Add to Cart"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.dis-tpn {
  display: flex;
  justify-content: flex-start;
  margin: 0px 0px 5px 0px;
}
.love-box {
  display: flex;
  background: #31303f;
  position: absolute;
  transform: translate(135px, -5px);
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  border-radius: 5px;
}
.fontname{
      font-size: 14px;
    margin-right: 10px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 95px;
}
</style>
