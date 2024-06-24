<template>
  <div style="width: 100%">
    <div>
      <HomeCorousalBanner :items="itemsbanner" />
    </div>
    <div style="display: flex; justify-content: center;margin-top: 20px;">
      <div>
        <div class="font-form-add"></div>
        <div class="preview" style="width: max-content" @click="openNav">
          <img :src="imageUrl" class="img-edit" v-show="showImage" />
        </div>
        <div
          class=""
          v-show="!showImage"
          @click="openNav"
          ref="sidebarOpener"
          style="width: max-content"
        >
          <img
            class=""
            style="width: 100%"
            src="~/assets/image/BG market.png"
          />
        </div>
      </div>
    </div>
    <Marketprofile />
    <div style="display: flex; justify-content: center">
      <div>
        <div class="font-form-add"></div>
        <div class="preview" style="width: max-content">
          <img :src="imageUrl" class="img-edit" v-show="showImage" />
        </div>
        <div
          class=""
          v-show="!showImage"
          @click="openNav"
          ref="sidebarOpener"
          style="width: max-content"
        >
          <img
            class=""
            style="width: 100%"
            src="~/assets/image/BG market.png"
          />
        </div>
      </div>
    </div>
    <div id="mySidenav" class="sidenav">
      <div class="">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav"
          ><div class="font-top-close">เพิ่มสื่อในคลังรูปภาพ</div>
          <div>&times;</div>
        </a>
        <div class="pad-right">
          <div>ขนาดรูปที่แนะนำ 960 x 540</div>
          <div class="font-form-myshop-under">
            <span id="dotstyle">*</span>รองรับไฟล์ gif, jpg, jpeg เท่านั้น และ
            ไฟล์มีขนาดไม่เกิน 10 MB
          </div>
          <div>
            <label for="image_uploads" class="img-upload-btn">
              <div class="">
                <img
                  class=""
                  style="margin: 15px 5px; width: 100%"
                  src="~/assets/image/img-main-nav.png"
                /></div
            ></label>
            <input
              type="file"
              id="image_uploads"
              name="image_uploads"
              accept=".jpg, .jpeg, .png"
              style="opacity: 0"
              @change="handleFileChange"
            />
            <div class="preview">
              <!-- <p class="no-pic" v-show="!imageUploaded">No Pic uploaded</p> -->
              <img :src="imageUrl" class="profile-img-main" v-show="imageUrl" />
            </div>
          </div>
        </div>
      </div>
      <div class="pad-right">
        <div class="submit" @click="submitImage">Send</div>
      </div>
    </div>
    <div class="card-shop" style="margin-top: 60px">
      <Marketshopall />
    </div>
  </div>
</template>

<script>
import HomeCorousalBanner from "./HomeCorousalBanner.vue";
export default {
  components: {
    HomeCorousalBanner,
  },

  components: {},
  data() {
    return {
      itemsbanner: [
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
      ],
      // ตัวแปรหรือข้อมูลที่คุณต้องการนำเข้าไปใช้ใน component นี้
      imageData: null,
      imageUrl: false,
      showImage: false,
      submitted: false,
    };
  },

  computed: {},
  methods: {
    openNav() {
      // เปิดเมนูด้านข้าง
      document.getElementById("mySidenav").style.width = "350px";
      document.getElementById("mySidenav").style.right = "0px";
    },
    closeNav() {
      // ปิดเมนูด้านข้าง
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.right = "-50px";
    },

    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.imageData = file;
        this.imageUrl = URL.createObjectURL(file);
      } else {
        this.imageData = null;
        this.imageUrl = "";
      }
    },

    submitImage() {
      // ส่วนนี้คือการส่งข้อมูลไปยัง API หรือทำการบันทึกข้อมูลตามที่ต้องการ
      console.log("Submitted:", this.imageData);

      // เมื่อส่งเสร็จแล้วแสดงภาพที่อัพโหลด
      this.showImage = true;
      alert("เพิ่มภาพเรียบร้อย");
    },
  },
};
</script>



<style>
.img-edit {
  border-radius: var(--Border-radius-8, 8px) !important;
  border: 4px solid #ffeb3b !important;
  border: 2px dashed var(--Color-Secondary-500, #ffeb3b) !important;
  width: 100% !important;
  height: 400px !important;
  /* margin: 15px 5px; */
}
.profile-img-main {
  height: 130px;
  gap: 10px;
  width: 100%;
}
</style>
