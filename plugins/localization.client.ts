// Consts
import { ID } from "~/consts/localizations/id";
import { EN } from "~/consts/localizations/en";

// Compose
import { useLocalization } from "~~/composables";

export default (_, inject) => {
  inject("t", (key: string) => {
    const { locale } = useLocalization();

    if (locale.value === "id") {
      return ID[key];
    }
    if (locale.value === "um") {
      return EN[key];
    }
  });
};
