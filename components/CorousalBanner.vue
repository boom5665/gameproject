<template>
  <div>
    <div>
      <b-carousel id="carousel1" v-model="slide" :interval="4000" controls>
        <b-carousel-slide
          v-for="(img, index) in images"
          :key="index"
          :img-src="img"
        ></b-carousel-slide>
      </b-carousel>
      <!-- จุดไข่ปลา-->
      <div class="custom-indicators">
        <span
          v-for="(n, index) in images.length"
          :key="index"
          @click="goToSlide(index)"
          :class="{ active: index === currentSlide }"
        ></span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      slide: 0,
      images: [
        require("~/assets/image/AD.png"),
        require("~/assets/image/AD.png"),
        require("~/assets/image/AD.png"),
        require("~/assets/image/AD.png"),
      ],
    };
  },
  computed: {
    currentSlide() {
      return this.slide % this.images.length;
    },
    currentImage() {
      return this.images[this.currentSlide];
    },
  },
  methods: {
    goToSlide(index) {
      this.slide = index;
    },
  },
};
</script>


<style scoped>
.card-box {
  display: flex;
  width: 100%;
  padding: var(--Spacing-space-24, 24px) var(--Spacing-space-0, 0px);
  flex-direction: column;
  align-items: center;
  gap: var(--Spacing-space-48, 48px);
  border-radius: var(--Border-radius-8, 8px);
  background: var(--Color-Primary-700, #3a179a);
  margin-top: 60px;
}

/* ปรับแต่งสไตล์ของจุดไข่ปลา */
.custom-indicators {
  text-align: center;
  margin-top: 10px;
}

.custom-indicators span {
  display: inline-block;
  width: 10px; /* ปรับขนาดของจุดไข่ปลาตามต้องการ */
  height: 10px; /* ปรับขนาดของจุดไข่ปลาตามต้องการ */
  border-radius: 50%; /* ทำให้เป็นรูปวงกลม */
  background-color: #ccc; /* สีของจุดไข่ปลา */
  margin: 0 5px; /* ระยะห่างระหว่างจุดไข่ปลา */
  cursor: pointer;
}

.custom-indicators span.active {
  background-color: #ffeb3b; /* สีของจุดไข่ปลาเมื่อเป็นสไลด์ปัจจุบัน */
}

/* เอาขีดออกจากภาพ */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: none;
}

.carousel-inner {
  border: none; /* เอาเส้นขอบออก */
}
.carousel-indicators li {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
  display: none !important;
}
</style>
