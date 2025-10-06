import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieList - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'list--default');
        await basePage.load();

        // Act
        const listComponent = page.locator('pie-list');

        // Assert
        await expect(listComponent).toBeVisible();
    });

    test('should render with variant="compact"', async ({ page }) => {
        // Arrange
        const listPage = new BasePage(page, 'list--compact');
        await listPage.load();

        // Act
        const listComponent = page.locator('pie-list');

        // Assert
        await expect(listComponent).toBeVisible();
        await expect(listComponent).toHaveClass(/c-list--variant-compact/);
    });

    test('should render with dividers enabled', async ({ page }) => {
        // Arrange
        const listPage = new BasePage(page, 'list--with-dividers');
        await listPage.load();

        // Act
        const listComponent = page.locator('pie-list');

        // Assert
        await expect(listComponent).toBeVisible();
        await expect(listComponent).toHaveClass(/c-list--with-dividers/);
    });

    test('should render compact variant with dividers', async ({ page }) => {
        // Arrange
        const listPage = new BasePage(page, 'list--compact-with-dividers');
        await listPage.load();

        // Act
        const listComponent = page.locator('pie-list');

        // Assert
        await expect(listComponent).toBeVisible();
        await expect(listComponent).toHaveClass(/c-list--variant-compact/);
        await expect(listComponent).toHaveClass(/c-list--with-dividers/);
    });

    test('should render as an ordered list when listType="ordered"', async ({ page }) => {
        // Arrange
        const listPage = new BasePage(page, 'list--ordered');
        await listPage.load();

        // Act
        const listComponent = page.locator('pie-list');

        // Assert
        await expect(listComponent).toBeVisible();
        await expect(listComponent).toHaveClass(/c-list--ordered/);

        const hasOrderedList = await listComponent.evaluate((element) => (
            element.shadowRoot?.querySelector('ol') !== null
        ));
        expect(hasOrderedList).toBe(true);
    });
});
