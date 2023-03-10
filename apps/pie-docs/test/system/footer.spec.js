import { test, expect } from '@playwright/test';
import { disableCookieBanner } from '../helpers/playwright-helper';

test.beforeEach(async ({ page, context }) => {
    await page.goto(process.env.BASE_URL);
    await disableCookieBanner(page, context);
});

test.describe('PIE - Footer - @desktop', () => {
    test(`Should ensure links return correct status code`, async ({ page }) => {

        let expectedPath;
        let expectedUrls = []
        let requestedUrls = [];

        // Listen for 'response' events and push to 'requestedUrls' if there's a match.
        await page.on('response', (response) => {
            if(response.request().resourceType() === 'document') {
                let responseUrl = response.url();
                if(responseUrl.includes(expectedPath)) {

                    requestedUrls.push({
                        'url': responseUrl,
                        'status': response.status()
                    });
                }
            }
        });

        for (const link of await page.getByTestId('footer_link').all()) {

            expectedPath = await link.getAttribute('href');

            await Promise.all([
                page.waitForResponse(resp => resp.url().includes(expectedPath) & resp.status() === 200)
                .then((resp) => 
                    expectedUrls.push({
                        'url': resp.url(),
                        'status': resp.status()
                    })),

                link.click()
            ]);
        }

        expect(requestedUrls).toEqual(expectedUrls);
    });
});