<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <div class="font-top-myshop">
        ร้านค้าของฉัน > <span class="font-proL-top">เพิ่มสินค้า</span>
      </div>

      <div class="form-create">
        <div style="width: 100%">
          <div class="font-form-add">เพิ่มสินค้า</div>
          <div class="dis-input">
            <div style="width: 49%">
              <label for="phone">ชื่อสินค้า <span id="dotstyle">*</span></label>
              <input type="text" id="phone" />
            </div>
            <div style="width: 49%">
              <label for="otherContact"
                >ประเภทสินค้า <span id="dotstyle">*</span></label
              >
              <input type="text" id="otherContact" />
            </div>
          </div>
          <div class="dis-input">
            <div style="width: 49%">
              <label for="phone"
                >ราคา <span id="dotstyle">*</span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 2.1875C5.69219 2.1875 2.1875 5.69219 2.1875 10C2.1875 14.3078 5.69219 17.8125 10 17.8125C14.3078 17.8125 17.8125 14.3078 17.8125 10C17.8125 5.69219 14.3078 2.1875 10 2.1875ZM10 5.39062C10.2009 5.39062 10.3972 5.45019 10.5643 5.56179C10.7313 5.67339 10.8614 5.83201 10.9383 6.01759C11.0152 6.20317 11.0353 6.40738 10.9961 6.60439C10.9569 6.8014 10.8602 6.98237 10.7182 7.12441C10.5761 7.26644 10.3952 7.36317 10.1981 7.40236C10.0011 7.44155 9.79692 7.42144 9.61134 7.34457C9.42576 7.26769 9.26714 7.13752 9.15554 6.9705C9.04394 6.80348 8.98438 6.60712 8.98438 6.40625C8.98438 6.13689 9.09138 5.87856 9.28184 5.68809C9.47231 5.49763 9.73064 5.39062 10 5.39062ZM11.875 14.2188H8.4375C8.27174 14.2188 8.11277 14.1529 7.99556 14.0357C7.87835 13.9185 7.8125 13.7595 7.8125 13.5938C7.8125 13.428 7.87835 13.269 7.99556 13.1518C8.11277 13.0346 8.27174 12.9688 8.4375 12.9688H9.53125V9.53125H8.90625C8.74049 9.53125 8.58152 9.4654 8.46431 9.34819C8.3471 9.23098 8.28125 9.07201 8.28125 8.90625C8.28125 8.74049 8.3471 8.58152 8.46431 8.46431C8.58152 8.3471 8.74049 8.28125 8.90625 8.28125H10.1562C10.322 8.28125 10.481 8.3471 10.5982 8.46431C10.7154 8.58152 10.7812 8.74049 10.7812 8.90625V12.9688H11.875C12.0408 12.9688 12.1997 13.0346 12.3169 13.1518C12.4342 13.269 12.5 13.428 12.5 13.5938C12.5 13.7595 12.4342 13.9185 12.3169 14.0357C12.1997 14.1529 12.0408 14.2188 11.875 14.2188Z"
                    fill="#5C25F2"
                  /></svg
              ></label>
              <input type="text" id="phone" />
            </div>
            <div style="width: 49%">
              <label for="otherContact"
                >ราคาพิเศษ<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 2.1875C5.69219 2.1875 2.1875 5.69219 2.1875 10C2.1875 14.3078 5.69219 17.8125 10 17.8125C14.3078 17.8125 17.8125 14.3078 17.8125 10C17.8125 5.69219 14.3078 2.1875 10 2.1875ZM10 5.39062C10.2009 5.39062 10.3972 5.45019 10.5643 5.56179C10.7313 5.67339 10.8614 5.83201 10.9383 6.01759C11.0152 6.20317 11.0353 6.40738 10.9961 6.60439C10.9569 6.8014 10.8602 6.98237 10.7182 7.12441C10.5761 7.26644 10.3952 7.36317 10.1981 7.40236C10.0011 7.44155 9.79692 7.42144 9.61134 7.34457C9.42576 7.26769 9.26714 7.13752 9.15554 6.9705C9.04394 6.80348 8.98438 6.60712 8.98438 6.40625C8.98438 6.13689 9.09138 5.87856 9.28184 5.68809C9.47231 5.49763 9.73064 5.39062 10 5.39062ZM11.875 14.2188H8.4375C8.27174 14.2188 8.11277 14.1529 7.99556 14.0357C7.87835 13.9185 7.8125 13.7595 7.8125 13.5938C7.8125 13.428 7.87835 13.269 7.99556 13.1518C8.11277 13.0346 8.27174 12.9688 8.4375 12.9688H9.53125V9.53125H8.90625C8.74049 9.53125 8.58152 9.4654 8.46431 9.34819C8.3471 9.23098 8.28125 9.07201 8.28125 8.90625C8.28125 8.74049 8.3471 8.58152 8.46431 8.46431C8.58152 8.3471 8.74049 8.28125 8.90625 8.28125H10.1562C10.322 8.28125 10.481 8.3471 10.5982 8.46431C10.7154 8.58152 10.7812 8.74049 10.7812 8.90625V12.9688H11.875C12.0408 12.9688 12.1997 13.0346 12.3169 13.1518C12.4342 13.269 12.5 13.428 12.5 13.5938C12.5 13.7595 12.4342 13.9185 12.3169 14.0357C12.1997 14.1529 12.0408 14.2188 11.875 14.2188Z"
                    fill="#5C25F2"
                  /></svg
              ></label>
              <input type="text" id="otherContact" />
            </div>
          </div>
          <div style="width: 100%">
            <label for="otherContact">คำอธิบาย</label>
            <input style="height: 200px" type="text" id="otherContact" />
          </div>
          <div>
            <div>
              <div class="font-form-add">
                รูปหลัก <span id="dotstyle">*</span>
              </div>
              <div class="preview" style="width: max-content">
                <img :src="imageUrl" class="profile-img" v-show="showImage" />
              </div>
              <div
                class=""
                v-show="!showImage"
                @click="openNav"
                ref="sidebarOpener"
                style="width: max-content"
              >
                <img
                  class=""
                  style="margin: 15px 5px"
                  src="~/assets/image/img-main.png"
                />
              </div>
            </div>

            <div>
              <div class="font-form-add">
                คลังรูปภาพ (0/10) <span id="dotstyle">*</span>
              </div>
              <div class="preview" style="width: max-content">
                <!-- <img :src="imageUrl2" class="profile-img" v-show="showImage2" /> -->
              </div>
              <div
                class=""
                @click="openNav2"
                v-show="savedImageUrls"
                ref="sidebarOpener"
                style="display: flex; align-items: flex-start; width: 100%"
              >
                <img
                  class=""
                  style="margin: 15px 5px"
                  src="~/assets/image/img-main.png"
                />

                <div class="saved-images" v-if="savedImageUrls.length">
                  <div
                    v-for="(url, index) in savedImageUrls"
                    :key="index"
                    class="image-container"
                  >
                    <img :src="url" class="profile-img-main" />
                    <!-- <button @click="removeSavedImage(index)">Delete</button> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="font-form-add">รายละเอียดเพิ่มเติม</div>
            <div class="dis-input">
              <div style="width: 49%">
                <label for="phone"
                  >แท็กแพลตฟอร์ม <span id="dotstyle">*</span></label
                >
                <input type="text" id="phone" />
              </div>
              <div style="width: 49%">
                <label for="otherContact"
                  >แท็กแบรนด์ <span id="dotstyle">*</span></label
                >
                <input type="text" id="otherContact" />
              </div>
            </div>
            <div class="dis-input">
              <div style="width: 49%">
                <label for="phone"
                  >แท็กเวอร์ชั่น <span id="dotstyle">*</span></label
                >
                <input type="text" id="phone" />
              </div>
              <div style="width: 49%">
                <label for="otherContact">แท็ก</label>
                <input type="text" id="otherContact" />
              </div>
            </div>
            <div class="dis-input">
              <div style="width: 49%">
                <label for="phone"
                  >สินค้าในคลัง <span id="dotstyle">*</span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10 2.1875C5.69219 2.1875 2.1875 5.69219 2.1875 10C2.1875 14.3078 5.69219 17.8125 10 17.8125C14.3078 17.8125 17.8125 14.3078 17.8125 10C17.8125 5.69219 14.3078 2.1875 10 2.1875ZM10 5.39062C10.2009 5.39062 10.3972 5.45019 10.5643 5.56179C10.7313 5.67339 10.8614 5.83201 10.9383 6.01759C11.0152 6.20317 11.0353 6.40738 10.9961 6.60439C10.9569 6.8014 10.8602 6.98237 10.7182 7.12441C10.5761 7.26644 10.3952 7.36317 10.1981 7.40236C10.0011 7.44155 9.79692 7.42144 9.61134 7.34457C9.42576 7.26769 9.26714 7.13752 9.15554 6.9705C9.04394 6.80348 8.98438 6.60712 8.98438 6.40625C8.98438 6.13689 9.09138 5.87856 9.28184 5.68809C9.47231 5.49763 9.73064 5.39062 10 5.39062ZM11.875 14.2188H8.4375C8.27174 14.2188 8.11277 14.1529 7.99556 14.0357C7.87835 13.9185 7.8125 13.7595 7.8125 13.5938C7.8125 13.428 7.87835 13.269 7.99556 13.1518C8.11277 13.0346 8.27174 12.9688 8.4375 12.9688H9.53125V9.53125H8.90625C8.74049 9.53125 8.58152 9.4654 8.46431 9.34819C8.3471 9.23098 8.28125 9.07201 8.28125 8.90625C8.28125 8.74049 8.3471 8.58152 8.46431 8.46431C8.58152 8.3471 8.74049 8.28125 8.90625 8.28125H10.1562C10.322 8.28125 10.481 8.3471 10.5982 8.46431C10.7154 8.58152 10.7812 8.74049 10.7812 8.90625V12.9688H11.875C12.0408 12.9688 12.1997 13.0346 12.3169 13.1518C12.4342 13.269 12.5 13.428 12.5 13.5938C12.5 13.7595 12.4342 13.9185 12.3169 14.0357C12.1997 14.1529 12.0408 14.2188 11.875 14.2188Z"
                      fill="#5C25F2"
                    /></svg
                ></label>
                <input type="text" id="phone" />
              </div>
            </div>
          </div>
          <div>
            <div class="font-form-add">
              โค้ด <span id="dotstyle">*</span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 2.1875C5.69219 2.1875 2.1875 5.69219 2.1875 10C2.1875 14.3078 5.69219 17.8125 10 17.8125C14.3078 17.8125 17.8125 14.3078 17.8125 10C17.8125 5.69219 14.3078 2.1875 10 2.1875ZM10 5.39062C10.2009 5.39062 10.3972 5.45019 10.5643 5.56179C10.7313 5.67339 10.8614 5.83201 10.9383 6.01759C11.0152 6.20317 11.0353 6.40738 10.9961 6.60439C10.9569 6.8014 10.8602 6.98237 10.7182 7.12441C10.5761 7.26644 10.3952 7.36317 10.1981 7.40236C10.0011 7.44155 9.79692 7.42144 9.61134 7.34457C9.42576 7.26769 9.26714 7.13752 9.15554 6.9705C9.04394 6.80348 8.98438 6.60712 8.98438 6.40625C8.98438 6.13689 9.09138 5.87856 9.28184 5.68809C9.47231 5.49763 9.73064 5.39062 10 5.39062ZM11.875 14.2188H8.4375C8.27174 14.2188 8.11277 14.1529 7.99556 14.0357C7.87835 13.9185 7.8125 13.7595 7.8125 13.5938C7.8125 13.428 7.87835 13.269 7.99556 13.1518C8.11277 13.0346 8.27174 12.9688 8.4375 12.9688H9.53125V9.53125H8.90625C8.74049 9.53125 8.58152 9.4654 8.46431 9.34819C8.3471 9.23098 8.28125 9.07201 8.28125 8.90625C8.28125 8.74049 8.3471 8.58152 8.46431 8.46431C8.58152 8.3471 8.74049 8.28125 8.90625 8.28125H10.1562C10.322 8.28125 10.481 8.3471 10.5982 8.46431C10.7154 8.58152 10.7812 8.74049 10.7812 8.90625V12.9688H11.875C12.0408 12.9688 12.1997 13.0346 12.3169 13.1518C12.4342 13.269 12.5 13.428 12.5 13.5938C12.5 13.7595 12.4342 13.9185 12.3169 14.0357C12.1997 14.1529 12.0408 14.2188 11.875 14.2188Z"
                  fill="#5C25F2"
                />
              </svg>
            </div>
            <div class="dis-input">
              <div style="width: 49%">
                <label for="phone"
                  >ชื่อสินค้า <span id="dotstyle">*</span></label
                >
                <input type="text" id="phone" />
              </div>
              <div style="width: 15%">
                <div class="button-but">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M15.8334 9.99967H4.16675M15.8334 9.99967L11.6667 14.1663M15.8334 9.99967L11.6667 5.83301"
                      stroke="#5C25F2"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path></svg
                  >เพิ่มโค้ด
                </div>
              </div>
            </div>
            <div style="display: flex; width: 100%">
              <div class="line-table">
                <div for="phone">หมายเลข</div>
              </div>
              <div class="line-table">
                <div for="phone">สินค้า</div>
              </div>
              <div class="line-table">
                <div for="phone">วันหมดอายุ</div>
              </div>
            </div>
            <div style="display: flex; width: 100%">
              <div class="line-table">
                <div for="phone">หมายเลข</div>
              </div>
            </div>
          </div>
          <button type="submit" class="submit" @click.prevent="submitData">
            <img
              class=""
              style="margin: 0px 5px; width: 20px"
              src="~/assets/image/Save.png"
              alt="Save icon"
            />
            Submit
          </button>

          <div id="mySidenav" class="sidenav">
            <div>
              <a href="javascript:void(0)" class="closebtn" @click="closeNav"
                ><div class="font-top-close">เพิ่มสื่อในคลังรูปภาพ</div>
                <div>&times;</div>
              </a>
              <div class="pad-right">
                <div style="width: 100%">
                  <label for="phone" class="font-form-myshop-under"
                    >ประเภทของสื่อ
                    <span id="dotstyle"
                      ><span id="dotstyle">*</span></span
                    ></label
                  >
                  <input type="text" id="phone" />
                </div>
                <div>ขนาดรูปที่แนะนำ 960 x 540</div>
                <div class="font-form-myshop-under">
                  <span id="dotstyle">*</span>รองรับไฟล์ gif, jpg, jpeg เท่านั้น
                  และ ไฟล์มีขนาดไม่เกิน 10 MB
                </div>
                <div>
                  <label
                    for="image_uploads"
                    class="img-upload-btn"
                    v-show="!imageUrl"
                  >
                    <div class="">
                      <img
                        class=""
                        style="margin: 15px 5px; width: 100%"
                        src="~/assets/image/img-main-nav.png"
                      /></div
                  ></label>
                  <input
                    type="file"
                    id="image_uploads"
                    name="image_uploads"
                    accept=".jpg, .jpeg, .png"
                    style="opacity: 0"
                    @change="handleFileChange"
                  />
                  <div class="preview">
                    <!-- <p class="no-pic" v-show="!imageUploaded">No Pic uploaded</p> -->
                    <img
                      :src="imageUrl"
                      class="profile-img-main"
                      v-show="imageUrl"
                    />
                  </div>
                </div>
                <div style="width: 100%">
                  <label for="phone" class="font-form-myshop-under"
                    >คำบรรยายภาพ เพื่อทำให้สินค้าของคุณถูกค้นหาได้ง่ายขึ้น
                    <span id="dotstyle">*</span></label
                  >
                  <input type="text" id="phone" />
                </div>
              </div>
            </div>
            <div class="pad-right">
              <div class="submit" @click="submitImage">Send</div>
            </div>
          </div>

          <div id="mySidenav2" class="sidenav">
            <div>
              <a href="javascript:void(0)" class="closebtn" @click="closeNav2"
                ><div class="font-top-close">เพิ่มสื่อในคลังรูปภาพ</div>
                <div>&times;</div>
              </a>
              <div class="pad-right">
                <div style="width: 100%">
                  <label for="media_type2" class="font-form-myshop-under"
                    >ประเภทของสื่อ
                    <span id="dotstyle"><span id="dotstyle">*</span></span>
                  </label>
                  <input type="text" id="media_type2" />
                </div>
                <div>ขนาดรูปที่แนะนำ 960 x 540</div>
                <div class="font-form-myshop-under">
                  <span id="dotstyle">*</span> รองรับไฟล์ gif, jpg, jpeg
                  เท่านั้น และ ไฟล์มีขนาดไม่เกิน 10 MB
                </div>
                <div>
                  <label for="image_uploads2" class="img-upload-btn">
                    <div>
                      <img
                        class=""
                        style="margin: 15px 5px; width: 100%"
                        src="~/assets/image/img-main-nav.png"
                      />
                    </div>
                  </label>
                  <input
                    type="file"
                    id="image_uploads2"
                    name="image_uploads2"
                    accept=".jpg, .jpeg, .png"
                    style="opacity: 0"
                    @change="handleFileChange2"
                    multiple
                  />
                  <div>คลังรูปภาพ (1/10)</div>
                  <div class="preview">
                    <div v-if="!imageUrls2.length"></div>
                    <div v-else>
                      <div
                        v-for="(url, index) in imageUrls2"
                        :key="index"
                        class="image-container image-container-main"
                      >
                        <img :src="url" class="profile-img-main" />
                        <div @click="removeImage2(index)">
                          <img
                            class=""
                            style="margin: 15px 5px; width: 70%"
                            src="~/assets/image/Delete.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pad-right">
              <div class="submit" @click="submitImage">Send</div>
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
    return {
      // ตัวแปรหรือข้อมูลที่คุณต้องการนำเข้าไปใช้ใน component นี้
      imageData: null,
      imageUrl: false,
      showImage: false,
      showImage2: false,
      imageUrls2: [], // เก็บ URLs ของภาพที่อัปโหลด
      imageFiles2: [], // เก็บไฟล์ภาพที่อัปโหลด
      savedImageUrls: [], // เก็บ URLs ของภาพที่บันทึก
    };
  },

  methods: {
    openNav() {
      // เปิดเมนูด้านข้าง
      document.getElementById("mySidenav").style.width = "350px";
      document.getElementById("mySidenav").style.right = "0px";
      document.getElementById("mySidenav2").style.right = "-50px";
      document.getElementById("mySidenav2").style.width = "0";
    },
    closeNav() {
      // ปิดเมนูด้านข้าง
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.right = "-50px";
    },
    openNav2() {
      document.getElementById("mySidenav2").style.width = "350px";
      document.getElementById("mySidenav2").style.right = "0px";
      document.getElementById("mySidenav").style.right = "-50px";
      document.getElementById("mySidenav").style.width = "0";
    },
    closeNav2() {
      document.getElementById("mySidenav2").style.width = "0";
      document.getElementById("mySidenav2").style.right = "-50px";
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.imageData = file;
        this.imageUrl = URL.createObjectURL(file);
      } else {
        this.imageData = null;
        this.imageUrl = "";
      }
    },
    handleFileChange2(event) {
      const files = Array.from(event.target.files);
      files.forEach((file) => {
        const url = URL.createObjectURL(file);
        this.imageFiles2.push(file);
        this.imageUrls2.push(url);
      });
    },
    submitImage() {
      // ส่วนนี้คือการส่งข้อมูลไปยัง API หรือทำการบันทึกข้อมูลตามที่ต้องการ
      console.log("Submitted:", this.imageData);

      // เมื่อส่งเสร็จแล้วแสดงภาพที่อัพโหลด
      this.showImage = true;
      alert("เพิ่มภาพเรียบร้อย");
    },
    submitImage2() {
      // Logic for submitting images in mySidenav2
      this.savedImageUrls.push(...this.imageUrls2);
      this.imageUrls2 = [];
      this.imageFiles2 = [];
      document.getElementById("image_uploads2").value = ""; // รีเซ็ต input
      this.closeNav2();
    },
    submitData() {
      // ส่วนนี้คือการส่งข้อมูลไปยัง API หรือทำการบันทึกข้อมูลตามที่ต้องการ
      console.log("Sucess:", this.imageData, this.savedImageUrls);

      // เมื่อส่งเสร็จแล้วสามารถทำการ reset หรือแสดงผลอื่น ๆ ตามที่ต้องการได้
      alert("Data submitted successfully!");
    },

    removeImage2(index) {
      this.imageUrls2.splice(index, 1);
      this.imageFiles2.splice(index, 1);
    },
    removeSavedImage(index) {
      this.savedImageUrls.splice(index, 1);
    },
  },
  mounted() {
    const spans = document.querySelectorAll("span#dotstyle");
    spans.forEach((span) => {
      span.style.color = "red"; // ตั้งสีเป็นแดง
    });
  },
};
</script>



