<!-- Please remove this file from your project -->
<template>
  <div class="navbar-main">
    <div class="navbar">
      <div class="nav-left">
        <div class="">
          <div class="display-f">
            <img class="img-safe" src="~/assets/image/safe.png" />SAFE & SECURE
          </div>
        </div>
      </div>
      <div>
        <div class="nav-top">
          <Nuxt-link class="text-nav " to="/HomeMarket" target="_self"><div class="bottom-top button"> หน้าแรก</div></Nuxt-link>
          <Nuxt-link class="text-nav" to="/Market" target="_self"><div class="bottom-top button">ตลาดซื้อขาย</div></Nuxt-link>
          <Nuxt-link class="text-nav" to="/" target="_self"><div class="bottom-top button">การแข่งขันอีสปรอ์ต</div></Nuxt-link>
          <Nuxt-link class="text-nav" to="/" target="_self"><div class="bottom-top button">ข่าว</div></Nuxt-link>
          <Nuxt-link class="text-nav" to="/" target="_self"><div class="bottom-top button">ช่วยเหลือ</div></Nuxt-link>
          <Nuxt-link class="text-nav" to="/" target="_self"><div class="bottom-top bottom-w">Register</div></Nuxt-link>
          <Nuxt-link class="text-nav" to="/" target="_self"><div class="bottom-top bottom-y"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15.8334 9.99967H4.16675M15.8334 9.99967L11.6667 14.1663M15.8334 9.99967L11.6667 5.83301" stroke="#5C25F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg><span style="    padding: 0px 5px;">Sign in</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15.8334 9.99967H4.16675M15.8334 9.99967L11.6667 14.1663M15.8334 9.99967L11.6667 5.83301" stroke="#5C25F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div></Nuxt-link>
        </div>
      </div>
    </div>
    <div class="navbar">
      <div class="nav-left">
        <div>
          <div>Logo</div>
        </div>
      </div>
      <div>
        <div class="nav-top">
          <div class="search-container">
            <img src="~/assets/image/search-icon.png" alt="Search" class="search-icon" />
            <input type="text" class="search-input" placeholder="Search" />
          </div>
          <div class="icon"><img class="" src="~/assets/image/love.png" /></div>
          <div class="icon"><img class="" src="~/assets/image/bell.png" /></div>
          <div class="icon">
            <img class="" src="~/assets/image/comment.png" />
          </div>
          <div class="icon-cart">
            <img class="" src="~/assets/image/Cart.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="navbar">
      <div>
        <div class="nav-top">
          <Nuxt-link class="text-nav " to="/" target="_self"><div class="bottom-top button" style="10px 0px 0px 0px">ประเภทสินค้า</div></Nuxt-link>
          <Nuxt-link class="text-nav " to="/" target="_self"><div class="bottom-top button">เกม</div></Nuxt-link>
          <Nuxt-link class="text-nav " to="/" target="_self"><div class="bottom-top button">สินค้าทั้งหมด</div></Nuxt-link>
          <Nuxt-link class="text-nav " to="/" target="_self"><div class="bottom-top button">ลดราคา</div></Nuxt-link>
          <Nuxt-link class="text-nav " to="/" target="_self"><div class="bottom-top button">บัตรของขวัญ</div></Nuxt-link>
        </div>
      </div>
      <div class="nav-right">
        <div>
          <div class="bottom-top b-top-cy"><img class="" src="~/assets/image/home.png" style="padding-right: 5px;"/>สร้างร้านค้า</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

