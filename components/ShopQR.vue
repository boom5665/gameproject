<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <div class="font-top-myshop">
        สั่งซื้อสินค้า &nbsp; | &nbsp;
        <span class="font-proL-top">สั่งซื้อตอนนี้</span>
      </div>
      <div class="form-create" style="
          margin-top: 20px;
          gap: var(--Spacing-space-16, 12px);
          align-items: center;
        ">
        <div class="cob-qr">
          <div style="width: 100%; display: contents">
            <div class="qr-container" style="margin-right: 20px">
              <img class="" :src="qrImageUrl" />
              <div class="container-logo"><img src="~/assets/image/Logo-Gamemarket.png" alt="Search" class="Logo-img" />
              </div>

            </div>
          </div>
          <div>
            <div class="dis-input">
              <div>ยอดสุทธิ</div>
              <div class="font-re">{{ total_price }}</div>
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
                  หลังจากจ่ายเงินแล้ว ข้อมูลคำสั่งซื้อจะเข้าสู่ระบบของ Game
                  Market และรอร้านค้ายืนยัน
                </div>
              </div>
            </div>
          </div>
          <button class="b-top-cy" @click="confirmpay">
            ยืนยันการสั่งซื้อ
          </button>
          <Loader :isLoading="isLoading" />
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
      qrImageUrl: "", // กำหนดค่าเริ่มต้นสำหรับ URL ของภาพ QR
      total_price: "",
      qr: null, // เพิ่มตัวแปร qr ไว้ที่ data เพื่อให้เข้าถึงได้ใน confirmpay
    };
  },
  async mounted() {
    await this.fetchQRImage(); // ดึงข้อมูล QR image เมื่อคอมโพเนนต์ถูก mount
  },
  methods: {
    async fetchQRImage() {
      this.isLoading = true; // แสดง loader
      try {
        const token = this.$cookies.get("authToken");
        const codeqr = this.$route.query.codeqr; // ดึงค่า codeqr จาก query parameters
        this.qr = Number(codeqr); // กำหนดค่า qr ใน data
        console.log(this.qr);
        console.log(token);
        const response = await this.$axios.$post(
          "/payment/product/promptpay/qr-code",
          {
            id: this.qr,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);

        if (response) {
          this.qrImageUrl = response.qr_code_img; // ใช้ response.data.qr_code_img ตามที่ได้รับจาก API
          this.total_price = response.total_price; // ใช้ response.data.total_price ตามที่ได้รับจาก API
          this.isLoading = false; // ซ่อน loader
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (error) {
        this.isLoading = false; // ซ่อน loader
        console.error("Error fetching QR image:", error);
      }
    },
    async confirmpay() {
      try {
        // แสดง SweetAlert2 ด้วยข้อความสำเร็จ

        // รีไดเรคไปยังหน้า ShopConfirmPay หลังจากกด "OK"

        this.$router.push({
          path: "/ShopConfirmPay",
          query: {
            qr: this.qr, // ใช้ค่า qr ที่เก็บใน data
            total_price: this.total_price, // ใช้ค่า total_price ที่เก็บใน data
          },
        });
      } catch (error) {
        this.$handleError(error);
        this.isLoading = false; // ซ่อน loader
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

  .qr-container {
    margin-top: 40px;
    margin-bottom: 40px;
    border: 4px solid #5c25f2;
    border-radius: 6px;
    margin-right: 20px;
    width: 26vw;
    margin-right: 20px;

    .container-logo {
      background: linear-gradient(0deg, rgba(4, 2, 38, 1) 0%, rgba(92, 37, 242, 1) 90%);
      display: flex;
      justify-content: center;
      padding-bottom: 20px;
      padding-top: 20px;

      img {
        width: 112.5px;
        height: 55px;
      }
    }
  }
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
