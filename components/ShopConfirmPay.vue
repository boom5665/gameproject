<template>
  <div  class="Shop width-hunded">
    <div class="markettop-toppage">
      <div class="dis-flex" style="align-items: flex-start">
        <div  class="box-pay width-hunded">
          <Stepper :steps="steps" :currentStep="currentStep" />
          <!-- <button @click="cancelpay">ถัดไป</button> -->
          <div class="container">
            <div class="header">
              <!-- <img
              src="~/assets/image/success-icon.png"
              alt="Success Icon"
              class="icon"
            /> -->
              <h3>การสั่งซื้อสำเร็จ</h3>
            </div>
            <div class="content">
              <p style="font-size: 20px; text-align: center">
                รอการยืนยันหลักฐานการโอนเงิน
              </p>
              <p>กรุณาชำระเงินภายในเวลาที่กำหนดเพื่อไม่ให้ออเดอร์ถูกยกเลิก</p>
              <div class="amount">ยอดรวม ฿7,790</div>
              <div class="line">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="296"
                  height="2"
                  viewBox="0 0 296 2"
                  fill="none"
                >
                  <path
                    d="M1 1H295"
                    stroke="#5C25F2"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-dasharray="5 5"
                  />
                </svg>
              </div>
              <button class="btn-upload">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    opacity="0.2"
                    d="M7.78906 8.125H3V5C3 4.83424 3.06585 4.67527 3.18306 4.55806C3.30027 4.44085 3.45924 4.375 3.625 4.375H7.78906C7.9242 4.37556 8.05562 4.41936 8.16406 4.5L10.5 6.25L8.16406 8C8.05562 8.08064 7.9242 8.12444 7.78906 8.125Z"
                    fill="white"
                  />
                  <path
                    d="M10.5 6.25H17.375C17.5408 6.25 17.6997 6.31585 17.8169 6.43306C17.9342 6.55027 18 6.70924 18 6.875V15.625C18 15.7908 17.9342 15.9497 17.8169 16.0669C17.6997 16.1842 17.5408 16.25 17.375 16.25H3.625C3.45924 16.25 3.30027 16.1842 3.18306 16.0669C3.06585 15.9497 3 15.7908 3 15.625V8.125"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.78906 8.125H3V5C3 4.83424 3.06585 4.67527 3.18306 4.55806C3.30027 4.44085 3.45924 4.375 3.625 4.375H7.78906C7.9242 4.37556 8.05562 4.41936 8.16406 4.5L10.5 6.25L8.16406 8C8.05562 8.08064 7.9242 8.12444 7.78906 8.125V8.125Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.625 11.5625H12.375"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 9.6875V13.4375"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
                >แนบหลักฐานการโอนเงิน
              </button>
              <p>รองรับไฟล์ .jpeg และ .png ขนาดไฟล์ไม่เกิน 4 MB</p>
              <div class="form-group">
                <label for="account">โอนเงินจากบัญชี</label>
                <select id="account" class="form-control">
                  <option>เลือกบัญชี</option>
                  <option>บัญชีที่ 1</option>
                  <option>บัญชีที่ 2</option>
                </select>
              </div>
              <div class="form-group">
                <label for="bank">จากธนาคาร</label>
                <select id="bank" class="form-control">
                  <option>เลือกธนาคาร</option>
                  <option>ธนาคาร A</option>
                  <option>ธนาคาร B</option>
                </select>
              </div>
              <div class="form-group">
                <label for="amount">จำนวนเงิน</label>
                <input type="text" id="amount" class="" />
              </div>
              <div class="form-group">
                <label for="datetime">วัน-เวลาโอน</label>
                <input type="datetime-local" id="datetime" class="" />
              </div>

              <div class="submit" @click="confirmpay">แจ้งการโอนเงิน</div>
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
      currentStep: 2,
      steps: [
        { label: "คำสั่งซื้อใหม่", date: "10/07/24", time: "18:00" },
        { label: "ชำระเงินแล้ว", date: "10/07/24", time: "18:00" },
        { label: "ได้รับสินค้า", date: "--/--/--", time: "--:--" },
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
        title: "ยืนยันคำสั่งซื้อ",
        text: "ฉันได้ตรวจสอบและยอมรับสินค้า", // Use `text` instead of `body`
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
      });

      // หากผู้ใช้กดปุ่ม "ยืนยัน"
      if (result.isConfirmed) {
        this.$router.push("/ShopDetail"); // รีไดเรคไปยังหน้า ShopQR
      }
      // หากผู้ใช้กดปุ่ม "ยกเลิก"
      // ไม่ต้องทำอะไรจะยังคงอยู่หน้าเดิม
    },
  },
  mounted() {},
};
</script>

<style scoped>
/* เพิ่มสไตล์ตามต้องการ */
.Shop .dis-flex {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0px;
  flex-direction: column;
}

.Shop .markettop-toppage {
  border-radius: 8px;
  background: var(--Linear, linear-gradient(180deg, #130048 0%, #5823e5 100%));
   /* max-width: 800px; */
  margin: 0px 0px;
}
.container {
  background-color: white;
  border-radius: 10px;
  padding: 0px 0px 25px 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
}

.header {
  padding: 10px 0px 0px 0px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  width: 100%;
  border-radius: var(--Border-radius-6, 6px) var(--Border-radius-6, 6px)
    var(--Border-radius-0, 0px) var(--Border-radius-0, 0px);
  background: var(
    --Linear,
    linear-gradient(88deg, #6127ff 0.47%, #6f3aff 100%)
  );
  color: white;
}

.icon {
  width: 26px;
  height: 26px;
  margin-right: 10px;
}

.content {
  text-align: left;
}

.amount {
  font-size: 20px;
  margin: 20px 0;
  border-radius: var(--Border-radius-6, 6px);
  background: var(--Color-Primary-Pueple-500, #5c25f2);
  color: var(--Color-Secondary-500, #ffeb3b);
  display: flex;
  padding: var(--Spacing-space-8, 8px) 0px;
  justify-content: center;
}

.btn-upload {
  background-color: #333;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn-submit {
  background-color: #ffd700;
  color: black;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.line {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
}
</style>
