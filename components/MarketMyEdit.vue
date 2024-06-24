<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <div class="font-top-myshop">
        ร้านค้าของฉัน > <span class="font-proL-top">แก้ไขร้านค้า</span>
      </div>

      <div class="form-create">
        <div style="width: 100%">
          <div class="font-form-add">เพิ่มสินค้า</div>
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
          <div class="font-head">
            <div>
              <img
                class=""
                style="margin: 0px 10px; width: 20px"
                src="~/assets/image/store.png"
              />
            </div>
            ร้านค้า
          </div>
          <div>
            <label for="phone">หมายเลขโทรศัพท์</label>
            <input type="text" id="name" v-model="name" />
          </div>
          <div>
            <div>ช่องทางการติดต่อร้านค้า</div>
            <div class="comment-font">
              (ข้อมูลนี้จะถูกแสดงให้กับผู้ซื้อในรายการสินค้า)
            </div>
          </div>
          <div class="dis-input">
            <div style="width: 49%">
              <label for="phone">หมายเลขโทรศัพท์</label>
              <input type="text" id="phone" v-model="phone" />
            </div>
            <div style="width: 49%">
              <label for="otherContact">ช่องทางติดต่ออื่นๆ</label>
              <input type="text" id="otherContact" v-model="otherContact" />
            </div>
          </div>
          <div>
            <div class="box-rule">
              <div>
                <img class="" src="~/assets/image/rule.png" />
              </div>
              <div style="width: 90%">
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
                  <label for="firstName">ชื่อ *</label>
                  <input type="text" id="firstName" v-model="firstName" />
                </div>
                <div style="width: 49%">
                  <label for="lastName">นามสกุล *</label>
                  <input type="text" id="lastName" v-model="lastName" />
                </div>
              </div>
              <div class="dis-input">
                <div style="width: 49%">
                  <label for="idCard">หมายเลขบัตรประชาชน (13 หลัก) *</label>
                  <input type="text" id="idCard" v-model="idCard" />
                </div>
                <div style="width: 49%">
                  <label for="idCardBack">เลขหลังบัตรประชาชน *</label>
                  <input type="text" id="idCardBack" v-model="idCardBack" />
                </div>
              </div>
              <div class="dis-input">
                <div style="width: 49%">
                  <label for="birthDate">วันเกิด *</label>
                  <input type="text" id="birthDate" v-model="birthDate" />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" class="submit" @click.prevent="submitData">
            <img
              class=""
              style="margin: 0px 5px; width: 20px"
              src="~/assets/image/Save.png"
              alt="Save icon"
            />
            Submit
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



<style>
.img-edit {
  border-radius: 60px;
  border: 4px solid var(--Color-Primary-Pueple-500, #5c25f2);
  width: 100px;
  height: 100px;
  margin: 15px 5px;
}

.font-top-close {
  color: white;
  font-size: 20px;
}
.pad-right {
  padding: 20px;
}
</style>
