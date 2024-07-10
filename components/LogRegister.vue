
<template>
  <div class="M-Create-Backgroud Profile">
    <div class="navtabs">
      <div class="form-create">
        <div style="width: 100%">
          <div class="font-form-pak">Register</div>
          <div>
            <label for="name">Nickname <span id="dotstyle">*</span></label>
            <input
              type="text"
              id="name"
              v-model="nickname"
              placeholder="Enter your nickname"
            />
          </div>

          <div class="dis-input">
            <div style="width: 49%">
              <label for="username">Username <span id="dotstyle">*</span></label>
              <input
                type="text"
                id="username"
                v-model="username"
                placeholder="Enter your username"
              />
            </div>
            <div style="width: 49%">
              <label for="password">password <span id="dotstyle">*</span></label>
              <input
                type="text"
                id="password"
                v-model="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div class="dis-input">
            <div style="width: 49%">
              <label for="firstname">Firstname <span id="dotstyle">*</span></label>
              <input
                type="text"
                id="firstname"
                v-model="firstname"
                placeholder="Enter your firstname"
              />
            </div>
            <div style="width: 49%">
              <label for="lastname">Lastname <span id="dotstyle">*</span></label>
              <input
                type="text"
                id="lastname"
                v-model="lastname"
                placeholder="Enter your lastname"
              />
            </div>
          </div>

          <div class="dis-input">
            <div style="width: 49%">
              <label for="phone">Phone <span id="dotstyle">*</span></label>
              <input
                type="text"
                id="phone"
                v-model="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div style="width: 49%">
              <label for="birthday">Birthday <span id="dotstyle">*</span></label>
              <input
                type="text"
                id="birthday"
                v-model="birthday"
                placeholder="Enter your birthday"
              />
            </div>
          </div>

          <div class="dis-input">
            <div style="width: 49%">
              <label for="gender">Gender <span id="dotstyle">*</span></label>
              <input
                type="text"
                id="gender"
                v-model="gender"
                placeholder="Enter your gender"
              />
            </div>
            <div style="width: 49%">
              <label for="email">Email <span id="dotstyle">*</span></label>
              <input
                type="text"
                id="email"
                v-model="email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div class="dis-input">
            <div style="width: 49%">
              <label for="IDcardnumber">ID card number <span id="dotstyle">*</span></label>
              <input
                type="text"
                id="IDcardnumber"
                v-model="IDcardnumber"
                placeholder="ID card number"
              />
            </div>
            <div style="width: 49%">
              <label for="idCardBack">ID card number back <span id="dotstyle">*</span></label>
              <input
                type="text"
                id="idCardBack"
                v-model="idCardBack"
                placeholder="Enter your ID card number back"
              />
            </div>
          </div>

          <button
            type="submit"
            class="submit button-pro-edit"
            @click.prevent="submitData"
          >
            บันทึก
          </button>

          <div style="text-align: center; margin-top: 10px">
            <a href="#">เป็นสมาชิกแล้ว? เข้าสู่ระบบ</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nickname: "",
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      phone: "",
      birthday: "",
      gender: "",
      email: "",
      IDcardnumber: "",
      idCardBack: "",
    };
  },

  methods: {
    submitData() {
      const formData = {
        nickname: this.nickname,
        username: this.username,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname,
        phone: this.phone,
        birthday: this.birthday,
        gender: this.gender,
        email: this.email,
        username2: this.username2,
        idCardBack: this.idCardBack,
      };

      axios
        .post("https://example.com/api/register", formData) // แก้ URL เป็น URL จริงของ API ที่ใช้ในการลงทะเบียน
        .then((response) => {
          console.log("Response:", response.data);
          alert("Registration successful!");
          // เพิ่มการนำไปยังหน้าต่อไปหรือทำตามที่ต้องการหลังจากลงทะเบียนสำเร็จ
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to register.");
        });
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
.font-form-pak {
  font-size: 48px;
  color: #5c25f2;
  text-align: center;
  margin-bottom: 10px;
}
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
