<template>
  <section id="home" class="bg-quaternary">
    <div class="p-6">
      <h1 class="text-3xl font-bold text-center text-primary mb-4">
        Frontend Engineer, Low Profile & Future Father
      </h1>
      <h2 class="text-xl text-center text-primary mb-8">
        {{ $t("quote") }}
      </h2>
      <img
        src="/images/eka.jpg"
        alt="Image - Eka"
        class="rounded-full w-56 mx-auto mb-8"
      />
    </div>
  </section>
</template>
<script lang="ts">
export default {
  name: "MHome",
  inheritAttrs: false,
};
</script>
