import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/tailwindcss"],
  plugins: ["~/plugins/localization.client.ts"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  css: ["~/assets/css/tailwind.css"],
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
  },
  components: [
    {
      path: "~/components/atoms/",
      prefix: "A",
    },
    {
      path: "~/components/molecules/",
      prefix: "M",
    },
    {
      path: "~/components/organism/",
      prefix: "O",
    },
  ],
});
