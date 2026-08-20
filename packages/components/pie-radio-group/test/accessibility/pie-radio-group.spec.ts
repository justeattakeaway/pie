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

    test('a11y - should test the PieRadioGroup with list items WCAG compliance', async ({ makeAxeBuilder, page }) => {
        const radioGroupPage = new BasePage(page, 'radio-group--with-list-items');
        await radioGroupPage.load();

        await page.waitForSelector('pie-radio-group');

        // `item-3` is a disabled row, so its text is muted. Axe reports that as a `color-contrast` violation, but WCAG 2.1
        // SC 1.4.3 (Contrast Minimum) exempts inactive user interface components, so the row is
        // conformant as authored and the exclusion below is deliberate rather than a workaround.
        // Source: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
        const results = await makeAxeBuilder()
            .exclude('pie-list-item[data-test-id="item-3"]')
            .analyze();

        expect(results.violations).toEqual([]);
    });
});
