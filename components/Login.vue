<template>
  <div class="M-Create-Backgroud">
    <div class="custom-login">
      <div class="navtabs">
        <div class="form-create">
          <div class="font-form-pak">เข้าสู่ระบบ</div>
          <div class="dis-input-box">
            <form>
              <div class="dis-input">
                <div class="w-input">
                  <input
                    type="text"
                    id="Emailphone"
                    v-model="Emailphone"
                    placeholder="ชื่อผู้ใช้"
                  />
                  <span v-if="errors.Emailphone" class="error">
                    {{ errors.Emailphone }}
                  </span>
                </div>
              </div>
              <div class="dis-input">
                <div class="w-input">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    id="Password"
                    v-model="Password"
                    placeholder="รหัสผ่าน"
                  />
                  <!-- <button @click="togglePasswordVisibility" type="button">
                  {{ showPassword ? "Hide" : "Show" }}
                </button> -->
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
                เข้าสู่ระบบ
              </button>
            </form>
            <Loader :isLoading="isLoading" />
            <div style="margin: 10px">
              <Nuxt-link class="text-profile" to="/LogForget" target="_self">
                <span class="font-top-myshop">ลืมรหัสผ่าน ? </span></Nuxt-link
              >
            </div>
            <div style="font-size: 18px">
              ยังไม่ได้เป็นสมาชิกใช่ไหม?
              <Nuxt-link class="text-profile" to="/LogRegister" target="_self">
                <span class="font-re"> สมัครที่นี่ </span></Nuxt-link
              >
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
      Emailphone: "",
      Password: "",
      errors: {},
      showPassword: false,
      isLoading: false, // ตัวแปรที่ใช้แสดง loader
    };
  },

  methods: {
    validateForm() {
      this.errors = {};

      if (!this.Emailphone) {
        this.errors.Emailphone = "กรุณากรอกชื่อผู้ใช้";
      }
      if (!this.Password) {
        this.errors.Password = "กรุณากรอกรหัสผ่าน.";
      }

      return Object.keys(this.errors).length === 0;
    },

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },

    async submitData() {
      if (!this.validateForm()) {
        return; // ถ้าฟอร์มไม่ถูกต้อง ให้หยุดการทำงาน
      }

      this.isLoading = true; // แสดง loader

      const formData = {
        username: this.Emailphone,
        password: this.Password,
      };

      try {
        const response = await this.$axios.post("/users/login", formData);
        const token = response.data.data?.token;
        if (token) {
          // บันทึก token ลงใน localStorage
          localStorage.setItem("authToken", token);
          localStorage.setItem("login", true);
          localStorage.setItem("nologin", false);

          // อัปเดต Vuex store
          await this.$store.dispatch("setAuthToken", token);
          await this.$store.dispatch("setLogin", true);
          await this.$store.dispatch("setNologin", false);

          console.log("Login state updated:", {
            login: this.$store.state.login,
            nologin: this.$store.state.nologin,
          });

          this.$handleResponse(response);
        }
      } catch (error) {
        this.$handleError(error);
      } finally {
        this.isLoading = false; // ซ่อน loader
      }
    },
  },
};
</script>



<style lang="scss" scoped>
.w-input {
  width: 100%;
  height: 50px;
}

.submit {
  margin-top: 5px;
}
</style>
