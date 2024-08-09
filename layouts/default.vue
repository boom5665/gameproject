<template>
  <div>
    <div class="box-cotent">
      <div class="box-Navbar">
        <Navbar />
      </div>
      <div class="W-default">
        <div class="w-content">
          <Nuxt />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Navbars/Header.vue";
import Footer from "~/components/Navbars/Footer.vue";
import Navbar from "~/components/Navbars/Navbar.vue";

export default {
  name: "default",
  components: {
    Header,
    Footer,
    Navbar,
  },
};
</script>


