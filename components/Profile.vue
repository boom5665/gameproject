<template>
  <div class="M-Create-Backgroud Profile">
    <div class="navtabs">
      <div class="font-top-myshop">
        <Nuxt-link class="text-profile" to="/Profile" target="_self">
        <span class="font-proL-top">Profile</span></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfileEdit" target="_self">&nbsp; | &nbsp;<span class="">Edit profile</span></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfileEditEmail" target="_self">&nbsp; | &nbsp;<span class="">Email</span></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfileEditPhone" target="_self">&nbsp; | &nbsp;<span class="">Phone number</span ></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfileAddress" target="_self">&nbsp; | &nbsp;<span class="">Address</span></Nuxt-link>
        <Nuxt-link class="text-profile" to="/ProfilePassword" target="_self">&nbsp; | &nbsp;<span class="">Password</span></Nuxt-link>
      </div>
      <div
        class="form-create"
        style="margin-top: 20px; gap: var(--Spacing-space-16, 12px)"
      >
        <div style="width: 100%">
          <div style="margin-right: 20px">
            <!-- <img class="" :src="qrImageUrl" /> -->
            <div style="margin-bottom: 20px">
              <div class="font-top">{{ userInfo.id }}</div>
              <div class="font-top-pro">#{{ userInfo.id }}</div>
            </div>
            <div>
              <div style="margin-bottom: 20px">{{ userInfo.username }}</div>
            </div>
            <div>
              <div class="dis-btween">
                <div>
                  <div class="but-shop font-content-pro">
                    <img class="img-safe" src="~/assets/image/Pro.png" />
                    Personal details
                  </div>
                </div>
                <div class="font-content-pro">
                  <div class="but-shop font-content-ver">
                    <div v-if="userInfo.personalDetails === 'Verified'">
                      <img class="img-safe" src="~/assets/image/Verified.png" />
                      {{ userInfo.personalDetails }}
                    </div>

                    <!-- โชว์ถ้าเป็น Unverified -->
                    <div
                      v-else-if="userInfo.personalDetails === 'Unverified'"
                      class="font-content-Unver"
                    >
                      <img
                        class="img-safe"
                        src="~/assets/image/Unverified.png"
                      />
                      {{ userInfo.personalDetails }}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="dis-btween wid-cen">
                  <div class="font-top-pro">Name</div>
                  <div class="font-content-pro">{{ userInfo.name }}</div>
                </div>
                <div class="dis-btween wid-cen">
                  <div class="font-top-pro">Surname</div>
                  <div class="font-content-pro">{{ userInfo.surname }}</div>
                </div>
                <div class="dis-btween wid-cen">
                  <div class="font-top-pro">ID card number</div>

                  <div class="font-content-pro">
                    {{ userInfo.idCardNumber }}
                  </div>
                </div>
                <div class="dis-btween wid-cen">
                  <div class="font-top-pro">Birthdate</div>
                  <div class="font-content-pro">{{ userInfo.birthdate }}</div>
                </div>
                <div class="dis-btween wid-cen">
                  <div class="font-top-pro">Gender</div>
                  <div class="font-content-pro">{{ userInfo.gender }}</div>
                </div>
              </div>
            </div>

            <div>
              <div class="dis-btween">
                <div>
                  <div class="but-shop font-content-pro">
                    <img class="img-safe" src="~/assets/image/Pro.png" />
                    Contact
                  </div>
                </div>

                <div class="but-shop font-content-ver">
                  <div v-if="userInfo.contact === 'Verified'">
                    <img class="img-safe" src="~/assets/image/Verified.png" />
                    {{ userInfo.contact }}
                  </div>

                  <!-- โชว์ถ้าเป็น Unverified -->
                  <div
                    v-else-if="userInfo.contact === 'Unverified'"
                    class="font-content-Unver"
                  >
                    <img class="img-safe" src="~/assets/image/Unverified.png" />
                    {{ userInfo.contact }}
                  </div>
                </div>
              </div>

              <div>
                <div class="dis-btween wid-cen">
                  <div class="font-top-pro">Email</div>
                  <div class="font-content-pro">{{ userInfo.email }}</div>
                </div>
                <div class="dis-btween wid-cen">
                  <div class="font-top-pro">Phone number</div>
                  <div class="font-content-pro">{{ userInfo.phoneNumber }}</div>
                </div>
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

