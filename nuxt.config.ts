export default defineNuxtConfig({
  routeRules: {
    // revalidated every 30 seconds, in the background
    "/**": { swr: 30 },
    // this page will be always fresh
    "/dynamic": { swr: false, cache: false },
    // this page will be generated on demand and then cached permanently
    "/static": { static: true },
    // this page is generated at build time and cached permanently
    "/prerendered": { prerender: true },
    // you can do lots more with route rules too!
    "/redirect": { redirect: "/static" },
    "/headers": { headers: { "x-magic-of": "nuxt and vercel" } },
    "/spa": { ssr: false },
  },
  experimental: {
    payloadExtraction: true
  },
  nitro: {
    preset: "vercel-edge",
  },
});
