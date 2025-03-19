import { html, nothing } from 'lit';
import { type Meta } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';

import '@justeattakeaway/pie-select';
import {
    defaultProps,
    sizes,
    statusTypes,
    type SelectProps as SelectBaseProps,
} from '@justeattakeaway/pie-select';
import '@justeattakeaway/pie-select/dist/pie-option';
import '@justeattakeaway/pie-select/dist/pie-option-group';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import {
    createStory,
    sanitizeAndRenderHTML,
    type TemplateFunction,
} from '../utilities';
import { type SlottedComponentProps } from '../types';

type SelectProps = SlottedComponentProps<SelectBaseProps & { showLeadingIcon: boolean }>;
type SelectStoryMeta = Meta<SelectProps>;

const defaultArgs: SelectProps = {
    ...defaultProps,
    name: 'meals',
    showLeadingIcon: false,
    slot: `<pie-option-group label="Food">
                <pie-option value="pizza">Pizza</pie-option>
                <pie-option value="burger">Burger</pie-option>
            </pie-option-group>
            <pie-option-group label="Drinks">
                <pie-option value="water">Water</pie-option>
                <pie-option value="juice" disabled>Juice</pie-option>
                <pie-option value="tea">Tea</pie-option>
            </pie-option-group>`,
};

const selectStoryMeta: SelectStoryMeta = {
    title: 'Select',
    component: 'pie-select',
    argTypes: {
        name: {
            description: 'The name of the select (used as a key/value pair with `value`). This is required in order to work properly with forms.',
            control: 'text',
            defaultValue: {
                summary: defaultArgs.name,
            },
        },
        disabled: {
            description: 'If true, disables the select field.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.disabled,
            },
        },
        required: {
            description: 'If true, the select is required to have a value before submitting the form. If there is no value, then the component validity state will be invalid.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.required,
            },
        },
        size: {
            description: 'The size of the select field. Can be `small`, `medium` or `large`. Defaults to `medium`.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: defaultProps.size,
            },
        },
        assistiveText: {
            description: 'An optional assistive text to display below the select element. Must be provided when the status is success or error.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        status: {
            description: 'The status of the select component / assistive text. Can be default or error.',
            control: 'select',
            options: statusTypes,
            defaultValue: {
                summary: defaultProps.status,
            },
        },
        showLeadingIcon: {
            description: '<b>**Not a component prop</b><br><br>Use the `leadingIcon` slot to pass a PIE icon component.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.showLeadingIcon,
            },
        },
        slot: {
            description: 'Content to place within the select. Use `<pie-option>` for individual options and `<pie-option-group>` to group related options.',
            control: 'text',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/branch/7dcPx40PggJCudTmgHwlk6/%E2%9C%A8-%5BCore%5D-Web-Components-%5BPIE-3%5D?node-id=1573-114525&p=f&m=dev',
        },
    },
};

export default selectStoryMeta;

const Template: TemplateFunction<SelectProps> = ({
    disabled,
    required,
    size,
    assistiveText,
    status,
    name,
    showLeadingIcon,
    slot,
}) => {
    function onChange (event: CustomEvent) {
        action('change')({
            detail: event.detail,
        });
    }

    return html`
        <pie-select
            id="${ifDefined(name)}"
            name="${ifDefined(name)}"   
            ?disabled="${disabled}"
            ?required="${required}"
            size="${ifDefined(size)}"
            assistiveText="${ifDefined(assistiveText)}"
            status="${ifDefined(status)}"
            @change="${onChange}">   
                ${showLeadingIcon ? html`<icon-placeholder slot="leadingIcon"></icon-placeholder>` : nothing}
                ${sanitizeAndRenderHTML(slot, { ALLOWED_TAGS: ['pie-option', 'pie-option-group'] })}
        </pie-select>
    `;
};

const WithLabelTemplate: TemplateFunction<SelectProps> = (props: SelectProps) => html`
        <p>Please note, the label is a separate component. See <pie-link href="/?path=/story/form-label">pie-form-label</pie-link>.</p>
        <pie-form-label for="${ifDefined(props.name)}">Label</pie-form-label>
        ${Template(props)}
    `;

export const Default = createStory<SelectProps>(Template, defaultArgs)();
export const Labelled = createStory<SelectProps>(WithLabelTemplate, defaultArgs)();
