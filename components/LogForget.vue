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
              <div class="w-input">
                <input
                  type="text"
                  id="email"
                  v-model="email"
                  placeholder="กรุณากรอกอีเมล"
                />
                <span v-if="errors.email" class="error">
                  {{ errors.email }}
                </span>
              </div>
            </div>
            <!-- <button @click="openModal">เปิด Modal</button> -->
            <Modal :isVisible="isModalVisible" @close="closeModal">
              <div class="font-form-myshop">ส่งอีเมลเรียบร้อย</div>
              <div class="padding-contentmodal">
                กรุณาเข้าไปเช็คที่อีเมลของท่าน เพื่อรีเซ็ตรหัสผ่าน
              </div>
              <button class="button-pro-edit" @click="closeModal">ตกลง</button>
            </Modal>

            <Loader :isLoading="isLoading" />

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
import Modal from "~/components/Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      email: "", // เก็บค่า Email หรือเบอร์โทรศัพท์
      errors: {}, // เก็บข้อผิดพลาด
      isModalVisible: false,
      isLoading: false, // ตัวแปรที่ใช้แสดง loader
    };
  },

  methods: {
    // openModal() {
    //   this.isModalVisible = true;
    // },
    closeModal() {
      this.isModalVisible = false;
      this.$router.push("/login");
    },
    // goToNextPage() {
    //   this.isModalVisible = false;
    //   this.$router.push("/login"); // เปลี่ยนเป็นเส้นทางที่ต้องการ
    // },
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
      this.isLoading = true; // แสดง loader
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
          this.isModalVisible = true;
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
              ? "ส่งยืนยันอีเมลไม่สำเร็จ"
              : errorData.msg.th || "ส่งยืนยันอีเมลไม่สำเร็จ";
        } else {
          this.errors.general =
            "ส่งยืนยันอีเมลไม่สำเร็จ โปรดตรวจสอบข้อมูลที่คุณป้อนแล้วลองอีกครั้ง";
        }
        alert(this.errors.general);
        this.isLoading = false; // ซ่อน loader
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* ใส่สไตล์ที่ต้องการที่นี่ */
.w-input {
  width: 100%;
  height: 80px;
}
.M-Create-Backgroud .font-form-myshop {
  font-size: 16px;
  color: #5c25f2;
  text-align: left;
  width: 100%;
}
.padding-contentmodal {
  padding: 20px 0px;
}
</style>
