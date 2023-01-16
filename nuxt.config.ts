// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/blog/',
  },
  css: [ '@fortawesome/fontawesome-svg-core/styles.css' ],
  modules: [
    '@kevinmarrec/nuxt-pwa'
  ],
  pwa: {
    meta: {
      name: 'Joe Dev Blog',
    },
    workbox: {
      enabled: false
    }
  }
})
