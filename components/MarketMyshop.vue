<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <div class="font-top-myshop">ร้านค้าของฉัน</div>
      <div style="width: 100%">
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
        <div style="width: 100%">
          <div class="font-form-myshop">สินค้าของฉัน</div>
          <div class="font-form-myshop-under">เพิ่มสินค้าของคุณ</div>
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
        </div>
        <div style="width: 100%">
          <div class="font-form-myshop">จัดการร้านค้า</div>
          <div class="font-form-myshop-under">แก้ไขข้อมูลร้านค้า</div>
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
        </div>
        <div style="width: 100%">
          <div class="font-form-myshop">การแจ้งเตือน</div>
          <div class="font-form-myshop-under">ตั้งค่าการแจ้งเตือน</div>
          <div class="img-add">
            <div class="font-form-myshop">
              <div class="img-contentadd">
                <img
                  class=""
                  style="margin-right: 5px"
                  src="~/assets/image/Messenger.png"
                />เฟสบุ๊ค เมสเซนเจอร์
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.img-add {
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 0px;
  border-radius: 6px;
  border: 2px dashed #5c25f2;
  background: #f8f8f8;
  cursor: pointer;
  margin-bottom: 10px;
}
.img-contentadd {
  display: flex;
  margin: 10px 20px;
}
.font-form-myshop {
  font-size: 16px;
  color: #5c25f2;
}
.font-form-myshop-under {
  font-size: 16px;
  color: #bababa;
  margin-bottom: 10px;
}
.font-top-myshop {
  color: var(--color-black-white-900, #fff);
  font-size: 24px;
  text-align: left;
  width: 100%;
}
</style>

