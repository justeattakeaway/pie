import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import { useArgs as UseArgs } from '@storybook/preview-api';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-text-input';
import {
    type TextInputProps as TextInputPropsBase, types, inputModes, statusTypes, sizes, defaultProps,
} from '@justeattakeaway/pie-text-input';
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-link';
import '@justeattakeaway/pie-form-label';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';
import '@justeattakeaway/pie-icons-webc/dist/IconEmail.js';
import '@justeattakeaway/pie-icons-webc/dist/IconUser.js';

import { createStory, createVariantStory, type TemplateFunction } from '../../utilities';

// Extending the props type definition to include storybook specific properties for controls
type TextInputProps = TextInputPropsBase & {
  leadingSlot: keyof typeof leadingSlotOptions;
  trailingSlot: keyof typeof trailingSlotOptions;
};

type TextInputStoryMeta = Meta<TextInputProps & { showEmailField?: boolean }>;

const defaultArgs: TextInputProps = {
    ...defaultProps,
    leadingSlot: 'None',
    trailingSlot: 'None',
};

const leadingSlotOptions = {
    None: nothing,
    'Icon (Placeholder)': html`<icon-placeholder data-test-id="leadingIcon" slot="leadingIcon"></icon-placeholder>`,
    'Short text (#)': html`<span data-test-id="leadingText" slot="leadingText">#</span>`,
};

const trailingSlotOptions = {
    None: nothing,
    'Icon (Placeholder)': html`<icon-placeholder data-test-id="trailingIcon" slot="trailingIcon"></icon-placeholder>`,
    'Short text (#)': html`<span data-test-id="trailingText" slot="trailingText">#</span>`,
};

