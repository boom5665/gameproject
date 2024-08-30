<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <!-- ส่วนหัว -->
      <!-- <div class="shop-header">
        <div class="shop-info">
          <img :src="shopLogo" class="shop-logo" />
          <div class="shop-name">
            <div class="d-flex">
              <div>{{ shopName }}</div>
              <span v-if="verified" class="verified">&#x2714;</span>
            </div>
            <div>
              <button class="view-shop-button">ดูหน้าร้านค้า</button>
            </div>
          </div>
        </div>
        <div class="shop-stats">
          <div class="stat-item">
            <span>{{ productsCount }}</span>
            <div class="stat-item-font-under">สินค้าทั้งหมด</div>
          </div>
          <div class="stat-item">
            <span>{{ followersCount }}</span>
            <div class="stat-item-font-under">ผู้ติดตาม</div>
          </div>
          <div class="stat-item">
            <span>{{ reviewsCount }}</span>
            <div class="stat-item-font-under">รีวิว</div>
          </div>
        </div>
        <div class="shop-promotion">
          <div>แพ็คเกจ</div>
          <div class="price">29฿/เดือน</div>
          <div class="time">เหลือเวลา 16 วัน</div>
        </div>
      </div> -->
      <div class="container form-create">
        <div class="box-manage">
          <div style="width: 100%">
            <div class="sidebar">
              <button
                class="sidebar-button"
                @click="currentView = 'Shopmanage'"
                :class="{ active: currentView === 'Shopmanage' }"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <g clip-path="url(#clip0_12352_22197)">
                    <mask id="path-1-inside-1_12352_22197" fill="white">
                      <path
                        d="M10 5.83333V0.383333C10.7608 0.671667 11.4608 1.11583 12.0542 1.70833L14.9575 4.61333C15.5508 5.20583 15.995 5.90583 16.2833 6.66667H10.8333C10.3733 6.66667 10 6.2925 10 5.83333ZM11.0583 16.2333C10.3808 16.9108 10 17.8292 10 18.7875V20H11.2125C12.1708 20 13.0892 19.6192 13.7667 18.9417L19.4392 13.2692C20.1867 12.5217 20.1867 11.3083 19.4392 10.5608C18.6917 9.81333 17.4783 9.81333 16.7308 10.5608L11.0583 16.2333ZM8.33333 18.7875C8.33333 17.3775 8.8825 16.0517 9.87917 15.055L15.5517 9.3825C15.8758 9.05833 16.2533 8.80917 16.6608 8.63167C16.6575 8.53167 16.6533 8.4325 16.6467 8.3325H10.8333C9.455 8.3325 8.33333 7.21083 8.33333 5.8325V0.02C8.19917 0.0108333 8.065 0 7.92917 0H4.16667C1.86917 0 0 1.86917 0 4.16667V15.8333C0 18.1308 1.86917 20 4.16667 20H8.33333V18.7875Z"
                      />
                    </mask>
                    <path
                      d="M10 5.83333V0.383333C10.7608 0.671667 11.4608 1.11583 12.0542 1.70833L14.9575 4.61333C15.5508 5.20583 15.995 5.90583 16.2833 6.66667H10.8333C10.3733 6.66667 10 6.2925 10 5.83333ZM11.0583 16.2333C10.3808 16.9108 10 17.8292 10 18.7875V20H11.2125C12.1708 20 13.0892 19.6192 13.7667 18.9417L19.4392 13.2692C20.1867 12.5217 20.1867 11.3083 19.4392 10.5608C18.6917 9.81333 17.4783 9.81333 16.7308 10.5608L11.0583 16.2333ZM8.33333 18.7875C8.33333 17.3775 8.8825 16.0517 9.87917 15.055L15.5517 9.3825C15.8758 9.05833 16.2533 8.80917 16.6608 8.63167C16.6575 8.53167 16.6533 8.4325 16.6467 8.3325H10.8333C9.455 8.3325 8.33333 7.21083 8.33333 5.8325V0.02C8.19917 0.0108333 8.065 0 7.92917 0H4.16667C1.86917 0 0 1.86917 0 4.16667V15.8333C0 18.1308 1.86917 20 4.16667 20H8.33333V18.7875Z"
                      fill="white"
                    />
                    <path
                      d="M10 0.383333L17.56 -19.5655L-11.3333 -30.5153V0.383333H10ZM12.0542 1.70833L27.1434 -13.3723L27.136 -13.3797L27.1285 -13.3872L12.0542 1.70833ZM14.9575 4.61333L-0.131774 19.6939L-0.12431 19.7014L-0.11684 19.7089L14.9575 4.61333ZM16.2833 6.66667V28H47.1819L36.2322 -0.893363L16.2833 6.66667ZM10 20H-11.3333V41.3333H10V20ZM9.87917 15.055L-5.20578 -0.029947L-5.20578 -0.029946L9.87917 15.055ZM15.5517 9.3825L30.6366 24.4674L15.5517 9.3825ZM16.6608 8.63167L25.1802 28.1901L38.4651 22.4034L37.9823 7.92095L16.6608 8.63167ZM16.6467 8.3325L37.9328 6.91343L36.6051 -13.0008H16.6467V8.3325ZM8.33333 0.02H29.6667V-19.9055L9.7875 -21.2637L8.33333 0.02ZM8.33333 20V41.3333H29.6667V20H8.33333ZM31.3333 5.83333V0.383333H-11.3333V5.83333H31.3333ZM2.43997 20.3322C0.449202 19.5778 -1.429 18.3928 -3.02017 16.8039L27.1285 -13.3872C24.3507 -16.1611 21.0725 -18.2344 17.56 -19.5655L2.43997 20.3322ZM-3.03511 16.7889L-0.131774 19.6939L30.0468 -10.4673L27.1434 -13.3723L-3.03511 16.7889ZM-0.11684 19.7089C-1.72229 18.1057 -2.91116 16.2173 -3.66553 14.2267L36.2322 -0.893363C34.9012 -4.40559 32.824 -7.69401 30.0318 -10.4822L-0.11684 19.7089ZM16.2833 -14.6667H10.8333V28H16.2833V-14.6667ZM10.8333 -14.6667C22.1693 -14.6667 31.3333 -5.47569 31.3333 5.83333H-11.3333C-11.3333 18.0607 -1.42262 28 10.8333 28V-14.6667ZM-4.02661 1.14839C-8.70055 5.82233 -11.3333 12.1651 -11.3333 18.7875H31.3333C31.3333 23.4932 29.4622 27.9993 26.1433 31.3183L-4.02661 1.14839ZM-11.3333 18.7875V20H31.3333V18.7875H-11.3333ZM10 41.3333H11.2125V-1.33333H10V41.3333ZM11.2125 41.3333C17.8349 41.3333 24.1777 38.7006 28.8516 34.0266L-1.31828 3.85672C2.00066 0.537782 6.50675 -1.33333 11.2125 -1.33333V41.3333ZM28.8516 34.0266L34.5241 28.3541L4.35422 -1.81578L-1.31828 3.85672L28.8516 34.0266ZM34.5241 28.3541C43.6028 19.2754 43.6028 4.55457 34.5241 -4.52411L4.35422 25.6458C-3.22946 18.0621 -3.22946 5.76791 4.35422 -1.81578L34.5241 28.3541ZM34.5241 -4.52411C25.4454 -13.6028 10.7246 -13.6028 1.64589 -4.52411L31.8158 25.6458C24.2321 33.2295 11.9379 33.2295 4.35422 25.6458L34.5241 -4.52411ZM1.64589 -4.52411L-4.02661 1.14839L26.1433 31.3183L31.8158 25.6458L1.64589 -4.52411ZM29.6667 18.7875C29.6667 23.0343 27.9691 27.135 24.9641 30.1399L-5.20578 -0.029946C-10.2041 4.96835 -13 11.7207 -13 18.7875H29.6667ZM24.9641 30.1399L30.6366 24.4674L0.466724 -5.70245L-5.20578 -0.0299471L24.9641 30.1399ZM30.6366 24.4674C28.9514 26.1527 27.0611 27.3708 25.1802 28.1901L8.14152 -10.9268C5.44557 -9.75246 2.80027 -8.03599 0.466723 -5.70245L30.6366 24.4674ZM37.9823 7.92095C37.9753 7.71034 37.9617 7.34816 37.9328 6.91343L-4.63942 9.75157C-4.65507 9.51684 -4.6603 9.35299 -4.66066 9.34238L37.9823 7.92095ZM16.6467 -13.0008H10.8333V29.6658H16.6467V-13.0008ZM10.8333 -13.0008C21.2371 -13.0008 29.6667 -4.57125 29.6667 5.8325H-13C-13 18.9929 -2.32707 29.6658 10.8333 29.6658V-13.0008ZM29.6667 5.8325V0.02H-13V5.8325H29.6667ZM9.7875 -21.2637C9.79033 -21.2635 9.78977 -21.2636 9.77184 -21.2648C9.75917 -21.2657 9.72736 -21.2679 9.69394 -21.2702C9.62653 -21.2749 9.50191 -21.2833 9.35176 -21.2919C9.05597 -21.3088 8.54978 -21.3333 7.92917 -21.3333V21.3333C7.44439 21.3333 7.07319 21.3142 6.912 21.305C6.82914 21.3002 6.7717 21.2963 6.77142 21.2962C6.77027 21.2962 6.77101 21.2962 6.77504 21.2965C6.77967 21.2968 6.78438 21.2971 6.79419 21.2978C6.80981 21.2989 6.8428 21.3012 6.87917 21.3037L9.7875 -21.2637ZM7.92917 -21.3333H4.16667V21.3333H7.92917V-21.3333ZM4.16667 -21.3333C-9.91291 -21.3333 -21.3333 -9.91291 -21.3333 4.16667H21.3333C21.3333 13.6512 13.6512 21.3333 4.16667 21.3333V-21.3333ZM-21.3333 4.16667V15.8333H21.3333V4.16667H-21.3333ZM-21.3333 15.8333C-21.3333 29.9129 -9.91291 41.3333 4.16667 41.3333V-1.33333C13.6512 -1.33333 21.3333 6.34876 21.3333 15.8333H-21.3333ZM4.16667 41.3333H8.33333V-1.33333H4.16667V41.3333ZM29.6667 20V18.7875H-13V20H29.6667Z"
                      mask="url(#path-1-inside-1_12352_22197)"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_12352_22197">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                จัดการสินค้า
              </button>
              <button
                class="sidebar-button"
                @click="currentView = 'ShopOrder'"
                :class="{ active: currentView === 'ShopOrder' }"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M12.7196 1.83386L12.8377 2.16667H13.1908H13.3333C15.3547 2.16667 17 3.81198 17 5.83333V15.8333C17 17.8547 15.3547 19.5 13.3333 19.5H6.66667C4.64531 19.5 3 17.8547 3 15.8333V5.83333C3 3.81198 4.64531 2.16667 6.66667 2.16667H6.80917H7.1623L7.28038 1.83386C7.5562 1.05651 8.29886 0.5 9.16667 0.5H10.8333C11.7011 0.5 12.4438 1.05651 12.7196 1.83386ZM10.5261 13.2294L10.6725 13.0829V13.0543C11.0412 12.5338 10.993 11.8084 10.5261 11.3423C10.005 10.8212 9.16171 10.8212 8.64061 11.3423L7.21401 12.7689L6.7864 12.3637L6.78594 12.3633C6.25139 11.8581 5.40861 11.8807 4.90207 12.4152C4.39547 12.9498 4.41812 13.7938 4.95274 14.3004L5.29667 13.9375L4.95275 14.3004L5.49358 14.8129L5.49378 14.8131C5.97883 15.2723 6.59769 15.5033 7.2175 15.5033C7.85909 15.5033 8.49982 15.2556 8.99022 14.7652L10.5261 13.2294ZM10.5261 8.22939L10.6725 8.08294V8.05428C11.0413 7.53372 10.9929 6.80812 10.5258 6.34199C10.0046 5.82118 9.16161 5.82128 8.64061 6.34228L7.21401 7.76889L6.7864 7.36372L6.78547 7.36283C6.25222 6.86017 5.40938 6.87856 4.90164 7.4157C4.39549 7.95031 4.41827 8.79395 4.95274 9.30043L5.29667 8.9375L4.95275 9.30043L5.49358 9.81293L5.49378 9.81312C5.97883 10.2723 6.59769 10.5033 7.2175 10.5033C7.85909 10.5033 8.49983 10.2556 8.99022 9.76522L10.5261 8.22939ZM11.6667 15.5H14.1667C14.904 15.5 15.5 14.9025 15.5 14.1667C15.5 13.4308 14.904 12.8333 14.1667 12.8333H11.6667C10.9294 12.8333 10.3333 13.4308 10.3333 14.1667C10.3333 14.9025 10.9294 15.5 11.6667 15.5ZM11.6667 10.5H14.1667C14.904 10.5 15.5 9.90248 15.5 9.16667C15.5 8.43085 14.904 7.83333 14.1667 7.83333H11.6667C10.9294 7.83333 10.3333 8.43085 10.3333 9.16667C10.3333 9.90248 10.9294 10.5 11.6667 10.5Z"
                  /></svg
                >รายการสั่งซื้อ
              </button>
              <!-- <button
                class="sidebar-button"
                @click="currentView = 'ShopStore'"
                :class="{ active: currentView === 'ShopStore' }"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <g clip-path="url(#clip0_12352_348)">
                    <path
                      d="M17.5752 12.0603L17.4771 12.0037L17.1013 11.7871L16.7943 11.6101L16.8596 11.2617C16.939 10.8381 16.9785 10.4156 16.9785 9.99971C16.9785 9.59122 16.9404 9.17631 16.8637 8.76017L16.862 8.75414L14.3096 11.3066C13.2192 12.397 11.767 12.9989 10.2243 12.9989H9.58267C8.15736 12.9989 6.99933 11.8409 6.99933 10.4155V9.77388C6.99933 8.23197 7.60127 6.77992 8.69146 5.68881L8.69161 5.68866L11.9755 2.40476C11.9266 1.34564 11.0486 0.498047 9.97767 0.498047C8.87547 0.498047 7.97767 1.39586 7.97767 2.49805V2.93305V3.28665L7.64426 3.40448C6.82952 3.6924 6.07584 4.12727 5.42201 4.68703L5.15362 4.9168L4.84742 4.74056L4.47282 4.52496C4.01008 4.2592 3.47305 4.18864 2.95436 4.32834L2.95425 4.32837C2.43856 4.46713 2.00929 4.7979 1.7428 5.26143L1.74253 5.26189C1.47564 5.72494 1.40577 6.26235 1.54538 6.77937L1.54549 6.77979C1.68418 7.29521 2.01475 7.72452 2.47917 7.99196C2.47918 7.99196 2.47919 7.99197 2.4792 7.99198C2.47932 7.99205 2.47945 7.99212 2.47958 7.99219L2.855 8.20779L3.16286 8.38459L3.09744 8.73352C3.018 9.15718 2.9785 9.57967 2.9785 9.99638C2.9785 10.4131 3.018 10.8356 3.09744 11.2592L3.16286 11.6082L2.855 11.785L2.47958 12.0006C2.01534 12.2677 1.68503 12.6971 1.54538 13.2134L17.5752 12.0603ZM17.5752 12.0603C18.4546 12.6355 18.7438 13.8085 18.2135 14.7303C17.9461 15.1949 17.5166 15.5257 17.0011 15.6644L17.0001 15.6647C16.4841 15.8046 15.9475 15.7346 15.4828 15.468C15.4827 15.4679 15.4826 15.4678 15.4824 15.4678L15.1079 15.2522L14.8017 15.076L14.5333 15.3057C13.8795 15.8655 13.1258 16.3004 12.3111 16.5883L11.9777 16.7061V17.0597V17.4947C11.9777 18.5969 11.0799 19.4947 9.97767 19.4947C8.87547 19.4947 7.97767 18.5969 7.97767 17.4947V17.0597V16.7061L7.64426 16.5883C6.82929 16.3003 6.07576 15.8662 5.42227 15.306L5.15385 15.0758L4.84742 15.2522L4.47242 15.468L4.47235 15.4681C4.00984 15.7344 3.47325 15.8048 2.95494 15.6646L2.9541 15.6643C2.43768 15.5256 2.00857 15.1949 1.74212 14.7308L1.74181 14.7302C1.47571 14.2681 1.40575 13.7306 1.54534 13.2135L17.5752 12.0603ZM14.6377 3.51599L10.5779 7.57577C9.99422 8.15943 9.66683 8.95056 9.66683 9.77555V10.333H10.2243C11.0489 10.333 11.8402 10.0051 12.4241 9.42199L14.6377 3.51599ZM14.6377 3.51599L16.4839 5.36221L12.4243 9.42177L14.6377 3.51599ZM19.1166 2.72949L19.1162 2.7299L18.3693 3.47677L16.5231 1.63055L17.1979 0.955767C17.7105 0.443181 18.5111 0.378936 19.0151 0.791594L19.0153 0.791795C19.6245 1.28983 19.6578 2.1873 19.1174 2.72866C19.1173 2.72879 19.1172 2.72893 19.117 2.72907C19.1169 2.72921 19.1168 2.72935 19.1166 2.72949Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_12352_348">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs></svg
                >จัดการร้านค้า
              </button> -->
            </div>
          </div>
          <div>
            <!-- ใช้ dynamic component rendering -->
            <div class="component-wrapper">
              <component
                :is="currentView"
                :items="itemsData"
                :orderItems="orderItems"
                :purchasedItems="purchasedItems"
              />
            </div>
          </div>
          <Loader :isLoading="isLoading" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Shopmanage from "@/components/Shopmanage.vue";
