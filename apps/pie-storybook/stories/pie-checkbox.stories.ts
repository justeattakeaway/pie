import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-checkbox';
import { type CheckboxProps as CheckboxBaseProps, defaultProps, statusTypes } from '@justeattakeaway/pie-checkbox';

import { action } from '@storybook/addon-actions';
import { type SlottedComponentProps } from '../types';
import { createStory, type TemplateFunction, sanitizeAndRenderHTML } from '../utilities';

type CheckboxProps = SlottedComponentProps<CheckboxBaseProps>;
type CheckboxStoryMeta = Meta<CheckboxProps>;

const defaultArgs: CheckboxProps = {
    ...defaultProps,
    name: 'name',
    slot: 'Label',
};

const checkboxStoryMeta: CheckboxStoryMeta = {
    title: 'Components/Checkbox',
    component: 'pie-checkbox',
    argTypes: {
        value: {
            description: 'The value of the checkbox (used as a key/value pair in HTML forms with `name`).',
            control: 'text',
        },

        name: {
            description: 'The name of the checkbox (used as a key/value pair with `value`). This is required in order to work properly with forms.',
            control: 'text',
            defaultValue: {
                summary: defaultArgs.name,
            },
        },

        slot: {
            description: 'Content to place as a checkbox label',
            control: 'text',
        },

        checked: {
            description: 'The checked state of the checkbox.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.checked,
            },
        },

        defaultChecked: {
            description: 'The default checked state of the checkbox (not necessarily the same as the current checked state). Used when the checkbox is part of a form that is reset.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.defaultChecked,
            },
        },

        disabled: {
            description: 'If true, disables the checkbox.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.disabled,
            },
        },

        indeterminate: {
            description: 'Indicates whether the checkbox visually shows a horizontal line in the box instead of a check/tick. It has no impact on whether the checkbox\'s value is used in a form submission. That is decided by the checked state, regardless of the indeterminate state.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.indeterminate,
            },
        },

        required: {
            description: 'If true, the checkbox must be checked for the form to be submittable.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.required,
            },
        },

        assistiveText: {
            description: 'An optional assistive text to display below the checkbox element. Must be provided when the status is success or error.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },

        status: {
            description: 'The status of the checkbox component / assistive text. Can be default, success or error.',
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
            url: 'https://www.figma.com/file/pPSC73rPin4csb8DiK1CRr/branch/aD4m0j97Ruw8Q4S5lED2Bl/%E2%9C%A8-[Core]-Web-Components-[PIE-3]?type=design&node-id=1998-6410&mode=design&t=udPtXte1WeCeFc1D-0',
        },
    },
};

export default checkboxStoryMeta;

const Template = ({
    value,
    name,
    checked,
    defaultChecked,
    disabled,
    indeterminate,
    required,
    assistiveText,
    status,
    slot,
}: CheckboxProps) => {
    function onChange (event: CustomEvent) {
        action('change')({
            detail: event.detail,
        });
    }

    return html`
        <pie-checkbox
            .value="${value}"
            name="${ifDefined(name)}"
            ?checked="${checked}"
            ?defaultChecked="${defaultChecked}"
            ?disabled="${disabled}"
            ?indeterminate="${indeterminate}"
            ?required="${required}"
            @change="${onChange}"
            ?assistiveText="${ifDefined(assistiveText)}"
            status=${ifDefined(status)}>
            ${sanitizeAndRenderHTML(slot)}
        </pie-checkbox>
    `;
};

const ExampleFormTemplate: TemplateFunction<CheckboxProps> = ({
    value,
    name,
    checked,
    defaultChecked,
    disabled,
    indeterminate,
    required,
    assistiveText,
    status,
    slot,
}: CheckboxProps) => {
    function onChange (event: CustomEvent) {
        action('change')({
            detail: event.detail,
        });
    }

    return html`
    <form id="testForm">
        <pie-checkbox
            .value="${value}"
            ?name="${ifDefined(name)}"
            ?checked="${checked}"
            ?defaultChecked="${defaultChecked}"
            ?disabled="${disabled}"
            ?indeterminate="${indeterminate}"
            ?required="${required}"
            @change="${onChange}"
            assistiveText="${ifDefined(assistiveText)}"
            status=${ifDefined(status)}>
            ${sanitizeAndRenderHTML(slot)}
        </pie-checkbox>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
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
    </form>
    `;
};

export const Default = createStory<CheckboxProps>(Template, defaultArgs)();
export const ExampleForm = createStory<CheckboxProps>(ExampleFormTemplate, defaultArgs)();
