<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <div
        class="form-create"
        style="margin-top: 20px; gap: var(--Spacing-space-16, 12px)"
      >
        <div>
          <div class="display">
            <div class="font-re">การซื้อของฉัน</div>
            <div class="">คำสั่งชื้อทั้งหมด ></div>
          </div>

          <div class="width-hunded">
            <img
              class=""
              style="margin-right: 5px; width: 100%"
              src="~/assets/image/line.png"
            />
          </div>
        </div>
        <div class="status-container">
          <button class="status-item">
            <div class="status-icon">
              <img src="~/assets/image/icon1.png" />
            </div>
            <div class="status-text">รอการชำระเงิน</div>
          </button>

          <button class="status-item">
            <div class="status-icon">
              <img src="~/assets/image/icon2.png"  />
            </div>
            <div class="status-text">รอการยืนยัน</div>
          </button>

          <button class="status-item">
            <div class="status-icon">
              <img src="~/assets/image/icon3.png"  />
            </div>
            <div class="status-text">ที่ซื้อสำเร็จ</div>
          </button>

          <button class="status-item">
            <div class="status-icon">
              <img src="~/assets/image/icon4.png"  />
            </div>
            <div class="status-text">ที่ต้องได้รับ</div>
          </button>

          <button class="status-item">
            <div class="status-icon">
              <img src="~/assets/image/icon5.png"  />
            </div>
            <div class="status-text">ที่ต้องรีวิว</div>
          </button>

          <button class="status-item">
            <div class="status-icon">
              <img src="~/assets/image/icon6.png"  />
            </div>
            <div class="status-text">ที่ขอคืนเงิน</div>
          </button>

          <button class="status-item">
            <div class="status-icon">
              <img src="~/assets/image/icon7.png"  />
            </div>
            <div class="status-text">ที่มีปัญหา</div>
          </button>

          <button class="status-item">
            <div class="status-icon">
              <img src="~/assets/image/icon8.png"  />
            </div>
            <div class="status-text">ที่ถูกยกเลิก</div>
          </button>
        </div>
        <div>
          <div class="font-re">โค้ดของฉัน</div>
          <div class="width-hunded">
            <img
              class=""
              style="margin-right: 5px; width: 100%"
              src="~/assets/image/line.png"
            />
          </div>
        </div>
        <div class="status-container">
          <button class="status-item">
            <div class="status-icon">
              <img src="~/assets/image/icon9.png"  />
            </div>
            <div class="status-text">โค้ดที่ซื้อ</div>
          </button>

          <button class="status-item">
            <div class="status-icon">
              <img src="~/assets/image/icon10.png"  />
            </div>
            <div class="status-text">คลังไอเทมของฉัน</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.client) {
      // ตรวจสอบว่า URL ปัจจุบันตรงกับ /MarketMyshop หรือไม่
      if (this.$route.path === "/MarketMyshop") {
        const hasRefreshed = localStorage.getItem("hasRefreshedMarketMyshop");

        console.log(hasRefreshed);
        if (hasRefreshed) {
          // ตั้งค่าสถานะว่าได้รีเฟรชหน้าแล้ว
          localStorage.setItem("hasRefreshedMarketMyshop", "true");

          // รีเฟรชหน้าเว็บ
          window.location.reload();
        }
      }
    }
  },
};
</script>


<style scoped>
.M-Create-Backgroud button:hover {
    background-color: #565656;
}
.status-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  grid-gap: 16px;
  width: 100%;
}

.status-item {
    background-color: #333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 45%;
    height: 45px;
    border-radius: 8px;
    text-align: left;
        border: none;
}

.status-icon {
    margin: 10px;
}

.status-text {
  font-size: 16px;
}
.font-re {
    font-size: 20px;
}
</style>
