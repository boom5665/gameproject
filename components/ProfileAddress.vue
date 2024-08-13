<template>
  <div class="M-Create-Backgroud Profile Profile-address">
    <div class="navtabs">
      <div class="font-top-myshop">
        <Nuxt-link class="text-profile" to="/Profile" target="_self"><span class="">Profile</span></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfileEdit" target="_self">&nbsp; | &nbsp;<span class="">Edit profile</span></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfileEditEmail" target="_self">&nbsp; | &nbsp;<span class="">Email</span></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfileEditPhone" target="_self">&nbsp; | &nbsp;<span class="">Phone number</span ></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfileAddress" target="_self">&nbsp; | &nbsp;<span class="font-proL-top">Address</span></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfilePassword" target="_self">&nbsp; | &nbsp;<span class="">Password</span></Nuxt-link>
      </div>
      <div class="form-create">
        <div class="width-hunded">
          <div class="dis-btween">
            <div>
              <div class="but-shop font-top">Add address</div>
            </div>
          </div>
          <div>
            <label for="phone">ชื่อผู้รับ <span id="dotstyle">*</span></label>
            <input type="text" id="name" v-model="name" />
          </div>
          <div>
            <label for="phone"
              >เบอร์โทรศัพท์ <span id="dotstyle">*</span></label
            >
            <input type="text" id="name" v-model="name" />
          </div>
          <div>
            <label for="phone"
              >รายละเอียดที่อยู่ <span id="dotstyle">*</span></label
            >
            <input type="text" id="name" v-model="name" />
          </div>
          <div>
            <label for="phone">จังหวัด <span id="dotstyle">*</span></label>
            <input type="text" id="name" v-model="name" />
          </div>
          <div>
            <label for="phone">เขต/อำเภอ <span id="dotstyle">*</span></label>
            <input type="text" id="name" v-model="name" />
          </div>
          <div>
            <label for="phone">รหัสไปรษณีย์ <span id="dotstyle">*</span></label>
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


