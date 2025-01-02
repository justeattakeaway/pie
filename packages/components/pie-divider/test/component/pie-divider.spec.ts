import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-divider"]';

test.describe('PieDivider - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const dividerPage = new BasePage(page, 'divider');

        await dividerPage.load();

        // Act
        const divider = page.locator(componentSelector);

        // Assert
        expect(divider).toBeVisible();
    });

    test('should render the `label` if it is provided', async ({ page }) => {
        // Arrange
        const dividerPage = new BasePage(page, 'divider');

        await dividerPage.load({ label: 'foo label', orientation: 'horizontal' });

        // Act
        const label = page.getByText('foo label');

        // Assert
        expect(label).toBeVisible();
    });

    test('should NOT render the `label` if divider orientation is vertical', async ({ page }) => {
        // Arrange
        const dividerPage = new BasePage(page, 'divider');

        await dividerPage.load({ label: 'foo label', orientation: 'vertical' });

        // Act
        const label = page.getByText('foo label');

        // Assert
        expect(label).not.toBeVisible();
    });
});
