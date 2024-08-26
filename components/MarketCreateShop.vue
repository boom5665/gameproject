<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs maketcreateshop">
      <div class="form-create">
        <div class="font-top">สร้างร้านค้า</div>
        <form>
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
                  src="~/assets/image/store.png"
                />
              </div>
              ชื่อร้านค้า
            </div>
            <div>
              <input
                type="text"
                id="name"
                v-model="name"
                ref="name"
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
                  ref="PROMPTPAYNumber"
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
                ref="phone"
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
                ref="email"
              />
              <span v-if="errors.email" class="error-message">{{
                errors.email
              }}</span>
            </div>
          </div>
          <div class="dis-input height-req">
            <div class="width-hunded">
              <label for="address"
                >ที่อยู่ร้านค้า <span id="dotstyle">*</span></label
              >
              <input
                type="text"
                id="address"
                v-model="address"
                :class="{ 'input-error': errors.address }"
                ref="address"
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
                <div class="width-hunded">
                  <input
                    type="text"
                    id="otherContact"
                    v-model="otherContact"
                    :class="{ 'input-error': errors.otherContact }"
                    ref="otherContact"
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
                <div class="width-hunded">
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
                    src="~/assets/image/User.png"
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
                    ref="firstName"
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
                    ref="lastName"
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
                    type="Number"
                    id="idCard"
                    maxlength="13"
                    v-model="idCard"
                    :class="{ 'input-error': errors.idCard }"
                    ref="idCard"
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
                    ref="idCard"
                  />
                  <span v-if="errors.idCardBack" class="error-message">{{
                    errors.idCardBack
                  }}</span>
                </div>
              </div>
              <div class="dis-input">
                <div class="dis-left">
                  <div class="width-hunded">
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
                  <div class="width-hunded">
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

              <div style="margin-top: 20px; width: max-content">
                <label class="container">
                  <input type="checkbox" v-model="consent" />
                  <div class="checkmark"></div>
                  <div for="consent" class="checkbox-label">
                    ฉันยินยอมให้เว็บไซต์ส่งข้อมูลเกี่ยวกับผลิตภัณฑ์และบริการ
                    ผ่านช่องทางการติดต่อของฉันตามข้อกำหนดและเงื่อนไข
                  </div>
                </label>
                <span v-if="errors.consent" class="error-message">{{
                  errors.consent
                }}</span>
              </div>
            </div>
          </div>
          <button type="submit" class="submit" @click.prevent="handleSubmit">
            <div>
              <img
                class=""
                style="margin: 0px 5px; width: 20px"
                src="~/assets/image/Save.png"
              />
            </div>
            <div>Submit</div>
          </button>
        </form>

        <Loader :isLoading="isLoading" />
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
      firstErrorField: null,
    };
  },
  watch: {
    idCardBack(newVal) {
      // ลบช่องว่างด้านหน้าและด้านหลัง และฟอร์แมตหมายเลขให้มีขีด
      newVal = newVal.trim();
      this.idCardBack = newVal.replace(
        /(\w{2})(\d{4})(\d{4})(\d{2})/,
        "$1-$2-$3-$4"
      );
    },
    idCard(newVal) {
      // ลบช่องว่างด้านหน้าและด้านหลัง
      newVal = newVal.trim();

      // ตรวจสอบไม่ให้ใส่เกิน 13 หลัก
      if (newVal.length > 14) {
        // ถ้าเกิน 13 หลัก หยุดการทำงานเพื่อไม่ให้เปลี่ยนค่า
        return;
      }

      // ฟอร์แมตหมายเลขบัตรประชาชนให้มีขีดเมื่อความยาวครบ 13 หลัก
      if (newVal.length === 14) {
        this.idCard = newVal.replace(
          /(\d{1})(\d{4})(\d{5})(\d{2})/,
          "$1-$2-$3-$4"
        );
      } else {
        this.idCard = newVal;
      }
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
            "ขนาดไฟล์ไม่เกิน 8MB ใส่ได้เฉพาะรูปเท่านั้น";
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
      const maxFileSizeMB = 8; // ขนาดสูงสุดของไฟล์ใน MB
      const maxFileSizeBytes = maxFileSizeMB * 1024 * 1024; // แปลงเป็น bytes
      const imageTypes = ["image/jpeg", "image/png"]; // ประเภทของไฟล์ที่อนุญาต
      let firstErrorField = null;

      if (!this.$validate.name(this.name)) {
        this.errors.name =
          "ชื่อร้านค้า ชื้อห้ามซ้ำกับร้านค้าอื่นๆและห้ามน้อยกว่า 8 หลักและไม่มากว่า 100  ";
        if (!firstErrorField) firstErrorField = "name";
      }
      if (!this.$validate.password(this.password)) {
        this.errors.password =
          "รหัสผ่านต้องเป็นตัวอักษรและตัวเลข 8-30 ตัวอักษร";
        if (!firstErrorField) firstErrorField = "password";
      }
      if (!this.$validate.phone(this.phone)) {
        this.errors.phone = "หมายเลขโทรศัพท์ไม่ถูกต้อง";
        if (!firstErrorField) firstErrorField = "phone";
      }
      if (!this.$validate.email(this.email)) {
        this.errors.email = "ที่อยู่อีเมลไม่ถูกต้อง";
        if (!firstErrorField) firstErrorField = "email";
      }
      if (!this.$validate.firstName(this.firstName)) {
        this.errors.firstName =
          "ชื่อไม่ถูกต้องเฉพาะตัวอักษรไทยหรืออังกฤษเท่านั้น";
        if (!firstErrorField) firstErrorField = "firstName";
      }
      if (!this.$validate.lastName(this.lastName)) {
        this.errors.lastName = "นามสกุลไม่ถูกต้อง";
        if (!firstErrorField) firstErrorField = "lastName";
      }
      if (!this.$validate.otherContact(this.otherContact)) {
        this.errors.otherContact = "ข้อมูลหัวข้อไม่ถูกต้อง";
        if (!firstErrorField) firstErrorField = "otherContact";
      }
      if (!this.editorContent) {
        this.errors.editorContent = "ข้อมูลข้อความไม่ถูกต้อง";
        if (!firstErrorField) firstErrorField = "editorContent";
      }
      if (!this.$validate.idCard(this.idCard)) {
        this.errors.idCard = "หมายเลขบัตรประชาชนไม่ถูกต้อง";
        if (!firstErrorField) firstErrorField = "idCard";
      }
      if (!this.address) {
        this.errors.address = "ที่อยู่ร้านค้าไม่ถูกต้อง";
        if (!firstErrorField) firstErrorField = "address";
      }

      if (!this.$validate.idCardBack(this.idCardBack)) {
        this.errors.idCardBack = "หมายเลขหลังบัตรประชาชนไม่ถูกต้อง";
        if (!firstErrorField) firstErrorField = "idCardBack";
      }
      if (!this.consent) {
        this.errors.consent = "กรุณายินยอมข้อกำหนดและเงื่อนไข";
        if (!firstErrorField) firstErrorField = "consent";
      }

      if (this.paymentMethod === "PROMPTPAY") {
        if (!this.$validate.PROMPTPAYNumber(this.PROMPTPAYNumber)) {
          this.errors.consentcash =
            "กรุณากรอกหมายเลขพร้อมเพย์ เบอร์โทรศัพท์หรือเลขหน้าบัตรประชาชนเท่านั้น";
          if (!firstErrorField) firstErrorField = "PROMPTPAYNumber";
        }
      }
      if (!this.imagePreviewUrl) {
        this.errors.imagePreviewUrl = "กรุณาอัปโหลดภาพโปรไฟล์";
        if (!firstErrorField) firstErrorField = "imageFileInput";
      } else {
        const file = this.imagePreviewUrl;
        if (!imageTypes.includes(file.type)) {
          this.errors.imagePreviewUrl =
            "กรุณาอัปโหลดไฟล์ภาพที่ถูกต้อง (JPG หรือ PNG)";
          if (!firstErrorField) firstErrorField = "imageFileInput";
        } else if (file.size > maxFileSizeBytes) {
          this.errors.imagePreviewUrl = `ขนาดไฟล์ต้องไม่เกิน ${maxFileSizeMB} MB`;
          if (!firstErrorField) firstErrorField = "imageFileInput";
        }
      }

      // ตรวจสอบภาพหน้าบัตรประชาชน
      if (!this.imageUrl) {
        this.errors.imageUrl = "กรุณาอัปโหลดภาพหน้าบัตรประชาชน";
        if (!firstErrorField) firstErrorField = "imageUrl";
      } else {
        const file = this.imageUrl;
        if (!imageTypes.includes(file.type)) {
          this.errors.imageUrl = "กรุณาอัปโหลดไฟล์ภาพที่ถูกต้อง (JPG หรือ PNG)";
          if (!firstErrorField) firstErrorField = "imageUrl";
        } else if (file.size > maxFileSizeBytes) {
          this.errors.imageUrl = `ขนาดไฟล์ต้องไม่เกิน ${maxFileSizeMB} MB`;
          if (!firstErrorField) firstErrorField = "imageUrl";
        }
      }

      // ตรวจสอบภาพหลังบัตรประชาชน
      if (!this.imageUrl2) {
        this.errors.imageUrl2 = "กรุณาอัปโหลดภาพหลังบัตรประชาชน";
        if (!firstErrorField) firstErrorField = "imageUrl2";
      } else {
        const file = this.imageUrl2;
        if (!imageTypes.includes(file.type)) {
          this.errors.imageUrl2 =
            "กรุณาอัปโหลดไฟล์ภาพที่ถูกต้อง (JPG หรือ PNG)";
          if (!firstErrorField) firstErrorField = "imageUrl2";
        } else if (file.size > maxFileSizeBytes) {
          this.errors.imageUrl2 = `ขนาดไฟล์ต้องไม่เกิน ${maxFileSizeMB} MB`;
          if (!firstErrorField) firstErrorField = "imageUrl2";
        }
      }

      // ถ้ามีข้อผิดพลาด ให้นำฟิลด์แรกที่พบข้อผิดพลาดไปที่หน้าจอ
      if (firstErrorField) {
        this.$nextTick(() => {
          const element = this.$refs[firstErrorField];
          if (element) {
            element.focus();
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        });
      }

      // console.log(this.$refs[firstErrorField]);
      return Object.keys(this.errors).length === 0;
    },

    async handleSubmit() {
      if (!this.validateForm()) {
        this.name = (this.name || "").trim();
        this.phone = (this.phone || "").trim();
        this.email = (this.email || "").trim();
        this.address = (this.address || "").trim();
        this.otherContact = (this.otherContact || "").trim();
        this.editorContent = (this.editorContent || "").trim();
        this.firstName = (this.firstName || "").trim();
        this.lastName = (this.lastName || "").trim();
        this.idCard = (this.idCard || "").trim();
        this.idCardBack = (this.idCardBack || "").replace(/-/g, "").trim();
        return;
      }

      this.isLoading = true; // เริ่มโหลด
      const formData = new FormData();

      // ฟังก์ชันสำหรับแปลง Base64 เป็น File
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

      // แปลง Base64 เป็น File หากจำเป็น
      if (this.imagePreviewUrl.startsWith("data:")) {
        const logoImgFile = await base64ToFile(
          this.imagePreviewUrl,
          "logo_img.png"
        );
        formData.append("logo_img", logoImgFile);
      } else {
        formData.append("logo_img", this.imagePreviewUrl);
      }

      // เพิ่มข้อมูลลงใน FormData
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

      if (this.imageUrl.startsWith("data:")) {
        const idCardFrontImgFile = await base64ToFile(
          this.imageUrl,
          "id_card_number_front_img.png"
        );
        formData.append("id_card_number_front_img", idCardFrontImgFile);
      } else {
        formData.append("id_card_number_front_img", this.imageUrl);
      }

      if (this.imageUrl2.startsWith("data:")) {
        const idCardBackImgFile = await base64ToFile(
          this.imageUrl2,
          "id_card_number_back_img.png"
        );
        formData.append("id_card_number_back_img", idCardBackImgFile);
      } else {
        formData.append("id_card_number_back_img", this.imageUrl2);
      }

      formData.append("pay_method_id", 1);
      formData.append("pay_slug", this.paymentMethod);

      if (this.paymentMethod === "PROMPTPAY") {
        formData.append("pay_ref_1", this.PROMPTPAYNumber);
      }

      // ฟังก์ชันสำหรับ log ข้อมูลใน FormData
      function logFormData(formData) {
        for (let pair of formData.entries()) {
          console.log(`${pair[0]}: ${pair[1]}`);
        }
      }
      logFormData(formData);

      try {
        const token = this.$cookies.get("authToken");
        console.log("Token:", token);

        // ส่งคำขอสร้างร้านค้า
        await this.$axios.post("/vendor/register/create", formData, {
          headers: {
            // axios จะตั้งค่า "Content-Type" เป็น "multipart/form-data" ให้เอง
            Authorization: `Bearer ${token}`, // ใช้ token ที่ดึงมาจาก
          },
        });

        // แสดง alert หลังจากสร้างร้านค้าเสร็จ

        // ดึงข้อมูลโปรไฟล์หลังจากแสดง alert
        const profileResponse = await this.$axios.$post(
          "/vendor/profile/me/read",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (profileResponse) {
          // แสดง SweetAlert2
          const result = await this.$swal.fire({
            title: "สร้างร้านค้าสำเร็จ",
            icon: "success",
            confirmButtonText: "ยืนยัน",
            showCancelButton: false, // ซ่อนปุ่ม "ยกเลิก"
          });

          // ตรวจสอบผลลัพธ์ของ SweetAlert2
          if (result.isConfirmed) {
            const hasRefreshed = localStorage.getItem(
              "hasRefreshedMarketMyshop"
            );
            this.$router.push("/");
            if (hasRefreshed) {
              // ตั้งค่าสถานะว่าได้รีเฟรชหน้าแล้ว
              localStorage.setItem("hasRefreshedMarketMyshop", "true");

              // หน่วงเวลาเล็กน้อยก่อนรีเฟรชหน้าเว็บ
              setTimeout(() => {
                window.location.reload();
              }, 500); // หน่วงเวลา 1.5 วินาที
            }
            // คุณอาจจะต้องการรีไดเรคหรือทำบางอย่างเพิ่มเติมที่นี่
          }
        } else {
          // แสดงข้อความเตือนเมื่อไม่มีข้อมูล
          alert("ไม่พบข้อมูล การลงทะเบียนสำเร็จ");
        }
      } catch (error) {
        console.error("There was an error submitting the form", error);
        this.$handleError(error);
      } finally {
        this.isLoading = false; // ซ่อน loader ทั้งในกรณีสำเร็จและข้อผิดพลาด
      }
    },
  },
};
</script>

<style scoped>
.preview {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile-img {
  width: 25%;
  margin: 0px 0px 0px;
  height: 70px;
}
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
