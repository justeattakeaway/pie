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

    test('should set a custom placeholder on image load failure if the `placeholder` prop is provided', async ({ page }) => {
        // Arrange
        const expectedPlaceholder = {
            src: 'https://www.pie.design/assets/img/404_narrow.png',
            alt: 'A custom placeholder image',
        };

        const pieThumbnailPage = new BasePage(page, 'thumbnail--invalid-src-and-custom-placeholder');
        await pieThumbnailPage.load();

        // Act
        const thumbnailComponent = page.getByTestId(thumbnail.selectors.container.dataTestId);
        const thumbnailImg = thumbnailComponent.getByTestId(thumbnail.selectors.img.dataTestId);

        // Assert
        await expect(thumbnailImg).toHaveAttribute('src', expectedPlaceholder.src);
        await expect(thumbnailImg).toHaveAttribute('alt', expectedPlaceholder.alt);
    });

    test('should NOT set a custom placeholder if the `placeholder` prop is provided and the image loads succcseffuly', async ({ page }) => {
        // Arrange
        const expectedValues = {
            src: './static/images/pie-logo.svg',
            alt: 'The PIE design system logo',
        };

        const pieThumbnailPage = new BasePage(page, 'thumbnail--valid-src-with-placeholder');
        await pieThumbnailPage.load();

        // Act
        const thumbnailComponent = page.getByTestId(thumbnail.selectors.container.dataTestId);
        const thumbnailImg = thumbnailComponent.getByTestId(thumbnail.selectors.img.dataTestId);

        // Assert
        await expect(thumbnailImg).toHaveAttribute('src', expectedValues.src);
        await expect(thumbnailImg).toHaveAttribute('alt', expectedValues.alt);
    });
});
