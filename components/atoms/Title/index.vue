<template>
  <div class="flex items-center gap-4">
    <div class="bg-primary h-1 w-6 rounded-md"></div>
    <p class="font-semibold text-primary">
      {{ title }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "ATitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>
