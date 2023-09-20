<template>
  <MSection id="contact" :title="$t('headers.contact')">
    <div class="pl-10 text-secondary">
      <p>{{ $t("contact-desc") }}</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 mt-6 sm:mt-12">
        <div class="mb-4 sm:mb-8">
          <div
            v-for="(contact, index) in CONTACTS"
            :key="`contact-${index}`"
            class="flex items-center mb-8"
          >
            <a
              :href="contact.link"
              target="_blank"
              rel="noopener noreferrer"
              class="flex gap-x-2 items-center text-primary"
            >
              <icon :name="contact.icon" class="w-10 h-10" />
              <div class="block">
                <p class="font-semibold text-primary text-lg">
                  {{ contact.title }}
                </p>
                <p class="text-secondary">{{ contact.value }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </MSection>
</template>
<script lang="ts">
export default {
  name: "MContact",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { useSupabase } from "@/composables/useSupabase";
import { CONTACTS } from "~/consts/contacts.const";

const { supabase } = useSupabase();

const onCreateContact = async () => {
  await supabase.from("contacts").insert({
    name: "Ecounter Dev",
    email: "ecounterdev@gmail.com",
    message: "Testing Compose",
  });
};
</script>
