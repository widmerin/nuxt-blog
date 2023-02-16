
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: true,
  },

  routeRules: {
    "/posts/**": {  static: true, swr: 15 },
    "/static": { static: true },
    "/spa": { ssr: false },
    "/swr": { swr: true },
  },
});
