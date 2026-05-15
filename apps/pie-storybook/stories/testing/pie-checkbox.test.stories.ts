import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/checkbox';
import {
    type CheckboxProps as CheckboxBaseProps, defaultProps, statusTypes, labelPositions, labelFits,
} from '@justeattakeaway/pie-webc/components/checkbox';

import { type SlottedComponentProps } from '../../types';
import {
    createStory, createVariantStory, type TemplateFunction, sanitizeAndRenderHTML,
} from '../../utilities';

type CheckboxProps = SlottedComponentProps<CheckboxBaseProps>;
type CheckboxStoryMeta = Meta<CheckboxProps>;

const defaultArgs: CheckboxProps = {
    ...defaultProps,
    name: '',
    slot: 'Label',
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
    labelPosition,
    labelFit,
    slot,
}: CheckboxProps) => {
    function onChange (event: CustomEvent) {
        console.info(JSON.stringify(event));
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
            assistiveText="${ifDefined(assistiveText)}"
            status=${ifDefined(status)}
            labelPosition=${ifDefined(labelPosition)}
            labelFit=${ifDefined(labelFit)}>
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
        console.info(JSON.stringify(event));
    }

    return html`
    <form id="testForm">
        <pie-checkbox
            .value="${value}"
            name="${ifDefined(name)}"
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
            var form = document.querySelector('#testForm');
            form.addEventListener('submit', (e) => {
                e.preventDefault(); // Prevent the actual submission

                const formData = new FormData(form);
                const formDataObj = {};
                formData.forEach((value, key) => {
                    formDataObj[key] = value;
                });

                // Serialize and set form data as JSON text in the output element
                var output = document.querySelector('#output');
                output.innerText = JSON.stringify(formDataObj);
            });
        </script>
    </form>
    <div id="output"></div>
    `;
};

const ExampleFieldsetFormTemplate: TemplateFunction<CheckboxProps> = ({
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
        console.info(JSON.stringify(event));
    }

    return html`
    <form id="testForm">
        <fieldset>
            <pie-checkbox
              .value="${value}"
              name="${ifDefined(name)}"
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
        </fieldset>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
        <script>
            var form = document.querySelector('#testForm');
            form.addEventListener('submit', (e) => {
                e.preventDefault(); // Prevent the actual submission

                const formData = new FormData(form);
                const formDataObj = {};
                formData.forEach((value, key) => {
                    formDataObj[key] = value;
                });

                // Serialize and set form data as JSON text in the output element
                var output = document.querySelector('#output');
                output.innerText = JSON.stringify(formDataObj);
            });
        </script>
    </form>
    <div id="output"></div>
    `;
};

export const Default = createStory<CheckboxProps>(Template, defaultArgs)();
export const ExampleForm = createStory<CheckboxProps>(ExampleFormTemplate, defaultArgs)();
export const ExampleFieldsetForm = createStory<CheckboxProps>(ExampleFieldsetFormTemplate, defaultArgs)();

const sharedPropsMatrix: Partial<Record<keyof CheckboxProps, unknown[]>> = {
    checked: [true, false],
    disabled: [true, false],
    indeterminate: [true, false],
    slot: ['Label'],
    assistiveText: ['Assistive text', ''],
    status: [...statusTypes],
};

const checkedFalsePropsMatrix: Partial<Record<keyof CheckboxProps, unknown[]>> = {
    ...sharedPropsMatrix,
    checked: [false],
};

const checkedTruePropsMatrix: Partial<Record<keyof CheckboxProps, unknown[]>> = {
    ...sharedPropsMatrix,
    checked: [true],
};

export const CheckedFalseVariations = createVariantStory<CheckboxProps>(Template, checkedFalsePropsMatrix);
export const CheckedTrueVariations = createVariantStory<CheckboxProps>(Template, checkedTruePropsMatrix);

const labelPositionPropsMatrix: Partial<Record<keyof CheckboxProps, unknown[]>> = {
    slot: ['Label'],
    labelPosition: [...labelPositions],
    labelFit: [...labelFits],
    checked: [true, false],
};

export const LabelPositionVariations = createVariantStory<CheckboxProps>(Template, labelPositionPropsMatrix);

const richLabelSlot = `<div style="
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--dt-spacing-a);
">
    <span class="u-font-body-l">A yummy dish</span>
    <span class="u-font-body-l">£2.50</span>
    <span class="u-font-caption" style="
        width: 100%;
        color: var(--dt-color-content-subdued);
    ">
        Some description as a part of the label
    </span>
</div>`;

const richLabelPropsMatrix: Partial<Record<keyof CheckboxProps, unknown[]>> = {
    slot: [richLabelSlot],
    labelPosition: [...labelPositions],
    checked: [true, false],
};

export const RichLabelVariations = createVariantStory<CheckboxProps>(Template, richLabelPropsMatrix);
