import { test, expect } from '@playwright/test';
import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';


test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8080');
});


test.describe('PIE - Status Code Tests - @system', () => {
    expectedRoutesJson.forEach(route => {
        test(`Should respond with a '200' status code for route - ${route}`, async ({ page }) => {
            const url = await page.url() + `/content/pages/${route}`;


            const response = await page.goto(url);
            await expect(response.status()).toBe(200);
        });
    });
});