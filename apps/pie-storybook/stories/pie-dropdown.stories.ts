import { html } from 'lit';
import { type Meta } from '@storybook/web-components';
import { action } from 'storybook/actions';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@justeattakeaway/pie-webc/components/dropdown';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';
import {
    defaultProps,
    sizes,
    statusTypes,
    type DropdownOption,
    type DropdownProps,
} from '@justeattakeaway/pie-webc/components/dropdown';

import {
    createStory,
    type TemplateFunction,
} from '../utilities';

type DropdownStoryProps = DropdownProps & { hasSecondaryText: boolean, showLeadingIcon: boolean };
type DropdownStoryMeta = Meta<DropdownStoryProps>;

const makeOptions = (hasSecondaryText: boolean): DropdownOption[] => [{
    value: 'pizza',
    primaryText: 'Pizza',
    secondaryText: hasSecondaryText ? 'Wood-fired, with a crisp base' : undefined,
},
{
    value: 'burger',
    primaryText: 'Burger',
    secondaryText: hasSecondaryText ? 'Flame-grilled, with pickles' : undefined,
},
{
    value: 'salad',
    primaryText: 'Salad',
    secondaryText: hasSecondaryText ? 'Fresh greens and seasonal vegetables' : undefined,
    disabled: true,
},
{
    value: 'pasta',
    primaryText: 'Pasta',
    secondaryText: hasSecondaryText ? 'Made to a traditional recipe' : undefined,
},
{
    value: 'curry',
    primaryText: 'Curry',
    secondaryText: hasSecondaryText ? 'Slow-cooked with aromatic spices' : undefined,
},
{
    value: 'ramen',
    primaryText: 'Ramen',
    secondaryText: hasSecondaryText ? 'Rich broth and springy noodles' : undefined,
},
];

const defaultArgs: DropdownStoryProps = {
    ...defaultProps,
    name: 'meals',
    label: 'Meal',
    placeholder: 'Select a meal',
    hasSecondaryText: false,
    showLeadingIcon: false,
    options: makeOptions(false),
};

const dropdownTemplate: TemplateFunction<DropdownStoryProps> = ({
    hasSecondaryText,
    showLeadingIcon,
    options,
    name,
    label,
    placeholder,
    value,
    isMultiselect,
    isSearchable,
    isLoading,
    disabled,
    required,
    status,
    assistiveText,
    size,
}) => html`
        <style>pie-dropdown { width: min(360px, 100%); }</style>
        <pie-dropdown
            name="${ifDefined(name)}"
            label="${ifDefined(label)}"
            placeholder="${ifDefined(placeholder)}"
            assistiveText="${ifDefined(assistiveText)}"
            status="${ifDefined(status)}"
            size="${ifDefined(size)}"
            .value="${ifDefined(value)}"
            .options=${hasSecondaryText ? makeOptions(true) : options}
            ?isMultiselect="${isMultiselect}"
            ?isSearchable="${isSearchable}"
            ?isLoading="${isLoading}"
            ?disabled="${disabled}"
            ?required="${required}"
            @change=${action('change')}
            @pie-dropdown-open=${action('pie-dropdown-open')}
            @pie-dropdown-close=${action('pie-dropdown-close')}
            @pie-dropdown-search=${action('pie-dropdown-search')}>
            ${showLeadingIcon
    ? html`<icon-placeholder slot="leadingIcon" size="m"></icon-placeholder>`
    : html``}
        </pie-dropdown>
    `;

const dropdownStoryMeta: DropdownStoryMeta = {
    title: 'Components/Dropdown',
    component: 'pie-dropdown',
    argTypes: {
        label: {
            description: 'A visible label for the field. When omitted, provide `aria.label` instead.',
            control: 'text',
        },
        placeholder: {
            description: 'The text shown when no selection has been made.',
            control: 'text',
        },
        value: {
            description: 'The current selection: a single option value, or an array in multi-select variants.',
            control: 'text',
        },
        isMultiselect: {
            description: 'When true, several options can be selected at once.',
            control: 'boolean',
            defaultValue: { summary: defaultProps.isMultiselect },
        },
        isSearchable: {
            description: 'When true, the field becomes a text input that filters the options list.',
            control: 'boolean',
            defaultValue: { summary: defaultProps.isSearchable },
        },
        isLoading: {
            description: 'When true, the popover shows a loading state while options are fetched.',
            control: 'boolean',
            defaultValue: { summary: defaultProps.isLoading },
        },
        disabled: {
            description: 'When true the field cannot be interacted with.',
            control: 'boolean',
            defaultValue: { summary: defaultProps.disabled },
        },
        required: {
            description: 'When true the field must have a selection before its form can be submitted.',
            control: 'boolean',
            defaultValue: { summary: defaultProps.required },
        },
        size: {
            description: 'The vertical size of the field.',
            control: 'select',
            options: sizes,
            defaultValue: { summary: defaultProps.size },
        },
        status: {
            description: 'The status of the field, used for validation styling.',
            control: 'select',
            options: statusTypes,
            defaultValue: { summary: defaultProps.status },
        },
        assistiveText: {
            description: 'Helper text rendered below the field.',
            control: 'text',
        },
        hasSecondaryText: {
            description: 'Demo-only: gives every option secondary text.',
            control: 'boolean',
        },
        showLeadingIcon: {
            description: 'Demo-only: slots a leading icon into the field.',
            control: 'boolean',
        },
    },
    args: defaultArgs,
};

export default dropdownStoryMeta;

export const Default = createStory<DropdownStoryProps>(dropdownTemplate, defaultArgs)();

export const MultiSelect = createStory<DropdownStoryProps>(dropdownTemplate, defaultArgs)({ isMultiselect: true, value: ['pizza'] });

export const SingleSelectSearchable = createStory<DropdownStoryProps>(dropdownTemplate, defaultArgs)({ isSearchable: true, placeholder: 'Search meals' });

export const MultiSelectSearchable = createStory<DropdownStoryProps>(dropdownTemplate, defaultArgs)({
    isMultiselect: true,
    isSearchable: true,
    value: ['pizza'],
    placeholder: 'Search meals',
});

export const Loading = createStory<DropdownStoryProps>(dropdownTemplate, defaultArgs)({ isLoading: true });

export const Error = createStory<DropdownStoryProps>(dropdownTemplate, defaultArgs)({
    status: 'error',
    assistiveText: 'Please select a meal to continue',
});
