import { getShadowElementStylePropValues } from '@justeattakeaway/pie-webc-testing/src/helpers/get-shadow-element-style-prop-values.ts';
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieTag, TagProps } from '@/index';

const componentSelector = '[data-test-id="pie-tag"]';
const tagIconSelector = '[data-test-id="tag-icon"]';

const props: Partial<TagProps> = {
    size: 'large',
    variant: 'neutral',
    isStrong: false,
};

type VariantToBgStyle = {
    variantName: TagProps['variant'];
    bgStyle: string;
};

const variantsToIsStrongStyle:Array<VariantToBgStyle> = [
    { variantName: 'neutral', bgStyle: '--dt-color-container-inverse' },
    { variantName: 'green', bgStyle: '--dt-color-support-positive' },
    { variantName: 'red', bgStyle: '--dt-color-support-error' },
    { variantName: 'yellow', bgStyle: '--dt-color-support-warning' },
    { variantName: 'blue', bgStyle: '--dt-color-support-info' },
    { variantName: 'neutral-alternative', bgStyle: '--dt-color-container-default' },
    { variantName: 'brand', bgStyle: '--dt-color-support-brand-02' },
    { variantName: 'ghost', bgStyle: '--tag-transparent-bg-color' },
    { variantName: 'outline', bgStyle: '--tag-transparent-bg-color' },
];

const icon = '<svg slot="icon" data-test-id="tag-icon" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--plusCircle"><path d="M8.656 4.596H7.344v2.748H4.596v1.312h2.748v2.748h1.312V8.656h2.748V7.344H8.656V4.596Z"></path><path d="M12.795 3.205a6.781 6.781 0 1 0 0 9.625 6.79 6.79 0 0 0 0-9.625Zm-.927 8.662a5.469 5.469 0 1 1-7.734-7.735 5.469 5.469 0 0 1 7.734 7.736Z"></path></svg>';

test.describe('PieTag - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieTag, {
            props,
            slots: {
                default: 'Label',
            },
        });

        // Act
        const tag = page.locator(componentSelector);

        // Assert
        expect(tag).toBeVisible();
    });

    test.describe('icon slot', () => {
        test.describe('when passed', () => {
            test.describe('if the size is large', () => {
                test('should render the icon', async ({ mount, page }) => {
                    // Arrange
                    await mount(PieTag, {
                        props,
                        slots: {
                            default: 'Label',
                            icon,
                        },
                    });

                    // Act
                    const tagIcon = page.locator(tagIconSelector);

                    // Assert
                    expect(tagIcon).toBeVisible();
                });
            });
        });

        test.describe('if the size is small', () => {
            test('should NOT render the icon', async ({ mount, page }) => {
                // Arrange
                await mount(PieTag, {
                    props: {
                        ...props,
                        size: 'small',
                    },
                    slots: {
                        default: 'Label',
                        icon,
                    },
                });

                // Act
                const tagIcon = page.locator(tagIconSelector);

                // Assert
                await expect(tagIcon).not.toBeVisible();
            });
        });
    });

    variantsToIsStrongStyle.forEach(({ variantName, bgStyle }) => {
        test(`a "${variantName}" tag variant bg colour should be equivalent to "${bgStyle}"`, async ({ mount }) => {
            const component = await mount(PieTag, {
                props: {
                    ...props,
                    variant: variantName,
                    isStrong: true,
                },
                slots: {
                    default: 'Label',
                },
            });

            const [currentBgStyle, expectedBgStyle] = await getShadowElementStylePropValues(component, componentSelector, ['--tag-bg-color', bgStyle]);

            await expect(currentBgStyle).toBe(expectedBgStyle);
        });
    });
});
