
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieCookieBanner, CookieBannerProps } from '@/index';

test.describe('PieCookieBanner - Visual tests`', () => {
    test('should display the PieCookieBanner component successfully', async ({ page, mount }) => {
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        await percySnapshot(page, 'PieCookieBanner - Visual Test');
    });
});
