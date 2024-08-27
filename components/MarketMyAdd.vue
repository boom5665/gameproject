<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <div class="font-top-myshop">
        <div class="font-top-myshop">
          <Nuxt-link class="text-profile" to="/MarketMyshop" target="_self">
            <span>ร้านค้าของฉัน &nbsp; > &nbsp;</span></Nuxt-link
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
              <label for="price">ราคา <span id="dotstyle">*</span></label>
              <input
                type="text"
                id="price"
                v-model="formattedPrice"
                @input="validatePrice"
                :class="{ 'input-error': errors.price }"
              />
              <span v-if="errors.price" class="error-message">
                {{ errors.price }}
              </span>
            </div>

            <!-- ฟิลด์สำหรับราคาพิเศษ -->
            <div style="width: 49%">
              <label for="specialPrice">
                ราคาพิเศษ <span id="dotstyle"> *</span>
              </label>
              <input
                type="text"
                id="specialPrice"
                v-model="formattedSpecialPrice"
                @input="validateSpecialPrice"
                :class="{ 'input-error': errors.specialPrice }"
              />
              <span v-if="errors.specialPrice" class="error-message">
                {{ errors.specialPrice }}
              </span>
            </div>
          </div>
          <div class="width-hunded">
            <label for="inventory">
              สินค้าในคลัง <span id="dotstyle">*</span>
            </label>
            <input
              type="text"
              id="inventory"
              v-model="formattedInventory"
              @input="validateInventory"
              :class="{ 'input-error': errors.inventory }"
            />
            <span v-if="errors.inventory" class="error-message">
              {{ errors.inventory }}
            </span>
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
                รูปหลัก <span id="dotstyle">*</span>
              </div>
              <div class="preview" style="width: max-content">
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
                  style="margin: 0px 0px 15px"
                  src="~/assets/image/img-main.png"
                  @click="openFileDialog('main')"
                />
              </div>
              <input
                type="file"
                ref="mainFileInput"
                style="display: none"
                @change="onFileChange($event, 'main')"
              />
              <span v-if="errors.imageUrl" class="error-message">
                {{ errors.imageUrl }}
              </span>
            </div>

            <!-- ส่วนของคลังรูปภาพ -->
            <div>
              <div class="font-form-add">
                คลังรูปภาพ ({{ savedImageUrls.length }}/6)
                <span id="dotstyle">*</span>
              </div>
              <div class="preview" style="width: max-content">
                <!-- ไม่มีการแสดงภาพใน div นี้ -->
              </div>
              <div
                ref="sidebarOpener"
                style="display: flex; width: 100%; align-items: center"
              >
                <img
                  style="margin: 0px 0px 15px"
                  src="~/assets/image/img-all.png"
                  @click="openFileDialog('gallery')"
                />
                <div class="saved-images">
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
              </div>
              <input
                type="file"
                ref="galleryFileInput"
                multiple
                style="display: none"
                @change="onFileChange($event, 'gallery')"
              />
              <span v-if="errors.savedImageUrls" class="error-message">
                {{ errors.savedImageUrls }}
              </span>
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
      productName: "",
      price: "",
      specialPrice: "",
      description: "",
      inventory: "",
      imageUrl: "",
      showImage: false,
      savedImageUrls: [],
      errors: {
        price: null,
        specialPrice: null,
        inventory: null,
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
    formatNumber(value) {
      // ฟังก์ชันสำหรับฟอร์แมตตัวเลขเป็นรูปแบบที่มีลูกน้ำ
      return value !== null ? Number(value).toLocaleString() : "";
    },
    parseNumber(value) {
      // ฟังก์ชันสำหรับลบลูกน้ำและแปลงเป็นตัวเลข
      return parseFloat(value.replace(/,/g, "")) || null;
    },
    validatePrice(event) {
      const input = event.target.value;
      // ไม่จำเป็นต้องมีการตรวจสอบข้อผิดพลาดในที่นี้
    },
    validateSpecialPrice(event) {
      const input = event.target.value;
      const validInput = input.replace(/[^0-9,]/g, "");
      if (input !== validInput) {
        event.target.value = validInput;
        this.specialPrice = this.parseNumber(validInput);
      }
      // ไม่มีการตรวจสอบข้อผิดพลาดในที่นี้
    },
    validateInventory(event) {
      const input = event.target.value;
      // ไม่จำเป็นต้องมีการตรวจสอบข้อผิดพลาดในที่นี้
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
            const reader = new FileReader();
            reader.onload = (e) => {
              if (this.savedImageUrls.length < 6) {
                this.savedImageUrls.push(e.target.result);
                this.savedImageInfo.push({
                  name: file.name,
                  order: this.savedImageUrls.length,
                });

                console.log("Gallery Image Info:", {
                  name: file.name,
                  order: this.savedImageUrls.length,
                });
              } else {
                this.$swal.fire({
                  title: "สามารถเพิ่มได้สูงสุด 6 รูปภาพ",
                  icon: "error",
                  showCancelButton: false,
                });
              }
            };
            reader.readAsDataURL(file);
          });
        }
      } else {
        this.$swal.fire({
          title: "กรุณาเลือกเฉพาะไฟล์ ไม่ใช่โฟลเดอร์",
          icon: "error",
          showCancelButton: false,
        });
      }
    },
    removeSavedImage(index) {
      this.savedImageUrls.splice(index, 1);
      this.savedImageInfo.splice(index, 1); // ลบข้อมูลที่เกี่ยวข้องด้วย
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
        this.errors.savedImageUrls = "กรุณาอัพโหลดรูปภาพคลัง";
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
      formData.append("price_before_discount", this.price.replace(/,/g, ""));
      formData.append("price", this.specialPrice.replace(/,/g, ""));
      formData.append("amount", this.inventory.replace(/,/g, ""));
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
/* เพิ่มการจัดรูปแบบสำหรับฟอร์มและส่วนต่างๆ ที่เกี่ยวข้อง */
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
  margin: 5px;
}

.image-container button {
  position: absolute;
  top: 5px;
  right: -10px;
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
</style>
