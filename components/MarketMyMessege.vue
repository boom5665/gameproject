<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <div class="font-top-myshop">
        ร้านค้าของฉัน > <span class="font-proL-top">แก้ไขร้านค้า</span>
      </div>
      <div
        class="form-create"
        style="margin-top: 20px; gap: var(--Spacing-space-16, 12px)"
      >
        <div style="width: 100%">
          <div class="box-alert">
            <div>
              <img
                class=""
                style="margin: 10px 20px; width: 20px"
                src="~/assets/image/Circle_Warning.png"
              />
            </div>
            <div>
              หากพบปัญหาการเชื่อมต่อ กรุณาอ่านคู่มือการใช้งาน
              หรือติดต่อฝ่ายบริการลูกค้า
            </div>
          </div>
          <div class="font-form-myshop">เชื่อมต่อบัญชี facebook messenger</div>
          <div class="font-form-myshop-under">สถานะ : ยังไม่ได้เชื่อมต่อ</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="2"
              viewBox="0 0 458 2"
              fill="none"
            >
              <path
                d="M1 1H456.5"
                stroke="#5C25F2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="5 5"
              />
            </svg>
          </div>
          <div>
            เพื่อรับข้อความแจ้งเตือนความเคลื่อนไหวล่าสุดเกี่ยวกับร้านค้าของคุณ
          </div>
          <div>• สถานะคำสั่งซื้อ</div>
          <div>• ธุรกรรม</div>
          <div>• การแจ้งปัญหา / การคืนเงิน</div>

          <div class="button-fece">
            <img
              class=""
              style="margin: 10px 20px; width: 20px"
              src="~/assets/image/logo-facebook.png"
            />
            ดำเนินการต่อด้วย Facebook
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

<style scoped>
.button-fece {
  display: flex;
  padding: var(--Spacing-space-8, 8px) var(--Spacing-space-12, 12px);
  justify-content: center;
  align-items: center;
  gap: var(--Spacing-space-8, 8px);
  align-self: stretch;
  border-radius: var(--medium, 6px);
  background: #1977f5;
  color: white;
  margin-top: 20px;
}
.navtabs {
  padding: 50px 100px;
}
.box-alert {
  padding: 20px 10px;
}
.font-form-myshop {
  font-size: 24px;
  color: #5c25f2;
}
</style>
