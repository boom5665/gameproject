<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs shopsucsess">
      <div class="font-top-myshop">
        <!-- <Nuxt-link class="text-profile" to="/ShopMy" target="_self">
          <span>
            การซื้อของฉัน
            <img class="SHOPright" src="~/assets/image/SHOPright.png" alt="" />
          </span>
        </Nuxt-link> -->
        <Nuxt-link class="text-profile" to="/ShopMysucsess" target="_self">
          <span class="font-proL-top">รายการคำสั่งซื้อ</span>
        </Nuxt-link>
      </div>
      <div
        class="form-create"
        style="margin-top: 20px; gap: var(--Spacing-space-16, 12px)"
      >
        <div class="display">
          <div class="font-re">การซื้อของฉัน</div>
        </div>

        <div class="order-list">
          <div v-for="order in orders" :key="order.id" class="order-item">
            <div class="order-header">
              <div class="order-id">
                รายการคำสั่งซื้อ #{{ order.id }}
                <span class="order-shop">
                  (ทั้งหมด {{ order.totalItems }} ชิ้น)
                </span>
              </div>
              <div :class="['order-status', getStatusClass(order.statusText)]">
                {{ getStatusText(order.statusText) }}
              </div>
            </div>
            <div>
              <div class="order-box">
                <div class="order-content">
                  <div class="order-shop">สินค้าที่ซื้อ</div>
                  <div class="order-details">
                    <div class="product-item">
                      <img
                        :src="order.productImage"
                        alt="Product Image"
                        class="product-image"
                      />
                      <div class="product-info">
                        <div class="product-name">{{ order.productName }}</div>

                        <div
                          class="product-tag"
                          v-if="order.productTag"
                          v-html="order.productTag"
                        ></div>
                      </div>
                    </div>
                    <div class="order-summary-two">
                      <div class="" style="margin-bottom: 10px;">
                        ราคา <br />
                        {{ order.price }}
                      </div>
                      <div class="order-shop">
                        ส่วนลด <br />
                        {{ order.difference }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-content">
                <div class="order-summary">
                  <div class="order-date">
                    <div class="order-shop">วันที่สั่งซื้อ <br /></div>
                    {{ order.date }}
                  </div>
                  <div class="order-amount">
                    ยอดสุทธิ <br />
                    {{ order.amount }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 100%">
          <Pagination
            :currentPage="currentPage"
            :totalPages="totalPages"
            @page-changed="onPageChanged"
          />
        </div>
      </div>

      <Loader :isLoading="isLoading" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [], // Data will be populated by API
      isLoading: false,
      currentPage: 1,
      perPage: 5,
      page_count: 0,
    };
  },
  computed: {
    computedOrders() {
      return this.orders.map((order) => {
        let statusClass = this.getStatusClass(order.statusText);

        return { ...order, statusClass };
      });
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

  mounted() {
    if (process.client) {
      if (this.$route.path === "/MarketMyshop") {
        const hasRefreshed = localStorage.getItem("hasRefreshedMarketMyshop");

        if (!hasRefreshed) {
          localStorage.setItem("hasRefreshedMarketMyshop", "true");
          window.location.reload();
        }
      }
    }
    this.fetchdata();
  },
  methods: {
    async fetchdata(page = 1) {
      this.isLoading = true;
      try {
        const token = this.$cookies.get("authToken");
        const response = await this.$axios.$post(
          "/payment/product/request/list/read",
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

        const resalldata = response.data_list;
        this.page_count = response.page_count;
        console.log(resalldata);

        if (Array.isArray(resalldata) && resalldata.length > 0) {
          this.orders = resalldata.map((item) => {
            const product = item.product || {};
            const customer = item.customer || {};
            const statusText = item.status || "Unknown";

            const orderItem = {
              id: item.id || null,
              totalItems: item.amount || 0,
              statusText: statusText,
              statusClass: this.getStatusClass(statusText),
              productImage: product.img || "",
              productName: product.name || "Unknown",
              productTag: product.description || "",

              date: this.formatDate(item.created_at) || "Invalid Date",
              amount: `฿${
                item.price_total
                  ? item.price_total.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })
                  : "0.00"
              }`,
              price: `฿${
                product.price_before_discount
                  ? product.price_before_discount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })
                  : "0.00"
              }`,
              difference: `฿${(
                item.price_total - product.price_before_discount
              ).toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}`,
            };

            console.log("Order item:", orderItem); // Log the complete order item

            return orderItem;
          });
        }
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching data:", error);
        // Optionally set an error message in the state or show a notification
        this.isLoading = false;
      }
    },

    getStatusClass(statusText) {
      if (statusText.includes("SUCCESS")) {
        return "complete";
      } else if (statusText.includes("REJECT_CONFIRM")) {
        return "problem";
      } else if (statusText.includes("TIMEOUT")) {
        return "wait";
      } else if (statusText.includes("WAIT_CONFIRM")) {
        return "waitcash";
      } else if (statusText.includes("RESERVE")) {
        return "reserve";
      } else if (statusText.includes("CANCELED")) {
        return "canceled";
      } else {
        return "wait"; // Default status class
      }
    },

    getStatusText(statusText) {
      const statusTexts = {
        RESERVE: "จองสำเร็จ",
        WAIT_CONFIRM: "ตรวจสอบการชำระ",
        SUCCESS: "ซื้อสำเร็จ",
        TIMEOUT: "หมดเวลาจอง",
        REJECT_CONFIRM: "ไม่อนุมัติการแจ้งชำระ",
        CANCELED: "ยกเลิกรายการ",
      };

      // Find the key in the statusTexts that matches statusText
      for (const key in statusTexts) {
        if (statusText.includes(key)) {
          return statusTexts[key];
        }
      }

      // Default status text
      return "สถานะไม่ทราบ";
    },

    formatDate(dateString) {
      if (!dateString) return "Invalid Date";

      const date = new Date(dateString);
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${hours}:${minutes} / ${day}-${month}-${year}`;
    },

    changePage(page) {
      this.currentPage = page;
    },

    onPageChanged(page) {
      this.fetchdata(page);
      this.changePage(page);
    },
  },
};
</script>
