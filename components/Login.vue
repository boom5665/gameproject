<template>
  <div class="M-Create-Backgroud">
    <div class="custom-login">
      <div class="navtabs">
        <div class="form-create">
          <div class="font-form-pak">เข้าสู่ระบบ</div>
          <div class="dis-input-box">
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
            <Loader :isLoading="isLoading" />
            <button
              type="submit"
              class="submit button-pro-edit"
              @click.prevent="submitData"
            >
              เข้าสู่ระบบ
            </button>
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
        return;
      }
      this.isLoading = true; // แสดง loader
      localStorage.clear(); // ลบข้อมูลทั้งหมดใน localStorage

      const formData = {
        username: this.Emailphone,
        password: this.Password,
      };

      try {
        const response = await this.$axios.post("/users/login", formData);
        console.log("Response:", response.data);

        const token = response.data.data.token;
        if (token) {
          localStorage.setItem("authToken", token); // เก็บ token ใน localStorage
          console.log("Stored Token:", token);
          alert("เข้าระบบสำเร็จ");
          this.$router.push("/"); // รีไดเรคไปยังหน้า index
          this.isLoading = false; // ซ่อน loader
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
              ? "ไม่พบข้อมูล ล็อกอิน"
              : errorData.msg.th || "ไม่พบข้อมูล ล็อกอิน";
        } else {
          this.errors.general =
            "ลงทะเบียนไม่สำเร็จ โปรดตรวจสอบข้อมูลที่คุณป้อนแล้วลองอีกครั้ง";
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
  height: 50px;
}

.submit {
  margin-top: 5px;
}
</style>
