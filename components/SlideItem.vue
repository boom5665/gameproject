<template>

<div v-if="item.amount == item.sold_amount">

 <div class="tpn_card img-productdis" >
    <NuxtLink :to="`/ShopPayment/${item.id}?amount=1&name=${encodeURIComponent(item.market_shops.name)}&img=${encodeURIComponent(item.img)}&description=${encodeURIComponent(item.description)}`">
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
        <!-- <div class="love-box">
          <div class="loveimg">
            <img
              src="~/assets/image/love2.png"
              style="
                width: 20px;
                height: 20px;
                padding: 2.386px 1.5px 2.386px 1.501px;
              "
              alt="Love Icon"
            />
          </div>
          <div>{{ item.market_shops_id }}</div>
        </div> -->
      </div>
      <img :src="item.img" class="tpn_cardimg" alt="Product Image" />
      <div class="content-under">
        สินค้าหมด
      </div>
      <div class="font">{{ item.description }}</div>
      <div class="font">(จำกัดจำนวน {{ item.amount }} ชิ้น)</div>
      <div class="display">
        <div class="font-total">
          ฿ {{ item.price }}
          <!-- <span class="strikethrough">{{ item.price_before_discount }}</span> -->
        </div>

        <div class="buttonshop">
          <!-- <NuxtLink class="text-nav" :to="`/ShopPayment/${item.id}?amount=1`"> -->
            <img
              src="~/assets/image/addcart.png"
              style="width: 26px; height: 26px; margin: 0px 5px"
              alt="Add to Cart"
            />
          <!-- </NuxtLink> -->
        </div>
      </div>
    </NuxtLink>
  </div>
</div>
<div v-else>
 <div class="tpn_card">
    <NuxtLink :to="`/ShopPayment/${item.id}?amount=1&name=${encodeURIComponent(item.market_shops.name)}&img=${encodeURIComponent(item.img)}&description=${encodeURIComponent(item.description)}`">
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
        <!-- <div class="love-box">
          <div class="loveimg">
            <img
              src="~/assets/image/love2.png"
              style="
                width: 20px;
                height: 20px;
                padding: 2.386px 1.5px 2.386px 1.501px;
              "
              alt="Love Icon"
            />
          </div>
          <div>{{ item.market_shops_id }}</div>
        </div> -->
      </div>
      <img :src="item.img" class="tpn_cardimg" alt="Product Image" />
      <div class="content-under">
        ขายแล้ว {{ item.market_shops.review_count }}
      </div>
      <div class="font">{{ item.description }}</div>
      <div class="font">(จำกัดจำนวน {{ item.amount }} ชิ้น)</div>
      <div class="display">
        <div class="font-total">
          ฿ {{ item.price }}
          <span class="strikethrough">{{ item.price_before_discount }}</span>
        </div>

        <div class="buttonshop">
          <!-- <NuxtLink class="text-nav" :to="`/ShopPayment/${item.id}?amount=1`"> -->
            <img
              src="~/assets/image/addcart.png"
              style="width: 26px; height: 26px; margin: 0px 5px"
              alt="Add to Cart"
            />
          <!-- </NuxtLink> -->
        </div>
      </div>
    </NuxtLink>
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
.fontname {
  font-size: 14px;
  margin: 0px 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 95px;
}
.strikethrough {
  text-decoration: line-through;
  color: #bababa;
  font-size: 12px;
}
.font-total {
  color: #ffeb3b;
  font-size: 20px;
}
.img-productdis {
  pointer-events: none; /* ปิดการคลิก */
  /* opacity: 0.5; ทำให้ภาพดูทึบ */
   filter: grayscale(100%); /* ทำให้ภาพเป็นสีขาวดำ */
}
</style>
