import { create } from "zustand";
import { format } from "date-fns";

interface APPSTORE {
  formattedDate: string;
  updateFormattedDate: () => void;
}
export const appStore = create<APPSTORE>((set) => ({
  formattedDate: "",
  updateFormattedDate() {
    const now = new Date(); // Get the current date and time
    const dateTime = format(now, "M/d/yyyy h:mm a zzz"); // Format: Month/Day/Year Hour:Minute AM/PM Timezone
    set(() => ({
      formattedDate: dateTime,
    }));
  },
}));
