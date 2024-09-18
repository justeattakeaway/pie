import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import {
    type PropObject, type WebComponentPropValues, type WebComponentTestInput,
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
import { type CheckboxProps, statusTypes } from '../../src/defs.ts';

const readingDirections = ['LTR', 'RTL'];

const props: PropObject<CheckboxProps> = {
    status: statusTypes,
    checked: [true, false],
    disabled: [true, false],
    indeterminate: [true, false],
};

const renderTestPieCheckbox = (propVals: WebComponentPropValues) => {
    let attributes = '';

    if (propVals.assistiveText) attributes += ` assistiveText="${propVals.assistiveText}"`;
    if (propVals.indeterminate) attributes += ` indeterminate="${propVals.indeterminate}"`;
    if (propVals.disabled) attributes += ` disabled="${propVals.disabled}"`;
    if (propVals.checked) attributes += ` checked="${propVals.checked}"`;

    return `<pie-checkbox${attributes} status="${propVals.status}">Label</pie-checkbox>`;
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
    for (const combo of componentPropsMatrixByCheckedState[variant]) {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieCheckbox);
        const propKeyValues = `
            checked: ${testComponent.propValues.checked},
            disabled: ${testComponent.propValues.disabled},
            status: ${testComponent.propValues.status},
            indeterminate: ${testComponent.propValues.indeterminate}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );
    }

    await percySnapshot(page, `PIE Checkbox - Checked State: ${variant}`, percyWidths);
}));

for (const dir of readingDirections) {
    test(`Assistive text and statuses - ${dir}`, async ({ mount, page }) => {
        if (dir === 'RTL') {
            setRTL(page);
        }

        // Assistive text with no status
        let testComponent: WebComponentTestInput = createTestWebComponent({ assistiveText: 'Assistive text' }, renderTestPieCheckbox);
        let propKeyValues = `assistiveText: ${testComponent.propValues.assistiveText}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );

        // Assistive text with no status + indeterminate
        testComponent = createTestWebComponent({ assistiveText: 'Assistive text', indeterminate: true }, renderTestPieCheckbox);
        propKeyValues = `assistiveText: ${testComponent.propValues.assistiveText}, indeterminate: ${testComponent.propValues.indeterminate}`;

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
        testComponent = createTestWebComponent({ assistiveText: 'Error text', status: 'error' }, renderTestPieCheckbox);
        propKeyValues = `assistiveText: ${testComponent.propValues.assistiveText}, status: ${testComponent.propValues.status}`;

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
        testComponent = createTestWebComponent({ assistiveText: 'Success text', status: 'success', checked: true }, renderTestPieCheckbox);
        propKeyValues = `assistiveText: ${testComponent.propValues.assistiveText}, status: ${testComponent.propValues.status}, checked: ${testComponent.propValues.checked}`;

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
}
