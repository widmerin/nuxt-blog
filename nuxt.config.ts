
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/posts/1', '/posts/2', '/posts/3', '/posts/4', '/posts/5']
    }
  },
  routeRules: {
    "/about": { static: true },
    "/posts/**": { swr: true },
    "/static": { static: true },
    "/spa": { ssr: false },
    "/swr": { swr: true },
  },
});
