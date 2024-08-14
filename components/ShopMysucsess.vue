<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs shopsucsess">
      <div class="font-top-myshop">
        <Nuxt-link class="text-profile" to="/ShopMy" target="_self">
          <span class=""
            >การซื้อของฉัน
            <img
              class="SHOPright"
              src="~/assets/image/SHOPright.png"
              alt="" /></span
        ></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ShopMysucsess" target="_self"
          ><span class="font-proL-top">รายการคำสั่งซื้อ</span></Nuxt-link
        >
      </div>
      <div
        class="form-create"
        style="margin-top: 20px; gap: var(--Spacing-space-16, 12px)"
      >
        <div>
          <div class="display">
            <div class="font-re">การซื้อของฉัน</div>
          </div>
        </div>

        <div class="order-list">
          <div
            v-for="order in computedOrders"
            :key="order.id"
            class="order-item"
          >
            <div class="order-header">
              <div class="order-id">
                รายการคำสั่งซื้อ #{{ order.id }}
                <span class="order-shop">
                  (ทั้งหมด {{ order.totalItems }} ชิ้น)
                </span>
              </div>
              <div :class="['order-status', order.statusClass]">
                {{ order.statusText }}
              </div>
            </div>
            <div>
              <div class="order-box">
                <div class="order-content">
                  <div class="order-shop">สินค้าที่ซื้อ</div>
                  <div class="order-details">
                    <div class="product-item">
                      <img
                        :src="order.productImage"
                        alt="Product Image"
                        class="product-image"
                      />
                      <div class="product-info">
                        <div class="product-name">{{ order.productName }}</div>
                        <div class="product-tag">{{ order.productTag }}</div>
                      </div>
                    </div>
                    <div class="order-summary">
                      <div class="order-amount">
                        ยอดสุทธิ <br />
                        {{ order.amount }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-content">
                <div class="order-summary">
                  <div class="order-date">
                    <div class="order-shop">วันที่สั่งซื้อ <br /></div>
                    {{ order.date }}
                  </div>
                  <div class="order-amount">
                    ยอดสุทธิ <br />
                    {{ order.amount }}
                  </div>
                </div>
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
      orders: [
        {
          id: "403559",
          totalItems: 1,
          statusText: "ซื้อสำเร็จ",
          productImage: require("~/assets/image/cardgold.png"),
          productName: "Top up Razer Gold",
          productTag: "ดิจิตอล",
          date: "11 ก.ค. 2567 14:14",
          amount: "฿7,790",
        },
        {
          id: "403560",
          totalItems: 1,
          statusText: "รายการมีปัญหา",
          productImage: require("~/assets/image/cardgold.png"),
          productName: "Top up Razer Gold",
          productTag: "ดิจิตอล",
          date: "12 ก.ค. 2567 14:14",
          amount: "฿8,790",
        },
        {
          id: "403560",
          totalItems: 1,
          statusText: "รอคืนเงิน",
          productImage: require("~/assets/image/cardgold.png"),
          productName: "Top up Razer Gold",
          productTag: "ดิจิตอล",
          date: "12 ก.ค. 2567 14:14",
          amount: "฿8,790",
        },
        {
          id: "403560",
          totalItems: 1,
          statusText: "คืนเงินสำเร็จ",
          productImage: require("~/assets/image/cardgold.png"),
          productName: "Top up Razer Gold",
          productTag: "ดิจิตอล",
          date: "12 ก.ค. 2567 14:14",
          amount: "฿8,790",
        },
        {
          id: "403560",
          totalItems: 1,
          statusText: "รอการชำระเงิน",
          productImage: require("~/assets/image/cardgold.png"),
          productName: "Top up Razer Gold",
          productTag: "ดิจิตอล",
          date: "12 ก.ค. 2567 14:14",
          amount: "฿8,790",
        },
        // เพิ่มข้อมูล order ตามต้องการ
      ],
    };
  },
  mounted() {
    if (process.client) {
      // ตรวจสอบว่า URL ปัจจุบันตรงกับ /MarketMyshop หรือไม่
      if (this.$route.path === "/MarketMyshop") {
        const hasRefreshed = localStorage.getItem("hasRefreshedMarketMyshop");

        console.log(hasRefreshed);
        if (!hasRefreshed) {
          // ตั้งค่าสถานะว่าได้รีเฟรชหน้าแล้ว
          localStorage.setItem("hasRefreshedMarketMyshop", "true");

          // รีเฟรชหน้าเว็บ
          window.location.reload();
        }
      }
    }
  },
  computed: {
    computedOrders() {
      return this.orders.map((order) => {
        let statusClass = "";

        if (order.statusText.includes("ซื้อสำเร็จ")) {
          statusClass = "complete";
        } else if (order.statusText.includes("รายการมีปัญหา")) {
          statusClass = "problem";
        } else if (order.statusText.includes("รอคืนเงิน")) {
          statusClass = "wait";
        } else if (order.statusText.includes("รอการชำระเงิน")) {
          statusClass = "waitcash";
        } else {
          // สำหรับสถานะอื่นๆ ที่ไม่ตรงกับสามสถานะข้างต้น
          statusClass = "complete"; // ตั้งค่าเป็นสีเขียวปกติ
        }

        return { ...order, statusClass };
      });
    },
  },
};
</script>


<style scoped>
</style>
