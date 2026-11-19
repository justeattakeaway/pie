import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { sizes as modalSizes } from '@justeattakeaway/pie-modal/src/defs.ts';
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

test.describe('PieToastProvider - Nested provider in a modal', () => {
    modalSizes.forEach((size) => {
        test(`should display a toast from a provider nested in a ${size} modal`, async ({ page }) => {
            const basePage = new BasePage(page, 'toast-provider--multiple-providers');
            await basePage.load({ size });

            await page.locator('#modal-trigger-btn').click();

            const toast = page.locator('pie-toast-provider#modal pie-toast');
            await toast.waitFor({ state: 'visible' });

            await basePage.freezeAnimations();

            await percySnapshot(
                page,
                `PieToastProvider - Nested provider in a ${size} modal`,
                { widths: [1280] },
            );
        });
    });
});
