export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gamiqo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss',
    '~/assets/scss/navbar.scss',
    '~/assets/scss/market.scss',
    '~/assets/scss/Shop.scss',
    '~/assets/scss/login.scss',
    'slick-carousel/slick/slick.css',
    'slick-carousel/slick/slick-theme.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  plugins: [
    { src: '~/plugins/slick-carousel.js', mode: 'client' },
    { src: '~/plugins/validation.js' },
    { src: '~/plugins/token.js' },
    { src: '~/plugins/setColor.js', mode: 'client' }, // เพิ่ม plugin สำหรับ *
    { src: '~/plugins/errorHandler.js' }, // เพิ่ม plugin สำหรับ error handling


  ],
  axios: {
    baseURL: 'https://dev-api-gamiqo.pirate168.com/api/v1',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

}
