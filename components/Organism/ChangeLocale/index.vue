<template>
  <div>
    <div
      class="flex justify-end gap-2 cursor-pointer"
      @click="show.locale = !show.locale"
    >
      <img
        :src="`/icons/${localizationSelected.value}.svg`"
        :alt="`Localization - ${localizationSelected.label}`"
        class="w-4"
      />
      <span class="font-semibold">
        {{ localizationSelected.label }}
      </span>
    </div>
    <div
      v-if="show.locale"
      class="flex gap-2 absolute rounded drop-shadow-md cursor-pointer bg-quaternary px-4 py-2 w-full"
      @click="setChangeLocale(localizationNotSelected.value)"
    >
      <img
        :src="`/icons/${localizationNotSelected.value}.svg`"
        :alt="`Localization - ${localizationNotSelected.label}`"
        class="w-4"
      />
      <span class="font-semibold text-white">
        {{ localizationNotSelected.label }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue"

// Consts
import { Localizations } from "~/consts/localizations"

// Compose
import { useLocalization } from "~~/composables"

export default defineComponent({
  name: "OChangeLocale",
  setup() {
    const { locale, changeLocale } = useLocalization()
    const show = reactive({
      locale: false,
    })

    // Computeds
    const localizationSelected = computed(() => {
      return Localizations.find(
        (localization) => localization.value === locale.value
      )
    })
    const localizationNotSelected = computed(() => {
      return Localizations.find(
        (localization) => localization.value !== locale.value
      )
    })

    // Methods
    const setChangeLocale = (lang: string) => {
      changeLocale(lang)
      show.locale = false
    }

    return {
      show,
      localizationSelected,
      localizationNotSelected,
      setChangeLocale,
    }
  },
})
</script>
