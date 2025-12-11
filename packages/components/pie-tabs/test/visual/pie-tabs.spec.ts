import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieTabs - Visual tests', () => {
    test('should display the PieTabs component successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'tabs--default');
        await basePage.load();
        await page.waitForTimeout(1000);

        // Act & Assert
        await percySnapshot(page, 'PieTabs - Default');
    });

    test('should display the contained variant correctly', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'tabs--default');
        await basePage.load({ variant: 'contained' });
        await page.waitForTimeout(1000);

        // Act & Assert
        await percySnapshot(page, 'PieTabs - Contained Variant');
    });

    test('should display the vertical orientation correctly', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'tabs--default');
        await basePage.load({ orientation: 'vertical' });
        await page.waitForTimeout(1000);

        // Act & Assert
        await percySnapshot(page, 'PieTabs - Vertical Orientation');
    });

    test('should display vertical contained variant correctly', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'tabs--default');
        await basePage.load({ variant: 'contained', orientation: 'vertical' });
        await page.waitForTimeout(1000);

        // Act & Assert
        await percySnapshot(page, 'PieTabs - Vertical Contained');
    });

    test('should display second tab selected state', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'tabs--default');
        await basePage.load();
        await page.waitForTimeout(1000);

        // Act - Click second tab
        const secondTab = page.locator('[data-test-id="pie-tabs"] li[role="tab"]').nth(1);
        await secondTab.click();
        await page.waitForTimeout(500);

        // Assert
        await percySnapshot(page, 'PieTabs - Second Tab Selected');
    });
});
