<template>
  <div>
    <div
      class="flex justify-end gap-2 cursor-pointer"
      @click="show.locale = !show.locale"
    >
      <img
        :src="`/icons/${localizationSelected?.code}.svg`"
        :alt="`Localization - ${localizationSelected?.name}`"
        class="w-4"
      />
      <span class="font-semibold">
        {{ localizationSelected?.name }}
      </span>
    </div>
    <div
      v-if="show.locale"
      class="flex gap-2 absolute rounded drop-shadow-md cursor-pointer bg-quaternary px-4 py-2 w-full"
      @click="onChangeLocale(localizationNotSelected?.code ?? '')"
    >
      <img
        :src="`/icons/${localizationNotSelected?.code}.svg`"
        :alt="`Localization - ${localizationNotSelected?.name}`"
        class="w-4"
      />
      <span class="font-semibold">
        {{ localizationNotSelected?.name }}
      </span>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "AChangeLocale",
  inheritAttrs: false,
  customOptions: {},
};
</script>
<script setup lang="ts">
import { LocaleObject } from "#i18n";
import { useI18n, reactive, computed } from "#imports";

const { locale, locales } = useI18n();

const show = reactive({
  locale: false,
});

// Methods
const onChangeLocale = (code: string) => {
  locale.value = code;

  show.locale = false;
};

// Computeds
const localizationSelected = computed(() => {
  return (locales.value as LocaleObject[]).find(
    localization => localization.code === locale.value,
  );
});
const localizationNotSelected = computed(() => {
  return (locales.value as LocaleObject[]).find(
    localization => localization.code !== locale.value,
  );
});
</script>
