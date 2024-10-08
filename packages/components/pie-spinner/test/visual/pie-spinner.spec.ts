import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { type PropObject, type WebComponentPropValues } from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
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
import { type SpinnerProps, sizes, variants } from '../../src/defs.ts';

// Renders a <pie-spinner> HTML string with the given prop values
const renderTestPieSpinner = (propVals: WebComponentPropValues) => `<pie-spinner variant="${propVals.variant}" size="${propVals.size}"></pie-spinner>`;

// This ensures the component is registered in the DOM for each test
// This is not required if your tests mount the web component directly in the tests
test.beforeEach(async ({ mount }) => {
    const component = await mount(PieSpinner);
    await component.unmount();
});

test.describe('PieSpinner - Visual tests`', () => {
    const props: PropObject<SpinnerProps> = {
        variant: variants,
        size: sizes,
    };
    const componentPropsMatrix = getAllPropCombinations(props);
    const componentPropsMatrixByVariant = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
    const componentVariants = Object.keys(componentPropsMatrixByVariant);

    componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
        for (const combo of componentPropsMatrixByVariant[variant]) {
            const testComponent = createTestWebComponent(combo, renderTestPieSpinner);
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
        }

        await percySnapshot(page, `PIE Spinner - Variant: ${variant}`, percyWidths);
    }));
});
