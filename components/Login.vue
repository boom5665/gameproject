<template>
  <div class="M-Create-Backgroud Profile">
    <div class="navtabs">
      <div class="form-create">
        <div class="font-form-pak">Login</div>
        <div style="display: flex; flex-direction: column; align-items: center">
          <div class="dis-input">
            <div style="width: 100%">
              <input
                type="text"
                id="phone"
                v-model="Emailphone"
                placeholder="Email or phone number"
              />
            </div>
          </div>
          <div class="dis-input">
            <div style="width: 100%">
              <input
                type="password"
                id="password"
                v-model="Password"
                placeholder="Password"
              />
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
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Emailphone: "", // เก็บค่า Email หรือเบอร์โทรศัพท์
      Password: "", // เก็บค่า Password
    };
  },

  methods: {
    submitData() {
      const formData = {
        email: this.Emailphone,
        password: this.Password,
      };

      axios
        .post("https://example.com/api/login", formData) // เปลี่ยน URL นี้เป็น URL จริงของ API ที่ใช้
        .then((response) => {
          console.log("Response:", response.data);
          alert("Login successful!");
          // เพิ่มการนำไปยังหน้าต่อไปหรือทำตามที่ต้องการหลังจาก Login สำเร็จ
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to login.");
        });
    },
  },
};
</script>

<style scoped>
/* สไตล์ CSS ของคอมโพเนนต์ที่คุณใช้ */
</style>

<style lang="scss" scoped>
.button-pro-edit {
  border-radius: var(--Border-radius-8, 8px);
  border: 1px solid var(--Color-Primary-Pueple-500, #5c25f2) !important;
  background: var(--Color-Secondary-500, #ffeb3b) !important;
  color: var(--Color-Primary-Pueple-500, #5c25f2) !important;
}
.M-Create-Backgroud .font-top-myshop {
  font-size: 18px;
  color: var(--color-black-white-700, #bababa);
  width: 1000px;
}
.M-Create-Backgroud .form-create {
  width: 1000px;
  align-items: center;
}
.font-proL-top {
  color: #ffeb3b;
  font-size: 24px !important;
}
.img-safe {
  /* padding-right: 8px; */
  top: -4px;
  position: relative;
}
.button-pro-edit {
  width: 100%;
}
</style>
