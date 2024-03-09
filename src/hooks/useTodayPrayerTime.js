// import { timingFormatter } from "@/lib/utils";
// import { DateTime } from "luxon";

export default function useTodayPrayerTime() {
  async function getTodayTimings(latitude, longitude) {
    const date = new Date();
    // const year = dateToday.getFullYear();
    // const month = dateToday.getMonth() + 1;
    const today = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()} `;

    const url = `https://api.aladhan.com/v1/timings/${today}?latitude=${latitude}&longitude=${longitude}&method=2&iso8601=true`;
    // &tune=0,0,0,0,0,2,0,0,0

    const response = await fetch(url);
    const data = await response.json();

    return data.data;
  }

  return { getTodayTimings };
}
