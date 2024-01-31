import { HEADERS } from "@/consts/headers.const";

export interface Option {
  name: string;
  label: string;
}

export const useOptions = () => {
  const { t } = useI18n();

  const headerOptions = computed<Option[]>(() =>
    HEADERS.map(header => {
      return {
        name: header.href,
        label: t(`headers.${header.label.toLowerCase()}`),
      };
    }),
  );

  return {
    headerOptions,
  };
};
