<template>
  <div class="co-new">
    <!-- ใช้คอมโพเนนต์ Carousel จาก BootstrapVue -->
    <b-carousel id="carousel1" v-model="slide" :interval="10000" controls>
      <!-- สร้างสไลด์ของ carousel แบบไดนามิกตามข้อมูลใน items -->
      <b-carousel-slide
        v-for="(img, index) in items"
        :key="index"
        :img-src="img.imageSrc"
      >
        <!-- แคปชั่นสำหรับแต่ละสไลด์ -->
        <div class="carousel-caption">
          <div class="caption-content">
            <div class="caption-title">{{ img.title }}</div>
            <div class="caption-subtitle">{{ img.subtitle }}</div>
          </div>
        </div>
      </b-carousel-slide>
    </b-carousel>

    <!-- ตัวบ่งชี้แบบกำหนดเองสำหรับการนำทางของ carousel -->
    <div class="custom-indicators">
      <!-- ปุ่มสำหรับไปยังสไลด์ก่อนหน้า -->
      <button id="arrow-left" @click="prevSlide">
        <img src="~/assets/image/arrow-left.png" alt="left arrow" />
      </button>
      <!-- ตัวบ่งชี้จุด (dots) -->
      <div class="dotposition">
        <!-- สร้างจุดไข่ปลา (dots) ตามจำนวนของ items -->
        <span
          v-for="(n, index) in items.length"
          :key="index"
          @click="goToSlide(index)"
          :class="{ active: index === slide }"
        ></span>
      </div>
      <!-- ปุ่มสำหรับไปยังสไลด์ถัดไป -->
      <button id="arrow-right" @click="nextSlide">
        <img src="~/assets/image/arrow-right.png" alt="right arrow" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // ข้อมูลที่จะแสดงใน carousel
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      // ติดตามดัชนีของสไลด์ปัจจุบัน
      slide: 0,
    };
  },
  methods: {
    // ไปยังสไลด์ที่ระบุด้วยดัชนี
    goToSlide(index) {
      this.slide = index;
    },
    // ไปยังสไลด์ก่อนหน้า
    prevSlide() {
      this.slide = (this.slide === 0) ? this.items.length - 1 : this.slide - 1;
    },
    // ไปยังสไลด์ถัดไป
    nextSlide() {
      this.slide = (this.slide === this.items.length - 1) ? 0 : this.slide + 1;
    },
  },
  watch: {
    slide(newSlide) {
      // อัปเดตการทำงานของ dot indicators เมื่อสไลด์เปลี่ยน
      this.$nextTick(() => {
        const dots = document.querySelectorAll('.dotposition span');
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === newSlide);
        });
      });
    },
  },
};
</script>

<style scoped>
.co-new {
  position: relative;
  /* ตั้งค่าการจัดตำแหน่งของ carousel และ caption */
}

.carousel-caption {
  position: absolute;
  bottom: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: auto;
  color: white;
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
}

.caption-content {
  max-width: 100%;
}

.caption-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.caption-subtitle {
  font-size: 16px;
}

.custom-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px; /* ปรับตำแหน่งตามที่ต้องการ */
  width: 100%;
}

#arrow-left,
#arrow-right {
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}

#arrow-left img,
#arrow-right img {
  width: 24px; /* ปรับขนาดไอคอนตามที่ต้องการ */
  height: auto;
}

.dotposition {
  display: flex;
  align-items: center;
}

.dotposition span {
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dotposition span.active {
  background-color: #5c25f2; /* เปลี่ยนสีตามที่ต้องการ */
}
</style>
