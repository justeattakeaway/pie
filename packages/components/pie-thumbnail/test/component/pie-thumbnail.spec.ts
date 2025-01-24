import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type ThumbnailProps } from '../../src/defs.ts';
import { thumbnail } from '../helpers/selectors.ts';

type BackgroundColorProp = {
    backgroundColor: ThumbnailProps['backgroundColor'];
};

const backgroundColorPropOptions: Array<BackgroundColorProp> = [
    { backgroundColor: 'blue' },
    { backgroundColor: '#5b3d5b' },
    { backgroundColor: 'rgb(124, 256, 10)' },
    { backgroundColor: 'transparent' },
    { backgroundColor: 'inherit' },
    { backgroundColor: 'var(--dt-color-support-brand-03)' },
];

test.describe('PieThumbnail - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'thumbnail--default');

        await basePage.load();
        await page.waitForTimeout(2500);

        // Act
        const thumbnail = page.locator('[data-test-id="pie-thumbnail"]');

        // Assert
        await expect(thumbnail).toBeVisible();
    });

    backgroundColorPropOptions.forEach(({ backgroundColor }) => {
        test(`background color should be successfully set to "${backgroundColor}"`, async ({ page }) => {
            const props: Partial<ThumbnailProps> = {
                backgroundColor,
            };
            const pieThumbnailPage = new BasePage(page, 'thumbnail--default');
            await pieThumbnailPage.load(props);

            const thumbnailComponent = page.locator(thumbnail.selectors.container.locator);

            await expect(thumbnailComponent).toHaveCSS('background-color', backgroundColor as string);
        });
    });

    test('should set placeholder values if a placeholder is provided and img src is NOT valid', async ({ page }) => {
        // Arrange
        const placeholder = {
            src: 'https://www.pie.design/assets/img/404_narrow.png',
            alt: 'Placeholder',
        };
        const src = 'invalid-url.com';
        const alt = 'Invalid text';

        const props: Partial<ThumbnailProps> = {
            src,
            alt,
            placeholder,
        };
        const pieThumbnailPage = new BasePage(page, 'thumbnail--default');
        await pieThumbnailPage.load(props);

        const thumbnailComponent = page.locator(thumbnail.selectors.container.locator);
        const thumbnailImg = thumbnailComponent.getByTestId(thumbnail.selectors.img.dataTestId);

        // Assert that the src attribute is set correctly
        await expect(thumbnailImg).toHaveAttribute('src', placeholder.src);

        // Assert that the alt attribute is set correctly
        await expect(thumbnailImg).toHaveAttribute('alt', placeholder.alt);
    });

    test('should NOT set placeholder values if a placeholder is provided and img src is valid', async ({ page }) => {
        // Arrange
        const placeholder = {
            src: 'https://www.pie.design/assets/img/404_narrow.png',
            alt: 'Placeholder',
        };
        const src = 'https://www.pie.design/assets/img/jet-logo-narrow.svg';
        const alt = 'JET Logo';

        const props: Partial<ThumbnailProps> = {
            src,
            alt,
            placeholder,
        };
        const pieThumbnailPage = new BasePage(page, 'thumbnail--default');
        await pieThumbnailPage.load(props);

        const thumbnailComponent = page.locator(thumbnail.selectors.container.locator);
        const thumbnailImg = thumbnailComponent.getByTestId(thumbnail.selectors.img.dataTestId);

        // Assert that the src attribute is set correctly
        await expect(thumbnailImg).toHaveAttribute('src', src);

        // Assert that the alt attribute is set correctly
        await expect(thumbnailImg).toHaveAttribute('alt', alt);
    });
});
