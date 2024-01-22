
import { litTest, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { PieInput, InputProps } from '../../src/index.ts';

litTest.describe('PieInput - Accessibility tests', () => {
    litTest('a11y - should test the PieInput component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieInput,
            {
                props: {} as InputProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
