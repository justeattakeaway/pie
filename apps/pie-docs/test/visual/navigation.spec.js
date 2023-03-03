import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';

describe('PIE - Page Visual Tests', async () => {
    expectedRoutesJson.forEach((route) => {
        it(`Should respond take a screenshot of the requested route: - ${route}`, async () => {
            const url = `${browser.options.baseUrl}/${route}`;

            await browser.url(url);
            // wait til load
            await browser.percyScreenshot(`PIE - ${route}`);
        });
    });

    it('Should display Cookie Banner', async () => {
        const cookieBannerSelector = '[data-test-id="cookie-banner-component"]';

        await browser.url('/');
        await browser.deleteCookies(['je-cookieConsent', 'je-banner_cookie']);
        await browser.refresh();

        const cookieBannerElement = await browser.$(cookieBannerSelector);
        await cookieBannerElement.waitForDisplayed();

        // wait til load
        await browser.percyScreenshot('PIE - Cookie Banner');
    });

    it('Should display mobile nav', async () => {
        await browser.emulateDevice('iPhone X');

        const navToggleSelector = '[data-test-id="nav_toggle"]';
        await browser.$(navToggleSelector).click();

        await browser.waitUntil(async () => await browser.$('[data-test-id="site_header"]').getAttribute('data-nav-open') === 'true');

        await browser.percyScreenshot('PIE - Mobile Nav', [414, 768]);
    });
});
