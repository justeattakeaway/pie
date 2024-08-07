import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL);
});

test.describe('PIE - Footer - @desktop', () => {
    test('Should ensure links return correct status code', async ({ page }) => {
        /* eslint-disable no-await-in-loop, no-restricted-syntax */
        for await (const link of await page.getByTestId('footer_link').all()) {
            const href = await link.getAttribute('href');

            // TODO: DSW-2047 - Replace footer link test with a snapshot test
            if (!href.includes('privacy-policy')) {
                await Promise.all([
                    page.waitForResponse((resp) => resp.url().includes(href))
                        .then((resp) => {
                            expect(resp.status(), `${resp.url()} should return successful status code`).toBe(200);
                        }),
                    link.click()
                ]);
            }
        }
        /* eslint-enable no-await-in-loop, no-restricted-syntax */
    });
});
