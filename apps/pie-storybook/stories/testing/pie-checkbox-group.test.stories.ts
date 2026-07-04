import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/checkbox-group';
import { type CheckboxGroupProps as CheckboxGroupPropsBase, defaultProps, statusTypes } from '@justeattakeaway/pie-webc/components/checkbox-group';
import '@justeattakeaway/pie-webc/components/link';
import '@justeattakeaway/pie-webc/components/checkbox';
import '@justeattakeaway/pie-webc/components/form-label';
import '@justeattakeaway/pie-webc/components/list-item';

import { createStory, createVariantStory } from '../../utilities';

// Extending the props type definition to include storybook specific properties for controls
type CheckboxGroupProps = CheckboxGroupPropsBase & {
    labelSlot: keyof typeof labelSlotOptions;
};

type CheckboxGroupStoryMeta = Meta<CheckboxGroupProps>;

const defaultArgs: CheckboxGroupProps = {
    ...defaultProps,
    labelSlot: 'None',
};

const labelSlotOptions = {
    None: nothing,
    Label: html`<pie-form-label slot="label">Checkbox Group Label</pie-form-label>`,
};

const checkboxGroupStoryMeta: CheckboxGroupStoryMeta = {
    title: 'Checkbox Group',
    component: 'pie-checkbox-group',
    argTypes: {
        name: {
            control: 'text',
        },
        labelSlot: {
            name: 'Label Slot',
            options: Object.keys(labelSlotOptions),
            control: 'select',
            mapping: labelSlotOptions,
        },
        isInline: {
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.isInline,
            },
        },
        status: {
            control: 'select',
            options: statusTypes,
            defaultValue: {
                summary: defaultProps.status,
            },
        },
        disabled: {
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.disabled,
            },
        },
        assistiveText: {
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
    },
    args: defaultArgs,
};

export default checkboxGroupStoryMeta;

const DefaultTemplate = ({
    name,
    isInline,
    assistiveText,
    status,
    disabled,
    labelSlot,
}: CheckboxGroupProps) => html`
        <div style="max-width: 400px">
            <pie-checkbox-group
                data-test-id="pie-checkbox-group"
                name="${ifDefined(name)}"
                assistiveText="${ifDefined(assistiveText)}"
                isInline=${isInline}
                status=${ifDefined(status)}
                ?disabled="${disabled}">
                ${labelSlot}
                <pie-checkbox name="checkbox-one">checkbox 1</pie-checkbox>
                <pie-checkbox name="checkbox-two">checkbox 2</pie-checkbox>
                <pie-checkbox name="checkbox-three">checkbox 3 longer label</pie-checkbox>
                <pie-checkbox name="checkbox-four">checkbox 4</pie-checkbox>
                <pie-checkbox name="checkbox-five">checkbox 5 even longer label: Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.</pie-checkbox>
                <pie-checkbox name="checkbox-six">checkbox 6</pie-checkbox>
            </pie-checkbox-group>
        </div>
    `;

const DisabledSlottedCheckboxTemplate = ({
    disabled,
}: CheckboxGroupProps) => html`
  <div style="max-width: 400px">
      <pie-checkbox-group
          data-test-id="pie-checkbox-group"
          ?disabled="${disabled}">
          <pie-checkbox name="checkbox-one" disabled>checkbox 1</pie-checkbox>
          <pie-checkbox name="checkbox-two">checkbox 2</pie-checkbox>
      </pie-checkbox-group>
  </div>
`;

const VariationsTemplate = ({
    status,
    isInline,
    disabled,
    labelSlot,
    assistiveText,
}: CheckboxGroupProps) => html`
  <div style="max-width: 400px">
    <pie-checkbox-group
      data-test-id="pie-checkbox-group"
      isInline=${isInline}
      assistiveText=${ifDefined(assistiveText)}
      status=${ifDefined(status)}
      ?disabled="${disabled}">
      ${labelSlot}
      <pie-checkbox name="checkbox-one">Label</pie-checkbox>
      <pie-checkbox checked name="checkbox-two">Label</pie-checkbox>
      <pie-checkbox name="checkbox-three">Label</pie-checkbox>
    </pie-checkbox-group>
  </div>
`;

