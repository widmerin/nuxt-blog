
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/about": { static: true },
    "/posts/**": { swr: true },
    "/static": { static: true },
    "/spa": { ssr: false },
    "/swr": { swr: true },
  },
});
