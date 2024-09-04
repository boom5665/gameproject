<template>
  <div v-if="item.amount == item.sold_amount">
    <div class="tpn_card img-productdis">
      <NuxtLink
        :to="`/ShopPayment/${item.id}?amount=1&name=${encodeURIComponent(
          item.market_shops.name
        )}&img=${encodeURIComponent(item.img)}&description=${encodeURIComponent(
          item.description
        )}`"
      >
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
        <div class="content-under">สินค้าหมด</div>
        <!-- <div class="font">(จำกัดจำนวน {{ item.amount }} ชิ้น)</div> -->
        <div class="dis-top-bottom">
          <div>
            <div
              v-if="item.description"
              class="font m-top-f"
              v-html="item.description"
            ></div>
          </div>
          <!-- <div class="font">(จำกัดจำนวน {{ item.amount }} ชิ้น)</div> -->
          <div class="display">
            <div class="font-total">
              ฿ {{ item.price }}
              <span class="strikethrough">{{
                item.price_before_discount
              }}</span>
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
        </div>
      </NuxtLink>
    </div>
  </div>
  <div v-else>
    <div class="tpn_card">
      <NuxtLink
        :to="`/ShopPayment/${item.id}?amount=1&name=${encodeURIComponent(
          item.market_shops.name
        )}&img=${encodeURIComponent(item.img)}&description=${encodeURIComponent(
          item.description
        )}&price_before_discount=${encodeURIComponent(
          item.price_before_discount
        )}`"
      >
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
          ขายแล้ว {{ formatNumber(item.sold_amount) }}
        </div>
        <div class="dis-top-bottom">
          <div>
            <div
              v-if="item.description"
              class="font m-top-f"
              v-html="item.description"
            ></div>
          </div>
          <!-- <div class="font">(จำกัดจำนวน {{ item.amount }} ชิ้น)</div> -->
          <div class="display">
            <div class="font-total">
              ฿ {{ formatNumber(item.price) }}
              <span class="strikethrough">{{
                formatNumber(item.price_before_discount)
              }}</span>
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
  methods: {
    formatNumber(value) {
      if (value >= 1000000) {
        return (value / 1000000).toFixed(0) + "m"; // แปลงเป็น '1m'
      } else if (value >= 100000) {
        return (value / 1000).toFixed(0) + "k"; // แปลงเป็น '100k'
      } else if (value >= 10000) {
        return (value / 1000).toFixed(0) + "k"; // แปลงเป็น '10k'
      } else {
        return this.addCommas(value); // เพิ่มลูกน้ำในกรณีตัวเลขน้อยกว่า 10,000
      }
    },
    addCommas(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style scoped>
</style>
