<template>
  <div class="M-Create-Backgroud Profile custom-regis">
    <div class="navtabs">
      <div class="form-create">
        <div class="width-hunded">
          <div class="font-form-pak">สมัครสมาชิก</div>
          <form action="">
            <div class="dis-input">
              <div class="w-input">
                <label for="username">
                  ชื่อเข้าสู่ระบบ <span id="dotstyle">*</span>
                </label>
                <input
                  type="text"
                  id="username"
                  v-model="username"
                  placeholder="กรุณากรอกชื่อเข้าสู่ระบบ"
                />
                <span v-if="errors.username" class="error">{{
                  errors.username
                }}</span>
              </div>
              <div class="w-input">
                <label for="password">
                  รหัสผ่าน <span id="dotstyle">*</span>
                </label>
                <div class="password-container">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    id="password"
                    v-model="password"
                    placeholder="กรุณากรอกรหัสผ่าน"
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
                <span v-if="errors.password" class="error">{{
                  errors.password
                }}</span>
              </div>
            </div>
            <div class="dis-input">
              <div class="w-input">
                <label for="phone">
                  เบอร์โทรศัพท์ <span id="dotstyle">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  v-model="phone"
                  placeholder="กรุณากรอกเบอร์โทรศัพท์"
                />
                <span v-if="errors.phone" class="error">{{
                  errors.phone
                }}</span>
              </div>
              <div class="w-input">
                <label for="email"> อีเมล <span id="dotstyle">*</span> </label>
                <input
                  type="text"
                  id="email"
                  v-model="email"
                  placeholder="กรุณากรอกอีเมล"
                />
                <span v-if="errors.email" class="error">{{
                  errors.email
                }}</span>
              </div>
            </div>
            <button
              type="submit"
              class="submit button-pro-edit"
              @click.prevent="submitData"
            >
              สมัครสมาชิก
            </button>
          </form>
          <!-- loader -->
          <Loader :isLoading="isLoading" />

          <div style="text-align: center; margin-top: 10px; font-size: 18px">
            เป็นสมาชิกแล้ว?
            <Nuxt-link class="" to="/Login" target="_self">
              <span class="font-re"> เข้าสู่ระบบ </span>
            </Nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import Loader from "~/components/Loader.vue";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      email: "",
      errors: {},
      showPassword: false, // ตัวแปรที่ใช้ในการแสดง/ซ่อนรหัสผ่าน
      originalPassword: "", // ตัวแปรที่ใช้เก็บรหัสผ่านเดิม
      isLoading: false, // ตัวแปรที่ใช้แสดง loader
    };
  },
  watch: {
    phone(newVal) {
      // ลบช่องว่างด้านหน้าและด้านหลัง
      newVal = newVal.trim();

      // ลบอักขระที่ไม่ใช่ตัวเลข
      newVal = newVal.replace(/\D/g, "");

      // ตรวจสอบไม่ให้ใส่เกิน 10 หลัก
      if (newVal.length > 10) {
        newVal = newVal.slice(0, 10); // ตัดค่าที่เกิน
      }

      // ฟอร์แมตหมายเลขโทรศัพท์ให้มีขีดเมื่อความยาวครบ 10 หลัก
      if (newVal.length === 10) {
        this.phone = newVal.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
      } else {
        this.phone = newVal;
      }
    },
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.$validate.username(this.username)) {
        this.errors.username =
          "ชื่อเข้าสู่ระบบต้องเป็นตัวอักษรและตัวเลข 8-30 ตัวอักษร";
      }
      if (!this.$validate.password(this.password)) {
        this.errors.password =
          "รหัสผ่านต้องเป็นตัวอักษรและตัวเลข 8-30 ตัวอักษร";
      }
      if (!this.$validate.phone(this.phone)) {
        this.errors.phone = "หมายเลขโทรศัพท์ไม่ถูกต้อง";
      }
      if (!this.$validate.email(this.email)) {
        this.errors.email = "ที่อยู่อีเมลที่ไม่ถูกต้อง.";
      }

      return Object.keys(this.errors).length === 0;
    },
    async submitData() {
      if (!this.validateForm()) {
        return;
      }

      this.isLoading = true; // แสดง loader

      const formData = {
        username: this.username,
        password: this.password,
        phone: this.phone.replace(/-/g, ""),
        email: this.email,
      };

      try {
        const response = await this.$axios.post("/users/register", formData);
        console.log("Response:", response.data);
        const responseDATA = response.data;
        if (responseDATA) {
          // แสดง SweetAlert2
          const result = await this.$swal.fire({
            title: "การลงทะเบียนสำเร็จ",
            icon: "success",
            confirmButtonText: "ยืนยัน",
            showCancelButton: false, // ซ่อนปุ่ม "ยกเลิก"
          });

          // ตรวจสอบผลลัพธ์ของ SweetAlert2
          if (result.isConfirmed) {
            // การกระทำที่ต้องทำเมื่อผู้ใช้คลิก "ยืนยัน"
            console.log("User confirmed");
            // คุณอาจจะต้องการรีไดเรคหรือทำบางอย่างเพิ่มเติมที่นี่
          } else if (result.isDismissed) {
            // การกระทำที่ต้องทำเมื่อผู้ใช้คลิก "ยกเลิก" หรือปิดกล่องข้อความ
            console.log("User cancelled or dismissed the alert");
          }
        } else {
          // แสดงข้อความเตือนเมื่อไม่มีข้อมูล
          alert("ไม่พบข้อมูล การลงทะเบียนสำเร็จ");
        }

        this.$router.push("/login"); // รีไดเรคไปยังหน้า login หลังจาก 1 วินาที
        this.isLoading = false; // ซ่อน loader
      } catch (error) {
        if (error.response && error.response.data) {
          this.$handleError(error);

          this.isLoading = false; // ซ่อน loader
        }
      }
    },

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>



<style lang="scss" scoped>
.w-input {
  width: 49%;
  height: 80px;
}

.M-Create-Backgroud .form-create {
  width: 1000px;
}
</style>
