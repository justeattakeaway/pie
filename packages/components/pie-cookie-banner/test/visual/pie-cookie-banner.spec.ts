
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieButton } from '@justeattakeaway/pie-button';
import { PieLink } from '@justeattakeaway/pie-link';
import { PieCookieBanner, CookieBannerProps } from '@/index';

// Mount any components that are used inside pie-cookie-banner so that
// they have been registered with the browser before the tests run.
// There is likely a nicer way to do this but this will temporarily
// unblock tests.
test.beforeEach(async ({ mount }) => {
    await (await mount(PieButton)).unmount();
    await (await mount(PieLink)).unmount();
});

test.describe('PieCookieBanner - Visual tests`', () => {
    test('should display the PieCookieBanner component successfully', async ({ page, mount }) => {
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        await percySnapshot(page, 'PieCookieBanner - Visual Test');
    });
});
