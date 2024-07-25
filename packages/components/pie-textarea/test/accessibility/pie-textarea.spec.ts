
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieTextarea, type TextareaProps } from '../../src/index.ts';

test.describe('PieTextarea - Accessibility tests', () => {
    test('a11y - should test the PieTextarea component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieTextarea,
            {
                props: {} as TextareaProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
