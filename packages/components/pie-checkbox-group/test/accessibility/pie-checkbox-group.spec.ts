import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieCheckboxGroup } from '../../src/index.ts';

test.describe('PieCheckboxGroup - Accessibility tests', () => {
    test('a11y - should test the PieCheckboxGroup component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(PieCheckboxGroup);

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
