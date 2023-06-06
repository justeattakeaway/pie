import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import {
    PropObject, Combination, getAllPropCombinations, splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/get-all-prop-combos.ts';
import { PieIconButton } from '@/index';
import { ICON_BUTTON_VARIANT } from '@/defs';

const props: PropObject = {
    variant: Object.values(ICON_BUTTON_VARIANT),
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
            },
        );
    }));

    await percySnapshot(page, `PIE Icon Button - Variant: ${variant}`);
}));
