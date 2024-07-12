<template>
  <div class="M-Create-Backgroud">
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
              <div style="width: 100%; margin-bottom: 10px">
                <input
                  type="password"
                  id="Password"
                  v-model="Password"
                  placeholder="รหัสผ่าน"
                />
                <span v-if="errors.Password" class="error">
                  {{ errors.Password }}
                </span>
              </div>
              <div style="width: 100%">
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
      const formData = {
        password: this.Password,
      };

      try {
        const response = await axios.post("/users/reset-password", formData);
        console.log("Response:", response.data);
        alert("เปลี่ยนรหัสผ่านสำเร็จ");

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
          this.errors.general = "การเปลี่ยนรหัสผ่านไม่สำเร็จ โปรดตรวจสอบข้อมูลที่คุณป้อนแล้วลองอีกครั้ง";
        }
        alert(this.errors.general);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

