<template>
  <button :class="button({ intent, size })">
    <slot />
  </button>
</template>
<script lang="ts">
export default {
  name: "AButton",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("a-button", {
  variants: {
    intent: {
      primary: "a-button--primary",
      secondary: "a-button--secondary",
    },
    size: {
      small: "a-button--small",
      medium: "a-button--medium",
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium" }],
});

type ButtonProps = VariantProps<typeof button>;
type Props = { intent?: ButtonProps["intent"]; size?: ButtonProps["size"] };

withDefaults(defineProps<Props>(), {
  intent: "primary",
  size: "medium",
});
</script>

<style lang="scss" scoped>
.a-button {
  @apply rounded;

  &--primary {
    @apply bg-primary text-white hover:bg-tertiary active:bg-secondary;
  }

  &--secondary {
    @apply bg-secondary text-white hover:bg-primary active:bg-primary;
  }

  &--small {
    @apply font-normal py-2 px-2;
  }

  &--medium {
    @apply font-semibold py-2 px-4;
  }
}
</style>
