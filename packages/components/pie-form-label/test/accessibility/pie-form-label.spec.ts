
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { PieFormLabel, FormLabelProps } from '../../src/index';

test.describe('PieFormLabel - Accessibility tests', () => {
    test('a11y - should test the PieFormLabel component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieFormLabel,
            {
                props: {} as FormLabelProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
