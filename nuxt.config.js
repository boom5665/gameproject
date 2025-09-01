export default {
  target: 'static',
  generate: { fallback: '200.html' },

  server: { port: 5008 },

  head: {
    title: 'GameMarket',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/Group.png' }],
    script: []
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
    // { src: '~/plugins/token.js' },
    { src: '~/plugins/setColor.js' },
    { src: '~/plugins/errorHandler.js' },
    { src: '~/plugins/jsonwebtoken.js' },
    { src: '~/plugins/sweetalert2.js' },
    { src: '~/plugins/router.js' },
    { src: '~/plugins/cookies.js' },
  ],

  components: true,

  buildModules: [],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  // ✅ Nuxt 2: ใช้ publicRuntimeConfig / privateRuntimeConfig
  publicRuntimeConfig: {
    siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://app.example.com',
    siteName: process.env.NUXT_PUBLIC_SITE_NAME || 'My App',
    siteDescription: process.env.NUXT_PUBLIC_SITE_DESC || 'คำอธิบายเว็บไซต์แบบสั้น กระชับ ตรงคีย์เวิร์ด',
    siteOgImage: process.env.NUXT_PUBLIC_OG_IMAGE || 'https://app.example.com/og-image.jpg',
    siteEnv: process.env.NUXT_PUBLIC_SITE_ENV || 'prod', // prod | staging | dev
  },

  // ✅ Nuxt 2: sitemap v2 config
  sitemap: {
    hostname: process.env.NUXT_PUBLIC_SITE_URL || 'https://app.example.com',
    gzip: true,
    exclude: ['/admin/**', '/auth/**', '/api/**', '/404'],
    defaults: {
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    },
  },

  // ✅ Nuxt 2: robots v2 (ใช้รูปแบบคีย์ตัวใหญ่, ไม่ใช่ groups)
  robots: () => {
    const isProd = (process.env.NUXT_PUBLIC_SITE_ENV || 'prod') === 'prod'
    const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://app.example.com'
    return isProd
      ? {
        UserAgent: '*',
        Allow: '/',
        Disallow: ['/admin', '/auth', '/api'],
        Sitemap: `${siteUrl}/sitemap.xml`,
      }
      : {
        UserAgent: '*',
        Disallow: '/',
      }
  },

  axios: {
    baseURL: 'https://dev-api-gamiqo.pirate168.com/api/v1',
  },

  build: {},

  router: {
    middleware: ['auth']
  },
  serverMiddleware: [
    { path: '/healthz', handler: '~/server/healthz.js' }
  ],
}
