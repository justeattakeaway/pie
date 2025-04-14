import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { breadcrumb } from '../helpers/selectors';

const storybookPath = 'breadcrumb--default';

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

        test.describe('variant', () => {
            test('should render default variant', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'breadcrumb--default');
                await basePage.load();

                // Act
                const breadcrumbComponent = page.getByTestId(breadcrumb.selectors.container.dataTestId);
                const breadcrumbSeparators = page.getByTestId(breadcrumb.selectors.separator.dataTestId);
                const breadcrumbItemElements = page.getByTestId(breadcrumb.selectors.item.dataTestId);

                // Assert
                await expect(breadcrumbComponent).toBeVisible();
                await expect(breadcrumbSeparators).toHaveCount(3);
                await expect(breadcrumbItemElements).toHaveCount(4);
            });

            test('should render back variant - only the last item is shown', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, storybookPath);
                await basePage.load({ variant: 'back' });

                // Act
                const breadcrumbComponent = page.getByTestId(breadcrumb.selectors.container.dataTestId);
                const breadcrumbItemElements = page.getByTestId(breadcrumb.selectors.item.dataTestId);

                // Assert
                await expect(breadcrumbComponent).toBeVisible();
                await expect(breadcrumbItemElements).toHaveCount(1);
            });
        });

        test.describe('scrim', () => {
            test('should render in scrim mode', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, storybookPath);
                await basePage.load({ scrim: true });

                // Act
                const breadcrumbComponent = page.getByTestId(breadcrumb.selectors.container.dataTestId);
                const breadcrumbItemElements = page.getByTestId(breadcrumb.selectors.item.dataTestId);

                // Assert
                await expect(breadcrumbComponent).toBeVisible();
                await expect(breadcrumbItemElements).toHaveCount(4);
            });
        });
    });
});
