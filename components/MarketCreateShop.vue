<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs maketcreateshop">
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
            <span
              v-if="errors.imagePreviewUrl"
              :class="{
                valid: imagePreviewStatus === 'valid',
                invalid: imagePreviewStatus === 'invalid',
              }"
              class="error-message"
              >{{ errors.imagePreviewUrl }}</span
            >
          </div>
          <div class="height-req">
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
          </div>
          <div style="margin-top: 10px">
            <div class="form-group">
              <label for="paymentMethod">
                ช่องทางรับเงิน <span id="dotstyle">*</span>
              </label>
              <select
                v-model="paymentMethod"
                class="form-control"
                id="paymentMethod"
              >
                <!-- <option value="bank">บัญชีธนาคาร</option> -->
                <option value="PROMPTPAY">พร้อมเพย์/QR Code</option>
                <!-- <option value="qrPROMPTPAY">QR Code</option> -->
              </select>
            </div>
            <!-- ธนาคาร -->
            <!-- <div v-if="paymentMethod === 'bank'" class="bank-details">
              <div class="form-row">
                <div class="col">
                  <label for="accountName">ชื่อบัญชี</label>
                  <input
                    type="text"
                    v-model="bankDetails.accountName"
                    class="form-control"
                    id="accountName"
                    placeholder="กรอกชื่อบัญชี"
                  />
                </div>
                <div class="col">
                  <label for="accountNumber">เลขบัญชี</label>
                  <input
                    type="text"
                    v-model="bankDetails.accountNumber"
                    class="form-control"
                    id="accountNumber"
                    placeholder="กรอกเลขบัญชี"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="bank">ธนาคาร</label>
                <select
                  v-model="bankDetails.bank"
                  class="form-control"
                  id="bank"
                >
                  <option value="">เลือกธนาคาร</option>
                  <option value="bbl">กรุงเทพ</option>
                  <option value="scb">ไทยพาณิชย์</option>
                  <option value="ktb">กรุงไทย</option>
                  <option value="BAY">กรุงศรี</option>
                  <option value="kbank">กสิกรไทย</option>
                  <option value="GSB">ออมสิน</option>

                </select>
              </div>
            </div> -->

            <div v-if="paymentMethod === 'PROMPTPAY'" class="PROMPTPAY">
              <div class="form-group">
                <label for="PROMPTPAYNumber"
                  >หมายเลขพร้อมเพย์ <span id="dotstyle">*</span></label
                >
                <input
                  type="text"
                  v-model="PROMPTPAYNumber"
                  class="form-control"
                  id="PROMPTPAYNumber"
                  placeholder="กรอกหมายเลขพร้อมเพย์ เบอร์โทรศัพท์หรือเลขหน้าบัตรประชาชน"
                />
              </div>
            </div>

            <!-- <div v-if="paymentMethod === 'qrPROMPTPAY'" class="qr-PROMPTPAY">
              <div class="form-group">
                <label for="qrPROMPTPAYNumber">หมายเลข QR พร้อมเพย์</label>
                <input
                  type="text"
                  v-model="qrPROMPTPAYNumber"
                  class="form-control"
                  id="qrPROMPTPAYNumber"
                  placeholder="กรอกหมายเลข QR พร้อมเพย์"
                />
              </div>
            </div> -->
            <span v-if="errors.consentcash" class="error-message">{{
              errors.consentcash
            }}</span>
          </div>
          <div style="margin-top: 10px">
            <div>ช่องทางการติดต่อร้านค้า</div>
            <div class="comment-font">
              (ข้อมูลนี้จะถูกแสดงให้กับผู้ซื้อในรายการสินค้า)
            </div>
          </div>
          <div></div>
          <div class="dis-input height-req">
            <div style="width: 49%">
              <label for="phone"
                >หมายเลขโทรศัพท์ <span id="dotstyle">*</span></label
              >
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
          </div>
          <div class="dis-input height-req">
            <div style="width: 100%">
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

          <div for="otherContact">
            คำอธิบายร้านค้า <span id="dotstyle">*</span>
          </div>
          <div class="dis-input">
            <div class="box-other">
              <div style="display: flex; margin: 20px">
                <label for="otherContact" class="box-other-content"
                  >หัวข้อ <span id="dotstyle">*</span></label
                >
                <div style="width: 100%">
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

              <div style="display: flex; margin: 20px">
                <label for="otherContact" class="box-other-content"
                  >ข้อความ <span id="dotstyle">*</span></label
                >
                <div style="width: 100%">
                  <quill-editor-component
                    style="height: max-content; width: 100%"
                    v-model="editorContent"
                  ></quill-editor-component>
                  <span v-if="errors.editorContent" class="error-message">{{
                    errors.editorContent
                  }}</span>
                </div>
              </div>
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
                  และกรอกชื่อ-นามสกุลด้วยภาษาไทยเท่านั้น
                  หมายเลขบัตรประชาชนนี้จะไม่สามารถนำไปใช้กับบัญชีผู้ใช้อื่นได้อีก
                  และจะไม่สามารถเปลี่ยนแปลงหมายเลขบัตรได้
                </div>
              </div>
              <div class="dis-input height-req">
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

              <div class="dis-input height-req">
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
                <div class="dis-left">
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
                    <span
                      v-if="errors.imageUrl"
                      :class="{
                        valid: imageStatus === 'valid',
                        invalid: imageStatus === 'invalid',
                      }"
                      class="error-message"
                      >{{ errors.imageUrl }}</span
                    >
                  </div>
                </div>
                <div class="dis-left">
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
                    <span
                      v-if="errors.imageUrl2"
                      :class="imageStatus2"
                      class="error-message"
                      >{{ errors.imageUrl2 }}</span
                    >
                  </div>
                </div>
              </div>

              <div style="margin-top: 20px">
                <label class="container">
                  <input type="checkbox" v-model="consent" />
                  <div class="checkmark"></div>
                  <label for="consent" class="checkbox-label">
                    ฉันยินยอมให้เว็บไซต์ส่งข้อมูลเกี่ยวกับผลิตภัณฑ์และบริการ
                    ผ่านช่องทางการติดต่อของฉันตามข้อกำหนดและเงื่อนไข
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
import QuillEditorComponent from "~/components/QuillEditorComponent.vue";

