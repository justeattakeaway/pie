import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-<%= fileName %>"]';

test.describe('Pie<%= componentName %> - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, '<%= fileName %>--default');

        basePage.load();
        await page.waitForTimeout(2500);

        // Act
        const <%= componentNameCamelCase %> = page.locator(componentSelector);

        // Assert
        expect(<%= componentNameCamelCase %>).toBeVisible();
    });
});