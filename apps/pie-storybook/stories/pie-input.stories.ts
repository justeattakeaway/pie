import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import { useArgs as UseArgs } from '@storybook/preview-api';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-input';
import {
    types, inputModes, statusTypes, InputProps as InputPropsBase,
} from '@justeattakeaway/pie-input';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory, type TemplateFunction } from '../utilities';
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-icons-webc/IconPlaceholder';

// Extending the props type definition to include storybook specific properties for controls
type InputProps = InputPropsBase & {
    leadingSlot: typeof slotOptions[number];
    trailingSlot: typeof slotOptions[number];
};

type InputStoryMeta = StoryMeta<InputProps>;

const defaultArgs: InputProps = {
    type: 'text',
    value: '',
    name: 'testName',
    disabled: false,
    autocomplete: 'off',
    autoFocus: false,
    leadingSlot: 'None',
    trailingSlot: 'None',
    assistiveText: '',
};

const slotOptions = ['Icon (Placeholder)', 'Short text (#)', 'None'] as const;

const inputStoryMeta: InputStoryMeta = {
    title: 'Input',
    component: 'pie-input',
    argTypes: {
        type: {
            description: 'The type of HTML input to render.',
            control: 'select',
            options: types,
            defaultValue: {
                summary: 'text',
            },
        },
        value: {
            description: 'The value of the input (used as a key/value pair in HTML forms with `name`).',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        name: {
            description: 'The name of the input (used as a key/value pair with `value`). This is required in order to work properly with forms.',
            control: 'text',
            defaultValue: {
                summary: 'testName',
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
            description: 'An icon or short text to display at the start of the input. <br><b>*Not a component Prop</b>',
            control: 'select',
            options: slotOptions,
        },
        trailingSlot: {
            description: 'An icon or short text to display at the end of the input. <br><b>*Not a component Prop</b>',
            control: 'select',
            options: slotOptions,
        },
        assistiveText: {
            description: 'An optional assistive text to display below the input element.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        status: {
            description: 'Sets the status of the input component / assistive text.',
            control: 'select',
            options: [undefined, ...statusTypes],
            defaultValue: {
                summary: undefined,
            },
        },
    },
    args: defaultArgs,
    parameters: {
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
}: InputProps) => {
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

    function renderLeadingOrTrailingSlot (slotName: 'leading' | 'trailing', slotValue: typeof slotOptions[number]) {
        if (slotValue === slotOptions[0]) {
            return html`<icon-placeholder slot="${slotName}"></icon-placeholder>`;
        }

        if (slotValue === slotOptions[1]) {
            return html`<span slot="${slotName}">#</span>`;
        }

        return nothing;
    }

    return html`
        <pie-input
            type="${ifDefined(type)}"
            .value="${value}"
            name="${ifDefined(name)}"
            ?disabled="${disabled}"
            pattern="${ifDefined(pattern)}"
            minlength="${ifDefined(minlength)}"
            maxlength="${ifDefined(maxlength)}"
            autocomplete="${ifDefined(autocomplete)}"
            placeholder="${ifDefined(placeholder)}"
            inputmode="${ifDefined(inputmode)}"
            defaultValue="${ifDefined(defaultValue)}"
            ?autoFocus="${autoFocus}"
            ?readonly="${readonly}"
            assistiveText="${ifDefined(assistiveText)}"
            status=${ifDefined(status)}
            @input="${onInput}"
            @change="${onChange}">
            ${renderLeadingOrTrailingSlot('leading', leadingSlot)}
            ${renderLeadingOrTrailingSlot('trailing', trailingSlot)}
        </pie-input>
    `;
};

const FormTemplate: TemplateFunction<InputProps> = (props: InputProps) => {
    function onSubmit (event: SubmitEvent) {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const data: { [key: string]: string } = {};
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        action('submit')({
            ...data,
        });
    }

    return html`
        <h2>Fake form</h2>
        <form id="testForm" @submit="${onSubmit}">
            <section>
                <h2>Contact information</h2>
                <p>
                    <label for="name">
                        <span>Name: </span>
                    </label>
                    ${Template({ ...props, type: 'text' })}
                </p>
            </section>
            <section style="display: flex; gap: var(--dt-spacing-a); justify-content: flex-end; flex-wrap: wrap; margin-top: var(--dt-spacing-b);">
                <pie-button type="reset" variant="secondary">Reset</pie-button>
                <pie-button type="submit" variant="primary">Submit</pie-button>
            </section>
        </form>
    `;
};

const createInputStoryWithForm = createStory<InputProps>(FormTemplate, defaultArgs);

export const Default = createStory<InputProps>(Template, defaultArgs)();
export const FormIntegration = createInputStoryWithForm();

export default inputStoryMeta;
