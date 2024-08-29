<!-- Please remove this file from your project -->
<template>
  <div class="navbar-main">
    <div class="navbar">
      <div class="nav-left">
        <div class="">
          <div class="display-f">
            <div>
              <img
                src="~/assets/image/Logo-Gamemarket.png"
                alt="Search"
                class="Logo-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="nav-top">
          <Nuxt-link class="text-nav" to="/" target="_self"
            ><div class="bottom-top button">หน้าแรก</div></Nuxt-link
          >
          <Nuxt-link class="text-nav" to="/" target="_self"
            ><div class="bottom-top button">ตลาดซื้อขาย</div></Nuxt-link
          >
          <!-- <Nuxt-link class="text-nav" to="/Market" target="_self"
            ><div class="bottom-top button">การแข่งขันอีสปรอ์ต</div></Nuxt-link
          > -->
          <!-- <Nuxt-link class="text-nav" to="/New" target="_self" -->
           <Nuxt-link class="text-nav" to="/" target="_self"
            ><div class="bottom-top button">ข่าว</div></Nuxt-link
          >
          <!-- <Nuxt-link class="text-nav" to="/" target="_self"
            ><div class="bottom-top button">ช่วยเหลือ</div></Nuxt-link
          > -->

          <div v-if="token" style="display: flex">
            <!-- แสดงข้อมูลหรือเมนูที่เกี่ยวข้องกับการล็อกอิน -->
            <!-- <Nuxt-link class="text-nav" to="/Profile" target="_self" -->
              <Nuxt-link class="text-nav" to="/" target="_self"
              >
              <div class="bottom-top bottom-w">
                โปรไฟล์ของฉัน
              </div>
              </Nuxt-link
            >
            <div class="text-nav" @click="logout" target="_self">
              <div class="bottom-top bottom-y">
                <span style="padding: 0px 5px">ล็อคเอาท์</span>
              </div>
            </div>
          </div>
          <div v-else style="display: flex">
            <!-- เมนูสำหรับผู้ใช้ที่ไม่ได้ล็อกอิน -->
            <Nuxt-link class="text-nav" to="/LogRegister" target="_self"
              ><div class="bottom-top bottom-w">สมัครสมาชิก</div></Nuxt-link
            >

            <Nuxt-link class="text-nav" to="/Login" target="_self"
              ><div class="bottom-top bottom-y">
                <span style="padding: 0px 5px">เข้าสู่ระบบ</span>
              </div></Nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="navbar">
      <div>
        <div class="nav-top">
          <!-- <div class="search-container">
            <img
              src="~/assets/image/search-icon.png"
              alt="Search"
              class="search-icon"
            />
            <input type="text" class="search-input" placeholder="Search" />
          </div> -->
          <!-- <div class="icon"><img class="" src="~/assets/image/love.png" /></div> -->
          <!-- <div class="icon"><img class="" src="~/assets/image/bell.png" /></div> -->
          <!-- <div class="icon">
            <img class="" src="~/assets/image/comment.png" />
          </div> -->
          <!-- <div class="icon-cart" @click="openNav">
            <img class="" src="~/assets/image/Cart.png" />
          </div> -->
        </div>
      </div>
    </div>
    <div class="navbar">
      <div>
        <div class="nav-top">
          <Nuxt-link class="text-nav" to="/" target="_self"
            ><div class="bottom-top button" style="10px 0px 0px 0px">
              ประเภทสินค้า
            </div></Nuxt-link
          >
          <Nuxt-link class="text-nav" to="/" target="_self"
            ><div class="bottom-top button">เกม</div></Nuxt-link
          >
          <Nuxt-link class="text-nav" to="/Shopmanage" target="_self"
            ><div class="bottom-top button">สินค้าทั้งหมด</div></Nuxt-link
          >
          <!-- <Nuxt-link class="text-nav" to="/" target="_self"
            ><div class="bottom-top button">ลดราคา</div></Nuxt-link
          > -->
          <!-- <Nuxt-link class="text-nav" to="/" target="_self"
            ><div class="bottom-top button">บัตรของขวัญ</div></Nuxt-link
          > -->
        </div>
      </div>

      <div class="nav-right">
        <div v-if="buttonText">
          <div class="text-nav" @click="handleNavigation">
            <div class="bottom-top bottom-ybottom-top bottom-y">
              <img
                class=""
                src="~/assets/image/home.png"
                style="padding-right: 5px"
              />
              {{ buttonText }}
            </div>
          </div>
        </div>
      </div>

      <!-- <div id="mySidenavtop" class="sidenav">
        <div class="" style="height: 100%">
          <a href="javascript:void(0)" class="closebtn" @click="closeNav">
            <div class="font-top-close">ตระกร้า</div>
            <div>&times;</div>
          </a>
          <div class="d-colum-space">
            <div class="" style="margin: 20px">
              <div v-for="product in products" :key="product.id">
                <div class="top-head">{{ product.name }}</div>
                <div class="shop-item">
                  <div class="d-flex">
                    <div style="margin-right: 20px">
                      <img
                        class="img-shop-nav"
                        :src="product.imageUrl"
                        alt="Product Image"
                      />
                    </div>
                    <div>
                      <div>{{ product.description }}</div>
                      <div style="display: flex; align-items: flex-end">
                        <div style="margin-right: 10px">
                          <img
                            class=""
                            src="~/assets/image/----.png"
                            @click="decreaseQuantity(product)"
                          />
                        </div>
                        <div>{{ product.quantity }}</div>
                        <div style="margin-left: 10px">
                          <img
                            class=""
                            style="
                              top: -1px;
                              margin-left: 2px;
                              position: relative;
                            "
                            src="~/assets/image/++++.png"
                            @click="increaseQuantity(product)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-colum">
                    <div>
                      <img
                        class=""
                        src="~/assets/image/trash.png"
                        @click="removeProduct(product)"
                      />
                    </div>
                    <div>฿{{ product.price.toLocaleString() }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div style="padding: 20px">
              <div class="box-total">
                <div class="dis-btween">
                  <div>ประหยัดเงินไป</div>
                  <div>- ฿0</div>
                </div>
                <div class="dis-btween">
                  <div>รวม</div>
                  <div>฿{{ totalAmount.toLocaleString() }}</div>
                </div>
              </div>
              <div class="submit">ไปชำระเงิน</div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      token: null,
      buttonText: "",
    };
  },

  async mounted() {
    const token = Cookies.get("authToken"); // ใช้ js-cookie โดยตรง
    // console.log("Token:", token);
    this.token = token; // กำหนดค่า token ให้กับ this.token
    if (this.token) {
      this.buttonText = "สร้างร้านค้า"; // ตั้งค่าเมื่อไม่มี token
      await this.fetchProfileData();
    }
  },

  methods: {
    async fetchProfileData() {
      if (!this.token) {
        // console.log("No token found");
        this.buttonText = "สร้างร้านค้า"; // ตั้งค่าเมื่อไม่มี token
        return;
      }

      try {
        const response = await this.$axios.$post(
          "/vendor/profile/me/read",
          {},
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );

        // console.log(response);

        // ตรวจสอบว่ามี token และมีข้อมูลจาก API
        this.buttonText = this.token && response ? "ดูร้านค้า" : "สร้างร้านค้า";

        // ใช้ $nextTick เพื่อให้ Vue ตรวจจับการเปลี่ยนแปลงค่า
        await this.$nextTick();
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    },

    async handleNavigation() {
      if (this.buttonText === "ดูร้านค้า") {
        if (this.token) {
          this.$router.push("/Shopmanage");
        } else {
          const result = await this.$swal.fire({
            title: "กรุณาสร้างสินค้าก่อน",
            icon: "success",
            confirmButtonText: "ยืนยัน",
            showCancelButton: false, // ซ่อนปุ่ม "ยกเลิก"
          });
          this.$router.push("/MarketCreateShop");
        }
      } else if (this.buttonText === "สร้างร้านค้า") {
        this.$router.push("/MarketCreateShop");
      }
    },

    async logout() {
      // ลบโทเคนออกจาก localStorage และรีเซ็ตค่า token
      localStorage.removeItem("authToken");
      this.token = null;

      // ลบโทเคนออกจากคุกกี้
      Cookies.remove("authToken");

      // แสดงข้อความสำเร็จด้วย SweetAlert2
      await this.$swal
        .fire({
          title: "ออกจากระบบสำเร็จ",
          icon: "success",
          timer: 1000, // หน่วงเวลา 1 วินาที
          timerProgressBar: true,
          showConfirmButton: false, // ไม่แสดงปุ่ม OK
        })
        .then(() => {
          // รีไดเรคไปยังหน้า login ก่อน
          this.$router.push("/login");

          // ตรวจสอบสถานะการรีเฟรช
          const hasRefreshed = localStorage.getItem("hasRefreshedMarketMyshop");

          if (hasRefreshed) {
            // ตั้งค่าสถานะว่าได้รีเฟรชหน้าแล้ว
            localStorage.setItem("hasRefreshedMarketMyshop", "true");

            // หน่วงเวลาเล็กน้อยก่อนรีเฟรชหน้าเว็บ
            setTimeout(() => {
              window.location.reload();
            }, 500); // หน่วงเวลา 0.5 วินาที
          }
        });
    },
  },
};
</script>

