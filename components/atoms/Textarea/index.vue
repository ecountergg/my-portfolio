<template>
  <div class="a-textarea">
    <label :for="id" class="a-textarea__label">
      {{ label }}
    </label>
    <textarea
      v-model="value"
      type="text"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      class="a-textarea__input"
      :class="inputStatus"
    />
    <small v-if="errorMessage" class="a-textarea__message">
      {{ errorMessage }}
    </small>
  </div>
</template>
<style lang="scss">
.a-textarea {
  @apply mb-3;

  &__label {
    @apply text-sm text-primary font-semibold;
  }
  &__input {
    @apply mt-2 flex h-32 w-full items-center justify-center rounded-xl bg-white/0 p-3 text-sm outline-none border-2;
    &--primary {
      @apply focus:border-primary;
    }
    &--error {
      @apply border-red-500 focus:border-red-500;
    }
  }
  &__message {
    @apply text-red-500;
  }
}
</style>
<script lang="ts">
export default {
  name: "ATextarea",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { toRef, computed } from "#imports";
import { useField } from "vee-validate";

type Props = {
  name: string;
  id?: string;
  label?: string;
  placeholder?: string;
};

const props = withDefaults(defineProps<Props>(), {
  name: "input",
  id: "input",
  label: "",
  placeholder: "",
});

const { errorMessage, meta, value } = useField<string | number>(
  toRef(props, "name"),
  undefined,
  {
    validateOnMount: false,
  },
);

const inputStatus = computed<string>(() => {
  if (
    (meta.valid && !errorMessage.value) ||
    (!meta.valid && !errorMessage.value)
  )
    return "a-textarea__input--primary";

  return "a-textarea__input--error";
});
</script>
