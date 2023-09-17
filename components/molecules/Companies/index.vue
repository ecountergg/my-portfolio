<template>
  <ul class="list-disc mt-4">
    <li
      v-for="(company, index) in COMPANIES"
      class="mt-2"
      :key="`company-${index}`"
    >
      <h2 class="font-semibold text-lg">
        <a :href="company.link ?? '#'" target="_blank">
          {{ company.name }}
        </a>
        · {{ $t(`type-work.${toParamCase(company.typeWork)}`) }}
      </h2>
      <p>{{ $t(`companies.${toParamCase(company.desc)}-desc`) }}</p>
      <div class="mt-4">
        {{ $t("technology") }}:
        <div class="flex items-center flex-wrap gap-2">
          <ATag
            v-for="(techStack, index) in company.techStacks"
            :key="`tech-stack-${index}`"
            :label="techStack.label"
            :icon="techStack.icon"
          />
        </div>
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
export default {
  name: "MCompanies",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { COMPANIES } from "~/consts/companies.const";
import { toParamCase } from "~/utils/string";
</script>
