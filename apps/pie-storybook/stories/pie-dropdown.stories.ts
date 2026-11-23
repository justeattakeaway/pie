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

const options: DropdownOption[] = [
    { value: 'pizza', primaryText: 'Pizza' },
    { value: 'burger', primaryText: 'Burger' },
    { value: 'salad', primaryText: 'Salad', disabled: true },
    { value: 'pasta', primaryText: 'Pasta' },
    { value: 'curry', primaryText: 'Curry' },
    { value: 'ramen', primaryText: 'Ramen' },
];

/** Secondary text for the demo `hasSecondaryText` toggle, keyed by option value. */
const secondaryTextByValue: Record<string, string> = {
    pizza: 'Wood-fired, with a crisp base',
    burger: 'Flame-grilled, with pickles',
    salad: 'Fresh greens and seasonal vegetables',
    pasta: 'Made to a traditional recipe',
    curry: 'Slow-cooked with aromatic spices',
    ramen: 'Rich broth and springy noodles',
};

/**
 * Adds secondary text to every option (keeping any already provided), so the
 * `options` control stays functional alongside the demo toggle.
 */
const withSecondaryText = (list: DropdownOption[]): DropdownOption[] => list.map((option) => ({
    ...option,
    secondaryText: option.secondaryText ?? secondaryTextByValue[option.value] ?? `More about ${option.primaryText}`,
}));

const defaultArgs: DropdownStoryProps = {
    ...defaultProps,
    name: 'meals',
    label: 'Meal',
    placeholder: 'Select a meal',
    hasSecondaryText: false,
    showLeadingIcon: false,
    options,
    loadingText: 'Loading results...',
    noResultsText: 'No results',
    optionsAvailableText: '{count} option available',
    selectedCountText: '{count} selected',
    aria: {
        clearSelection: 'Clear selection',
        clearAllSelections: 'Clear all {count} selections',
    },
};

const dropdownTemplate: TemplateFunction<DropdownStoryProps> = ({
    hasSecondaryText,
    showLeadingIcon,
    options: optionsProp,
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
    loadingText,
    noResultsText,
    selectedCountText,
    optionsAvailableText,
    noSelectionText,
    aria,
}) => html`
        <style>pie-dropdown { width: min(360px, calc(100vw - 32px)); }</style>
        <pie-dropdown
            name="${ifDefined(name)}"
            label="${ifDefined(label)}"
            placeholder="${ifDefined(placeholder)}"
            assistiveText="${ifDefined(assistiveText)}"
            status="${ifDefined(status)}"
            size="${ifDefined(size)}"
            loadingText="${ifDefined(loadingText)}"
            noResultsText="${ifDefined(noResultsText)}"
            selectedCountText="${ifDefined(selectedCountText)}"
            optionsAvailableText="${ifDefined(optionsAvailableText)}"
            noSelectionText="${ifDefined(noSelectionText)}"
            .value="${ifDefined(value)}"
            .options="${hasSecondaryText ? withSecondaryText(optionsProp ?? []) : optionsProp}"
            .aria="${ifDefined(aria)}"
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
    ? html`<icon-placeholder slot="leadingIcon" size="s"></icon-placeholder>`
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
            description: 'The current selection: a single option value, or an array in multi-select variants. A single string is normalised in multi-select variants; use the field itself to select several options.',
            control: 'text',
        },
        options: {
            description: 'The options to choose from, in display order. Each option is `{ value, primaryText, secondaryText?, disabled? }`.',
            control: 'object',
        },
        name: {
            description: 'The name the value is submitted under in forms. No visual effect.',
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
        loadingText: {
            description: 'The text shown in the popover while `isLoading` is true.',
            control: 'text',
        },
        noResultsText: {
            description: 'The text shown in the popover when a search returns no matching options (searchable variants only).',
            control: 'text',
        },
        selectedCountText: {
            description: 'The text for the count chip in multi-select variants. Use `{count}` where the number of selected options should appear.',
            control: 'text',
        },
        optionsAvailableText: {
            description: 'The message announced to assistive technology when a search returns matching options. No visual effect.',
            control: 'text',
        },
        noSelectionText: {
            description: 'The validation message announced when a required dropdown is submitted without a selection. No visual effect.',
            control: 'text',
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
            description: 'Demo-only: adds secondary text to every option (the `options` control stays functional).',
            control: 'boolean',
        },
        showLeadingIcon: {
            description: 'Demo-only: slots a leading icon into the field.',
            control: 'boolean',
        },
        aria: {
            description: 'Additional ARIA properties: `label` (the field\'s accessible name when no `label` is set), `clearSelection` (the single-select clear button) and `clearAllSelections` (the multi-select chip close button). No visual effect.',
            control: 'object',
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
