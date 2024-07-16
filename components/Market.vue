<template>
  <div  class="market-home">
    <div>
      <HomeCorousalBanner :items="itemsbanners" />
    </div>
    <!-- <div style="display: flex; justify-content: center; margin-top: 20px">
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
    </div> -->
    <div>
      <Marketprofile />
    </div>
    <!-- <div style="display: flex; justify-content: center">
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
    </div> -->
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
                />
              </div>
            </label>
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
  data() {
    return {
      itemsbanners: [
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
      ],
      imageData: null,
      imageUrl: false,
      showImage: false,
      submitted: false,
    };
  },
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "350px";
      document.getElementById("mySidenav").style.right = "0px";
    },
    closeNav() {
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
      console.log("Submitted:", this.imageData);
      this.showImage = true;
      alert("เพิ่มภาพเรียบร้อย");
    },
  },
};
</script>


