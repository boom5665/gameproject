<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <div class="font-top-myshop">
        ร้านค้าของฉัน &nbsp; > &nbsp;
        <span class="font-proL-top">เพิ่มสินค้า</span>
      </div>

      <div class="form-create">
        <div style="width: 100%">
          <div class="font-form-add">เพิ่มสินค้า</div>

          <div class="dis-input height-req">
            <div style="width: 49%">
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
            <div style="width: 49%">
              <label for="productType"
                >ประเภทสินค้า <span id="dotstyle">*</span></label
              >
              <input
                type="text"
                id="productType"
                v-model="productType"
                :class="{ 'input-error': errors.productType }"
              />
              <span v-if="errors.productType" class="error-message">
                {{ errors.productType }}
              </span>
            </div>
          </div>

          <div class="dis-input height-req">
            <div style="width: 49%">
              <label for="price">ราคา <span id="dotstyle">*</span> </label>
              <input
                type="text"
                id="price"
                v-model="price"
                :class="{ 'input-error': errors.price }"
              />
              <span v-if="errors.price" class="error-message">
                {{ errors.price }}
              </span>
            </div>
            <div style="width: 49%">
              <label for="specialPrice">ราคาพิเศษ</label>
              <input
                type="text"
                id="specialPrice"
                v-model="specialPrice"
                :class="{ 'input-error': errors.specialPrice }"
              />
              <span v-if="errors.specialPrice" class="error-message">
                {{ errors.specialPrice }}
              </span>
            </div>
          </div>
          <div class="dis-input height-req">
            <div style="width: 100%">
              <label for="inventory"
                >สินค้าในคลัง <span id="dotstyle">*</span></label
              >
              <input
                type="text"
                id="inventory"
                v-model="inventory"
                :class="{ 'input-error': errors.inventory }"
              />
              <span v-if="errors.inventory" class="error-message">
                {{ errors.inventory }}
              </span>
            </div>
          </div>
          <div class="dis-input">
            <div style="width: 100%">
              <label for="inventory"
                >คำอธิบาย <span id="dotstyle">*</span></label
              >
              <div style="width: 100%">
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
                  @click="openMainFileDialog"
                />
              </div>
              <div
                v-show="!showImage"
                ref="sidebarOpener"
                style="width: max-content"
              >
                <img
                  style="margin: 15px 5px"
                  src="~/assets/image/img-main.png"
                  @click="openMainFileDialog"
                />
              </div>
              <input
                type="file"
                ref="mainFileInput"
                style="display: none"
                @change="onMainFileChange"
              />
              <span v-if="errors.imageUrl" class="error-message">
                {{ errors.imageUrl }}
              </span>
            </div>

            <!-- ส่วนของคลังรูปภาพ -->
            <div>
              <div class="font-form-add">
                คลังรูปภาพ ({{ savedImageUrls.length }}/10)
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
                  style="margin: 15px 5px"
                  src="~/assets/image/img-all.png"
                  @click="openGalleryFileDialog"
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
                @change="onGalleryFilesChange"
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
      productType: "",
      price: "",
      specialPrice: "",
      description: "",
      inventory: "",
      imageUrl: "",
      showImage: false,
      savedImageUrls: [],
      errors: {},
      isLoading: false, // ตัวแปรที่ใช้แสดง loader
    };
  },
  methods: {
    openMainFileDialog() {
      this.$refs.mainFileInput.click();
    },
    onMainFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
          this.showImage = true;
        };
        reader.readAsDataURL(file);
      }
    },
    openGalleryFileDialog() {
      this.$refs.galleryFileInput.click();
    },
    onGalleryFilesChange(event) {
      const files = event.target.files;
      if (files.length) {
        Array.from(files).forEach((file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (this.savedImageUrls.length < 10) {
              this.savedImageUrls.push(e.target.result);
            } else {
              alert("สามารถเพิ่มได้สูงสุด 10 รูปภาพ");
            }
          };
          reader.readAsDataURL(file);
        });
      }
    },
    removeSavedImage(index) {
      this.savedImageUrls.splice(index, 1);
    },

    validateForm() {
      this.errors = {}; // ล้างข้อผิดพลาดก่อนเริ่มการตรวจสอบ
      if (!this.productName) {
        this.errors.productName = "กรุณากรอกชื่อสินค้า";
      }
      if (!this.productType) {
        this.errors.productType = "กรุณากรอกประเภทสินค้า";
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
      if (!this.savedImageUrls.length) {
        this.errors.savedImageUrls = "กรุณาอัพโหลดรูปภาพคลัง";
      }

      return Object.keys(this.errors).length === 0;
    },
    async submitData() {
      if (!this.validateForm()) {
        return;
      }

      this.isLoading = true; // แสดง loader
      const productData = {
        productName: this.productName,
        productType: this.productType,
        price: this.price,
        specialPrice: this.specialPrice,
        description: this.description,
        inventory: this.inventory,
        imageUrl: this.imageUrl,
        savedImageUrls: this.savedImageUrls,
      };

      console.log("Submitting data:", productData);

      try {
        const response = await this.$axios.post("/product/create", productData);
        console.log("Data submitted successfully!", response);
        // สามารถจัดการกับ response ได้ตามต้องการ เช่นการแสดงข้อความแจ้งเตือน
        this.isLoading = false; // ซ่อน loader
      } catch (error) {
        this.$handleError(error);
        console.error("Error:", error);
        // สามารถจัดการกับข้อผิดพลาดได้ตามต้องการ เช่นการแสดงข้อความแจ้งเตือน
        this.isLoading = false; // ซ่อน loader
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
</style>
