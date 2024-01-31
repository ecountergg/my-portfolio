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
    dirs: ["composables/**"],
  },
  modules: [
    "@nuxtjs/supabase",
    "@nuxtjs/i18n",
    "nuxt-icon",
    "@vee-validate/nuxt",
    "@pinia/nuxt",
    "~/modules/yup",
  ],
  supabase: {
    redirectOptions: {
      login: "/",
      callback: "/home",
      exclude: [],
    },
  },
  i18n,
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  plugins: [{ src: "~/plugins/scroll-behavior.ts", mode: "client" }],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
