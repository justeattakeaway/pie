
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieTextInput } from '../../src/index.ts';

test.describe('PieTextInput - Accessibility tests', () => {
    test('a11y - should test the PieTextInput component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(PieTextInput);

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
