import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const readingDirections = ['ltr', 'rtl'];

test.describe('PieAccordion - Visual tests`', () => {
    test('should display the PieAccordion component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'accordion--default');
        await basePage.load();

        await percySnapshot(page, 'PieAccordion - Visual Test');
    });

    readingDirections.forEach((direction) => {
        test(`should render prop variations in writing direction: ${direction}`, async ({ page }) => {
            // Arrange
            const selectVariationsPage = new BasePage(page, 'accordion--variations');
            await selectVariationsPage.load({}, { writingDirection: direction });

            // Assert
            await percySnapshot(page, `PieAccordion - Variations - ${direction}`);
        });
    });

    test('should display the PieAccordion component successfully when stacked next to each other', async ({ page }) => {
        const basePage = new BasePage(page, 'accordion--stacked');
        await basePage.load();

        await percySnapshot(page, 'PieAccordion - Stacked Visual Test');
    });

    test('should display the PieAccordion border radius variations', async ({ page }) => {
        const basePage = new BasePage(page, 'accordion--border-radius-variations');
        await basePage.load();

        await percySnapshot(page, 'PieAccordion - Border radius variations');
    });
});
