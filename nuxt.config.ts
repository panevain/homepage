// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{ content: "Matt Newcomer's Homepage", name: 'description' }],
      title: 'Matt Newcomer',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'nuxt-quasar-ui', '@vueuse/nuxt'],
  quasar: {},
  runtimeConfig: {},
  telemetry: false,
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
