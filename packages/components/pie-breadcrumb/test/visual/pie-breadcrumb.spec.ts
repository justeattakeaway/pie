import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { breadcrumbItems } from 'test/helpers/breadcrumb-items';
import { type BreadcrumbProps } from 'src/defs';

const readingDirections = ['ltr', 'rtl'];

test.describe('PieBreadcrumb - Visual tests`', () => {
    test('should display the PieBreadcrumb component successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'breadcrumb--default');
        const props: Partial<BreadcrumbProps> = {
            items: [breadcrumbItems[0]],
        };

        basePage.load({ ...props });
        await page.waitForTimeout(2500);

        // Assert
        await percySnapshot(page, 'PieBreadcrumb - Visual Test');
    });

    test('should display crop the text from the last item when the label is too long (bigger than 250px)', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'breadcrumb--default');
        const props: Partial<BreadcrumbProps> = {
            items: [...breadcrumbItems, { label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque eget velit quis mollis.', href: '#' }],
        };

        basePage.load({ ...props });
        await page.waitForTimeout(2500);

        // Assert
        await percySnapshot(page, 'PieBreadcrumb - Visual Test');
    });

    readingDirections.forEach((direction) => {
        test(`should render items in writing direction: ${direction}`, async ({ page }) => {
            // Arrange
            const selectVariationsPage = new BasePage(page, 'breadcrumb--default');
            const props: Partial<BreadcrumbProps> = {
                items: breadcrumbItems,
            };

            await selectVariationsPage.load({ ...props }, { writingDirection: direction });

            // Assert
            await percySnapshot(page, `PieBreadcrumb - ${direction}`);
        });
    });
});
