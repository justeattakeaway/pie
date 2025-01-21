import { test, expect } from '@sand4rt/experimental-ct-web';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type ThumbnailProps } from '@justeattakeaway/pie-thumbnail';
import { getShadowElementStylePropValues } from '@justeattakeaway/pie-webc-testing';
import { PieThumbnail } from '@justeattakeaway/pie-thumbnail/src';

const componentSelector = '[data-test-id="pie-thumbnail"]';
const componentImgSelector = '[data-test-id="pie-thumbnail-img"]';

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

        basePage.load();
        await page.waitForTimeout(2500);

        // Act
        const thumbnail = page.locator(componentSelector);

        // Assert
        expect(thumbnail).toBeVisible();
    });

    backgroundColorPropOptions.forEach(({ backgroundColor }) => {
        test(`background color should be successfully set to "${backgroundColor}"`, async ({ mount }) => {
            const component = await mount(PieThumbnail, {
                props: {
                    backgroundColor,
                },
            });

            const [currentBgStyle, expectedBgStyle] = await getShadowElementStylePropValues(component, componentSelector, ['background-color', backgroundColor as string]);

            expect(currentBgStyle).toBe(expectedBgStyle);
        });
    });

    test('should set placeholder values if a placeholder is provided and img src is NOT valid', async ({ mount }) => {
        // Arrange
        const placeholder = {
            src: 'https://www.pie.design/assets/img/jet-logo-narrow.svg',
            alt: 'Placeholder',
        };
        const src = 'invalid-url.com';
        const alt = 'Invalid text';

        const component = await mount(PieThumbnail, {
            props: {
                src,
                alt,
                placeholder,
            },
        });

        const thumbnailImg = await component.locator(componentImgSelector);

        // Assert that the src attribute is set correctly
        await expect(thumbnailImg).toHaveAttribute('src', placeholder.src);

        // Assert that the alt attribute is set correctly
        await expect(thumbnailImg).toHaveAttribute('alt', placeholder.alt);
    });

    test('should NOT set placeholder values if a placeholder is provided and img src is valid', async ({ mount }) => {
        // Arrange
        const placeholder = {
            src: 'https://www.pie.design/assets/img/placeholder.svg',
            alt: 'Placeholder',
        };
        const src = 'https://www.pie.design/assets/img/jet-logo-narrow.svg';
        const alt = 'JET Logo';

        const component = await mount(PieThumbnail, {
            props: {
                src,
                alt,
                placeholder,
            },
        });

        const thumbnailImg = await component.locator(componentImgSelector);

        // Assert that the src attribute is set correctly
        await expect(thumbnailImg).toHaveAttribute('src', src);

        // Assert that the alt attribute is set correctly
        await expect(thumbnailImg).toHaveAttribute('alt', alt);
    });
});
