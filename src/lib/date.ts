/** ISO weekday: 1 = Monday … 7 = Sunday (JavaScript itself starts at Sunday = 0). */
export function isoWeekday(date: Date = new Date()): number {
  return date.getDay() === 0 ? 7 : date.getDay();
}
