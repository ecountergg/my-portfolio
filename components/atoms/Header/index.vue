<template>
  <nav
    class="static lg:sticky top-0 lg:flex items-center justify-between flex-wrap bg-quaternary py-3 px-6 border-0"
  >
    <div class="flex justify-between lg:hidden">
      <img src="/images/eka.jpg" alt="Image - Eka" class="rounded-full w-7" />
      <div class="relative w-20 text-right">
        <OChangeLocale />
      </div>
    </div>
    <div class="hidden lg:flex w-full">
      <img
        src="/images/eka.jpg"
        alt="Image - Eka"
        class="rounded-full w-7 mr-6"
      />
      <div v-once class="flex align-middle justify-between w-full">
        <div
          class="font-medium text-white lg:text-primary lg:flex lg:gap-4 lg:flex-grow"
        >
          <a
            v-for="(header, index) in Headers"
            :key="`header-${index}`"
            :href="header.href"
            class="block lg:inline-block font-semibold"
          >
            {{ header.label }}
          </a>
        </div>
        <div class="relative w-20 text-right">
          <OChangeLocale />
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";

// Consts
import { Headers } from "~/consts/headers";

export default defineComponent({
  name: "AHeader",
  setup() {
    return {
      Headers,
    };
  },
});
</script>
