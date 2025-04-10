import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieNotification - Accessibility tests', () => {
    test('a11y - should test the PieNotification component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        const notificationPage = new BasePage(page, 'notification');

        await notificationPage.load();

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
