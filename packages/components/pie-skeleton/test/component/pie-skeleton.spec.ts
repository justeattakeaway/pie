import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-skeleton"]';

test.describe('PieSkeleton - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'skeleton--default');

        await basePage.load();

        // Act
        const skeleton = page.locator(componentSelector);

        // Assert
        await expect(skeleton).toBeVisible();
    });
});
