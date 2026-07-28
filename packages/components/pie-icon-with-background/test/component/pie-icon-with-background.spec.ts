import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-icon-with-background"]';

test.describe('PieIconWithBackground - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'icon-with-background--default');

        await basePage.load();

        // Act
        const iconWithBackground = page.locator(componentSelector);

        // Assert
        await expect(iconWithBackground).toBeVisible();
    });

    test.describe('shape prop', () => {
        [
            { shape: 'circle', storyId: 'icon-with-background--circle' },
            { shape: 'square', storyId: 'icon-with-background--square' },
        ].forEach(({ shape, storyId }) => {
            test(`should apply the ${shape} shape class`, async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, storyId);

                await basePage.load();

                // Act
                const iconWithBackground = page.locator(componentSelector);

                // Assert
                await expect(iconWithBackground).toHaveClass(new RegExp(`c-iconWithBackground--${shape}`));
            });
        });
    });

    test.describe('size prop', () => {
        ['small', 'medium', 'large', 'xlarge'].forEach((size) => {
            test(`should apply the ${size} size class`, async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'icon-with-background--default');

                await basePage.load({ size });

                // Act
                const iconWithBackground = page.locator(componentSelector);

                // Assert
                await expect(iconWithBackground).toHaveClass(new RegExp(`c-iconWithBackground--${size}`));
            });
        });

        test('should default to the medium size class when size is not provided', async ({ page }) => {
            // Arrange
            const basePage = new BasePage(page, 'icon-with-background--default');

            await basePage.load();

            // Act
            const iconWithBackground = page.locator(componentSelector);

            // Assert
            await expect(iconWithBackground).toHaveClass(new RegExp('c-iconWithBackground--medium'));
        });

        test('should fall back to the medium size class when an invalid size is provided', async ({ page }) => {
            // Arrange
            const basePage = new BasePage(page, 'icon-with-background--default');

            await basePage.load({ size: 'invalid-size' });

            // Act
            const iconWithBackground = page.locator(componentSelector);

            // Assert
            await expect(iconWithBackground).toHaveClass(new RegExp('c-iconWithBackground--medium'));
        });
    });
});
