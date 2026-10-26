import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { PaginationDefaultPage } from '../helpers/page-object/pie-pagination-default.page.ts';

test.describe('PiePagination - Visual tests', () => {
    test('should display the PiePagination component successfully on the first page', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act
        await paginationPage.load({ currentPage: 1, totalPages: 10 });

        // Assert
        await expect.soft(paginationPage.paginationComponent.componentLocator).toBeVisible();
        await percySnapshot(page, 'PiePagination - First page', { widths: [1280] });
    });

    test('should display the PiePagination component successfully on a middle page', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act
        await paginationPage.load({ currentPage: 5, totalPages: 10 });

        // Assert
        await expect.soft(paginationPage.paginationComponent.componentLocator).toBeVisible();
        await percySnapshot(page, 'PiePagination - Middle page', { widths: [1280] });
    });

    test('should display the PiePagination component successfully when disabled', async ({ page }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        // Act
        await paginationPage.load({ currentPage: 5, totalPages: 10, disabled: true });

        // Assert
        await expect.soft(paginationPage.paginationComponent.componentLocator).toBeVisible();
        await percySnapshot(page, 'PiePagination - Disabled', { widths: [1280] });
    });
});
