import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/dropdown';
import {
    defaultProps,
    type DropdownOption,
    type DropdownProps,
} from '@justeattakeaway/pie-webc/components/dropdown';

import { ifDefined } from 'lit/directives/if-defined.js';
import {
    createStory,
    createVariantStory,
    type TemplateFunction,
} from '../../utilities';

import '@justeattakeaway/pie-icons-webc/dist/IconFood.js';
import '@justeattakeaway/pie-icons-webc/dist/IconStar.js';
import '@justeattakeaway/pie-icons-webc/dist/IconHeart.js';
import '@justeattakeaway/pie-icons-webc/dist/IconClock.js';
import '@justeattakeaway/pie-icons-webc/dist/IconCamera.js';

type DropdownStoryProps = DropdownProps & { hasSecondaryText?: boolean };
type DropdownStoryMeta = Meta<DropdownStoryProps>;

const options: DropdownOption[] = [{
    value: 'pizza',
    primaryText: 'Pizza',
},
{
    value: 'burger',
    primaryText: 'Burger',
},
{
    value: 'salad',
    primaryText: 'Salad',
    disabled: true,
},
{
    value: 'pasta',
    primaryText: 'Pasta',
},
{
    value: 'curry',
    primaryText: 'Curry',
},
{
    value: 'ramen',
    primaryText: 'Ramen',
}];

const defaultArgs: DropdownStoryProps = {
    ...defaultProps,
    name: 'meals',
    label: 'Meal',
    placeholder: 'Select a meal',
    options,
};

const DropdownTemplate: TemplateFunction<DropdownStoryProps> = ({
    name,
    label,
    placeholder,
    assistiveText,
    status,
    size,
    value,
    options: optionsProp,
    isMultiselect,
    isSearchable,
    isLoading,
    disabled,
    required,
    hasSecondaryText,
}) => html`
        <div style="display: flex; justify-content: center; padding: 24px;">
            <pie-dropdown
                data-test-id="dropdown"
                name="${ifDefined(name)}"
                label="${ifDefined(label)}"
                placeholder="${ifDefined(placeholder)}"
                assistiveText="${ifDefined(assistiveText)}"
                status="${ifDefined(status)}"
                size="${ifDefined(size)}"
                .value="${ifDefined(value)}"
                .options="${hasSecondaryText
    ? optionsProp.map((option) => ({ ...option, secondaryText: `More about ${option.primaryText}` }))
    : optionsProp}"
                ?isMultiselect="${isMultiselect}"
                ?isSearchable="${isSearchable}"
                ?isLoading="${isLoading}"
                ?disabled="${disabled}"
                ?required="${required}"></pie-dropdown>
        </div>
    `;

const dropdownStoryMeta: DropdownStoryMeta = {
    title: 'Dropdown',
    component: 'pie-dropdown',
};

export default dropdownStoryMeta;

export const SingleSelect = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)();

export const SingleSelectSecondaryText = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)({ hasSecondaryText: true });

export const SingleSelectSelected = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)({ value: 'burger' });

export const MultiSelect = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)({ isMultiselect: true, value: ['pizza'] });

export const SingleSelectSearchable = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)({ isSearchable: true, placeholder: 'Search meals' });

export const MultiSelectSearchable = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)({
    isSearchable: true,
    isMultiselect: true,
    value: ['pizza'],
    placeholder: 'Search meals',
});

export const LoadingState = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)({ isLoading: true });

export const ErrorState = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)({
    status: 'error',
    assistiveText: 'Please select a meal to continue',
});

export const DisabledState = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)({ value: 'burger', disabled: true });

