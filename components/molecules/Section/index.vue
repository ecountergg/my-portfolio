<template>
  <section :id="id">
    <div class="p-6">
      <ATitle :title="title" />
      <slot />
    </div>
  </section>
</template>
<script lang="ts">
export default {
  name: "MSection",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
interface Props {
  id: string;
  title: string;
}

defineProps<Props>();
</script>
