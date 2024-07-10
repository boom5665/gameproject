<template>
  <div style="width: 100%">
    <div><HomeCorousalBanner :items="itemsbanner" /></div>
    <div class="card-box" style="margin-top: 60px">
      <div class="slider-container">
        <div class="dis-play-recom">
          <div>
            <img src="~/assets/image/recom.png" class="img-recom" /> แนะนำ
          </div>
          <div>
            See all &nbsp;
            <img src="~/assets/image/all.png" class="img-recom" />
          </div>
        </div>
        <Slider :items="recommended" :interval="240" />
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
        <Slider :items="trending" :interval="240" />
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
        <HomeCardSlidergame :items="game" />
      </div>
      <div class="slider-container">
        <div class="dis-play-recom">
          <div>
            <img src="~/assets/image/Shop.png" class="img-recom" />Top shop
          </div>
          <div>
            See all &nbsp;
            <img src="~/assets/image/all.png" class="img-recom" />
          </div>
        </div>
        <HomeCardSlidergame :items="topshop" />
      </div>
    </div>
  </div>
</template>
 <script>
import Slider from "./Slider.vue";
import HomeCardSlidergame from "./HomeCardSlidergame.vue";
import HomeCorousalBanner from "./HomeCorousalBanner.vue";
export default {
  components: { Slider, HomeCardSlidergame, HomeCorousalBanner },
  data() {
    return {
      trending: [],
      recommended: [],
      itemssale: [],
      game: [],
      topshop: [],
      itemsbanner: [
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
      ],
    };
  },
  mounted() {
    // this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await this.$axios.$get(
          "https://dev-api-gamiqo.pirate168.com/api/v1/list/marketplace/home"
        );
        console.log(response);
        if (response.code === 200) {
          const { recommended, sale, trending } = response.data.Itemlist;
          const { topshop, game } = response.data.Product;
          this.recommended = recommended.map((item) => ({
            id: item.id,
            logoSrc: item.item_img_main,
            title: item.market_name,
            loveSrc: require("@/assets/image/love2.png"),
            loveCount: item.like,
            imageSrc: item.item_img_main,
            subtitle: item.sold,
            description: item.item_name,
            price: item.price,
            cartSrc: require("@/assets/image/addcart.png"),
          })); // อัปเดตข้อมูลใน itemssale
          this.itemssale = sale.map((item) => ({
            id: item.id,
            logoSrc: item.item_img_main,
            title: item.market_name,
            loveSrc: require("@/assets/image/love2.png"),
            loveCount: item.like,
            imageSrc: item.item_img_main,
            subtitle: item.sold,
            description: item.item_name,
            price: item.price,
            cartSrc: require("@/assets/image/addcart.png"),
          })); // อัปเดตข้อมูลใน trending
          this.trending = trending.map((item) => ({
            id: item.id,
            logoSrc: item.item_img_main,
            title: item.market_name,
            loveSrc: require("@/assets/image/love2.png"),
            loveCount: item.like,
            imageSrc: item.item_img_main,
            subtitle: item.sold,
            description: item.item_name,
            price: item.price,
            cartSrc: require("@/assets/image/addcart.png"),
          })); // สามารถอัปเดตคุณสมบัติอื่น ๆ เช่น hotitem, trending, เป็นต้นได้เช่นกัน

          // อัปเดตค่าใน itemsshop ให้เป็นข้อมูลจาก Productlist
          this.topshop = topshop.map((item) => ({
            id: item.id_product,
            imageSrc: item.product_img,
            subtitle: item.product_name,
          }));

          this.game = game.map((item) => ({
            id: item.id_product,
            imageSrc: item.product_img,
            subtitle: item.product_name,
          }));
        } else {
          console.error("Failed to fetch data:", response.msg);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
