export default defineNuxtConfig({
/*  nitro: {
    prerender: {
      routes: [
        "/",
        "/test1",
        "/test2",
        "/test3",
        "/posts/1",
        "/posts/2",
        "/posts/3",
      ],
    },
  },*/
  routeRules: {
    "/**": { swr: 30 },
    "/static": {static: true}
  },
  experimental: {
    payloadExtraction: true,
  },
});
