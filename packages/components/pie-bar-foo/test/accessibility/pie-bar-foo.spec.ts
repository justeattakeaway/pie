import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieBarFoo } from '../../src/index.ts';

test.describe('PieBarFoo - Accessibility tests', () => {
    test('a11y - should test the PieBarFoo component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(PieBarFoo);

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
