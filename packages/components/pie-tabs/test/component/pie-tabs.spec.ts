import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-tabs"]';

test.describe('PieTabs - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'tabs--default');
        await basePage.load();
        await page.waitForTimeout(2000);

        // Act
        const tabs = page.locator(componentSelector);

        // Assert
        await expect(tabs).toBeVisible();
    });

    test.describe('Tab Navigation', () => {
        test('should show correct tab titles', async ({ page }) => {
            // Arrange
            const basePage = new BasePage(page, 'tabs--default');
            await basePage.load();
            await page.waitForTimeout(1000);

            // Act
            const tabs = page.locator('[data-test-id="pie-tabs"] li[role="tab"]');

            // Assert
            await expect(tabs.nth(0)).toContainText('Tab 1');
            await expect(tabs.nth(1)).toContainText('Tab 2');
            await expect(tabs.nth(2)).toContainText('Tab 3');
        });

        test('should have first tab selected by default', async ({ page }) => {
            // Arrange
            const basePage = new BasePage(page, 'tabs--default');
            await basePage.load();
            await page.waitForTimeout(1000);

            // Act
            const firstTab = page.locator('[data-test-id="pie-tabs"] li[role="tab"]').nth(0);
            const secondTab = page.locator('[data-test-id="pie-tabs"] li[role="tab"]').nth(1);

            // Assert
            await expect(firstTab).toHaveClass(/selected/);
            await expect(secondTab).not.toHaveClass(/selected/);
        });
    });
});
