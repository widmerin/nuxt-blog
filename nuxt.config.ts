export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ["/","/test1", "/test2", "/test3"],
    },
  },
  routeRules: {
    "/**": { static: true },
  },
  experimental: {
    payloadExtraction: true,
  },
});
