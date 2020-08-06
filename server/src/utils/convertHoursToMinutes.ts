export function convertHourToMinutes(times: string) {
  const [hour, minutes] = times.split(":").map(Number);
  const timeInMinutes = hour * 60 + minutes;

  return timeInMinutes;
}
