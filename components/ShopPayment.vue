<template>
  <div class="Shop width-hunded">
    <div
      class="markettop-toppage"
      v-for="(category, index) in categorizedProducts"
      :key="index"
    >
      <div
        class="dis-flex"
        style="align-items: flex-start"
        v-for="(product, index) in category.items"
        :key="index"
      >
        <div style="width: 60%" class="box-pay">
          <Stepper :steps="steps" :currentStep="currentStep" />
          <!-- <button @click="cancelpay">ถัดไป</button> -->
          <div class="width-hunded">
            <div class="top-head">{{ category.name }}</div>
            <div class="shop-item">
              <div>
                <img
                  class="item-img"
                  :src="product.imageUrl"
                  alt="Product Image"
                />
              </div>
              <div>
                <div v-html="product.description"></div>
                <div v-html="product.category"></div>
              </div>
              <div>
                <div>X {{ product.quantity }}</div>
              </div>
              <div>
                ราคา <br />
                <div>฿{{ product.price_before.toLocaleString() }}</div>
              </div>
              <div class="order-shop">
                ส่วนลด <br />
                <div>฿{{ product.diffed.toLocaleString() }}</div>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 40%">
          <div class="box-time">
            <div>
              <div style="margin: 15px 5px; font-size: 18px">
                โปรดชำระเงินภายใน
                <div v-if="formattedTime === '0'">{{ timeRemaining }}</div>
              </div>
              <div>
                <div class="time">{{ formattedTime }}</div>
              </div>
            </div>
          </div>
          <div class="box-pay">
            <div class="box-pay-right">
              <div class="top-head">ข้อมูลการชำระเงิน</div>
              <div style="padding: 20px 30px; width: 100%">
                <div class="dis-btween">
                  <div>รวมยอดสั่งซื้อทั้งหมด</div>
                  <div>฿{{ product.price.toLocaleString() }}</div>
                  <!-- <div>฿{{ totalAmount.toLocaleString() }}</div> -->
                </div>
                <div class="dis-btween font-head-bottom">
                  <div>ยอดชำระเงินทั้งหมด</div>
                  <div>฿{{ product.price.toLocaleString() }}</div>
                  <!-- <div>฿{{ totalAmount.toLocaleString() }}</div> -->
                </div>
                <div class="bottom-y" @click="confirmpay">ชำระเงิน</div>
                <div class="bottom-red" @click="cancelpay">ยกเลิกการจอง</div>
              </div>
            </div>
          </div>
          <Loader :isLoading="isLoading" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stepper from "@/components/ShopStepper.vue";
