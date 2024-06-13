<template>
  <div class="slider-container">
    <div class="dis-play-recom">
      <div>
        <img src="~/assets/image/Shop.png" class="img-recom" />Games
      </div>
      <div>
        See all &nbsp;
        <img src="~/assets/image/all.png" class="img-recom" />
      </div>
    </div>
    <div class="slider" ref="slider">
      <div class="tpn_game" v-for="item in items" :key="item.id">
        <img :src="item.imageSrc" class="tpn_cardimg" />
        <div class="content-game-under">{{ item.subtitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 2,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 3,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 4,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 5,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 6,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 7,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 8,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 9,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
        {
          id: 10,
          imageSrc: require("@/assets/image/genshin.png"),
          subtitle: "Dragon Art",
        },
      ],
    };
  },
  mounted() {
    $(this.$refs.slider).slick({
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:7,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000
    });
  },
};
</script>

<style>
.slider-container {
  width: 80%;
  margin: 20px auto;
}
.slick-slide img {
  width: 100%;
}
</style>

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
.tpn_cardimg {
  width: 164px;
  height: 164px;
  border-radius: 164px;
}
.tpn_game {
  flex: 0 0 50px; /* กำหนดความกว้างของแต่ละการ์ด */
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
.content-game-under {
  color: var(--color-black-white-900, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>
