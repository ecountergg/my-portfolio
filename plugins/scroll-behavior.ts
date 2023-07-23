import { defineNuxtPlugin } from "#app";

// TODO: Fix Types
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }

    const findEl = async (hash, x = 0) => {
      return (
        window.document.querySelector(hash) ||
        new Promise(resolve => {
          if (x > 0) {
            return resolve(window.document.querySelector("#_nuxt"));
          }
          setTimeout(() => {
            resolve(findEl(hash, 1));
          }, 300);
        })
      );
    };

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
