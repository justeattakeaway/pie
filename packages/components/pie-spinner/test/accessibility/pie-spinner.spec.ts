
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { PieSpinner, SpinnerProps } from '../../src/index';

test.describe('PieSpinner - Accessibility tests', () => {
    test('a11y - should test the PieSpinner component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieSpinner,
            {
                props: {} as SpinnerProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
