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
                style="margin: 0px 10px; width: 20px"
                src="~/assets/image/User.png"
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

<style scoped>
.dis-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.font-top {
  color: var(--Color-Primary-Pueple-500, #5c25f2);
  text-align: center;
  font-size: 20px;
  width: 100%;
}

input[type="text"] {
  height: 40px;
  padding: 11px 16px;
  width: 100%;
  box-sizing: border-box;
  border-radius: var(--Border-radius-6, 6px);
  border: 1px solid var(--color-black-white-700, #bababa);
  background: var(--color-black-white-900, #fff);
  color: #5c25f2;
  margin-bottom: 15px;
}

button {
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.font-head {
  color: #5c25f2;
  font-size: 18px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}
.comment-font {
  color: #8153ff;
  margin-bottom: 10px;
}
.box-rule {
  display: flex;
  padding: var(--Spacing-space-16, 16px);
  align-items: flex-start;
  gap: var(--Spacing-space-16, 16px);
  align-self: stretch;
  border-radius: var(--Border-radius-6, 6px);
  border: 1px solid var(--color-black-white-700, #bababa);
  background: var(--color-black-white-900, #fff);
  margin-bottom: 15px;
}

.box-alert {
  padding: 16px 130px;
  flex-direction: row;
  border-radius: 6px;
  background: #5c25f2;
  color: white;
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Hide the default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container {
  display: flex;
  position: relative;
  cursor: pointer;
  font-size: 1.5rem;
  user-select: none;
  align-items: flex-end;
}

/* Create a custom checkbox */
.checkmark {
  /* --clr: #0b6e4f; */
  position: relative;
  top: 0;
  left: 0;
  height: 1.3em;
  width: 1.3em;
  transition: 300ms;
  border-radius: var(--Border-radius-6, 6px);
  margin-right: 10px;
  border: 2px solid var(--Color-Primary-Pueple-500, #5c25f2);
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: var(--clr);
  border-radius: 0.5rem;
  animation: pulse 500ms ease-in-out;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 0.54em;
  top: 0.25em;
  width: 0.25em;
  height: 0.5em;
  border: solid #5c25f2;
  border-width: 0 0.15em 0.15em 0;
  transform: rotate(45deg);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 #815fe0;
    rotate: 20deg;
  }

  50% {
    rotate: -20deg;
  }

  75% {
    box-shadow: 0 0 0 10px #bba7f1;
  }

  100% {
    box-shadow: 0 0 0 13px #b198f7;
    rotate: 0;
  }
}
.checkbox-label {
  font-size: 17px;
}
.submit {
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #5c25f2;
  background: #ffeb3b;
  color: #5c25f2;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
