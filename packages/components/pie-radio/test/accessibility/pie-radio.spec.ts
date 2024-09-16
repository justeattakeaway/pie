import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieRadio, type RadioProps } from '../../src/index.ts';

test.describe('PieRadio - Accessibility tests', () => {
    test('a11y - should test the PieRadio component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieRadio,
            {
                props: {} as RadioProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