const textInputStoryMeta: TextInputStoryMeta = {
    title: 'Text Input',
    component: 'pie-text-input',
    argTypes: {
        type: {
            control: 'select',
            options: types,
            defaultValue: {
                summary: defaultProps.type,
            },
        },
        value: {
            control: 'text',
            defaultValue: {
                summary: defaultProps.value,
            },
        },
        name: {
            control: 'text',
            defaultValue: {
                summary: defaultArgs.name,
            },
        },
        disabled: {
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        pattern: {
            control: 'text',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', neq: 'number' },
        },
        minlength: {
            control: 'number',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', neq: 'number' },
        },
        maxlength: {
            control: 'number',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', neq: 'number' },
        },
        min: {
            control: 'number',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', eq: 'number' },
        },
        max: {
            control: 'number',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', eq: 'number' },
        },
        autocomplete: {
            control: 'text',
            defaultValue: {
                summary: 'off',
            },
        },
        placeholder: {
            control: 'text',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', neq: 'number' },
        },
        step: {
            control: 'text',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', eq: 'number' },
        },
        autoFocus: {
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        inputmode: {
            control: 'select',
            options: inputModes,
            defaultValue: {
                summary: '',
            },
        },
        readonly: {
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        defaultValue: {
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        leadingSlot: {
            name: 'Leading Slot',
            control: 'select',
            options: Object.keys(leadingSlotOptions),
            mapping: leadingSlotOptions,
        },
        trailingSlot: {
            name: 'Trailing Slot',
            control: 'select',
            options: Object.keys(trailingSlotOptions),
            mapping: trailingSlotOptions,
        },
        assistiveText: {
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        status: {
            control: 'select',
            options: statusTypes,
            defaultValue: {
                summary: defaultProps.status,
            },
        },
        size: {
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: defaultProps.size,
            },
        },
        required: {
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        showEmailField: {
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
    },
    args: defaultArgs,
};

const Template = ({
    type,
    value,
    name,
    disabled,
    pattern,
    minlength,
    maxlength,
    min,
    max,
    autocomplete,
    placeholder,
    autoFocus,
    inputmode,
    readonly,
    defaultValue,
    leadingSlot,
    trailingSlot,
    assistiveText,
    status,
    step,
    size,
    required,
}: TextInputProps) => {
    const [, updateArgs] = UseArgs();

    function onInput (event: InputEvent) {
        const inputElement = event.target as HTMLInputElement;
        const outputElement = (document.getElementById('output') as HTMLDivElement);
        updateArgs({ value: inputElement?.value });

        console.info('input event recieved', JSON.stringify(event));

        const currentValue = (event.target as HTMLInputElement).value;
        outputElement.innerText = currentValue;
    }

    function onChange (event: CustomEvent) {
        action('change')({
            detail: event.detail,
        });
        console.info('change event recieved', JSON.stringify(event));
    }

    return html`
        <pie-text-input
            type="${ifDefined(type)}"
            .value="${value}"
            name="${ifDefined(name)}"
            id="${ifDefined(name)}"
            ?disabled="${disabled}"
            pattern="${ifDefined(pattern)}"
            minlength="${ifDefined(minlength)}"
            maxlength="${ifDefined(maxlength)}"
            min="${ifDefined(min)}"
            max="${ifDefined(max)}"
            step="${ifDefined(step)}"
            autocomplete="${ifDefined(autocomplete)}"
            placeholder="${ifDefined(placeholder)}"
            inputmode="${ifDefined(inputmode)}"
            defaultValue="${ifDefined(defaultValue)}"
            ?autoFocus="${autoFocus}"
            ?readonly="${readonly}"
            assistiveText="${ifDefined(assistiveText)}"
            status=${ifDefined(status)}
            size="${ifDefined(size)}"
            ?required="${required}"
            @input="${onInput}"
            @change="${onChange}"
            data-test-id="pie-text-input-container">
                ${leadingSlot}
                ${trailingSlot}
        </pie-text-input>
        <div id="output"></div>
    `;
};

const onSubmit = (event: Event) => {
    event.preventDefault();
    const form = document.querySelector('#testForm') as HTMLFormElement;
    const output = document.querySelector('#formDataOutput') as HTMLDivElement;

    const formData = new FormData(form);
    const formDataObj: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });

    output.innerText = JSON.stringify(formDataObj);
};

const ExampleFormTemplate: TemplateFunction<TextInputProps & { showEmailField?: boolean }> = ({
    defaultValue,
    disabled,
    showEmailField = false,
}: TextInputProps & { showEmailField?: boolean }) => html`
  <form id="testForm" @submit="${onSubmit}">
      <pie-form-label for="username">Username:</pie-form-label>
      <pie-text-input
          class="form-field"
          id="username"
          name="username"
          type="text"
          ?disabled="${disabled}"
          defaultValue="${ifDefined(defaultValue)}"
          data-test-id="pie-text-input-container">
          <icon-user slot="leadingIcon"></icon-user>
      </pie-text-input>
      ${showEmailField ? html`
          <pie-form-label for="email">Email:</pie-form-label>
          <pie-text-input
              class="form-field"
              id="email"
              name="email"
              type="text"
              defaultValue="${ifDefined(defaultValue)}"
              data-test-id="pie-text-input-container">
              <icon-email slot="leadingIcon"></icon-email>
          </pie-text-input>
      ` : nothing}

      <div class="form-btns">
          <pie-button class="form-btn" variant="secondary" type="reset">Reset</pie-button>
          <pie-button class="form-btn" type="submit">Submit</pie-button>
      </div>
  </form>
  <div id="formDataOutput"></div>
`;

const DisabledFieldsetTemplate: TemplateFunction<TextInputProps> = () => html`
    <form id="testForm" @submit="${onSubmit}" action="/foo" method="POST">
      <fieldset disabled>
        <pie-text-input type="text" name="username" value="excluded"></pie-text-input>
      </fieldset>
      <pie-text-input type="text" name="email" value="included@test.com"></pie-text-input>
      <pie-button type="submit">Submit</pie-button>
    </form>
    <div id="formDataOutput"></div>
  `;

export const Default = createStory<TextInputProps>(Template, defaultArgs)();
export const LeadingIcon = createStory<TextInputProps>(Template, { ...defaultArgs, leadingSlot: 'Icon (Placeholder)' })();
export const LeadingText = createStory<TextInputProps>(Template, { ...defaultArgs, leadingSlot: 'Short text (#)' })();
export const TrailingIcon = createStory<TextInputProps>(Template, { ...defaultArgs, trailingSlot: 'Icon (Placeholder)' })();
export const TrailingText = createStory<TextInputProps>(Template, { ...defaultArgs, trailingSlot: 'Short text (#)' })();
export const ExampleForm = createStory<TextInputProps>(ExampleFormTemplate, defaultArgs)();

export const LeadingAndTrailingIcon = createStory<TextInputProps>(Template, { ...defaultArgs, leadingSlot: 'Icon (Placeholder)', trailingSlot: 'Icon (Placeholder)' })();
export const LeadingAndTrailingText = createStory<TextInputProps>(Template, { ...defaultArgs, leadingSlot: 'Short text (#)', trailingSlot: 'Short text (#)' })();

export const DisabledFieldset = createStory<TextInputProps>(DisabledFieldsetTemplate, defaultArgs)();

const sharedTextInputPropsMatrix : Partial<Record<keyof TextInputProps, unknown[]>> = {
    assistiveText: ['', 'assistive text'],
    disabled: [true, false],
    size: [...sizes],
    readonly: [true, false],
    value: ['', 'value'],
    placeholder: ['', 'placeholder'],
    type: ['text', 'password'],
};

const defaultTextInputPropsMatrix : Partial<Record<keyof TextInputProps, unknown[]>> = {
  ...sharedTextInputPropsMatrix,
  status: [statusTypes[0]],
};

const successTextInputPropsMatrix : Partial<Record<keyof TextInputProps, unknown[]>> = {
  ...sharedTextInputPropsMatrix,
  status: [statusTypes[1]],
};

const errorTextInputPropsMatrix : Partial<Record<keyof TextInputProps, unknown[]>> = {
  ...sharedTextInputPropsMatrix,
  status: [statusTypes[2]],
};

export const DefaultVariations = createVariantStory<TextInputProps>(Template, defaultTextInputPropsMatrix, { multiColumn: true });
export const SuccessVariations = createVariantStory<TextInputProps>(Template, successTextInputPropsMatrix, { multiColumn: true });
export const ErrorVariations = createVariantStory<TextInputProps>(Template, errorTextInputPropsMatrix, { multiColumn: true });
export default textInputStoryMeta;

