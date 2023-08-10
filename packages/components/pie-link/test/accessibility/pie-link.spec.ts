
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { PieLink, LinkProps } from '@/index';

test.describe('PieLink - Accessibility tests', () => {
    test('a11y - should test the PieLink component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
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
