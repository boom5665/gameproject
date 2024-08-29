<template>
  <div>
    <!-- ส่วนค้นหาสินค้า -->
    <div v-if="!showDetail">
      <div>
        <input v-model="searchQuery" placeholder="ค้นหาสินค้า..." />
      </div>
      <div class="order-list">
        <div>รายการคำสั่งซื้อ</div>
        <table class="order-table">
          <thead>
            <tr>
              <th>ภาพสินค้า</th>
              <th>ชื่อสินค้า</th>
              <th>สถานะ</th>
              <th>ยอด</th>
              <th>เวลา/วันที่</th>
              <th>ตรวจสอบรายการ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredOrderItems" :key="item.id">
              <td><img :src="item.img" alt="Product Image" /></td>
              <td>{{ item.name }}</td>
              <td>
                <span class="status pending">{{ item.status }}</span>
              </td>
              <td>
                <span class="color-am">{{ item.amount }}</span>
              </td>
              <td>{{ item.date }}</td>
              <td>
                <button class="check-button" @click="viewDetail(item.id, item)">
                  ตรวจสอบ
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div>รายการที่ยืนยันแล้ว</div>
        <table class="order-table">
          <thead class="thead-sale">
            <tr>
              <th>ภาพสินค้า</th>
              <th>ชื่อสินค้า</th>
              <th>สถานะ</th>
              <th>ยอด</th>
              <th>เวลา/วันที่</th>
            </tr>
          </thead>
          <tbody class="thead-saletb">
            <tr v-for="purchasedItem in purchasedItems" :key="purchasedItem.id">
              <td><img :src="purchasedItem.image" alt="Product Image" /></td>
              <td>{{ purchasedItem.name }}</td>
              <td>{{ purchasedItem.status }}</td>
              <td>
                {{ purchasedItem.amount }}
              </td>
              <td>{{ purchasedItem.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ส่วนแสดงรายละเอียดสินค้า -->
    <div v-else>
      <button @click="showDetail = false">กลับ</button>
      <div>
        <p>ข้อมูลสินค้า ID: {{ selectedItemId }}</p>
        <h2>รายละเอียดสินค้า</h2>
        <p>
          <strong>ชื่อสินค้า:</strong>
          {{ getSelectedItem.name || "ไม่มีข้อมูล" }}
        </p>
        <p>
          <strong>ราคา:</strong> {{ getSelectedItem.amount || "ไม่มีข้อมูล" }}
        </p>
        <p>
          <strong>สถานะ:</strong> {{ getSelectedItem.status || "ไม่มีข้อมูล" }}
        </p>
        <p>
          <strong>วันที่สร้าง:</strong>
          {{ getSelectedItem.date || "ไม่มีข้อมูล" }}
        </p>
        <img :src="getSelectedItem.img || ''" alt="Product Image" />
        <button class="check-button" @click="confirmpay">ยืนยันสินค้า</button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  props: {
    orderItems: {
      type: Array,
      required: true,
    },
    purchasedItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: "",
      showDetail: false,
      selectedItemId: null,
    };
  },
  computed: {
    filteredOrderItems() {
      if (!this.searchQuery) return this.orderItems;
      const query = this.searchQuery.toLowerCase();
      return this.orderItems.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
    },
    getSelectedItem() {
      const item = this.orderItems.find(
        (item) => item.id === this.selectedItemId
      );
      return item || {};
    },
  },
  methods: {
    viewDetail(id) {
      console.log("Selected Item ID:", id); // แสดง ID ที่ถูกเลือก
      this.selectedItemId = id;
      this.showDetail = true;
    },
    async confirmpay() {
      // แสดง SweetAlert2 ด้วยข้อความสำเร็จ
      const result = await Swal.fire({
        title: "ยืนยันแจ้งชำระเงิน",
        text: "ยืนยันหลักฐานการชำระเงิน", // ใช้ `text` แทน `body`
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "แก้ไข",
      });

      // หากผู้ใช้กดปุ่ม "ยืนยัน"
      if (result.isConfirmed) {
        this.$router.push("/ShopDetail"); // รีไดเรคไปยังหน้า ShopDetail
        this.currentStep = 4;
      }
      // หากผู้ใช้กดปุ่ม "ยกเลิก"
      // ไม่ต้องทำอะไรจะยังคงอยู่หน้าเดิม
    },
  },
};
</script>





<style scoped>
.M-Create-Backgroud .container input {
  position: relative;
  opacity: 1;
  cursor: pointer;
  height: 30px;
  width: 100%;
  border-radius: 10px;
  padding: 0px 20px;
  font-size: 18px;
}
.thead-sale {
  background-color: #3f3f3f !important;
}
.thead-saletb {
  background-color: #bababa !important;
  color: #3f3f3f !important;
}
.color-am {
  color: #fff;
}
.order-list {
  margin-top: 20px;
}
.order-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
.order-table th,
.order-table td {
  padding: 10px;
  text-align: center;
  font-size: 12px;
}
.order-table thead {
  background-color: #6f3aff;
  color: white;
  font-size: 12px;
}
.order-table tbody {
  background-color: #3c3b4b;
  color: #848484;
}
/* .order-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
} */

.order-table tbody td img {
  width: 48px;
  height: 48px;
}
.status.pending {
  color: #f7c500; /* สีเหลือง */
}
.status.completed {
  color: #28a745; /* สีเขียว */
}
.check-button {
  padding: 5px 10px;
  cursor: pointer;
  border-radius: var(--Border-radius-8, 8px);
  border: 1px solid var(--Color-Primary-Pueple-500, #5c25f2);
  background: var(--Color-Secondary-500, #ffeb3b);
}
.check-button:hover {
  background-color: #d7a400; /* สีเหลืองเข้มขึ้น */
}
</style>
