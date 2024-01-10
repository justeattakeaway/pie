
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { PieNotification, NotificationProps } from '../../src/index.ts';

test.describe('PieNotification - Accessibility tests', () => {
    test('a11y - should test the PieNotification component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
        await mount(
            PieNotification,
            {
                props: {} as NotificationProps,
            },
        );

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
