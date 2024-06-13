<template>
  <div>
    <div>
      <b-carousel id="carousel1" v-model="slide" :interval="0" controls>
        <b-carousel-slide
          v-for="(img, index) in images"
          :key="index"
          :img-src="img"
        ></b-carousel-slide>
      </b-carousel>
      <!-- จุดไข่ปลา-->
      <div class="custom-indicators">
        <button id="arrow-left" >
          <img src="~/assets/image/arrow-left.png" alt="" />
        </button>

        <span
          v-for="(n, index) in images.length"
          :key="index"
          @click="goToSlide(index)"
          :class="{ active: index === currentSlide }"
        ></span>
        <button id="arrow-right" >
          <img src="~/assets/image/arrow-right.png" alt="" />
        </button>
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
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.custom-prev,
.custom-next {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}

.carousel-inner {
  border: none; /* เอาเส้นขอบออก */
}

.carousel-indicators li {
  display: none !important;
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
  top: 80%;
  z-index: 0;
}

#arrow-right {
  right: 45%;
   top: 80%;
  z-index: 0;
}
</style>
