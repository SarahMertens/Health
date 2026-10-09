import { reactive } from 'vue';
import { allShoppingItems } from '@/data/shopping';
import { type KeyValueStorage, readJson, writeJson } from '@/lib/storage';
import type { ShoppingItem } from '@/types';

/**
 * Same key and format (`{ "<item id>": true }`) as the first version of the
 * site, so ticks that were saved before the rewrite are still there.
 */
export const STORAGE_KEY = 'boodschappen-v1';

export interface Progress {
  done: number;
  total: number;
}

/**
 * State and rules of the shopping list, independent of any component.
 *
 * `items` and `storage` are parameters so the logic can be unit-tested with
 * a small list and an in-memory storage.
 */
export function createShoppingList(
  items: ShoppingItem[],
  storage: KeyValueStorage,
  key: string = STORAGE_KEY,
) {
  const checked = reactive<Record<string, boolean>>({});

  // Only accept what we recognise: stored data may be old or hand-edited.
  const saved = readJson(storage, key);
  for (const item of items) {
    checked[item.id] =
      typeof saved === 'object' &&
      saved !== null &&
      (saved as Record<string, unknown>)[item.id] === true;
  }

  function save(): boolean {
    return writeJson(storage, key, { ...checked });
  }

  function isChecked(id: string): boolean {
    return checked[id] === true;
  }

  function setChecked(id: string, value: boolean): void {
    if (!(id in checked)) return;

    checked[id] = value;
    save();
  }

  /** Unticks what has to be bought again; items in stock keep their tick. */
  function startNewWeek(): void {
    for (const item of items) {
      if (item.type === 'weekly') checked[item.id] = false;
    }

    save();
  }

  function progress(subset: ShoppingItem[] = items): Progress {
    return {
      done: subset.filter((item) => isChecked(item.id)).length,
      total: subset.length,
    };
  }

  return { isChecked, setChecked, startNewWeek, progress };
}

export type ShoppingList = ReturnType<typeof createShoppingList>;

let shared: ShoppingList | undefined;

/** The one shopping list of the app, backed by `localStorage`. */
export function useShoppingList(): ShoppingList {
  shared ??= createShoppingList(allShoppingItems, window.localStorage);
  return shared;
}
