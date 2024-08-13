<template>
  <div class="Shop width-hunded"  >
    <div class="markettop-toppage">
      <div class="dis-flex" style="align-items: flex-start">
        <div class="width-hunded box-pay" >
          <h3 class="font-re">รายละเอียดคำสั่งซื้อ</h3>
          <div>
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
          <div class="order-container">
            <div class="order-header">
              <div class="order-info">
                <div class="order-number">
                  <img src="your-icon-path.png" alt="icon" />
                  <span>หมายเลขคำสั่งซื้อ</span>
                  <span class="font-re">T240606085dda80</span>
                </div>
                <div class="order-status">
                  <img src="your-icon-path.png" alt="icon" />
                  <span>สถานะคำสั่งซื้อ</span>
                  <span class="font-re">รอผู้ขายยืนยันการชำระเงิน</span>
                </div>
                <div class="order-details">
                  <img src="your-icon-path.png" alt="icon" />
                  <span>ข้อมูลการซื้อ</span>
                  <span class="font-re">ตรวจสอบเรียบร้อย</span>
                </div>
              </div>

              <div class="order-actions">
                <button class="submit" @click="confirmpay">ยืนยัน</button>
                <button class="report-button">แจ้งปัญหา</button>
              </div>
            </div>
            <div>
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
                  <img src="your-icon-path.png" alt="icon" />
                  <span>โค้ดสั่งซื้อ</span>
                </div>
                <div style="width: 15%">
                  <button class="submit">ดูโค้ด</button>
                </div>
              </div>

              <div>
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
                  <span class="font-re">06/06/2024 12:38</span>
                </div>

                <div class="order-timestamp-content">
                  <span>วิธีชำระเงิน </span>
                  <span class="font-re">QR Cash</span>
                </div>
              </div>
              <div class="order-product">
                <img src="~/assets/image/cardgold.png" alt="Product Image" />
                <div class="product-details">
                  <span>Top up Razer Gold</span>
                  <span>x1</span>
                  <span>฿9,999</span>
                </div>
              </div>

              <div>
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
                <span class="font-re">฿9,999</span>
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
    };
  },
  computed: {},
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
        this.$router.push("/ShopQR"); // รีไดเรคไปยังหน้า ShopQR
      }
      // หากผู้ใช้กดปุ่ม "ยกเลิก"
      // ไม่ต้องทำอะไรจะยังคงอยู่หน้าเดิม
    },
  },
  mounted() {},
};
</script>

<style scoped>
.Shop .markettop-toppage {
  border-radius: 8px;
  background: var(--Linear, linear-gradient(180deg, #130048 0%, #5823e5 100%));
  max-width: 800px;
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
  flex-direction: column;
  margin-left: 5px;
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
</style>
