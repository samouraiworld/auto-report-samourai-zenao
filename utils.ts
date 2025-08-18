import dayjs from "dayjs";

const today = dayjs();
// Monday of the current week
const thisMonday = today.day() === 1
  ? today.startOf("day")
  : today.startOf("week").add(1, "day");
// Start of the week (From Monday 23h59)
export const lastMonday = thisMonday.subtract(7, "day");
// End of the week (To Monday 23h59)
export const nextMonday = thisMonday.add(7, "day").endOf("day");