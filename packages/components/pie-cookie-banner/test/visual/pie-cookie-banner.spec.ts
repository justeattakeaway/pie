
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieButton } from '@justeattakeaway/pie-button';
import { PieLink } from '@justeattakeaway/pie-link';
import { PieModal } from '@justeattakeaway/pie-modal';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';

import { PieCookieBanner, CookieBannerProps } from '@/index';

const managePrefsSelector = '[data-test-id="actions-manage-prefs"]';

// Mount any components that are used inside pie-cookie-banner so that
// they have been registered with the browser before the tests run.
// There is likely a nicer way to do this but this will temporarily
// unblock tests.
test.beforeEach(async ({ mount }) => {
    await (await mount(PieButton)).unmount();
    await (await mount(PieLink)).unmount();
    await (await mount(PieModal)).unmount();
    await (await mount(PieIconButton)).unmount();
});

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
});
