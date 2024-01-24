
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/webc-fixtures.ts';
import { getAllPropCombinations, splitCombinationsByPropertyValue } from '@justeattakeaway/pie-webc-testing/src/helpers/get-all-prop-combos.ts';
import { PropObject, WebComponentPropValues } from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import { PieTag } from '../../src/index.ts';
import { sizes, variants } from '../../src/defs.ts';

const props: PropObject = {
    variant: variants,
    size: sizes,
    isStrong: [true, false],
};

const componentPropsMatrix: WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

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
