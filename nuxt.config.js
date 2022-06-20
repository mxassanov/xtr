export default {
  target: 'static',

  head: {
    title: 'preon-tech',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/styles/index.scss', '~/assets/styles/fonts.scss', 'swiper/swiper-bundle.css', "vue-custom-scrollbar/dist/vueScrollbar.css"],

  plugins: [
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false },
    { src: '~/plugins/router-before-each.js' },
    { src: '~/plugins/vuelidate', ssr: true },
    { src: '~/plugins/vue-scrollbar.client.js' },
  ],
  components: [{ path: '~/components/ui/LazyImage.vue' }],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', 'nuxt-lazysizes'],

  modules: ['@nuxtjs/axios'],

  tailwindcss: {
    configPath: '~/tailwind.config.js',
  },

  axios: {
    baseURL: '/',
  },

  build: {},
}
