import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';

describe('PIE - Page Visual Tests', async () => {
    beforeEach(async () => {
        await browser.url(browser.options.baseUrl);
    });

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

        await browser.deleteCookies(['je-cookieConsent', 'je-banner_cookie']);
        await browser.refresh();

        const cookieBannerElement = await browser.$(cookieBannerSelector);
        await cookieBannerElement.waitForDisplayed();

        // wait til load
        await browser.percyScreenshot('PIE - Cookie Banner');
    });

    it('Should display mobile nav', async () => {
        await browser.emulateDevice('iPhone X');

        const navToggleLabelSelector = '[data-test-id="nav_toggle_label"]';
        const navToggleInputSelector = '[data-test-id="nav_toggle_input"]';

        const navToggleLabel = await browser.$(navToggleLabelSelector);
        const navToggleInput = await browser.$(navToggleInputSelector);

        await navToggleLabel.click();
        await browser.waitUntil(async () => navToggleInput.isSelected());

        await browser.percyScreenshot('PIE - Mobile Nav', [414, 768]);
    });
});
