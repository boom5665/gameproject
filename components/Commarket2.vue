<template>
  <div>
    <div>
      <div
        class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3"
      >
        <div class="tpn_card" style="">
          <div style="display: flex">
            <div>
              <img
                src="~/assets/image/ROV.png"
                style="width: 26px; height: 26px; margin-right: 5px"
              />
            </div>
            <div style="font-size: 14px;">HP.SHOP. TH Official</div>
            <div style="display: flex">
              <div class="loveimg">
                <img
                  src="~/assets/image/love2.png"
                  style="
                    width: 18px;
                    height: 18px;
                    padding: 2.386px 1.5px 2.386px 1.501px;
                  "
                />
              </div>
              <div>100</div>
            </div>
          </div>
          <img src="~/assets/image/cardgold.png" class="tpn_cardimg" />
          <div class="content-under">Dragon Art</div>
          <div class="font">
            Package Gold Wing Rose Crown (จำกัดจำนวน 100 ชิ้น)
          </div>
          <div class="display">
            <div>฿ 1,999</div>
            <div class="buttonshop">
              <img
                src="~/assets/image/addcart.png"
                style="width: 26px; height: 26px; margin-right: 5px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style>
#copyrights {
  position: absolute;
  bottom: 2%;
  right: 2%;
}

#copyrights a {
  text-decoration: none;
  color: var(--bg-darker);
}

/* tpn card style */
.tpn_card {
  width: 220px;
  height: 100%;
  border-radius: var(--Border-radius-8, 8px);
  background: var(--Color-Midnight-400, #3c3b4b);
  padding: 20px;
  margin: 10px;
  cursor: pointer;
}

.tpn_cardimg {
  box-shadow: 1px 7px 13px var(--shadow);
  height: 150px;
  width: 100%;
  border-radius: var(--Border-radius-8, 8px) var(--Border-radius-8, 8px)
    var(--Spacing-space-0, 0px) var(--Spacing-space-0, 0px);
}

.tpn_card .tpn_btn:hover {
  background: var(--bg-darker);
  box-shadow: none;
}
.content-under {
  display: flex;
  height: 30px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 0px 0px 8px 8px;
  background: var(--Color-Primary-Pueple-500, #5c25f2);
  font-size: 14px;
}

.loveimg {
  display: flex;
  position: relative;
  align-items: flex-start;
  top: 6px;
  padding-right: 3px;
}
.font {
  color: var(--color-black-white-700, #bababa);
  font-variant-numeric: stacked-fractions;
  font-feature-settings: "hlig" on, "dlig" on;
  font-family: "Pentor Corporate";
  font-size: 12px;
}
.buttonshop {
  display: flex;
  padding: 3px 5px;
  justify-content: center;
  align-items: center;
  border-radius: var(--Border-radius-8, 8px);
  background: var(--Color-Primary-Pueple-500, #5c25f2);
}
.display {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

