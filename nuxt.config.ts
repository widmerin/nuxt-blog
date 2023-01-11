
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/about": { static: true, swr: 5000 },
    "/posts/**": { static: true, swr: 60 },
  },
});
