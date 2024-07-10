import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL);
});

test.describe('PIE - Show more - @desktop', () => {
    test('should display', async ({ page }) => {
        // Arrange
        await page.goto('components/component-status');
        const componentStatusTable = await page.getByTestId('web-table');
        const showMoreButton = await page.getByTestId('show-more');
        const rowCount = await componentStatusTable.locator('tr');

        // Assert
        await expect(rowCount.last()).not.toBeVisible();

        // Act
        showMoreButton.first().click();

        // Assert
        await expect(rowCount.last()).toBeVisible();

        // Act
        showMoreButton.first().click();

        // Assert
        await expect(rowCount.last()).not.toBeVisible();
    });
});
