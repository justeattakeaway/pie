import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { componentName, navigationItems } from 'test/helpers';
import { type BreadcrumbProps } from 'src/defs';

const readingDirections = ['ltr', 'rtl'];

test.describe('PieBreadcrumb - Visual tests`', () => {
    test('should display the PieBreadcrumb component successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, componentName);
        const props: Partial<BreadcrumbProps> = {
            items: [navigationItems[0]],
        };

        basePage.load({ ...props });
        await page.waitForTimeout(2500);

        // Assert
        await percySnapshot(page, 'PieBreadcrumb - Visual Test');
    });

    test('should display crop the text from the last item when the label is too long (bigger than 250px)', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, componentName);
        const props: Partial<BreadcrumbProps> = {
            items: [...navigationItems, { label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque eget velit quis mollis.', href: '#' }],
        };

        basePage.load({ ...props });
        await page.waitForTimeout(2500);

        // Assert
        await percySnapshot(page, 'PieBreadcrumb - Visual Test');
    });

    readingDirections.forEach((direction) => {
        test(`should render navigation items in writing direction: ${direction}`, async ({ page }) => {
            // Arrange
            const selectVariationsPage = new BasePage(page, componentName);
            const props: Partial<BreadcrumbProps> = {
                items: navigationItems,
            };

            await selectVariationsPage.load({ ...props }, { writingDirection: direction });

            // Assert
            await percySnapshot(page, `PieBreadcrumb - ${direction}`);
        });
    });
});
