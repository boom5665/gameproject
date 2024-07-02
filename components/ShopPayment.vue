<template>
  <div style="width: 100%" class="Shop">
    <div class="markettop-toppage">
      <div class="dis-flex" style="align-items: flex-start">
        <div style="width: 60%" class="box-pay">
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
              <div>
                <div>close</div>
              </div>
            </div>

            <div class="discount-section">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="2"
                viewBox="0 0 496 2"
                fill="none"
              >
                <path
                  d="M0 1H496"
                  stroke="#5C25F2"
                  stroke-width="2"
                  stroke-dasharray="5 5"
                />
              </svg>
              <div class="discount-title">โค้ดส่วนลดร้านค้า</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="2"
                viewBox="0 0 496 2"
                fill="none"
              >
                <path
                  d="M0 1H496"
                  stroke="#5C25F2"
                  stroke-width="2"
                  stroke-dasharray="5 5"
                />
              </svg>
              <div class="total-section">
                <div class="all-total">
                  ทิ้งหมด ({{ totalItems(category.items) }})
                </div>
                <div class="total">
                  ฿{{ totalAmount(category.items).toLocaleString() }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 40%" class="box-pay">
          <div class="box-pay-right">
            <div style="padding: 20px 30px; width: 100%">
              <div class="dis-btween">
                <div class="font-SHOP-band">โค้ดส่วนลด Brand</div>
                <div style="margin-right: 20px">
                  <img class="img-safe" src="~/assets/image/SHOPright.png" />
                </div>
              </div>
              <div class="font-head-bottom">
                สินค้าบางรายการมาจากร้านที่ไม่รองรับการใช้ Reward points
              </div>
              <div class="bottom-p" @click="openNav">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  margin-right="5px"
                >
                  <path
                    d="M1.75 14.6875C1.75 15.2677 1.98047 15.8241 2.3907 16.2343C2.80094 16.6445 3.35734 16.875 3.9375 16.875H17.0625C17.6427 16.875 18.1991 16.6445 18.6093 16.2343C19.0195 15.8241 19.25 15.2677 19.25 14.6875V8.67188H1.75V14.6875ZM4.32812 11.7188C4.32812 11.4079 4.45159 11.1099 4.67136 10.8901C4.89113 10.6703 5.1892 10.5469 5.5 10.5469H7.375C7.6858 10.5469 7.98387 10.6703 8.20364 10.8901C8.42341 11.1099 8.54688 11.4079 8.54688 11.7188V12.5C8.54688 12.8108 8.42341 13.1089 8.20364 13.3286C7.98387 13.5484 7.6858 13.6719 7.375 13.6719H5.5C5.1892 13.6719 4.89113 13.5484 4.67136 13.3286C4.45159 13.1089 4.32812 12.8108 4.32812 12.5V11.7188ZM17.0625 3.125H3.9375C3.35734 3.125 2.80094 3.35547 2.3907 3.7657C1.98047 4.17594 1.75 4.73234 1.75 5.3125V6.32812H19.25V5.3125C19.25 4.73234 19.0195 4.17594 18.6093 3.7657C18.1991 3.35547 17.6427 3.125 17.0625 3.125Z"
                    fill="white"
                  /></svg
                >เลือกวิธีชำระเงิน
              </div>
            </div>
          </div>
          <div class="box-pay-right">
            <div class="top-head">ข้อมูลการชำระเงิน</div>
            <div style="padding: 20px 30px; width: 100%">
              <div class="dis-btween">
                <div>รวมยอดสั่งซื้อทั้งหมด</div>
                <div>฿9,999</div>
              </div>
              <div class="dis-btween">
                <div>รวมยอดสั่งซื้อทั้งหมด</div>
                <div>฿9,999</div>
              </div>
              <div class="dis-btween">
                <div>รวมยอดสั่งซื้อทั้งหมด</div>
                <div>฿9,999</div>
              </div>
              <div class="dis-btween font-head-bottom">
                <div>ยอดชำระเงินทั้งหมด</div>
                <div>฿99,999,999</div>
              </div>
              <div class="bottom-y">ชำระเงิน</div>
            </div>
          </div>

          <div id="mySidenav4" class="sidenav">
            <div class="">
              <a href="javascript:void(0)" class="closebtn" @click="closeNav"
                ><div class="font-top-close">ตัวเลือกชำระเงิน</div>
                <div>&times;</div>
              </a>
              <div class="">
                <div class="shop-item">
                  <div class="dis-flex" style="width: max-content">
                    <div style="margin-right: 20px">
                      <img
                        class="img-shop-nav"
                        src="~/assets/image/cardgold.png"
                      />
                    </div>
                    <div>
                      <div>Add Text</div>
                      <div>฿0</div>
                      <div>Add Text</div>
                    </div>
                  </div>

                  <div class="bottom-y" style="width: max-content">
                    <div>เติมเงิน</div>
                  </div>
                </div>
                <div class="shop-item">
                  <div class="dis-flex" style="width: max-content">
                    <div style="margin-right: 20px">
                      <img
                        class="img-shop-nav"
                        src="~/assets/image/QRPay.png"
                      />
                    </div>
                    <div>
                      <div>QR Cash</div>
                      <div>ฟรีค่าธรรมเนียม</div>

                    </div>
                  </div>

                  <div >
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="pad-right">
              <div class="submit" @click="submitImage">Send</div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
              quantity: 1,
              price: 50000,
            },
          ],
        },
        {
          name: "HoyoAccountID",
          items: [
            {
              name: "Valorant Points",
              imageUrl: require("@/assets/image/cardgold.png"),
              description: "Buy Valorant Points",
              category: "In-Game Currency",
              quantity: 1,
              price: 5000,
            },
          ],
        },
      ],
    };
  },
  methods: {
    totalItems(items) {
      return items.reduce((sum, item) => sum + item.quantity, 0);
    },
    totalAmount(items) {
      return items.reduce((sum, item) => sum + item.price, 0);
    },
    openNav() {
      // เปิดเมนูด้านข้าง
      document.getElementById("mySidenav4").style.width = "400px";
      document.getElementById("mySidenav4").style.right = "0px";
    },
    closeNav() {
      // ปิดเมนูด้านข้าง
      document.getElementById("mySidenav4").style.width = "0";
      document.getElementById("mySidenav4").style.right = "-50px";
    },
  },
};
</script>


