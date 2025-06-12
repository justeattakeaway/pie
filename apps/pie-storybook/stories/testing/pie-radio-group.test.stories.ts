import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import { EXPECTED_CHANGE_EVENT_MESSAGE } from '@justeattakeaway/pie-radio-group/test/helpers/constants.ts';
import '@justeattakeaway/pie-radio-group';
import {
    defaultProps,
    statusTypes,
    type RadioGroupProps as RadioGroupPropsBase,
} from '@justeattakeaway/pie-radio-group';
import '@justeattakeaway/pie-radio';
import '@justeattakeaway/pie-form-label';
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-icons-webc/dist/IconPlusCircle';

import { createStory, createVariantStory, type PropDisplayOptions } from '../../utilities';

type RadioGroupProps = RadioGroupPropsBase & {
    labelSlot: keyof typeof labelSlotOptions;
};

type RadioGroupStoryMeta = Meta<RadioGroupProps>;

const defaultArgs: RadioGroupProps = {
    ...defaultProps,
    labelSlot: 'None',
};

const labelSlotOptions = {
    None: nothing,
    Label: html`<pie-form-label slot="label">Radio Group Label</pie-form-label>`,
};

const radioGroupStoryMeta: RadioGroupStoryMeta = {
    title: 'Radio Group',
    component: 'pie-radio-group',
    argTypes: {
        name: {
            description: 'The name associated with the group.',
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
        disabled: {
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.disabled,
            },
        },
        value: {
            control: 'text',
            defaultValue: {
                summary: defaultArgs.value,
            },
        },
        status: {
            control: 'select',
            options: statusTypes,
            defaultValue: {
                summary: defaultProps.status,
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

export default radioGroupStoryMeta;

const DefaultTemplate = ({
    name,
    value,
    isInline,
    disabled,
    labelSlot,
    assistiveText,
    status,
}: RadioGroupProps) => {
    function onChange (event: CustomEvent) {
        const selectedRadioElement = event.target as HTMLInputElement;
        action('change')(selectedRadioElement.value);
        console.info(EXPECTED_CHANGE_EVENT_MESSAGE);
    }

    return html`
      <div style="max-width: 400px">
          <pie-radio-group
              data-test-id="pie-radio-group"
              name="${ifDefined(name)}"
              .value=${ifDefined(value)}
              ?isInline=${isInline}
              ?disabled=${disabled}
              assistiveText="${ifDefined(assistiveText)}"
              status=${ifDefined(status)}
              @change=${onChange}>
                  ${labelSlot}
                  <pie-radio value="radio-one">radio 1</pie-radio>
                  <pie-radio value="radio-two">radio 2</pie-radio>
                  <pie-radio value="radio-three">radio 3</pie-radio>
          </pie-radio-group>
      </div>
  `;
};

const DisabledRadioTemplate = () => html`
      <div style="max-width: 400px">
          <pie-radio-group
              data-test-id="pie-radio-group">
                  <pie-radio data-test-id="radio-1" value="radio-one">radio 1</pie-radio>
                  <pie-radio data-test-id="radio-2" disabled value="radio-two">radio 2</pie-radio>
                  <pie-radio data-test-id="radio-3" value="radio-three">radio 3</pie-radio>
                  <pie-radio data-test-id="radio-4" value="radio-four">radio 4</pie-radio>
          </pie-radio-group>
      </div>
  `;

const KeyboardNavigationTemplate = () => html`
    <h2>Radio group 1</h2>
    <p><pie-button size="small-productive" data-test-id="btn-1">Button 1</pie-button></p>
    <pie-radio-group name="radio-group-1" data-test-id="radio-group-1">
        <pie-radio data-test-id="radio-1" value="chinese">Chinese</pie-radio>
        <pie-radio data-test-id="radio-2" value="shawarma">Shawarma</pie-radio>
        <pie-radio data-test-id="radio-3" value="pizza">Pizza</pie-radio>
        <pie-radio data-test-id="radio-4" value="fish-and-chips">Fish and Chips</pie-radio>
        <pie-radio data-test-id="radio-5" value="indian">Indian</pie-radio>
    </pie-radio-group>
    <p><pie-button size="small-productive" variant="secondary" data-test-id="btn-2">Button 2</pie-button></p>

    <h2>Radio group 2</h2>
    <p><pie-button size="small-productive" data-test-id="btn-3">Button 3</pie-button></p>
    <pie-radio-group data-test-id="radio-group-2" value="fish-and-chips">
        <pie-radio data-test-id="radio-6" value="chinese">Chinese</pie-radio>
        <pie-radio data-test-id="radio-7" value="shawarma">Shawarma</pie-radio>
        <pie-radio data-test-id="radio-8" value="pizza">Pizza</pie-radio>
        <pie-radio data-test-id="radio-9" value="fish-and-chips">Fish and Chips</pie-radio>
        <pie-radio data-test-id="radio-10" value="indian">Indian</pie-radio>
    </pie-radio-group>
    <p><pie-button size="small-productive" variant="secondary" data-test-id="btn-4">Button 4</pie-button></p>
    `;

const DynamicSlotsTemplate = () => {
    let counter = 2;

    // Function to dynamically add radio buttons to the radio group
    const onAddButtonClick = () => {
        const radioGroup = document.querySelector('pie-radio-group[data-test-id="radio-group-1"]');

        if (radioGroup) {
            const newRadio = document.createElement('pie-radio');
            newRadio.setAttribute('value', counter.toString());
            newRadio.textContent = `Option ${counter}`;

            radioGroup.appendChild(newRadio);

            counter++;
        }
    };

    return html`
            <pie-radio-group name="radio-group-1" data-test-id="radio-group-1">
                <pie-radio data-test-id="radio-1" value="1">Option 1</pie-radio>
            </pie-radio-group>

            <p>
                <pie-button data-test-id="add-option" iconplacement="leading" @click="${onAddButtonClick}">
                    <icon-plus-circle slot="icon"></icon-plus-circle>
                    Add another option
                </pie-button>
            </p>
        `;
};

export const Default = createStory<RadioGroupProps>(DefaultTemplate, defaultArgs)();
export const DisabledRadio = createStory<RadioGroupProps>(DisabledRadioTemplate, defaultArgs)();
export const KeyboardNavigation = createStory<RadioGroupProps>(KeyboardNavigationTemplate, defaultArgs)();
export const DynamicSlots = createStory<RadioGroupProps>(DynamicSlotsTemplate, defaultArgs)();

const radioGroupPropsMatrix : Partial<Record<keyof RadioGroupProps, unknown[]>> = {
    disabled: [true, false],
    isInline: [true, false],
    status: [...statusTypes],
    labelSlot: ['Label'],
    assistiveText: ['Assistive text', ''],
    value: ['radio-two'],
};

const variantPropDisplayOptions: PropDisplayOptions<RadioGroupProps> = {
    hiddenProps: ['value'],
};
export const Variations = createVariantStory<RadioGroupProps>(DefaultTemplate, radioGroupPropsMatrix, { multiColumn: true, ...variantPropDisplayOptions });
