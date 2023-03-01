import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';

describe('PIE - Status Code Tests', async () => {
    expectedRoutesJson.forEach(route => {
        it(`Should respond with a '200' status code for route - ${route}`, async () => {
            const puppeteer = await browser.getPuppeteer();
            const [page] = await puppeteer.pages();
            const url = `${browser.options.baseUrl}/${route}`;


            const response = await page.goto(url);
            await expect(response.status()).toBe(200);
        });
    });
});
