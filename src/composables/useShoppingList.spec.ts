import { describe, expect, it } from 'vitest';
import type { KeyValueStorage } from '@/lib/storage';
import type { ShoppingItem } from '@/types';
import { createShoppingList, STORAGE_KEY } from './useShoppingList';

const items: ShoppingItem[] = [
  { id: 'kip', label: 'Kipfilet', type: 'weekly' },
  { id: 'melk', label: 'Melk', type: 'weekly' },
  { id: 'rijst', label: 'Rijst', type: 'stock' },
];

/** In-memory stand-in for localStorage. */
function fakeStorage(initial: Record<string, string> = {}) {
  const data = new Map(Object.entries(initial));

  const storage: KeyValueStorage = {
    getItem: (key) => data.get(key) ?? null,
    setItem: (key, value) => void data.set(key, value),
  };

  return { storage, saved: () => JSON.parse(data.get(STORAGE_KEY) ?? 'null') };
}

describe('shopping list', () => {
  it('starts with everything unticked', () => {
    const list = createShoppingList(items, fakeStorage().storage);

    expect(items.map((item) => list.isChecked(item.id))).toEqual([false, false, false]);
    expect(list.progress()).toEqual({ done: 0, total: 3 });
  });

  it('saves a tick as soon as it changes', () => {
    const { storage, saved } = fakeStorage();
    const list = createShoppingList(items, storage);

    list.setChecked('kip', true);

    expect(list.isChecked('kip')).toBe(true);
    expect(saved()).toEqual({ kip: true, melk: false, rijst: false });
  });

  it('restores ticks from an earlier visit', () => {
    const { storage } = fakeStorage();
    createShoppingList(items, storage).setChecked('rijst', true);

    const reopened = createShoppingList(items, storage);

    expect(reopened.isChecked('rijst')).toBe(true);
    expect(reopened.isChecked('kip')).toBe(false);
  });

  it('reads the format of the first version of the site', () => {
    const { storage } = fakeStorage({
      [STORAGE_KEY]: JSON.stringify({ kip: true, melk: false, 'removed-item': true }),
    });

    const list = createShoppingList(items, storage);

    expect(list.isChecked('kip')).toBe(true);
    expect(list.isChecked('melk')).toBe(false);
    expect(list.isChecked('removed-item')).toBe(false);
  });

  it.each([
    ['broken JSON', '{not json'],
    ['a non-object', '"hello"'],
    ['null', 'null'],
    ['non-boolean values', JSON.stringify({ kip: 'yes', melk: 1 })],
  ])('ignores stored data that is %s', (_name, raw) => {
    const list = createShoppingList(items, fakeStorage({ [STORAGE_KEY]: raw }).storage);

    expect(list.progress()).toEqual({ done: 0, total: 3 });
  });

  it('ignores ids that are not on the list', () => {
    const { storage, saved } = fakeStorage();
    const list = createShoppingList(items, storage);

    list.setChecked('unknown', true);

    expect(list.isChecked('unknown')).toBe(false);
    expect(saved()).toBeNull();
  });

  it('a new week unticks weekly items but keeps the stock', () => {
    const { storage, saved } = fakeStorage();
    const list = createShoppingList(items, storage);
    items.forEach((item) => list.setChecked(item.id, true));

    list.startNewWeek();

    expect(list.isChecked('kip')).toBe(false);
    expect(list.isChecked('melk')).toBe(false);
    expect(list.isChecked('rijst')).toBe(true);
    expect(saved()).toEqual({ kip: false, melk: false, rijst: true });
  });

  it('counts progress for a part of the list', () => {
    const list = createShoppingList(items, fakeStorage().storage);
    list.setChecked('kip', true);
    list.setChecked('rijst', true);

    expect(list.progress()).toEqual({ done: 2, total: 3 });
    expect(list.progress(items.filter((item) => item.type === 'weekly'))).toEqual({
      done: 1,
      total: 2,
    });
  });

  it('keeps working when storage cannot be read or written', () => {
    const blocked: KeyValueStorage = {
      getItem: () => {
        throw new Error('blocked');
      },
      setItem: () => {
        throw new Error('quota exceeded');
      },
    };

    const list = createShoppingList(items, blocked);
    list.setChecked('kip', true);

    expect(list.isChecked('kip')).toBe(true);
  });
});
