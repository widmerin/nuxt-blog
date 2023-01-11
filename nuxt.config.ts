// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'node-server'
  },
  routeRules: {
    '/about': { static: true },
    '/posts/**': { swr: 10 }
  }
})
