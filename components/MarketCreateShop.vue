<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <div class="form-create">
        <div class="font-top">สร้างร้านค้า</div>
        <form @submit.prevent="handleSubmit">
          <div class="font-head">
            <div>
              <img
                class=""
                style="margin: 0px 10px; width: 20px"
                src="~/assets/image/User.png"
              />
            </div>
            ร้านค้า
          </div>
          <div><input type="text" id="name" v-model="name" /></div>
          <div>
            <div>ช่องทางการติดต่อร้านค้า</div>
            <div class="comment-font">
              (ข้อมูลนี้จะถูกแสดงให้กับผู้ซื้อในรายการสินค้า)
            </div>
          </div>
          <div class="dis-input">
            <div style="width: 49%">
              <label for="phone">หมายเลขโทรศัพท์</label>
              <input type="text" id="phone" v-model="phone" />
            </div>
            <div style="width: 49%">
              <label for="otherContact">ช่องทางติดต่ออื่นๆ</label>
              <input type="text" id="otherContact" v-model="otherContact" />
            </div>
          </div>
          <div>
            <div class="box-rule">
              <div>
                <img class="" src="~/assets/image/rule.png" />
              </div>
              <div>
                <div>
                  ทำไมจึงต้องขอเลขหลังบัตรประชาชนเพื่อทำการยืนยันตัวตน,
                  สร้างร้านค้า และ สมัครโปรโมเตอร์?
                </div>
                <div>
                  <div>จุดประสงค์ของการขอข้อมูลเลขหลังบัตรประชาชน</div>
                  <div>
                    1. เพื่อตรวจสอบสถานะบัตรประชาชนของผู้ใช้งานกับกรมการปกครอง
                  </div>
                  <div>
                    2.
                    เพื่อให้แน่ใจว่าผู้ทำรายการมีตัวตนและไม่อยู่ในสถานะที่ไม่เหมาะสม
                    หรือมิได้นำบัตรประชาชนที่ถูกยึดหรือ อายัดมาเปิดใช้งาน
                  </div>
                  <div>
                    3.
                    เพื่อป้องกันการสวมรอยจากบุคคลอื่นที่จะใช้เพื่อรับเงินหรือผลประโยชน์แทนตัวลูกค้าเอง
                    ทั้งนี้การจัดการข้อมูลเป็นไปตามมาตรฐาน, หลักเกณฑ์ และ
                    เงื่อนไขที่กำหนด ทาง BRAND จะไม่มีการเก็บข้อมูล
                    หมายเลขหลังบัตรประชาชนของท่านไว้ในระบบของเราแต่อย่างใดการตรวจสอบข้อมูล
                    เลขหลังบัตรประชาชนของเว็บไซต์ BRAND
                    นั้นอยู่ภายใต้การกำกับดูแลอย่างเคร่งครัด ของกรมการปกครอง
                    กระทรวงมหาดไทย
                  </div>
                  <div>
                    <img class="" src="~/assets/image/line.png" />
                  </div>
                  <div>
                    ได้รับอนุญาตอย่างถูกต้อง หมายเลขหนังสืออนุญาตจากกรมการปกครอง
                    กระทรวงมหาดไทย เลขที่ มท.๐๓๐๙.๙/๓๐๗๕๖
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="font-head">
                <div>
                  <img
                    class=""
                    style="margin: 0px 10px; width: 20px"
                    src="~/assets/image/store.png"
                  />
                </div>
                ข้อมูลผู้ติดต่อ
              </div>
              <div class="box-alert">
                <div>
                  <img
                    class=""
                    style="margin: 10px 20px; width: 20px"
                    src="~/assets/image/alet.png"
                  />
                </div>
                <div>
                  กรุณาใส่ข้อมูลให้ตรงกับบัตรประชาชน
                  และกรอกชื่อ-นามสกุลด้วยภาษาไทยเท่านั้นหมายเลขบัตร
                  ประชาชนนี้จะไม่สามารถนำไปใช้กับไอดีอื่นได้อีก
                  และจะไม่สามารถเปลี่ยนแปลงหมายเลขบัตรได้
                </div>
              </div>
              <div class="dis-input">
                <div style="width: 49%">
                  <label for="firstName">ชื่อ *</label>
                  <input type="text" id="firstName" v-model="firstName" />
                </div>
                <div style="width: 49%">
                  <label for="lastName">นามสกุล *</label>
                  <input type="text" id="lastName" v-model="lastName" />
                </div>
              </div>
              <div class="dis-input">
                <div style="width: 49%">
                  <label for="idCard">หมายเลขบัตรประชาชน (13 หลัก) *</label>
                  <input type="text" id="idCard" v-model="idCard" />
                </div>
                <div style="width: 49%">
                  <label for="idCardBack">เลขหลังบัตรประชาชน *</label>
                  <input type="text" id="idCardBack" v-model="idCardBack" />
                </div>
              </div>
              <div class="dis-input">
                <div style="width: 49%">
                  <label for="birthDate">วันเกิด *</label>
                  <input type="text" id="birthDate" v-model="birthDate" />
                </div>
              </div>
              <div>
                <label class="container">
                  <input checked="checked" type="checkbox" v-model="consent" />
                  <div class="checkmark"></div>
                  <label for="consent" class="checkbox-label">
                    ฉันยินยอมให้เว็บไซต์ส่งข้อมูลเกี่ยวกับผลิตภัณฑ์และบริการ
                    ผ่านช่องทางการติดต่อของฉันตาม
                    <span>ข้อกำหนดและเงื่อนไข</span>
                  </label>
                </label>
              </div>
            </div>
          </div>
          <button type="submit" class="submit">
            <div>
              <img
                class=""
                style="margin: 0px 5px; width: 20px"
                src="~/assets/image/Save.png"
              />
            </div>
            <div>Submit</div>
          </button>
        </form>
        <div v-if="submitted">
          <h2>Form Data</h2>
          <p>Name: {{ name }}</p>
          <p>Phone: {{ phone }}</p>
          <p>Other Contact: {{ otherContact }}</p>
          <p>First Name: {{ firstName }}</p>
          <p>Last Name: {{ lastName }}</p>
          <p>ID Card: {{ idCard }}</p>
          <p>ID Card Back: {{ idCardBack }}</p>
          <p>Birth Date: {{ birthDate }}</p>
          <p>Consent: {{ consent ? "Yes" : "No" }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      otherContact: "",
      firstName: "",
      lastName: "",
      idCard: "",
      idCardBack: "",
      birthDate: "",
      consent: false,
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      console.log(
        "Form submitted:",
        this.name,
        this.phone,
        this.otherContact,
        this.firstName,
        this.lastName,
        this.idCard,
        this.idCardBack,
        this.birthDate,
        this.consent
      );
    },
  },
};
</script>


