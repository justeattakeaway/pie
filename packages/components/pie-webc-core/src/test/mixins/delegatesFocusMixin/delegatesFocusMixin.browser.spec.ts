import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('DelegatesFocusMixin', () => {
    test('should have a focus method', async ({ page }) => {
        // Arrange
        const expectedActiveNodeName = 'DELEGATES-FOCUS-MIXIN-MOCK';
        const mockComponentPage = new BasePage(page, 'webc-core--delegates-focus-mixin-element');
        await mockComponentPage.load();

        // Act & Assert
        await page.keyboard.press('Tab');
        let activeElementNodeName = await page.evaluate(() => document.activeElement?.nodeName);

        expect(activeElementNodeName).toBe('BUTTON');

        // Focus the custom element which uses the DelegatesFocusMixin
        await page.evaluate(() => {
            const component = document.querySelector('delegates-focus-mixin-mock') as HTMLElement;
            component?.focus();
        });

        activeElementNodeName = await page.evaluate(() => document.activeElement?.nodeName);
        expect(activeElementNodeName).toBe(expectedActiveNodeName);
    });
});
