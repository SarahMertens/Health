/** Shared domain types. All content in `src/data` is checked against these. */

/** Decides the accent colour of a training step or day. */
export type Intensity = 'strength' | 'run' | 'recovery';

export interface WorkoutStep {
  emoji: string;
  /** e.g. "Leg press — 3 × 8–12" */
  title: string;
  intensity: Intensity;
  /**
   * One entry per paragraph. Inside a paragraph `**text**` is bold and a
   * newline is a line break. See `parseRichText`.
   */
  paragraphs: string[];
}

export interface Workout {
  /** Used in the URL: `#/schema/<slug>` */
  slug: string;
  emoji: string;
  title: string;
  /** Short introduction; supports the same `**bold**` markup as steps. */
  intro: string;
  /** Colour of the introduction card. */
  tone: 'green' | 'blue' | 'yellow';
  steps: WorkoutStep[];
}

export type DayKind = 'strength' | 'active' | 'rest';

export interface ScheduleDay {
  /** 1 to 7 */
  day: number;
  emoji: string;
  title: string;
  subtitle: string;
  kind: DayKind;
  /** Slug of the workout this day links to. */
  workout: string;
}

export interface Recipe {
  /** Used in the URL: `#/recepten/<slug>` */
  slug: string;
  emoji: string;
  name: string;
  category: 'meal' | 'shake';
  /** Rough range in kcal, e.g. "850–950". */
  energy: string;
  /** Rough range in grams, e.g. "50–60". */
  protein: string;
  ingredients: string[];
  method: string;
}

export interface MenuEntry {
  label: string;
  /** Slug of the recipe, when the entry is something we have a recipe for. */
  recipe?: string;
}

export interface MenuDay {
  /** 1 = Monday … 7 = Sunday (ISO weekday). */
  weekday: number;
  shortName: string;
  lunch: MenuEntry;
  dinner: MenuEntry;
}

/**
 * `weekly` items are bought again every week and are unticked by
 * "Nieuwe week starten". `stock` items last longer and keep their tick.
 */
export type ShoppingItemType = 'weekly' | 'stock';

export interface ShoppingItem {
  /** Stable key under which the tick is stored. Must be unique. */
  id: string;
  label: string;
  type: ShoppingItemType;
}

export interface ShoppingGroup {
  title: string;
  items: ShoppingItem[];
}

export interface ShoppingLocation {
  id: string;
  title: string;
  groups: ShoppingGroup[];
}
