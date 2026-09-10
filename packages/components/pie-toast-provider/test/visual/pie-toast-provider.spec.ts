import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { positions } from '../../src/defs.ts';

const directions = ['ltr', 'rtl'];

test.describe('PieToastProvider - Visual tests`', () => {
    test('should display the PieToastProvider component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'toast-provider--custom-z-index');
        await basePage.load();

        const toastElement = page.locator('pie-toast');
        await toastElement.waitFor({ state: 'visible' });

        await percySnapshot(page, 'PieToastProvider - Custom Z-Index Visual Test');
    });

    test('should display 3 stacked toasts correctly', async ({ page }) => {
        const basePage = new BasePage(page, 'toast-provider--stacked');
        await basePage.load();

        const toastElements = page.locator('pie-toast');
        await toastElements.first().waitFor({ state: 'visible' });

        await percySnapshot(page, 'PieToastProvider - Stacked toasts');
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
});
