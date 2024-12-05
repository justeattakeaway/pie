import { test } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { CookieBannerComponent } from 'test/helpers/page-object/pie-cookie-banner.page.ts';
import percySnapshot from '@percy/playwright';

let pieCookieBannerComponent: CookieBannerComponent;

test.describe('PieCookieBanner - Visual tests`', () => {
    test.beforeEach(async ({ page }) => {
        pieCookieBannerComponent = new CookieBannerComponent(page);
    });

    test('should display the PieCookieBanner component successfully', async ({ page }) => {
        await pieCookieBannerComponent.load();

        await percySnapshot(page, 'PieCookieBanner - Visual Test');
    });

    test('should display the manage preferences modal after clicking `"Manage preferences"`', async ({ page }) => {
        await pieCookieBannerComponent.load();

        await pieCookieBannerComponent.clickManagePreferencesAction();

        await page.$eval('dialog', (el) => {
            el.style.top = '20px';
        });

        await percySnapshot(page, 'PieCookieBanner Manage preferences - Visual Test');
    });

    [true, false].forEach((hasPrimaryActionsOnly) => {
        test(`should display the correct button variants for hasPrimaryActionsOnly = ${hasPrimaryActionsOnly}`, async ({ page }) => {
            await pieCookieBannerComponent.load({ hasPrimaryActionsOnly });

            await percySnapshot(page, `PieCookieBanner hasPrimaryActionsOnly = ${hasPrimaryActionsOnly}`);
        });
    });
});
