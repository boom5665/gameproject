<template>
  <div class="width-hunded">
    <div><HomeCorousalBanner :items="itemsbanner" /></div>
    <div class="card-box" style="margin-top: 60px">
      <div
        v-for="(group, index) in productGroups"
        :key="'product-' + index"
        class="slider-container product-group-container"
      >
        <div class="dis-play-recom">
          <div>
            <img src="~/assets/image/recom.png" class="img-recom" />
            {{ group.title }}
          </div>
          <div>
            See all &nbsp;
            <img src="~/assets/image/all.png" class="img-recom" />
          </div>
        </div>
        <Slider :items="group.items || []" :interval="240" />
      </div>

      <div
        v-for="(group, index) in typeGroups"
        :key="'type-' + index"
        class="slider-container product-group-container"
      >
        <div class="dis-play-recom">
          <div>
            <img src="~/assets/image/recom.png" class="img-recom" />
            {{ group.title }}
          </div>
          <div>
            See all &nbsp;
            <img src="~/assets/image/all.png" class="img-recom" />
          </div>
        </div>
        <Slider :items="group.items || []" :interval="240" />
      </div>

      <div
        v-for="(group, index) in CateGroups"
        :key="'cate-' + index"
        class="slider-container type-group-container"
      >
        <div class="dis-play-recom">
          <div>
            <img src="~/assets/image/recom.png" class="img-recom" />
            {{ group.title }}
          </div>
          <div>
            See all &nbsp;
            <img src="~/assets/image/all.png" class="img-recom" />
          </div>
        </div>
        <HomeCardSlidergame :items="group.items || []" />
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
      itemsbanner: [
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
      ],
      productGroups: [],
      typeGroups: [],
      CateGroups: [],
    };
  },

  mounted() {
    const token = localStorage.getItem("authToken");
    if (token) {
      // if (process.client) {
      //   if (this.$route.path === "/") {
      //     const hasRefreshed = localStorage.getItem("hasRefreshedMarketMyshop");

      //     if (!hasRefreshed) {
      //       localStorage.setItem("hasRefreshedMarketMyshop", "true");
      //       this.$router.replace("/");
      //       return;
      //     }
      //   }
      // }
      const decoded = this.$jwt.decode(token);
      const { authen_code, id, permission } = decoded;
      console.log("authen", authen_code, "id", id, "สิทธิ", permission);
    } else {
      console.log("No token found");
    }
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        // ส่งคำขอเพื่อดึงข้อมูล
        const response = await this.$axios.$post("/product/home/list/read", {
          page: 0,
          limit: 0,
        });
        console.log(response);

        if (response && response.data_list) {
          // จัดระเบียบข้อมูลประเภทโปรโมชั่น
          this.productGroups = this.mapProductGroups(
            response.data_list.product_promotions_product_list || []
          );

          // จัดระเบียบข้อมูลประเภทสินค้า
          this.typeGroups = this.mapTypeGroups(
            response.data_list.type_product_list || []
          );

          this.CateGroups = this.mapCateGroups(
            response.data_list.categorys_product_list || []
          );

          // แสดงข้อมูลในคอนโซลเพื่อตรวจสอบ
          console.log(this.CateGroups);
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    mapProductGroups(productPromotions) {
      return (productPromotions || []).map((group) => ({
        title: group.name || "กลุ่มสินค้า",
        items: Array.isArray(group.product_list) ? [...group.product_list] : [],
      }));
    },

    mapTypeGroups(typeProducts) {
      return (typeProducts || []).map((group) => ({
        title: group.name || "ประเภทสินค้า",
        items: Array.isArray(group.product_list) ? [...group.product_list] : [],
      }));
    },

    mapCateGroups(CateProducts) {
      return (CateProducts || []).map((group) => ({
        title: group.name,
        items: Array.isArray(group.product_list) ? [...group.product_list] : [],
      }));
    },

  },
};
</script>
