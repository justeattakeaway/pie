
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';

import { PieCookieBanner, CookieBannerProps } from '../../src/index.ts';

const managePrefsSelector = '[data-test-id="actions-manage-prefs"]';

test.describe('PieCookieBanner - Visual tests`', () => {
    test('should display the PieCookieBanner component successfully', async ({ page, mount }) => {
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        await percySnapshot(page, 'PieCookieBanner - Visual Test');
    });

    test('should display the manage preferences modal after clicking `"Manage preferences"`', async ({ page, mount }) => {
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        await page.click(managePrefsSelector);

        await percySnapshot(page, 'PieCookieBanner Manage preferences - Visual Test');
    });

    [true, false].forEach((hasPrimaryActionsOnly) => {
        test(`should display the correct button variants for hasPrimaryActionsOnly = ${hasPrimaryActionsOnly}`, async ({ mount, page }) => {
            await mount(PieCookieBanner, {
                props: { hasPrimaryActionsOnly } as CookieBannerProps,
            });

            await percySnapshot(page, `PieCookieBanner hasPrimaryActionsOnly = ${hasPrimaryActionsOnly}`);
        });
    });
});
