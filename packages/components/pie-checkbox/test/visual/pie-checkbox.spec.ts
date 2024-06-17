import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import type {
    WebComponentPropValues, WebComponentTestInput,
} from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';

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

const readingDirections = ['LTR', 'RTL'];

const renderTestPieCheckbox = (propVals: WebComponentPropValues) => {
    let attributes = '';

    if (propVals.label) attributes += ` label="${propVals.label}"`;

    if (propVals.status) attributes += ` status="${propVals.status}"`;
    if (propVals.assistiveText) attributes += ` assistiveText="${propVals.assistiveText}"`;

    return `<pie-checkbox${attributes}></pie-checkbox>`;
};

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the checkbox component is registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const checkboxComponent = await mount(PieCheckbox);
    await checkboxComponent.unmount();

    const assistiveTextComponent = await mount(PieAssistiveText);
    await assistiveTextComponent.unmount();
});

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

        // Error and no assistive text
        testComponent = createTestWebComponent({ label: 'String', status: 'error' }, renderTestPieCheckbox);
        propKeyValues = `label: ${testComponent.propValues.label}, status: ${testComponent.propValues.status}`;

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
