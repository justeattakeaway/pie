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

// Options with secondary text and per-option leading icons, with a selection,
// so the selected option's icon is also shown in the field.
const complexOptions: DropdownOption[] = [
    { value: 'pizza', primaryText: 'Pizza', secondaryText: 'Wood-fired, with a crisp base' },
    { value: 'burger', primaryText: 'Burger', secondaryText: 'Flame-grilled, with pickles' },
    { value: 'pasta', primaryText: 'Pasta', secondaryText: 'Made to a traditional recipe' },
    { value: 'curry', primaryText: 'Curry', secondaryText: 'Slow-cooked with aromatic spices' },
    { value: 'ramen', primaryText: 'Ramen', secondaryText: 'Rich broth and springy noodles' },
];

const defaultArgs: DropdownStoryProps = {
    ...defaultProps,
    name: 'meals',
    label: 'Meal',
    placeholder: 'Select a meal',
    options,
};

/**
 * Sizing for the stories whose popover is opened in the visual tests: the
 * field is wide enough for the popover's content, and the wrapper is tall
 * enough that an open popover (position: fixed, up to ~280px tall) never
 * clips past the document height that Percy renders. The width uses the
 * viewport (not a percentage) so it stays definite inside Storybook's
 * shrink-to-fit centered layout, and subtracts the 80px of horizontal
 * padding around the field (the wrapper's 24px plus Storybook's 16px root
 * padding, both sides) so nothing overflows the narrow Percy widths.
 */
const storySizingStyles = html`
    <style>
        pie-dropdown { width: min(420px, calc(100vw - 80px)); }
        .story-wrapper { display: flex; justify-content: center; padding: 24px; min-height: 420px; }
    </style>
`;

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
        ${storySizingStyles}
        <div class="story-wrapper">
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

export const SingleSelectSelected = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)({ value: 'burger' });

export const MultiSelect = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)({ isMultiselect: true, value: ['pizza'] });

export const MultiSelectSecondaryText = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)({ isMultiselect: true, hasSecondaryText: true, value: ['pizza', 'curry'] });

export const SingleSelectSearchable = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)({ isSearchable: true, placeholder: 'Search meals' });

export const MultiSelectSearchable = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)({
    isSearchable: true,
    isMultiselect: true,
    value: ['pizza'],
    placeholder: 'Search meals',
});

export const LoadingState = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)({ isLoading: true });

export const DisabledState = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)({ value: 'burger', disabled: true });

export const DisabledMultiselectState = createStory<DropdownStoryProps>(DropdownTemplate, defaultArgs)({ isMultiselect: true, value: ['pizza', 'curry'], disabled: true });

/* ------------------------------------------------------------------ *
 * Visual-test galleries: curated, captioned instances of every
 * variant, in the closed state (the popover is never open here —
 * only one popover can be open per page, so the open states are
 * covered by the single-instance stories above).
 * ------------------------------------------------------------------ */

const galleryStyles = html`
    <style>
        /* 80px = the gallery's 24px padding plus Storybook's 16px root padding, both sides. */
        pie-dropdown { width: min(420px, calc(100vw - 80px)); }
        .gallery { display: flex; flex-direction: column; align-items: center; gap: 32px; padding: 24px; }
        .gallery-item { display: flex; flex-direction: column; gap: 8px; width: min(420px, calc(100vw - 80px)); }
        .gallery-caption { font-family: monospace; font-size: 14px; color: #3C4C4F; }
    </style>
`;

type GalleryInstance = {
    caption: string,
    placeholder?: string,
    value?: string | string[],
    isMultiselect?: boolean,
    isSearchable?: boolean,
    disabled?: boolean,
    size?: string,
    status?: string,
    assistiveText?: string,
    options?: DropdownOption[],
    withOptionIcons?: boolean,
};

/** The per-option leading icons, slotted for the values in `complexOptions`. */
const optionIcons = html`
    <icon-food slot="icon-pizza"></icon-food>
    <icon-star slot="icon-burger"></icon-star>
    <icon-heart slot="icon-pasta"></icon-heart>
    <icon-clock slot="icon-curry"></icon-clock>
    <icon-camera slot="icon-ramen"></icon-camera>
`;

