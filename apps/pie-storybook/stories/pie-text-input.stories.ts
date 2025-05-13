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
import '@justeattakeaway/pie-icons-webc/dist/IconLaptop.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPhone.js';
import '@justeattakeaway/pie-icons-webc/dist/IconUser.js';
import '@justeattakeaway/pie-icons-webc/dist/IconNumberSymbol.js';
import '@justeattakeaway/pie-icons-webc/dist/IconKey.js';

import { createStory, type TemplateFunction } from '../utilities';

// Extending the props type definition to include storybook specific properties for controls
type TextInputProps = TextInputPropsBase & {
    leadingSlot: keyof typeof leadingSlotOptions;
    trailingSlot: keyof typeof trailingSlotOptions;
};

type TextInputStoryMeta = Meta<TextInputProps>;

const defaultArgs: TextInputProps = {
    ...defaultProps,
    name: 'testName',
    leadingSlot: 'None',
    trailingSlot: 'None',
};

const leadingSlotOptions = {
    None: nothing,
    'Icon (Placeholder)': html`<icon-placeholder slot="leadingIcon"></icon-placeholder>`,
    'Short text (#)': html`<span slot="leadingText">#</span>`,
};

const trailingSlotOptions = {
    None: nothing,
    'Icon (Placeholder)': html`<icon-placeholder slot="trailingIcon"></icon-placeholder>`,
    'Short text (#)': html`<span slot="trailingText">#</span>`,
};

