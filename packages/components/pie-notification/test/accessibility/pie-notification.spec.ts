
import { litTest, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { PieNotification, NotificationProps } from '../../src/index.ts';

litTest.describe('PieNotification - Accessibility tests', () => {
    litTest('a11y - should test the PieNotification component WCAG compliance', async ({ makeAxeBuilder, mount }) => {
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
