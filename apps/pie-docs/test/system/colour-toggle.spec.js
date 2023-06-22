import { test, expect } from '@playwright/test';
import { disableCookieBanner } from '../playwright/playwright-helper';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL);
});

test.describe('PIE - colour page toggle - @desktop', () => {
    test.beforeEach(async ({ page, context }) => {
        await disableCookieBanner(page, context);
    });

    test('Should display the content associated with the toggle that has been clicked', async ({
        page,
    }) => {
        // Arrange
        await page.goto('foundations/colour/tokens/alias/light');

        const toggleOptionA = page.getByTestId('toggle-option-a');
        const toggleOptionB = page.getByTestId('toggle-option-b');

        const lightTokens = page.locator('[id="toggle-content-a"]');
        const darkTokens = page.locator('[id="toggle-content-b"]');

        // Act - Clicks the dark theme toggle
        await toggleOptionB.click();

        // Assert - Dark tokens are visible and the light tokens are not visible
        await expect.soft(darkTokens).toBeVisible();
        await expect.soft(lightTokens).not.toBeVisible();

        // Act - Clicks the light theme toggle
        await toggleOptionA.click();

        // Assert - Light tokens are visible and the dark tokens are not visible
        await expect.soft(lightTokens).toBeVisible();
        await expect(darkTokens).not.toBeVisible();
    });
});