const propsMatrix : Partial<Record<keyof CheckboxGroupProps, unknown[]>> = {
    assistiveText: ['Assistive Text', ''],
    status: [...statusTypes],
    isInline: [true, false],
    disabled: [true, false],
    labelSlot: [labelSlotOptions.None, labelSlotOptions.Label],
};

const EXPECTED_CHANGE_EVENT_MESSAGE = 'Change event dispatched';

const WithListItemsTemplate = () => {
    function onChange () {
        console.info(EXPECTED_CHANGE_EVENT_MESSAGE);
    }

    return html`
        <pie-checkbox-group data-test-id="pie-checkbox-group" name="toppings" @change=${onChange}>
            <pie-list-item selection-type="checkbox" data-test-id="item-1" primaryText="Cheese" secondaryText="Extra mature" metaText="Free">
                <pie-checkbox slot="leading" data-test-id="checkbox-1" name="cheese"></pie-checkbox>
            </pie-list-item>
            <pie-list-item selection-type="checkbox" data-test-id="item-2" primaryText="Pepperoni" secondaryText="Spicy">
                <pie-checkbox slot="leading" data-test-id="checkbox-2" name="pepperoni"></pie-checkbox>
            </pie-list-item>
            <pie-list-item selection-type="checkbox" data-test-id="item-3" primaryText="Mushrooms">
                <pie-checkbox slot="leading" data-test-id="checkbox-3" name="mushrooms" disabled></pie-checkbox>
            </pie-list-item>
            <pie-list-item selection-type="checkbox" data-test-id="item-4" primaryText="Olives" metaText="£0.50">
                <pie-checkbox slot="leading" data-test-id="checkbox-4" name="olives"></pie-checkbox>
            </pie-list-item>
        </pie-checkbox-group>
    `;
};

const WithListItemsGroupDisabledTemplate = () => html`
        <pie-checkbox-group data-test-id="pie-checkbox-group" name="toppings" disabled>
            <pie-list-item selection-type="checkbox" data-test-id="item-1" primaryText="Cheese" secondaryText="Extra mature" metaText="Free">
                <pie-checkbox slot="leading" data-test-id="checkbox-1" name="cheese"></pie-checkbox>
            </pie-list-item>
            <pie-list-item selection-type="checkbox" data-test-id="item-2" primaryText="Pepperoni" secondaryText="Spicy">
                <pie-checkbox slot="leading" data-test-id="checkbox-2" name="pepperoni"></pie-checkbox>
            </pie-list-item>
            <pie-list-item selection-type="checkbox" data-test-id="item-3" primaryText="Mushrooms">
                <pie-checkbox slot="leading" data-test-id="checkbox-3" name="mushrooms"></pie-checkbox>
            </pie-list-item>
            <pie-list-item selection-type="checkbox" data-test-id="item-4" primaryText="Olives" metaText="£0.50">
                <pie-checkbox slot="leading" data-test-id="checkbox-4" name="olives"></pie-checkbox>
            </pie-list-item>
        </pie-checkbox-group>
    `;

export const Default = createStory<CheckboxGroupProps>(DefaultTemplate, defaultArgs)();
export const DisabledSlottedCheckbox = createStory<CheckboxGroupProps>(DisabledSlottedCheckboxTemplate, defaultArgs)();
export const Variations = createVariantStory<CheckboxGroupProps>(VariationsTemplate, propsMatrix);
export const WithListItems = createStory<CheckboxGroupProps>(WithListItemsTemplate, defaultArgs)();
export const WithListItemsGroupDisabled = createStory<CheckboxGroupProps>(WithListItemsGroupDisabledTemplate, defaultArgs)();
