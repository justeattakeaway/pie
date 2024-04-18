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
import { PieInput, InputProps } from '../../src/index.ts';

// const props: PropObject = {
//     assistiveText:  ['', 'Assistive Text'],
//     status: statusTypes,
//     disabled: [true, false],
//     readonly: [true, false],
//     value: ['', 'String'],
//     placeholder: ['', 'Placeholder'],
// };

// // Renders a <pie-input> HTML string with the given prop values
const renderTestPieInput = (propVals: WebComponentPropValues) => {
    let attributes = '';
    if (propVals.size) attributes += ` size="${propVals.size}"`;
    if (propVals.placeholder) attributes += ` placeholder="${propVals.placeholder}"`;
    if (propVals.value) attributes += ` value="${propVals.value}"`;

    return `<pie-input${attributes}></pie-input>`;
};
// const componentPropsMatrix: WebComponentPropValues[] = getAllPropCombinations(props);
// const componentPropsMatrixByStatus: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'status');
// const componentStatus: string[] = Object.keys(componentPropsMatrixByStatus);

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the input component is registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const inputComponent = await mount(PieInput);
    await inputComponent.unmount();
});

test('size variants with value and placeholder', async ({ mount, page }) => {
    const sizeVariants = ['small', 'medium', 'large'];
    const value = 'String';
    const placeholder = 'Placeholder';

    await Promise.all(sizeVariants.map(async (size) => {
        // Test with value prop
        let testComponent: WebComponentTestInput = createTestWebComponent({ size, value }, renderTestPieInput);
        let propKeyValues = `size: ${testComponent.propValues.size}, value: ${testComponent.propValues.value}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );

        // Test with placeholder prop
        testComponent = createTestWebComponent({ size, placeholder }, renderTestPieInput);
        propKeyValues = `size: ${testComponent.propValues.size}, placeholder: ${testComponent.propValues.placeholder}`;

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

    await percySnapshot(page, 'PIE Input - Sizes with value and placeholder', percyWidths);
});
