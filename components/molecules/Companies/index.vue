<template>
  <ul class="list-disc mt-4 text-primary">
    <li
      v-for="(company, index) in COMPANIES"
      class="mt-2"
      :key="`company-${index}`"
    >
      <h2 class="font-semibold text-lg text-primary">
        <a v-if="company.link" :href="company.link" target="_blank">
          {{ company.name }}
        </a>
        <span v-if="!company.link">
          {{ company.name }}
        </span>
        · {{ $t(`type-work.${toParamCase(company.typeWork)}`) }}
      </h2>
      <p class="text-secondary">
        {{ $t(`companies.${toParamCase(company.desc)}-desc`) }}
      </p>
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
