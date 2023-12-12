
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { PieTag, TagProps } from '@/index';

test.describe('PieTag - Accessibility tests', () => {
    test('a11y - should test the PieTag component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieTag,
            {
                props: {} as TagProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
