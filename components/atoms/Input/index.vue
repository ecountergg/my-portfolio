<template>
  <div class="a-input">
    <label :for="id" class="a-input__label">
      {{ label }}
    </label>
    <input
      v-model="value"
      type="text"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      class="a-input__input"
      :class="inputStatus"
    />
    <small v-if="errorMessage" class="a-input__message">
      {{ errorMessage }}
    </small>
  </div>
</template>
<style lang="scss">
.a-input {
  @apply mb-3;

  &__label {
    @apply text-sm text-primary font-semibold;
  }
  &__input {
    @apply mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-white/0 p-3 text-sm outline-none border-2;
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
  name: "AInput",
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
    return "a-input__input--primary";

  return "a-input__input--error";
});
</script>
