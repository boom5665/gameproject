<template>
  <div class="M-Create-Backgroud Profile">
    <div class="navtabs">
      <div class="form-create">
        <div style="width: 100%">
          <div class="font-form-pak">Register</div>
          <div>
            <label for="nickname">Nickname <span id="dotstyle">*</span></label>
            <input
              type="text"
              id="nickname"
              v-model="nickname"
              placeholder="Enter your nickname"
            />
            <span v-if="errors.nickname" class="error">{{
              errors.nickname
            }}</span>
          </div>

          <div class="dis-input">
            <div style="width: 49%">
              <label for="username"
                >Username <span id="dotstyle">*</span></label
              >
              <input
                type="text"
                id="username"
                v-model="username"
                placeholder="Enter your username"
              />
              <span v-if="errors.username" class="error">{{
                errors.username
              }}</span>
            </div>
            <div style="width: 49%">
              <label for="password"
                >Password <span id="dotstyle">*</span></label
              >
              <input
                type="password"
                id="password"
                v-model="password"
                placeholder="Enter your password"
              />
              <span v-if="errors.password" class="error">{{
                errors.password
              }}</span>
            </div>
          </div>

          <div class="dis-input">
            <div style="width: 49%">
              <label for="firstname"
                >Firstname <span id="dotstyle">*</span></label
              >
              <input
                type="text"
                id="firstname"
                v-model="firstname"
                placeholder="Enter your firstname"
              />
              <span v-if="errors.firstname" class="error">{{
                errors.firstname
              }}</span>
            </div>
            <div style="width: 49%">
              <label for="lastname"
                >Lastname <span id="dotstyle">*</span></label
              >
              <input
                type="text"
                id="lastname"
                v-model="lastname"
                placeholder="Enter your lastname"
              />
              <span v-if="errors.lastname" class="error">{{
                errors.lastname
              }}</span>
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
              <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
            </div>
            <div style="width: 49%">
              <label for="birthday"
                >Birthday <span id="dotstyle">*</span></label
              >
              <input
                type="text"
                id="birthday"
                v-model="birthday"
                placeholder="Enter your birthday"
              />
              <span v-if="errors.birthday" class="error">{{
                errors.birthday
              }}</span>
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
              <span v-if="errors.gender" class="error">{{
                errors.gender
              }}</span>
            </div>
            <div style="width: 49%">
              <label for="email">Email <span id="dotstyle">*</span></label>
              <input
                type="text"
                id="email"
                v-model="email"
                placeholder="Enter your email"
              />
              <span v-if="errors.email" class="error">{{ errors.email }}</span>
            </div>
          </div>

          <div class="dis-input">
            <div style="width: 49%">
              <label for="IDcardnumber"
                >ID card number <span id="dotstyle">*</span></label
              >
              <input
                type="text"
                id="IDcardnumber"
                v-model="IDcardnumber"
                placeholder="Enter your ID card number"
              />
              <span v-if="errors.IDcardnumber" class="error">{{
                errors.IDcardnumber
              }}</span>
            </div>
            <div style="width: 49%">
              <label for="idCardBack"
                >ID card number back <span id="dotstyle">*</span></label
              >
              <input
                type="text"
                id="idCardBack"
                v-model="idCardBack"
                placeholder="Enter your ID card number back"
              />
              <span v-if="errors.idCardBack" class="error">{{
                errors.idCardBack
              }}</span>
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
      errors: {},
    };
  },

  methods: {
    validateForm() {
      this.errors = {};

      if (!this.nickname) this.errors.nickname = "Nickname is required.";
      if (!this.username) this.errors.username = "Username is required.";
      if (!this.password) this.errors.password = "Password is required.";
      if (!this.firstname) this.errors.firstname = "Firstname is required.";
      if (!this.lastname) this.errors.lastname = "Lastname is required.";
      if (!this.phone) this.errors.phone = "Phone number is required.";
      if (!this.birthday) this.errors.birthday = "Birthday is required.";
      if (!this.gender) this.errors.gender = "Gender is required.";
      if (!this.email) this.errors.email = "Email is required.";
      if (!this.IDcardnumber)
        this.errors.IDcardnumber = "ID card number is required.";
      if (!this.idCardBack)
        this.errors.idCardBack = "ID card number back is required.";

      return Object.keys(this.errors).length === 0;
    },
    submitData() {
      if (!this.validateForm()) {
        return;
      }

      const formData = {
        um_nickname: this.nickname,
        um_username: this.username,
        um_password: this.password,
        um_firstname: this.firstname,
        um_lastname: this.lastname,
        um_phone: this.phone,
        um_reccommend: "",
        um_status: true,
        um_birthday: this.birthday,
        um_gender: this.gender,
        um_idcard_number: this.IDcardnumber,
        um_idcard_number_back: this.idCardBack,
        um_email: this.email,
        um_created_at: "0001-01-01T00:00:00Z",
        um_updated_at: "0001-01-01T00:00:00Z",
      };

      axios
        .post(
          "https://dev-api-gamiqo.pirate168.com/api/v1/users/register",
          formData
        )
        .then((response) => {
          console.log("Response:", response.data);
          alert("Registration successful!");
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            const errorData = error.response.data;
            this.errors = {}; // Clear previous errors

            if (errorData.code === 50001) {
              alert(
                "Failed to register. Please check your input and try again."
              );
            } else if (errorData.code === 3001) {
              alert("พบข้อมูลผู้ใช้ซ้ำ กรุณาลองใหม่อีกครั้ง");
            } else if (errorData.code === 3012) {
              alert(
                "พบเลขบัตรประชาชนซ้ำ ไม่สามารถอัพเดตได้กรุณาเปลี่ยนเลขบัตรประชาชน"
              );
            } else if (errorData.code === 3013) {
              alert("เบอร์นี้มีผู้ใช้งานแล้ว");
            } else if (errorData.code === 3011) {
              alert("พบอีเมลซ้ำ ไม่สามารถอัพเดตได้กรุณาเปลี่ยนอีเมล");
            } else if (errorData.code === 50002) {
              alert("กรุณากรอกเบอร์โทรให้ตรงตามรูปแบบ");
            } else {
              alert(
                "Failed to register. Please check your input and try again."
              );
            }
          } else {
            console.error("Error:", error.message);
            alert("Failed to register. Please check your input and try again.");
          }
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
