const COOKIE_NAMES = require('../../../../constants/cookies');

describe('PIE - Cookie Banner Tests', async () => {
    const cookieBannerSelector = '[data-test-id="cookie-banner-component"]';
    const cookieAcceptAllSelector = '[data-test-id="accept-all-cookies-button"]';
    const cookieNecessarySelector = '[data-test-id="accept-necessary-cookies-button"]';
    const cookiesToDelete = Object.values(COOKIE_NAMES);

    it('Should close the cookie banner when the first button is clicked', async () => {
        const puppeteer = await browser.getPuppeteer();
        const [page] = await puppeteer.pages();
        const url = `${browser.options.baseUrl}`;

        await page.goto(url);

        // Remove cookies to reveal the cookie banner
        await browser.deleteCookies(cookiesToDelete);
        await browser.refresh();

        // Ensure Cookie banner exists before clicking
        const cookieBannerBeforeClick = await page.$(cookieBannerSelector);
        expect(cookieBannerBeforeClick).toBeTruthy();

        await page.click(cookieAcceptAllSelector);

        const cookieBannerAfterClick = await page.$(cookieBannerSelector);
        expect(cookieBannerAfterClick).toBeFalsy();
    });

    it('Should close the cookie banner when the second button is clicked', async () => {
        const puppeteer = await browser.getPuppeteer();
        const [page] = await puppeteer.pages();
        const url = `${browser.options.baseUrl}`;

        await page.goto(url);

        // Remove cookies to reveal the cookie banner
        await browser.deleteCookies(cookiesToDelete);
        await browser.refresh();

        // Ensure Cookie banner exists before clicking
        const cookieBannerBeforeClick = await page.$(cookieBannerSelector);
        expect(cookieBannerBeforeClick).toBeTruthy();

        await page.click(cookieNecessarySelector);

        const cookieBannerAfterClick = await page.$(cookieBannerSelector);
        expect(cookieBannerAfterClick).toBeFalsy();
    });
});
