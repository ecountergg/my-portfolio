import { cva, type VariantProps } from "class-variance-authority";

export const labelVariant = cva("a-label", {
  variants: {
    intent: {
      primary: "a-label--primary",
      secondary: "a-label--secondary",
    },
  },
  compoundVariants: [{ intent: "primary" }],
});

export type LabelProps = VariantProps<typeof labelVariant>;
export type Props = {
  label: string;
  id: string;
  intent?: LabelProps["intent"];
};
