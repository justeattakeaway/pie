import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieRadioGroup - Accessibility tests', () => {
    test('a11y - should test the PieRadioGroup component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        const radioGroupPage = new BasePage(page, 'radio-group--default');
        await radioGroupPage.load();

        await page.waitForSelector('pie-radio-group');
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
