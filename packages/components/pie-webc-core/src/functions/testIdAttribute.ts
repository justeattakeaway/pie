/**
 * The default attribute name PIE components use for their internal test hooks.
 */
export const DEFAULT_TEST_ID_ATTRIBUTE = 'data-test-id';

/**
 * Key for the globally-shared configured attribute name. Using `Symbol.for`
 * means the value is shared even if `pie-webc-core` is duplicated across bundles.
 */
const STORE_KEY = Symbol.for('pie.testIdAttribute');

/**
 * Matches a conservative subset of valid HTML attribute names: a leading letter
 * followed by letters, digits, hyphens or underscores (covers `data-*` names).
 */
const VALID_ATTRIBUTE_NAME = /^[a-z][\w-]*$/i;

const store = globalThis as unknown as Record<symbol, string | undefined>;

/**
 * Returns the attribute name PIE components should expose their internal test
 * hooks under. Defaults to `data-test-id`.
 */
export function getPieTestIdAttribute (): string {
    return store[STORE_KEY] ?? DEFAULT_TEST_ID_ATTRIBUTE;
}

/**
 * Globally overrides the attribute name PIE components use for their internal
 * test hooks (e.g. `data-qa`). Must be called before components first render.
 * Invalid names are ignored with a console warning.
 *
 * @param name - A valid HTML attribute name.
 */
export function setPieTestIdAttribute (name: string): void {
    if (typeof name !== 'string' || !VALID_ATTRIBUTE_NAME.test(name)) {
        console.warn(`[PIE] Ignoring invalid test-id attribute name: "${name}". Use a valid HTML attribute name (e.g. "data-qa").`);
        return;
    }

    store[STORE_KEY] = name;
}
