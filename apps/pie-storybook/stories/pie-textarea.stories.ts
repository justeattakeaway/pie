import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import { useArgs as UseArgs } from '@storybook/preview-api';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-textarea';
import {
    type TextareaProps, defaultProps, resizeModes, sizes, statusTypes,
} from '@justeattakeaway/pie-textarea';
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-form-label';

import { createStory, type TemplateFunction } from '../utilities';

type TextareaStoryMeta = Meta<TextareaProps>;

const defaultArgs: TextareaProps = { ...defaultProps, name: 'testName' };

const Template = ({
    disabled,
    resize,
    size,
    required,
    readonly,
    value,
    defaultValue,
    name,
    autocomplete,
    autoFocus,
    label,
    assistiveText,
    status,
    placeholder,
}: TextareaProps) => {
    const [, updateArgs] = UseArgs();

    function onInput (event: InputEvent) {
        const textareaElement = event.target as HTMLTextAreaElement;
        updateArgs({ value: textareaElement?.value });

        action('input')({
            data: event.data,
            value: textareaElement.value,
        });
    }

    function onChange (event: CustomEvent) {
        action('change')({
            detail: event.detail,
        });
    }

    return html`
        <pie-textarea
            id="${ifDefined(name)}"
            name="${ifDefined(name)}"
            .value="${value}"
            defaultValue="${ifDefined(defaultValue)}"
            ?disabled="${disabled}"
            size="${ifDefined(size)}"
            resize="${ifDefined(resize)}"
            autocomplete="${ifDefined(autocomplete)}"
            placeholder="${ifDefined(placeholder)}"
            ?autoFocus="${autoFocus}"
            ?readonly="${readonly}"
            ?required="${required}"
            label="${ifDefined(label)}"
            @input="${onInput}"
            @change="${onChange}"
            assistiveText="${ifDefined(assistiveText)}"
            status=${ifDefined(status)}>
        </pie-textarea>
    `;
};

const textareaStoryMeta: TextareaStoryMeta = {
    title: 'Textarea',
    component: 'pie-textarea',
    argTypes: {
        disabled: {
            description: 'If true, disables the textarea field.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.disabled,
            },
        },
        size: {
            description: 'The size of the textarea field. Can be `small`, `medium` or `large`. Defaults to `medium`.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: defaultProps.size,
            },
        },
        resize: {
            description: 'Controls the resizing behaviour of the textarea. Can be `auto` or `manual`. Defaults to `auto`.',
            control: 'select',
            options: resizeModes,
            defaultValue: {
                summary: defaultProps.resize,
            },
        },
        assistiveText: {
            description: 'An optional assistive text to display below the textarea element. Must be provided when the status is success or error.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        status: {
            description: 'The status of the textarea component / assistive text. Can be default, success or error.',
            control: 'select',
            options: statusTypes,
            defaultValue: {
                summary: defaultProps.status,
            },
        },
        name: {
            description: 'The name of the textarea (used as a key/value pair with `value`). This is required in order to work properly with forms.',
            control: 'text',
            defaultValue: {
                summary: defaultArgs.name,
            },
        },
        value: {
            description: 'The value of the textarea (used as a key/value pair in HTML forms with `name`).',
            control: 'text',
            defaultValue: {
                summary: defaultProps.value,
            },
        },
        defaultValue: {
            description: 'An optional default value to use when the textarea is reset.',
            control: 'text',
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
        required: {
            description: 'If true, the textarea is required to have a value before submitting the form. If there is no value, then the component validity state will be invalid.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        autoFocus: {
            description: 'If true, the textarea will be focused on the first render. No more than one element in the document or dialog may have the autofocus attribute. If applied to multiple elements the first one will receive focus. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus) for more information.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        autocomplete: {
            description: 'Allows the user to enable or disable autocomplete functionality on the textarea field. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for more information and values.',
            control: 'text',
            defaultValue: {
                summary: 'off',
            },
        },
        label: {
            description: 'The label for the textarea field.',
            control: 'text',
            defaultValue: {
                summary: defaultProps.label,
            },
        },
        placeholder: {
            description: 'The placeholder text to display when the textarea is empty.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/pPSC73rPin4csb8DiK1CRr/branch/aD4m0j97Ruw8Q4S5lED2Bl/%E2%9C%A8-%5BCore%5D-Web-Components-%5BPIE-3%5D?m=auto&node-id=1573-114527&t=t5zmveNU4ztOqlCs-1',
        },
    },
};

const ExampleFormTemplate: TemplateFunction<TextareaProps> = () => html`
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
        <pie-form-label for="description">Description:</pie-form-label>
        <pie-textarea class="form-field" id="description" name="description">
        </pie-textarea>

        <div class="form-btns">
            <pie-button class="form-btn" variant="secondary" type="reset">Reset</pie-button>
            <pie-button class="form-btn" type="submit">Submit</pie-button>
        </div>
    </form>
`;

const CreateTextareaStory = createStory<TextareaProps>(Template, defaultArgs);
const CreateTextareaStoryWithForm = createStory<TextareaProps>(ExampleFormTemplate, defaultArgs);

export const Default = CreateTextareaStory({}, {
    argTypes: {
        defaultValue: { table: { readonly: true }, description: 'This prop only works when the textarea is inside a form. To interact with this, view the Example Form story.' },
    },
});

export const ExampleForm = CreateTextareaStoryWithForm();

export default textareaStoryMeta;
