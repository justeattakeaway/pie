
// @vitest-environment node
import { test, expect } from 'vitest';
import replace from '../replace';

test('throws an error when run in node environment', () => {
    expect(replace).toThrowErrorMatchingSnapshot();
});
