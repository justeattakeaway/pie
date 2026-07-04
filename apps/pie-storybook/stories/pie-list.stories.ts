import { html, nothing } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/list';
import '@justeattakeaway/pie-webc/components/list-item';
import '@justeattakeaway/pie-webc/components/thumbnail';
import '@justeattakeaway/pie-webc/components/tag';
import '@justeattakeaway/pie-webc/components/radio-group';
import '@justeattakeaway/pie-webc/components/radio';
import '@justeattakeaway/pie-webc/components/checkbox-group';
import '@justeattakeaway/pie-webc/components/checkbox';
import '@justeattakeaway/pie-webc/components/form-label';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder';

import { createStory, type TemplateFunction } from '../utilities';

// The list itself has no props; these are the `pie-list-item` props plus two
// helper controls (`leadingContent` / `trailingContent`) for experimenting with
// the slots. The latter two are not component props.
type ListPlaygroundProps = {
    primaryText: string;
    secondaryText: string;
    metaText: string;
    isCompact: boolean;
    isBold: boolean;
    hasMedia: boolean;
    leadingContent: 'none' | 'icon' | 'thumbnail';
    trailingContent: 'none' | 'icon' | 'tag';
};

type ListStoryMeta = Meta<ListPlaygroundProps>;

const defaultArgs: ListPlaygroundProps = {
    primaryText: 'Primary text',
    secondaryText: 'Secondary text',
    metaText: '',
    isCompact: false,
    isBold: false,
    hasMedia: false,
    leadingContent: 'none',
    trailingContent: 'icon',
};

