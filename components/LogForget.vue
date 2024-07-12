<template>
  <div class="M-Create-Backgroud">
    <div class="custom-login">
      <div class="navtabs forget">
        <div class="font-top-myshop">
          <Nuxt-link class="text-profile" to="/Login" target="_self">
            <span class="font-top-myshop">Login &nbsp; / &nbsp;</span>
          </Nuxt-link>
          <Nuxt-link class="text-profile" to="/LogForget" target="_self">
            <span class="font-proL-top">Forgot password</span>
          </Nuxt-link>
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
                  id="email"
                  v-model="email"
                  placeholder="กรุณรากรอกยืนยันอีเมล"
                />
                <span v-if="errors.email" class="error">
                  {{ errors.email }}
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
      email: "", // เก็บค่า Email หรือเบอร์โทรศัพท์
      errors: {}, // เก็บข้อผิดพลาด
    };
  },

  methods: {
    validateForm() {
      this.errors = {};

      if (!this.$validate.email(this.email)) {
        this.errors.email = "กรุณากรอกอีเมลใหม่";
      }

      return Object.keys(this.errors).length === 0;
    },

    async submitData() {
      if (!this.validateForm()) {
        return;
      }

      const formData = {
        email: this.email,
      };

      try {
        const response = await this.$axios.post(
          "/users/forgot-password",
          formData
        );
        console.log("Response:", response.data);

        if (response.data) {
          alert("ส่งยืนยันอีเมลสำเร็จ");
          this.$router.push("/LogCheng"); // รีไดเรคไปยังหน้า index
        } else {
          alert("ไม่พบข้อมูล token");
        }
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
        this.errors = {};

        if (error.response && error.response.data) {
          const errorData = error.response.data;
          this.errors.general =
            errorData.code === 1005
              ? "ส่งยืนยันอีเมลไม่สำเร็จ"
              : errorData.msg.th || "ส่งยืนยันอีเมลไม่สำเร็จ";
        } else {
          this.errors.general =
            "ส่งยืนยันอีเมลไม่สำเร็จ โปรดตรวจสอบข้อมูลที่คุณป้อนแล้วลองอีกครั้ง";
        }
        alert(this.errors.general);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* ใส่สไตล์ที่ต้องการที่นี่ */
</style>
