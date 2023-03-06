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

    it('Should open and close the mobile navigation menu', async () => {
        await browser.url(browser.options.baseUrl);
        await browser.emulateDevice('iPhone X');

        const navToggleLabelSelector = '[data-test-id="nav_toggle_label"]';
        const navToggleInputSelector = '[data-test-id="nav_toggle_input"]';

        const navToggleLabel = await browser.$(navToggleLabelSelector);
        const navToggleInput = await browser.$(navToggleInputSelector);

        await navToggleLabel.click();
        await browser.waitUntil(async () => navToggleInput.isSelected());
        await navToggleLabel.click();

        await expect(navToggleInput).not.toBeSelected();
    });
});
