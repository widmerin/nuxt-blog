
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "netlify",
  },
  routeRules: {
    "/**": { swr: 5 },
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
