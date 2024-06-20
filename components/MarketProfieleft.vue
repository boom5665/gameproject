<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs-left crad-img" style="width: 280px">
      <div class="more-img">
        <div>
          <img
            class=""
            style="margin: 10px 20px"
            src="~/assets/image/more.png"
          />
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center">
        <div>Genshin Shop</div>
        <div>
          <img
            class=""
            style="margin: 10px 20px"
            src="~/assets/image/genshin.png"
          />
        </div>
        <div>#00000000</div>
        <div class="monney">฿ 10,000,000</div>
        <div class="dis-mgin">
          <div class="button-but">เติมเงิน</div>
          <div class="button-but">ถอนเงิน</div>
        </div>
        <div class="dis-mgin">
          <div class="button-but">ดูร้านค้า</div>
        </div>
        <div class="dis-mgin">
          <div class="but-folow">Total items</div>
          <div class="but-folow">Followwers</div>
          <div class="but-folow">Reviews</div>
        </div>
      </div>
    </div>
    <div class="navtabs-left" style="width: 280px">
      <div class="content-brand">
        <div class="font-proL-top">BRAND</div>
        <div>
          เลือกซื้อแพคเกจที่ต้องการ แล้วเริ่มประสบการณ์พลัสของคุณได้ทันที
        </div>
        <div class="dis-mgin">
          <div class="button-but">เลือกแพคเกจ</div>
        </div>
      </div>
      <div class="content-brand">
        <div class="font-proL-top">Official shop</div>
        <div>เพิ่มความน่าเชื่อถือให้กับร้านค้าของคุณ</div>
        <div class="dis-mgin">
          <div class="button-but">อัพเกรด</div>
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
.font-proL-top {
  color: #ffeb3b;
  font-size: 32px !important;
}
.more-img {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}
.navtabs-left {
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  border-radius: 16px;
  background: linear-gradient(180deg, #130048 0%, #5823e5 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
}
.crad-img {
  background-image: url("~/assets/image/Card.png");
  background-repeat: round;
}
.dis-mgin {
  display: flex;
  width: 100%;
  margin: 5px;
}
.button-but {
  display: flex;
  height: 36px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #5c25f2;
  background: #ffeb3b;
  color: #5c25f2;
  width: 100%;
  cursor: pointer;
}
.but-folow {
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px;
  background: #363545;
  font-size: 10px;
  width: 100%;
  justify-content: center;
}

.content-brand {
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 16px;
  border: 1px dashed #ffeb3b;
  background: #5c25f2;
  width: 256px;
  margin: 10px 0px;
}
.monney {
  display: flex;
  padding: var(--Spacing-space-6, 6px) var(--Spacing-space-16, 16px);
  align-items: center;
  gap: 10px;
  border-radius: var(--Border-radius-8, 8px);
  background: var(--Color-Midnight-500, #363545);
  color: #ffeb3b;
  margin-top: 5px;
}
</style>

