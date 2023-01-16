
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ["/","/about","/posts/1", "/posts/2", "/posts/3", "/posts/4", "/posts/5"],
    },
  },
  experimental: {
     payloadExtraction: true,
  },

  routeRules: {
    "/**": { swr: 10 },
  },
});
