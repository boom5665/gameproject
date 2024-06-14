<template>
  <div>
    <div>
      <HomeCorousalBanner />
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
        <Slider :items="itemssale" :interval="240" />
      </div>
      <HomeCardSlidergame />
      <HomeCardSlidershop />
    </div>
  </div>
</template>


<script>
import Slider from "./Slider.vue";
export default {
  components: {
    Slider,
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
    };
  },

  computed: {},
  methods: {},
};
</script>


<style>
</style>
