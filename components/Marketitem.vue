<template>
  <div class="slider-container">

    <div class="slider" ref="slider">
      <div class="tpn_card" v-for="item in items" :key="item.id">
        <div style="display: flex">
          <div>
            <img
              :src="item.logoSrc"
              style="width: 26px; height: 26px; margin-right: 5px"
            />
          </div>
          <div style="font-size: 14px">{{ item.title }}</div>
          <div style="display: flex">
            <div class="loveimg">
              <img
                :src="item.loveSrc"
                style="
                  width: 18px;
                  height: 18px;
                  padding: 2.386px 1.5px 2.386px 1.501px;
                "
              />
            </div>
            <div>{{ item.loveCount }}</div>
          </div>
        </div>
        <img :src="item.imageSrc" class="tpn_cardimg" />
        <div class="content-under">{{ item.subtitle }}</div>
        <div class="font">{{ item.description }}</div>
        <div class="display">
          <div>฿ {{ item.price }}</div>
          <div class="buttonshop">
            <img
              :src="item.cartSrc"
              style="width: 26px; height: 26px; margin-right: 5px"
            />
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
      items: [
        {
          id: 1,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "Dragon Art",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 2,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "Dragon Art",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 3,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "Dragon Art",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 4,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "Dragon Art",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 5,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "Dragon Art",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 6,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "Dragon Art",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 7,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "Dragon Art",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 8,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "Dragon Art",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 9,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "Dragon Art",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
        {
          id: 10,
          logoSrc: require("@/assets/image/ROV.png"),
          title: "HP.SHOP. TH Official",
          loveSrc: require("@/assets/image/love2.png"),
          loveCount: 100,
          imageSrc: require("@/assets/image/cardgold.png"),
          subtitle: "Dragon Art",
          description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
          price: "1,999",
          cartSrc: require("@/assets/image/addcart.png"),
        },
      ],

    };
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style scoped>
.slider-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.slider {
    display: flex;
    transition: left 0.3s ease;
    position: relative;
    left: 0;
    flex-direction: row;
    flex-wrap: wrap;
}

.tpn_card {
  flex: 0 0 220px; /* กำหนดความกว้างของแต่ละการ์ด */
  margin-right: 20px; /* เพิ่มช่องว่างระหว่างการ์ด */
}





.dis-play-recom {
  display: flex;
  justify-content: space-between;
  padding: 25px;
}

.img-recom {
  width: 26px;
  height: 26px;
  margin-right: 5px;
  top: -5px;
  position: relative;
}
</style>
