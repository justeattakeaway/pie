import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

import { type BreadcrumbProps } from 'src/defs';
import { breadcrumbItems } from '../helpers/breadcrumb-items';
import { breadcrumb } from '../helpers/selectors';

test.describe('PieBreadcrumb - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'breadcrumb--default');
        const props: Partial<BreadcrumbProps> = {
            items: [breadcrumbItems[0]],
        };

        basePage.load({ ...props });
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
                const props: Partial<BreadcrumbProps> = {
                    items: breadcrumbItems,
                };

                await basePage.load({ ...props });

                const numberOfSeparators = breadcrumbItems.length - 1;

                // Act
                const breadcrumbComponent = page.getByTestId(breadcrumb.selectors.container.dataTestId);
                const breadcrumbList = page.getByTestId(breadcrumb.selectors.list.dataTestId);
                const breadcrumbSeparators = page.getByTestId(breadcrumb.selectors.separator.dataTestId);
                const breadcrumbItemElements = page.getByTestId(breadcrumb.selectors.item.dataTestId);

                // Assert
                await expect(breadcrumbComponent).toBeVisible();
                await expect(breadcrumbList).toBeVisible();
                await expect(breadcrumbSeparators).toHaveCount(numberOfSeparators);
                await expect(breadcrumbItemElements).toHaveCount(breadcrumbItems.length);
            });
        });
    });
});
