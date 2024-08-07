<template>
  <div style="width: 100%" class="Shop">
    <div class="markettop-toppage">
      <div class="dis-flex" style="align-items: flex-start">
        <div style="width: 60%" class="box-pay">
          <Stepper :steps="steps" :currentStep="currentStep" />
          <button @click="nextStep">ถัดไป</button>
          <button @click="showAlert">Show Alert</button>
          <div
            v-for="(category, index) in categorizedProducts"
            :key="index"
            style="width: 100%"
          >
            <div class="top-head">{{ category.name }}</div>
            <div
              v-for="(product, index) in category.items"
              :key="index"
              class="shop-item"
            >
              <div>
                <img
                  class="item-img"
                  :src="product.imageUrl"
                  alt="Product Image"
                />
              </div>
              <div>
                <div>{{ product.description }}</div>
                <div>{{ product.category }}</div>
              </div>
              <div>
                <div>X {{ product.quantity }}</div>
              </div>
              <div>
                <div>฿{{ product.price.toLocaleString() }}</div>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 40%">
          <div class="box-time">
            <div>
              <div style="margin: 15px 5px">
                โปรดชำระเงินภายใน {{ timeRemaining }}
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
                  <div>฿{{ totalAmount.toLocaleString() }}</div>
                </div>
                <div class="dis-btween font-head-bottom">
                  <div>ยอดชำระเงินทั้งหมด</div>
                  <div>฿{{ totalAmount.toLocaleString() }}</div>
                </div>
                <div class="bottom-y">ชำระเงิน</div>
                <div class="bottom-red">ยกเลิกการจอง</div>
              </div>
            </div>
          </div>
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
      currentStep: 0,
      steps: [
        { label: "คำสั่งซื้อใหม่", date: "10/07/24", time: "18:00" },
        { label: "ชำระเงินแล้ว", date: "--/--/--", time: "--:--" },
        { label: "ได้รับสินค้า", date: "--/--/--", time: "--:--" },
        { label: "ยืนยันสินค้า", date: "--/--/--", time: "--:--" },
        { label: "รีวิวสินค้า", date: "--/--/--", time: "--:--" },
      ],
      categorizedProducts: [
        {
          name: "Razer Gold",
          items: [
            {
              name: "Razer Gold",
              imageUrl: require("@/assets/image/cardgold.png"),
              description: "Top up Razer Gold",
              category: "Digital",
              quantity: 1,
              price: 50000,
            },
            {
              name: "Razer Gold",
              imageUrl: require("@/assets/image/cardgold.png"),
              description: "Top up Razer Gold",
              category: "Digital",
              quantity: 3,
              price: 50000,
            },
          ],
        },
      ],
      timer: 300, // 5 นาทีในหน่วยวินาที
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
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
    timeRemaining() {
      return `${Math.floor(this.timer / 60)} นาที`;
    },
  },
  methods: {
    showAlert() {
      this.$swal.fire({
        title: "Hello World!",
        text: "This is a SweetAlert2 alert!",
        icon: "success",
        confirmButtonText: "OK",
      });
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
  },
  mounted() {
    this.startTimer();
  },
};
</script>

<style scoped>
/* เพิ่มสไตล์ตามต้องการ */
.bottom-red {
  width: 100%;
  height: 40px;
  padding: var(--Spacing-space-8, 8px) var(--Spacing-space-12, 12px);
  border-radius: var(--Border-radius-8, 8px);
  /* border: 1px solid var(--Color-Primary-Pueple-500, #5c25f2); */
  color: #fff;
  display: flex;
  justify-content: center;
  margin: 10px 0px;
  background: var(--Color-Red-500, #d00);
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
  color: white;
  padding: 5px;
  margin: 10px;
}
</style>
