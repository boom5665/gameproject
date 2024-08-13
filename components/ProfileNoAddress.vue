<template>
  <div class="M-Create-Backgroud profile-noadd Profile">
    <div class="navtabs">
      <div class="font-top-myshop">
        <Nuxt-link class="text-profile" to="/Profile" target="_self">
        <span class="">Profile</span></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfileEdit" target="_self">&nbsp; | &nbsp;<span class="">Edit profile</span></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfileEditEmail" target="_self">&nbsp; | &nbsp;<span class="">Email</span></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfileEditPhone" target="_self">&nbsp; | &nbsp;<span class="">Phone number</span ></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfileAddress" target="_self">&nbsp; | &nbsp;<span class="font-proL-top">Address</span></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfilePassword" target="_self">&nbsp; | &nbsp;<span class="">Password</span></Nuxt-link>
      </div>
      <div
        class="form-create"
        style="margin-top: 20px; gap: var(--Spacing-space-16, 12px)"
      >
        <div class="width-hunded">
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


