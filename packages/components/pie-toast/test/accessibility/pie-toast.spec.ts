
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { PieToast, ToastProps } from '../../src/index.ts';

test.describe('PieToast - Accessibility tests', () => {
    test('a11y - should test the PieToast component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieToast,
            {
                props: {} as ToastProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
