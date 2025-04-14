import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { breadcrumb } from '../helpers/selectors';

test.describe('PieBreadcrumb - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'breadcrumb--default');

        basePage.load();
        await page.waitForTimeout(2500);

        // Act
        const breadcrumbComponent = page.getByTestId(breadcrumb.selectors.container.dataTestId);

        // Assert
        expect(breadcrumbComponent).toBeVisible();
    });

    test.describe('Props', () => {
        test.describe('items', () => {
            test('should render items', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'breadcrumb--default');
                await basePage.load();

                // Act
                const breadcrumbComponent = page.getByTestId(breadcrumb.selectors.container.dataTestId);
                const breadcrumbList = page.getByTestId(breadcrumb.selectors.list.dataTestId);
                const breadcrumbSeparators = page.getByTestId(breadcrumb.selectors.separator.dataTestId);
                const breadcrumbItemElements = page.getByTestId(breadcrumb.selectors.item.dataTestId);

                // Assert
                await expect(breadcrumbComponent).toBeVisible();
                await expect(breadcrumbList).toBeVisible();
                await expect(breadcrumbSeparators).toHaveCount(3);
                await expect(breadcrumbItemElements).toHaveCount(4);
            });
        });
    });
});
