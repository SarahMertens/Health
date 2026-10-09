import { describe, expect, it } from 'vitest';
import { isoWeekday } from './date';

describe('isoWeekday', () => {
  it.each([
    ['2026-10-05', 1], // Monday
    ['2026-10-09', 5], // Friday
    ['2026-10-10', 6], // Saturday
    ['2026-10-11', 7], // Sunday, which JavaScript numbers as 0
  ])('%s is weekday %i', (date, expected) => {
    expect(isoWeekday(new Date(`${date}T12:00:00`))).toBe(expected);
  });
});
