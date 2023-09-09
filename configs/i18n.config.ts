import { NuxtI18nOptions } from "@nuxtjs/i18n/dist/module";

import { locales } from "../configs/locales-i18n.config";

export const i18n: NuxtI18nOptions = {
  langDir: "locales",
  defaultLocale: "en",
  strategy: "no_prefix",
  detectBrowserLanguage: false,
  locales,
};
