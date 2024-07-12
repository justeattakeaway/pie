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
import { setRTL } from '@justeattakeaway/pie-webc-testing/src/helpers/set-rtl-direction.ts';
import { PieTextInput } from '../../src/index.ts';

// Renders a <pie-text-input> HTML string with the given prop values
type TextInputSlotOptions = {
    leadingIcon?: boolean;
    trailingIcon?: boolean;
    leadingCharacter?: boolean;
    trailingCharacter?: boolean;
};

const renderTestPieTextInput = (propVals: WebComponentPropValues) => {
    let attributes = '';

    if (propVals.type) attributes += ` type="${propVals.type}"`;
    if (propVals.size) attributes += ` size="${propVals.size}"`;
    if (propVals.placeholder) attributes += ` placeholder="${propVals.placeholder}"`;
    if (propVals.value) attributes += ` value="${propVals.value}"`;
    if (propVals.status) attributes += ` status="${propVals.status}"`;
    if (propVals.assistiveText) attributes += ` assistiveText="${propVals.assistiveText}"`;
    if (propVals.disabled) attributes += ' disabled';
    if (propVals.readonly) attributes += ' readonly';

    return `<pie-text-input${attributes}></pie-text-input>`;
};

// Adds any slots to the component HTML string
const addSlotsToComponent = (component: string, slotOptions: TextInputSlotOptions) => {
    let slots = '';

    if (slotOptions.leadingIcon) slots += '<icon-placeholder slot="leadingIcon"></icon-placeholder>';
    if (slotOptions.trailingIcon) slots += '<icon-placeholder slot="trailingIcon"></icon-placeholder>';
    if (slotOptions.leadingCharacter) slots += '<span slot="leadingText">#</span>';
    if (slotOptions.trailingCharacter) slots += '<span slot="trailingText">#</span>';

    // add slots between > and </pie-text-input>
    return component.replace('></pie-text-input>', `>${slots}</pie-text-input>`);
};

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the input component is registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const textInputComponent = await mount(PieTextInput);
    await textInputComponent.unmount();

    const iconComponent = await mount(IconPlaceholder);
    await iconComponent.unmount();

    const assistiveTextComponent = await mount(PieAssistiveText);
    await assistiveTextComponent.unmount();
});

test('Size variants with value and placeholder', async ({ mount, page }) => {
    const sizeVariants = ['small', 'medium', 'large'];
    const value = 'String';
    const placeholder = 'Placeholder';

    // eslint-disable-next-line no-restricted-syntax
    for (const size of sizeVariants) {
        let testComponent: WebComponentTestInput = createTestWebComponent({ size, value }, renderTestPieTextInput);
        let propKeyValues = `size: ${testComponent.propValues.size}, value: ${testComponent.propValues.value}`;

        // eslint-disable-next-line no-await-in-loop
        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );

        testComponent = createTestWebComponent({ size, placeholder }, renderTestPieTextInput);
        propKeyValues = `size: ${testComponent.propValues.size}, placeholder: ${testComponent.propValues.placeholder}`;

        // eslint-disable-next-line no-await-in-loop
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

    await percySnapshot(page, 'PIE Text Input - Size variants with value and placeholder', percyWidths);
});

const readingDirections = ['LTR', 'RTL'];

// eslint-disable-next-line no-restricted-syntax
for (const dir of readingDirections) {
    test(`Assistive text and statuses - ${dir}`, async ({ mount, page }) => {
        if (dir === 'RTL') {
            setRTL(page);
        }

        // Assistive text with no status
        let testComponent: WebComponentTestInput = createTestWebComponent({ assistiveText: 'Assistive text', value: 'String' }, renderTestPieTextInput);
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
        testComponent = createTestWebComponent({ assistiveText: 'Error text', value: 'String', status: 'error' }, renderTestPieTextInput);
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
        testComponent = createTestWebComponent({ value: 'String', status: 'error' }, renderTestPieTextInput);
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
        testComponent = createTestWebComponent({ assistiveText: 'Success text', value: 'String', status: 'success' }, renderTestPieTextInput);
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

        await percySnapshot(page, `PIE Text Input - Assistive text and statuses - ${dir}`, percyWidths);
    });
}

