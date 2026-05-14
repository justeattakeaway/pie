import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/checkbox';
import {
    type CheckboxProps as CheckboxBaseProps, defaultProps, statusTypes, labelPositions, labelFits,
} from '@justeattakeaway/pie-webc/components/checkbox';

import { action } from 'storybook/actions';
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

        labelPosition: {
            description: 'The position of the label relative to the checkbox input.',
            control: 'select',
            options: labelPositions,
            defaultValue: {
                summary: defaultProps.labelPosition,
            },
        },

        labelFit: {
            description: 'Controls how the label container is sized. `hug` wraps the content, `fill` stretches to fill available width.',
            control: 'select',
            options: labelFits,
            defaultValue: {
                summary: defaultProps.labelFit,
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
    labelPosition,
    labelFit,
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

export const RichLabel = createStory<CheckboxProps>(Template, {
    ...defaultArgs,
    slot: richLabelSlot,
})();

export const LabelTrailing = createStory<CheckboxProps>(Template, {
    ...defaultArgs,
    labelPosition: 'trailing',
})();

export const LabelLeading = createStory<CheckboxProps>(Template, {
    ...defaultArgs,
    labelPosition: 'leading',
})();

export const RichLabelLeading = createStory<CheckboxProps>(Template, {
    ...defaultArgs,
    slot: richLabelSlot,
    labelPosition: 'leading',
})();

export const RichLabelTrailing = createStory<CheckboxProps>(Template, {
    ...defaultArgs,
    slot: richLabelSlot,
    labelPosition: 'trailing',
})();

const LabelFitComparisonTemplate = ({
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
}: CheckboxProps) => html`
    <style>
        .label-fit-demo pie-checkbox {
            background: rgba(0, 123, 255, 0.06);
            outline: 1px dashed rgba(0, 123, 255, 0.3);
        }
    </style>
    <div class="label-fit-demo" style="display: flex; flex-direction: column; gap: 16px; width: 400px; border: 1px dashed var(--dt-color-border-default); padding: 16px;">
        <p style="margin: 0; font-family: var(--dt-font-body-l-family); font-size: 14px; color: var(--dt-color-content-subdued);">labelPosition="trailing" labelFit="hug" (default)</p>
        <pie-checkbox
            .value="${value}"
            name="${ifDefined(name)}"
            ?checked="${checked}"
            ?defaultChecked="${defaultChecked}"
            ?disabled="${disabled}"
            ?indeterminate="${indeterminate}"
            ?required="${required}"
            assistiveText="${ifDefined(assistiveText)}"
            status=${ifDefined(status)}
            labelFit="hug">
            ${sanitizeAndRenderHTML(slot)}
        </pie-checkbox>
        <p style="margin: 0; font-family: var(--dt-font-body-l-family); font-size: 14px; color: var(--dt-color-content-subdued);">labelPosition="leading" labelFit="hug"</p>
        <pie-checkbox
            .value="${value}"
            name="${ifDefined(name)}"
            ?checked="${checked}"
            ?defaultChecked="${defaultChecked}"
            ?disabled="${disabled}"
            ?indeterminate="${indeterminate}"
            ?required="${required}"
            assistiveText="${ifDefined(assistiveText)}"
            status=${ifDefined(status)}
            labelPosition="leading"
            labelFit="hug">
            ${sanitizeAndRenderHTML(slot)}
        </pie-checkbox>
        <p style="margin: 0; font-family: var(--dt-font-body-l-family); font-size: 14px; color: var(--dt-color-content-subdued);">labelPosition="leading" labelFit="fill" — checkbox pushed to far right</p>
        <pie-checkbox
            .value="${value}"
            name="${ifDefined(name)}"
            ?checked="${checked}"
            ?defaultChecked="${defaultChecked}"
            ?disabled="${disabled}"
            ?indeterminate="${indeterminate}"
            ?required="${required}"
            assistiveText="${ifDefined(assistiveText)}"
            status=${ifDefined(status)}
            labelPosition="leading"
            labelFit="fill">
            ${sanitizeAndRenderHTML(slot)}
        </pie-checkbox>
    </div>
`;

export const LabelFitComparison = createStory<CheckboxProps>(LabelFitComparisonTemplate, defaultArgs)();

