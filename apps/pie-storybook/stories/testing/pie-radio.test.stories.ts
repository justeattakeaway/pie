import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { useArgs as UseArgs } from '@storybook/preview-api';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-radio';
import '@justeattakeaway/pie-button';
import {
    defaultProps,
    statusTypes,
    type RadioProps as RadioBaseProps,
} from '@justeattakeaway/pie-radio';

import { type SlottedComponentProps } from '../../types';
import {
    createStory, createVariantStory, sanitizeAndRenderHTML, type TemplateFunction,
} from '../../utilities';

type RadioProps = SlottedComponentProps<RadioBaseProps>;
type RadioStoryMeta = Meta<RadioProps>;

const defaultArgs: RadioProps = {
    ...defaultProps,
    slot: 'Label',
    value: 'value',
};

const radioStoryMeta: RadioStoryMeta = {
    title: 'Radio',
    component: 'pie-radio',
    argTypes: {
        checked: {
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.checked,
            },
        },

        defaultChecked: {
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.defaultChecked,
            },
        },

        disabled: {
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.disabled,
            },
        },

        name: {
            control: 'text',
            defaultValue: {
                summary: defaultArgs.name,
            },
        },

        required: {
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.required,
            },
        },

        slot: {
            control: 'text',
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
    },
    args: defaultArgs,
};

export default radioStoryMeta;

const onSubmit = (event: Event) => {
    event.preventDefault();
    const form = document.querySelector('#testForm') as HTMLFormElement;
    const output = document.querySelector('#formDataOutput') as HTMLDivElement;

    console.log('form', form);
    const formData = new FormData(form);
    const formDataObj: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });

    output.innerText = JSON.stringify(formDataObj);
};

const Template = ({
    checked,
    disabled,
    defaultChecked,
    name,
    required,
    slot,
    value,
    status,
}: RadioProps) => {
    const [, updateArgs] = UseArgs();

    const onChange = (event: InputEvent) => {
        const radioElement = event.target as HTMLInputElement;
        updateArgs({ checked: radioElement.checked });
        console.info(JSON.stringify(event));
    };

    return html`
        <pie-radio
            ?checked="${checked}"
            ?disabled="${disabled}"
            ?defaultChecked="${defaultChecked}"
            ?required="${required}"
            name="${ifDefined(name)}"
            .value="${value}"
            status="${status}"
            @change="${onChange}"
            data-test-id="pie-radio">
            ${sanitizeAndRenderHTML(slot)}
        </pie-radio>`;
};

const ExampleFormTemplate: TemplateFunction<RadioProps> = ({
    value,
    name,
    checked,
    defaultChecked,
    disabled,
    required,
    slot,
}: RadioProps) => {
    const [, updateArgs] = UseArgs();

    const onChange = (event: InputEvent) => {
        const radioElement = event.target as HTMLInputElement;
        updateArgs({ checked: radioElement.checked });
        console.info('change event fired');
    };

    return html`
        <style>
            pie-radio {
                display: block;
                margin-bottom: var(--dt-spacing-b);
            }
        </style>
        <form id="testForm" @submit="${onSubmit}">
            <pie-radio
                .value="${value}"
                name="${ifDefined(name)}"
                ?checked="${checked}"
                ?defaultChecked="${defaultChecked}"
                ?disabled="${disabled}"
                ?required="${required}"
                @change="${onChange}"
                data-test-id="pie-radio">
                ${sanitizeAndRenderHTML(slot)}
            </pie-radio>
            <pie-button variant="secondary" type="reset">Reset</pie-button>
            <pie-button type="submit">Submit</pie-button>
        </form>
        <div id="formDataOutput"></div>`;
};

const ExampleFormDisabledFieldsetTemplate: TemplateFunction<RadioProps> = ({
    value,
    name,
    checked,
    defaultChecked,
    required,
    slot,
}: RadioProps) => {
    const [, updateArgs] = UseArgs();

    const onChange = (event: InputEvent) => {
        const radioElement = event.target as HTMLInputElement;
        updateArgs({ checked: radioElement.checked });
        console.info('change event fired');
    };

    return html`
        <style>
            pie-radio {
                display: block;
                margin-bottom: var(--dt-spacing-b);
            }
        </style>
        <form id="testForm" @submit="${onSubmit}">
            <fieldset disabled>
                <pie-radio
                    .value="${value}"
                    name="${ifDefined(name)}"
                    ?checked="${checked}"
                    ?defaultChecked="${defaultChecked}"
                    ?required="${required}"
                    @change="${onChange}"
                    data-test-id="pie-radio">
                    ${sanitizeAndRenderHTML(slot)}
                </pie-radio>
            </fieldset>
            <pie-button variant="secondary" type="reset">Reset</pie-button>
            <pie-button type="submit">Submit</pie-button>
        </form>
        <div id="formDataOutput"></div>`;
};

export const Default = createStory<RadioProps>(Template, defaultArgs)();
export const ExampleForm = createStory<RadioProps>(ExampleFormTemplate, defaultArgs)();
export const ExampleFormDisabledFieldset = createStory<RadioProps>(ExampleFormDisabledFieldsetTemplate, defaultArgs)();

const longLabel = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium quam eget dolor imperdiet placerat. Aliquam sollicitudin erat sed est lobortis sollicitudin. Nam vulputate, mi vel finibus convallis, mi dolor molestie arcu, vel pulvinar urna neque et sapien. Aenean euismod faucibus turpis et efficitur. Sed porttitor dui at justo cursus pulvinar. Sed scelerisque aliquet diam sed feugiat. Fusce id lorem finibus, tempor nulla tempor, tincidunt odio. Mauris consequat lectus ex, eget lacinia dui finibus sit amet. Phasellus maximus posuere sapien eget condimentum. Nunc viverra pharetra blandit.';

const radioPropsMatrix: Partial<Record<keyof RadioProps, unknown[]>> = {
    checked: [true, false],
    disabled: [true, false],
    slot: ['Label', longLabel],
    status: ['default', 'error'],
};

export const Variations = createVariantStory<RadioProps>(Template, radioPropsMatrix, { multiColumn: true });