const listStoryMeta: ListStoryMeta = {
    title: 'Components/List',
    component: 'pie-list',
    argTypes: {
        primaryText: {
            description: 'The main text of the item.',
            control: 'text',
        },
        secondaryText: {
            description: 'Optional additional detail, rendered on a second line.',
            control: 'text',
        },
        metaText: {
            description: 'Optional trailing text. Mutually exclusive with the `trailing` slot (if set, the trailing slot is not rendered).',
            control: 'text',
        },
        isCompact: {
            description: 'Reduces the item height. Do not use with secondary text or slotted media.',
            control: 'boolean',
        },
        isBold: {
            description: 'Sets the primary text to a bold font-weight.',
            control: 'boolean',
        },
        hasMedia: {
            description: 'Required to display slotted media (e.g. `pie-thumbnail`). Also reduces block padding on single-line items.',
            control: 'boolean',
        },
        leadingContent: {
            description: '**Not a component prop.** Chooses what to slot into the `leading` slot.',
            control: 'select',
            options: ['none', 'icon', 'thumbnail'],
        },
        trailingContent: {
            description: '**Not a component prop.** Chooses what to slot into the `trailing` slot.',
            control: 'select',
            options: ['none', 'icon', 'tag'],
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

export default listStoryMeta;

// Slot content helpers -------------------------------------------------------

const renderLeading = (leadingContent: ListPlaygroundProps['leadingContent']) => {
    if (leadingContent === 'icon') return html`<icon-placeholder slot="leading"></icon-placeholder>`;
    if (leadingContent === 'thumbnail') return html`<pie-thumbnail slot="leading" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>`;
    return nothing;
};

const renderTrailing = (trailingContent: ListPlaygroundProps['trailingContent']) => {
    if (trailingContent === 'icon') return html`<icon-placeholder slot="trailing"></icon-placeholder>`;
    if (trailingContent === 'tag') return html`<pie-tag slot="trailing">Label</pie-tag>`;
    return nothing;
};

const renderItem = (args: ListPlaygroundProps) => html`
    <pie-list-item
        .primaryText=${args.primaryText}
        .secondaryText=${args.secondaryText || undefined}
        .metaText=${args.metaText || undefined}
        ?isCompact=${args.isCompact}
        ?isBold=${args.isBold}
        ?hasMedia=${args.hasMedia}>
        ${renderLeading(args.leadingContent)}
        ${renderTrailing(args.trailingContent)}
    </pie-list-item>
`;

// Surfaces the component's usage rules when the controls are set to a combination
// that the component intentionally handles (so the behaviour is not surprising).
const buildNotes = (args: ListPlaygroundProps) => {
    const notes: string[] = [];
    if (args.leadingContent === 'thumbnail' && !args.hasMedia) notes.push('Enable "hasMedia" to display the slotted thumbnail.');
    if (args.isCompact && args.leadingContent === 'thumbnail') notes.push('Media is not displayed in compact items.');
    if (args.isCompact && args.secondaryText) notes.push('Avoid secondary text in compact items.');
    if (args.metaText && args.trailingContent !== 'none') notes.push('"metaText" replaces the trailing slot, so the trailing content is not shown.');
    return notes;
};

/**
 * Every story renders the same arg-driven list (so the controls are live on all of
 * them). `pie-list` must always have an accessible name; we use `aria-labelledby`
 * pointing at a visible heading (preferred over `aria-label`, so the visible and
 * accessible names stay in sync). `headingId` is unique per story to keep the
 * association valid when several stories render on one docs page.
 */
const makeListTemplate = (headingId: string, heading: string, listStyle = ''): TemplateFunction<ListPlaygroundProps> => (args) => {
    const notes = buildNotes(args);

    return html`
        <style>
            pie-list {
                min-width: 300px;
                max-width: 500px;
            }
        </style>
        ${notes.length ? html`<p><strong>Note:</strong> ${notes.join(' ')}</p>` : nothing}
        <h2 id=${headingId}>${heading}</h2>
        <pie-list aria-labelledby=${headingId} style=${listStyle}>
            ${renderItem(args)}
            ${renderItem(args)}
            ${renderItem(args)}
        </pie-list>
    `;
};

// Stories --------------------------------------------------------------------

/**
 * Interactive example. Use the controls to experiment with the `pie-list-item`
 * properties and slotted content.
 */
export const Playground = createStory<ListPlaygroundProps>(
    makeListTemplate('list-playground-heading', 'Example list'),
    defaultArgs,
)();

/**
 * `isBold` sets the primary text to a bold font-weight.
 */
export const Bold = createStory<ListPlaygroundProps>(
    makeListTemplate('list-bold-heading', 'Bold primary text'),
    defaultArgs,
)({ isBold: true });

/**
 * `isCompact` reduces the vertical space of each item. Do not use it with
 * secondary text or slotted media.
 */
export const Compact = createStory<ListPlaygroundProps>(
    makeListTemplate('list-compact-heading', 'Compact'),
    defaultArgs,
)({ isCompact: true, secondaryText: '' });

/**
 * A trailing `pie-tag` slotted into each item.
 */
export const WithTag = createStory<ListPlaygroundProps>(
    makeListTemplate('list-tag-heading', 'Trailing tag'),
    defaultArgs,
)({ trailingContent: 'tag' });

/**
 * `metaText` renders a trailing text string. It is mutually exclusive with the
 * `trailing` slot.
 */
export const MetaText = createStory<ListPlaygroundProps>(
    makeListTemplate('list-meta-heading', 'Meta text'),
    defaultArgs,
)({ metaText: 'Meta text', trailingContent: 'none' });

/**
 * Slotted media (`pie-thumbnail`, always `size="40"`) requires `hasMedia`. Toggle
 * `secondaryText` in the controls to see the block padding adjust.
 */
export const Media = createStory<ListPlaygroundProps>(
    makeListTemplate('list-media-heading', 'Media'),
    defaultArgs,
)({ hasMedia: true, leadingContent: 'thumbnail', trailingContent: 'none' });

/**
 * `--list-item-alignment-override: center` vertically centres the item content.
 */
export const AlignmentOverride = createStory<ListPlaygroundProps>(
    makeListTemplate('list-alignment-heading', 'Centre aligned', '--list-item-alignment-override: center;'),
    defaultArgs,
)();

/**
 * `--list-item-inline-padding-override` overrides the inline padding of the items
 * (any spacing token, or `0` to remove it).
 */
export const InlinePaddingOverride = createStory<ListPlaygroundProps>(
    makeListTemplate('list-padding-heading', 'No inline padding', '--list-item-inline-padding-override: 0;'),
    defaultArgs,
)({ leadingContent: 'none' });

/**
 * Long text wraps within each item.
 */
export const LongText = createStory<ListPlaygroundProps>(
    makeListTemplate('list-long-text-heading', 'Long content'),
    defaultArgs,
)({
    primaryText: 'Primary text that goes on far too long Primary text that goes on far too long',
    secondaryText: 'Secondary text that goes on far too long Secondary text that goes on far too long',
    metaText: 'Some very long awful meta text',
    leadingContent: 'icon',
    trailingContent: 'none',
});

// Selectable lists -----------------------------------------------------------
// A `pie-list-item` becomes a selectable row via its `selection-type` prop, slotting the control
// into its `leading`/`trailing` slot. Radio and checkbox rows live inside their groups. The
// playground controls above do not apply to these.

/**
 * Single-select: `pie-list-item selection-type="radio"` inside a `pie-radio-group`. The whole row
 * is a selectable target and the radio is named by the item's text.
 */
export const RadioSelection = createStory<ListPlaygroundProps>(() => html`
    <style>pie-radio-group { min-width: 350px; }</style>
    <pie-radio-group name="delivery">
        <pie-form-label slot="label">Delivery method</pie-form-label>
        <pie-list-item selection-type="radio" primaryText="Standard delivery" secondaryText="3 to 5 working days" metaText="Free">
            <pie-radio slot="leading" value="standard"></pie-radio>
        </pie-list-item>
        <pie-list-item selection-type="radio" primaryText="Express delivery" secondaryText="Next working day" metaText="£4.99">
            <pie-radio slot="leading" value="express"></pie-radio>
        </pie-list-item>
        <pie-list-item selection-type="radio" primaryText="Collection" secondaryText="Collect from a nearby store">
            <pie-radio slot="leading" value="collection" disabled></pie-radio>
        </pie-list-item>
        <pie-list-item selection-type="radio" primaryText="Locker" secondaryText="Pick up from a parcel locker" metaText="£1.99">
            <pie-radio slot="leading" value="locker"></pie-radio>
        </pie-list-item>
    </pie-radio-group>
`, defaultArgs)();

/**
 * Multi-select: `pie-list-item selection-type="checkbox"` inside a `pie-checkbox-group`. Each row
 * toggles its checkbox independently.
 */
export const CheckboxSelection = createStory<ListPlaygroundProps>(() => html`
    <style>pie-checkbox-group { min-width: 350px; }</style>
    <pie-checkbox-group name="toppings">
        <pie-form-label slot="label">Toppings</pie-form-label>
        <pie-list-item selection-type="checkbox" primaryText="Cheese" secondaryText="Extra mature" metaText="Free">
            <pie-checkbox slot="leading" name="cheese"></pie-checkbox>
        </pie-list-item>
        <pie-list-item selection-type="checkbox" primaryText="Pepperoni" secondaryText="Spicy">
            <pie-checkbox slot="leading" name="pepperoni"></pie-checkbox>
        </pie-list-item>
        <pie-list-item selection-type="checkbox" primaryText="Mushrooms">
            <pie-checkbox slot="leading" name="mushrooms" disabled></pie-checkbox>
        </pie-list-item>
        <pie-list-item selection-type="checkbox" primaryText="Olives" metaText="£0.50">
            <pie-checkbox slot="leading" name="olives"></pie-checkbox>
        </pie-list-item>
    </pie-checkbox-group>
`, defaultArgs)();
