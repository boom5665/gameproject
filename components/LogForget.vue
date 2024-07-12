<template>
  <div class="M-Create-Backgroud">
    <div class="custom-login">
      <div class="navtabs">
        <div class="font-top-myshop">
          <Nuxt-link class="text-profile" to="/Login" target="_self">
            <span class="font-top-myshop"
              >Login &nbsp; / &nbsp;</span
            ></Nuxt-link
          >
          <Nuxt-link class="text-profile" to="/LogForget" target="_self"
            ><span class="font-proL-top">Forgot password</span></Nuxt-link
          >
        </div>
        <div class="form-create">
          <div>
            <img src="~/assets/image/forget.png" class="img-recom" />
          </div>

          <div class="dis-input-box">
            <div class="dis-input">
              <div style="width: 100%">
                <input
                  type="text"
                  id="Emailphone"
                  v-model="Emailphone"
                  placeholder="Email or phone number"
                />
                <span v-if="errors.Emailphone" class="error">
                  {{ errors.Emailphone }}
                </span>
              </div>
            </div>

            <button
              type="submit"
              class="submit button-pro-edit"
              @click.prevent="submitData"
            >
              ส่ง
            </button>
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
      Emailphone: "", // เก็บค่า Email หรือเบอร์โทรศัพท์
      Password: "", // เก็บค่า Password
      errors: {},
      showPassword: false, // ตัวแปรที่ใช้ในการแสดง/ซ่อนรหัสผ่าน
    };
  },

  methods: {
    validateForm() {
      this.errors = {};

      if (!this.Emailphone) {
        this.errors.Emailphone = "Email or phone number is required.";
      }

      return Object.keys(this.errors).length === 0;
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async submitData() {
      if (!this.validateForm()) {
        return;
      }
      const formData = {
        um_username: this.Emailphone,
      };

      try {
        const response = await axios.post("/users/login", formData);
        console.log("Response:", response.data);
        const token = response.data.token; // สมมติว่า token อยู่ใน response.data.token
        localStorage.setItem("authToken", token); // เก็บ token ใน localStorage
        alert("เข้าระบบสำเร็จ");

        // ดึง token จาก localStorage และแสดงใน console
        const storedToken = localStorage.getItem("authToken");
        console.log("Stored Token:", storedToken);

        // เพิ่มการนำไปยังหน้าต่อไปหรือทำตามที่ต้องการหลังจาก Login สำเร็จ
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
        if (error.response && error.response.data) {
          const errorData = error.response.data;
          this.errors = {}; // Clear previous errors

          if (errorData.code === 1005) {
            this.errors.general = "ไม่พบข้อมูล ล็อกอิน";
          } else {
            this.errors.general = errorData.msg.th || "ไม่พบข้อมูล ล็อกอิน";
          }
        } else {
          this.errors.general =
            "Failed to login. Please check your input and try again.";
        }
        alert(this.errors.general);
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.font-top-myshop {
  font-size: 18px;
  color: #bababa !important;
}
.form-create {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px 0px 0px 0px;
}
 .dis-input-box {
    position: relative;
    transform: translate(120px, 5px);
}
</style>
