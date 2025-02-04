import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { icons } from '../helpers/page-object/selectors.ts';

test.describe('PIE Icons Webc - Visual tests`', () => {
    test('Regular icon renders', async ({ page }) => {
        // Arrange
        const regularIconPage = new BasePage(page, 'icons--alcohol-filled-regular-icon-variations');
        await regularIconPage.load();
        await page.waitForSelector(icons.selectors.alcoholFilled.dataTestId, { strict: false});

        // Assert
        await percySnapshot(page, 'PIE Icons Webc - Regular icon renders', percyWidths);
    });

    test('Large icon renders', async ({ page }) => {
        // Arrange
        const largeIconPage = new BasePage(page, 'icons--alcohol-filled-large-icon-variations');
        await largeIconPage.load();
        await page.waitForSelector(icons.selectors.alcoholFilledLarge.dataTestId, { strict: false});
        // Assert
        await percySnapshot(page, 'PIE Icons Webc - Large icon renders', percyWidths);
    });

    test('Regular icon can be sized with the override CSS variable', async ({ page }) => {
        // Arrange
        const regularIconOverridePage = new BasePage(page, 'icons--alcohol-filled-regular-icon-with-override');
        await regularIconOverridePage.load({ size: 'm' });
        await page.waitForSelector(icons.selectors.alcoholFilled.dataTestId, { strict: false});

        // Assert
        await percySnapshot(page, 'Regular icon can be sized with the override CSS variable', percyWidths);
    });

    test('Large icon can be sized with the override CSS variable', async ({ page }) => {
        // Arrange
        const largeIconOverridePage = new BasePage(page, 'icons--alcohol-filled-large-icon-with-override');
        await largeIconOverridePage.load({ size: '80' });
        await page.waitForSelector(icons.selectors.alcoholFilledLarge.dataTestId, { strict: false});

        // Assert
        await percySnapshot(page, 'Large icon can be sized with the override CSS variable', percyWidths);
    });
});
