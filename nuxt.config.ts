
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/about": { static: true },
    "/posts/**": { swr: 30 },
  },
});
