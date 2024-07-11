<template>
  <div class="M-Create-Backgroud Profile custom-regis">
    <div class="navtabs">
      <div class="form-create">
        <div style="width: 100%">
          <div class="font-form-pak">Register</div>
          <div class="dis-input">
            <div style="width: 49%">
              <label for="username">
                Username <span id="dotstyle">*</span>
              </label>
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
              <div class="password-container">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  v-model="password"
                  placeholder="Enter your password"
                />
                <button @click="togglePasswordVisibility" type="button">
                  {{ showPassword ? "Hide" : "Show" }}
                </button>
              </div>
              <span v-if="errors.password" class="error">{{
                errors.password
              }}</span>
            </div>
          </div>
          <div class="dis-input">
            <div style="width: 49%">
              <label for="phone"> Phone <span id="dotstyle">*</span> </label>
              <input
                type="text"
                id="phone"
                v-model="phone"
                placeholder="Enter your phone number"
              />
              <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
            </div>
            <div style="width: 49%">
              <label for="email"> Email <span id="dotstyle">*</span> </label>
              <input
                type="text"
                id="email"
                v-model="email"
                placeholder="Enter your email"
              />
              <span v-if="errors.email" class="error">{{ errors.email }}</span>
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
export default {
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      email: "",
      errors: {},
      showPassword: false, // ตัวแปรที่ใช้ในการแสดง/ซ่อนรหัสผ่าน
      originalPassword: "", // ตัวแปรที่ใช้เก็บรหัสผ่านเดิม
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.$validate.username(this.username)) {
        this.errors.username =
          "Username must be alphanumeric, 8-30 characters.";
      }
      if (!this.$validate.password(this.password)) {
        this.errors.password =
          "Password must be alphanumeric, 8-30 characters.";
      }
      if (!this.$validate.phone(this.phone)) {
        this.errors.phone = "Invalid phone number.";
      }
      if (!this.$validate.email(this.email)) {
        this.errors.email = "Invalid email address.";
      }

      return Object.keys(this.errors).length === 0;
    },
    async submitData() {
      if (!this.validateForm()) {
        return;
      }

      const formData = {
        username: this.username,
        password: this.password,
        phone: this.phone,
        email: this.email,
      };

      try {
        const response = await this.$axios.post("/users/register", formData);
        console.log("Response:", response.data);
        alert("การลงทะเบียนสำเร็จ!");
      } catch (error) {
        if (error.response && error.response.data) {
          this.$handleError(error);
        }
      }
    },

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>



