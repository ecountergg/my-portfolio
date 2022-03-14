<template>
  <nav class="flex items-center justify-between flex-wrap bg-secondary p-6">
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
        class="flex items-center px-3 py-2 border rounded text-quaternary"
        @click="isShowMenu = !isShowMenu"
      >
        <svg
          viewBox="0 0 100 80"
          class="h-3 w-3 text-quaternary"
          fill="currentColor"
        >
          <rect width="100" height="15"></rect>
          <rect y="30" width="100" height="15"></rect>
          <rect y="60" width="100" height="15"></rect>
        </svg>
      </button>
    </div>
    <div
      v-if="!isShowMenu"
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
    >
      <div class="font-medium lg:flex-grow">
        <a
          href="#responsive-header"
          class="block lg:inline-block mt-4 lg:mt-0 mr:0 lg:mr-4 text-quaternary font-semibold"
        >
          Docs
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-quaternary mr-4 font-semibold"
        >
          Examples
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-quaternary font-semibold"
        >
          Blog
        </a>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

// Composable
import { useIsMobile } from "~/composables/is-mobile";

export default defineComponent({
  name: "AHeader",
  setup() {
    const { isMobile } = useIsMobile();

    const isShowMenu = ref(true);

    onMounted(() => {
      isShowMenu.value = !isMobile() ? false : true;
    });

    return {
      isShowMenu,
      isMobile,
    };
  },
});
</script>
