import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

import { type BreadcrumbProps, componentSelector } from 'src/defs';
import {
    breadCrumbNavigationItemRole,
    breadCrumbSeparatorRole,
    navigationItems,
} from 'test/helpers';

const storybookPath = 'breadcrumb--default';

test.describe('PieBreadcrumb - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, storybookPath);
        const props: Partial<BreadcrumbProps> = {
            items: [navigationItems[0]],
        };

        basePage.load({ ...props });
        await page.waitForTimeout(2500);

        // Act
        const breadcrumb = page.getByTestId(componentSelector);

        // Assert
        expect(breadcrumb).toBeVisible();
    });

    test.describe('Props', () => {
        test.describe('items', () => {
            test('should render navigation items', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, storybookPath);
                const props: Partial<BreadcrumbProps> = {
                    items: navigationItems,
                };

                await basePage.load({ ...props });

                const numberOfSeparators = navigationItems.length - 1;

                // Act
                const breadcrumbComponent = page.getByTestId(componentSelector);
                const breadcrumbSeparators = breadcrumbComponent.locator(`li[role="${breadCrumbSeparatorRole}"]`);
                const breadCrumbNavigationItems = breadcrumbComponent.locator(`[role="${breadCrumbNavigationItemRole}"]`);

                // Assert
                await expect(breadcrumbComponent).toBeVisible();
                await expect(breadcrumbComponent).toHaveClass(' c-breadcrumb ');
                await expect(breadcrumbSeparators).toHaveCount(numberOfSeparators);
                await expect(breadCrumbNavigationItems).toHaveCount(navigationItems.length);
            });
        });

        test.describe('variant', () => {
            test('should render default variant', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, storybookPath);
                const props: Partial<BreadcrumbProps> = {
                    items: navigationItems,
                    variant: 'default',
                };

                await basePage.load({ ...props });

                const numberOfSeparators = navigationItems.length - 1;

                // Act
                const breadcrumbComponent = page.getByTestId(componentSelector);
                const breadcrumbSeparators = breadcrumbComponent.locator(`li[role="${breadCrumbSeparatorRole}"]`);
                const breadCrumbNavigationItems = breadcrumbComponent.locator(`[role="${breadCrumbNavigationItemRole}"]`);

                // Assert
                await expect(breadcrumbComponent).toBeVisible();
                await expect(breadcrumbComponent).toHaveClass(' c-breadcrumb ');
                await expect(breadcrumbSeparators).toHaveCount(numberOfSeparators);
                await expect(breadCrumbNavigationItems).toHaveCount(navigationItems.length);
            });

            test('should render back variant - only the last item is shown', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, storybookPath);
                const props: Partial<BreadcrumbProps> = {
                    items: navigationItems,
                    variant: 'back',
                };

                await basePage.load({ ...props });

                // Act
                const breadcrumbComponent = page.getByTestId(componentSelector);
                const breadCrumbNavigationItems = breadcrumbComponent.locator(`[role="${breadCrumbNavigationItemRole}"]`);

                // Assert
                await expect(breadcrumbComponent).toBeVisible();
                await expect(breadcrumbComponent).toHaveClass(' c-breadcrumb ');
                await expect(breadCrumbNavigationItems).toHaveCount(1);
            });
        });

        test.describe('scrim', () => {
            test('should render in scrim mode', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, storybookPath);
                const props: Partial<BreadcrumbProps> = {
                    items: navigationItems,
                    scrim: true,
                };

                await basePage.load({ ...props });

                // Act
                const breadcrumbComponent = page.getByTestId(componentSelector);
                const breadCrumbNavigationItems = breadcrumbComponent.locator(`[role="${breadCrumbNavigationItemRole}"]`);

                // Assert
                await expect(breadcrumbComponent).toBeVisible();
                await expect(breadcrumbComponent).toHaveClass(' c-breadcrumb c-breadcrumb--scrim ');
                await expect(breadCrumbNavigationItems).toHaveCount(navigationItems.length);
            });
        });
    });
});
