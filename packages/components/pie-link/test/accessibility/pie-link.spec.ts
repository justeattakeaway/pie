
import { litTest, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { PieLink, LinkProps } from '../../src/index.ts';

litTest.describe('PieLink - Accessibility tests', () => {
    litTest('a11y - should test the PieLink component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieLink,
            {
                props: {} as LinkProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
