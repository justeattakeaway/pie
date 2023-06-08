import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import {
    PropObject, Combination, getAllPropCombinations, splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/get-all-prop-combos.ts';
import { PieModal } from '@/index';

const props: PropObject = {
    isOpen: [true, false],
};

const componentPropsMatrix : Combination[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, Combination[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

componentVariants.forEach((variant) => test(`Render all prop variations`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: Combination) => {
        await mount(
            PieModal,
            {
                props: { ...combo },
                slots: {
                    default: 'Lit Modal Dialog',
                },
            },
        );
    }));

    await percySnapshot(page, `PIE Modal - Variant: ${variant}`);
}));
