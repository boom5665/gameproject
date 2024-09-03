<template>
  <div>
    <div class="slider-container MarketitemsData">
      <div class="slider" ref="slider">
        <div>
          <NuxtLink class="text-nav" to="/MarketMyAdd" target="_self">
            <div>
              <img src="~/assets/image/input.png" class="img-tpn" />
            </div>
          </NuxtLink>
        </div>
        <!-- ใช้ v-for กับ itemsData -->

        <div v-for="item in itemsData" :key="item.id" class="tpn_card">
          <div class="dis-tpn">
            <div>
              <img
                :src="item.img"
                style="width: 26px; height: 26px; margin-right: 5px"
                alt="Shop Logo"
              />
            </div>
            <div class="fontname">
              {{ item.name }}
            </div>
          </div>
          <img :src="item.imageSrc" class="tpn_cardimg" alt="Product Image" />
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
            <div class="display">
              <div class="font-total">
                ฿ {{ formatNumber(Number(item.price)) }}
                <span class="strikethrough">{{
                  formatNumber(Number(item.price_before_discount))
                }}</span>
              </div>

              <div class=" disabled">
                <img
                  src="~/assets/image/Delete.png"
                  style="width: 26px; height: 26px; margin: 0px 5px"
                  alt="Add to Cart"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isLoading: false,
      itemsData: [

      ],
    };
  },
  mounted() {
    this.fetchdata();
  },
  methods: {
    formatNumber(value) {
      if (typeof value !== "number") {
        return value; // Return value as is if it's not a number
      }

      if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + "m"; // แปลงเป็น '1.0m'
      } else if (value >= 100000) {
        return (value / 1000).toFixed(0) + "k"; // แปลงเป็น '100k'
      } else if (value >= 10000) {
        return (value / 1000).toFixed(0) + "k"; // แปลงเป็น '10k'
      } else {
        return this.addCommas(value); // เพิ่มลูกน้ำในกรณีตัวเลขน้อยกว่า 10,000
      }
    },

    addCommas(value) {
      if (typeof value !== "number") {
        return value; // Return value as is if it's not a number
      }
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    async fetchdata() {
      this.isLoading = true;
      this.itemsData = []; // เริ่มต้นข้อมูลเป็น array ว่าง
      try {
        const token = this.$cookies.get("authToken");
        if (!token) {
          throw new Error("Authentication token is missing");
        }

        // เรียกใช้ API
        const response1 = await this.$axios.$post(
          "/product/list/read",
          {
            page: 1,
            limit: 10,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const resalldata1 = response1.data_list || [];
        this.page_count = response1.page_count;
        console.log("Data from API:", resalldata1);

        if (Array.isArray(resalldata1) && resalldata1.length > 0) {
          this.itemsData = resalldata1.map((item) => {
            const product = item.product || {};
            const customer = item.customer || {};
            return {
              amount: item.amount || null,
              id: item.id || null,
              sold_amount: item.sold_amount || 0,
              price: item.price,
              price_before_discount: item.price_before_discount,
              phone: customer.phone || null,
              email: customer.email || null,
              img: item.img || "",
              imageSrc: item.img || "",
              description: item.market_shops.description || "Unknown",
              name: item.market_shops.name || "Unknown",
            };
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message || "Something went wrong!",
        });
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>


<style scoped>
.img-tpn {
  width: 220px;
  margin: 10px 5px;
  height: 290px;
}
.content-under {
  background: #ffeb3b;
  color: #000;
}
.font {
  color: #bababa;
  font-size: 12px;
  margin: 10px 0px;
}
.price {
  color: #ffff;
  font-size: 16px;
}
.tpn_card {
  margin: 5px;
  cursor: pointer;
}
.MarketitemsData .slider {
  display: flex;
  transition: left 0.3s ease;
  position: relative;
  left: 0;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 10px;
}
</style>
