<template>
  <div>
    <textarea
      v-model="value"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :class="computedTextareaClass"
      :disabled="disabled ?? false"
    />
    <small v-if="!!errorMessage" class="a-textarea__message">
      {{ errorMessage }}
    </small>
  </div>
</template>

<script lang="ts">
export default {
  name: "ATextarea",
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { toRef, computed } from "#imports";
import { useField } from "vee-validate";
import { cva, type VariantProps } from "class-variance-authority";

const textareaClass = cva("a-textarea", {
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

type TextareaProps = VariantProps<typeof textareaClass>;

type Props = {
  id?: string;
  placeholder?: string;
  intent?: TextareaProps["intent"];
  size?: TextareaProps["size"];
  disabled?: TextareaProps["disabled"];
  name: string;
};

const props = withDefaults(defineProps<Props>(), {
  intent: "primary",
  size: "medium",
  name: "textarea",
  id: "textarea",
  placeholder: "",
  disabled: false,
  type: "text",
});

const computedTextareaClass = computed(() => {
  return textareaClass({
    intent: textareaStatus.value,
    disabled: props.disabled,
    size: props.size,
  });
});
const textareaStatus = computed<TextareaProps["intent"]>(() => {
  if (
    (!meta.touched && meta.valid && !errorMessage.value) ||
    (!meta.touched && !meta.valid && !errorMessage.value)
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
.a-textarea {
  @apply flex h-32 w-full items-center justify-center rounded-xl bg-white/0 p-3 text-sm outline-none border-2;

  &--primary {
    @apply focus:border-primary;
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
