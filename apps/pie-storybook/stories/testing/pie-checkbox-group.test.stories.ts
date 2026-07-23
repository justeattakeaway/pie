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

// `preChecked` ticks a non-first row (Pepperoni) so the visual snapshot captures a checked row. The
// behaviour tests use the unchecked variant so click assertions start from a known clean state
// (clicking any row is a real toggle).
const buildListItemsTemplate = (preChecked = false) => {
    function onChange () {
        console.info(EXPECTED_CHANGE_EVENT_MESSAGE);
    }

    return html`
        <style>
            /* Set on the item directly (a value inherited from the group cannot override the item's :host default). */
            pie-list-item { --list-item-inline-padding: var(--dt-spacing-e); }
        </style>
        <pie-checkbox-group data-test-id="pie-checkbox-group" name="toppings" @change=${onChange}>
            <!-- item-1: secondary AND meta text (combined into aria-description) -->
            <pie-list-item .selectionType=${'checkbox'} data-test-id="item-1" primaryText="Cheese" secondaryText="Extra mature" metaText="Free">
                <pie-checkbox slot="leading" data-test-id="checkbox-1" name="cheese" value="cheese"></pie-checkbox>
            </pie-list-item>
            <!-- item-2: secondary text only -->
            <pie-list-item .selectionType=${'checkbox'} data-test-id="item-2" primaryText="Pepperoni" secondaryText="Spicy">
                <pie-checkbox slot="leading" data-test-id="checkbox-2" name="pepperoni" value="pepperoni" ?checked=${preChecked}></pie-checkbox>
            </pie-list-item>
            <!-- item-3: neither secondary nor meta (no aria-description); a disabled row (both the
                 item and its checkbox are disabled) -->
            <pie-list-item .selectionType=${'checkbox'} disabled data-test-id="item-3" primaryText="Mushrooms">
                <pie-checkbox slot="leading" data-test-id="checkbox-3" name="mushrooms" value="mushrooms" disabled></pie-checkbox>
            </pie-list-item>
            <!-- item-4: meta text only -->
            <pie-list-item .selectionType=${'checkbox'} data-test-id="item-4" primaryText="Olives" metaText="£0.50">
                <pie-checkbox slot="leading" data-test-id="checkbox-4" name="olives" value="olives"></pie-checkbox>
            </pie-list-item>
        </pie-checkbox-group>
    `;
};

// Unchecked: consumed by the component behaviour tests.
const WithListItemsTemplate = () => buildListItemsTemplate();
// A non-first row (Pepperoni) pre-checked: consumed by the visual snapshot to capture the checked state.
const WithListItemsCheckedTemplate = () => buildListItemsTemplate(true);

const WithListItemsGroupDisabledTemplate = () => html`
        <style>
            /* Set on the item directly (a value inherited from the group cannot override the item's :host default). */
            pie-list-item { --list-item-inline-padding: var(--dt-spacing-e); }
        </style>
        <pie-checkbox-group data-test-id="pie-checkbox-group" name="toppings" disabled>
            <pie-list-item .selectionType=${'checkbox'} data-test-id="item-1" primaryText="Cheese" secondaryText="Extra mature" metaText="Free">
                <pie-checkbox slot="leading" data-test-id="checkbox-1" name="cheese" value="cheese"></pie-checkbox>
            </pie-list-item>
            <pie-list-item .selectionType=${'checkbox'} data-test-id="item-2" primaryText="Pepperoni" secondaryText="Spicy">
                <pie-checkbox slot="leading" data-test-id="checkbox-2" name="pepperoni" value="pepperoni"></pie-checkbox>
            </pie-list-item>
            <pie-list-item .selectionType=${'checkbox'} data-test-id="item-3" primaryText="Mushrooms">
                <pie-checkbox slot="leading" data-test-id="checkbox-3" name="mushrooms" value="mushrooms"></pie-checkbox>
            </pie-list-item>
            <pie-list-item .selectionType=${'checkbox'} data-test-id="item-4" primaryText="Olives" metaText="£0.50">
                <pie-checkbox slot="leading" data-test-id="checkbox-4" name="olives" value="olives"></pie-checkbox>
            </pie-list-item>
        </pie-checkbox-group>
    `;

export const Default = createStory<CheckboxGroupProps>(DefaultTemplate, defaultArgs)();
export const DisabledSlottedCheckbox = createStory<CheckboxGroupProps>(DisabledSlottedCheckboxTemplate, defaultArgs)();
export const Variations = createVariantStory<CheckboxGroupProps>(VariationsTemplate, propsMatrix);
export const WithListItems = createStory<CheckboxGroupProps>(WithListItemsTemplate, defaultArgs)();
export const WithListItemsChecked = createStory<CheckboxGroupProps>(WithListItemsCheckedTemplate, defaultArgs)();
export const WithListItemsGroupDisabled = createStory<CheckboxGroupProps>(WithListItemsGroupDisabledTemplate, defaultArgs)();
