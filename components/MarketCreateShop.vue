<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <div class="form-create">
        <div class="font-top">สร้างร้านค้า</div>
        <form @submit.prevent="handleSubmit">
          <div class="pro-img">
            <div>
              <div class="font-form-add"></div>
              <div
                class="preview"
                style="position: relative; width: max-content"
              >
                <img
                  :src="imagePreviewUrl"
                  class="img-edit"
                  v-show="isImageVisible"
                  @click="openImageSelector"
                />
                <img
                  class="edit-icon"
                  src="~/assets/image/icon-Edit.png"
                  v-if="isImageVisible"
                  @click="openImageSelector"
                />
              </div>
              <div
                class=""
                v-show="!isImageVisible"
                @click="openImageSelector"
                style="width: max-content"
              >
                <img class="" src="~/assets/image/Edit.png" />
              </div>
              <input
                type="file"
                id="imageFileInput"
                ref="imageFileInput"
                style="display: none"
                @change="showSelectedImage"
              />
            </div>
          </div>
          <div style="text-align: center">
            <span v-if="errors.imageUrl2" class="error-message">{{
              errors.imageUrl2
            }}</span>
          </div>

          <div class="font-head">
            <div>
              <img
                class=""
                style="margin: 0px 10px; width: 20px"
                src="~/assets/image/User.png"
              />
            </div>
            ร้านค้า
          </div>
          <div>
            <input
              type="text"
              id="name"
              v-model="name"
              :class="{ 'input-error': errors.name }"
            />
            <span v-if="errors.name" class="error-message">{{
              errors.name
            }}</span>
          </div>
          <div>
            <div>ช่องทางการติดต่อร้านค้า</div>
            <div class="comment-font">
              (ข้อมูลนี้จะถูกแสดงให้กับผู้ซื้อในรายการสินค้า)
            </div>
          </div>
          <div></div>
          <div class="dis-input">
            <div style="width: 49%">
              <label for="phone">หมายเลขโทรศัพท์</label>
              <input
                type="text"
                id="phone"
                v-model="phone"
                :class="{ 'input-error': errors.phone }"
              />
              <span v-if="errors.phone" class="error-message">{{
                errors.phone
              }}</span>
            </div>
            <div style="width: 49%">
              <label for="otherContact">คำอธิบายร้านค้า</label>
              <input
                type="text"
                id="otherContact"
                v-model="otherContact"
                :class="{ 'input-error': errors.otherContact }"
              />
              <span v-if="errors.otherContact" class="error-message">{{
                errors.otherContact
              }}</span>
            </div>
          </div>
          <div>
            <div class="box-rule">
              <div>
                <img class="" src="~/assets/image/rule.png" />
              </div>
              <div>
                <div>
                  ทำไมจึงต้องขอเลขหลังบัตรประชาชนเพื่อทำการยืนยันตัวตน,
                  สร้างร้านค้า และ สมัครโปรโมเตอร์?
                </div>
                <div>
                  <div>จุดประสงค์ของการขอข้อมูลเลขหลังบัตรประชาชน</div>
                  <div>
                    1. เพื่อตรวจสอบสถานะบัตรประชาชนของผู้ใช้งานกับกรมการปกครอง
                  </div>
                  <div>
                    2.
                    เพื่อให้แน่ใจว่าผู้ทำรายการมีตัวตนและไม่อยู่ในสถานะที่ไม่เหมาะสม
                    หรือมิได้นำบัตรประชาชนที่ถูกยึดหรือ อายัดมาเปิดใช้งาน
                  </div>
                  <div>
                    3.
                    เพื่อป้องกันการสวมรอยจากบุคคลอื่นที่จะใช้เพื่อรับเงินหรือผลประโยชน์แทนตัวลูกค้าเอง
                    ทั้งนี้การจัดการข้อมูลเป็นไปตามมาตรฐาน, หลักเกณฑ์ และ
                    เงื่อนไขที่กำหนด ทาง BRAND จะไม่มีการเก็บข้อมูล
                    หมายเลขหลังบัตรประชาชนของท่านไว้ในระบบของเราแต่อย่างใดการตรวจสอบข้อมูล
                    เลขหลังบัตรประชาชนของเว็บไซต์ BRAND
                    นั้นอยู่ภายใต้การกำกับดูแลอย่างเคร่งครัด ของกรมการปกครอง
                    กระทรวงมหาดไทย
                  </div>
                  <div>
                    <img class="" src="~/assets/image/line.png" />
                  </div>
                  <div>
                    ได้รับอนุญาตอย่างถูกต้อง หมายเลขหนังสืออนุญาตจากกรมการปกครอง
                    กระทรวงมหาดไทย เลขที่ มท.๐๓๐๙.๙/๓๐๗๕๖
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="font-head">
                <div>
                  <img
                    class=""
                    style="margin: 0px 10px; width: 20px"
                    src="~/assets/image/store.png"
                  />
                </div>
                ข้อมูลผู้ติดต่อ
              </div>
              <div class="box-alert">
                <div>
                  <img
                    class=""
                    style="margin: 10px 20px; width: 20px"
                    src="~/assets/image/alet.png"
                  />
                </div>
                <div>
                  กรุณาใส่ข้อมูลให้ตรงกับบัตรประชาชน
                  และกรอกชื่อ-นามสกุลด้วยภาษาไทยเท่านั้นหมายเลขบัตร
                  ประชาชนนี้จะไม่สามารถนำไปใช้กับไอดีอื่นได้อีก
                  และจะไม่สามารถเปลี่ยนแปลงหมายเลขบัตรได้
                </div>
              </div>
              <div class="dis-input">
                <div style="width: 49%">
                  <label for="firstName"
                    >ชื่อ <span id="dotstyle">*</span></label
                  >
                  <input
                    type="text"
                    id="firstName"
                    v-model="firstName"
                    :class="{ 'input-error': errors.firstName }"
                  />
                  <span v-if="errors.firstName" class="error-message">{{
                    errors.firstName
                  }}</span>
                </div>
                <div style="width: 49%">
                  <label for="lastName"
                    >นามสกุล <span id="dotstyle">*</span></label
                  >
                  <input
                    type="text"
                    id="lastName"
                    v-model="lastName"
                    :class="{ 'input-error': errors.lastName }"
                  />
                  <span v-if="errors.lastName" class="error-message">{{
                    errors.lastName
                  }}</span>
                </div>
              </div>
              <div class="dis-input">
                <div style="width: 49%">
                  <label for="email">อีเมล <span id="dotstyle">*</span></label>
                  <input
                    type="text"
                    id="email"
                    v-model="email"
                    :class="{ 'input-error': errors.email }"
                  />
                  <span v-if="errors.email" class="error-message">{{
                    errors.email
                  }}</span>
                </div>
                <div style="width: 49%">
                  <label for="address"
                    >ที่อยู่ร้านค้า <span id="dotstyle">*</span></label
                  >
                  <input
                    type="text"
                    id="address"
                    v-model="address"
                    :class="{ 'input-error': errors.address }"
                  />
                  <span v-if="errors.address" class="error-message">{{
                    errors.address
                  }}</span>
                </div>
              </div>
              <div class="dis-input">
                <div style="width: 49%">
                  <label for="idCard"
                    >หมายเลขบัตรประชาชน (13 หลัก)
                    <span id="dotstyle">*</span></label
                  >
                  <input
                    type="text"
                    id="idCard"
                    v-model="idCard"
                    :class="{ 'input-error': errors.idCard }"
                  />
                  <span v-if="errors.idCard" class="error-message">{{
                    errors.idCard
                  }}</span>
                </div>
                <div style="width: 49%">
                  <label for="idCardBack"
                    >เลขหลังบัตรประชาชน <span id="dotstyle">*</span></label
                  >
                  <input
                    type="text"
                    id="idCardBack"
                    v-model="idCardBack"
                    :class="{ 'input-error': errors.idCardBack }"
                  />
                  <span v-if="errors.idCardBack" class="error-message">{{
                    errors.idCardBack
                  }}</span>
                </div>
              </div>
              <div class="dis-input">
                <div>
                  <div>
                    <label for="imageUrl"
                      >ภาพหน้าบัตรประชาชน <span id="dotstyle">*</span></label
                    >
                    <div class="preview">
                      <img
                        :src="imageUrl"
                        class="profile-img"
                        v-show="showImage"
                        @click="triggerFileInput('fileInputFront')"
                      />
                    </div>
                    <div
                      class=""
                      v-show="!showImage"
                      style="width: max-content"
                    >
                      <img
                        class=""
                        style=""
                        src="~/assets/image/img-id-card.png"
                        @click="triggerFileInput('fileInputFront')"
                      />
                      <input
                        type="file"
                        id="fileInputFront"
                        ref="fileInputFront"
                        style="display: none"
                        @change="previewImage('front')"
                      />
                    </div>
                    <span v-if="errors.imageUrl" class="error-message">{{
                      errors.imageUrl
                    }}</span>
                  </div>
                </div>
                <div>
                  <div>
                    <label for="imageUrl2"
                      >ภาพหลังบัตรประชาชน <span id="dotstyle">*</span></label
                    >
                    <div class="preview">
                      <img
                        :src="imageUrl2"
                        class="profile-img"
                        v-show="showImage2"
                        @click="triggerFileInput('fileInputBack')"
                      />
                    </div>
                    <div
                      class=""
                      v-show="!showImage2"
                      style="width: max-content"
                    >
                      <img
                        class=""
                        style=""
                        src="~/assets/image/img-id-card.png"
                        @click="triggerFileInput('fileInputBack')"
                      />
                      <input
                        type="file"
                        id="fileInputBack"
                        ref="fileInputBack"
                        style="display: none"
                        @change="previewImage('back')"
                      />
                    </div>
                    <span v-if="errors.imageUrl2" class="error-message">{{
                      errors.imageUrl2
                    }}</span>
                  </div>
                </div>
              </div>

              <div>
                <label class="container">
                  <input type="checkbox" v-model="consent" />
                  <div class="checkmark"></div>
                  <label for="consent" class="checkbox-label">
                    ฉันยินยอมให้เว็บไซต์ส่งข้อมูลเกี่ยวกับผลิตภัณฑ์และบริการ
                    ผ่านช่องทางการติดต่อของฉันตาม
                    <span>ข้อกำหนดและเงื่อนไข</span>
                  </label>
                </label>
                <span v-if="errors.consent" class="error-message">{{
                  errors.consent
                }}</span>
              </div>
            </div>
          </div>
          <div type="submit" class="submit" @click.prevent="handleSubmit">
            <div>
              <img
                class=""
                style="margin: 0px 5px; width: 20px"
                src="~/assets/image/Save.png"
              />
            </div>
            <div>Submit</div>
          </div>
          <Loader :isLoading="isLoading" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
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
      const fileInput =
        side === "front" ? this.$refs.fileInputFront : this.$refs.fileInputBack;
      const file = fileInput.files[0];
      if (file) {
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
      }
    },
    openImageSelector() {
      this.$refs.imageFileInput.click();
    },
    showSelectedImage() {
      const file = this.$refs.imageFileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreviewUrl = e.target.result;
          this.isImageVisible = true;
        };
        reader.readAsDataURL(file);
      }
    },
    validateForm() {
      this.errors = {};
      if (!this.imagePreviewUrl) {
        this.errors.imagePreviewUrl = "กรุณาอัปโหลดภาพโปรไฟล์";
      }
      if (!this.$validate.name(this.name)) {
        this.errors.name = "ชื่อผู้ใช้ต้องเป็นตัวอักษรและตัวเลข 8-30 ตัวอักษร";
      }
      if (!this.$validate.password(this.password)) {
        this.errors.password =
          "รหัสผ่านต้องเป็นตัวอักษรและตัวเลข 8-30 ตัวอักษร";
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
      // if (!this.validateForm()) {
      //   return;
      // }
      this.isLoading = true; // เริ่มโหลด
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
        const response = await this.$axios.post(
          "/vendor/register/create",
          formData
        );
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

<style scoped>
.input-error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 12px;
}
.profile-img {
  width: 100%;
  height: auto;
}
.profile-img-main {
  border-radius: 6px;
  border: 1px dashed #d00;
  background: #31303f;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  margin: 15px 5px;
  height: 150px;
}
.profile-img {
  width: 100%;
  margin: 0px 0px 0px;
}
.dis-input {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
}
.preview {
  width: 100%;
}
.img-edit {
  width: 100px;
  height: 100px;
  margin: 0px 0px;
  cursor: pointer;
}
.edit-icon {
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
img {
  cursor: pointer;
}
.pro-img {
  display: flex;
  justify-content: center;
}
</style>


