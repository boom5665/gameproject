<template>
  <div class="width-hunded">
    <div class="box-content">
      <div class="W-default">
        <ShopPayment :idd="idd" />
      </div>
    </div>
  </div>
</template>

<script>
import ShopPayment from "~/components/ShopPayment.vue"; // แก้ไข path ตามที่ตั้งค่าไฟล์ไว้

export default {
  components: {
    ShopPayment,
  },
  async asyncData({ params }) {
    const idd = params.idd;
    // ดึงข้อมูลเพิ่มเติมตามที่ต้องการ เช่น:
    // const data = await fetchShopPaymentById(idd);
    return { idd };
  },
};
</script>


