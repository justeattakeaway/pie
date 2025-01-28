import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { thumbnail } from '../helpers/selectors.ts';

test.describe('PieThumbnail - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'thumbnail--default');

        await basePage.load();

        // Assert
        await expect(page.getByTestId(thumbnail.selectors.container.dataTestId)).toBeVisible();
    });

    test('should set placeholder values if a placeholder is provided when an image load throws an error', async ({ page }) => {
        // Arrange
        const expectedPlaceholder = {
            src: 'https://www.pie.design/assets/img/404_narrow.png',
            alt: 'Placeholder Alt',
        };

        const pieThumbnailPage = new BasePage(page, 'thumbnail--invalid-src');
        await pieThumbnailPage.load();

        const thumbnailComponent = page.getByTestId(thumbnail.selectors.container.dataTestId);
        const thumbnailImg = thumbnailComponent.getByTestId(thumbnail.selectors.img.dataTestId);

        // Assert that the src attribute is set correctly
        await expect(thumbnailImg).toHaveAttribute('src', expectedPlaceholder.src);

        // Assert that the alt attribute is set correctly
        await expect(thumbnailImg).toHaveAttribute('alt', expectedPlaceholder.alt);
    });

    test('should NOT set placeholder values if a placeholder is provided  when an image load does not throw an error', async ({ page }) => {
        // Arrange
        const expectedValues = {
            src: 'https://www.pie.design/assets/img/jet-logo-narrow.svg',
            alt: 'JET Logo',
        };

        const pieThumbnailPage = new BasePage(page, 'thumbnail--valid-src-with-placeholder');
        await pieThumbnailPage.load();

        const thumbnailComponent = page.getByTestId(thumbnail.selectors.container.dataTestId);
        const thumbnailImg = thumbnailComponent.getByTestId(thumbnail.selectors.img.dataTestId);

        // Assert that the src attribute is set correctly
        await expect(thumbnailImg).toHaveAttribute('src', expectedValues.src);

        // Assert that the alt attribute is set correctly
        await expect(thumbnailImg).toHaveAttribute('alt', expectedValues.alt);
    });
});
