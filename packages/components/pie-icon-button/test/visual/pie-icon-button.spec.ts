import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import type {
    PropObject, WebComponentPropValues, WebComponentTestInput,
} from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import {
    getAllPropCombinations, splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-testing/src/helpers/get-all-prop-combos.ts';
import {
    createTestWebComponent,
} from '@justeattakeaway/pie-webc-testing/src/helpers/rendering.ts';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { PieIconButton } from '@/index';
import '@justeattakeaway/pie-icons-webc/icons/IconClose';
import { sizes, variants } from '@/defs';

const props: PropObject = {
    size: sizes,
    variant: variants,
    disabled: [true, false],
};

// Renders a <pie-icon-button> HTML string with the given prop values
const renderTestPieIconButton = (propVals: WebComponentPropValues) => `<pie-icon-button size="${propVals.size}" variant="${propVals.variant}" ${propVals.disabled ? 'disabled' : ''}><icon-close  /></pie-icon-button>`;

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

// This ensures the component is registered in the DOM for each test
// This is not required if your tests mount the web component directly in the tests
test.beforeEach(async ({ page, mount }) => {
    await mount(
        PieIconButton,
        {},
    );

    // Removing the element so it's not present in the tests (but is still registered in the DOM)
    await page.evaluate(() => {
        const element : Element | null = document.querySelector('pie-icon-button');
        element?.remove();
    });
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
