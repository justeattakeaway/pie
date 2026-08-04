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
    });

    test.describe('variant prop', () => {
        (['neutral', 'neutral-alternative', 'information', 'brand-05'] as const).forEach((variant) => {
            test(`should apply the ${variant} variant class`, async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'icon-with-background--default');

                await basePage.load({ variant });

                // Act
                const iconWithBackground = page.locator(componentSelector);

                // Assert
                await expect(iconWithBackground).toHaveClass(new RegExp(`c-iconWithBackground--${variant}(\\s|$)`));
            });
        });
    });

    test.describe('isStrong prop', () => {
        test('should apply the strong class when isStrong is true', async ({ page }) => {
            // Arrange
            const basePage = new BasePage(page, 'icon-with-background--default');

            await basePage.load({ variant: 'brand-05', isStrong: true });

            // Act
            const iconWithBackground = page.locator(componentSelector);

            // Assert
            await expect(iconWithBackground).toHaveClass(/c-iconWithBackground--strong/);
        });
    });

    test.describe('isDisabled prop', () => {
        test('should apply the is-disabled class when isDisabled is true', async ({ page }) => {
            // Arrange
            const basePage = new BasePage(page, 'icon-with-background--default');

            await basePage.load({ isDisabled: true });

            // Act
            const iconWithBackground = page.locator(componentSelector);

            // Assert
            await expect(iconWithBackground).toHaveClass(/is-disabled/);
        });

        test('should not apply the is-disabled class when isDisabled is false', async ({ page }) => {
            // Arrange
            const basePage = new BasePage(page, 'icon-with-background--default');

            await basePage.load({ isDisabled: false });

            // Act
            const iconWithBackground = page.locator(componentSelector);

            // Assert
            await expect(iconWithBackground).not.toHaveClass(/is-disabled/);
        });
    });
});