const FormTemplate: TemplateFunction<DropdownStoryProps> = ({
    name,
    label,
    placeholder,
    isMultiselect,
    isSearchable,
    required,
}) => html`
    <form id="testForm">
        <pie-dropdown
            data-test-id="dropdown"
            name="${ifDefined(name)}"
            label="${ifDefined(label)}"
            placeholder="${ifDefined(placeholder)}"
            .options="${options}"
            ?isMultiselect="${isMultiselect}"
            ?isSearchable="${isSearchable}"
            ?required="${required}"
            @change="${(event: Event) => console.info(JSON.stringify({ type: 'change', value: (event.target as HTMLElement & { value?: string | string[] }).value }))}">
        </pie-dropdown>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
        <script>
            var form = document.querySelector('#testForm');
            form.addEventListener('submit', (e) => {
                e.preventDefault(); // Prevent the actual submission

                const formData = new FormData(form);

                // Serialise as [key, value] pairs: multi-select variants
                // submit more than one entry under the same name.
                document.querySelector('#output').innerText = JSON.stringify([...formData.entries()]);
            });
        </script>
    </form>
    <div id="output"></div>
`;

const FieldsetFormTemplate: TemplateFunction<DropdownStoryProps> = ({
    name,
    label,
    placeholder,
    value,
}) => html`
    <form id="testForm">
        <fieldset disabled>
            <pie-dropdown
                data-test-id="dropdown"
                name="${ifDefined(name)}"
                label="${ifDefined(label)}"
                placeholder="${ifDefined(placeholder)}"
                .value="${ifDefined(value)}"
                .options="${options}">
            </pie-dropdown>
        </fieldset>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
        <script>
            var form = document.querySelector('#testForm');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                document.querySelector('#output').innerText = JSON.stringify([...formData.entries()]);
            });
        </script>
    </form>
    <div id="output"></div>
`;

export const ExampleForm = createStory<DropdownStoryProps>(FormTemplate, defaultArgs)();

export const ExampleMultiForm = createStory<DropdownStoryProps>(FormTemplate, defaultArgs)({ isMultiselect: true });

export const ExampleFieldsetForm = createStory<DropdownStoryProps>(FieldsetFormTemplate, defaultArgs)({ value: 'curry' });

// Options with secondary text and per-option leading icons, with a selection,
// so the selected option's icon is also shown in the field.
const complexOptions: DropdownOption[] = [
    { value: 'pizza', primaryText: 'Pizza', secondaryText: 'Wood-fired, with a crisp base' },
    { value: 'burger', primaryText: 'Burger', secondaryText: 'Flame-grilled, with pickles' },
    { value: 'pasta', primaryText: 'Pasta', secondaryText: 'Made to a traditional recipe' },
    { value: 'curry', primaryText: 'Curry', secondaryText: 'Slow-cooked with aromatic spices' },
    { value: 'ramen', primaryText: 'Ramen', secondaryText: 'Rich broth and springy noodles' },
];

const ComplexOptionsTemplate: TemplateFunction<DropdownStoryProps> = ({
    name,
    label,
    placeholder,
    value,
    isSearchable,
}) => html`
        <pie-dropdown
            name="${ifDefined(name)}"
            label="${ifDefined(label)}"
            placeholder="${ifDefined(placeholder)}"
            .value="${ifDefined(value)}"
            .options=${complexOptions}
            ?isSearchable="${isSearchable}">
            <icon-food slot="icon-pizza"></icon-food>
            <icon-star slot="icon-burger"></icon-star>
            <icon-heart slot="icon-pasta"></icon-heart>
            <icon-clock slot="icon-curry"></icon-clock>
            <icon-camera slot="icon-ramen"></icon-camera>
        </pie-dropdown>
    `;

export const ComplexOptions = createStory<DropdownStoryProps>(ComplexOptionsTemplate, defaultArgs)({ value: 'pizza' });

export const SelectionVariations = createVariantStory<DropdownStoryProps>(
    DropdownTemplate,
    { value: ['burger', ''] },
);

export const MultiselectVariations = createVariantStory<DropdownStoryProps>(
    DropdownTemplate,
    { isMultiselect: [true], value: [['pizza'], ['pizza', 'curry', 'ramen'], []] },
);

export const SearchableVariations = createVariantStory<DropdownStoryProps>(
    DropdownTemplate,
    { isSearchable: [true], value: ['burger', ''] },
);

export const SizeStatusVariations = createVariantStory<DropdownStoryProps>(
    DropdownTemplate,
    { size: ['small', 'medium', 'large'], status: ['default', 'error'] },
);
