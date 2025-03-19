import { html, nothing } from 'lit';
import { type Meta } from '@storybook/web-components';

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
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-form-label';

import { ifDefined } from 'lit/directives/if-defined.js';
import {
    createStory,
    createVariantStory,
    sanitizeAndRenderHTML,
    type TemplateFunction,
} from '../../utilities';
import { type SlottedComponentProps } from '../../types';

type SelectProps = SlottedComponentProps<SelectBaseProps &
{ showLeadingIcon?: boolean, hasSelectedOption?: boolean }>;
type SelectStoryMeta = Meta<SelectProps>;

const defaultArgs: SelectProps = {
    ...defaultProps,
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

const disabledOptionsArgs: SelectProps = {
    ...defaultProps,
    slot: `<pie-option-group label="Disabled Group" disabled>
                <pie-option value="option1">Option 1</pie-option>
                <pie-option value="option2">Option 2</pie-option>
            </pie-option-group>
            <pie-option-group label="Partially Disabled">
                <pie-option value="option3">Option 3</pie-option>
                <pie-option value="option4" disabled>Option 4</pie-option>
            </pie-option-group>`,
};

const selectedOptionsArgs: SelectProps = {
    ...defaultProps,
    slot: `<pie-option value="apple">Apple</pie-option>
            <pie-option value="banana" selected>Banana</pie-option>`,
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
        hasSelectedOption: {
            description: '<b>**Not a component prop</b><br><br>Used only for testing to mark one of the options as selected',
            control: 'boolean',
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
            url: '',
        },
    },
};

export default selectStoryMeta;

function onChange (event: CustomEvent) {
    const selectElement = event.detail.sourceEvent.target as HTMLSelectElement;
    console.info(`change event received: value=${selectElement?.value}, isTrusted=${event.isTrusted}`);
}

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

const Template: TemplateFunction<SelectProps> = ({
    disabled,
    required,
    size,
    assistiveText,
    status,
    name,
    showLeadingIcon,
    slot,
}) => html`
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

const ExampleFormTemplate: TemplateFunction<SelectProps> = ({
    disabled,
    hasSelectedOption,
}: SelectProps) => html`
  <form id="testForm" @submit="${onSubmit}">
      <pie-form-label for="food">Food:</pie-form-label>
      <pie-select
          class="form-field"
          id="food"
          name="food"
          ?disabled="${disabled}"
          data-test-id="pie-select-container">
          <icon-placeholder slot="leadingIcon"></icon-placeholder>
          <pie-option value="pizza">Pizza</pie-option>
          <pie-option value="burger" ?selected=${hasSelectedOption}>Burger</pie-option>
          <pie-option value="pasta">Pasta</pie-option>
      </pie-select>

      <div class="form-btns">
          <pie-button class="form-btn" variant="secondary" type="reset">Reset</pie-button>
          <pie-button class="form-btn" type="submit">Submit</pie-button>
      </div>
  </form>
  <div id="formDataOutput"></div>
`;

export const Default = createStory<SelectProps>(Template, defaultArgs)();
export const DisabledOptions = createStory<SelectProps>(Template, disabledOptionsArgs)();
export const SelectedOptions = createStory<SelectProps>(Template, selectedOptionsArgs)();

const basePropOptions = {
    size: [...sizes],
    disabled: [true, false],
    showLeadingIcon: [true, false],
    slot: ['<pie-option value="placeholder">Select a value</pie-option>'],
};

const statusPropsOptions = {
    status: [...statusTypes],
    assistiveText: ['', 'assistive text'],
    slot: ['<pie-option value="placeholder">Select a value</pie-option>'],
};

export const Variations = createVariantStory<SelectProps>(Template, basePropOptions);
export const StatusVariations = createVariantStory<SelectProps>(Template, statusPropsOptions);
export const ExampleForm = createStory<SelectProps>(ExampleFormTemplate, defaultArgs)();
