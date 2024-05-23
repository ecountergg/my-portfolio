<template>
  <label :for="id" :class="label({ intent })">
    {{ title }}
  </label>
</template>
<script lang="ts">
export default {
  name: "ALabel",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";

const label = cva("a-label", {
  variants: {
    intent: {
      primary: "a-label--primary",
      secondary: "a-label--secondary",
    },
  },
  compoundVariants: [{ intent: "primary" }],
});

type LabelProps = VariantProps<typeof label>;
type Props = { title: string; id: string; intent?: LabelProps["intent"] };

withDefaults(defineProps<Props>(), {
  intent: "primary",
});
</script>

<style lang="scss" scoped>
.a-label {
  @apply text-sm font-semibold;

  &--primary {
    @apply text-primary;
  }
  &--secondary {
    @apply text-secondary;
  }
}
</style>
