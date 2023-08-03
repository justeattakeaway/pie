import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/fixtures.ts';
import { getAllPropCombinations, splitCombinationsByPropertyValue } from '@justeattakeaway/pie-webc-testing/src/helpers/get-all-prop-combos.ts';
import { PropObject, WebComponentPropValues } from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import { PieButton } from '@/index';
import { sizes, variants } from '@/defs';

const props: PropObject = {
    variant: variants,
    size: sizes,
    type: 'button', // Changing the type does not affect the appearance of the button
    isFullWidth: [true, false],
    disabled: [true, false],
};

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

componentVariants.forEach((variant) => test(`Render all prop variations for Variant: ${variant}`, async ({ makeAxeBuilder, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
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

    const results = await makeAxeBuilder().analyze();

    expect(results.violations).toEqual([]);
}));
