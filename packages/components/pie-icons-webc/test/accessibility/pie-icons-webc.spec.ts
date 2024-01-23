
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { IconClose, IconsWebcProps } from '../../src/index.ts';

test.describe('PieIconsWebc - Accessibility tests', () => {
    test('a11y - should test the PieIconsWebc component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            IconClose,
            {
                props: {} as IconsWebcProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
