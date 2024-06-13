import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-checkbox';
import { CheckboxProps, defaultProps, statusTypes } from '@justeattakeaway/pie-checkbox';
/* eslint-enable import/no-duplicates */

import { action } from '@storybook/addon-actions';
import { type StoryMeta } from '../types';
import { createStory, type TemplateFunction } from '../utilities';

type CheckboxStoryMeta = StoryMeta<CheckboxProps>;

const defaultArgs: CheckboxProps = {
    ...defaultProps,
    name: 'name',
    label: 'Label',
    checked: false,
    defaultChecked: false,
    disabled: false,
    indeterminate: false,
    required: false,
    aria: {
        label: '',
        labelledby: '',
    },
};

const checkboxStoryMeta: CheckboxStoryMeta = {
    title: 'Checkbox',
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

        label: {
            description: 'The visible label for the checkbox',
            control: 'text',
            defaultValue: {
                summary: defaultArgs.label,
            },
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

        aria: {
            description: 'ARIA object to pass label/labelledby/describedby aria attributes',
            control: 'object',
        },
        assistiveText: {
            description: 'An optional assistive text to display below the checkbox element.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        status: {
            description: 'Sets the status of the checkbox component / assistive text.',
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
            url: 'https://www.figma.com/file/pPSC73rPin4csb8DiK1CRr/branch/aD4m0j97Ruw8Q4S5lED2Bl/%E2%9C%A8-[Core]-Web-Components-[PIE-3]?type=design&node-id=1998-6410&mode=design&t=udPtXte1WeCeFc1D-0',
        },
    },
};

export default checkboxStoryMeta;

const Template = ({
    value,
    name,
    label,
    checked,
    defaultChecked,
    disabled,
    indeterminate,
    required,
    aria,
    assistiveText,
    status,
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
            label="${ifDefined(label)}"
            ?checked="${checked}"
            ?defaultChecked="${defaultChecked}"
            ?disabled="${disabled}"
            ?indeterminate="${indeterminate}"
            ?required="${required}"
            .aria="${aria}"
            @change="${onChange}"
            assistiveText="${ifDefined(assistiveText)}"
            status=${ifDefined(status)}>
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
    aria,
    assistiveText,
    status,
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
            name="${ifDefined(name)}"
            label="Pie Checkbox"
            ?checked="${checked}"
            ?defaultChecked="${defaultChecked}"
            ?disabled="${disabled}"
            ?indeterminate="${indeterminate}"
            ?required="${required}"
            .aria="${aria}"
            @change="${onChange}"
            assistiveText="${ifDefined(assistiveText)}"
            status=${ifDefined(status)}></pie-checkbox>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
        <script>
            const form = document.querySelector('#testForm');

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
