export const STATUS = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};
export type Status = (typeof STATUS)[keyof typeof STATUS];
