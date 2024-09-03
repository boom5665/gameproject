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
        <div
          class="tpn_card"
          v-for="(item, index) in itemsData"
          :key="item.id || index"
        >
          <img :src="item.imageSrc" class="tpn_cardimg" />
          <div class="content-under">{{ item.subtitle }}</div>
          <div class="font">{{ item.description }}</div>
          <div class="display">
            <div class="price">฿ {{ item.price }}</div>
            <div>
              <img
                :src="item.cartSrc"
                style="width: 26px; height: 26px; margin-right: 5px"
              />
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
      isLoading: false, // ตัวแปรที่ใช้แสดง loader
      itemsData: [
        // ชื่อที่ถูกต้องของ data property
        {
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"), // ใช้ require หรือ import
          subtitle: "แก้ไขข้อมูลสินค้า",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/Delete.png"), // ใช้ require หรือ import
        },
      ],
    };
  },
  mounted() {
    this.fetchdata(); // ดึงข้อมูลเมื่อคอมโพเนนต์ถูกติดตั้ง
  },
  methods: {
    // เพิ่ม methods หรือ logic ที่ต้องการในนี้
    async fetchdata() {
      this.isLoading = true; // แสดง loader
      this.orderItems = [];
      try {
        const token = this.$cookies.get("authToken");
        if (!token) {
          throw new Error("Authentication token is missing");
        }

        // เรียกใช้ API แรก
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
        console.log("Data from first API:", resalldata1);

        if (Array.isArray(resalldata1) && resalldata1.length > 0) {
          resalldata1.forEach((item) => {
            const product = item.product || {};
            const customer = item.customer || {};
            const newOrderItem = {
              amount: item.amount || null,
              slipimg: item.evidence_bank_from_slip_img || null,
              payatt: item.evidence_bank_from_pay_at || null,
              bank: item.evidence_bank_from_bank || null,
              formname: item.evidence_bank_from_name || null,
              money: item.evidence_bank_from_pay_money || null,
              id: item.id || null,
              status: this.getStatusLabel(item.status), // ใช้ฟังก์ชันเพื่อแปลสถานะ
              price: `฿${(item.price_total || 0).toFixed(2)}`,
              phone: customer.phone || null,
              email: customer.email || null,
              img: product.img || "",
              name: product.name || "Unknown",
              description: product.description || "Unknown",
              date: this.formatDate(item.created_at) || "Invalid Date",
            };

            this.orderItems.push(newOrderItem);
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
        this.isLoading = false; // ซ่อน loader
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
