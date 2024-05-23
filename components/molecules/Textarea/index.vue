<template>
  <div>
    <ALabel v-if="label" v-bind="$attrs" :id="id" :label="label"></ALabel>
    <ATextarea
      v-bind="$attrs"
      :id="id"
      :name="name"
      :placeholder="t('input-something', { something: placeholder })"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "MTextarea",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { useI18n } from "#imports";

import { Props as LabelProps } from "@/components/Atoms/Label/props";
import { Props as TextareaProps } from "@/components/Atoms/Textarea/props";

type Props = LabelProps & TextareaProps;

const { t } = useI18n();

withDefaults(defineProps<Props>(), {
  id: "input",
  name: "input",
  label: "",
  placeholder: "",
});
</script>
