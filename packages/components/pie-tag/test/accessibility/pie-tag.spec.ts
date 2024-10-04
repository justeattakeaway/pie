import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { getAllPropCombinations, splitCombinationsByPropertyValue } from '@justeattakeaway/pie-webc-testing/src/helpers/get-all-prop-combos.ts';
import { type PropObject, type WebComponentPropValues } from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import { PieTag } from '../../src/index.ts';
import { type TagProps, sizes, variants } from '../../src/defs.ts';

const props: PropObject<TagProps> = {
    variant: variants,
    size: sizes,
    isStrong: [true, false],
};

const componentPropsMatrix = getAllPropCombinations(props);
const componentPropsMatrixByVariant = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants = Object.keys(componentPropsMatrixByVariant);

componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ makeAxeBuilder, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
        await mount(
            PieTag,
            {
                props: { ...combo },
                slots: {
                    default: 'Hello world',
                },
            },
        );
    }));

    const results = await makeAxeBuilder().analyze();

    expect(results.violations).toEqual([]);
}));
