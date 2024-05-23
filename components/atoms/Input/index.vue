<template>
  <div>
    <input
      v-model="value"
      :type="type"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :class="computedInputClass"
      :disabled="disabled ?? false"
    />
    <small v-if="!!errorMessage" class="a-input__message">
      {{ errorMessage }}
    </small>
  </div>
</template>

<script lang="ts">
export default {
  name: "AInput",
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { toRef, computed } from "#imports";
import { useField } from "vee-validate";

import { type Props, type InputProps, inputClass } from "./props";

const props = withDefaults(defineProps<Props>(), {
  intent: "primary",
  size: "medium",
  name: "input",
  id: "input",
  placeholder: "",
  disabled: false,
  type: "text",
});

const computedInputClass = computed(() => {
  return inputClass({
    intent: inputStatus.value,
    disabled: props.disabled,
    size: props.size,
  });
});
const inputStatus = computed<InputProps["intent"]>(() => {
  if (
    (!meta.touched && !meta.valid && !errorMessage.value) ||
    (!meta.touched && meta.valid && !errorMessage.value)
  )
    return props.intent;

  return "error";
});

const { errorMessage, meta, value } = useField<string | number>(
  toRef(props, "name"),
  undefined,
  {
    validateOnMount: false,
  },
);
</script>

<style lang="scss" scoped>
.a-input {
  @apply flex w-full items-center justify-center rounded-xl bg-white text-sm outline-none border-2;

  &--primary {
    @apply focus:border-primary;
  }

  &--secondary {
    @apply focus:border-secondary;
  }

  &--error {
    @apply border-red-500 focus:border-red-500;
  }

  &--disabled {
    @apply bg-gray-100 cursor-not-allowed;
  }

  &--small {
    @apply py-1 px-2;
  }

  &--medium {
    @apply py-2 px-3;
  }

  &__message {
    @apply text-red-500;
  }
}
</style>
