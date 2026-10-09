import { describe, expect, it } from 'vitest';
import { findRecipe, nutritionSummary, recipes, weekMenu } from './recipes';
import { schedule } from './schedule';
import { allShoppingItems } from './shopping';
import { findWorkout, workouts } from './workouts';

/**
 * The content is plain data, so a typo in a slug would only show up as a
 * broken link at runtime. These tests catch that at build time instead.
 */
describe('content integrity', () => {
  const unique = (values: unknown[]) => new Set(values).size === values.length;

  it('has a schedule of seven consecutive days', () => {
    expect(schedule.map((day) => day.day)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('links every schedule day to an existing workout', () => {
    for (const day of schedule) {
      expect(findWorkout(day.workout), `day ${day.day}`).toBeDefined();
    }
  });

  it('uses every workout in the schedule', () => {
    const used = new Set(schedule.map((day) => day.workout));

    expect(workouts.filter((workout) => !used.has(workout.slug))).toEqual([]);
  });

  it('has unique slugs', () => {
    expect(unique(workouts.map((workout) => workout.slug))).toBe(true);
    expect(unique(recipes.map((recipe) => recipe.slug))).toBe(true);
  });

  it('gives every workout at least one step with text', () => {
    for (const workout of workouts) {
      expect(workout.steps.length, workout.slug).toBeGreaterThan(0);
      for (const step of workout.steps) {
        expect(step.paragraphs.length, `${workout.slug}: ${step.title}`).toBeGreaterThan(
          0,
        );
      }
    }
  });

  it('closes every ** bold marker', () => {
    const texts = workouts.flatMap((workout) => [
      workout.intro,
      ...workout.steps.flatMap((step) => step.paragraphs),
    ]);

    for (const text of texts) {
      expect(text.split('**').length % 2, text).toBe(1);
    }
  });

  it('has a menu for Monday to Sunday', () => {
    expect(weekMenu.map((day) => day.weekday)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('links every menu entry to an existing recipe', () => {
    for (const day of weekMenu) {
      for (const entry of [day.lunch, day.dinner]) {
        if (entry.recipe) {
          expect(
            findRecipe(entry.recipe),
            `${day.shortName}: ${entry.label}`,
          ).toBeDefined();
        }
      }
    }
  });

  it('gives every recipe ingredients and a method', () => {
    for (const recipe of recipes) {
      expect(recipe.ingredients.length, recipe.slug).toBeGreaterThan(0);
      expect(recipe.method, recipe.slug).not.toBe('');
    }
  });

  it('formats the nutrition summary', () => {
    expect(nutritionSummary(findRecipe('kip-rijst')!)).toBe(
      '± 850–950 kcal · ± 50–60 g eiwit',
    );
  });

  it('has a unique id for every shopping item', () => {
    // A duplicate id would make two checkboxes overwrite each other's tick.
    expect(unique(allShoppingItems.map((item) => item.id))).toBe(true);
  });
});
