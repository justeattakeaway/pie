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
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { PieIconButton } from '../../src/index.ts';

import { sizes, variants } from '../../src/defs.ts';

const props: PropObject = {
    size: sizes,
    variant: variants,
    isLoading: [true, false],
    disabled: [true, false],
};

// TODO: Currently setting the slot to use a straight up SVG
//       This should be updated to use pie-icons-webc, but after some investigation, we think that we'll
//       need to convert the webc icons to use Lit, as currently the components don't work well in a Node env like Playwright
//       Atm, importing them like `import '@justeattakeaway/pie-icons-webc/icons/IconClose.js';` results in an `HTMLElement is not defined` error
const closeSVG = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--close"><path d="M11.868 3.205 8 7.072 4.133 3.205l-.928.927L7.073 8l-3.868 3.867.928.928L8 8.927l3.868 3.868.927-.928L8.928 8l3.867-3.868-.927-.927Z"></path></svg>';

// Renders a <pie-icon-button> HTML string with the given prop values
const renderTestPieIconButton = (propVals: WebComponentPropValues) => `<pie-icon-button size="${propVals.size}" variant="${propVals.variant}" ${propVals.disabled ? 'disabled' : ''} ${propVals.isLoading ? 'isLoading' : ''}>${closeSVG}</pie-icon-button>`;

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

componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieIconButton);
        const propKeyValues = `size: ${testComponent.propValues.size}, disabled: ${testComponent.propValues.disabled}, isLoading: ${testComponent.propValues.isLoading}`;
        const darkMode = variant.includes('inverse');

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues, darkMode },
                slots: {
                    component: testComponent.renderedString,
                },
            },
        );
    }));

    await percySnapshot(page, `PIE Icon Button - Variant: ${variant}`, percyWidths);
}));