<style>
.d-colum-space {
  height: 95%;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
}
.d-flex {
  display: flex;
}

.d-colum {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.img-safe {
  /* padding-right: 8px; */
  top: 1px;
  position: relative;
}
.img-shop-nav {
  width: 50px;
  border-radius: 10px;
  height: 50px;
}
.box-total {
  display: flex;
  padding: var(--Spacing-space-16, 16px);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: var(--Border-radius-8, 8px);
  background: var(--Color-Primary-Pueple-500, #5c25f2);
}
.submit {
  width: 100%;
}

.dis-btween {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>



 data() {
    return {
      products: [
        {
          id: 1,
          name: "Razer Gold",
          imageUrl: require("@/assets/image/cardgold.png"),
          description: "Top up Razer Gold",
          category: "Digital",
          quantity: 1,
          price: 9999,
        },
      ],
      token: null,
      buttonText: "", // ค่าเริ่มต้นของปุ่มเป็นค่าว่าง
    };
  },
  computed: {
    // totalAmount() {
    //   return this.products.reduce((total, product) => {
    //     return total + product.price * product.quantity;
    //   }, 0);
    // },
  },
    // openNav() {
    //   // เปิดเมนูด้านข้าง
    //   document.getElementById("mySidenavtop").style.width = "400px";
    //   document.getElementById("mySidenavtop").style.right = "0px";
    // },
    // closeNav() {
    //   // ปิดเมนูด้านข้าง
    //   document.getElementById("mySidenavtop").style.width = "0";
    //   document.getElementById("mySidenavtop").style.right = "-50px";
    // },
    // increaseQuantity(product) {
    //   product.quantity += 1;
    // },
    // decreaseQuantity(product) {
    //   if (product.quantity > 1) {
    //     product.quantity -= 1;
    //   }
    // },
    // removeProduct(product) {
    //   this.products = this.products.filter((p) => p.id !== product.id);
    // },
