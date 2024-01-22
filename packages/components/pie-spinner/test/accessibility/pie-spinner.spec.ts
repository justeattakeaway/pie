
import { litTest, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { PieSpinner, SpinnerProps } from '../../src/index.ts';

litTest.describe('PieSpinner - Accessibility tests', () => {
    litTest('a11y - should test the PieSpinner component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
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