import Swal from "sweetalert2";
export default {
  components: {
    Stepper,
  },
  data() {
    return {
      isLoading: false, // ตัวแปรที่ใช้แสดง loader
      currentStep: 1,
      steps: [
        {
          label: "คำสั่งซื้อใหม่",
          date: this.getCurrentDate(),
          time: this.getCurrentTime(),
        },
        { label: "ชำระเงินแล้ว", date: "--/--/--", time: "--:--" },

        { label: "ยืนยันสินค้า", date: "--/--/--", time: "--:--" },
      ],
      categorizedProducts: [],
      timer: 300, // 5 นาทีในหน่วยวินาที
      id: this.$route.params.id || null, // กำหนดค่าเริ่มต้นเป็น null หรือค่า id จาก URL
      codeqr: null, // เพิ่มตัวแปร codeqr ไว้ที่ data เพื่อให้เข้าถึงได้ใน confirmpay
    };
  },
  computed: {
    totalAmount() {
      return this.categorizedProducts.reduce((total, category) => {
        return (
          total +
          category.items.reduce((sum, item) => {
            return sum + item.price * item.quantity;
          }, 0)
        );
      }, 0);
    },
    formattedTime() {
      const minutes = Math.floor(this.timer / 60);
      const seconds = this.timer % 60;
      const timeOutput = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

      // นับถอยหลังหมดเวลา เปลี่ยนหน้าไปหน้าหลัก
      if (timeOutput === "0:00") this.$router.push("/");
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
    timeRemaining() {
      return `${Math.floor(this.timer / 60)} นาที`;
    },
    // goToHome() {
    //   if(formattedTime() === '0')
    //     this.$router.push('/') // Go to Home
    // },
  },
  mounted() {
    this.startTimer();
    const id = this.$route.params.id;
    const amount = this.$route.query.amount; // ดึง amount จาก URL
    const query = this.$route.query;
    const name = this.$route.query.name;
    const description = this.$route.query.description;
    const img = this.$route.query.img;
    const price_befored = this.$route.query.price_before_discount;
    const price_before = (
      parseFloat(this.$route.query.price_before_discount) || 0
    ).toLocaleString(undefined, { minimumFractionDigits: 0 });
    console.log(price_before);
    this.fetchProductData(
      id,
      amount,
      name,
      description,
      img,
      price_before,
      price_befored
    );
  },
  methods: {
    async fetchProductData(
      id,
      amount,
      name,
      description,
      img,
      price_before,
      price_befored
    ) {
      this.isLoading = true; // แสดง loader
      try {
        const idNumber = Number(id);
        const amountNumber = Number(amount);

        // ดึง token จาก cookies
        const token = this.$cookies.get("authToken");

        // ส่งคำขอเพื่อดึงข้อมูล โดยเพิ่ม header Authorization ที่มี Bearer token
        const response = await this.$axios.$post(
          "/product/reserve/create",
          {
            id: idNumber,
            amount: amountNumber, // ใช้ค่า amount ที่รับมา
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // ตรวจสอบ response และอัพเดต categorizedProducts
        console.log(response);

        if (response.data) {
          const price = response.data.price_new_total;
          const pricebefore = response.data.price_current_total;
          const timer = response.data.reserve_expire_at_list;
          const diffed = price_befored - price;
          this.codeqr = response.data.id_pay_transaction_new; // เก็บ codeqr ใน data

          // อัพเดต categorizedProducts ตามข้อมูลที่ได้รับ
          this.categorizedProducts = [
            {
              name: "รายการสินค้า", // เปลี่ยนเป็นชื่อที่ได้รับจาก API หรือกำหนดเอง
              items: [
                {
                  name: name,
                  imageUrl: img, // เปลี่ยนเป็น URL ที่ได้รับจาก API ถ้ามี
                  description: name, // เปลี่ยนเป็นคำบรรยายที่ได้รับจาก API
                  category: description, // เปลี่ยนเป็นหมวดหมู่ที่ได้รับจาก API
                  quantity: amountNumber, // ใช้ค่าที่รับมาจาก parameter

                  price:
                    price || price === 0
                      ? `${price.toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                        })}`
                      : "",
                  price_before:
                    price_before || price_before === 0
                      ? price_before.toLocaleString()
                      : "",

                  diffed:
                    diffed || diffed === 0
                      ? `${diffed.toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                        })}`
                      : "",
                },
              ],
            },
          ];
          console.log(diffed);

          this.isLoading = false; // ซ่อน loader
        }
      } catch (error) {
        this.$handleError(error);
        this.isLoading = false; // ซ่อน loader
      }
    },
    async confirmpay() {
      // แสดง SweetAlert2 ด้วยข้อความสำเร็จ

      // รีไดเรคไปยังหน้า ShopQR พร้อมพารามิเตอร์ id หลังจากกด "OK"

      this.$router.push({
        path: "/ShopQR",
        query: { codeqr: this.codeqr }, // ใช้ค่า codeqr ที่เก็บใน data
      });
    },

    getCurrentDate() {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0"); // เดือนเริ่มที่ 0
      const year = now.getFullYear().toString().slice(-2); // ปีล่าสุด 2 หลัก
      return `${day}/${month}/${year}`;
    },
    getCurrentTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      return `${hours}:${minutes}`;
    },
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep += 1;
      }
    },
    startTimer() {
      setInterval(() => {
        if (this.timer > 0) {
          this.timer--;
        }
      }, 1000);
    },

    async cancelpay() {
      // แสดง SweetAlert2 ด้วยข้อความสำเร็จ
      const result = await this.$swal.fire({
        title: "ยกเลิกการจองสำเร็จ",
        icon: "success",
        confirmButtonText: "OK",
      });
      // รีไดเรคไปยังหน้า index หลังจากกด "OK"
      if (result.isConfirmed) {
        this.$router.push("/"); // รีไดเรคไปยังหน้า index
      }
    },
  },
};
</script>

<style scoped>
/* เพิ่มสไตล์ตามต้องการ */
.order-shop {
  color: #bababa;
}
.box-time {
  margin: 10px;
  padding: var(--Spacing-space-16, 16px);
  background: #fff;
  border-radius: 5px;
  color: red;
  text-align: center;
}

.time {
  border-radius: var(--Border-radius-8, 8px);
  background: var(--Color-Primary-Pueple-500, #5c25f2);
  width: max-content;
  display: inline;
  padding: 8px 1.5vw;
  animation-name: head;
  animation-duration: 6.5s;
  animation-iteration-count: infinite;
  color: white;
  font-size: 6vw;
  font-family: monospace;
}

@keyframes head {
  0% {
    color: #ffffff;
  }

  25% {
    color: #ffffff4a;
  }

  50% {
    color: #ffffff;
  }

  65% {
    color: #ffffff4a;
  }

  80% {
    color: #ffffff;
  }

  90% {
    color: #ffffff4a;
  }

  100% {
    color: #ffffff;
  }
}
</style>
