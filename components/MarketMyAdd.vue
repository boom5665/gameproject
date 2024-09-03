<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <div class="font-top-myshop">
        <div class="font-top-myshop">
          <Nuxt-link class="text-profile" to="/Shopmanage" target="_self">
            <span
              >ร้านค้าของฉัน &nbsp;
              <img
                style="position: relative; width: 20px; top: -3px"
                src="~/assets/image/rightcrum.png"
              />
              &nbsp;</span
            ></Nuxt-link
          >
          <Nuxt-link class="text-profile" to="/MarketMyAdd" target="_self"
            ><span class="font-proL-top">เพิ่มสินค้า</span></Nuxt-link
          >
        </div>
      </div>

      <div class="form-create">
        <div class="width-hunded">
          <div class="font-form-add">เพิ่มสินค้า</div>

          <div class="dis-input height-req">
            <div class="width-hunded">
              <label for="phone">ชื่อสินค้า <span id="dotstyle">*</span></label>
              <input
                type="text"
                id="phone"
                v-model="productName"
                :class="{ 'input-error': errors.productName }"
                placeholder="กรุณากรอกชื่อสินค้า"
              />
              <span v-if="errors.productName" class="error-message">
                {{ errors.productName }}
              </span>
            </div>
          </div>

          <!-- ส่วนของการเลือกประเภทสินค้า -->
          <div class="form-group">
            <label for="productType"
              >ประเภทสินค้า <span id="dotstyle">*</span></label
            >
            <select
              v-model="selectedProductType"
              @change="onProductTypeChange"
              id="productType"
              class="form-select"
            >
              <option
                v-for="type in productTypes"
                :key="type.value"
                :value="type.value"
              >
                {{ type.label }}
              </option>
            </select>
          </div>

          <!-- <div v-if="showPromotionDetails" class="form-group">
            <label for="promotionDetails">รายละเอียดโปรโมชั่น:</label>
            <input
              type="text"
              v-model="promotionDetails"
              id="promotionDetails"
              class="form-input"
            />
          </div> -->
          <!-- ส่วนของการเลือกประเภทโปรโมชั่น -->
          <div class="form-group">
            <label for="promotionType">ประเภทโปรโมชั่น</label>
            <select
              v-model="selectedPromotionType"
              id="promotionType"
              class="form-select"
            >
              <!-- <option disabled value="">-- เลือกประเภทโปรโมชั่น --</option> -->
              <option
                v-for="promotion in promotionTypes"
                :key="promotion.value"
                :value="promotion.value"
              >
                {{ promotion.label }}
              </option>
            </select>
          </div>

          <!-- ส่วนของรายละเอียดโปรโมชั่น -->

          <div class="dis-input height-req">
            <!-- ฟิลด์สำหรับราคา -->
            <div style="width: 49%">
              <label for="price">
                ราคา <span id="dotstyle">*</span>
                <div class="tooltip-container">
                  <img
                    class="img-in"
                    src="~/assets/image/information-circle.png"
                    alt="Information Icon"
                  />
                  <div class="tooltip-content">ราคาสินค้าก่อนลดราคา</div>
                </div>
              </label>

              <input
                type="text"
                id="price"
                v-model="formattedPrice"
                @input="validatePrice"
                :class="{ 'input-error': errors.price }"
                placeholder="กรุณากรอกราคาสินค้า"
              />
              <span v-if="errors.price" class="error-message">
                {{ errors.price }}
              </span>
            </div>

            <!-- ฟิลด์สำหรับราคาพิเศษ -->
            <div style="width: 49%">
              <label for="specialPrice">
                ราคาพิเศษ <span id="dotstyle"> *</span>
                <div class="tooltip-container">
                  <img
                    class="img-in"
                    src="~/assets/image/information-circle.png"
                    alt="Information Icon"
                  />
                  <div class="tooltip-content">
                    ราคาสินค้าหลังจากการลดราคาแล้ว
                  </div>
                </div>
              </label>
              <input
                type="text"
                id="specialPrice"
                v-model="formattedSpecialPrice"
                @input="validateSpecialPrice"
                :class="{ 'input-error': errors.specialPrice }"
                placeholder="กรุณากรอกราคาพิเศษ"
              />
              <span v-if="errors.specialPrice" class="error-message">
                {{ errors.specialPrice }}
              </span>
            </div>
          </div>
          <div class="width-hunded" style="margin-bottom: 20px">
            <div class=" ">
              <label for="inventory">
                จำนวนสินค้าในคลัง <span id="dotstyle">*</span>
              </label>

              <input
                type="text"
                id="inventory"
                v-model="formattedInventory"
                @input="validateInventory"
                :class="{ 'input-error': errors.inventory }"
                placeholder="กรุณากรอกสินค้าในคลัง"
              />
              <span v-if="errors.inventory" class="error-message">
                {{ errors.inventory }}
              </span>
            </div>
          </div>
          <div class="dis-input">
            <div class="width-hunded">
              <label for="inventory"
                >คำอธิบาย <span id="dotstyle">*</span></label
              >
              <div class="width-hunded">
                <quill-editor-component
                  style="height: max-content; width: 100%"
                  v-model="description"
                ></quill-editor-component>
                <span v-if="errors.description" class="error-message">{{
                  errors.description
                }}</span>
              </div>
              <!-- <span v-if="errors.description" class="error-message">
                {{ errors.description }}
              </span> -->
            </div>
          </div>
          <div>
            <!-- ส่วนของรูปหลัก -->
            <div>
              <div class="font-form-add">
                รูปสินค้าหลัก <span id="dotstyle">*</span>
              </div>
              <div
                class="preview image-container"
                style="position: relative; width: max-content"
              >
                <!-- ปุ่มลบรูปภาพ -->
                <button
                  v-show="showImage"
                  @click="removeImage('main')"
                  class="delete-button"
                  style="    position: absolute;  top: -10px; right: -10px; "
                >
                  &times;
                </button>

                <!-- แสดงภาพที่เลือก -->
                <img
                  :src="imageUrl"
                  class="profile-img"
                  v-show="showImage"
                  @click="openFileDialog('main')"
                />
              </div>
              <div
                v-show="!showImage"
                ref="sidebarOpener"
                style="width: max-content"
              >
                <img
                  class="img-M"
                  src="~/assets/image/img-main.png"
                  @click="openFileDialog('main')"
                />
              </div>
              <input
                type="file"
                ref="mainFileInput"
                style="display: none"
                @change="onFileChange($event, 'main')"
                accept="image/*"
              />
              <span v-if="errors.imageUrl" class="error-message">{{
                errors.imageUrl
              }}</span>
            </div>

            <!-- ส่วนของรูปสินค้าเพิ่มเติม -->
            <div>
              <div class="font-form-add">
                รูปสินค้าเพิ่มเติม ({{ savedImageUrls.length }}/6)
                <span id="dotstyle">*</span>
              </div>
              <div class="preview" style="width: max-content">
                <!-- ไม่มีการแสดงภาพใน div นี้ -->
              </div>
              <div ref="sidebarOpener" class="imagesave">
                <img
                  class="imginput"
                  src="~/assets/image/img-all.png"
                  @click="openFileDialog('gallery')"
                  v-bind:class="{ displaynone: savedImageUrls.length >= 6 }"
                />

                <div
                  v-for="(url, index) in savedImageUrls"
                  :key="index"
                  class="image-container"
                >
                  <img :src="url" class="profile-img-main" />
                  <button
                    @click="removeSavedImage(index)"
                    class="delete-button"
                  >
                    X
                  </button>
                </div>
              </div>
              <input
                type="file"
                ref="galleryFileInput"
                multiple
                style="display: none"
                @change="onFileChange($event, 'gallery')"
                accept="image/*"
              />
              <span v-if="errors.savedImageUrls" class="error-message">{{
                errors.savedImageUrls
              }}</span>
            </div>
          </div>
          <!-- loader -->
          <Loader :isLoading="isLoading" />
          <div>
            <div class="submit" @click.prevent="submitData">
              <img
                style="margin: 0px 5px; width: 20px"
                src="~/assets/image/Save.png"
                alt="Save icon"
              />
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      productName: "",
      price: "0",
      specialPrice: "0",
      description: "",
      inventory: "0",
      imageUrl: "",
      showImage: false,
      savedImageUrls: [],
      errors: {
        price: "",
        specialPrice: "",
        inventory: "",
        imageUrl: "",
        savedImageUrls: "",
      },
      isLoading: false, // ตัวแปรที่ใช้แสดง loader
      productTypes: [{ value: "1", label: "blech" }],
      promotionTypes: [{ value: "1", label: "ส่วนลด" }],
      selectedProductType: "1", // ค่าเริ่มต้น
      selectedPromotionType: "1", // ค่าเริ่มต้น
      // promotionDetails: "",
      // showPromotionDetails: true,
      imageInfo: {},
      savedImageInfo: [],
    };
  },
  computed: {
    formattedPrice: {
      get() {
        return this.formatNumber(this.price);
      },
      set(value) {
        this.price = this.parseNumber(value);
      },
    },
    formattedSpecialPrice: {
      get() {
        return this.formatNumber(this.specialPrice);
      },
      set(value) {
        this.specialPrice = this.parseNumber(value);
      },
    },
    formattedInventory: {
      get() {
        return this.formatNumber(this.inventory);
      },
      set(value) {
        this.inventory = this.parseNumber(value);
      },
    },
  },
  methods: {
    showTooltip() {
      this.isVisible = true;
    },
    hideTooltip() {
      this.isVisible = false;
    },
    formatNumber(value) {
      // ตรวจสอบค่าที่เป็น 0 หรือ null หรือ undefined
      if (value == 0 || value == null || value == undefined) {
        return "";
      }
      // ฟังก์ชันสำหรับฟอร์แมตตัวเลขเป็นรูปแบบที่มีลูกน้ำ
      return Number(value).toLocaleString();
    },

    parseNumber(value) {
      // ฟังก์ชันสำหรับลบลูกน้ำและแปลงเป็นตัวเลข
      return parseFloat(value.replace(/,/g, "")) || null;
    },

    validatePrice(event) {
      this.validateInput(event, "Price");
    },

    validateSpecialPrice(event) {
      this.validateInput(event, "specialPrice");
    },

    validateInventory(event) {
      this.validateInput(event, "Inventory");
    },

    validateInput(event, property) {
      const input = event.target.value;
      // ลบอักขระที่ไม่ใช่ตัวเลขและลูกน้ำ
      const validInput = input.replace(/[^0-9,]/g, "");
      if (input !== validInput) {
        event.target.value = validInput;
      }
      // อัปเดตค่าที่สะอาด
      this[property] = this.parseNumber(validInput);
    },

    onProductTypeChange() {
      // ตรวจสอบว่ามีการเลือกประเภทสินค้าหรือไม่
      this.hasType = this.selectedProductType !== "2";
    },
    onPromotionTypeChange() {
      // ตรวจสอบว่ามีการเลือกประเภทโปรโมชั่นหรือไม่
      this.hasType = this.selectedPromotionType !== "1";
    },
    openFileDialog(type) {
      if (type === "main") {
        this.$refs.mainFileInput.click();
      } else if (type === "gallery") {
        this.$refs.galleryFileInput.click();
      }
    },
    onFileChange(event, type) {
      const files = event.target.files;

      // ตรวจสอบว่าเลือกไฟล์และไม่ใช่โฟลเดอร์
      if (
        files.length &&
        Array.from(files).every((file) => file instanceof File)
      ) {
        // ตรวจสอบว่าไฟล์ทั้งหมดเป็นรูปภาพและไม่เกิน 8 MB
        const validFiles = Array.from(files).filter(
          (file) =>
            file.type.startsWith("image/") && file.size <= 8 * 1024 * 1024
        );

        if (validFiles.length === 0) {
          this.errors.imageUrl =
            "กรุณาเลือกไฟล์รูปภาพที่มีขนาดไม่เกิน 8 MB เท่านั้น";
          this.errors.savedImageUrls =
            "กรุณาเลือกไฟล์รูปภาพที่มีขนาดไม่เกิน 8 MB เท่านั้น";
          return;
        }

        if (type === "main") {
          const file = validFiles[0];
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imageUrl = e.target.result;
            this.showImage = true;
          };
          reader.readAsDataURL(file);
        } else if (type === "gallery") {
          validFiles.forEach((file, index) => {
            if (this.savedImageUrls.length >= 6) {
              this.$swal.fire({
                title: "สามารถเพิ่มได้สูงสุด 6 รูปภาพ",
                icon: "error",
                showCancelButton: false,
              });
              return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
              this.savedImageUrls.push(e.target.result);
              this.savedImageInfo.push({
                name: file.name,
                order: this.savedImageUrls.length,
              });
            };
            reader.readAsDataURL(file);
          });
        }
      }
    },
    removeSavedImage(index) {
      this.savedImageUrls.splice(index, 1);
      this.savedImageInfo.splice(index, 1); // ลบข้อมูลที่เกี่ยวข้องด้วย
    },
    removeImage(type) {
      if (type === "main") {
        this.imageUrl = ""; // ล้าง URL รูปภาพ
        this.showImage = false; // ซ่อนรูปภาพ
        this.$refs.mainFileInput.value = null; // รีเซ็ต input file
      }
    },
    validateForm() {
      let firstErrorField = null;
      this.errors = {}; // ล้างข้อผิดพลาดก่อนเริ่มการตรวจสอบ
      if (!this.productName) {
        this.errors.productName = "กรุณากรอกชื่อสินค้า";
      }
      if (!this.price) {
        this.errors.price = "กรุณากรอกราคา";
      }
      if (!this.inventory) {
        this.errors.inventory = "กรุณากรอกจำนวนสินค้าในคลัง";
      }
      if (!this.description) {
        this.errors.description = "กรุณากรอกคำอธิบาย";
      }

      if (!this.imageUrl) {
        this.errors.imageUrl = "กรุณาอัพโหลดรูปหลัก";
      }

      // ตรวจสอบรูปภาพคลัง (savedImageUrls)
      if (!this.savedImageUrls.length) {
        this.errors.savedImageUrls = "กรุณาอัพโหลดรูปภาพเพิ่มเติม";
        if (!firstErrorField) firstErrorField = "savedImageUrls";
      }

      return Object.keys(this.errors).length === 0;
    },

    async convertBase64ToFile(base64, filename) {
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
    },

    async submitData() {
      if (!this.validateForm()) {
        // this.productName = (this.productName || "").trim();
        // this.inventory = (this.inventory || "").trim();
        return;
      }
      this.isLoading = true; // แสดง loader
      const formData = new FormData();
      // แปลง Base64 เป็น File หากจำเป็น
      if (this.imageUrl.startsWith("data:")) {
        const mainImageFile = await this.convertBase64ToFile(
          this.imageUrl,
          "main_image.png"
        );
        formData.append("img", mainImageFile);
        // formData.append("img_name", this.imageInfo.name);
        // formData.append("img_order", this.imageInfo.order);
      }
      for (let i = 0; i < this.savedImageUrls.length; i++) {
        const url = this.savedImageUrls[i];
        const info = this.savedImageInfo[i];
        if (url.startsWith("data:")) {
          const galleryImageFile = await this.convertBase64ToFile(
            url,
            `gallery_image_${i}.png`
          );
          formData.append(`img_list[${i}].img`, galleryImageFile);
          formData.append(`img_list[${i}].name`, info.name);
          formData.append(`img_list[${i}].priority`, info.order);
        } else {
          formData.append(`img_list[${i}].img`, url);
          formData.append(`img_list[${i}].name`, info.name);
          formData.append(`img_list[${i}].priority`, info.order);
        }
      }
      formData.append("name", this.productName);
      formData.append("description", this.description);
      formData.append("product_types_pt_id", this.selectedProductType);
      formData.append("product_promotions_pp_id", this.selectedPromotionType);
      formData.append("price_before_discount", this.price);
      formData.append("price", this.specialPrice);
      formData.append("amount", this.inventory);
      formData.append("is_public", "true");
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      try {
        const token = this.$cookies.get("authToken");
        console.log("Token:", token); // แสดง token

        // ส่งคำขอสร้างร้านค้า
        const response = await this.$axios.post("/product/create", formData, {
          headers: {
            Authorization: `Bearer ${token}`, // ใช้ token ที่ดึงมาจาก
          },
        });

        // แสดงผลลัพธ์หลังจากส่งข้อมูลสำเร็จ
        console.log("Data submitted successfully!", response.data);

        const result = await this.$swal.fire({
          title: "เพิ่มสินค้า",
          icon: "success",
          showCancelButton: false,
        });
        // หากผู้ใช้กดปุ่ม "ยืนยัน"
        if (result.isConfirmed) {
          this.$router.push("/"); // รีไดเรคไปยังหน้า ShopQR
        }
      } catch (error) {
        console.error("Error:", error);
        this.$handleError(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip-content {
  visibility: hidden;
  width: auto;
  background-color: #5c25f2;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(0%);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip-container:hover .tooltip-content {
  visibility: visible;
  opacity: 1;
}
.img-in {
  position: relative;
  cursor: pointer;
}

.img-in::after {
  content: attr(data-tooltip);
  visibility: hidden;
  width: auto;
  background-color: purple;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 5px;

  /* Positioning the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 100%; /* Show above the image */
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;

  /* Smooth transition for visibility */
  opacity: 0;
  transition: opacity 0.3s;
}

.img-in:hover::after {
  visibility: visible;
  opacity: 1; /* Fade in the tooltip */
}

.img-M {
  margin: 0px 0px 15px;
  height: 250px;
  width: 62%;
}
/* เพิ่มการจัดรูปแบบสำหรับฟอร์มและส่วนต่างๆ ที่เกี่ยวข้อง */
.displaynone {
  display: none !important;
}
.form-container {
  width: 100%;
}

.input-group {
  width: 49%;
  float: left;
  margin-right: 2%;
}

.image-main,
.image-gallery,
.additional-details,
.code-section {
  margin-top: 20px;
}

.preview,
.gallery-preview {
  margin-bottom: 10px;
}

.saved-images {
  display: flex;
  flex-wrap: wrap;
}

.image-container {
  position: relative;
  margin: 0px 15px 0px 0px;
}
.imginput {
  margin: 0px 8px 15px 0px;
  position: relative;
  height: 250px;
  width: 250px;
}
.image-container button {
  position: absolute;
  top: -10px;
  right: -9px;
}
.height-req {
  height: 80px;
}
.delete-button {
  background-color: red; /* สีพื้นหลังของปุ่ม */
  color: white; /* สีของไอคอน X */
  border: none; /* ไม่มีกรอบปุ่ม */
  border-radius: 5px; /* มุมปุ่มโค้ง */
  padding: 5px 10px; /* การเว้นระยะภายในปุ่ม */
  cursor: pointer; /* เปลี่ยนเคอเซอร์เมื่อชี้ไปที่ปุ่ม */
  font-size: 16px; /* ขนาดของไอคอน X */
  display: flex; /* ใช้ flexbox สำหรับการจัดตำแหน่ง */
  align-items: center; /* จัดตำแหน่งไอคอน X ให้อยู่ตรงกลาง */
  justify-content: center; /* จัดตำแหน่งไอคอน X ให้อยู่กลางปุ่ม */
  z-index: 5;
}

.form-group {
  margin-bottom: 15px;
}

.form-select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
img {
  vertical-align: middle;
  border-style: none;
  cursor: pointer;
}
.imagesave {
  width: 100%;
  align-items: flex-start;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.img-in {
  width: 20px;
  height: 20px;
  position: relative;
  top: -3px;
}
</style>
