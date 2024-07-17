<template>
  <div class="M-Create-Backgroud Profile custom-regis">
    <div class="custom-login">
      <div class="navtabs forget">
        <div class="font-top-myshop">
          <Nuxt-link class="text-profile" to="/Login" target="_self">
            <span class="font-top-myshop">Login &nbsp; / &nbsp;</span>
          </Nuxt-link>
          <Nuxt-link class="text-profile" to="/LogForget" target="_self">
            <span class="font-proL-top">Confirm Password</span>
          </Nuxt-link>
        </div>
        <div class="form-create">
          <div>
            <img src="~/assets/image/forget.png" class="img-recom" />
          </div>

          <div class="dis-input-box">
            <div class="dis-input">
              <div class="w-input">
                <div class="password-container">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    id="Password"
                    v-model="Password"
                    placeholder="กรอกรหัสผ่าน"
                  />
                  <div
                    @click="togglePasswordVisibility"
                    type="button"
                    class="toggle-password-btn"
                  >
                    <img
                      :src="
                        showPassword
                          ? require('~/assets/image/eye.png')
                          : require('~/assets/image/eyeclose.png')
                      "
                      alt="Toggle Password Visibility"
                    />
                  </div>
                </div>
                <span v-if="errors.Password" class="error">{{
                  errors.Password
                }}</span>
              </div>
              <div class="w-input">
                <input
                  type="password"
                  id="Passwordconfirm"
                  v-model="Passwordconfirm"
                  placeholder="ยืนยันรหัสผ่าน"
                />
                <span v-if="errors.Passwordconfirm" class="error">
                  {{ errors.Passwordconfirm }}
                </span>
              </div>
            </div>

            <button
              type="submit"
              class="submit button-pro-edit"
              @click.prevent="submitData"
            >
              ส่ง
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      logo: "",
      name: "",
      phone: "",
      otherContact: "",
      firstName: "", // แก้ชื่อจาก firstName เป็น firstName
      lastName: "",
      idCard: "",
      idCardBack: "",
      imageUrl: "",
      imageUrl2: "",
      email: "",
      address: "",
      consent: false,
      showImage: false,
      showImage2: false,
      errors: {},
      isLoading: false,
      imagePreviewUrl: "",
      isImageVisible: false,
    };
  },
  methods: {
    triggerFileInput(refName) {
      this.$refs[refName].click();
    },
    previewImage(side) {
      const fileInput = side === "front" ? this.$refs.fileInputFront : this.$refs.fileInputBack;
      const file = fileInput.files[0];
      const maxFileSizeMB = 8; // 8MB

      if (file && this.$validate.file(file, maxFileSizeMB)) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (side === "front") {
            this.imageUrl = e.target.result;
            this.showImage = true;
          } else {
            this.imageUrl2 = e.target.result;
            this.showImage2 = true;
          }
        };
        reader.readAsDataURL(file);
      } else {
        this.errors[side === "front" ? "imageUrl" : "imageUrl2"] = "ขนาดไฟล์ไม่เกิน 8MB";
        if (side === "front") {
          this.showImage = false;
        } else {
          this.showImage2 = false;
        }
      }
    },
    openImageSelector() {
      this.$refs.imageFileInput.click();
    },
    showSelectedImage() {
      const file = this.$refs.imageFileInput.files[0];
      const maxFileSizeMB = 8; // 8MB

      if (file && this.$validate.file(file, maxFileSizeMB)) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreviewUrl = e.target.result;
          this.isImageVisible = true;
        };
        reader.readAsDataURL(file);
      } else {
        this.errors.imagePreviewUrl = "ขนาดไฟล์ไม่เกิน 8MB";
        this.isImageVisible = false;
      }
    },
    validateForm() {
      this.errors = {};

      if (!this.imagePreviewUrl) {
        this.errors.imagePreviewUrl = "กรุณาอัปโหลดภาพโปรไฟล์";
      }
      if (!this.$validate.username(this.name)) {
        this.errors.name = "ชื่อผู้ใช้ต้องเป็นตัวอักษรและตัวเลข 8-30 ตัวอักษร";
      }
      if (!this.$validate.password(this.password)) {
        this.errors.password = "รหัสผ่านต้องเป็นตัวอักษรและตัวเลข 8-30 ตัวอักษร";
      }
      if (!this.$validate.phone(this.phone)) {
        this.errors.phone = "หมายเลขโทรศัพท์ไม่ถูกต้อง";
      }
      if (!this.$validate.email(this.email)) {
        this.errors.email = "ที่อยู่อีเมลไม่ถูกต้อง";
      }
      if (!this.$validate.firstName(this.firstName)) {
        this.errors.firstName = "ชื่อไม่ถูกต้อง";
      }
      if (!this.$validate.lastName(this.lastName)) {
        this.errors.lastName = "นามสกุลไม่ถูกต้อง";
      }
      if (!this.$validate.otherContact(this.otherContact)) {
        this.errors.otherContact = "ข้อมูลติดต่ออื่นไม่ถูกต้อง";
      }
      if (!this.$validate.idCard(this.idCard)) {
        this.errors.idCard = "หมายเลขบัตรประชาชนไม่ถูกต้อง";
      }
      if (!this.address) {
        this.errors.address = "ที่อยู่ร้านค้าไม่ถูกต้อง";
      }
      if (!this.$validate.idCardBack(this.idCardBack)) {
        this.errors.idCardBack = "หมายเลขหลังบัตรประชาชนไม่ถูกต้อง";
      }
      if (!this.imageUrl) {
        this.errors.imageUrl = "กรุณาอัปโหลดภาพหน้าบัตรประชาชน";
      }
      if (!this.imageUrl2) {
        this.errors.imageUrl2 = "กรุณาอัปโหลดภาพหลังบัตรประชาชน";
      }
      if (!this.consent) {
        this.errors.consent = "กรุณายินยอมข้อกำหนดและเงื่อนไข";
      }

      return Object.keys(this.errors).length === 0;
    },
    async handleSubmit() {
      this.isLoading = true; // เริ่มโหลด
      if (!this.validateForm()) {

        return;
      }
      const formData = {
        imagePreviewUrl: this.imagePreviewUrl,
        name: this.name,
        phone: this.phone,
        otherContact: this.otherContact,
        firstName: this.firstName,
        lastName: this.lastName,
        idCard: this.idCard,
        idCardBack: this.idCardBack,
        imageUrl: this.imageUrl,
        imageUrl2: this.imageUrl2,
        consent: this.consent,
      };

      try {
        const response = await this.$axios.post("/vendor/register/create", formData);
        localStorage.setItem("vendor_id", response.data.vendor_id);
        console.log("เก็บ vendor_id:", response.data.vendor_id); // log แสดง vendor_id
        alert("สร้างสินค้าได้สำเร็จ");
      } catch (error) {
        console.error("There was an error submitting the form", error);
        alert("เกิดข้อผิดพลาดในการส่งข้อมูล");
      } finally {
        this.isLoading = false; // ซ่อน loader ทั้งในกรณีสำเร็จและข้อผิดพลาด
      }
    },
  },
};


</script>

<style lang="scss" scoped>
.w-input {
  width: 100%;
  height: 65px;
}

</style>

