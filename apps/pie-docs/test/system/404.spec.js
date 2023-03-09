describe('PIE - 404 Page', async () => {
    it('Should go to the homepage when clicking "Visit homepage" link', async () => {
        // Arrange
        const url = `${browser.options.baseUrl}/404.html`;
        const puppeteer = await browser.getPuppeteer();
        const [page] = await puppeteer.pages();
        await page.goto(url);
        const visitHomepageLinkSelector = '[data-test-id="404-visit-homepage"]';

        // Act
        const [response] = await Promise.all([
            page.waitForNavigation(),
            page.click(visitHomepageLinkSelector)
        ]);

        // Assert
        const current = new URL(response.url()).pathname;
        const expected = new URL(browser.options.baseUrl).pathname;

        const currentWithNoTrailingSlashes = current.replace(/\/+$/, '');
        const expectedWithNoTrailingSlashes = expected.replace(/\/+$/, '');

        await expect(currentWithNoTrailingSlashes).toEqual(expectedWithNoTrailingSlashes);
    });
});
