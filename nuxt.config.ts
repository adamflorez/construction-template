// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    layoutTransition: {
      name: "fade",
      mode: "out-in", // default
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/image",
    "@hypernym/nuxt-anime",
  ],
  css: ["~/assets/css/main.scss"],
});
