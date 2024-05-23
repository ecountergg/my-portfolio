import { cva, type VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "nuxt/dist/app/compat/capi";

export const inputClass = cva("a-input", {
  variants: {
    intent: {
      primary: "a-input--primary",
      secondary: "a-input--secondary",
      error: "a-input--error",
    },
    disabled: {
      true: "a-input--disabled",
    },
    size: {
      small: "a-input--small",
      medium: "a-input--medium",
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", disabled: false }],
});

export type InputProps = VariantProps<typeof inputClass>;
export type Props = {
  id?: string;
  placeholder?: string;
  intent?: InputProps["intent"];
  size?: InputProps["size"];
  disabled?: InputProps["disabled"];
  type?: InputHTMLAttributes["type"];
  name: string;
};
