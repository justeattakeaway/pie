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
import { setRTL } from '@justeattakeaway/pie-webc-testing/src/helpers/set-rtl-direction.ts';

import { PieAssistiveText } from '@justeattakeaway/pie-assistive-text';
import { PieCheckbox } from '../../src/index.ts';
import { statusTypes } from '../../src/defs.ts';

const readingDirections = ['LTR', 'RTL'];

const props: PropObject = {
    status: statusTypes,
    checked: [true, false],
    disabled: [true, false],
    indeterminate: [true, false],
    label: ['Label', ''],
    assistiveText: ['Assistive text', ''],
};

const renderTestPieCheckbox = (propVals: WebComponentPropValues) => {
    let attributes = '';

    if (propVals.label) attributes += ` label="${propVals.label}"`;
    if (propVals.assistiveText) attributes += ` assistiveText="${propVals.assistiveText}"`;
    if (propVals.indeterminate) attributes += ` indeterminate="${propVals.indeterminate}"`;
    if (propVals.disabled) attributes += ` disabled="${propVals.disabled}"`;
    if (propVals.checked) attributes += ` checked="${propVals.checked}"`;

    return `<pie-checkbox${attributes} status="${propVals.status}"></pie-checkbox>`;
};

const componentPropsMatrix: WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByCheckedState: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'checked');
const componentVariants: string[] = Object.keys(componentPropsMatrixByCheckedState);

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the checkbox component is registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const checkboxComponent = await mount(PieCheckbox);
    await checkboxComponent.unmount();

    const assistiveTextComponent = await mount(PieAssistiveText);
    await assistiveTextComponent.unmount();
});

componentVariants.forEach((variant) => test(`should render all prop variations for the checked state: ${variant}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByCheckedState[variant].map(async (combo: WebComponentPropValues) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieCheckbox);
        const propKeyValues = `
            checked: ${testComponent.propValues.checked},
            disabled: ${testComponent.propValues.disabled},
            label: ${testComponent.propValues.label ? 'with label' : 'no label'},
            status: ${testComponent.propValues.status},
            indeterminate: ${testComponent.propValues.indeterminate},
            assistiveText: ${testComponent.propValues.assistiveText ? 'with assistive text' : 'no assistive text'}`;

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

    await percySnapshot(page, `PIE Checkbox - Checked State: ${variant}`, percyWidths);
}));

await Promise.all(readingDirections.map(async (dir) => {
    test(`Assistive text and statuses - ${dir}`, async ({ mount, page }) => {
        if (dir === 'RTL') {
            setRTL(page);
        }

        // Assistive text with no status
        let testComponent: WebComponentTestInput = createTestWebComponent({ assistiveText: 'Assistive text', label: 'String' }, renderTestPieCheckbox);
        let propKeyValues = `assistiveText: ${testComponent.propValues.assistiveText}, label: ${testComponent.propValues.label}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );

        // Error + assistive text
        testComponent = createTestWebComponent({ assistiveText: 'Error text', label: 'String', status: 'error' }, renderTestPieCheckbox);
        propKeyValues = `assistiveText: ${testComponent.propValues.assistiveText}, label: ${testComponent.propValues.label}, status: ${testComponent.propValues.status}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );

        // Success + assistive text
        testComponent = createTestWebComponent({ assistiveText: 'Success text', label: 'String', status: 'success' }, renderTestPieCheckbox);
        propKeyValues = `assistiveText: ${testComponent.propValues.assistiveText}, label: ${testComponent.propValues.label}, status: ${testComponent.propValues.status}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );

        await percySnapshot(page, `PIE Checkbox - Assistive text and statuses - ${dir}`, percyWidths);
    });
}));
