
import { litTest, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { PieDivider, DividerProps } from '../../src/index.ts';

litTest.describe('PieDivider - Accessibility tests', () => {
    litTest('a11y - should test the PieDivider component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
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
