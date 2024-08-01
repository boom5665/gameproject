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
      page: 0,
      limit: 0,
      page_count: 0,
      data_count: 0,
      data_list: [
        {
          types_product_list: [
            {
              id: 0,
              name: "",
              img: "",
              description: "",
              priority: 0,
              is_public: false,
              available_start_at: "",
              available_end_at: "",
              product_list: [
                {
                  id: 0,
                  name: 0,
                  img: "",
                  img_list: [
                    {
                      id: 0,
                      img: "",
                      name: "",
                      priority: 0,
                      product_p_id: 0,
                    },
                  ],
                  description: "",
                  product_types_pt_id: "",
                  product_promotions_pp_id: "",
                  market_shops_id: "",
                  market_shops: [
                    {
                      id: "M",
                      name: "",
                      description: "",
                      logo_img: "",
                      phone: "",
                      first_name: "",
                      last_name: "",
                      email: "",
                      address: "",
                      is_verify: false,
                      is_public: false,
                      is_available: false,
                      is_open: false,
                      available_start_at: "",
                      available_end_at: "",
                      review_count: 0,
                      product_types_pt_id: "",
                      product_promotions_pp_id: "",
                    },
                  ],
                  price: "",
                  price_before_discount: "",
                  amount: "",
                },
              ],
              total_count: 0,
            },
          ],
          promotion_product_list: [{}],
        },
      ],
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
    if (token) {
      if (process.client) {
        if (this.$route.path === "/") {
          const hasRefreshed = localStorage.getItem("hasRefreshedMarketMyshop");

          if (!hasRefreshed) {
            // ตั้งค่าสถานะว่าได้รีเฟรชหน้าแล้ว
            localStorage.setItem("hasRefreshedMarketMyshop", "true");

            // รีเฟรชหน้าเว็บ
            window.location.reload();
          }
        }
      }
      // ถอดรหัสโทเคนเพื่อดึงข้อมูลผู้ใช้
      const decoded = this.$jwt.decode(token);
      // สมมุติว่า decoded คือ userInfo

      const { authen_code, id, permission } = decoded; // ใช้ decoded แทน userInfo
      console.log("authen", authen_code, "id", id, "สิทธิ", permission);
    } else {
      console.log("No token found");
    }

    // ดึงข้อมูลหลังจากรีเฟรชหน้า
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await this.$axios.$get("/product/home/list/read");
        console.log(response);
        if (response.code === 200) {
          const { recommended, sale, trending } = response.data.Itemlist;
          const { topshop, game } = response.data.Product;
          this.recommended = recommended.map((item) => ({
            id: item.id || 0,
            name: item.market_name || "",
            img: item.item_img_main || "",
            description: item.item_name || "",
            logo_img: item.logo_img || "",
            phone: item.phone || "",
            first_name: item.first_name || "",
            last_name: item.last_name || "",
            email: item.email || "",
            address: item.address || "",
            is_verify: item.is_verify || false,
            is_public: item.is_public || false,
            is_available: item.is_available || false,
            is_open: item.is_open || false,
            available_start_at: item.available_start_at || "",
            available_end_at: item.available_end_at || "",
            review_count: item.review_count || 0,
            product_types_pt_id: item.product_types_pt_id || "",
            product_promotions_pp_id: item.product_promotions_pp_id || "",
            total_count: item.total_count || 0,
            product_list: item.product_list.map((product) => ({
              id: product.id || 0,
              name: product.name || "",
              img: product.img || "",
              img_list: product.img_list.map((img) => ({
                id: img.id || 0,
                img: img.img || "",
                name: img.name || "",
                priority: img.priority || 0,
                product_p_id: img.product_p_id || 0,
              })),
              description: product.description || "",
              product_types_pt_id: product.product_types_pt_id || "",
              product_promotions_pp_id: product.product_promotions_pp_id || "",
              market_shops_id: product.market_shops_id || "",
              market_shops: product.market_shops.map((shop) => ({
                id: shop.id || "M",
                name: shop.name || "",
                description: shop.description || "",
                logo_img: shop.logo_img || "",
                phone: shop.phone || "",
                first_name: shop.first_name || "",
                last_name: shop.last_name || "",
                email: shop.email || "",
                address: shop.address || "",
                is_verify: shop.is_verify || false,
                is_public: shop.is_public || false,
                is_available: shop.is_available || false,
                is_open: shop.is_open || false,
                available_start_at: shop.available_start_at || "",
                available_end_at: shop.available_end_at || "",
                review_count: shop.review_count || 0,
                product_types_pt_id: shop.product_types_pt_id || "",
                product_promotions_pp_id: shop.product_promotions_pp_id || "",
              })),
              price: product.price || "",
              price_before_discount: product.price_before_discount || "",
              amount: product.amount || "",
            })),
            promotion_product_list: item.promotion_product_list.map(
              (promotion) => ({
                // ถ้ามีข้อมูลเฉพาะสำหรับโปรโมชั่น เพิ่มที่นี่
              })
            ),
          }));

          // การแปลงข้อมูล sale
          this.itemssale = sale.map((item) => ({
            // ปรับตามโครงสร้างข้อมูลที่ได้รับ
          }));

          // การแปลงข้อมูล trending
          this.trending = trending.map((item) => ({
            // ปรับตามโครงสร้างข้อมูลที่ได้รับ
          }));

          // การตั้งค่า data ของ game และ topshop
          this.game = game;
          this.topshop = topshop;
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
