import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { PaginationDefaultPage } from '../helpers/page-object/pie-pagination-default.page.ts';

test.describe('PiePagination - Accessibility tests', () => {
    test('a11y - should test the PiePagination component WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        await paginationPage.load({ currentPage: 3, totalPages: 10 });

        // Act
        const results = await makeAxeBuilder().analyze();

        // Assert
        expect(results.violations).toEqual([]);
    });

    test('a11y - should test the PiePagination component WCAG compliance when disabled', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const paginationPage = new PaginationDefaultPage(page);

        await paginationPage.load({ currentPage: 3, totalPages: 10, disabled: true });

        // Act
        const results = await makeAxeBuilder().analyze();

        // Assert
        expect(results.violations).toEqual([]);
    });
});
