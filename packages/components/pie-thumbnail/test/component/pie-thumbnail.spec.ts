import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type PieThumbnail } from 'src/index.ts';
import { type ThumbnailProps } from '../../src/defs.ts';
import { thumbnail } from '../helpers/selectors.ts';

type BackgroundColorProp = {
    backgroundColor: ThumbnailProps['backgroundColor'];
    expectedStyleValue: string;
};

const backgroundColorPropOptions: Array<BackgroundColorProp> = [
    { backgroundColor: 'blue', expectedStyleValue: 'blue' },
    { backgroundColor: '#5b3d5b', expectedStyleValue: 'rgb(91, 61, 91)' },
    { backgroundColor: 'rgb(124, 255, 10)', expectedStyleValue: 'rgb(124, 255, 10)' },
    { backgroundColor: 'transparent', expectedStyleValue: 'transparent' },
    { backgroundColor: 'inherit', expectedStyleValue: 'inherit' },
    { backgroundColor: 'var(--dt-color-support-brand-03)', expectedStyleValue: 'var(--dt-color-support-brand-03)' },
];

test.describe('PieThumbnail - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'thumbnail--default');

        await basePage.load();

        // Assert
        await expect(page.getByTestId(thumbnail.selectors.container.dataTestId)).toBeVisible();
    });

    backgroundColorPropOptions.forEach(({ backgroundColor, expectedStyleValue }) => {
        test(`background color should be successfully set to "${backgroundColor}"`, async ({ page }) => {
            const pieThumbnailPage = new BasePage(page, 'thumbnail--default');
            await pieThumbnailPage.load();

            // Setting this manually due to Storybook limitations - https://storybook.js.org/docs/writing-stories/args#setting-args-through-the-url
            await page.evaluate((backgroundColor) => {
                const thumbnail = document.querySelector('pie-thumbnail') as PieThumbnail;
                if (thumbnail) {
                    // example format
                    thumbnail.backgroundColor = backgroundColor as string;
                } else {
                    throw new Error('Thumbnail not found');
                }
            }, backgroundColor);

            const thumbnailComponent = page.getByTestId(thumbnail.selectors.container.dataTestId);

            await expect(thumbnailComponent).toHaveAttribute('style', `background-color: ${expectedStyleValue};`);
        });
    });

    test('should set placeholder values if a placeholder is provided and img src is NOT valid', async ({ page }) => {
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

    test('should NOT set placeholder values if a placeholder is provided and img src is valid', async ({ page }) => {
        // Arrange
        const expectedValues = {
            src: 'https://www.pie.design/assets/img/jet-logo-narrow.svg',
            alt: 'JET Logo',
        };

        const pieThumbnailPage = new BasePage(page, 'thumbnail--invalid-placeholder');
        await pieThumbnailPage.load();

        const thumbnailComponent = page.getByTestId(thumbnail.selectors.container.dataTestId);
        const thumbnailImg = thumbnailComponent.getByTestId(thumbnail.selectors.img.dataTestId);

        // Assert that the src attribute is set correctly
        await expect(thumbnailImg).toHaveAttribute('src', expectedValues.src);

        // Assert that the alt attribute is set correctly
        await expect(thumbnailImg).toHaveAttribute('alt', expectedValues.alt);
    });
});
