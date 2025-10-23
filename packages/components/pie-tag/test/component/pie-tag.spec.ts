import { test, expect } from '@playwright/test';
import { getShadowElementStylePropValues } from '@justeattakeaway/pie-webc-testing/src/helpers/get-shadow-element-style-prop-values.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type TagProps } from '../../src/defs.ts';

import { tag } from '../helpers/page-object/selectors.ts';

const componentSelector = '[data-test-id="pie-tag"]';

type VariantToBgStyle = {
    variantName: TagProps['variant'];
    bgStyle: string;
};

const variantsToIsStrongStyle: Array<VariantToBgStyle> = [
    { variantName: 'neutral', bgStyle: '--dt-color-container-inverse' },
    { variantName: 'success', bgStyle: '--dt-color-support-positive' },
    { variantName: 'error', bgStyle: '--dt-color-support-error' },
    { variantName: 'information', bgStyle: '--dt-color-support-info' },
    { variantName: 'neutral-alternative', bgStyle: '--dt-color-container-default' },
    { variantName: 'ghost', bgStyle: '--tag-transparent-bg-color' },
    { variantName: 'outline', bgStyle: '--tag-transparent-bg-color' },
    { variantName: 'brand-02', bgStyle: '--dt-color-support-brand-02' },
    { variantName: 'brand-03', bgStyle: '--dt-color-support-brand-03' },
    { variantName: 'brand-04', bgStyle: '--dt-color-support-brand-04' },
    { variantName: 'brand-05', bgStyle: '--dt-color-support-warning' },
    { variantName: 'brand-06', bgStyle: '--dt-color-support-brand-06' },
];

test.describe('PieTag - Component tests', () => {
    test('should be visible', async ({ page }) => {
        // Arrange
        const tagPage = new BasePage(page, 'tag');
        await tagPage.load();

        // Act
        const tagComponent = page.locator(tag.selectors.container.dataTestId, { hasText: 'Label' });

        // Assert
        await expect(tagComponent).toBeVisible();
    });

    test.describe('icon slot', () => {
        test('should render icon when size is large', async ({ page }) => {
            // Arrange
            const tagPage = new BasePage(page, 'tag--default-with-icon');
            const props: TagProps = {
                size: 'large',
            };

            await tagPage.load({ ...props });

            // Act
            const tagIcon = page.getByTestId(tag.selectors.icon.dataTestId);

            // Assert
            await expect(tagIcon).toBeVisible();
        });

        test('should render icon when size is small', async ({ page }) => {
            // Arrange
            const tagPage = new BasePage(page, 'tag--default-with-icon');
            const props: TagProps = {
                size: 'small',
            };

            await tagPage.load({ ...props });

            // Act
            const tagIcon = page.getByTestId(tag.selectors.icon.dataTestId);

            // Assert
            await expect(tagIcon).toBeVisible();
        });

        test('should NOT render icon when not provided', async ({ page }) => {
            // Arrange
            const tagPage = new BasePage(page, 'tag');
            await tagPage.load();

            // Act
            const tagIcon = page.getByTestId(tag.selectors.icon.dataTestId);

            // Assert
            await expect(tagIcon).toBeHidden();
        });
    });
});

variantsToIsStrongStyle.forEach(({ variantName, bgStyle }) => {
    test(`a "${variantName}" tag variant bg color should be equivalent to "${bgStyle}"`, async ({ page }) => {
        // Arrange
        const tagPage = new BasePage(page, 'tag');
        const props: TagProps = {
            variant: variantName,
            isStrong: true,
        };

        await tagPage.load({ ...props });

        // Act
        const tagComponent = page.locator(tag.selectors.container.dataTestId, { hasText: 'Label' });
        const [currentBgStyle, expectedBgStyle] = await getShadowElementStylePropValues(tagComponent, componentSelector, ['--int-states-mixin-bg-color', bgStyle]);

        // Assert
        expect(currentBgStyle).toBe(expectedBgStyle);
    });
});
