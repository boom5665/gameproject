<!-- Please remove this file from your project -->
<template>
  <div>
    <footer>
      <div class="footer-head">
        <!-- Footer -->
        <div class="footer-layout">
          <div>
            <Nuxt-link class="text-nav" to="/" target="_self">
              <div>
                <img src="~/assets/image/Logo-Gamemarket.png" alt="Search" class="Logo-img logo-footer" />
              </div>
            </Nuxt-link>
            <!-- <div>
              20 ซอย รามอินทรา 5 แยก 15 แขวงอนุสาวรีย์ เขตบางเขน กรุงเทพมหานคร
              10220
            </div> -->
          </div>
          <div class="footer-menu">
            <div class="sub-menu">ช่วยเหลือ</div>
            <div class="sub-menu">เกี่ยวกับเรา</div>
            <div class="sub-menu">ติดต่อเรา</div>
          </div>
          <div>
            <!-- <div>Help Center</div>
            <div>Terms & Conditions</div>
            <div>Brand</div>
            <div>Privacy Policy</div> -->
          </div>
          <div style="margin-left: auto;">
            <div>Payment method</div>
            <div style="display: flex; align-items: center;">
              <div><img class="" src="~/assets/image/QR.png" /></div>
              <div class="disabled">
                <img class="" src="~/assets/image/mastercard_icon.png" />
              </div>
              <div class="disabled"><img class="" src="~/assets/image/visa_icon.png" /></div>
              <div class="disabled">
                <img class="" src="~/assets/image/true_wallet_icon.png" />
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      <div class="footer-bottom">
        <!-- Footer -->
        <div class="lower-footer-layout">
          <div style="">
            <div>© 2024 Game Market</div>
          </div>
          <div>
            <div class="d-flex">
              <div class="icon">
                <img class="" src="~/assets/image/logo-facebook.png" />
              </div>
              <div class="icon">
                <img class="" src="~/assets/image/logo-discord.png" />
              </div>
              <div class="icon">
                <img class="" src="~/assets/image/logo-twitter.png" />
              </div>
              <div class="icon">
                <img class="" src="~/assets/image/logo-twitch.png" />
              </div>
              <div class="icon">
                <img class="" src="~/assets/image/logo-youtube.png" />
              </div>
              <div class="icon">
                <img class="" src="~/assets/image/thai_etax_icon 1.png" />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
