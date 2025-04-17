import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { useArgs as UseArgs } from '@storybook/preview-api';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-radio';
import {
    defaultProps,
    statusTypes,
    type RadioProps as RadioBaseProps,
} from '@justeattakeaway/pie-radio';

import { type SlottedComponentProps } from '../types';
import { createStory, sanitizeAndRenderHTML, type TemplateFunction } from '../utilities';

type RadioProps = SlottedComponentProps<RadioBaseProps>;
type RadioStoryMeta = Meta<RadioProps>;

const defaultArgs: RadioProps = {
    ...defaultProps,
    slot: 'Label',
    value: 'value',
};

const radioStoryMeta: RadioStoryMeta = {
    title: 'Components/Radio',
    component: 'pie-radio',
    argTypes: {
        checked: {
            description: 'The checked state of the radio.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.checked,
            },
        },

        defaultChecked: {
            description: 'The default checked state of the radio (not necessarily the same as the current checked state). Used when the radio is part of a form that is reset.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.defaultChecked,
            },
        },

        disabled: {
            description: 'Same as the HTML disabled attribute - indicates whether or not the radio is disabled.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.disabled,
            },
        },

        name: {
            description: 'The name of the radio (used as a key/value pair with `value`). This is required in order to work properly with forms.',
            control: 'text',
            defaultValue: {
                summary: defaultArgs.name,
            },
        },

        required: {
            description: 'Same as native required attribute. If any radio button in a same-named group of radio buttons has the required attribute, a radio button in that group must be checked, although it doesn\'t have to be the one with the attribute applied.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.required,
            },
        },

        slot: {
            description: 'Content to set as the radio label.',
            control: 'text',
        },
        value: {
            description: 'The value of the radio (used as a key/value pair in HTML forms with `name`).',
            control: 'text',
            defaultValue: {
                summary: defaultArgs.value,
            },
        },
        status: {
            description: 'The status of the radio component. Can be default or error.',
            control: 'select',
            options: statusTypes,
            defaultValue: {
                summary: defaultProps.status,
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

export default radioStoryMeta;

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
            @change="${onChange}">
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
    };

    return html`
        <style>
            pie-radio {
                display: block;
                margin-bottom: var(--dt-spacing-b);
            }
        </style>
        <form id="testForm">
            <pie-radio
                .value="${value}"
                name="${ifDefined(name)}"
                ?checked="${checked}"
                ?defaultChecked="${defaultChecked}"
                ?disabled="${disabled}"
                ?required="${required}"
                @change="${onChange}">
                ${sanitizeAndRenderHTML(slot)}
            </pie-radio>
            <pie-button variant="secondary" type="reset">Reset</pie-button>
            <pie-button type="submit">Submit</pie-button>
            <script>
                // var is used to prevent storybook from erroring when the script is re-run
                var form = document.querySelector('#testForm');

                form.addEventListener('submit', (e) => {
                    e.preventDefault();

                    // log out all form input values
                    const formData = new FormData(form);
                    console.log('All form elements:', form.elements);
                    console.log('All form element data keys and values submitted:');

                    for (const entry of formData.entries()) {
                        console.table(entry);
                    };
                });
            </script>
        </form>`;
};

export const Default = createStory<RadioProps>(Template, defaultArgs)();
export const ExampleForm = createStory<RadioProps>(ExampleFormTemplate, defaultArgs)();
