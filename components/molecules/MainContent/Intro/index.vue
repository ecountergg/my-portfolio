<template>
  <MSection id="intro" class-name="py-6 px-6 md:px-36">
    <h1 class="text-3xl font-bold text-center text-primary mb-4">
      {{ $t("intro") }}💛
    </h1>
    <h2 class="text-center text-lg text-primary">
      {{ $t("intro-desc", { year }) }}
    </h2>
  </MSection>
</template>
<script lang="ts">
export default {
  name: "MIntro",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { computed } from "#imports";

const year = computed(() => {
  const currYear = new Date().getFullYear();

  return currYear - 2019;
});
</script>