export default {
  components: {
    QuillEditorComponent,
  },
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
      imageStatus: "",
      imageStatus2: "",
      imagePreviewStatus: "",
      editorContent: "",
      paymentMethod: "PROMPTPAY", // ค่าเริ่มต้นเป็นพร้อมเพย์
      bankDetails: {
        accountName: "",
        accountNumber: "",
        bank: "",
      },
      qrPROMPTPAYNumber: "",
      qrPROMPTPAYQR: null,
      PROMPTPAYNumber: null,
    };
  },
  watch: {
    idCardBack(newVal) {
      // ฟอร์แมตหมายเลขให้มีขีด
      this.idCardBack = newVal.replace(
        /(\w{2})(\d{4})(\d{4})(\d{2})/,
        "$1-$2-$3-$4"
      );
    },
  },
  methods: {
    triggerFileInput(refName) {
      this.$refs[refName].click();
    },
    previewImage(side) {
      const fileInput =
        side === "front" ? this.$refs.fileInputFront : this.$refs.fileInputBack;
      const file = fileInput.files[0];
      const maxFileSizeMB = 8; // 8MB

      if (file) {
        if (this.$validate.file(file, maxFileSizeMB)) {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (side === "front") {
              this.imageUrl = e.target.result;
              this.showImage = true;
              this.imageStatus = "valid"; // สถานะรูปภาพ
            } else {
              this.imageUrl2 = e.target.result;
              this.showImage2 = true;
              this.imageStatus2 = "valid"; // สถานะรูปภาพ
            }
            this.errors[side === "front" ? "imageUrl" : "imageUrl2"] =
              "รูปภาพนี้ใช้งานได้";
          };
          reader.readAsDataURL(file);
        } else {
          this.errors[side === "front" ? "imageUrl" : "imageUrl2"] =
            "ขนาดไฟล์ไม่เกิน 8MB";
          if (side === "front") {
            this.showImage = false;
            this.imageStatus = "invalid"; // สถานะรูปภาพ
          } else {
            this.showImage2 = false;
            this.imageStatus2 = "invalid"; // สถานะรูปภาพ
          }
        }
      }
    },
    openImageSelector() {
      this.$refs.imageFileInput.click();
    },
    showSelectedImage() {
      const file = this.$refs.imageFileInput.files[0];
      const maxFileSizeMB = 8; // 8MB

      if (file) {
        if (this.$validate.file(file, maxFileSizeMB)) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imagePreviewUrl = e.target.result;
            this.isImageVisible = true;
            this.errors.imagePreviewUrl = "รูปภาพนี้ใช้งานได้";
            this.imagePreviewStatus = "valid"; // สถานะรูปภาพ
          };
          reader.readAsDataURL(file);
        } else {
          this.errors.imagePreviewUrl = "ขนาดไฟล์ไม่เกิน 8MB";
          this.isImageVisible = false;
          this.imagePreviewStatus = "invalid"; // สถานะรูปภาพ
        }
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
        this.errors.otherContact = "ข้อมูลหัวข้อไม่ถูกต้อง";
      }
      if (!this.editorContent) {
        this.errors.editorContent = "ข้อมูลข้อความไม่ถูกต้อง";
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
      // if (this.paymentMethod === "bank") {
      //   if (
      //     !this.bankDetails.accountName ||
      //     !this.bankDetails.accountNumber ||
      //     !this.bankDetails.bank
      //   ) {
      //     this.errors.consentcash =
      //       "กรุณายินยอมข้อกำหนดและกรอกข้อมูลช่องทางรับเงิน สำหรับช่องทางรับเงินแบบบัญชีธนาคาร";
      //     return;
      //   }
      // }else
      if (this.paymentMethod === "PROMPTPAY") {
        if (!this.$validate.PROMPTPAYNumber(this.PROMPTPAYNumber)) {
          this.errors.consentcash =
            "กรุณากรอกหมายเลขพร้อมเพย์ เบอร์โทรศัพท์หรือเลขหน้าบัตรประชาชนเท่านั้น";
          return;
        }
      }
      // else if (this.paymentMethod === "qrPROMPTPAY") {
      //   if (!this.qrPROMPTPAYNumber) {
      //     this.errors.consentcash =
      //       "กรุณายินยอมข้อกำหนดและกรอกหมายเลข QR พร้อมเพย์";
      //     return;
      //   }
      // }

      return Object.keys(this.errors).length === 0;
    },

    async handleSubmit() {
      if (!this.validateForm()) {
        return;
      }

      this.isLoading = true; // เริ่มโหลด
      const formData = new FormData();

      // เพิ่มข้อมูลลงใน FormData
      formData.append("logo_img", this.imagePreviewUrl); // ตรวจสอบว่าหากเป็น URL ต้องแปลงเป็นไฟล์
      formData.append("name", this.name);
      formData.append("phone", this.phone);
      formData.append("email", this.email);
      formData.append("address", this.address);
      formData.append("title_description", this.otherContact);
      formData.append("description", this.editorContent);
      formData.append("first_name", this.firstName);
      formData.append("last_name", this.lastName);
      formData.append("id_card_number_front", this.idCard);
      formData.append("id_card_number_back", this.idCardBack.replace(/-/g, ""));
      formData.append("id_card_number_front_img", this.imageUrl); // ตรวจสอบว่ามีการแปลงเป็นไฟล์หากจำเป็น
      formData.append("id_card_number_back_img", this.imageUrl2); // ตรวจสอบว่ามีการแปลงเป็นไฟล์หากจำเป็น
      formData.append("pay_method_id", 1);
      formData.append("pay_slug", this.paymentMethod);

      if (this.paymentMethod === "PROMPTPAY") {
        formData.append("pay_ref_1", this.PROMPTPAYNumber);
      }

      function logFormData(formData) {
        for (let pair of formData.entries()) {
          console.log(`${pair[0]}: ${pair[1]}`);
        }
      }
      logFormData(formData);
      try {
        const token = localStorage.getItem("authToken");
        console.log(token); // log แสดง token
        // const response = await this.$axios.post(
        //   "/vendor/register/create",
        //   formData,
        //   {
        //     headers: {
        //       // "Content-Type": "multipart/form-data", // axios จะตั้งค่าให้เองเมื่อใช้ FormData
        //       Authorization: `Bearer ${token}`, // ใช้ token ที่ดึงมาจาก localStorage
        //     },
        //   }
        // );
        // alert("สร้างสินค้าได้สำเร็จ");
        // this.$router.push("/"); // รีไดเรคไปยังหน้า login หลังจาก 1 วินาที
      } catch (error) {
        console.error("There was an error submitting the form", error);
        this.$handleError(error);
        alert("เกิดข้อผิดพลาดในการส่งข้อมูล");
      } finally {
        this.isLoading = false; // ซ่อน loader ทั้งในกรณีสำเร็จและข้อผิดพลาด
      }
    },
  },
};
</script>

<style scoped>
</style>



    //  // if (this.paymentMethod === "bank") {
    //   //   formData.bankDetails = {
    //   //     accountName: this.bankDetails.accountName,
    //   //     accountNumber: this.bankDetails.accountNumber,
    //   //     bank: this.bankDetails.bank,
    //   //   };
    //   // } else
    //   if (this.paymentMethod === "PROMPTPAY") {
    //     formData.pay_ref_1 = this.PROMPTPAYNumber;
    //   }
    //   //  else if (this.paymentMethod === "qrPROMPTPAY") {
    //   //   formData.qrPROMPTPAYNumber = this.qrPROMPTPAYNumber;
    //   // }


