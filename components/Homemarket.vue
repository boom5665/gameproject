<template>
  <div>
    <div>
      <HomeCorousalBanner :items="itemsbanner" />
    </div>

    <div class="card-box" style="margin-top: 60px">
      <div class="slider-container">
        <div class="dis-play-recom">
          <div>
            <img src="~/assets/image/recom.png" class="img-recom" />Recommended
          </div>
          <div>
            See all &nbsp;
            <img src="~/assets/image/all.png" class="img-recom" />
          </div>
        </div>
        <Slider :items="items" :interval="240" />
      </div>

      <div class="slider-container">
        <div class="dis-play-recom">
          <div>
            <img src="~/assets/image/tred.png" class="img-recom" />Trending
          </div>
          <div>
            See all &nbsp;
            <img src="~/assets/image/all.png" class="img-recom" />
          </div>
        </div>
        <Slider :items="itemstrending" :interval="240" />
      </div>
      <div class="slider-container">
        <div class="dis-play-recom">
          <div><img src="~/assets/image/sale.png" class="img-recom" />Sale</div>
          <div>
            See all &nbsp;
            <img src="~/assets/image/all.png" class="img-recom" />
          </div>
        </div>
        <Slider :items="itemssale" :interval="200" />
      </div>
      <div class="slider-container">
        <div class="dis-play-recom">
          <div>
            <img src="~/assets/image/game.png" class="img-recom" />Games
          </div>
          <div>
            See all &nbsp;
            <img src="~/assets/image/all.png" class="img-recom" />
          </div>
        </div>
        <HomeCardSlidergame :items="itemsgame" />
      </div>
      <div class="slider-container">
        <div class="dis-play-recom">
          <div>
            <img src="~/assets/image/game.png" class="img-recom" />Top shop
          </div>
          <div>
            See all &nbsp;
            <img src="~/assets/image/all.png" class="img-recom" />
          </div>
        </div>
        <HomeCardSlidergame :items="itemsshop" />
      </div>
    </div>
  </div>
</template>


<script>
import Slider from "./Slider.vue";
import HomeCardSlidergame from "./HomeCardSlidergame.vue";
import HomeCorousalBanner from "./HomeCorousalBanner.vue";
export default {
  components: {
    Slider,
    HomeCardSlidergame,
    HomeCorousalBanner,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "RECOMMENDED",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 2,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "RECOMMENDED",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 3,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "RECOMMENDED",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 4,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "RECOMMENDED",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 5,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "RECOMMENDED",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 6,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "RECOMMENDED",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 7,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "RECOMMENDED",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 8,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "RECOMMENDED",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 9,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "RECOMMENDED",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 10,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "RECOMMENDED",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
      ],
      itemstrending: [
        {
          id: 1,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemstrending",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 2,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemstrending",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 3,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemstrending",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 4,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemstrending",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 5,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemstrending",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 6,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemstrending",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 7,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemstrending",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 8,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemstrending",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 9,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemstrending",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 10,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemstrending",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
      ],
      itemssale: [
        {
          id: 1,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemssale",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 2,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemssale",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 3,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemssale",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 4,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemssale",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 5,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemssale",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 6,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemssale",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 7,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemssale",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 8,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemssale",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 9,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemssale",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 10,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "itemssale",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
      ],
      itemsgame: [
        {
          id: 1,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 3,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 4,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 5,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 6,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 7,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 8,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 9,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 10,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 11,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 12,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        // เพิ่มเติม item ที่เหลือ
      ],
      itemsshop: [
        {
          id: 1,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Shop",
        },
        {
          id: 3,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Shop",
        },
        {
          id: 4,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Shop",
        },
        {
          id: 5,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Shop",
        },
        {
          id: 6,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Shop",
        },
        {
          id: 7,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Shop",
        },
        {
          id: 8,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Shop",
        },
        {
          id: 9,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Shop",
        },
        {
          id: 10,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Shop",
        },
        {
          id: 11,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Shop",
        },
        // เพิ่มเติม item ที่เหลือ
      ],
      itemsbanner: [
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
      ],
    };
  },

  computed: {},
  methods: {},
};
</script>


<style>
</style>
