import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';

describe('PIE - Status Code Tests', async () => {
    expectedRoutesJson.forEach((route) => {
        it(`Should respond with a '200' status code for route - ${route}`, async () => {
            const puppeteer = await browser.getPuppeteer();
            const [page] = await puppeteer.pages();
            const url = `${browser.options.baseUrl}/${route}`;

            const response = await page.goto(url);
            await expect(response.status()).toBe(200);
        });
    });

    it(`Should open and close the mobile navigation menu`, async () => {
        await browser.emulateDevice('iPhone X')

        const navToggleSelector = '[data-test-id="nav_toggle"]';
        await browser.$(navToggleSelector).click();
        
        await browser.waitUntil(async () => {
            return browser.$('[data-test-id="site_header"]').getAttribute('data-nav-open') === 'true';
        });

        await browser.$(navToggleSelector).click();

        expect(await browser.$('[data-test-id="site_header"]').getAttribute('data-nav-open')).toBe(null);
    });
});
