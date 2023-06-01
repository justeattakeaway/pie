import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import {
    PropObject, Combination, getAllPropCombinations, splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/get-all-prop-combos.ts';
import { PieButton } from '@/index';
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT } from '@/defs';

const props: PropObject = {
    variant: Object.values(BUTTON_VARIANT),
    size: Object.values(BUTTON_SIZE),
    type: BUTTON_TYPE.BUTTON,
    isFullWidth: [true, false],
    disabled: [true, false],
};

const componentPropsMatrix : Combination[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, Combination[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

componentVariants.map((variant) => test(`Render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: Combination) => {
        await mount(
            PieButton,
            {
                props: { ...combo },
                slots: {
                    default: 'Hello world',
                },
            },
        );
    }));

    await percySnapshot(page, `PIE Button - Variant: ${variant}`);
}));
