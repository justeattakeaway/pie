import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080');
});

test.describe('PIE - Page Visual Tests - @visual', async () => {
    expectedRoutesJson.forEach(route => {
        test(`Should respond take a screenshot of the requested route: - ${route}`, async ({ page }) => {
            const url = `${await page.url()}/content/pages/${route}`;
            await page.goto(url);
            await percySnapshot(page, `PIE - ${route}`);
        });
    });
});
