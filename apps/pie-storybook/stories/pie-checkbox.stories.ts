import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/checkbox';
import '@justeattakeaway/pie-webc/components/button';
import { type CheckboxProps as CheckboxBaseProps, defaultProps, statusTypes } from '@justeattakeaway/pie-webc/components/checkbox';

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
        <pie-button type="reset" variant="outline">Reset</pie-button>
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
    </form>
    `;
};

const NativeLabelTemplate: TemplateFunction<CheckboxProps> = ({
    value,
    name,
    checked,
    defaultChecked,
    disabled,
    indeterminate,
    required,
    assistiveText,
    status,
}: CheckboxProps) => {
    function onChange (event: CustomEvent) {
        action('change')({
            detail: event.detail,
        });
    }

    return html`
        <p>The checkbox below is associated with a native HTML <code>&lt;label&gt;</code> using the <code>for</code> attribute. Clicking the label text toggles the checkbox.</p>
        <div style="display: flex; align-items: center; gap: 8px;">
            <pie-checkbox
                id="native-label-checkbox"
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
            </pie-checkbox>
            <label for="native-label-checkbox" style="cursor: pointer;">I am a native HTML label — click me!</label>
        </div>
    `;
};

const NativeLabelWrappingTemplate: TemplateFunction<CheckboxProps> = ({
    value,
    name,
    checked,
    defaultChecked,
    disabled,
    indeterminate,
    required,
    assistiveText,
    status,
}: CheckboxProps) => {
    function onChange (event: CustomEvent) {
        action('change')({
            detail: event.detail,
        });
    }

    return html`
        <p>The checkbox below is wrapped inside a native <code>&lt;label&gt;</code> element. Clicking anywhere in the label toggles the checkbox.</p>
        <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
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
            </pie-checkbox>
            I am a wrapping native HTML label — click me!
        </label>
    `;
};

export const Default = createStory<CheckboxProps>(Template, defaultArgs)();
export const ExampleForm = createStory<CheckboxProps>(ExampleFormTemplate, defaultArgs)();
export const NativeLabel = createStory<CheckboxProps>(NativeLabelTemplate, defaultArgs)();
export const NativeLabelWrapping = createStory<CheckboxProps>(NativeLabelWrappingTemplate, defaultArgs)();

const CardSelectionTemplate = () => html`
    <style>
        .card-selection {
            border: none;
            margin: 0;
            padding: 0;
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: var(--dt-spacing-d);
            font-family: var(--dt-font-family-primary);
            max-width: 500px;
        }

        .card-selection__legend {
            font-size: calc(var(--dt-font-heading-s-size--narrow) * 1px);
            font-weight: var(--dt-font-heading-s-weight);
            line-height: calc(var(--dt-font-heading-s-line-height--narrow) * 1px);
            color: var(--dt-color-content-default);
            margin-bottom: var(--dt-spacing-b);
        }

        .card-selection__description {
            margin: 0 0 var(--dt-spacing-d) 0;
            font-size: var(--dt-font-body-s-size);
            line-height: calc(var(--dt-font-body-s-line-height) * 1px);
            color: var(--dt-color-content-subdued);
        }

        .selection-card {
            display: flex;
            align-items: center;
            gap: var(--dt-spacing-d);
            padding: var(--dt-spacing-d) var(--dt-spacing-e);
            border: 2px solid var(--dt-color-border-default);
            border-radius: var(--dt-radius-rounded-c);
            background-color: var(--dt-color-container-default);
            cursor: pointer;
            transition: all var(--dt-motion-timing-200) var(--dt-motion-easing-out);
        }

        .selection-card:hover {
            border-color: var(--dt-color-border-strong);
            background-color: var(--dt-color-container-subtle);
        }

        .selection-card:has(pie-checkbox[checked]) {
            border-color: var(--dt-color-interactive-brand);
            background-color: var(--dt-color-support-info-tonal);
        }

        .selection-card:has(pie-checkbox[disabled]) {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .selection-card__content {
            display: flex;
            flex-direction: column;
            gap: var(--dt-spacing-a);
            flex: 1;
            min-width: 0;
        }

        .selection-card__title {
            font-weight: var(--dt-font-body-strong-l-weight);
            font-size: var(--dt-font-body-strong-l-size);
            line-height: calc(var(--dt-font-body-strong-l-line-height) * 1px);
            color: var(--dt-color-content-default);
        }

        .selection-card__subtitle {
            font-size: var(--dt-font-body-s-size);
            line-height: calc(var(--dt-font-body-s-line-height) * 1px);
            color: var(--dt-color-content-subdued);
        }

        .selection-card__price {
            font-weight: var(--dt-font-body-strong-l-weight);
            font-size: var(--dt-font-body-strong-l-size);
            line-height: calc(var(--dt-font-body-strong-l-line-height) * 1px);
            color: var(--dt-color-content-default);
            flex-shrink: 0;
        }

        .card-selection__actions {
            display: flex;
            flex-direction: column;
            gap: var(--dt-spacing-c);
            margin-top: var(--dt-spacing-d);
        }
    </style>

    <form>
        <fieldset class="card-selection">
            <legend class="card-selection__legend">Customise your order</legend>
            <p class="card-selection__description">Select any extras you would like to add.</p>

            <label class="selection-card">
                <pie-checkbox name="extras" value="extra-cheese" checked></pie-checkbox>
                <span class="selection-card__content">
                    <span class="selection-card__title">Extra cheese</span>
                    <span class="selection-card__subtitle">Generous portion of mozzarella</span>
                </span>
                <span class="selection-card__price">+£1.50</span>
            </label>

            <label class="selection-card">
                <pie-checkbox name="extras" value="bacon"></pie-checkbox>
                <span class="selection-card__content">
                    <span class="selection-card__title">Crispy bacon</span>
                    <span class="selection-card__subtitle">Smoked and crispy streaky bacon</span>
                </span>
                <span class="selection-card__price">+£2.00</span>
            </label>

            <label class="selection-card">
                <pie-checkbox name="extras" value="jalapenos"></pie-checkbox>
                <span class="selection-card__content">
                    <span class="selection-card__title">Jalapeños</span>
                    <span class="selection-card__subtitle">Sliced green jalapeños</span>
                </span>
                <span class="selection-card__price">+£0.75</span>
            </label>

            <label class="selection-card">
                <pie-checkbox name="extras" value="truffle-oil" disabled></pie-checkbox>
                <span class="selection-card__content">
                    <span class="selection-card__title">Truffle oil drizzle</span>
                    <span class="selection-card__subtitle">Currently unavailable</span>
                </span>
                <span class="selection-card__price">+£3.00</span>
            </label>

            <div class="card-selection__actions">
                <pie-button type="submit" isFullWidth>Add to basket</pie-button>
            </div>
        </fieldset>
    </form>
`;

export const CardSelection = createStory(CardSelectionTemplate, {})();
