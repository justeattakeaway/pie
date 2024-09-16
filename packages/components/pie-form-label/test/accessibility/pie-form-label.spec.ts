import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieFormLabel } from '../../src/index.ts';

test.describe('PieFormLabel - Accessibility tests', () => {
    test('a11y - should test the PieFormLabel component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(PieFormLabel);

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
