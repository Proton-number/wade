import { create } from "zustand";
import { formatInTimeZone } from "date-fns-tz";

interface APPSTORE {
  formattedDate: string;
  updateFormattedDate: () => void;
}
export const appStore = create<APPSTORE>((set) => ({
  formattedDate: "",
  updateFormattedDate() {
    const now = new Date(); // Get the current date and time
    const timeZone = "America/Toronto";
    const dateTime = formatInTimeZone(now, timeZone, "M/d/yyyy h:mm a zzz"); // Format: Month/Day/Year Hour:Minute AM/PM Timezone
    set(() => ({
      formattedDate: dateTime,
    }));
  },
}));
