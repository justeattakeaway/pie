import { test, expect } from '@playwright/test';
import { disableCookieBanner } from '../helpers/playwright-helper';

test.beforeEach(async ({ page, context }) => {
    await page.goto(process.env.BASE_URL);
    await disableCookieBanner(page, context);
});

test.describe('PIE - Footer - @desktop', () => {
    test('Should ensure links return correct status code', async ({ page }) => {
        /* eslint-disable no-await-in-loop, no-restricted-syntax */
        for await (const link of await page.getByTestId('footer_link').all()) {
            const href = await link.getAttribute('href');

            await Promise.all([
                page.waitForResponse((resp) => resp.url().includes(href))
                .then((resp) => {
                    expect(resp.status(), `${resp.url()} should return successful status code`).toBe(200);
                }),
                link.click()
            ]);
        }
        /* eslint-enable no-await-in-loop, no-restricted-syntax */
    });
});
