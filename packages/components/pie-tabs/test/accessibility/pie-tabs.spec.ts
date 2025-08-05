import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieTabs - Accessibility tests', () => {
    test('a11y - should test the PieTabs component WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'tabs--default');

        basePage.load();
        await page.waitForTimeout(2500);

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });

    test('should have correct ARIA roles', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'tabs--default');
        await basePage.load();
        await page.waitForTimeout(1000);

        // Act & Assert
        const tabsList = page.locator('[data-test-id="pie-tabs"] ul');
        const tabs = page.locator('[data-test-id="pie-tabs"] li');

        await expect(tabsList).toHaveAttribute('role', 'tablist');
        await expect(tabs.nth(0)).toHaveAttribute('role', 'tab');
        await expect(tabs.nth(1)).toHaveAttribute('role', 'tab');
        await expect(tabs.nth(2)).toHaveAttribute('role', 'tab');
    });

    test('should have correct tabindex values', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'tabs--default');
        await basePage.load();
        await page.waitForTimeout(1000);

        // Act & Assert
        const tabs = page.locator('[data-test-id="pie-tabs"] li[role="tab"]');

        await expect(tabs.nth(0)).toHaveAttribute('tabindex', '0');
        await expect(tabs.nth(1)).toHaveAttribute('tabindex', '1');
        await expect(tabs.nth(2)).toHaveAttribute('tabindex', '2');
    });
});
