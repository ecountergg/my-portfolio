import { cva, type VariantProps } from "class-variance-authority";

export const textareaClass = cva("a-textarea", {
  variants: {
    intent: {
      primary: "a-textarea--primary",
      error: "a-textarea--error",
    },
    disabled: {
      true: "a-textarea--disabled",
    },
    size: {
      small: "a-textarea--small",
      medium: "a-textarea--medium",
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", disabled: false }],
});

export type TextareaProps = VariantProps<typeof textareaClass>;

export type Props = {
  id?: string;
  placeholder?: string;
  intent?: TextareaProps["intent"];
  size?: TextareaProps["size"];
  disabled?: TextareaProps["disabled"];
  name: string;
};
