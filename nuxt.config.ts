
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/about": { static: true },
    "/posts/**": { swr: true },
    "/static": { static: true },
    "/spa": { ssr: false },
    "/swr": { swr: true },
  },
  hooks: {
    "nitro:build:before": (ctx) => {
      const additonalRoutes = Object.keys(ctx.options.routeRules);
      for (const route of additonalRoutes) {
        ctx.options.handlers.push({
          route,
          handler: ctx.options.renderer,
          lazy: true,
          middleware: false,
          method: undefined,
        });
      }
    },
  },
});
