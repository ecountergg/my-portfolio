// Consts
import { ID } from "~/consts/localizations/id";
import { EN } from "~/consts/localizations/en";

export default (_, inject) => {
  // Inject $hello(msg) in Vue, context and store.

  inject("t", (key: string) => {
    const locale = "id";
    if (locale === "id") {
      return ID[key];
    }
    if (locale === "um") {
      return EN[key];
    }
  });
};
