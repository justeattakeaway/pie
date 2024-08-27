
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { CookieBannerComponent } from '../helpers/page-object/pie-cookie-banner.page.ts';

test.describe('PieCookieBanner - Accessibility tests', () => {
    test('a11y - should test the PieCookieBanner component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        const cookieBannerPage = new CookieBannerComponent(page);
        await cookieBannerPage.load();

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
