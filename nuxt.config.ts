import { defineNuxtConfig } from "nuxt/config";

import { i18n } from "./configs/i18n.config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "manifest",
          href: "/favicon/site.webmanifest",
        },
      ],
      meta: [
        { name: "description", content: "Eka Yuda Rayi Anugrah - Profile" },
      ],
      title: "Eka Yuda Rayi Anugrah",
      viewport: "width=device-width, initial-scale=1",
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
