describe('PIE - Footer', async () => {
    it('Should go to the Privacy Policy when clicking the associated link', async () => {
        // Arrange
        const url = browser.options.baseUrl;
        const privacyPolicyUrl = 'https://www.just-eat.co.uk/info/privacy-policy';
        const puppeteer = await browser.getPuppeteer();
        const [page] = await puppeteer.pages();
        await page.goto(url);
        const privacyPolicyFooterLink = '[data-test-id="privacy-policy"]';

        // Act
        const [response] = await Promise.all([
            page.waitForNavigation(),
            page.click(privacyPolicyFooterLink)
        ]);

        // Assert
        await expect(response.url()).toEqual(privacyPolicyUrl);
        await expect(response.status()).toBe(200);
    });
});
