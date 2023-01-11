import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';

describe('PIE - Page Visual Tests', async () => {
    expectedRoutesJson.forEach(route => {
        it(`should respond take a screenshot of the requested route: - ${route}`, async () => {
            const url = `${browser.options.baseUrl}/content/pages/${route}`;

            await browser.url(url);
            await browser.percyScreenshot(`PIE - ${route}`);
        });
    });
});
