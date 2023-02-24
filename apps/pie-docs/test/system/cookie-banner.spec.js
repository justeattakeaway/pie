const COOKIE_NAMES = require('../../../../constants/cookies');

describe('PIE - Cookie Banner Tests', async () => {
    // beforeEach(async () => {
    //     console.log('IN TEST BEFORE EACH');
    //     // Remove cookies to reveal the cookie banner
    //     await browser.deleteCookies(Object.keys(COOKIE_NAMES));
    //     await browser.refresh();
    // });

    const cookieBannerSelector = '[data-test-id="cookie-banner-component"]';
    const cookieAcceptAllSelector = '[data-test-id="accept-all-cookies-button"]';
    const cookieNecessarySelector = '[data-test-id="accept-necessary-cookies-button"]';

    it('Should close the cookie banner when the first button is clicked', async () => {
        const puppeteer = await browser.getPuppeteer();
        const [page] = await puppeteer.pages();
        const url = `${browser.options.baseUrl}`;

        await page.goto(url);

        // Remove cookies to reveal the cookie banner
        await browser.deleteCookies(Object.keys(COOKIE_NAMES));
        await browser.refresh();

        await page.click(cookieAcceptAllSelector);
        await expect(page.$(cookieBannerSelector)).toBeFalsy();
    });

    // it('Should close the cookie banner when the second button is clicked', async () => {
    //     const puppeteer = await browser.getPuppeteer();
    //     const [page] = await puppeteer.pages();
    //     const url = `${browser.options.baseUrl}`;


    //     const response = await page.goto(url);
    //     page.click(cookieNecessarySelector);
    //     await expect(response.status()).toBe(200);
    // });
});
