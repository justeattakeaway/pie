import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { positions } from '../../src/defs.ts';

const directions = ['ltr', 'rtl'];

test.describe('PieToastProvider - Visual tests`', () => {
    test('should display the PieToastProvider component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'toast-provider--custom-z-index');

        basePage.load();

        const showToastButton = page.getByTestId('show-toast-button');
        await showToastButton.click();

        const toastElement = page.locator('pie-toast');
        await toastElement.waitFor({ state: 'visible' });

        await percySnapshot(page, 'PieToastProvider - Custom Z-Index Visual Test');
    });

    positions.forEach((position) => {
        directions.forEach((direction) => {
            test(`should render position: ${position} correctly with direction: ${direction}`, async ({ page }) => {
                const basePage = new BasePage(page, `toast-provider--position-${position}`);

                await basePage.load({}, { writingDirection: direction });

                const toastElement = page.locator('pie-toast');
                await toastElement.waitFor({ state: 'visible' });

                await percySnapshot(page, `PieToastProvider - position: ${position} - direction: ${direction}`);
            });
        });
    });

    test('should maintain toast position when scrolling', async ({ page }) => {
        const basePage = new BasePage(page, 'toast-provider--scroll-page');

        await basePage.load();

        const toastElement = page.locator('pie-toast');
        await toastElement.waitFor({ state: 'visible' });

        // Scroll to the bottom of the page
        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });

        await percySnapshot(page, 'PieToastProvider - ScrollPage - Toast Position After Scroll');
    });
});
