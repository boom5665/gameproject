<template>
  <div class="Shop width-hunded">
    <div class="markettop-toppage">
      <div class="dis-flex" style="align-items: flex-start">
        <div class="width-hunded box-pay">
          <h3 class="font-re">รายละเอียดคำสั่งซื้อ</h3>
          <div class="line-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="610"
              height="2"
              viewBox="0 0 610 2"
              fill="none"
            >
              <path
                d="M1 1H609"
                stroke="#5C25F2"
                stroke-linecap="round"
                stroke-dasharray="3 3"
              />
            </svg>
          </div>
          <Stepper :steps="steps" :currentStep="currentStep" />
          <!-- <button @click="cancelpay">ถัดไป</button> -->
          <div class="order-container" v-for="order in orders" :key="order.id">
            <div class="order-header">
              <div class="order-info">
                <div class="order-number">
                  <div>
                    <img src="~/assets/image/iconbill.png" alt="icon" />
                  </div>
                  <div class="oder-content">
                    <span>หมายเลขคำสั่งซื้อ</span>
                    <span class="font-re">{{ order.orderNumber }}</span>
                  </div>
                </div>
                <div class="order-status">
                  <div>
                    <img src="~/assets/image/iconbill.png" alt="icon" />
                  </div>
                  <div class="oder-content">
                    <span>สถานะคำสั่งซื้อ</span>
                    <span class="font-re">{{ order.orderStatus }}</span>
                  </div>
                </div>
                <div class="order-details">
                  <div>
                    <img src="~/assets/image/iconcar.png" alt="icon" />
                  </div>
                  <div class="oder-content">
                    <span>ข้อมูลการซื้อ</span>
                    <span class="font-re">{{ order.orderDetails }}</span>
                  </div>
                </div>
              </div>

              <div class="order-actions">
                <button class="submit" @click="confirmpay(order)">
                  ยืนยัน
                </button>
                <button class="report-button" @click="reportProblem(order)">
                  แจ้งปัญหา
                </button>
              </div>
            </div>
            <div class="line-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="610"
                height="2"
                viewBox="0 0 610 2"
                fill="none"
              >
                <path
                  d="M1 1H609"
                  stroke="#5C25F2"
                  stroke-linecap="round"
                  stroke-dasharray="3 3"
                />
              </svg>
            </div>

            <div class="order-body">
              <div class="order-code">
                <div style="width: 85%">
                  <!-- <img src="your-icon-path.png" alt="icon" /> -->
                  <span>โค้ดสั่งซื้อ</span>
                </div>
                <div style="width: 15%">
                  <button class="submit" @click="viewCode(order)">
                    ดูโค้ด
                  </button>
                </div>
              </div>

              <div class="line-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="610"
                  height="2"
                  viewBox="0 0 610 2"
                  fill="none"
                >
                  <path
                    d="M1 1H609"
                    stroke="#5C25F2"
                    stroke-linecap="round"
                    stroke-dasharray="3 3"
                  />
                </svg>
              </div>
              <div class="order-timestamp">
                <div class="order-timestamp-content">
                  <span>เวลาการสั่งซื้อ </span>
                  <span class="font-re">{{ order.timestamp }}</span>
                </div>

                <div class="order-timestamp-content">
                  <span>วิธีชำระเงิน </span>
                  <span class="font-re">{{ order.paymentMethod }}</span>
                </div>
              </div>
              <div class="order-product">
                <img :src="order.productImage" alt="Product Image" />
                <div class="product-details">
                  <span>{{ order.productName }}</span>
                  <span>x{{ order.quantity }}</span>
                  <span>฿{{ order.price }}</span>
                </div>
              </div>

              <div class="line-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="610"
                  height="2"
                  viewBox="0 0 610 2"
                  fill="none"
                >
                  <path
                    d="M1 1H609"
                    stroke="#5C25F2"
                    stroke-linecap="round"
                    stroke-dasharray="3 3"
                  />
                </svg>
              </div>
              <div class="order-summary">
                <span>รวมยอดสั่งซื้อทั้งหมด</span>
                <span class="font-re">฿{{ order.totalPrice }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stepper from "@/components/ShopStepper.vue";
export default {
  components: {
    Stepper,
  },
  data() {
    return {
      currentStep: 3,
      steps: [
        { label: "คำสั่งซื้อใหม่", date: "10/07/24", time: "18:00" },
        { label: "ชำระเงินแล้ว", date: "10/07/24", time: "18:00" },
        { label: "ได้รับสินค้า", date: "10/07/24", time: "18:00" },
        { label: "ยืนยันสินค้า", date: "--/--/--", time: "--:--" },
        { label: "รีวิวสินค้า", date: "--/--/--", time: "--:--" },
      ],
      isLoading: false, // ตัวแปรที่ใช้แสดง loader
      orders: [
        {
          id: 1,
          orderNumber: "T240606085dda80",
          orderStatus: "รอผู้ขายยืนยันการชำระเงิน",
          orderDetails: "ตรวจสอบเรียบร้อย",
          timestamp: "06/06/2024 12:38",
          paymentMethod: "QR Cash",
          productName: "Top up Razer Gold",
          quantity: 1,
          price: 9999,
          totalPrice: 9999,
          productImage: require("@/assets/image/monthunt.png"),
        },
        // สามารถเพิ่มรายการอื่น ๆ ได้ตามต้องการ
      ],
    };
  },
  computed: {},

  async mounted() {
    const responseData = JSON.parse(this.$route.query.data);
    console.log(responseData);
    // await this.fetchdata(); // ดึงข้อมูล QR image เมื่อคอมโพเนนต์ถูก mount
  },
  methods: {
    async confirmpay() {
      // แสดง SweetAlert2 ด้วยข้อความสำเร็จ
      const result = await this.$swal.fire({
        title: "ยืนยันแจ้งชำระเงิน",
        text: "ยืนยันหลักฐานการชำระเงิน", // Use `text` instead of `body`
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "แก้ไข",
      });

      // หากผู้ใช้กดปุ่ม "ยืนยัน"
      if (result.isConfirmed) {
        this.$router.push("/ShopDetail"); // รีไดเรคไปยังหน้า ShopQR
        this.currentStep = 4;
      }
      // หากผู้ใช้กดปุ่ม "ยกเลิก"
      // ไม่ต้องทำอะไรจะยังคงอยู่หน้าเดิม
    },
    async reportProblem(order) {
      // ฟังก์ชันแจ้งปัญหา
      const result = await this.$swal.fire({
        title: "คุณจะแจ้งปัญหาใช่ไหม",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "แก้ไข",
      });
    },
    async viewCode(order) {
      const result = await this.$swal.fire({
        title: "จะดูโค้ดใช่ไหม",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
      });
    },
    async fetchdata() {
      this.isLoading = true; // แสดง loader
      try {
        const token = this.$cookies.get("authToken");
        console.log(token);

        const response = await this.$axios.$post(
          "/payment/vendor/product/request/list/read",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);

        if (response) {
          // ทำบางอย่างกับ response ถ้าจำเป็น
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (error) {
        console.error("Error fetching QR image:", error);
      } finally {
        this.isLoading = false; // ซ่อน loader ในทุกกรณี
      }
    },
  },
};
</script>

<style scoped>
.Shop .markettop-toppage {
  border-radius: 8px;
  background: var(--Linear, linear-gradient(180deg, #130048 0%, #5823e5 100%));
  /* max-width: 800px; */
  margin: 0px 0px;
}
.submit {
  width: 100%;
  margin-top: 0;
}
.order-container {
  padding: 10px;
  background-color: white;
  width: 100%;
}

.order-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.order-info {
  display: flex;
  flex-direction: column;
}

.order-number,
.order-status,
.order-details {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
  flex-direction: row;
  margin-left: 5px;
}
.oder-content {
  display: flex;
  flex-direction: column;
}
.order-number img,
.order-status img,
.order-details img {
  margin-right: 8px;
}

.order-actions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.order-timestamp-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
}
.report-button {
  background: #3c3b4b;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
}

.order-body {
  margin-top: 16px;
}

.order-code {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.order-timestamp {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 16px;
}

.order-product {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;
  border-radius: var(--Border-radius-6, 6px);
  background: var(--color-black-white-800, #f8f8f8);
  padding: 15px;
}

.order-product img {
  width: 50px;
  height: 50px;
  margin-right: 16px;
  border-radius: var(--Border-radius-16, 16px);
}

.product-details {
  display: flex;
  flex-direction: column;
}

.order-summary {
  display: flex;
  justify-content: space-between;
}
.line-center {
  width: 100%;
  text-align: center;
}
</style>
