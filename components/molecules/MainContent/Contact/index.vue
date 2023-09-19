<template>
  <MSection id="contact" :title="$t('headers.contact')">
    <div class="pl-10 text-primary">
      <p>{{ $t("contact-desc") }}</p>
    </div>
  </MSection>
</template>
<script lang="ts">
export default {
  name: "MContact",
  inheritAttrs: false,
};
</script>
