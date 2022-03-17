<template>
  <nav
    class="sticky top-0 lg:flex items-center justify-between flex-wrap bg-quaternary py-4 px-6"
  >
    <div class="flex justify-between lg:hidden">
      <img src="/images/eka.jpg" alt="Image - Eka" class="rounded-full w-7" />
      <div class="flex gap-2">
        <img
          :src="`/icons/${localizationSelected.value}.svg`"
          :alt="`Localization - ${localizationSelected.label}`"
          class="w-4"
        />
        {{ localizationSelected.label }}
      </div>
    </div>
    <div class="hidden lg:flex">
      <div class="flex items-center flex-no-shrink mr-6">
        <svg
          class="h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-white lg:text-primary"
          @click="isShowMenu = !isShowMenu"
        >
          <svg
            viewBox="0 0 100 80"
            class="h-3 w-3 text-white lg:text-primary"
            fill="currentColor"
          >
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="font-medium text-white lg:text-primary lg:flex-grow">
          <a
            v-for="(header, index) in Headers"
            :key="`header-${index}`"
            :href="header.href"
            class="block lg:inline-block mt-4 lg:mt-0 mr:0 lg:mr-4 font-semibold"
          >
            {{ header.label }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";

// Consts
import { Headers } from "~/consts/headers";
import { Localizations } from "~/consts/localizations";

export default defineComponent({
  name: "AHeader",
  setup() {
    const isShowMenu = ref(true);

    const locale = computed(() => {
      return "um";
    });

    const localizationSelected = computed(() => {
      return Localizations.find(
        (localization) => localization.value === locale.value
      );
    });

    return {
      Headers,
      Localizations,
      isShowMenu,
      locale,
      localizationSelected,
    };
  },
});
</script>
