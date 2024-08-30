<template>
  <div class="Shop width-hunded">
    <div class="markettop-toppage">
      <div class="dis-flex" style="align-items: flex-start">
        <div class="box-pay width-hunded">
          <Stepper :steps="steps" :currentStep="currentStep" />
          <div class="container">
            <div class="header">
              <h3>การสั่งซื้อสำเร็จ</h3>
            </div>
            <div class="content">
              <p style="font-size: 20px; text-align: center">
                รอการยืนยันหลักฐานการโอนเงิน
              </p>
              <p>กรุณาชำระเงินภายในเวลาที่กำหนดเพื่อไม่ให้ออเดอร์ถูกยกเลิก</p>
              <div class="amount">ยอดรวม ฿{{ total }}</div>
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

              <form @submit.prevent="confirmpay">
                <label class="btn-upload">
                  แนบหลักฐานการโอนเงิน
                  <input
                    type="file"
                    id="fileUpload"
                    @change="handleFileUpload"
                    accept="image/*"
                  />
                </label>

                <div v-if="imagePreview" class="image-preview">
                  <img :src="imagePreview" alt="Image Preview" />
                </div>
                <p>รองรับไฟล์ .jpeg และ .png ขนาดไฟล์ไม่เกิน 4 MB</p>
                <span v-if="errors.file" class="error-message">
                  {{ errors.file }}
                </span>
                <div class="form-group">
                  <label for="account">โอนเงินจากบัญชี</label>
                  <input id="account" class="form-control" v-model="account" />
                  <span v-if="errors.account" class="error-message">
                    {{ errors.account }}
                  </span>
                </div>

                <div class="form-group">
                  <label for="bank">จากธนาคาร</label>
                  <select id="bank" class="form-control" v-model="bank">
                    <option value="KBANK">ธนาคารกสิกรไทย</option>
                    <option value="BBL">ธนาคารกรุงเทพ</option>
                    <option value="KTB">ธนาคารกรุงไทย</option>
                    <option value="TMB">ธนาคารทหารไทย</option>
                    <option value="SCB">ธนาคารไทยพานิชย์</option>
                    <option value="BAY">ธนาคารกรุงศรีอยุธยา</option>
                    <option value="KKP">ธนาคารเกียรตินาคิน</option>
                    <option value="CIMBT">ธนาคารซีไอเอ็มบีไทย</option>
                    <option value="TISCO">ธนาคารทิสโก้</option>
                    <option value="TTB">ธนาคารธนชาต</option>
                    <option value="UOBT">ธนาคารยูโอบี</option>
                    <option value="SCBT">
                      ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย)
                    </option>
                    <option value="LHBANK">ธนาคารแลนด์ แอนด์ เฮาส์</option>
                    <option value="ICBC">ธนาคารไอซีบีซี (ไทย)</option>
                    <option value="BAAC">
                      ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร
                    </option>
                    <option value="EXIM">
                      ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย
                    </option>
                    <option value="GSB">ธนาคารออมสิน</option>
                    <option value="GHB">ธนาคารอาคารสงเคราะห์</option>
                    <option value="ISBT">ธนาคารอิสลามแห่งประเทศไทย</option>
                    <option value="BOC">ธนาคารแห่งประเทศจีน</option>
                    <option value="SMTBT">
                      ธนาคารซูมิโตโม มิตซุย ทรัสต์ (ไทย)
                    </option>
                    <option value="HSBC">
                      ธนาคารฮ่องกงและเซี้ยงไฮ้แบงกิ้งคอร์ปอเรชั่น จำกัด
                    </option>
                  </select>

                  <span v-if="errors.bank" class="error-message">
                    {{ errors.bank }}
                  </span>
                </div>

                <div class="form-group">
                  <label for="amount">จำนวนเงิน</label>
                  <input
                    type="text"
                    id="amount"
                    class="form-control"
                    v-model="amount"
                  />
                  <span v-if="errors.amount" class="error-message">
                    {{ errors.amount }}
                  </span>
                </div>

                <div class="form-group">
                  <label for="datetime">วัน-เวลาโอน</label>
                  <input
                    type="datetime-local"
                    id="datetime"
                    class="form-control"
                    v-model="datetime"
                  />
                  <span v-if="errors.datetime" class="error-message">
                    {{ errors.datetime }}
                  </span>
                </div>

                <div class="submit" @click.prevent="confirmpay">
                  แจ้งการโอนเงิน
                </div>
              </form>
              <div class="submit back-submit" @click="backqr">
                ไปหน้าชำระเงิน
              </div>
              <Loader :isLoading="isLoading" />
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
    const today = new Date();
    const currentDateTime = new Date();
    const formattedDate = currentDateTime.toLocaleDateString("th-TH", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
    const formattedTime = currentDateTime.toLocaleTimeString("th-TH", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return {
      currentStep: 2,
      steps: [
        { label: "คำสั่งซื้อใหม่", date: formattedDate, time: formattedTime },
        { label: "ชำระเงินแล้ว", date: formattedDate, time: formattedTime },
     
        { label: "ยืนยันสินค้า", date: "--/--/--", time: "--:--" },
      ],
      imagePreview: null,
      file: null,
      account: "",
      bank: "",
      amount: "",
      datetime: this.getFormattedDateTime(), // เรียกใช้ฟังก์ชันในการกำหนดค่าเริ่มต้น
      codeqr: "",
      errors: {},
      isLoading: false, // ตัวแปรที่ใช้แสดง loader
      total: "",
    };
  },

  async mounted() {
    // ดึงค่า codeqr จาก query parameters และแปลงเป็น number
    const codeqr = this.$route.query.qr;
    const total = this.$route.query.total_price;
    console.log(total);

    // ตรวจสอบว่าการแปลงสำเร็จหรือไม่
    if (!isNaN(codeqr)) {
      this.codeqr = codeqr;
      this.total = total;
    } else {
      console.error("ค่า codeqr ไม่สามารถแปลงเป็นตัวเลขได้");
      this.codeqr = null; // หรือจัดการกับกรณีที่ค่าผิดปกติ
      this.total = null;
    }

    console.log(this.codeqr); // แสดงค่า this.codeqr
  },
  watch: {
    amount(newValue) {
      // จัดรูปแบบและอัปเดต amount
      const formattedAmount = this.formatNumber(newValue);
      // ตรวจสอบว่าค่าที่จัดรูปแบบแล้วต่างจากค่าปัจจุบันหรือไม่
      if (formattedAmount !== this.amount) {
        this.amount = formattedAmount;
      }
    },
    account(newValue) {
      // จัดรูปแบบและอัปเดต account
      const formattedAccount = this.formataccount(newValue);
      // ตรวจสอบว่าค่าที่จัดรูปแบบแล้วต่างจากค่าปัจจุบันหรือไม่
      if (formattedAccount !== this.account) {
        this.account = formattedAccount;
      }
    },
  },
  methods: {
    formatNumber(value) {
      // กำจัดอักขระที่ไม่ใช่ตัวเลข
      const numericValue = value.replace(/[^0-9]/g, "");
      // ฟอร์แมตเป็นตัวเลขพร้อมลูกน้ำ
      return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    formataccount(value) {
      // ลบช่องว่างด้านหน้าและด้านหลัง
      let newVal = value.trim();

      // ลบอักขระที่ไม่ใช่ตัวเลข
      newVal = newVal.replace(/\D/g, "");

      // ตรวจสอบไม่ให้ใส่เกิน 10 หลัก
      if (newVal.length > 10) {
        newVal = newVal.slice(0, 10); // ตัดค่าที่เกิน
      }

      // ฟอร์แมตหมายเลขโทรศัพท์ให้มีขีดเมื่อความยาวครบ 10 หลัก
      if (newVal.length === 10) {
        return newVal.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
      } else {
        return newVal;
      }
    },
    getFormattedDateTime() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      const hours = String(today.getHours()).padStart(2, "0");
      const minutes = String(today.getMinutes()).padStart(2, "0");

      return `${year}-${month}-${day}T${hours}:${minutes}`;
    },
    validateForm() {
      this.errors = {};

      // เรียกใช้ formataccount เพื่อจัดการการตรวจสอบและการจัดรูปแบบ
      const formattedAccount = this.formataccount(this.account);

      // ตรวจสอบหมายเลขบัญชีธนาคาร
      if (!this.account) {
        this.errors.account = "กรุณากรอกหมายเลขบัญชีธนาคาร";
      } else if (formattedAccount.length < 10) {
        this.errors.account = "หมายเลขบัญชีธนาคารต้องมี 10 หลัก";
      }
      if (!this.bank) {
        this.errors.bank = "กรุณาเลือกธนาคาร";
      }
      if (!this.amount) {
        this.errors.amount = "กรุณาระบุจำนวนเงินที่ถูกต้อง";
      }
      if (!this.datetime) {
        this.errors.datetime = "กรุณาระบุวัน-เวลาโอน";
      }
      if (!this.file) {
        this.errors.file = "กรุณาแนบหลักฐานการโอนเงิน";
      }

      return Object.keys(this.errors).length === 0;
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.file = file; // เก็บไฟล์ใน data
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    async confirmpay() {
      if (!this.validateForm()) {
        console.log("Validation failed");
        return; // หยุดการดำเนินการหาก validateForm ไม่ผ่าน
      }

      this.isLoading = true; // แสดง loader
      const token = this.$cookies.get("authToken");
      const formData = new FormData();

      const base64ToFile = (base64, filename) => {
        return new Promise((resolve, reject) => {
          const [header, data] = base64.split(",");
          const mime = header.match(/:(.*?);/)[1];
          const binary = atob(data);
          const array = [];
          for (let i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
          }
          const blob = new Blob([new Uint8Array(array)], { type: mime });
          const file = new File([blob], filename, { type: mime });
          resolve(file);
        });
      };

      if (this.imagePreviewUrl && this.imagePreviewUrl.startsWith("data:")) {
        this.file = await base64ToFile(this.imagePreviewUrl, "logo_img.png");
      }

      formData.append("evidence_bank_from_slip_img", this.file);
      formData.append("id", this.codeqr);
      formData.append("evidence_bank_from_bank", this.bank);
      formData.append("evidence_bank_from_pay_money", this.amount);

      // แปลง datetime ให้เป็นรูปแบบ "dd/MM/yyyy-HHmm"
      const datetime = new Date(this.datetime);
      const formattedDateTime = `${datetime
        .getDate()
        .toString()
        .padStart(2, "0")}/${(datetime.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${datetime.getFullYear()}-${datetime
        .getHours()
        .toString()
        .padStart(2, "0")}${datetime.getMinutes().toString().padStart(2, "0")}`;

      formData.append("evidence_bank_from_pay_at", formattedDateTime);

      // Log formData entries
      for (const [key, value] of formData.entries()) {
        console.log(
          `${key}: ${value} (Type: ${typeof value}, Instance: ${
            value instanceof File ? "File" : "Other"
          })`
        );
      }

      try {
        const result = await this.$swal.fire({
          title: "ยืนยันการชำระเงิน",
          text: "ฉันได้ตรวจสอบข้อมูลการชำระเงินเรียบร้อยแล้ว?",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
        });

        if (result.isConfirmed) {
          const response = await this.$axios.$post(
            "/payment/product/request/create",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log("API response:", response);
          this.$router.push({
            path: "/ShopDetail",
            query: { data: JSON.stringify(response) }, // แก้ไขตรงนี้
          });
        }
      } catch (error) {
        this.$handleError(error);
      } finally {
        this.isLoading = false; // ซ่อน loader
      }
    },
    async backqr() {
      // แสดง SweetAlert2 ด้วยข้อความสำเร็จ
      const result = await this.$swal.fire({
        title: "ย้อนกลับไปหน้าชำระเงิน",
        text: "ฉันได้ตรวจสอบว่ายังไม่รับชำระเงิน", // Use `text` instead of `body`
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
      });

      // หากผู้ใช้กดปุ่ม "ยืนยัน"

      if (result.isConfirmed) {
        this.$router.push({
          path: "/ShopQR",
          query: { codeqr: this.codeqr }, // ใช้ค่า qr ที่เก็บใน data
        });
      }
      // หากผู้ใช้กดปุ่ม "ยกเลิก"
      // ไม่ต้องทำอะไรจะยังคงอยู่หน้าเดิม
    },
  },
};
</script>

<style scoped>
/* เพิ่มสไตล์ตามต้องการ */
.btn-upload {
  display: inline-flex;
  align-items: center;
  background-color: #007bff; /* ปรับสีพื้นหลังตามที่ต้องการ */
  border: none;
  border-radius: 4px;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
}

.image-preview {
  margin-top: 10px;
  width: 100%;
  text-align: center;
  border: 1px solid var(--color-black-white-700, #bababa);
}

.image-preview img {
  max-width: 100%;
  height: auto;
  padding: 20px;
}

.btn-upload svg {
  margin-right: 8px; /* เพิ่มช่องว่างระหว่างไอคอนกับข้อความ */
}

.btn-upload input[type="file"] {
  display: none; /* ซ่อน input file */
}
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

.back-submit {
  background-color: #6e7881;
  color: #fff;
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
