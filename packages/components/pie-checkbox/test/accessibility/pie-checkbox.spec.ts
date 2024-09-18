import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieCheckbox, type CheckboxProps } from '../../src/index.ts';

test.describe('PieCheckbox - Accessibility tests', () => {
    test('a11y - should test the PieCheckbox component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieCheckbox,
            {
                props: {} as CheckboxProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
