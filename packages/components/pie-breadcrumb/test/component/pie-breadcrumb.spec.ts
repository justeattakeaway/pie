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
        test.describe('breadcrumb-items', () => {
            test('should render breadcrumb items', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'breadcrumb--default');
                await basePage.load();

                // Act
                const breadcrumbComponent = page.getByTestId(breadcrumb.selectors.container.dataTestId);
                const breadcrumbList = page.getByTestId(breadcrumb.selectors.list.dataTestId);
                const breadcrumbSeparators = page.getByTestId(breadcrumb.selectors.separator.dataTestId);
                const breadcrumbItemElements = page.getByTestId(breadcrumb.selectors.item.dataTestId);
                const lastItem = page.getByTestId(breadcrumb.selectors.item.dataTestId).last();
                const lastSeparator = lastItem.getByTestId(breadcrumb.selectors.separator.dataTestId);

                // Assert
                await expect(breadcrumbComponent).toBeVisible();
                await expect(breadcrumbList).toBeVisible();
                await expect(breadcrumbSeparators).toHaveCount(4);
                await expect(lastSeparator).not.toBeVisible();
                await expect(breadcrumbItemElements).toHaveCount(4);
            });
        });

        test.describe('variant', () => {
            test('should render default variant', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'breadcrumb--default');
                await basePage.load();

                // Act
                const breadcrumbComponent = page.getByTestId(breadcrumb.selectors.container.dataTestId);
                const breadcrumbItemElements = page.getByTestId(breadcrumb.selectors.item.dataTestId);

                // Assert
                await expect(breadcrumbComponent).toBeVisible();
                await expect(breadcrumbItemElements).toHaveCount(4);
            });

            test('should render scrim variant', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'breadcrumb--default');
                await basePage.load({ variant: 'scrim' });

                // Act
                const breadcrumbComponent = page.getByTestId(breadcrumb.selectors.container.dataTestId);
                const breadcrumbItemElements = page.getByTestId(breadcrumb.selectors.item.dataTestId);

                // Assert
                await expect(breadcrumbComponent).toBeVisible();
                await expect(breadcrumbItemElements).toHaveCount(4);
            });
        });

        test.describe('isCompact', () => {
            test('should render the compact variation of the breadcrumb - only before the last item is shown', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'breadcrumb--default');
                await basePage.load({ isCompact: true });

                // Act
                const breadcrumbComponent = page.getByTestId(breadcrumb.selectors.container.dataTestId);
                const breadcrumbItemElements = page.getByTestId(breadcrumb.selectors.item.dataTestId);

                const firstItem = breadcrumbItemElements.nth(0);
                const secondItem = breadcrumbItemElements.nth(1);
                const beforeLastItem = breadcrumbItemElements.nth(2);
                const lastItem = breadcrumbItemElements.nth(3);

                // Assert
                await expect(breadcrumbComponent).toBeVisible();
                await expect(beforeLastItem).toBeVisible();
                await expect(firstItem).not.toBeVisible();
                await expect(secondItem).not.toBeVisible();
                await expect(lastItem).not.toBeVisible();
            });
        });
    });
});
