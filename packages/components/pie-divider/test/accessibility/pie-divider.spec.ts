
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { PieDivider, DividerProps } from '@/index';

test.describe('PieDivider - Accessibility tests', () => {
    test('a11y - should test the PieDivider component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieDivider,
            {
                props: {} as DividerProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
