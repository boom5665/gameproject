<template>
  <div class="slider-container">
    <div class="dis-play-recom">
      <div>
        <img
          src="~/assets/image/recom.png"
          class="img-recom"
        />Recommended
      </div>
      <div>
        See all &nbsp;
        <img
          src="~/assets/image/all.png"
          class="img-recom"
        />
      </div>
    </div>
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
    <button id="arrow-left" @click="slide('left')"><img src="~/assets/image/arrow-left.png" alt=""></button>
    <button id="arrow-right" @click="slide('right')"><img src="~/assets/image/arrow-right.png" alt=""></button>
    <div class="dots">
      <span
        class="dot"
        v-for="(dot, index) in numberOfDots"
        :key="index"
        :class="{ active: index === activeDot }"
        @click="goToSlide(index)"
      ></span>
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
      interval: 240, // ปรับขนาดช่องและ margin-right
      activeDot: 0,
    };
  },
  computed: {
    numberOfDots() {
      return Math.ceil(this.items.length / 4); // แบ่งจำนวน items ด้วย 3 เพราะว่าแสดง 3 items ต่อ slide
    },
  },
  mounted() {
    setInterval(() => {
      this.slide("right");
    }, 5000); // เปลี่ยนเป็นระยะเวลาที่คุณต้องการ
  },
  methods: {
    // เพิ่ม method ใหม่
    goToSlide(index) {
      this.activeDot = index;
      const slider = this.$refs.slider;
      slider.style.left = `-${index * this.interval * 2}px`;
    },
    // แก้ไข slide() เพื่อรองรับการเปลี่ยน activeDot
    slide(direction) {
      const slider = this.$refs.slider;
      const currentLeft = parseInt(getComputedStyle(slider).left) || 0;
      let newLeft;

      if (direction === "right") {
        if (
          Math.abs(currentLeft) + this.interval + slider.clientWidth >=
          slider.scrollWidth
        ) {
          newLeft = -(slider.scrollWidth - slider.clientWidth);
        } else {
          newLeft = currentLeft - this.interval;
        }
      } else if (direction === "left") {
        newLeft = currentLeft + this.interval;
        if (newLeft > 0) {
          newLeft = 0;
        }
      }

      this.activeDot = Math.abs(newLeft) / (this.interval * 2);
      slider.style.left = `${newLeft}px`;
    },
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
}

.tpn_card {
  flex: 0 0 220px; /* กำหนดความกว้างของแต่ละการ์ด */
  margin-right: 20px; /* เพิ่มช่องว่างระหว่างการ์ด */
}


#arrow-left,
#arrow-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: #fff;
}

#arrow-left {
  left: 45%;
  top: 95%;
  z-index: 500;
}

#arrow-right {
  right: 45%;
  top: 95%;
  z-index: 500;
}

.dots {
  position: relative;
  bottom: 0px;
  left: 98%;
  transform: translateX(-50%);
  display: flex;
      margin-bottom: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: #bbb;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.dot.active {
  background-color: #ffeb3b;
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
