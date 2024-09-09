
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieSpinner } from '../../src/index.ts';

test.describe('PieSpinner - Accessibility tests', () => {
    test('a11y - should test the PieSpinner component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(PieSpinner);

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
