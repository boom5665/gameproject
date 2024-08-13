<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <div class="font-top-myshop">ร้านค้าของฉัน</div>
      <div class="width-hunded">
        <img
          class=""
          style="margin-right: 5px; width: 100%"
          src="~/assets/image/linemyshop.png"
        />
      </div>
      <div
        class="form-create"
        style="margin-top: 20px; gap: var(--Spacing-space-16, 12px)"
      >
        <div class="width-hunded">
          <div class="font-form-myshop">สินค้าของฉัน</div>
          <div class="font-form-myshop-under">เพิ่มสินค้าของคุณ</div>
          <Nuxt-link to="/MarketMyAdd" target="_self">
            <div class="img-add">
              <div class="font-form-myshop">
                <div class="img-contentadd">
                  <img
                    class=""
                    style="margin-right: 5px"
                    src="~/assets/image/Add.png"
                  />
                </div>
              </div>
            </div>
          </Nuxt-link>
        </div>
        <div class="width-hunded">
          <div class="font-form-myshop">จัดการร้านค้า</div>
          <div class="font-form-myshop-under">แก้ไขข้อมูลร้านค้า</div>
          <Nuxt-link to="/MarketMyEdit" target="_self">
            <div class="img-add">
              <div class="font-form-myshop">
                <div class="img-contentadd">
                  <img
                    class=""
                    style="margin-right: 5px"
                    src="~/assets/image/store circle.png"
                  />แก้ไขร้านค้า
                </div>
              </div>
            </div>
          </Nuxt-link>
        </div>
        <div class="width-hunded">
          <div class="font-form-myshop">การแจ้งเตือน</div>
          <div class="font-form-myshop-under">ตั้งค่าการแจ้งเตือน</div>
          <Nuxt-link to="/MarketMyMessege" target="_self">
            <div class="img-add">
              <div class="font-form-myshop">
                <div class="img-contentadd">
                  <img
                    class=""
                    style="margin-right: 5px"
                    src="~/assets/image/store circle.png"
                  />เฟสบุ๊ค เมสเซนเจอร์
                </div>
              </div>
            </div>
          </Nuxt-link>
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
        if (!hasRefreshed) {
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


