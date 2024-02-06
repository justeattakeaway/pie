
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieChip, ChipProps } from '../../src/index.ts';

test.describe('PieChip - Accessibility tests', () => {
    test('a11y - should test the PieChip component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieChip,
            {
                props: {} as ChipProps,
                slots: {
                    default: 'Label',
                },
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
