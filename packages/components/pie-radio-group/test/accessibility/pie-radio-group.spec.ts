import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieRadioGroup } from '../../src/index.ts';

test.describe('PieRadioGroup - Accessibility tests', () => {
    test('a11y - should test the PieRadioGroup component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(PieRadioGroup);

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
