<template>
  <section :id="id">
    <div :class="className">
      <ATitle v-if="title" :title="title" />
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
  className?: string;
  title?: string;
}

withDefaults(defineProps<Props>(), {
  className: "p-6",
});
</script>
