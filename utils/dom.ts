export const findEl = async (hash: any, x = 0) => {
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
