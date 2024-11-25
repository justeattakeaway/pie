import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieToastProvider } from '../../src/index.ts';

test.describe('PieToastProvider - Accessibility tests', () => {
    test('a11y - should test the PieToastProvider component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(PieToastProvider);

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
