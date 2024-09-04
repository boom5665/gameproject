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
            <div class="qr-container" style="margin-right: 20px">
              <div class="container-logo promptpay">
                <img
                  src="~/assets/image/ThaiQR.jpg"
                  alt="Search"
                  class="Logo-img"
                />
              </div>
              <div class="container-qr">
                <img v-if="qrImageUrl" class="real-qr" :src="qrImageUrl" />
                <img
                  v-if="!qrImageUrl"
                  src="~/assets/image/DummyQR.png"
                  class="dummy-qr"
                />
              </div>
              <div class="container-logo">
                <img
                  src="~/assets/image/Logo-Gamemarket.png"
                  alt="Search"
                  class="Logo-img"
                />
              </div>
            </div>
          </div>
          <div>
            <div class="dis-input price-container">
              <div>ยอดสุทธิ</div>
              <div class="font-re">{{ total_price }}</div>
            </div>
            <div class="terms-container">
              <div class="title">ขั้นตอนการจ่ายเงินด้วย QR Code</div>
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
          this.total_price = `${
            response.total_price
              ? response.total_price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })
              : ""
          }`;
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
    border: 2.5px solid #5c25f2;
    border-radius: 6px;
    min-width: 300px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > img {
      width: 100%;
    }
    .container-qr {
      display: flex;
      justify-content: center;
      > img.real-qr {
        transition: 1s;
        animation: fadeIn 5s ease-in;
      }
      > img.dummy-qr {
        filter: blur(5px);
      }
    }

    .container-logo {
      background: linear-gradient(
        0deg,
        rgba(4, 2, 38, 1) 0%,
        rgba(92, 37, 242, 1) 90%
      );
      display: flex;
      justify-content: center;
      padding-bottom: 20px;
      padding-top: 20px;
      &.promptpay {
        background-color: #1a3761 !important;
        background: none;
        .Logo-img {
          height: 80px;
          width: 200px;
        }
      }

      img {
        width: 112.5px;
        height: 55px;
      }
    }
  }
}

.price-container {
  gap: 20px;
  align-items: center;
  font-size: 24px;
  > .font-re {
  }
}

.terms-container {
  padding-top: 30px;
  .title {
    font-weight: 600;
    font-size: 20px;
  }
  .dis-flex {
    font-weight: 200;
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
