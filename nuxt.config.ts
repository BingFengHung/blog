// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/blog/',
  },
  css: [ 
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/copy-button.css'
  ],
  modules: [
    '@kevinmarrec/nuxt-pwa',
    '@pinia/nuxt'
  ],
  pwa: {
    meta: {
      name: 'Joe Dev Blog',
    },
    manifest: {
      name: 'Joe Dev Blog'
    },
    workbox: {
      enabled: false
    },
    icon: {
      source: 'public/icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
      targetDir: '/public/icons'
    }
  }
})
