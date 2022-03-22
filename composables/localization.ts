import { ref } from "vue";

const locale = ref("um");

export const useLocalization = () => {
  const changeLocale = (lang: string) => {
    locale.value = lang;
  };

  return {
    locale,
    changeLocale,
  };
};
