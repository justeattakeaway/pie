import { test } from '@sand4rt/experimental-ct-web';
import { getLitPercyOptions } from '@justeattakeaway/pie-webc-core/src/test-helpers/percy-lit-options.ts';
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
import { PieButton } from '@/index';
import { sizes, variants } from '@/defs';

const props: PropObject = {
    variant: variants,
    size: sizes,
    type: 'button', // Changing the type does not affect the appearance of the button
    isFullWidth: [true, false],
    disabled: [true, false],
};

// Renders a <pie-button> HTML string with the given prop values
const renderTestPieButton = (propVals: WebComponentPropValues) => `<pie-button variant="${propVals.variant}" size="${propVals.size}" type="${propVals.type}" ${propVals.isFullWidth ? 'isFullWidth' : ''} ${propVals.disabled ? 'disabled' : ''}>Hello world</pie-button>`;

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

// This ensures the component is registered in the DOM for each test
// This is not required if your tests mount the web component directly in the tests
test('Component registered in the DOM', async ({ mount }) => {
    await mount(
        PieButton,
        {
            props: {},
            slots: {},
        },
    );
});

componentVariants.forEach((variant) => test(`Render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieButton);
        const propKeyValues = `size: ${testComponent.propValues.size}, isFullWidth: ${testComponent.propValues.isFullWidth}, disabled: ${testComponent.propValues.disabled}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );
    }));

    await percySnapshot(page, `PIE Button - Variant: ${variant}`, getLitPercyOptions());
}));
