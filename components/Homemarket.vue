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
            ทั้งหมด &nbsp;
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
            ทั้งหมด &nbsp;
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
            ทั้งหมด &nbsp;
            <img src="~/assets/image/all.png" class="img-recom" />
          </div>
        </div>
        <HomeCardSlidergame :items="group.items || []" />
      </div>
      <Loader :isLoading="isLoading" />
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import HomeCardSlidergame from "./HomeCardSlidergame.vue";
import HomeCorousalBanner from "./HomeCorousalBanner.vue";
import Cookies from "js-cookie";
export default {
  components: { Slider, HomeCardSlidergame, HomeCorousalBanner },
  data() {
    return {
      isLoading: false, // ตัวแปรที่ใช้แสดง loader
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
    const token = Cookies.get("authToken"); // ใช้ js-cookie โดยตรง
    // console.log("Token:", token);

    if (token) {
      const decoded = this.$jwt.decode(token);
      const { authen_code, id, permission } = decoded;
      console.log("authen", authen_code, "id", id, "สิทธิ", permission);

      if (this.$route.path === "/") {
        const hasRefreshed = Cookies.get("hasRefreshedMarketMyshop");
        if (!hasRefreshed) {
          Cookies.set("hasRefreshedMarketMyshop", "true");
          this.$router.replace("/");
          return;
        }
      }
    } else {
      // console.log("No token found");
    }

    this.fetchData();
  },

  methods: {
    async fetchData() {
      this.isLoading = true; // แสดง loader
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
          this.isLoading = false; // ซ่อน loader
          // แสดงข้อมูลในคอนโซลเพื่อตรวจสอบ
          // console.log(this.CateGroups);
        } else {
          console.error("Unexpected response structure:", response);
          this.isLoading = false; // ซ่อน loader
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    mapProductGroups(productPromotions) {
      if (!productPromotions || productPromotions.length === 0) {
        // ถ้าไม่มีข้อมูล ให้คืนค่ากลับเป็น array ว่าง
        return [];
      }

      return productPromotions
        .map((group) => {
          if (!group.product_list || !Array.isArray(group.product_list)) {
            // ถ้าไม่มีรายการสินค้าในกลุ่มหรือไม่ใช่ array ให้ข้ามกลุ่มนี้ไป
            return null;
          }

          return {
            title: group.name || "กลุ่มสินค้า",
            items: [...group.product_list],
          };
        })
        .filter((group) => group !== null); // กรองเอากลุ่มที่เป็น null ออก
    },

    mapTypeGroups(typeProducts) {
      if (!typeProducts || typeProducts.length === 0) {
        // ถ้าไม่มีข้อมูล ให้คืนค่ากลับเป็น array ว่าง
        return [];
      }

      return typeProducts
        .map((group) => {
          if (!group.product_list || !Array.isArray(group.product_list)) {
            // ถ้าไม่มีรายการสินค้าในกลุ่มหรือไม่ใช่ array ให้ข้ามกลุ่มนี้ไป
            return null;
          }

          return {
            title: group.name || "ประเภทสินค้า",
            items: [...group.product_list],
          };
        })
        .filter((group) => group !== null); // กรองเอากลุ่มที่เป็น null ออก
    },

    mapCateGroups(CateProducts) {
      if (!CateProducts || CateProducts.length === 0) {
        // ถ้าไม่มีข้อมูล ให้คืนค่ากลับเป็น array ว่าง
        return [];
      }

      return CateProducts.map((group) => {
        if (!group.product_list || !Array.isArray(group.product_list)) {
          // ถ้าไม่มีรายการสินค้าในกลุ่มหรือไม่ใช่ array ให้ข้ามกลุ่มนี้ไป
          return null;
        }

        return {
          title: group.name,
          items: [...group.product_list],
        };
      }).filter((group) => group !== null); // กรองเอากลุ่มที่เป็น null ออก
    },
  },
};
</script>
