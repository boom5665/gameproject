<template>
  <div style="width: 100%" class="Shop">
    <div class="markettop-toppage">
      <div class="dis-flex" style="align-items: flex-start">
        <div style="width: 100%" class="box-pay">
          <Stepper :steps="steps" :currentStep="currentStep" />
          <!-- <button @click="cancelpay">ถัดไป</button> -->
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

    };
  },
  computed: {
  },
  methods: {
    async confirmpay() {
      // แสดง SweetAlert2 ด้วยข้อความสำเร็จ
      const result = await this.$swal.fire({
        title: "ทำการซื้อสำเร็จ",
        icon: "success",
        confirmButtonText: "OK",
      });
      // รีไดเรคไปยังหน้า index หลังจากกด "OK"
      if (result.isConfirmed) {
        this.$router.push("/ShopQR"); // รีไดเรคไปยังหน้า index
      }
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
  mounted() {
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
