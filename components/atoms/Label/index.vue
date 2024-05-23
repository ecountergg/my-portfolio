<template>
  <label :for="id" :class="labelVariant({ intent })">
    {{ label }}
  </label>
</template>
<script lang="ts">
export default {
  name: "ALabel",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { type Props, labelVariant } from "./props";

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
