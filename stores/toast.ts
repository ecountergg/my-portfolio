import { defineStore } from "pinia";

import { Status } from "@/types/status.types";
import { nanoid } from "nanoid";

export type Toast = {
  id: string;
  title: string;
  type: Status;
  message: string;
};

interface State {
  toasts: Toast[];
}

export const useToastStore = defineStore("toast-store", {
  state: (): State => ({
    toasts: [],
  }),
  actions: {
    addToast(toast: Omit<Toast, "id">) {
      this.toasts.push({
        ...toast,
        id: nanoid(),
      });
    },
    remove(id: string) {
      const index = this.toasts.findIndex(toast => toast.id === id);
      this.toasts.splice(index, 1);
    },
    removeAll() {
      this.toasts = [];
    },
  },
});
