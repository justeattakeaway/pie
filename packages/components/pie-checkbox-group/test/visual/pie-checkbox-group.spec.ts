
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import type {
    PropObject, WebComponentPropValues, WebComponentTestInput,
} from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import {
    getAllPropCombinations, splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-testing/src/helpers/get-all-prop-combos.ts';
import { createTestWebComponent } from '@justeattakeaway/pie-webc-testing/src/helpers/rendering.ts';
import { WebComponentTestWrapper } from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { setRTL } from '@justeattakeaway/pie-webc-testing/src/helpers/set-rtl-direction.ts';
import { PieAssistiveText } from '@justeattakeaway/pie-assistive-text';
import { PieCheckbox } from '@justeattakeaway/pie-checkbox';
import { PieCheckboxGroup } from '../../src/index.ts';
import { statusTypes } from '../../src/defs.ts';

const readingDirections = ['LTR', 'RTL'];

const props: PropObject = {
    label: ['Group Label', ''],
    status: statusTypes,
    isInline: [true, false],
    disabled: [true, false],
};

const renderTestPieCheckboxGroup = (propVals: WebComponentPropValues) => {
    let attributes = '';

    if (propVals.label) attributes += ` label="${propVals.label}"`;
    if (propVals.assistiveText) attributes += ` assistiveText="${propVals.assistiveText}"`;
    if (propVals.isInline) attributes += ` isInline="${propVals.isInline}"`;
    if (propVals.disabled) attributes += ` disabled="${propVals.disabled}"`;

    return `
    <pie-checkbox-group ${attributes} status="${propVals.status}">
        <pie-checkbox>Label</pie-checkbox>
        <pie-checkbox checked>Label</pie-checkbox>
        <pie-checkbox>Label</pie-checkbox>
    </pie-checkbox-group>`;
};

const componentPropsMatrix: WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByInlineState: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'isInline');
const componentVariants: string[] = Object.keys(componentPropsMatrixByInlineState);

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the checkbox component is registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const checkboxPropComponent = await mount(PieCheckboxGroup);
    await checkboxPropComponent.unmount();

    const assistiveTextComponent = await mount(PieAssistiveText);
    await assistiveTextComponent.unmount();

    const checkboxComponent = await mount(PieCheckbox);
    await checkboxComponent.unmount();
});

componentVariants.forEach((variant) => test(`should render all prop variations for the isInline state: ${variant}`, async ({ page, mount }) => {
    for (const combo of componentPropsMatrixByInlineState[variant]) {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieCheckboxGroup);
        const propKeyValues = `
            isInline: ${testComponent.propValues.isInline},
            disabled: ${testComponent.propValues.disabled},
            label: ${testComponent.propValues.label ? 'with label' : 'no label'},
            status: ${testComponent.propValues.status}`;

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

    await percySnapshot(page, `PIE Checkbox Group - isInline: ${variant}`, percyWidths);
}));

for (const dir of readingDirections) {
    test(`Assistive text and statuses - ${dir}`, async ({ mount, page }) => {
        if (dir === 'RTL') {
            setRTL(page);
        }

        // Assistive text with no status
        let testComponent: WebComponentTestInput = createTestWebComponent({ assistiveText: 'Assistive text', label: 'Group label' }, renderTestPieCheckboxGroup);
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
        testComponent = createTestWebComponent({ assistiveText: 'Error text', label: 'Group label', status: 'error' }, renderTestPieCheckboxGroup);
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
        testComponent = createTestWebComponent({ assistiveText: 'Success text', label: 'Group label', status: 'success' }, renderTestPieCheckboxGroup);
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

        await percySnapshot(page, `PIE Checkbox Group - Assistive text and statuses - ${dir}`, percyWidths);
    });
}
