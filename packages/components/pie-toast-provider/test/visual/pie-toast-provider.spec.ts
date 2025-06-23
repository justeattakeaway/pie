import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { positions } from '../../src/defs.ts';

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
        test(`should render toast with position: ${position}`, async ({ page }) => {
            const basePage = new BasePage(page, `toast-provider--position-${position}`);

            basePage.load();

            const toastElement = page.locator('pie-toast');
            await toastElement.waitFor({ state: 'visible' });

            await percySnapshot(page, `PieToastProvider - position: ${position} Visual Test`);
        });
    });
});
