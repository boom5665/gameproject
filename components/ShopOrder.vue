<template>
  <div>
    <div>
      <input v-model="searchQuery" placeholder="ค้นหาสินค้า..." />
    </div>
    <div class="order-list">
      <!-- เพิ่ม input สำหรับการค้นหา -->

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
            <td><img :src="item.image" alt="Product Image" /></td>
            <td>{{ item.name }}</td>
            <td>
              <span class="status pending">{{ item.status }}</span>
            </td>
            <td>
              <span class="color-am">{{ item.amount }}</span>
            </td>
            <td>{{ item.date }}</td>
            <td><button class="check-button">ตรวจสอบ</button></td>
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
</template>

<script setup>
import { ref, computed } from "vue"; // นำเข้า ref และ computed จาก Vue

const props = defineProps({
  orderItems: {
    type: Array,
    required: true,
  },
  purchasedItems: {
    type: Array,
    required: true,
  },
});

// ใช้ ref เพื่อจัดการค่า searchQuery
const searchQuery = ref("");

// คำนวณการกรองรายการคำสั่งซื้อ
const filteredOrderItems = computed(() => {
  if (!searchQuery.value) return props.orderItems;

  const query = searchQuery.value.toLowerCase();
  return props.orderItems.filter((item) =>
    item.name.toLowerCase().includes(query)
  );
});
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
