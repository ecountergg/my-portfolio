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
        <div class="inline-grid grid-cols-1 gap-y-2 mb-4 sm:mb-0">
          <MInput
            id="name"
            name="name"
            :label="t('full-name')"
            :placeholder="t('full-name')"
          />
          <MInput
            id="email"
            name="email"
            :label="t('email')"
            :placeholder="t('email')"
          />
          <MTextarea
            id="message"
            name="message"
            :label="t('message')"
            :placeholder="t('message')"
          />
          <AButton @click="onSubmit">{{ $t("send") }}</AButton>
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
import { computed, unref, object, string, useI18n } from "#imports";
import { toTypedSchema } from "@vee-validate/yup";
import { useForm } from "vee-validate";

import { useSupabase } from "@/composables/useSupabase";
import { CONTACTS } from "@/consts/contacts.const";
import { useToastStore } from "@/stores/toast";
import { STATUS } from "~/types/status.types";

const { supabase } = useSupabase();
const { t } = useI18n();
const toastStore = useToastStore();

const validationSchema = computed(() =>
  object({
    name: string().required().label(t("full-name")),
    email: string().email().label(t("email")).required().label(t("email")),
    message: string().required().label(t("message")),
  }),
);

const { handleSubmit, resetForm } = useForm({
  validationSchema: computed(() => toTypedSchema(unref(validationSchema))),
});

const onSubmit = handleSubmit(async values => {
  const response = await supabase.from("contacts").insert({
    name: values.name,
    email: values.email,
    message: values.message,
  });
  if (response.status === 201) {
    resetForm();
    return toastStore.addToast({
      title: t("success"),
      message: t("toast.contract-success-add"),
      type: STATUS.SUCCESS,
    });
  }
  return toastStore.addToast({
    title: t("success"),
    message: t("toast.contract-failed-add"),
    type: STATUS.ERROR,
  });
});
</script>
