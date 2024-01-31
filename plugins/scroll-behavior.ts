import { defineNuxtPlugin } from "#app";

import { findEl } from "@/utils/dom";

// TODO: Fix Types
export default defineNuxtPlugin((nuxtApp: any) => {
  nuxtApp.$router.options.scrollBehavior = async (
    to: any,
    _: any,
    savedPosition: any,
  ) => {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      const el = await findEl(to.hash);

      if ("scrollBehavior" in document.documentElement.style) {
        return window.scrollTo({ top: el.offsetTop - 35, behavior: "smooth" });
      } else {
        return window.scrollTo(0, el.offsetTop - 35);
      }
    }
    return { left: 0, top: 0, behaviour: "smooth" };
  };
});
