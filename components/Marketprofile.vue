<!-- Please remove this file from your project -->
<template>
  <div class="markettop-toppage">
    <div style="width: 100%">
      <div style="display: flex; justify-content: space-between">
        <div>
          <img class="imgshop-left" src="~/assets/image/genshin.png" />Genshin
          shop <img class="img-safe" src="~/assets/image/checkshop.png" />
        </div>
        <div style="display: flex">
          <div class="but-shop">
            <img class="img-safe" src="~/assets/image/++.png" />Follow
          </div>
          <div class="but-shop">
            <img class="img-safe" src="~/assets/image/com.png" />Message
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: flex-start">
        <div class="shop-like">
          <div>999k+</div>
          <div>Total items</div>
        </div>
        <div class="shop-like">
          <div>9,999</div>
          <div>Followers</div>
        </div>
        <div class="shop-like">
          <div>9,999</div>
          <div>Reviews</div>
        </div>
      </div>
        <div style="display: flex; justify-content: flex-start">
        <div class="shop-like">
          <div>Links</div>
          <div>Total items</div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.markettop-toppage {
  display: flex;
  width: 100%;
  padding: var(--Spacing-space-24, 24px) var(--Spacing-space-48, 48px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--Spacing-space-16, 16px);
  border-radius: var(--Border-radius-8, 8px);
  background: var(
    --Linear,
    linear-gradient(88deg, #6127ff 0.47%, #6f3aff 100%)
  );
  margin: 48px 0px;
}

.imgshop-left {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 4px solid var(--Color-Primary-Pueple-500, #5c25f2);
}
.but-shop {
  display: flex;
  width: 150px;
  height: 44px;
  padding: var(--Spacing-space-8, 8px) var(--Spacing-space-12, 12px);
  justify-content: center;
  align-items: center;
  gap: var(--Spacing-space-8, 8px);
  border-radius: var(--Border-radius-8, 8px);
  border: 1px solid var(--Color-Primary-Pueple-500, #5c25f2);
  background: var(--Color-Secondary-500, #ffeb3b);
  color: var(--Color-Primary-Pueple-500, #5c25f2);
}
.shop-like{
  padding: 25px 30px 0px 0px
}
</style>
