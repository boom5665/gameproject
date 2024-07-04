<template>
  <div class="M-Create-Backgroud">
    <div class="navtabs">
      <div class="font-top-myshop">
        <span class="font-proL-top">Profile</span> &nbsp; | &nbsp;
        <span class="">Edit profile</span>
        &nbsp; | &nbsp;<span class="">Email</span> &nbsp; | &nbsp;<span class=""
          >Phone number</span
        >
        &nbsp; | &nbsp;<span class="">Address</span> &nbsp; | &nbsp;<span
          class=""
          >Password</span
        >
      </div>
      <div
        class="form-create"
        style="margin-top: 20px; gap: var(--Spacing-space-16, 12px)"
      >
        <div style="width: 100%">
          <div
            style="display: flex; flex-direction: column; align-items: center"
          >
            <div class="but-shop font-content-pro">
              <img class="img-safe" src="~/assets/image/alertAddress.png" />
            </div>
            <div class="nodata">No Data</div>
            <div>
              <div class="but-address">
                <img class="img-safe" src="~/assets/image/++.png" /> Add new
                address
              </div>
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
    return {
      userInfo: {
        id: "BB000000",
        username: "Username",
        personalDetails: "Verified",
        name: "Demo",
        surname: "Demo",
        idCardNumber: "1-1111-1111***",
        birthdate: "00/00/0000",
        gender: "Female",
        contact: "Unverified",
        uncontact: "Unverified",
        email: "Demo",
        phoneNumber: "-",
      },
    };
  },
  mounted() {
    // this.fetchQRImage();
  },
  methods: {
    async fetchUserInfo() {
      try {
        const response = await axios.get("YOUR_API_ENDPOINT");
        this.userInfo = response.data;
      } catch (error) {
        console.error("There was an error fetching the user info!", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nodata {
  font-size: 16px;
  margin: 25px 30px;
}
.but-address {
  display: flex;
  height: 36px;
  padding: var(--Spacing-space-8, 8px) var(--Spacing-space-12, 12px);
  justify-content: center;
  align-items: center;
  gap: var(--Spacing-space-8, 8px);
  border-radius: var(--Border-radius-8, 8px);
  border: 1px solid var(--Color-Primary-Pueple-500, #5c25f2);
  background: var(--Color-Secondary-500, #ffeb3b);
  color: #5c25f2;
}

</style>
