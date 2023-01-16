
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/','/posts/1', '/posts/2', '/posts/3', '/posts/4', '/posts/5']
    }
  },
  experimental: {
    payloadExtraction: false,
  },
  routeRules: {
    '/**': { cache: { swr: true, maxAge: 120, staleMaxAge: 60, headersOnly: true } },
    "/static": { static: true },
    "/spa": { ssr: false },
    "/swr": { swr: true },
  },
  hooks: {
    'nitro:build:before': (ctx) => {
      const additonalRoutes = Object.keys(ctx.options.routeRules)
      for (const route of additonalRoutes) {
        ctx.options.handlers.push({
          route,
          handler: ctx.options.renderer,
          lazy: true,
          middleware: false,
          method: undefined,
        })
      }
    }
  }
});
