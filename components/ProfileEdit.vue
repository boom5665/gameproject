<template>
  <div class="M-Create-Backgroud Profile">
    <div class="navtabs">
      <div class="font-top-myshop">
        <span class="font-proL-top">Profile</span> &nbsp; | &nbsp;
        <span class="">Edit profile</span>
        &nbsp; | &nbsp;<span class="">Email</span> &nbsp; | &nbsp;<span class=""
          >Phone number</span
        >
        &nbsp; | &nbsp;<span class="">Address</span> &nbsp; | &nbsp;<span
          class=""
          >Password</span
        >
      </div>
      <div class="form-create">
        <div style="width: 100%">
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
                <img class="" src="~/assets/image/Edit.png" />
              </div>
            </div>
          </div>
          <div>
            <label for="phone">Username</label>
            <input type="text" id="name" v-model="name" />
          </div>
          <div class="dis-btween">
            <div>
              <div class="but-shop font-content-pro">
                <img class="img-safe" src="~/assets/image/Pro.png" />
                ข้อมูลส่วนบุคคล
              </div>
            </div>

            <div class="but-shop font-content-ver">
              <div v-if="userInfo.contact === 'Verified'">
                <img class="img-safe" src="~/assets/image/Verified.png" />
                {{ userInfo.contact }}
              </div>

              <!-- โชว์ถ้าเป็น Unverified -->
              <div
                v-else-if="userInfo.contact === 'Unverified'"
                class="font-content-Unver"
              >
                <img class="img-safe" src="~/assets/image/Unverified.png" />
                {{ userInfo.contact }}
              </div>
            </div>
          </div>
          <div class="dis-input">
            <div style="width: 49%">
              <label for="phone">ชื่อ</label>
              <input type="text" id="phone" v-model="phone" />
            </div>
            <div style="width: 49%">
              <label for="otherContact">นามสกุล</label>
              <input type="text" id="otherContact" v-model="otherContact" />
            </div>
          </div>
          <div>
            <div>
              <div class="dis-input">
                <div style="width: 49%">
                  <label for="firstName">หมายเลขบัตรประชาชน (13 หลัก)</label>
                  <input type="text" id="firstName" v-model="firstName" />
                </div>
                <div style="width: 49%">
                  <label for="lastName">เลขหลังบัตรประชาชน</label>
                  <input type="text" id="lastName" v-model="lastName" />
                </div>
              </div>
              <div class="dis-input">
                <div style="width: 49%">
                  <label for="idCard">วันเกิด</label>
                  <input type="text" id="idCard" v-model="idCard" />
                </div>
                <div style="width: 49%">
                  <label for="idCardBack">เพศ</label>
                  <input type="text" id="idCardBack" v-model="idCardBack" />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="submit button-pro-edit"
            @click.prevent="submitData"
          >
            บันทึก
          </button>

          <div id="mySidenav" class="sidenav">
            <div class="">
              <a href="javascript:void(0)" class="closebtn" @click="closeNav"
                ><div class="font-top-close">เพิ่มสื่อในคลังรูปภาพ</div>
                <div>&times;</div>
              </a>
              <div class="pad-right">
                <div>ขนาดรูปที่แนะนำ 960 x 540</div>
                <div class="font-form-myshop-under">
                  <span id="dotstyle">*</span>รองรับไฟล์ gif, jpg, jpeg เท่านั้น
                  และ ไฟล์มีขนาดไม่เกิน 10 MB
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
                    <img
                      :src="imageUrl"
                      class="profile-img-main"
                      v-show="imageUrl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="pad-right">
              <div class="submit" @click="submitImage">Send</div>
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
      // ตัวแปรหรือข้อมูลที่คุณต้องการนำเข้าไปใช้ใน component นี้
      imageData: null,
      imageUrl: false,
      showImage: false,
      name: "",
      phone: "",
      otherContact: "",
      firstName: "",
      lastName: "",
      idCard: "",
      idCardBack: "",
      birthDate: "",
      consent: false,
      submitted: false,
      userInfo: {
        id: "BB000000",
        username: "Username",
        personalDetails: "Verified",
        name: "Demo",
        surname: "Demo",
        idCardNumber: "1-1111-1111***",
        birthdate: "00/00/0000",
        gender: "Female",
        contact: "Verified",
        uncontact: "Unverified",
        email: "Demo",
        phoneNumber: "-",
      },
    };
  },

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

    submitData() {
      console.log(
        "Form submitted:",
        this.name,
        this.phone,
        this.otherContact,
        this.firstName,
        this.lastName,
        this.idCard,
        this.idCardBack,
        this.birthDate,
        this.consent
      );
      // ส่วนนี้คือการส่งข้อมูลไปยัง API หรือทำการบันทึกข้อมูลตามที่ต้องการ

      console.log("Sucess:", this.imageData);

      // เมื่อส่งเสร็จแล้วสามารถทำการ reset หรือแสดงผลอื่น ๆ ตามที่ต้องการได้
      alert("Data submitted successfully!");
    },

    removeSavedImage(index) {
      this.savedImageUrls.splice(index, 1);
    },
  },
  mounted() {
    const spans = document.querySelectorAll("span#dotstyle");
    spans.forEach((span) => {
      span.style.color = "red"; // ตั้งสีเป็นแดง
    });
  },
};
</script>

<style lang="scss" scoped>
.button-pro-edit {
  border-radius: var(--Border-radius-8, 8px);
  border: 1px solid var(--Color-Primary-Pueple-500, #5c25f2) !important;
  background: var(--Color-Secondary-500, #ffeb3b) !important;
  color: var(--Color-Primary-Pueple-500, #5c25f2) !important;
}
.M-Create-Backgroud .font-top-myshop {
  font-size: 18px;
  color: var(--color-black-white-700, #bababa);
}
.font-proL-top {
  color: #ffeb3b;
  font-size: 24px !important;
}
.img-safe {
    /* padding-right: 8px; */
    top: -4px;
    position: relative;
}
</style>
