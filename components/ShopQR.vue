<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <div class="font-top-myshop">
        สั่งซื้อสินค้า &nbsp; | &nbsp;
        <span class="font-proL-top">สั่งซื้อตอนนี้</span>
      </div>
      <div
        class="form-create"
        style="
          margin-top: 20px;
          gap: var(--Spacing-space-16, 12px);
          align-items: center;
        "
      >
        <div class="cob-qr">
          <div style="width: 100%; display: contents">
            <div style="margin-right: 20px">
              <img class="" :src="qrImageUrl" />
            </div>
          </div>
          <div>
            <div class="dis-input">
              <div>ยอดสุทธิ</div>
              <div class="font-re">฿7,790</div>
            </div>
            <div>
              <div>ขั้นตอนการจ่ายเงินด้วย QR Code</div>
              <div class="dis-flex">
                <div class="il-qr">1</div>
                <div>เปิดแอปพลิเคชันธนาคารที่คุณมี</div>
              </div>
              <div class="dis-flex">
                <div class="il-qr">2</div>
                <div>ไปยังเมนู “สแกน” หรือ “สแกนจ่าย”</div>
              </div>
              <div class="dis-flex">
                <div class="il-qr">3</div>
                <div>ตรวจสอบข้อมูลให้ถูกต้องก่อนจ่ายเงิน</div>
              </div>
              <div class="dis-flex">
                <div class="il-qr">4</div>
                <div>
                  หลังจากจ่ายเงินแล้ว ข้อมูลคำสั่งซื้อจะเข้าสู่ระบบ ของ Gamiqo
                  และรอร้านค้ายืนยัน
                </div>
              </div>
            </div>
          </div>
          <button class="b-top-cy" @click="confirmpay">ยืนยันการสั่งซื้อ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qrImageUrl: require("@/assets/image/imageQR.png"), // กำหนดค่าเริ่มต้นสำหรับ URL ของภาพ QR
    };
  },
  mounted() {
    // this.fetchQRImage();
  },
  methods: {
    async fetchQRImage() {
      try {
        const response = await this.$axios.$get(
          "https://api.example.com/qr-image"
        );
        this.qrImageUrl = response.data.imageUrl; // สมมติว่า API ส่ง URL ของภาพ QR กลับมาใน data.imageUrl
      } catch (error) {
        console.error("Error fetching QR image:", error);
      }
    },
    async confirmpay() {
      // แสดง SweetAlert2 ด้วยข้อความสำเร็จ
      const result = await this.$swal.fire({
        title: "ทำการซื้อสำเร็จ",
        icon: "success",
        confirmButtonText: "OK",
      });
      // รีไดเรคไปยังหน้า index หลังจากกด "OK"
      if (result.isConfirmed) {
        this.$router.push("/ShopConfirmPay"); // รีไดเรคไปยังหน้า index
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.M-Create-Backgroud .form-create {
  align-items: center;
}
.cob-qr {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 25px;
  border-radius: 6px;
  border-radius: var(--Border-radius-6, 6px);
  border: 2px solid #bababa;
  border: 2px solid var(--color-black-white-700, #bababa);
  padding: 10px 30px;
}
.dis-flex {
  display: flex;
  margin: 10px 0px;
  width: 100%;
}
.il-qr {
  display: flex;
  width: 26px;
  height: 26px;
  padding: 2px 10px;
  flex-direction: column;
  border-radius: 15px;
  background: var(--Color-Primary-Pueple-500, #5c25f2);
  color: white;
  align-items: center;
  margin-right: 10px;
}
</style>
