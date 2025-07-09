import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-avatar"]';

test.describe('PieAvatar - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'avatar--default');

        basePage.load();
        await page.waitForTimeout(2500);

        // Act
        const avatar = page.locator(componentSelector);

        // Assert
        expect(avatar).toBeVisible();
    });
});
