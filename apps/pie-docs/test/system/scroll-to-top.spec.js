import { expect, test } from '@playwright/test';

import { disableCookieBanner } from '../playwright/playwright-helper';

test.beforeEach(async ({ page, context, baseURL }) => {
    await page.goto(baseURL);
    await disableCookieBanner(page, context);
});

test.describe('PIE - Back to top button - @desktop', () => {
    test('should not display at the top of the page', async ({ page }) => {
        // Arrange & Act
        const button = await page.getByTestId('scroll-to-top');

        // Assert
        await expect(button).not.toBeVisible();
    });

    test('should display after scrolling the page', async ({ page }) => {
        // Act
        await page.mouse.wheel(0, 200); // Scroll down by 200px
        const button = await page.getByTestId('scroll-to-top');

        // Assert
        await expect(button).toBeVisible();
    });

    test('should scroll to the top of the page when clicked', async ({ page }) => {
        // Arrange
        // Scroll a bit to reveal the button
        await page.evaluate('window.scroll(0, 100)');
        await page.waitForTimeout(500);
        let pageScrollY = await page.evaluate('window.scrollY');
        await expect.soft(pageScrollY).toBe(100);

        // Act
        await page.getByTestId('scroll-to-top').click();
        await page.waitForTimeout(500);

        // Assert
        pageScrollY = await page.evaluate('window.scrollY');
        await expect(pageScrollY).toBe(0);
    });

    test('should focus on skip-to-main when triggered by a keyboard event', async ({ page }) => {
        // Arrange
        // Scroll a bit to reveal the button
        await page.evaluate('window.scroll(0, 100)');
        await page.waitForTimeout(500);

        // Act
        await page.locator('[data-test-id="scroll-to-top"]').focus();
        await page.keyboard.press('Enter');

        // Assert
        const focusedElement = await page.locator(':focus');
        await expect(focusedElement).toHaveAttribute('data-test-id', 'skip-to-main');
    });

    test('should not focus on skip-to-main when triggered by a mouse event', async ({ page }) => {
        // Arrange
        // Scroll a bit to reveal the button
        await page.evaluate('window.scroll(0, 100)');
        await page.waitForTimeout(500);

        // Act
        await page.click('[data-test-id="scroll-to-top"]');

        // Assert
        const focusedElement = await page.locator(':focus');
        await expect(focusedElement).toHaveAttribute('data-test-id', 'scroll-to-top');
    });
});
