import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type ListProps } from '../../src/defs.ts';

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
        const listPage = new BasePage(page, 'list--default');
        const props: ListProps = {
            variant: 'compact',
        };

        await listPage.load({ ...props });

        // Act
        const listComponent = page.locator('pie-list');

        // Assert
        await expect(listComponent).toBeVisible();
        await expect(listComponent).toHaveAttribute('variant', 'compact');
    });

    test('should render with dividers enabled', async ({ page }) => {
        // Arrange
        const listPage = new BasePage(page, 'list--default');
        const props: ListProps = {
            dividers: true,
        };

        await listPage.load({ ...props });

        // Act
        const listComponent = page.locator('pie-list');

        // Assert
        await expect(listComponent).toBeVisible();
        await expect(listComponent).toHaveAttribute('dividers');
    });
});
