<template>
  <MSection id="experiences" :title="$t('headers.experiences')">
    <div class="pl-10 text-primary mt-2">
      {{ $t("experiences-desc") }}
      <MCompanies />
    </div>
  </MSection>
</template>
<script lang="ts">
export default {
  name: "MExperience",
  inheritAttrs: false,
};
</script>
