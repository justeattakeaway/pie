
// @vitest-environment node
import replace from '../replace';

test('throws an error when run in node environment', () => {
    expect(replace).toThrowErrorMatchingSnapshot();
});
