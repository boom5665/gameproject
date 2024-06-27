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
          <Nuxt-link to="/Market" target="_self"><div class="button-but">ดูร้านค้า</div></Nuxt-link>
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
          <Nuxt-link to="/MarketPackage" target="_self"><div class="button-but">เลือกแพคเกจ</div></Nuxt-link>
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

</style>

