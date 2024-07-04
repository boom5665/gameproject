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

<style lang="scss" scoped>
.p-font-top {
  color: var(--color-black-white-300, #3f3f3f);
}
.bg-style-point {
  border-radius: var(--Border-radius-6, 6px);
  background: url("~/assets/image/bgpoint.png");
  background-size: cover;
  background-position: center;
  display: flex;
  padding: var(--Spacing-space-16, 16px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--Spacing-space-16, 16px);
  align-self: stretch;
  height: 130px;
}
.bottom-y {
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #5c25f2;
  background: #ffeb3b;
  color: #5c25f2;
}
.expstyle {
  border-radius: 6px;
  background: #f8f8f8;
  display: flex;
  padding: 16px;
  flex-direction: row;
  gap: 16px;
  align-self: stretch;
  align-items: center;
  justify-content: space-evenly;
}
.M-Create-Backgroud input[type="text"] {
  height: 40px;
  width: 400px;
  border-radius: 6px;
  border: 1px solid #5c25f2;
  background: #bababa;
  color: #5c25f2;
  margin-bottom: 0px;
  max-width: 400px;
}

.point-but {
  cursor: pointer;
}

.custom-indicators {
  display: none;
}
.tpn_card {
  width: 220px;
  height: 100%;
  border-radius: 8px;
  border-radius: var(--Border-radius-8, 8px);
  background: #3c3b4b;
  background: var(--Color-Midnight-400, #3c3b4b);
  padding: 0px 0px 10px 0px;
  margin: 10px;
  cursor: pointer;
}

.buttonshop {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: none;
}
.point-title {
  font-size: 16px;
  color: var(--Color-Secondary-500, #ffeb3b);
  margin-bottom: 5px;
}
.point-sub {
  font-size: 12px;
  color: var(--color-black-white-700, #bababa);
  margin-bottom: 5px;
}
.point-mon {
  border-radius: 9999px;
  background: #fff;
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  color: #5c25f2;
  margin: 10px 10px;
}
.point-des {
  border-top: 1px solid #bababa;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buttoncart {
  position: absolute;
  transform: translate(170px, 0px);
}
</style>
