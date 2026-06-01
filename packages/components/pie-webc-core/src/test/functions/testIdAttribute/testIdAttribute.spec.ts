import {
    describe, it, expect, vi, afterEach,
} from 'vitest';

import {
    DEFAULT_TEST_ID_ATTRIBUTE,
    getPieTestIdAttribute,
    setPieTestIdAttribute,
} from '../../../functions/testIdAttribute';

describe('testIdAttribute config', () => {
    afterEach(() => {
        // Reset directly so teardown doesn't depend on setPieTestIdAttribute working.
        (globalThis as Record<symbol, unknown>)[Symbol.for('pie.testIdAttribute')] = undefined;
        vi.restoreAllMocks();
    });

    it('defaults to "data-test-id"', () => {
        expect(getPieTestIdAttribute()).toBe('data-test-id');
        expect(DEFAULT_TEST_ID_ATTRIBUTE).toBe('data-test-id');
    });

    it('returns the configured value after a valid override', () => {
        setPieTestIdAttribute('data-qa');
        expect(getPieTestIdAttribute()).toBe('data-qa');
    });

    it('accepts names with hyphens, digits and underscores after the first letter', () => {
        setPieTestIdAttribute('data-qa_2');
        expect(getPieTestIdAttribute()).toBe('data-qa_2');
    });

    it.each([
        ['', 'empty string'],
        ['1abc', 'leading digit'],
        ['has space', 'whitespace'],
        ['data qa', 'whitespace'],
        ['-leading-hyphen', 'leading hyphen'],
    ])('rejects invalid name %j (%s): warns and keeps the previous value', (invalid) => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
        setPieTestIdAttribute('data-qa'); // establish a known-good prior value
        warn.mockClear();

        setPieTestIdAttribute(invalid as string);

        expect(warn).toHaveBeenCalledOnce();
        expect(getPieTestIdAttribute()).toBe('data-qa'); // unchanged
    });

    it('shares the value across calls via globalThis (single source of truth)', () => {
        setPieTestIdAttribute('data-e2e');
        expect((globalThis as Record<symbol, unknown>)[Symbol.for('pie.testIdAttribute')]).toBe('data-e2e');
    });
});
