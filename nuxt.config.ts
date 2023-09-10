import { defineNuxtConfig } from "nuxt/config";

import { i18n } from "./configs/i18n.config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Eka Yuda Rayi Anugrah",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { name: "description", content: "Eka Yuda Rayi Anugrah - Profile" },
      ],
    },
  },
  plugins: [{ src: "~/plugins/scroll-behavior.ts", mode: "client" }],
  modules: ["@nuxtjs/i18n", "nuxt-icon"],
  i18n,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/tailwind.css", "~/assets/scss/main.scss"],
  components: [
    {
      path: "~/components/Atoms/",
      prefix: "A",
    },
    {
      path: "~/components/Molecules/",
      prefix: "M",
    },
  ],
  imports: {
    autoImport: true,
    dirs: ["composables/**"],
  },
});
