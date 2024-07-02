<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <div class="font-top-myshop">
        สั่งซื้อสินค้า  &nbsp; | &nbsp; <span class="font-proL-top">สั่งซื้อตอนนี้</span>
      </div>
      <div
        class="form-create"
        style="margin-top: 20px; gap: var(--Spacing-space-16, 12px);align-items: center;"
      >
        <div style="width: 100%; display: contents">
          <div style="margin-right: 20px">
            <img class="" :src="qrImageUrl" />
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