// eslint-disable-next-line no-restricted-syntax
for (const dir of readingDirections) {
    test(`Content and slots - ${dir}`, async ({ mount, page }) => {
        if (dir === 'RTL') {
            setRTL(page);
        }

        // Trailing + leading icon
        let testComponent: WebComponentTestInput = createTestWebComponent({ value: 'String' }, renderTestPieTextInput);
        let componentStringWithSlots = addSlotsToComponent(testComponent.renderedString, { leadingIcon: true, trailingIcon: true });

        let propKeyValues = `slots: Trailing + Leading Icon, value: ${testComponent.propValues.value}`;

        // eslint-disable-next-line no-await-in-loop
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
        testComponent = createTestWebComponent({ value: 'String' }, renderTestPieTextInput);
        componentStringWithSlots = addSlotsToComponent(testComponent.renderedString, { leadingIcon: true });

        propKeyValues = `slots: Leading Icon, value: ${testComponent.propValues.value}`;

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
        testComponent = createTestWebComponent({ value: 'String' }, renderTestPieTextInput);
        componentStringWithSlots = addSlotsToComponent(testComponent.renderedString, { trailingIcon: true });

        propKeyValues = `slots: Trailing Icon, value: ${testComponent.propValues.value}`;

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
        testComponent = createTestWebComponent({ value: 'String' }, renderTestPieTextInput);
        componentStringWithSlots = addSlotsToComponent(testComponent.renderedString, { leadingCharacter: true, trailingCharacter: true });

        propKeyValues = `slots: Leading + Trailing Text, value: ${testComponent.propValues.value}`;

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
        testComponent = createTestWebComponent({ value: 'String' }, renderTestPieTextInput);
        componentStringWithSlots = addSlotsToComponent(testComponent.renderedString, { leadingCharacter: true });

        propKeyValues = `slots: Leading Text, value: ${testComponent.propValues.value}`;

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
        testComponent = createTestWebComponent({ value: 'String' }, renderTestPieTextInput);
        componentStringWithSlots = addSlotsToComponent(testComponent.renderedString, { trailingCharacter: true });

        propKeyValues = `slots: Trailing Text, value: ${testComponent.propValues.value}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: componentStringWithSlots.trim(),
                },
            },
        );

        // Leading Icon + Trailing text
        testComponent = createTestWebComponent({ value: 'String' }, renderTestPieTextInput);
        componentStringWithSlots = addSlotsToComponent(testComponent.renderedString, { leadingIcon: true, trailingCharacter: true });

        propKeyValues = `slots: Leading Icon + Trailing Text, value: ${testComponent.propValues.value}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: componentStringWithSlots.trim(),
                },
            },
        );

        // Leading text + Trailing icon
        testComponent = createTestWebComponent({ value: 'String' }, renderTestPieTextInput);
        componentStringWithSlots = addSlotsToComponent(testComponent.renderedString, { leadingCharacter: true, trailingIcon: true });

        propKeyValues = `slots: Leading Text + Trailing Icon, value: ${testComponent.propValues.value}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: componentStringWithSlots.trim(),
                },
            },
        );

        // Disabled + Leading Icon + Trailing text
        testComponent = createTestWebComponent({
            value: 'String',
            disabled: true,
        }, renderTestPieTextInput);

        componentStringWithSlots = addSlotsToComponent(testComponent.renderedString, { leadingIcon: true, trailingCharacter: true });

        propKeyValues = `slots: Leading Icon + Trailing Text, disabled: ${testComponent.propValues.disabled}, value: ${testComponent.propValues.value}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: componentStringWithSlots.trim(),
                },
            },
        );

        // Disabled placeholder
        testComponent = createTestWebComponent({
            disabled: true,
            placeholder: 'Placeholder',
        }, renderTestPieTextInput);

        propKeyValues = `disabled: ${testComponent.propValues.disabled}, placeholder: ${testComponent.propValues.placeholder}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );

        // Readonly + Leading Icon + Trailing text
        testComponent = createTestWebComponent({
            value: 'String',
            readonly: true,
        }, renderTestPieTextInput);

        componentStringWithSlots = addSlotsToComponent(testComponent.renderedString, { leadingIcon: true, trailingCharacter: true });

        propKeyValues = `slots: Leading Icon + Trailing Text, readonly: ${testComponent.propValues.readonly}, value: ${testComponent.propValues.value}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: componentStringWithSlots.trim(),
                },
            },
        );

        // Readonly placeholder
        testComponent = createTestWebComponent({
            readonly: true,
            placeholder: 'Placeholder',
        }, renderTestPieTextInput);

        propKeyValues = `readonly: ${testComponent.propValues.readonly}, placeholder: ${testComponent.propValues.placeholder}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );

        // Disabled and readonly + value
        testComponent = createTestWebComponent({
            disabled: true,
            readonly: true,
            value: 'String',
        }, renderTestPieTextInput);

        propKeyValues = `disabled: ${testComponent.propValues.disabled}, readonly: ${testComponent.propValues.readonly}, value: ${testComponent.propValues.value}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );

        // Disabled and readonly + placeholder
        testComponent = createTestWebComponent({
            disabled: true,
            readonly: true,
            placeholder: 'Placeholder',
        }, renderTestPieTextInput);

        propKeyValues = `disabled: ${testComponent.propValues.disabled}, readonly: ${testComponent.propValues.readonly}, placeholder: ${testComponent.propValues.placeholder}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );

        // Password
        testComponent = createTestWebComponent({
            type: 'password',
            value: 'password',
        }, renderTestPieTextInput);

        propKeyValues = `type: ${testComponent.propValues.type}, value: ${testComponent.propValues.value}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );

        // Long content
        testComponent = createTestWebComponent({
            value: 'this is a wonderfully long string that should definitely be longer than the width of the input. If not, here is some extra text to really push it over the edge. This is a test to see how the input handles long strings.',
        }, renderTestPieTextInput);

        propKeyValues = 'value: SUPER LONG STRING';

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );

        await percySnapshot(page, `PIE Text Input - Content and Slots - ${dir}`, percyWidths);
    });
}
