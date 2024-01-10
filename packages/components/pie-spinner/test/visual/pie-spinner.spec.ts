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
import { PieSpinner } from '../../src/index.ts';
import { sizes, variants } from '../../src/defs.ts';

// Renders a <pie-spinner> HTML string with the given prop values
const renderTestPieSpinner = (propVals: WebComponentPropValues) => `<pie-spinner variant="${propVals.variant}" size="${propVals.size}"></pie-spinner>`;

// This ensures the component is registered in the DOM for each test
// This is not required if your tests mount the web component directly in the tests
test.beforeEach(async ({ page, mount }) => {
    await mount(
        PieSpinner,
        {},
    );

    // Removing the element so it's not present in the tests (but is still registered in the DOM)
    await page.evaluate(() => {
        const element : Element | null = document.querySelector('pie-spinner');
        element?.remove();
    });
});

test.describe('PieSpinner - Visual tests`', () => {
    const props: PropObject = {
        variant: variants,
        size: sizes,
    };
    const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
    const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
    const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

    componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
        await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
            const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieSpinner);
            const propKeyValues = `variant: ${testComponent.propValues.variant}, size: ${testComponent.propValues.size}`;
            const darkMode = variant.includes('inverse');

            await mount(
                WebComponentTestWrapper,
                {
                    props: { propKeyValues, darkMode },
                    slots: {
                        component: testComponent.renderedString.trim(),
                    },
                },
            );
        }));

        await percySnapshot(page, `PIE Spinner - Variant: ${variant}`, percyWidths);
    }));
});
