<template>
  <span
    class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-quaternary text-primary rounded-full"
  >
    <icon v-if="icon" :name="icon" class="mr-2 w-6 h-6" />
    {{ label }}
  </span>
</template>
<script lang="ts">
export default {
  name: "ATag",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
interface Props {
  label: string;
  icon: string;
}

withDefaults(defineProps<Props>(), {
  icon: "",
});
</script>
