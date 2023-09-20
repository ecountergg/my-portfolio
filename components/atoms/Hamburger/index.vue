<template>
  <button
    class="flex flex-col justify-center items-center"
    @click="onHandleClick"
  >
    <span
      class="bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm"
      :class="{
        'rotate-45 translate-y-1': isOpen,
        'translate-y-0.5': !isOpen,
      }"
    >
    </span>
    <span
      class="bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5"
      :class="{
        'opacity-0': isOpen,
        'opacity-100': !isOpen,
      }"
    >
    </span>
    <span
      class="bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm"
      :class="{
        '-rotate-45 -translate-y-': isOpen,
        'translate-y-0.5': isOpen,
      }"
    >
    </span>
  </button>
</template>
<script lang="ts">
export default {
  name: "AHamburger",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { ref } from "#imports";

const isOpen = ref<boolean>(false);

const onHandleClick = () => {
  isOpen.value = !isOpen.value;
};
</script>
