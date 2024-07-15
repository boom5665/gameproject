<template>
  <div class="M-Create-Backgroud Profile custom-regis">
    <div class="custom-login">
      <div class="navtabs forget">
        <div class="font-top-myshop">
          <Nuxt-link class="text-profile" to="/Login" target="_self">
            <span class="font-top-myshop">Login &nbsp; / &nbsp;</span>
          </Nuxt-link>
          <Nuxt-link class="text-profile" to="/LogForget" target="_self">
            <span class="font-proL-top">Confirm Password</span>
          </Nuxt-link>
        </div>
        <div class="form-create">
          <div>
            <img src="~/assets/image/forget.png" class="img-recom" />
          </div>

          <div class="dis-input-box">
            <div class="dis-input">
              <div class="w-input">
                <div class="password-container">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    id="Password"
                    v-model="Password"
                    placeholder="กรอกรหัสผ่าน"
                  />
                  <div
                    @click="togglePasswordVisibility"
                    type="button"
                    class="toggle-password-btn"
                  >
                    <img
                      :src="
                        showPassword
                          ? require('~/assets/image/eye.png')
                          : require('~/assets/image/eyeclose.png')
                      "
                      alt="Toggle Password Visibility"
                    />
                  </div>
                </div>
                <span v-if="errors.Password" class="error">{{
                  errors.Password
                }}</span>
              </div>
              <div class="w-input">
                <input
                  type="password"
                  id="Passwordconfirm"
                  v-model="Passwordconfirm"
                  placeholder="ยืนยันรหัสผ่าน"
                />
                <span v-if="errors.Passwordconfirm" class="error">
                  {{ errors.Passwordconfirm }}
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
      Password: "", // เก็บค่ารหัสผ่าน
      Passwordconfirm: "", // เก็บค่ารหัสผ่านยืนยัน
      errors: {},
      showPassword: false, // ตัวแปรที่ใช้ในการแสดง/ซ่อนรหัสผ่าน
      rpsCode: "ABC", // เก็บค่ารหัสผ่าน
    };
  },

  methods: {
    validateForm() {
      this.errors = {};
      if (!this.Password) {
        this.errors.Password = "กรุณาใส่รหัสผ่านใหม่";
      }
      if (!this.Passwordconfirm) {
        this.errors.Passwordconfirm = "กรุณาใส่รหัสผ่านยืนยัน";
      }
      if (this.Password !== this.Passwordconfirm) {
        this.errors.Passwordconfirm = "รหัสผ่านไม่ตรงกัน";
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
      // const rpsCode = this.$route.query.rps_code; // ดึงค่า rps_code จาก URL
      console.log("RPS Code:", this.rpsCode);

      const formData = {
        new_password: this.Password,
        rps_verify_code: this.rpsCode,
      };

      try {
        const response = await this.$axios.post(
          "/users/forgot-password/reset",
          formData
        );
        console.log("Response:", response.data);
        alert("เปลี่ยนรหัสผ่านสำเร็จ");

        if (this.rpsCode) {
          this.$router.push("/"); // รีไดเรคไปยังหน้า index
          this.isLoading = false; // ซ่อน loader
        } else {
          alert("เปลี่ยนรหัสผ่านไม่สำเร็จ");
        }

        // นำไปยังหน้าต่อไปหรือทำตามที่ต้องการหลังจากเปลี่ยนรหัสผ่านสำเร็จ
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
        if (error.response && error.response.data) {
          const errorData = error.response.data;
          this.errors = {}; // Clear previous errors

          this.errors.general = errorData.msg || "เกิดข้อผิดพลาด";
        } else {
          this.errors.general =
            "การเปลี่ยนรหัสผ่านไม่สำเร็จ โปรดตรวจสอบข้อมูลที่คุณป้อนแล้วลองอีกครั้ง";
        }
        alert(this.errors.general);

        this.isLoading = false; // ซ่อน loader
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.w-input {
  width: 100%;
  height: 65px;
}

</style>

