<template>
  <div class="readnew width-hunded " >
    <div class="card-box" style="margin-bottom: 60px">
      <div style="display: flex; width: 100%">
        <div class="wid-one">
          <div><HomeCorousalNew :items="itemsbannerNew" /></div>
        </div>
      </div>
    </div>

    <div><HomeCorousalBanner :items="itemsbanner" /></div>

    <div class="card-box" style="margin-bottom: 60px">
      <div>
        <div class="font-head-content">
          <div class="">
            <img class="img-safe" src="~/assets/image/news.png" />ข่าวอื่นๆ
          </div>
        </div>
      </div>

      <div>
        <div class="flex-warp">
          <div
            class="margin-bottom"
            v-for="(item, index) in AllNews"
            :key="index"
          >
            <div>
              <div class="width-hunded">
                <img class="box-new-bottom" :src="item.imgSrc" />
              </div>
              <div class="content-new-bottom">
                <div class="font-newtop">{{ item.title }}</div>
                {{ item.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
import HomeCorousalBanner from "./HomeCorousalBanner.vue";
import HomeCorousalNew from "./HomeCorousalNew.vue";
export default {
  components: { HomeCorousalBanner, HomeCorousalNew },
  data() {
    return {
      currentPage: "marketplace",
      itemsbannerNew: [
        {
          imageSrc: require("@/assets/image/BannerNew.png"),
          title: "คู่มือการเล่น Teamfight Tactics ฉบับมือใหม่! อ่านจบ...",
          subtitle:
            "ถ้าพูดถึงเกมออนไลน์ที่เป็นที่นิยมในประเทศไทยและทั่วโลก หลายคนคงนึกถึง League of Legends หรือ LoL อย่างแน่นอน ซึ่งนอกจากเกมแล้ว แฟรนไชส์นี้ยังออกเกม Spin-off อย่าง Teamfight Tactics ที่เป็นเกมแนว auto-chess ซึ่งแม้ตัวเกมจะเป็นที่นิยมในหมู่แฟนเกม",
        },
        {
          imageSrc: require("@/assets/image/BannerNew.png"),
          title: "คู่มือการเล่น Teamfight Tactics ฉบับมือใหม่! อ่านจบ...",
          subtitle:
            "ถ้าพูดถึงเกมออนไลน์ที่เป็นที่นิยมในประเทศไทยและทั่วโลก หลายคนคงนึกถึง League of Legends หรือ LoL อย่างแน่นอน ซึ่งนอกจากเกมแล้ว แฟรนไชส์นี้ยังออกเกม Spin-off อย่าง Teamfight Tactics ที่เป็นเกมแนว auto-chess ซึ่งแม้ตัวเกมจะเป็นที่นิยมในหมู่แฟนเกม",
        },
        {
          imageSrc: require("@/assets/image/BannerNew.png"),
          title: "คู่มือการเล่น Teamfight Tactics ฉบับมือใหม่! อ่านจบ...",
          subtitle:
            "ถ้าพูดถึงเกมออนไลน์ที่เป็นที่นิยมในประเทศไทยและทั่วโลก หลายคนคงนึกถึง League of Legends หรือ LoL อย่างแน่นอน ซึ่งนอกจากเกมแล้ว แฟรนไชส์นี้ยังออกเกม Spin-off อย่าง Teamfight Tactics ที่เป็นเกมแนว auto-chess ซึ่งแม้ตัวเกมจะเป็นที่นิยมในหมู่แฟนเกม",
        },
      ],
      itemsbanner: [
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
        { imageSrc: require("~/assets/image/AD.png") },
      ],

      AllNews: [
        {
          imgSrc: require("@/assets/image/monthunt.png"),
          title: "Esports News 1",
          description: "Description for Esports news 1",
        },
        {
          imgSrc: require("@/assets/image/monthunt.png"),
          title: "Esports News 1",
          description: "Description for Esports news 1",
        },
        {
          imgSrc: require("@/assets/image/monthunt.png"),
          title: "Esports News 1",
          description: "Description for Esports news 1",
        },
        {
          imgSrc: require("@/assets/image/monthunt.png"),
          title: "Esports News 1",
          description: "Description for Esports news 1",
        },
        // Add more items as needed
      ],
    };
  },
  mounted() {
    // this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await this.$axios.$get(
          "https://dev-api-gamiqo.pirate168.com/api/v1/list/marketplace/home"
        );
        console.log(response);
        if (response.code === 200) {
        } else {
          console.error("Failed to fetch data:", response.msg);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>