const galleryItem = (instance: GalleryInstance) => html`
    <div class="gallery-item">
        <span class="gallery-caption">${instance.caption}</span>
        <pie-dropdown
            name="meals"
            label="Meal"
            placeholder="${ifDefined(instance.placeholder)}"
            .value="${ifDefined(instance.value)}"
            .options="${instance.options ?? options}"
            ?isMultiselect="${instance.isMultiselect}"
            ?isSearchable="${instance.isSearchable}"
            ?disabled="${instance.disabled}"
            size="${ifDefined(instance.size)}"
            status="${ifDefined(instance.status)}"
            assistiveText="${ifDefined(instance.assistiveText)}">
            ${instance.withOptionIcons ? optionIcons : ''}
        </pie-dropdown>
    </div>
`;

const ClosedVariantsTemplate: TemplateFunction<DropdownStoryProps> = () => html`
    ${galleryStyles}
    <div class="gallery">
        ${galleryItem({ caption: 'single select' })}
        ${galleryItem({ caption: 'single select, selected', value: 'burger' })}
        ${galleryItem({ caption: 'multi select, 2 selected', isMultiselect: true, value: ['pizza', 'curry'] })}
        ${galleryItem({ caption: 'single select, searchable', isSearchable: true, placeholder: 'Search meals' })}
        ${galleryItem({
    caption: 'multi select, searchable, selected', isMultiselect: true, isSearchable: true, value: ['pizza'], placeholder: 'Search meals',
})}
    </div>
`;

const ClosedRichVariantsTemplate: TemplateFunction<DropdownStoryProps> = () => html`
    ${galleryStyles}
    <div class="gallery">
        ${galleryItem({
    caption: 'single select, icons + secondary text, selected', options: complexOptions, value: 'pizza', withOptionIcons: true,
})}
        ${galleryItem({
    caption: 'single select, searchable, icons + secondary text, selected', options: complexOptions, value: 'pizza', isSearchable: true, placeholder: 'Search meals', withOptionIcons: true,
})}
        ${galleryItem({
    caption: 'multi select, secondary text, 2 selected', options: complexOptions, isMultiselect: true, value: ['pizza', 'curry'],
})}
    </div>
`;

const SizeVariationsTemplate: TemplateFunction<DropdownStoryProps> = () => html`
    ${galleryStyles}
    <div class="gallery">
        ${galleryItem({ caption: 'size: small', size: 'small', value: 'burger' })}
        ${galleryItem({ caption: 'size: medium', size: 'medium', value: 'burger' })}
        ${galleryItem({ caption: 'size: large', size: 'large', value: 'burger' })}
    </div>
`;

const StatusVariationsTemplate: TemplateFunction<DropdownStoryProps> = () => html`
    ${galleryStyles}
    <div class="gallery">
        ${galleryItem({
    caption: 'status: default', status: 'default', assistiveText: 'Choose your favourite meal', value: 'pizza',
})}
        ${galleryItem({
    caption: 'status: error', status: 'error', assistiveText: 'Please select a meal to continue', value: 'pizza',
})}
        ${galleryItem({
    caption: 'status: success', status: 'success', assistiveText: 'Great choice!', value: 'pizza',
})}
    </div>
`;

const DisabledVariationsTemplate: TemplateFunction<DropdownStoryProps> = () => html`
    ${galleryStyles}
    <div class="gallery">
        ${galleryItem({ caption: 'disabled, single select, selected', value: 'burger', disabled: true })}
        ${galleryItem({
    caption: 'disabled, multi select, 2 selected', isMultiselect: true, value: ['pizza', 'curry'], disabled: true,
})}
    </div>
`;

export const ClosedVariants = createStory<DropdownStoryProps>(ClosedVariantsTemplate, defaultArgs)();

export const ClosedRichVariants = createStory<DropdownStoryProps>(ClosedRichVariantsTemplate, defaultArgs)();

export const SizeVariations = createStory<DropdownStoryProps>(SizeVariationsTemplate, defaultArgs)();

export const StatusVariations = createStory<DropdownStoryProps>(StatusVariationsTemplate, defaultArgs)();

export const DisabledVariations = createStory<DropdownStoryProps>(DisabledVariationsTemplate, defaultArgs)();

/* ------------------------------------------------------------------ *
 * Form stories (component tests)
 * ------------------------------------------------------------------ */

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

const ComplexOptionsTemplate: TemplateFunction<DropdownStoryProps> = ({
    name,
    label,
    placeholder,
    value,
    isSearchable,
}) => html`
        ${storySizingStyles}
        <div class="story-wrapper">
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
        </div>
    `;

export const ComplexOptions = createStory<DropdownStoryProps>(ComplexOptionsTemplate, defaultArgs)({ value: 'pizza' });