import ShopOrder from "@/components/ShopOrder.vue";
import ShopStore from "@/components/ShopStore.vue";

export default {
  components: {
    Shopmanage,
    ShopOrder,
    ShopStore,
  },
  data() {
    return {
      isLoading: false, // ตัวแปรที่ใช้แสดง loader
      shopLogo: require("@/assets/image/genshin.png"),
      shopName: "ร้านค้าของฉัน",
      shopDescription: "รายละเอียดร้านค้า",
      shopLocation: "ตำแหน่งที่ตั้งร้านค้า",
      verified: true,
      productsCount: 50,
      followersCount: 1000,
      reviewsCount: 200,
      currentView: "ShopOrder", // ค่าเริ่มต้นของ currentView
      itemsData: [
        {
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "แก้ไขข้อมูลสินค้า",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/Delete.png"),
        },
      ],
      orderItems: [], // เริ่มต้นด้วยอาร์เรย์ว่างสำหรับ orderItems],
      purchasedItems: [],
    };
  },
  async mounted() {
    await this.fetchdata();
  },
  methods: {
    async fetchdata() {
      this.isLoading = true; // แสดง loader
      try {
        // const token = this.$cookies.get("authToken");
        console.log(token);
        const token = this.$cookies.get("authToken");
        const response = await this.$axios.$post(
          "/payment/vendor/product/request/list/read",
          {
            id: 0,
            status: "",
            product_name: "",
            is_sort_reserve_expire_at: true,
            start_created_at: "",
            end_created_at: "",
            start_updated_at: "",
            end_updated_at: "",
            page: 0,
            limit: 500,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const resalldata = response.data_list;
        console.log(resalldata);

        if (Array.isArray(resalldata) && resalldata.length > 0) {
          // ตรวจสอบว่า resalldata เป็นอาร์เรย์และไม่ว่าง
          resalldata.forEach((item) => {
            // ตรวจสอบความถูกต้องของข้อมูลก่อนใช้งาน

            const product = item.product || {}; // ตรวจสอบว่า product มีค่าเป็นออบเจกต์
            const customer = item.customer || {}; // ตรวจสอบว่า product มีค่าเป็นออบเจกต์
            const newOrderItem = {
              amount: item.amount || null, // นำ amount จาก API มาใช้ ถ้าไม่มีจะใช้ null
              slipimg: item.evidence_bank_from_slip_img || null, // นำ slipimg
              payatt: item.evidence_bank_from_pay_at || null, // นำ slipimg
              bank: item.evidence_bank_from_bank || null,
              formname: item.evidence_bank_from_name || null,
              money: item.evidence_bank_from_pay_money || null,
              id: item.id || null, // นำ id จาก API มาใช้ ถ้าไม่มีจะใช้ null
              status: item.status || "Unknown", // นำ status จาก API มาใช้ ถ้าไม่มีจะใช้ 'Unknown'
              price: `฿${
                item.price_total ? item.price_total.toFixed(2) : "0.00"
              }`, // ใช้ price_total จาก API และเพิ่มเครื่องหมายบาท (฿) ถ้าไม่มีจะใช้ '0.00'
              phone: customer.phone || null,
              email: customer.email || null,
              img: product.img || "", // นำ img จาก product ใน API มาใช้ ถ้าไม่มีจะใช้ string ว่าง
              name: product.name || "Unknown", // นำ name จาก product ใน API มาใช้ ถ้าไม่มีจะใช้ 'Unknown'
              description: product.description || "Unknown", // นำ name จาก product ใน API มาใช้ ถ้าไม่มีจะใช้ 'Unknown'
              date: this.formatDate(item.created_at) || "Invalid Date", // ใช้ created_at จาก API และแปลงวันที่ให้อยู่ในรูปแบบที่ต้องการ ถ้าไม่มีจะใช้ 'Invalid Date'
            };

            // เพิ่มรายการใหม่ใน orderItems
            this.orderItems.push(newOrderItem);
          });
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (error) {
        console.error("ไม่มา", error);
      } finally {
        this.isLoading = false; // ซ่อน loader เมื่อกระบวนการเสร็จสิ้นไม่ว่าจะสำเร็จหรือไม่
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${hours}:${minutes} / ${day}-${month}-${year}`;
    },
  },
};
</script>







<style lang="scss" scoped>
.box-manage {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.component-wrapper {
  // max-height: 500px; /* กำหนดความสูงสูงสุด */
  overflow-y: auto; /* เพิ่มแถบเลื่อนแนวตั้งเมื่อเนื้อหาเกิน */
  overflow-x: hidden; /* ซ่อนแถบเลื่อนแนวนอน */
}
.M-Create-Backgroud .navtabs {
  max-width: 1092px;
  width: 1092px;
}
.M-Create-Backgroud .container {
  margin-top: 0px;
}
.shop-header {
  display: flex;
  align-items: center;
  background-color: #3c1b83;
  padding: 20px;
  color: white;
  border-radius: 10px;
  width: 100%;
}
.shop-info {
  display: flex;
  align-items: center;
  margin-right: auto;
}
.shop-logo {
  border-radius: 50%;
  width: 140px;
  margin-right: 15px;
}
.shop-name {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  flex-direction: column;
}
.shop-description,
.shop-location {
  font-size: 14px;
  color: #555;
  margin-top: 5px;
}
.stat-item {
  margin-bottom: 10px;
  .stat-item-font-under {
    font-size: 16px;
    color: #bababa;
  }
}

.verified {
  margin-left: 5px;
  color: #ffeb3b;
}
.view-shop-button {
  background-color: #ffeb3b;
  border: none;
  color: #5c25f2;
  padding: 8px 40px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
.view-shop-button:hover {
  background-color: #ccbc2f;
}
.shop-stats {
  display: flex;
  gap: 20px;
  margin-right: 40px;
  font-size: 18px;
  text-align: left;
}
.stat-item span {
  display: block;
  font-size: 18px;
  font-weight: bold;
}
.shop-promotion {
  text-align: center;
  background-color: #ffeb3b;
  padding: 10px;
  border-radius: 5px;
  color: #000;
}
.shop-promotion {
  .time {
    font-weight: bold;
    color: red;
    font-size: 12px;
  }
  .price {
    font-size: 24px;
    color: #5c25f2;
    width: 99%;
  }
}

.sidebar {
  display: flex;
  flex-direction: row;
  width: 50%;
}
.sidebar-button {
  margin: 5px 0;
  font-size: 18px;
  width: 100%;
  padding: 10px;
  background-color: #f8f8f8;
  border-radius: 8px;
  cursor: pointer;
  color: #bababa;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 10px;
}
.sidebar-button:hover svg {
  fill: #5c25f2 !important;
}
.sidebar-button:hover {
  color: #5c25f2 !important;
}
.sidebar-button.active {
  background-color: #ffeb3b;
  color: #5c25f2;
  border: 1px solid #5c25f2;
}
.sidebar-button.active svg {
  fill: #5c25f2; /* สีที่ต้องการสำหรับ SVG เมื่อปุ่ม active */
}
.sidebar-button svg {
  margin-right: 10px;
  transition: fill 0.3s;
  fill: #bababa; /* สีที่ต้องการสำหรับ SVG เมื่อปุ่ม active */
}
</style>
