export default defineNuxtConfig({
  routeRules: {
    "/**": { static: true }
  },
  experimental: {
    payloadExtraction: true
  },
  nitro: {
    preset: "vercel-edge",
  },
});
