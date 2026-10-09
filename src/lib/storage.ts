/** The part of `localStorage` we use; lets tests pass in a fake. */
export type KeyValueStorage = Pick<Storage, 'getItem' | 'setItem'>;

/**
 * Reads a JSON value. Returns `undefined` when the key is missing, the value
 * is not valid JSON, or storage is unavailable (for example in private mode).
 */
export function readJson(storage: KeyValueStorage, key: string): unknown {
  try {
    const raw = storage.getItem(key);
    return raw === null ? undefined : JSON.parse(raw);
  } catch {
    return undefined;
  }
}

/** Writes a JSON value. Returns whether it was saved. */
export function writeJson(
  storage: KeyValueStorage,
  key: string,
  value: unknown,
): boolean {
  try {
    storage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}
