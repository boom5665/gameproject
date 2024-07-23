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
    const token = localStorage.getItem("authToken");
    const hasRefreshed = localStorage.getItem("hasRefreshed");

    if (token) {
      if (!hasRefreshed) {
        const decoded = this.$jwt.decode(token);
        console.log(decoded);

        // สมมุติว่า decoded คือ userInfo
        const { authen_code, id, permission } = decoded; // ใช้ decoded แทน userInfo
        if (decoded) {
          console.log("authen", authen_code, "id", id, "สิทธิ", permission);

          // ตั้งค่าสถานะว่าได้รีเฟรชหน้าแล้ว
          localStorage.setItem("hasRefreshed", "true");

          // รีเฟรชหน้าใหม่ทั้งหมด
          window.location.reload();
        }
      }
    } else {
      console.log("ไม่มี token");
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await this.$axios.$get("/list/marketplace/home");
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
          }));
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
          }));
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
          }));
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
