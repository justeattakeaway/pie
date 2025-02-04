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

import { createStory, type TemplateFunction } from '../../utilities';

// Extending the props type definition to include storybook specific properties for controls
type TextInputProps = TextInputPropsBase & {
    leadingSlot: keyof typeof leadingSlotOptions;
    trailingSlot: keyof typeof trailingSlotOptions;
};

type TextInputStoryMeta = Meta<TextInputProps>;

const defaultArgs: TextInputProps = {
    ...defaultProps,
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
            @change="${onChange}"
            data-test-id="pie-text-input-container">
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
