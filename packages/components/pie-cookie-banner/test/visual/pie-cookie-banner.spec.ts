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

        await percySnapshot(page, 'PieCookieBanner Manage preferences - Visual Test');
    });

    [true, false].forEach((hasPrimaryActionsOnly) => {
        test(`should display the correct button variants for hasPrimaryActionsOnly = ${hasPrimaryActionsOnly}`, async ({ page }) => {
            await pieCookieBannerComponent.load({ hasPrimaryActionsOnly });

            await percySnapshot(page, `PieCookieBanner hasPrimaryActionsOnly = ${hasPrimaryActionsOnly}`);
        });
    });

    test('should render rich text (anchor) in a per-category description within manage preferences', async ({ page }) => {
        await pieCookieBannerComponent.load();
        await pieCookieBannerComponent.waitForLocaleUpdate();

        await page.evaluate(async () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const component = document.querySelector('pie-cookie-banner') as any;
            component._locale = {
                ...component._locale,
                preferencesManagement: {
                    ...component._locale.preferencesManagement,
                    necessary: {
                        ...component._locale.preferencesManagement.necessary,
                        description: 'Read our <a href="https://example.com/privacy">privacy policy</a> for more info.',
                    },
                },
            };
            await component.updateComplete;
        });

        await pieCookieBannerComponent.clickManagePreferencesAction();

        await percySnapshot(page, 'PieCookieBanner - Rich text in per-category description');
    });
});
