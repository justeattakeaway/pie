import { html, nothing } from 'lit';
import { type Meta } from '@storybook/web-components';

import {
    defaultProps,
    sizes,
    statusTypes,
    type SelectProps as SelectBaseProps,
} from '@justeattakeaway/pie-select';
import '@justeattakeaway/pie-select';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-form-label';

import { ifDefined } from 'lit/directives/if-defined.js';
import {
    createStory,
    createVariantStory,
    type TemplateFunction,
} from '../../utilities';

type SelectProps = SelectBaseProps & { showLeadingIcon?: boolean };
type SelectStoryMeta = Meta<SelectProps>;

const defaultArgs: SelectProps = {
    ...defaultProps,
    options: [{
        tag: 'optgroup',
        label: 'Food',
        options: [{
            tag: 'option',
            text: 'Pizza',
            value: 'pizza',
        },
        {
            tag: 'option',
            text: 'Burger',
            value: 'burger',
        },
        ],
    },
    {
        tag: 'optgroup',
        label: 'Drinks',
        options: [{
            tag: 'option',
            text: 'Water',
            value: 'water',
        },
        {
            tag: 'option',
            text: 'Juice',
            value: 'juice',
            disabled: true,
        },
        ],
    },
    ],
};

const disabledOptionsArgs: SelectProps = {
    ...defaultProps,
    options: [{
        tag: 'optgroup',
        label: 'Disabled Group',
        disabled: true,
        options: [{
            tag: 'option',
            text: 'Option 1',
            value: 'option1',
        },
        {
            tag: 'option',
            text: 'Option 2',
            value: 'option2',
        },
        ],
    },
    {
        tag: 'optgroup',
        label: 'Partially Disabled',
        options: [{
            tag: 'option',
            text: 'Option 3',
            value: 'option3',
        },
        {
            tag: 'option',
            text: 'Option 4',
            value: 'option4',
            disabled: true,
        },
        ],
    }],
};

const selectedOptionsArgs: SelectProps = {
    ...defaultProps,
    options: [{
        tag: 'option',
        text: 'Apple',
        value: 'apple',
    },
    {
        tag: 'option',
        text: 'Banana',
        value: 'banana',
        selected: true,
    },
    ],
};

const selectStoryMeta: SelectStoryMeta = {
    title: 'Select',
    component: 'pie-select',
    argTypes: {
        name: {
            description: 'The name of the select (used as a key/value pair with `value`). This is required in order to work properly with forms.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        disabled: {
            description: 'If true, disables the select field.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.disabled,
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
            description: 'An optional assistive text to display below the select element. Must be provided when the status is error.',
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
        options: {
            description: 'The options to display in the select. Can be an array of option objects or option group objects.',
            control: 'object',
            defaultValue: {
                summary: defaultProps.options,
            },
        },
        value: {
            description: 'The programatically set value of the select. It overrides any option set as selected.',
            control: 'text',
            defaultValue: {
                summary: '',
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
    size,
    assistiveText,
    status,
    name,
    options,
    showLeadingIcon,
    value,
}) => html`
        <pie-select
            id="${ifDefined(name)}"
            name="${ifDefined(name)}"
            ?disabled="${disabled}"
            size="${ifDefined(size)}"
            assistiveText="${ifDefined(assistiveText)}"
            status="${ifDefined(status)}"
            .options="${options}"
            value="${ifDefined(value)}"
            @change="${onChange}">
                ${showLeadingIcon ? html`<icon-placeholder slot="leadingIcon"></icon-placeholder>` : nothing}
        </pie-select>
    `;

const ExampleFormTemplate: TemplateFunction<SelectProps> = ({
    disabled,
    options,
    value,
}: SelectProps) => html`
  <form id="testForm" @submit="${onSubmit}">
      <pie-form-label for="food">Food:</pie-form-label>
      <pie-select
          class="form-field"
          id="food"
          name="food"
          ?disabled="${disabled}"
          .options="${options}"
          value="${ifDefined(value)}"
          data-test-id="pie-select-container">
          <icon-placeholder slot="leadingIcon"></icon-placeholder>
      </pie-select>

      <div class="form-btns">
          <pie-button class="form-btn" variant="secondary" type="reset">Reset</pie-button>
          <pie-button class="form-btn" type="submit">Submit</pie-button>
      </div>
  </form>
  <div id="formDataOutput"></div>
`;

const ExampleFormWithSelectedOptionTemplate: TemplateFunction<SelectProps> = ({
    disabled,
    options,
    value,
}: SelectProps) => html`
  <form id="testForm" @submit="${onSubmit}">
      <pie-form-label for="food">Food:</pie-form-label>
      <pie-select
          class="form-field"
          id="food"
          name="food"
          ?disabled="${disabled}"
          .options="${options}"
          value="${ifDefined(value)}"
          data-test-id="pie-select-container">
          <icon-placeholder slot="leadingIcon"></icon-placeholder>
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
    options: [[{ tag: 'option', text: 'Select a value', value: '' }]],
};

const statusPropsOptions = {
    status: [...statusTypes],
    assistiveText: ['', 'assistive text'],
    options: [[{ tag: 'option', text: 'Select a value', value: '' }]],
};

export const Variations = createVariantStory<SelectProps>(Template, basePropOptions);
export const StatusVariations = createVariantStory<SelectProps>(Template, statusPropsOptions);
export const ExampleForm = createStory<SelectProps>(ExampleFormTemplate, defaultArgs)();
export const ExampleFormWithSelectedOption = createStory<SelectProps>(ExampleFormWithSelectedOptionTemplate, selectedOptionsArgs)();
