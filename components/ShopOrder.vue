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
            <!-- Loop through filteredOrderItems for items that are not confirmed -->
            <tr v-for="item in filteredOrderItems" :key="item.id">
              <td><img :src="item.img" alt="Product Image" /></td>
              <td>{{ item.name }}</td>
              <td>
                <span
                  class="status pending"
                  :style="{ color: item.status.color }"
                  >{{ item.status.text }}</span
                >
              </td>
              <td>
                <span class="color-am">{{ item.price }}</span>
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
      </div>
    </div>

    <!-- ส่วนแสดงรายละเอียดสินค้า -->
    <div v-else>
      <div>ตรวจสอบข้อมูลการซื้อ</div>
      <div class="box-content-pay">
        <div class="dis-box">
          <div>
            <img
              class="img-product"
              :src="getSelectedItem.img"
              alt="Product Image"
            />
          </div>

          <div class="width-hunded">
            <div class="width-hunded">
              <div>ชื่อสินค้า</div>
              <div class="div-box">
                {{ getSelectedItem.name || "ไม่มีข้อมูล" }}
              </div>
            </div>
            <div class="width-hunded">
              <div>รายละเอียดสินค้า</div>
              <div class="div-box">
                {{ getSelectedItem.description || "ไม่มีข้อมูล" }}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>ข้อมูลสินค้า ID {{ selectedItemId }}</div>

          <div class="dis-box">
            <div class="width-hunded">
              <div>ราคา</div>
              <div class="div-box">
                {{ getSelectedItem.price || "ไม่มีข้อมูล" }}
              </div>
            </div>
            <div class="width-hunded">
              <div>จำนวนที่ซื้อ</div>
              <div class="div-box">
                {{ getSelectedItem.amount || "ไม่มีข้อมูล" }}
              </div>
            </div>
          </div>
          <div class="dis-box">
            <div class="width-hunded">
              <div>ยอดรวม</div>
              <div class="div-box">
                {{ getSelectedItem.price || "ไม่มีข้อมูล" }}
              </div>
            </div>
          </div>
          <div class="dis-box">
            <div class="width-hunded" v-if="getSelectedItem.slipimg">
              <img
                class="img-product img-product-slip"
                :src="getSelectedItem.slipimg"
                alt="Slip Image"
              />
            </div>
            <div v-else>
              <div class="img-product img-product-slip">ไม่มีการโอน</div>
            </div>
          </div>
          <div class="dis-box">
            <div class="width-hunded">
              <div>ชื่อผู้ซื้อ</div>
              <div class="div-box">
                {{ getSelectedItem.formname || "ไม่มีข้อมูลชื่อผู้ซื้อ" }}
              </div>
            </div>
            <div class="width-hunded">
              <div>ธนาคารที่โอน</div>
              <div class="div-box">
                {{ getSelectedItem.bank || "ไม่มีข้อมูลธนาคารที่โอน" }}
              </div>
            </div>
          </div>
          <div class="dis-box">
            <div class="width-hunded">
              <div>เบอร์โทร</div>
              <div class="div-box">
                {{ getSelectedItem.phone || "ไม่มีข้อมูล" }}
              </div>
            </div>
            <div class="width-hunded">
              <div>เวลาที่โอน</div>
              <div class="div-box">
                {{ getSelectedItem.payatt || "ไม่มีข้อมูลเวลาที่โอน" }}
              </div>
            </div>
          </div>
          <div class="dis-box">
            <div class="width-hunded">
              <div>อีเมล</div>
              <div class="div-box">
                {{ getSelectedItem.email || "ไม่มีข้อมูล" }}
              </div>
            </div>
            <div class="width-hunded">
              <div>ยอดที่โอน</div>
              <div class="div-box">
                {{ getSelectedItem.money || "ไม่มีข้อมูล" }}
              </div>
            </div>
          </div>

          <Loader :isLoading="isLoading" />
        </div>
      </div>
      <div v-if="getSelectedItem.status === 'WAIT_CONFIRM'">
        <div class="dis-box" style="display: flex; width: 100%">
          <div class="width-hunded margin-right">
            <button class="check-button check-cancel" @click="concancel">
              ปฏิเสธรายการ
            </button>
          </div>
          <div class="width-hunded margin-right">
            <button class="check-button" @click="confirmpay">
              อนุมัติการชำระ
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="dis-box" style="display: flex; width: 100%">
          <div class="width-hunded margin-right">
            <button
              class="check-button check-cancel"
              @click="showDetail = false"
            >
              ย้อนกลับ
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!showDetail">
      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @page-changed="onPageChanged"
      />
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      orderItems: [], // เริ่มต้นด้วยอาร์เรย์ว่างสำหรับ orderItems
      isLoading: false, // ตัวแปรที่ใช้แสดง loader
      searchQuery: "",
      showDetail: false,
      selectedItemId: null,
      items: [], // เปลี่ยนเป็นอาร์เรย์ว่าง
      currentPage: 1,
      perPage: 5,
      page_count: 0,
    };
  },
  computed: {
    filteredOrderItems() {
      // กรองรายการที่ไม่ยืนยัน (ใช้ searchQuery ถ้ามี)
      let filteredItems = this.orderItems.filter(
        (item) => item.status !== "SUCCESS"
      );

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filteredItems = filteredItems.filter((item) =>
          item.name.toLowerCase().includes(query)
        );
      }

      return filteredItems;
    },
    filteredOrderItems2() {
      // กรองรายการที่ยืนยันแล้ว
      let confirmedItems = this.orderItems.filter(
        (item) => item.status === "SUCCESS"
      );

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        confirmedItems = confirmedItems.filter((item) =>
          item.name.toLowerCase().includes(query)
        );
      }

      return confirmedItems;
    },
    getSelectedItem() {
      const item = this.orderItems.find(
        (item) => item.id === this.selectedItemId
      );

      console.log(item); // Use console.log(item) to see the details of the selected item

      return item || {}; // Return the found item or an empty object if none is found
    },
    totalPages() {
      return this.page_count;
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.orderItems.slice(start, end);
    },
  },
  methods: {
    formatDate(date) {
      // แปลงวันที่จาก ISO string เป็นรูปแบบที่ต้องการ
      const d = new Date(date);
      const day = d.getDate().toString().padStart(2, "0");
      const month = (d.getMonth() + 1).toString().padStart(2, "0");
      const year = d.getFullYear();
      const hours = d.getHours().toString().padStart(2, "0");
      const minutes = d.getMinutes().toString().padStart(2, "0");

      return `${hours}:${minutes} / ${day}-${month}-${year}`;
    },
    async fetchdata(page = 1) {
      this.isLoading = true; // แสดง loader
      this.orderItems = [];
      try {
        const token = this.$cookies.get("authToken");
        if (!token) {
          throw new Error("Authentication token is missing");
        }

        // เรียกใช้ API แรก
        const response1 = await this.$axios.$post(
          "/payment/vendor/product/request/list/read",
          {
            id: 0,
            status: "",
            product_name: "",
            is_sort_reserve_expire_at: true,
            start_created_at: "",
            end_created_at: "",
            start_updated_at: "",
            end_updated_at: "",
            page: page,
            limit: 10,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const resalldata1 = response1.data_list || [];
        this.page_count = response1.page_count;
        console.log("Data from first API:", resalldata1);

        if (Array.isArray(resalldata1) && resalldata1.length > 0) {
          resalldata1.forEach((item) => {
            const product = item.product || {};
            const customer = item.customer || {};
            const newOrderItem = {
              amount: item.amount || null,
              slipimg: item.evidence_bank_from_slip_img || null,
              payatt: item.evidence_bank_from_pay_at || null,
              bank: item.evidence_bank_from_bank || null,
              formname: item.evidence_bank_from_name || null,
              money: item.evidence_bank_from_pay_money || null,
              id: item.id || null,
              status: this.getStatusLabel(item.status), // ใช้ฟังก์ชันเพื่อแปลสถานะ
              price: `฿${(item.price_total || 0).toFixed(2)}`,
              phone: customer.phone || null,
              email: customer.email || null,
              img: product.img || "",
              name: product.name || "Unknown",
              description: product.description || "Unknown",
              date: this.formatDate(item.created_at) || "Invalid Date",
            };

            this.orderItems.push(newOrderItem);
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message || "Something went wrong!",
        });
      } finally {
        this.isLoading = false; // ซ่อน loader
      }
    },

    getStatusLabel(status) {
      const statusLabels = {
        RESERVE: { text: "ถูกจอง", color: "white" },
        WAIT_CONFIRM: { text: "รอตรวจสอบ", color: "#FFEB3B" },
        SUCCESS: { text: "อนุมัติชำระ", color: "#92E6CD" },
        TIMEOUT: { text: "หมดเวลาจอง", color: "gray" },
        REJECT_CONFIRM: { text: "ไม่อนุมัติการแจ้งชำระ", color: "#FF5959" },
        CANCELED: { text: "ยกเลิกรายการ", color: "red" },
      };
      return statusLabels[status] || { text: "Unknown", color: "black" };
    },

    viewDetail(id, item) {
      this.selectedItemId = id;
      this.showDetail = true;
    },

    concancel() {
      Swal.fire({
        title: "ยืนยันการปฏิเสธรายการ",
        text: "คุณต้องการปฏิเสธรายการนี้หรือไม่?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
      }).then((result) => {
        if (result.isConfirmed) {
          // รหัสปฏิเสธรายการ
        }
      });
    },

    confirmpay() {
      Swal.fire({
        title: "ยืนยันการอนุมัติการชำระ",
        text: "คุณต้องการอนุมัติการชำระรายการนี้หรือไม่?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
      }).then((result) => {
        if (result.isConfirmed) {
          // รหัสอนุมัติการชำระ
        }
      });
    },

    changePage(page) {
      this.currentPage = page;
    },

    onPageChanged(page) {
      this.fetchdata(page);
      this.changePage(page);
    },
  },
  mounted() {
    this.fetchdata(); // ดึงข้อมูลเมื่อคอมโพเนนต์ถูกติดตั้ง
  },
};
</script>

<style scoped>
.div-box {
  display: flex;
  height: 40px;
  padding: 12px 16px;
  align-items: center;
  gap: var(--Spacing-space-0, 0px);
  border-radius: 6px;
  border: 2px solid #bababa;
  background: #fff;
  margin: 10px 15px 20px 0px;
  color: #5c25f2;
}
.dis-box {
  display: flex;
  width: 100%;
}
.img-product {
  width: 130px;
  height: 130px;
  border-radius: 10px;
  margin: 30px 30px 30px 0px;
  border: 3px solid #5c25f2;
}
.M-Create-Backgroud .container input {
  position: relative;
  opacity: 1;
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
  color: #fff;
}
/* .order-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
} */

.order-table tbody td img {
  border-radius: 5px;
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
  border-radius: 8px;
  border: 1px solid #5c25f2;
  background: #ffeb3b;
  width: 70%;
  height: 50px;
  font-size: 16px;
}
.check-button:hover {
  background-color: #d7a400; /* สีเหลืองเข้มขึ้น */
}
.check-cacel {
  border-radius: var(--Border-radius-8, 8px);
  background: var(--Color-Midnight-400, #3c3b4b);
  color: white;
  border: none;
}
.check-cacel:hover {
  background: #5c5c5c !important;
}
.margin-right {
  margin-right: 15px;
}
.box-content-pay {
  border-radius: var(--Border-radius-6, 6px);
  border-right: 5px solid var(--Color-Primary-Pueple-500, #5c25f2);
  border-left: 5px solid var(--Color-Primary-Pueple-500, #5c25f2);
  background: var(--color-black-white-800, #f8f8f8);
  padding: 15px 0px 20px 15px;
  cursor: auto;
}
.img-product-slip {
  display: flex;
  width: 300px;
  height: 300px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}
</style>
