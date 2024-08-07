<template>
  <div style="width: 100%">
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

      <!-- <div
        v-for="(group, index) in typeGroups"
        :key="'type-' + index"
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
      </div> -->
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
      productGroups: [], // เริ่มต้นเป็น array ว่าง
      producttwoGroups: [], // เริ่มต้นเป็น array ว่าง
      typeGroups: [], // เริ่มต้นเป็น array ว่าง
    };
  },
  mounted() {
    const token = localStorage.getItem("authToken");
    if (token) {
      if (process.client) {
        if (this.$route.path === "/") {
          const hasRefreshed = localStorage.getItem("hasRefreshedMarketMyshop");

          if (!hasRefreshed) {
            localStorage.setItem("hasRefreshedMarketMyshop", "true");
            window.location.reload();
          }
        }
      }
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
        const response = await this.$axios.$post("/product/home/list/read");
        console.log(response);
        // ตรวจสอบรหัสสถานะของการตอบกลับ
        if (response.code === 200) {
          // จัดระเบียบข้อมูลประเภทโปรโมชั่น
          this.productGroups = this.mapProductGroups(
            response.data_list.product_promotions_product_list
          );
          // จัดระเบียบข้อมูลประเภทสินค้า
          // this.typeGroups = this.mapTypeGroups(
          //   response.data_list.category_product_list
          // );
          // แสดงข้อมูลในคอนโซลเพื่อตรวจสอบ
          console.log(this.productGroups);
        } else {
          console.error("Failed to fetch data:", response.msg);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    // ฟังก์ชันสำหรับจัดระเบียบข้อมูลประเภทโปรโมชั่น
    mapProductGroups(productPromotions) {
      return (productPromotions || []).map((group) => ({
        title: group.name || "กลุ่มสินค้า", // ใช้ชื่อกลุ่ม ถ้าไม่มีให้ใช้ชื่อเริ่มต้น
        items: Array.isArray(group.product_list) ? [...group.product_list] : [], // ตรวจสอบว่าคือ array หรือไม่
      }));
    },

    // ฟังก์ชันสำหรับจัดระเบียบข้อมูลประเภทสินค้า
    // mapTypeGroups(typeProducts) {
    //   return typeProducts.map((group) => ({
    //     title: group.name, // ชื่อกลุ่ม
    //     items: [...group.product_list] || [], // รายการสินค้าที่อยู่ในกลุ่ม
    //   }));
    // },
  },
};
</script>



