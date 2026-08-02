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
        [
            { variant: 'neutral', storyId: 'icon-with-background--neutral' },
            { variant: 'neutral-alternative', storyId: 'icon-with-background--neutral-alternative' },
            { variant: 'information', storyId: 'icon-with-background--information' },
            { variant: 'brand-05', storyId: 'icon-with-background--brand-05' },
        ].forEach(({ variant, storyId }) => {
            test(`should apply the ${variant} variant class`, async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, storyId);

                await basePage.load();

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
            const basePage = new BasePage(page, 'icon-with-background--brand-05-strong');

            await basePage.load();

            // Act
            const iconWithBackground = page.locator(componentSelector);

            // Assert
            await expect(iconWithBackground).toHaveClass(/c-iconWithBackground--strong/);
        });
    });
});
