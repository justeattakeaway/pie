import { test, expect } from '@sand4rt/experimental-ct-web';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type ThumbnailProps } from '@justeattakeaway/pie-thumbnail';
import { getShadowElementStylePropValues } from '@justeattakeaway/pie-webc-testing';
import { PieThumbnail } from '@justeattakeaway/pie-thumbnail/src';

const componentSelector = '[data-test-id="pie-thumbnail"]';

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
});
