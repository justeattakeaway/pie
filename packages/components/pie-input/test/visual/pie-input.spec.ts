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
import { statusTypes } from '../../src/defs.ts';
import { PieInput } from '../../src/index.ts';

const props: PropObject = {
    status: statusTypes,
};

// Renders a <pie-input> HTML string with the given prop values
const renderTestPieInput = (propVals: WebComponentPropValues) => `<pie-input status="${propVals.status}"></pie-input>`;

const componentPropsMatrix: WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByStatus: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'status');
const componentStatus: string[] = Object.keys(componentPropsMatrixByStatus);

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the input component is registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const inputComponent = await mount(PieInput);
    await inputComponent.unmount();
});

componentStatus.forEach((status) => test(`should render all prop variations for Status: ${status}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByStatus[status].map(async (combo: WebComponentPropValues) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieInput);
        const propKeyValues = `
            status: ${testComponent.propValues.status}
            `;
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

    // Follow up to remove in Jan
    await page.waitForTimeout(5000);

    await percySnapshot(page, `PIE Input - Status: ${status}`, percyWidths);
}));
