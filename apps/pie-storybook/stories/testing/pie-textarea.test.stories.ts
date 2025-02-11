import { html, nothing } from 'lit';
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
import '@justeattakeaway/pie-link';

import {
    createStory,
    createVariantStory,
    type PropDisplayOptions,
    type TemplateFunction,
} from '../../utilities';

type TextareaStoryMeta = Meta<TextareaProps & { showAdditionalField?: boolean }>;

const defaultArgs: TextareaProps = { ...defaultProps };

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
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: defaultProps.size,
            },
        },
        resize: {
            control: 'select',
            options: resizeModes,
            defaultValue: {
                summary: defaultProps.resize,
            },
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
        name: {
            control: 'text',
            defaultValue: {
                summary: defaultArgs.name,
            },
        },
        value: {
            control: 'text',
            defaultValue: {
                summary: defaultProps.value,
            },
        },
        defaultValue: {
            control: 'text',
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
        required: {
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        autoFocus: {
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
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
        },
        showAdditionalField: {
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
    },
    args: defaultArgs,
};

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
    assistiveText,
    status,
    placeholder,
}: TextareaProps) => {
    const [, updateArgs] = UseArgs();

    function onInput (event: InputEvent) {
        const textareaElement = event.target as HTMLTextAreaElement;
        const outputElement = (document.getElementById('output') as HTMLDivElement);
        updateArgs({ value: textareaElement?.value });

        action('input')({
            data: event.data,
            value: textareaElement.value,
        });

        console.info('input event recieved', JSON.stringify(event));

        const currentValue = (event.target as HTMLInputElement).value;
        outputElement.innerText = currentValue;
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
            @input="${onInput}"
            @change="${onChange}"
            assistiveText="${ifDefined(assistiveText)}"
            status=${ifDefined(status)}>
        </pie-textarea>
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

const shortContent = 'The default height is enough for two lines of text, but it should grow if you type more.';
const longContent = 'This textarea has been filled with enough text for the automatic resizing to reach its maximum height. Some content should be cut off and you should not be able to see the end of this text. If this happens then the maximum height is not being limited correctly.';
const overflowingContent = 'The default height is enough for two lines of text, but it should grow if you type more.\n\nIf you reach more than six lines of content, the element will not continue to grow and scrollbars will appear.';

const ExampleFormTemplate: TemplateFunction<TextareaProps & { showAdditionalField?: boolean }> = ({
    defaultValue,
    disabled,
    showAdditionalField = false,
}) => html`
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

    <form id="testForm" class="form" @submit="${onSubmit}" >
        <pie-form-label for="description">Description:</pie-form-label>
        <pie-textarea class="form-field" id="description" name="description" defaultValue="${ifDefined(defaultValue)}" ?disabled="${disabled}">
        </pie-textarea>
        ${showAdditionalField ? html`
            <pie-form-label for="comment">Comment:</pie-form-label>
            <pie-textarea
            class="form-field"
            id="comment"
            name="comment"
            value="commentsTextareaValue">
        ` : nothing}

        <div class="form-btns">
            <pie-button class="form-btn" variant="secondary" type="reset">Reset</pie-button>
            <pie-button class="form-btn" type="submit">Submit</pie-button>
        </div>
    </form>
    <div id="formDataOutput"></div>
`;

const WithLabelTemplate: TemplateFunction<TextareaProps> = (props: TextareaProps) => html`
        <p>Please note, the label is a separate component. See <pie-link href="/?path=/story/form-label">pie-form-label</pie-link>.</p>
        <pie-form-label for="${ifDefined(props.name)}">Label</pie-form-label>
        ${Template(props)}
    `;

const TallTextarea: TemplateFunction<TextareaProps> = () => html`
        <pie-textarea></pie-textarea>
    `;

const CreateTextareaStory = createStory<TextareaProps>(Template, defaultArgs);
const CreateTextareaStoryWithForm = createStory<TextareaProps>(ExampleFormTemplate, defaultArgs);
const CreateTextareaStoryWithLabel = (props: TextareaProps) => createStory<TextareaProps>(WithLabelTemplate, props);

export const Default = CreateTextareaStory({}, {
    argTypes: {
        defaultValue: { table: { readonly: true }, description: 'This prop only works when the textarea is inside a form. To interact with this, view the Example Form story.' },
    },
});
export const WithLabel = CreateTextareaStoryWithLabel(defaultArgs)();
export const ExampleForm = CreateTextareaStoryWithForm();

// Base shared props matrix
const baseSharedPropsMatrix: Partial<Record<keyof TextareaProps, unknown[]>> = {
    size: [...sizes],
    disabled: [true, false],
    readonly: [true, false],
    placeholder: ['Placeholder', ''],
    value: [''],
};

// Text variant stories
const textPropsMatrix: Partial<Record<keyof TextareaProps, unknown[]>> = {
    resize: ['auto', 'manual'],
    value: [shortContent, longContent, overflowingContent],
};

// Text resize stories
const resizePropsMatrix: Partial<Record<keyof TextareaProps, unknown[]>> = {
    resize: ['auto', 'manual'],
};

// Status variant stories
const statusPropsMatrix: Partial<Record<keyof TextareaProps, unknown[]>> = {
    value: ['String'],
    status: ['default', 'success', 'error'],
    assistiveText: ['', 'assistive text'],
};

const variantPropDisplayOptions: PropDisplayOptions<TextareaProps> = {
    propLabels: {
        value: {
            [overflowingContent]: 'With overflowing content',
            [longContent]: 'With long content',
            [shortContent]: 'With short content',
        },
    },
};

export const Variations = createVariantStory<TextareaProps>(Template, baseSharedPropsMatrix, { ...variantPropDisplayOptions, multiColumn: true });
export const ExtendedTextVariations = createVariantStory<TextareaProps>(Template, textPropsMatrix, { ...variantPropDisplayOptions, multiColumn: true });
export const StatusVariations = createVariantStory<TextareaProps>(Template, statusPropsMatrix, { ...variantPropDisplayOptions, multiColumn: true });
export const TallTextareaVariations = createVariantStory<TextareaProps>(TallTextarea, resizePropsMatrix, { multiColumn: true });

export default textareaStoryMeta;
