<template>
  <div class="M-Create-Backgroud Point">
    <div class="navtabs">
      <div class="font-top-myshop">
        Rewards &nbsp; | &nbsp; <span class="p-font-top">Rank</span> &nbsp;|
        &nbsp;
        <span class="p-font-top">All coupon</span>
      </div>
      <div
        class="form-create"
        style="margin-top: 20px; gap: var(--Spacing-space-16, 12px)"
      >
        <div class="font-form-myshop">My Rewards points</div>
        <div style="margin-right: 20px">
          <img class="img-safe" src="~/assets/image/Vector 121.png" />
        </div>

        <div class="bg-style-point">
          <div class="font-form-myshop">0 pts.</div>
          <div class="">Exp. 31 Dec 2024</div>
          <div class="font-form-myshop">How to get more point</div>
        </div>
        <div class="expstyle">
          <div class="">Redeem rewards points</div>
          <div class=""><input type="text" /></div>
          <div class="bottom-y">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15.8327 9.99967H4.16602M15.8327 9.99967L11.666 14.1663M15.8327 9.99967L11.666 5.83301"
                stroke="#5C25F2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
            >Redeem
          </div>
        </div>
        <div class="expstyle">
          <div class="">Rewards Search</div>
          <div class=""><input type="text" /></div>
          <div class="bottom-y">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="11.058"
                cy="11.059"
                r="7.06194"
                stroke="#5C25F2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.0024 20.0034L16.0508 16.0518"
                stroke="#5C25F2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div class="expstyle">
          <div class="">
            <div class="point-but" style="margin-right: 20px">
              <img class="img-safe" src="~/assets/image/Component 14.png" />
            </div>
          </div>
          <div class="">
            <div class="point-but" style="margin-right: 20px">
              <img class="img-safe" src="~/assets/image/Component 15.png" />
            </div>
          </div>
          <div class="">
            <div class="point-but" style="margin-right: 20px">
              <img class="img-safe" src="~/assets/image/Component 16.png" />
            </div>
          </div>
          <div class="">
            <div class="point-but" style="margin-right: 20px">
              <img class="img-safe" src="~/assets/image/Component 17.png" />
            </div>
          </div>
          <div class="">
            <div class="point-but" style="margin-right: 20px">
              <img class="img-safe" src="~/assets/image/Component 18.png" />
            </div>
          </div>
        </div>

        <div style="display: flex; flex-wrap: wrap; justify-content: center">
          <div class="tpn_card" v-for="item in items" :key="item.id">
            <div class="buttoncart">
              <img :src="item.cartshop" style="margin-right: 5px" />
            </div>
            <img :src="item.imageSrc" class="tpn_cardimg" />
            <div style="padding: 10px">
              <div class="point-title">
                {{ item.title }}
              </div>
              <div class="point-sub">{{ item.subtitle }}</div>
              <div>
                <div class="point-mon">฿ {{ item.price }}</div>
              </div>

              <div class="point-des">
                <div class="font">{{ item.description }}</div>

                <div class="buttonshop">
                  <img :src="item.cartSrc" style="margin-right: 5px" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="width: 100%; display: flex; justify-content: center">
          <div class="point-but">
            <img
              style="width: 700px"
              class="img-safe"
              src="~/assets/image/AD.png"
            />
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
      qrImageUrl: require("@/assets/image/imageQR.png"), // กำหนดค่าเริ่มต้นสำหรับ URL ของภาพ QR
      items: [
        {
          id: 1,
          title: "Razer Gold PIN 9,999 Bath",
          imageSrc: require("@/assets/image/goldpoint.png"),
          subtitle: "หมดอายุ 27/05/24",
          price: "449,000 แต้ม",
          cartSrc: require("@/assets/image/ButtonPoint.png"),
          description: "10 ชิ้น สุดท้าย",
          cartshop: require("@/assets/image/cartshop.png"),
        },
        {
          id: 2,
          title: "Razer Gold PIN 9,999 Bath",
          imageSrc: require("@/assets/image/goldpoint.png"),
          subtitle: "หมดอายุ 27/05/24",
          price: "449,000 แต้ม",
          cartSrc: require("@/assets/image/ButtonPoint.png"),
          description: "10 ชิ้น สุดท้าย",
          cartshop: require("@/assets/image/cartshop.png"),
        },
        {
          id: 1,
          title: "Razer Gold PIN 9,999 Bath",
          imageSrc: require("@/assets/image/goldpoint.png"),
          subtitle: "หมดอายุ 27/05/24",
          price: "449,000 แต้ม",
          cartSrc: require("@/assets/image/ButtonPoint.png"),
          description: "10 ชิ้น สุดท้าย",
          cartshop: require("@/assets/image/cartshop.png"),
        },
      ],
      itemsbanner: [
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
      ],
    };
  },
  mounted() {
    // this.fetchQRImage();
  },
  methods: {
    async fetchQRImage() {
      try {
        const response = await this.$axios.$get(
          "https://api.example.com/qr-image"
        );
        this.qrImageUrl = response.data.imageUrl; // สมมติว่า API ส่ง URL ของภาพ QR กลับมาใน data.imageUrl
      } catch (error) {
        console.error("Error fetching QR image:", error);
      }
    },
  },
};
</script>

