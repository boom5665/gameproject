<template>
  <div class="M-Create-Backgroud Profile">
    <div class="navtabs">
      <div class="font-top-myshop">
        <Nuxt-link class="text-profile" to="/Profile" target="_self">
        <span class="">Profile</span></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfileEdit" target="_self">&nbsp; | &nbsp;<span class="">Edit profile</span></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfileEditEmail" target="_self">&nbsp; | &nbsp;<span class="">Email</span></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfileEditPhone" target="_self">&nbsp; | &nbsp;<span class="">Phone number</span ></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfileAddress" target="_self">&nbsp; | &nbsp;<span class="">Address</span></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfilePassword" target="_self">&nbsp; | &nbsp;<span class="font-proL-top">Password</span></Nuxt-link>
      </div>
      <div class="form-create">
        <div style="width: 100%">
          <div class="dis-btween">
            <div>
              <div class="but-shop font-top">Password Requirements:</div>
            </div>

          </div>
           <div style="margin-bottom:20px">
              <div class="but-shop font-content-pro">
                • Between 8 - 16 characters
              </div>
               <div class="but-shop font-content-pro">
                • At least 1 lowercase character (a-z)
              </div>
               <div class="but-shop font-content-pro">
                • At least 1 number (0-9)
              </div>
            </div>
          <div>
            <label for="phone">Current password  <span id="dotstyle">*</span></label>
            <input type="text" id="name" v-model="name" />
          </div>
            <div>
            <label for="phone">New password   <span id="dotstyle">*</span></label>
            <input type="text" id="name" v-model="name" />
          </div>
            <div>
            <label for="phone">Confirm new password * <span id="dotstyle">*</span></label>
            <input type="text" id="name" v-model="name" />
          </div>


          <button
            type="submit"
            class="submit button-pro-edit"
            @click.prevent="submitData"
          >
            บันทึก
          </button>
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
  top: -4px;
  position: relative;
}
</style>
