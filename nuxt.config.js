export default {
  server: {
    port: 5008
  },
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
    ],
    script: [
    ],
  },
  css: [
    '~/assets/scss/main.scss',
    '~/assets/scss/navbar.scss',
    '~/assets/scss/market.scss',
    '~/assets/scss/Shop.scss',
    '~/assets/scss/login.scss',
    'slick-carousel/slick/slick.css',
    'slick-carousel/slick/slick-theme.css',
    'quill/dist/quill.core.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css'
  ],

  plugins: [
    { src: '~/plugins/slick-carousel.js', mode: 'client' },
    { src: '~/plugins/validation.js' },
    { src: '~/plugins/token.js' },
    { src: '~/plugins/setColor.js' },
    { src: '~/plugins/errorHandler.js' },
    { src: '~/plugins/jsonwebtoken.js' },
    { src: '~/plugins/sweetalert2.js' },
    { src: '~/plugins/router.js' },
  ],

  components: true,

  buildModules: [],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    baseURL: 'https://dev-api-gamiqo.pirate168.com/api/v1',
  },

  build: {},
  router: {
    middleware: ['auth']
  }
}
