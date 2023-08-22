
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieCookieBanner, CookieBannerProps } from '@/index';

const componentSelector = '[data-test-id="pie-cookie-banner"]';

test.describe('PieCookieBanner - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        // Act
        const cookieBanner = page.locator(componentSelector);

        // Assert
        expect(cookieBanner).toBeVisible();
    });
});
