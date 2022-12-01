import expectedRoutesJson from '../snapshots/expected-routes.json';

describe('PIE - Page Visual Tests', async () => {
    expectedRoutesJson.forEach(route => {
        it(`Should respond take a screenshot of the requested route: - ${route}`, async () => {
            const puppeteer = await browser.getPuppeteer();
            const [page] = await puppeteer.pages();
            const url = `${browser.options.baseUrl}/content/pages/${route}`;


            await page.goto(url);
            await page.waitForNetworkIdle();
            await browser.percyScreenshot(`PIE - ${route}`);
        });
    });
});