const textInputStoryMeta: TextInputStoryMeta = {
    title: 'Components/Text Input',
    component: 'pie-text-input',
    argTypes: {
        type: {
            description: 'The type of HTML input to render.',
            control: 'select',
            options: types,
            defaultValue: {
                summary: defaultProps.type,
            },
        },
        value: {
            description: 'The value of the input (used as a key/value pair in HTML forms with `name`).',
            control: 'text',
            defaultValue: {
                summary: defaultProps.value,
            },
        },
        name: {
            description: 'The name of the input (used as a key/value pair with `value`). This is required in order to work properly with forms.',
            control: 'text',
            defaultValue: {
                summary: defaultArgs.name,
            },
        },
        disabled: {
            description: 'If true, disables the input field.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        pattern: {
            description: 'Specifies a regular expression the form control\'s value should match.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', neq: 'number' },
        },
        minlength: {
            description: 'Minimum length (number of characters) of value. Only applies to types: `text`, `url`, `tel`, `email`, and `password`.',
            control: 'number',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', neq: 'number' },
        },
        maxlength: {
            description: 'Maximum length (number of characters) of value. Only applies to types: `text`, `url`, `tel`, `email`, and `password`.',
            control: 'number',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', neq: 'number' },
        },
        min: {
            description: 'The minimum value of the input. Only applies when type is `number`. If the value provided is lower, the input is invalid.',
            control: 'number',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', eq: 'number' },
        },
        max: {
            description: 'The maximum value of the input. Only applies when type is `number`. If the value provided is higher, the input is invalid.',
            control: 'number',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', eq: 'number' },
        },
        autocomplete: {
            description: 'Allows the user to enable or disable autocomplete functionality on the input field. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for more information and values.',
            control: 'text',
            defaultValue: {
                summary: 'off',
            },
        },
        placeholder: {
            description: 'The placeholder text to display when the input is empty. Only applies to types: `text`, `url`, `tel`, `email`, and `password`.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', neq: 'number' },
        },
        step: {
            description: 'An optional amount that value should be incremented or decremented by when using the up and down arrows in the input. Only applies when type is `number`.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
            if: { arg: 'type', eq: 'number' },
        },
        autoFocus: {
            description: 'If true, the input will be focused on the first render. No more than one element in the document or dialog may have the autofocus attribute. If applied to multiple elements the first one will receive focus. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus) for more information.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        inputmode: {
            description: 'Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#inputmode) for more information.',
            control: 'select',
            options: inputModes,
            defaultValue: {
                summary: '',
            },
        },
        readonly: {
            description: 'When true, the user cannot edit the control. Not the same as disabled. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        defaultValue: {
            description: 'An optional default value to use when the input is reset.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        leadingSlot: {
            name: 'Leading Slot',
            description: '<b>**Not a component Prop</b><br><br>Use the `leadingText` slot for alphanumeric content (wrap the text in a `<span>`) or `leadingIcon` for icons.',
            control: 'select',
            options: Object.keys(leadingSlotOptions),
            mapping: leadingSlotOptions,
        },
        trailingSlot: {
            name: 'Trailing Slot',
            description: '<b>**Not a component Prop</b><br><br>Use the `trailingText` slot for alphanumeric content (wrap the text in a `<span>`) or `trailingIcon` for icons.',
            control: 'select',
            options: Object.keys(trailingSlotOptions),
            mapping: trailingSlotOptions,
        },
        assistiveText: {
            description: 'An optional assistive text to display below the input element. Must be provided when the status is success or error.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        status: {
            description: 'The status of the input component / assistive text. Can be default, success or error.',
            control: 'select',
            options: statusTypes,
            defaultValue: {
                summary: defaultProps.status,
            },
        },
        size: {
            description: 'The size of the input field. Can be `small`, `medium`, or `large`. Defaults to `medium`.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: defaultProps.size,
            },
        },
        required: {
            description: 'If true, the input is required to have a value before submitting the form. If there is no value, then the component validity state will be invalid.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
    },
    args: defaultArgs,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: '',
        },
    },
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
        updateArgs({ value: inputElement?.value });

        action('input')({
            data: event.data,
            value: inputElement.value,
        });
    }

    function onChange (event: CustomEvent) {
        action('change')({
            detail: event.detail,
        });
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
            @change="${onChange}">
                ${leadingSlot}
                ${trailingSlot}
        </pie-text-input>
    `;
};

const WithLabelTemplate: TemplateFunction<TextInputProps> = (props: TextInputProps) => html`
        <p>Please note, the label is a separate component. See <pie-link href="/?path=/story/form-label">pie-form-label</pie-link>.</p>
        <pie-form-label for="${ifDefined(props.name)}">Label</pie-form-label>
        ${Template(props)}
    `;

const ExampleFormTemplate: TemplateFunction<TextInputProps> = () => html`
    <style>
        .form {
            display: flex;
            flex-direction: column;
            padding: var(--dt-spacing-d);
        }

        .form-field {
            display: block;
            margin-bottom: var(--dt-spacing-d);
        }

        .form-field[type="number"],
        .form-field[type="tel"] {
            width: 25ch;
        }

        .form-btns {
            margin-top: var(--dt-spacing-c);
            display: flex;
            gap: var(--dt-spacing-a)
        }

        .form-btns > .form-btn:first-of-type {
            margin-left: auto;
        }
    </style>
    <form class="form">
        <pie-form-label for="username">Username:</pie-form-label>
        <pie-text-input class="form-field" id="username" name="username" type="text">
            <icon-user slot="leadingIcon"></icon-user>
        </pie-text-input>

        <pie-form-label for="email">Email:</pie-form-label>
        <pie-text-input class="form-field" id="email" name="email" type="email">
            <icon-email slot="leadingIcon"></icon-email>
        </pie-text-input>

        <pie-form-label for="url">Website:</pie-form-label>
        <pie-text-input class="form-field" id="url" name="url" type="url">
            <icon-laptop slot="leadingIcon"></icon-laptop>
        </pie-text-input>

        <pie-form-label for="password">Password:</pie-form-label>
        <pie-text-input class="form-field" id="password" name="password" type="password">
            <icon-key slot="leadingIcon"></icon-key>
        </pie-text-input>

        <pie-form-label for="favouriteNumber">Favourite Number:</pie-form-label>
        <pie-text-input class="form-field" id="favouriteNumber" name="favouriteNumber" type="number" min="-5" max="200" assistive-text="" state="">
            <icon-number-symbol slot="leadingIcon"></icon-number-symbol>
        </pie-text-input>

        <pie-form-label for="tel">Telephone:</pie-form-label>
        <pie-text-input class="form-field" id="tel" name="tel" type="tel">
            <icon-phone slot="leadingIcon"></icon-phone>
        </pie-text-input>

        <div class="form-btns">
            <pie-button class="form-btn" variant="secondary" type="reset">Reset</pie-button>
            <pie-button class="form-btn" type="submit">Submit</pie-button>
        </div>
    </form>
`;

const createStoryWithLabel = (props: TextInputProps) => createStory<TextInputProps>(WithLabelTemplate, props);

export const Default = createStory<TextInputProps>(Template, defaultArgs)();
export const Labelled = createStoryWithLabel(defaultArgs)();
export const Numeric = createStory<TextInputProps>(Template, { ...defaultArgs, type: 'number', value: '12345' })();
export const Password = createStory<TextInputProps>(Template, { ...defaultArgs, type: 'password', value: 'password' })();
export const ErrorText = createStory<TextInputProps>(Template, { ...defaultArgs, status: 'error', assistiveText: 'This is an error message' })();
export const LeadingIcon = createStory<TextInputProps>(Template, { ...defaultArgs, leadingSlot: 'Icon (Placeholder)' })();
export const Small = createStory<TextInputProps>(Template, { ...defaultArgs, size: 'small' })();
export const Medium = createStory<TextInputProps>(Template, { ...defaultArgs, size: 'medium' })();
export const Large = createStory<TextInputProps>(Template, { ...defaultArgs, size: 'large' })();
export const ExampleForm = createStory<TextInputProps>(ExampleFormTemplate, defaultArgs)();

export default textInputStoryMeta;
