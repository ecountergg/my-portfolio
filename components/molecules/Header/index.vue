<template>
  <nav
    class="static lg:sticky top-0 items-center justify-between flex-wrap bg-quaternary py-3 px-6 border-0 lg:flex"
  >
    <div class="flex justify-between lg:hidden">
      <img src="/images/eka.jpg" alt="Image - Eka" class="rounded-full w-7" />
      <div class="relative w-20 text-right">
        <AChangeLocale />
      </div>
    </div>
    <div class="hidden lg:flex w-full">
      <img
        src="/images/eka.jpg"
        alt="Image - Eka"
        class="rounded-full w-7 mr-6"
      />
      <div class="flex align-middle justify-between w-full">
        <div
          class="font-medium text-white lg:text-primary lg:flex lg:gap-4 lg:flex-grow"
        >
          <a
            v-for="(header, index) in headerOptions"
            :key="`header-${index}`"
            :href="header.name"
            class="block lg:inline-block font-semibold"
          >
            {{ header.label }}
          </a>
        </div>
        <div class="relative w-20 text-right">
          <AChangeLocale />
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
export default {
  name: "MHeader",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { useI18n } from "#imports";

import { useOptions } from "~/composables/useOptions";
const { t } = useI18n();

const { headerOptions } = useOptions();
</script>
