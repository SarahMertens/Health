import type { ScheduleDay } from '@/types';

/** The fixed training week. Each day links to a workout in `workouts.ts`. */
export const schedule: ScheduleDay[] = [
  {
    day: 1,
    emoji: '💪',
    title: 'Kracht A',
    subtitle: 'Benen + borst + rug + core',
    kind: 'strength',
    workout: 'kracht-a',
  },
  {
    day: 2,
    emoji: '🌿',
    title: 'Rustige duurloop',
    subtitle: '30–45 min comfortabel',
    kind: 'active',
    workout: 'duurloop',
  },
  {
    day: 3,
    emoji: '😴',
    title: 'Rust',
    subtitle: 'Wandelen of mobiliteit',
    kind: 'rest',
    workout: 'herstel',
  },
  {
    day: 4,
    emoji: '🏋️',
    title: 'Kracht B',
    subtitle: 'Rug + armen + schouders + grip + core',
    kind: 'strength',
    workout: 'kracht-b',
  },
  {
    day: 5,
    emoji: '⚡',
    title: 'Interval',
    subtitle: 'Snelheid + conditie',
    kind: 'active',
    workout: 'interval',
  },
  {
    day: 6,
    emoji: '😴',
    title: 'Rust',
    subtitle: 'Volledig herstel',
    kind: 'rest',
    workout: 'herstel',
  },
  {
    day: 7,
    emoji: '🏃',
    title: 'Tempo / 5 km',
    subtitle: 'Werken aan sneller lopen',
    kind: 'active',
    workout: 'tempo',
  },
];

/** What to do at the very least in a busy week. */
export const minimumWeek: string[] = [
  '1 rustige loop',
  '1 interval- of tempotraining',
  '1 krachttraining',
];
