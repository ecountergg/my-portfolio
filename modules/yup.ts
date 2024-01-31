import { addImports, addImportsSources, defineNuxtModule } from "@nuxt/kit";

const yupMethod = [
  "object",
  "string",
  "number",
  "array",
  "mixed",
  "date",
  "boolean",
];
const prefixedYupMethod = [
  ["setLocale", "setYupLocale"],
  ["lazy", "yupLazy"],
  ["ref", "yupRef"],
  ["addMethod", "yupAddMethod"],
];
export default defineNuxtModule({
  meta: {
    name: "yup",
  },
  setup() {
    addImportsSources({
      from: "yup",
      imports: yupMethod,
    });
    prefixedYupMethod.forEach(v => {
      addImports({
        from: "yup",
        name: v[0],
        as: v[1],
      });
    });
  },
});
