<template>
  <div class="a-toasts" v-if="toasts.length">
    <AToast v-for="(toast, index) of toasts" :toast="toast" :key="index" />
  </div>
</template>

<style lang="scss">
.a-toasts {
  @apply w-[550px] min-h-[150px] flex flex-col items-center fixed right-0 top-16;
}
</style>
<script lang="ts">
export default {
  name: "AToasts",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { computed } from "#imports";

import { useToastStore } from "@/stores/toast";

const toastStore = useToastStore();

const toasts = computed(() => {
  return toastStore.toasts;
});
</script>
