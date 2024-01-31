import { log } from 'console';
<template>
  <div class="a-toast">
    <div class="a-toast__sidebar" :class="toast.type"></div>
    <div class="a-toast__content">
      <div class="a-toast__header">
        <h3>{{ toast.title }}</h3>
        <icon
          name="material-symbols:close"
          class="a-toast__button"
          @click="dismissToast"
        ></icon>
      </div>
      <div class="a-toast__text">
        <p class="a-toast__message">{{ toast.message }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.a-toast {
  @apply w-[500px] min-h-[50px] flex flex-row mb-4 p-4 box-border bg-quaternary justify-center rounded-lg shadow;
  &__sidebar {
    @apply w-2;
  }
  &__content {
    @apply w-full flex-col items-center justify-center pl-4 box-border flex-grow;
  }
  &__header {
    @apply w-full h-[25px] text-lg font-semibold mb-4 flex flex-row justify-start text-left;
  }
  &__button {
    @apply ml-auto border-none cursor-pointer bg-none text-base;
  }
  &__text {
    @apply flex-row justify-start text-left;
  }
  &__message {
    @apply font-extralight;
  }
}
</style>
<script lang="ts">
export default {
  name: "AToast",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { onMounted } from "#imports";

import { Toast, useToastStore } from "@/stores/toast";
import { STATUS } from "@/types/status.types";

type Props = {
  toast: Toast;
};

defineProps<Props>();

const toastStore = useToastStore();

onMounted(() => {
  setTimeout(() => {
    dismissToast();
  }, 5000);
});

const dismissToast = () => {
  toastStore.removeAll();
};
</script>
