<template>
  <div class="new">
    <div class="card-box" style="margin-bottom: 60px">
      <div>
        <div class="font-head-content">
          <div class="">
            <img
              class="img-safe"
              src="~/assets/image/Recommended news.png"
            />ข่าวที่น่าสนใจ
          </div>
        </div>
      </div>
      <div style="display: flex; width: 100%">
        <div class="wid-one">
          <div><HomeCorousalNew :items="itemsbannerNew" /></div>
        </div>
        <div class="wid-tree">
          <div
            class="margin-b-two"
            v-for="(item, index) in Topright"
            :key="index"
          >
            <div>
              <div class="width-hunded">
                <img class="box-new-right" :src="item.imgSrc" />
              </div>
              <div>
                <div class="content-new-right">
                  {{ item.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="margin-b-two font-head-content">
          <div class="">
            <img class="img-safe" src="~/assets/image/hot news.png" />ข่าวล่าสุด
          </div>
        </div>
        <div class="flex-warp">
          <div
            class="margin-bottom"
            v-for="(item, index) in TopsNews"
            :key="index"
          >
            <div>
              <div class="width-hunded">
                <img class="box-new-bottom" :src="item.imgSrc" />
              </div>
              <div></div>
              <div class="content-new-bottom">
                <div class="font-newtop">{{ item.title }}</div>
                {{ item.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-box" style="margin-bottom: 60px">
      <div class="head-text-top">
        <div
          @click="currentPage = 'marketplace'"
          :class="{ active: currentPage === 'marketplace' }"
        >
          Marketplace
        </div>
        <div
          @click="currentPage = 'esports'"
          :class="{ active: currentPage === 'esports' }"
        >
          Esports
        </div>
        <div
          @click="currentPage = 'jobBoard'"
          :class="{ active: currentPage === 'jobBoard' }"
        >
          Job board
        </div>
      </div>

      <div class="width-hunded">
        <div class="width-hunded">
          <img class="box-new-bottom" src="~/assets/image/AD.png" />
        </div>
      </div>

      <!-- Marketplace Page -->
      <div v-if="currentPage === 'marketplace'">
        <div class="flex-warp">
          <div
            class="margin-bottom"
            v-for="(item, index) in marketplaceNews"
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

      <!-- Esports Page -->
      <div v-if="currentPage === 'esports'">
        <div style="width: 100%; display: flex">
          <div class="flex-warp">
            <div
              class="margin-bottom"
              v-for="(item, index) in esportsNews"
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

      <!-- Job Board Page -->
      <div v-if="currentPage === 'jobBoard'">
        <div style="width: 100%; display: flex">
          <div class="flex-warp">
            <div
              class="margin-bottom"
              v-for="(item, index) in jobBoardNews"
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

    <div><HomeCorousalBanner :items="itemsbanner" /></div>

  <div class="card-box" style="margin-bottom: 60px">
      <div>
       <div class="font-head-content">
          <div class="">
            <img class="img-safe" src="~/assets/image/news.png" />ข่าวทั่วไป
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
      TopsNews: [
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

      Topright: [
        {
          imgSrc: require("@/assets/image/AD.png"),
          title: "Esports News 1",
          description:
            "คู่มือการเล่น Teamfight Tactics ฉบับมือใหม่!อ่านจบเล่นเป็นแน่นอน",
        },
        {
          imgSrc: require("@/assets/image/AD.png"),
          title: "Esports News 1",
          description:
            "คู่มือการเล่น Teamfight Tactics ฉบับมือใหม่!อ่านจบเล่นเป็นแน่นอน",
        },
        {
          imgSrc: require("@/assets/image/AD.png"),
          title: "Esports News 1",
          description:
            "คู่มือการเล่น Teamfight Tactics ฉบับมือใหม่!อ่านจบเล่นเป็นแน่นอน",
        },

        // Add more items as needed
      ],
      marketplaceNews: [
        {
          imgSrc: require("@/assets/image/monthunt.png"),
          title: "มาแล้ว ตัวอย่างใหม่ Monster...",
          description:
            "คู่มือการเล่น Teamfight Tactics ฉบับมือใหม่! อ่านจบเล่นเป็นแน่นอน",
        },
        {
          imgSrc: require("@/assets/image/monthunt.png"),
          title: "มาแล้ว ตัวอย่างใหม่ Monster...",
          description:
            "คู่มือการเล่น Teamfight Tactics ฉบับมือใหม่! อ่านจบเล่นเป็นแน่นอน",
        },
        {
          imgSrc: require("@/assets/image/monthunt.png"),
          title: "มาแล้ว ตัวอย่างใหม่ Monster...",
          description:
            "คู่มือการเล่น Teamfight Tactics ฉบับมือใหม่! อ่านจบเล่นเป็นแน่นอน",
        },
        {
          imgSrc: require("@/assets/image/monthunt.png"),
          title: "มาแล้ว ตัวอย่างใหม่ Monster...",
          description:
            "คู่มือการเล่น Teamfight Tactics ฉบับมือใหม่! อ่านจบเล่นเป็นแน่นอน",
        },

        // Add more items as needed
      ],
      esportsNews: [
        {
          imgSrc: require("@/assets/image/monthunt.png"),
          title: "Esports News 1",
          description: "Description for Esports news 1",
        },

        // Add more items as needed
      ],
      jobBoardNews: [
        {
          imgSrc: require("@/assets/image/monthunt.png"),
          title: "Job Board News 1",
          description: "Description for Job Board news 1",
        },

        // Add more items as needed
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

<style scoped>

</style>
