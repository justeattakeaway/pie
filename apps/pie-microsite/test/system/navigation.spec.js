import expectedRoutesJson from '../snapshots/expected-routes.json';
import { snapshotNavigationRoutes } from '../helpers/routes';
describe('PIE - Status Code Tests', async () => {

    before(async () => {
        const foo = await snapshotNavigationRoutes();

    })
    expectedRoutesJson.forEach(route => {
        it(`Should respond with a '200' status code for route - ${route}`, async () => {
            const puppeteer = await browser.getPuppeteer();
            const [page] = await puppeteer.pages();
            const url = `${browser.options.baseUrl}/content/pages/${route}`;


            const response = await page.goto(url);
            await expect(response.status()).toBe(200);
        });
    });
});
