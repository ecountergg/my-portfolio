<template>
  <div class="flex items-center gap-4">
    <div class="bg-primary h-1 w-6 rounded-md"></div>
    <h1 class="text-xl font-bold text-primary">
      {{ title }}
    </h1>
  </div>
</template>
<script lang="ts">
export default {
  name: "ATitle",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>
