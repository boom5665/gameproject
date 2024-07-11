<template>
  <div class="M-Create-Backgroud">
    <div class=" custom-login">
          <div class="navtabs">
      <div class="form-create">
        <div class="font-form-pak">Login</div>
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
          <div class="dis-input">
            <div style="width: 100%">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="Password"
                v-model="Password"
                placeholder="Password"
              />
              <button @click="togglePasswordVisibility" type="button">
                {{ showPassword ? "Hide" : "Show" }}
              </button>
              <span v-if="errors.Password" class="error">
                {{ errors.Password }}
              </span>
            </div>
          </div>
          <button
            type="submit"
            class="submit button-pro-edit"
            @click.prevent="submitData"
          >
            บันทึก
          </button>
          <div>
            <a href="#">Forgot password?</a>
          </div>
          <div>
            <a href="#">ยังไม่ได้เป็นสมาชิกใช่ไหม? สมัครที่นี่</a>
          </div>
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
      if (!this.Password) {
        this.errors.Password = "Password is required.";
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
        um_password: this.Password,
      };

      try {
        const response = await axios.post(
          "https://dev-api-gamiqo.pirate168.com/api/v1/users/login",
          formData
        );
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

</style>
