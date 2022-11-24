describe('PIE - Foundations', () => {
    describe('Colour', () => {
        it('should load - /content/pages/foundations/colour/overview', async () => {
            const puppeteer = await browser.getPuppeteer();
            const [page] = await puppeteer.pages();

            const response = await page.goto(`${browser.options.baseUrl}/content/pages/foundations/colour/overview`);

            await expect(response.status()).toEqual(200);
        });
    });
});
