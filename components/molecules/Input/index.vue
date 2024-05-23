<template>
  <div>
    <ALabel v-if="label" v-bind="$attrs" :id="id" :label="label"></ALabel>
    <AInput
      v-bind="$attrs"
      :id="id"
      :name="name"
      :placeholder="t('input-something', { something: placeholder })"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "MInput",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { useI18n } from "#imports";

import { Props as LabelProps } from "@/components/Atoms/Label/props";
import { Props as InputProps } from "@/components/Atoms/Input/props";

type Props = LabelProps & InputProps;

const { t } = useI18n();

withDefaults(defineProps<Props>(), {
  id: "input",
  name: "input",
  label: "",
  placeholder: "",
});
</script>
