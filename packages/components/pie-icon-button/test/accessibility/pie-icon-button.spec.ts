import { test, expect } from '@sand4rt/experimental-ct-web';
import AxeBuilder from '@axe-core/playwright';
import {
    PropObject, Combination, getAllPropCombinations, splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/get-all-prop-combos.ts';
import { PieIconButton, iconButtonVariants } from '@/index';

const props: PropObject = {
    variant: iconButtonVariants,
    disabled: [true, false],
};

const componentPropsMatrix : Combination[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, Combination[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

componentVariants.forEach((variant) => test(`Render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: Combination) => {
        await mount(
            PieIconButton,
            {
                props: { ...combo },
                slots: {
                    default: 'Hello world',
                },
            },
        );
    }));

    const results = await new AxeBuilder.default({ page })
        .withTags(['wcag21a', 'wcag21aa', 'wcag143', 'cat.color', 'cat.aria'])
        .disableRules(['color-contrast', 'color-contrast-enhanced'])
        .analyze();

    expect(results.violations).toEqual([]);
}));
