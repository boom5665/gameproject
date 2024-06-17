<!-- src/components/Tabs.vue -->
<template>
  <div class="tabs">
    <div class="navtabs">
      <div class="navtab active" data-target="Hot" @click="selectTab('Hot')">
        Hot items
      </div>
      <div class="navtab" data-target="Sale" @click="selectTab('Sale')">
        Sale items
      </div>
      <div class="navtab" data-target="All" @click="selectTab('All')">
        All items
      </div>
      <div class="underline"></div>
    </div>

    <div id="Hot" class="content active">
      <Marketitem :items="hotItems" />
    </div>
    <div id="Sale" class="content">
      <Marketitem :items="saleItems" />
    </div>
    <div id="All" class="content">
      <Marketitem :items="allItems" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import Marketitem from "~/components/Marketitem.vue";

const hotItems = ref([
  {
    id: 1,
    logoSrc: require("@/assets/image/ROV.png"),
    title: "HP.SHOP. TH Official",
    loveSrc: require("@/assets/image/love2.png"),
    loveCount: 100,
    imageSrc: require("@/assets/image/cardgold.png"),
    subtitle: "Hot",
    description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
    price: "1,999",
    cartSrc: require("@/assets/image/addcart.png"),
  },
  // เพิ่มการ์ดอื่นๆ ตามต้องการ
]);

const saleItems = ref([
  {
    id: 1,
    logoSrc: require("@/assets/image/ROV.png"),
    title: "HP.SHOP. TH Official",
    loveSrc: require("@/assets/image/love2.png"),
    loveCount: 100,
    imageSrc: require("@/assets/image/cardgold.png"),
    subtitle: "Sale",
    description: "Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)",
    price: "1,999",
    cartSrc: require("@/assets/image/addcart.png"),
  },
  // เพิ่มการ์ดอื่นๆ ตามต้องการ
]);

const allItems = ref([
  ...hotItems.value,
  ...saleItems.value,
  // เพิ่มการ์ดอื่นๆ ตามต้องการ
]);

const tabs = ref([]);
const contents = ref([]);
const underline = ref(null);
const selectTab = (target) => {
  tabs.value.forEach((tab) => {
    tab.classList.remove("active");
    if (tab.getAttribute("data-target") === target) {
      tab.classList.add("active");
    }
  });
  contents.value.forEach((content) => {
    content.classList.remove("active");
    if (content.id === target) {
      content.classList.add("active");
    }
  });
  updateUnderline();
};

const updateUnderline = () => {
  const activeTab = document.querySelector(".navtab.active");
  if (activeTab && underline.value) {
    underline.value.style.width = `${activeTab.offsetWidth}px`;
    underline.value.style.left = `${activeTab.offsetLeft}px`;
  }
};
onMounted(() => {
  tabs.value = document.querySelectorAll(".navtab");
  contents.value = document.querySelectorAll(".content");
  underline.value = document.querySelector(".underline");
  updateUnderline();
  window.addEventListener("resize", updateUnderline);
});
</script>

