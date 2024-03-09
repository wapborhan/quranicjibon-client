import { DateTime } from "luxon";

export function timingFormatter(timing) {
  const isoString = timing;
  const dateTime = DateTime.fromISO(isoString);
  const readableFormat = dateTime.toLocaleString(DateTime.TIME_SIMPLE);
  return readableFormat;
}
