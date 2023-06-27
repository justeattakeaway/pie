import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import type {
    PropObject, WebComponentPropValues, WebComponentTestInput,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/defs.ts';
import {
    getAllPropCombinations, splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/get-all-prop-combos.ts';
import {
    createTestWebComponent,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/rendering.ts';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { PieIconButton } from '@/index';
import { sizes, variants } from '@/defs';

const props: PropObject = {
    size: sizes,
    variant: variants,
    disabled: [true, false],
};

// Renders a <pie-icon-button> HTML string with the given prop values
const renderTestPieIconButton = (propVals: WebComponentPropValues) => `<pie-icon-button size="${propVals.size}" variant="${propVals.variant}" ${propVals.disabled ? 'disabled' : ''}></pie-icon-button>`;

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

// This ensures the component is registered in the DOM for each test
// This is not required if your tests mount the web component directly in the tests
test('Component registered in the DOM', async ({ mount }) => {
    await mount(
        PieIconButton,
        {
            props: {},
        },
    );
});

componentVariants.forEach((variant) => test(`Render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieIconButton);
        const propKeyValues = `size: ${testComponent.propValues.size}, disabled: ${testComponent.propValues.disabled}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString,
                },
            },
        );
    }));

    await percySnapshot(page, `PIE Icon Button - Variant: ${variant}`);
}));
