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
import { IconPlaceholder } from '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder';
import { PieAssistiveText } from '@justeattakeaway/pie-assistive-text';
import { PieInput } from '../../src/index.ts';

// Renders a <pie-input> HTML string with the given prop values
type InputSlotOptions = {
    leadingIcon?: boolean;
    trailingIcon?: boolean;
    leadingCharacter?: boolean;
    trailingCharacter?: boolean;
};

const renderTestPieInput = (propVals: WebComponentPropValues) => {
    let attributes = '';

    if (propVals.size) attributes += ` size="${propVals.size}"`;
    if (propVals.placeholder) attributes += ` placeholder="${propVals.placeholder}"`;
    if (propVals.value) attributes += ` value="${propVals.value}"`;
    if (propVals.status) attributes += ` status="${propVals.status}"`;
    if (propVals.assistiveText) attributes += ` assistiveText="${propVals.assistiveText}"`;
    // if (propVals.disabled) attributes += ' disabled';
    // if (propVals.readonly) attributes += ' readonly';

    return `<pie-input${attributes}></pie-input>`;
};

// Adds any slots to the component HTML string
const addSlotsToComponent = (component: string, slotOptions: InputSlotOptions) => {
    let slots = '';

    if (slotOptions.leadingIcon) slots += '<icon-placeholder slot="leading"></icon-placeholder>';
    if (slotOptions.trailingIcon) slots += '<icon-placeholder slot="trailing"></icon-placeholder>';
    if (slotOptions.leadingCharacter) slots += '<pie-assistive-text slot="leading">#</pie-assistive-text>';
    if (slotOptions.trailingCharacter) slots += '<pie-assistive-text slot="trailing">#</pie-assistive-text>';

    // add slots between > and </pie-input>
    return component.replace('></pie-input>', `>${slots}</pie-input>`);
};

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the input component is registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const inputComponent = await mount(PieInput);
    await inputComponent.unmount();

    const iconComponent = await mount(IconPlaceholder);
    await iconComponent.unmount();

    const assistiveTextComponent = await mount(PieAssistiveText);
    await assistiveTextComponent.unmount();
});

test('size variants with value and placeholder', async ({ mount, page }) => {
    const sizeVariants = ['small', 'medium', 'large'];
    const value = 'String';
    const placeholder = 'Placeholder';

    await Promise.all(sizeVariants.map(async (size) => {
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

test('assistive text and status', async ({ mount, page }) => {
    // Assistive text with no status
    let testComponent: WebComponentTestInput = createTestWebComponent({ assistiveText: 'Assistive text', value: 'String' }, renderTestPieInput);
    let propKeyValues = `assistiveText: ${testComponent.propValues.value}, value: ${testComponent.propValues.value}`;

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
    testComponent = createTestWebComponent({ assistiveText: 'Error text', value: 'String', status: 'error' }, renderTestPieInput);
    propKeyValues = `assistiveText: ${testComponent.propValues.assistiveText}, value: ${testComponent.propValues.value}, status: ${testComponent.propValues.status}`;

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
    testComponent = createTestWebComponent({ value: 'String', status: 'error' }, renderTestPieInput);
    propKeyValues = `value: ${testComponent.propValues.value}, status: ${testComponent.propValues.status}`;

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
    testComponent = createTestWebComponent({ assistiveText: 'Success text', value: 'String', status: 'success' }, renderTestPieInput);
    propKeyValues = `assistiveText: ${testComponent.propValues.assistiveText}, value: ${testComponent.propValues.value}, status: ${testComponent.propValues.status}`;

    await mount(
        WebComponentTestWrapper,
        {
            props: { propKeyValues },
            slots: {
                component: testComponent.renderedString.trim(),
            },
        },
    );

    await percySnapshot(page, 'PIE Input - Statuses and assistive text', percyWidths);
});

test('Content', async ({ mount, page }) => {
    // Trailing + leading icon
    let testComponent: WebComponentTestInput = createTestWebComponent({ assistiveText: 'Assistive text', value: 'String' }, renderTestPieInput);
    let componentStringWithSlots = addSlotsToComponent(testComponent.renderedString, { leadingIcon: true, trailingIcon: true });

    let propKeyValues = `assistiveText: ${testComponent.propValues.value}, value: ${testComponent.propValues.value}`;

    await mount(
        WebComponentTestWrapper,
        {
            props: { propKeyValues },
            slots: {
                component: componentStringWithSlots.trim(),
            },
        },
    );

    // Leading icon
    testComponent = createTestWebComponent({ assistiveText: 'Assistive text', value: 'String' }, renderTestPieInput);
    componentStringWithSlots = addSlotsToComponent(testComponent.renderedString, { leadingIcon: true });

    propKeyValues = `assistiveText: ${testComponent.propValues.value}, value: ${testComponent.propValues.value}`;

    await mount(
        WebComponentTestWrapper,
        {
            props: { propKeyValues },
            slots: {
                component: componentStringWithSlots.trim(),
            },
        },
    );

    // Trailing icon
    testComponent = createTestWebComponent({ assistiveText: 'Assistive text', value: 'String' }, renderTestPieInput);
    componentStringWithSlots = addSlotsToComponent(testComponent.renderedString, { trailingIcon: true });

    propKeyValues = `assistiveText: ${testComponent.propValues.value}, value: ${testComponent.propValues.value}`;

    await mount(
        WebComponentTestWrapper,
        {
            props: { propKeyValues },
            slots: {
                component: componentStringWithSlots.trim(),
            },
        },
    );

    // Leading + Trailing text
    testComponent = createTestWebComponent({ assistiveText: 'Assistive text', value: 'String' }, renderTestPieInput);
    componentStringWithSlots = addSlotsToComponent(testComponent.renderedString, { leadingCharacter: true, trailingCharacter: true });

    propKeyValues = `assistiveText: ${testComponent.propValues.value}, value: ${testComponent.propValues.value}`;

    await mount(
        WebComponentTestWrapper,
        {
            props: { propKeyValues },
            slots: {
                component: componentStringWithSlots.trim(),
            },
        },
    );

    // Leading text
    testComponent = createTestWebComponent({ assistiveText: 'Assistive text', value: 'String' }, renderTestPieInput);
    componentStringWithSlots = addSlotsToComponent(testComponent.renderedString, { leadingCharacter: true });

    propKeyValues = `assistiveText: ${testComponent.propValues.value}, value: ${testComponent.propValues.value}`;

    await mount(
        WebComponentTestWrapper,
        {
            props: { propKeyValues },
            slots: {
                component: componentStringWithSlots.trim(),
            },
        },
    );

    // Trailing text
    testComponent = createTestWebComponent({ assistiveText: 'Assistive text', value: 'String' }, renderTestPieInput);
    componentStringWithSlots = addSlotsToComponent(testComponent.renderedString, { trailingCharacter: true });

    propKeyValues = `assistiveText: ${testComponent.propValues.value}, value: ${testComponent.propValues.value}`;

    await mount(
        WebComponentTestWrapper,
        {
            props: { propKeyValues },
            slots: {
                component: componentStringWithSlots.trim(),
            },
        },
    );

    await percySnapshot(page, 'PIE Input - Statuses and assistive text', percyWidths);
});
