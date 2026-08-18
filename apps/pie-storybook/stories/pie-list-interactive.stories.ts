import { html, nothing } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/list';
import '@justeattakeaway/pie-webc/components/list-item';
import '@justeattakeaway/pie-webc/components/thumbnail';
import '@justeattakeaway/pie-webc/components/tag';
import '@justeattakeaway/pie-webc/components/radio-group';
import '@justeattakeaway/pie-webc/components/radio';
import '@justeattakeaway/pie-webc/components/switch';
import '@justeattakeaway/pie-webc/components/checkbox-group';
import '@justeattakeaway/pie-webc/components/checkbox';
import '@justeattakeaway/pie-webc/components/form-label';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder';
import '@justeattakeaway/pie-icons-webc/dist/IconCheck';

import { createStory, type TemplateFunction } from '../utilities';
import {
    type ListPlaygroundProps,
    defaultArgs,
    listArgTypes,
    renderLeading,
    renderTrailing,
    buildNotes,
} from './pie-list.stories';

type ListInteractiveMeta = Meta<ListPlaygroundProps>;

const listInteractiveMeta: ListInteractiveMeta = {
    title: 'Components/List/Interactive Lists',
    component: 'pie-list',
    argTypes: listArgTypes,
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
        layout: 'padded',
    },
};

export default listInteractiveMeta;

// Item render helpers --------------------------------------------------------

// Radio and checkbox rows are disabled through their group, not individually: the group propagates
// its disabled state to every row, its slotted control, and any slotted `pie-tag`. Setting
// `disabled` on the rows instead would leave the tags undimmed.
const renderRadioItem = (args: ListPlaygroundProps, value: string, hasDivider = false) => html`
    <pie-list-item
        interactionType="radio"
        .primaryText=${args.primaryText}
        .secondaryText=${args.secondaryText || undefined}
        .metaText=${args.metaText || undefined}
        ?isCompact=${args.isCompact}
        ?isBold=${args.isBold}
        ?hasMedia=${args.hasMedia}
        ?hasDivider=${hasDivider}>
        <pie-radio slot="leading" value=${value}></pie-radio>
        ${renderTrailing(args.trailingContent)}
    </pie-list-item>
`;

const renderCheckboxItem = (args: ListPlaygroundProps, name: string, hasDivider = false) => html`
    <pie-list-item
        interactionType="checkbox"
        .primaryText=${args.primaryText}
        .secondaryText=${args.secondaryText || undefined}
        .metaText=${args.metaText || undefined}
        ?isCompact=${args.isCompact}
        ?isBold=${args.isBold}
        ?hasMedia=${args.hasMedia}
        ?hasDivider=${hasDivider}>
        <pie-checkbox slot="leading" name=${name} value=${name}></pie-checkbox>
        ${renderTrailing(args.trailingContent)}
    </pie-list-item>
`;

const renderSwitchItem = (args: ListPlaygroundProps, hasDivider = false) => html`
    <pie-list-item
        interactionType="switch"
        .primaryText=${args.primaryText}
        .secondaryText=${args.secondaryText || undefined}
        ?isCompact=${args.isCompact}
        ?isBold=${args.isBold}
        ?hasMedia=${args.hasMedia}
        ?hasDivider=${hasDivider}
        ?disabled=${args.disabled}>
        ${renderLeading(args.leadingContent, args.disabled)}
        <pie-switch slot="trailing" ?disabled=${args.disabled}></pie-switch>
    </pie-list-item>
`;

const renderLinkItem = (args: ListPlaygroundProps, href: string, hasDivider = false) => html`
    <pie-list-item
        interactionType="link"
        .primaryText=${args.primaryText}
        .secondaryText=${args.secondaryText || undefined}
        .metaText=${args.metaText || undefined}
        ?isCompact=${args.isCompact}
        ?isBold=${args.isBold}
        ?hasMedia=${args.hasMedia}
        ?hasDivider=${hasDivider}
        ?disabled=${args.disabled}>
        <a slot="link" href=${href}></a>
        ${renderLeading(args.leadingContent)}
        ${renderTrailing(args.trailingContent)}
    </pie-list-item>
`;

const renderButtonItem = (args: ListPlaygroundProps, hasDivider = false) => html`
    <pie-list-item
        interactionType="button"
        .primaryText=${args.primaryText}
        .secondaryText=${args.secondaryText || undefined}
        .metaText=${args.metaText || undefined}
        ?isCompact=${args.isCompact}
        ?isBold=${args.isBold}
        ?hasMedia=${args.hasMedia}
        ?hasDivider=${hasDivider}
        ?disabled=${args.disabled}>
        ${renderLeading(args.leadingContent, args.disabled)}
        ${renderTrailing(args.trailingContent, args.disabled)}
    </pie-list-item>
`;

// Story template factories ---------------------------------------------------

const makeRadioListTemplate = (): TemplateFunction<ListPlaygroundProps> => (args) => {
    const notes = buildNotes(args);

    return html`
        <style>pie-radio-group { width: min(500px, 100%); }</style>
        ${notes.length ? html`<p><strong>Note:</strong> ${notes.join(' ')}</p>` : nothing}
        <pie-radio-group name="interactive-radio" ?disabled=${args.disabled}>
            <pie-form-label slot="label">Select an option</pie-form-label>
            ${renderRadioItem(args, 'option-1', args.hasDivider)}
            ${renderRadioItem(args, 'option-2', args.hasDivider)}
            ${renderRadioItem(args, 'option-3', args.hasDivider)}
            ${renderRadioItem(args, 'option-4')}
        </pie-radio-group>
    `;
};

const makeCheckboxListTemplate = (): TemplateFunction<ListPlaygroundProps> => (args) => {
    const notes = buildNotes(args);

    return html`
        <style>pie-checkbox-group { width: min(500px, 100%); }</style>
        ${notes.length ? html`<p><strong>Note:</strong> ${notes.join(' ')}</p>` : nothing}
        <pie-checkbox-group name="interactive-checkbox" ?disabled=${args.disabled}>
            <pie-form-label slot="label">Select options</pie-form-label>
            ${renderCheckboxItem(args, 'option-1', args.hasDivider)}
            ${renderCheckboxItem(args, 'option-2', args.hasDivider)}
            ${renderCheckboxItem(args, 'option-3', args.hasDivider)}
            ${renderCheckboxItem(args, 'option-4')}
        </pie-checkbox-group>
    `;
};

const makeSwitchListTemplate = (): TemplateFunction<ListPlaygroundProps> => (args) => html`
    <style>pie-list { width: min(500px, 100%); }</style>
    <pie-list aria-label="Settings">
        ${renderSwitchItem(args, args.hasDivider)}
        ${renderSwitchItem(args, args.hasDivider)}
        ${renderSwitchItem(args, args.hasDivider)}
        ${renderSwitchItem(args)}
    </pie-list>
`;

const makeLinkListTemplate = (): TemplateFunction<ListPlaygroundProps> => (args) => {
    const notes = buildNotes(args);

    return html`
        <style>pie-list { width: min(500px, 100%); }</style>
        ${notes.length ? html`<p><strong>Note:</strong> ${notes.join(' ')}</p>` : nothing}
        <pie-list aria-label="Navigation">
            ${renderLinkItem(args, '#item-1', args.hasDivider)}
            ${renderLinkItem(args, '#item-2', args.hasDivider)}
            ${renderLinkItem(args, '#item-3', args.hasDivider)}
            ${renderLinkItem(args, '#item-4')}
        </pie-list>
    `;
};

const makeLinkCurrentPageTemplate = (): TemplateFunction<ListPlaygroundProps> => (args) => {
    const notes = buildNotes(args);

    return html`
        <style>pie-list { width: min(500px, 100%); }</style>
        ${notes.length ? html`<p><strong>Note:</strong> ${notes.join(' ')}</p>` : nothing}
        <pie-list aria-label="Navigation">
            ${renderLinkItem(args, '#item-1', args.hasDivider)}
            <pie-list-item
                interactionType="link"
                .primaryText=${args.primaryText}
                .secondaryText=${args.secondaryText || undefined}
                ?isCompact=${args.isCompact}
                ?isBold=${true}
                ?hasMedia=${args.hasMedia}
                ?hasDivider=${args.hasDivider}
                ?disabled=${args.disabled}>
                <a slot="link" href="#current" aria-current="page"></a>
                ${renderLeading(args.leadingContent)}
                <icon-check slot="trailing"></icon-check>
            </pie-list-item>
            ${renderLinkItem(args, '#item-3', args.hasDivider)}
            ${renderLinkItem(args, '#item-4')}
        </pie-list>
    `;
};

const makeButtonListTemplate = (): TemplateFunction<ListPlaygroundProps> => (args) => {
    const notes = buildNotes(args);
    const onButtonActivate = (event: Event) => {
        if ((event.target as HTMLElement).closest('pie-list-item')) console.info('Button activated');
    };

    return html`
        <style>pie-list { width: min(500px, 100%); }</style>
        ${notes.length ? html`<p><strong>Note:</strong> ${notes.join(' ')}</p>` : nothing}
        <pie-list aria-label="Actions" @click=${onButtonActivate}>
            ${renderButtonItem(args, args.hasDivider)}
            ${renderButtonItem(args, args.hasDivider)}
            ${renderButtonItem(args, args.hasDivider)}
            ${renderButtonItem(args)}
        </pie-list>
    `;
};

// Stories --------------------------------------------------------------------

/**
 * Single-select: `pie-list-item`s inside a `pie-radio-group`. Set `.interactionType=${'radio'}` on each
 * row to make the whole row a selectable target named by the item's text. The group lays the rows
 * out as a divided list automatically when its children are `pie-list-item`s.
 */
export const RadioSelection = createStory<ListPlaygroundProps>(
    makeRadioListTemplate(),
    defaultArgs,
)({}, {
    argTypes: { leadingContent: { table: { disable: true } } },
});

/**
 * Multi-select: `pie-list-item`s inside a `pie-checkbox-group`. Set `.interactionType=${'checkbox'}` on
 * each row to make the whole row a selectable target named by the item's text. Each row toggles its
 * checkbox independently. The group lays the rows out as a divided list automatically when its
 * children are `pie-list-item`s.
 */
export const CheckboxSelection = createStory<ListPlaygroundProps>(
    makeCheckboxListTemplate(),
    defaultArgs,
)({}, {
    argTypes: { leadingContent: { table: { disable: true } } },
});

/**
 * Independent toggles: `pie-list-item` with `interactionType="switch"` in a plain `pie-list` (switches
 * have no group). The switch sits in the `trailing` slot and the whole row toggles it.
 */
export const SwitchSelection = createStory<ListPlaygroundProps>(
    makeSwitchListTemplate(),
    defaultArgs,
)({}, {
    argTypes: {
        trailingContent: { table: { disable: true } },
        metaText: { table: { disable: true } },
    },
});

/**
 * Link rows: `pie-list-item` with `interactionType="link"` and an empty `<a slot="link" href="...">`. The anchor is
 * stretched over the whole row, so the entire item is the navigation target, named by the item's
 * text. Leave the anchor empty — the item provides its accessible name and description.
 */
export const LinkList = createStory<ListPlaygroundProps>(
    makeLinkListTemplate(),
    defaultArgs,
)();

/**
 * Combining `isBold` on the active `pie-list-item` with `aria-current="page"` on its slotted anchor
 * communicates the current page both visually and to assistive technology. A trailing `icon-check`
 * reinforces the active state visually; PIE icons render with `role="presentation"` so no extra
 * `aria-hidden` is needed.
 */
export const LinkListCurrentPage = createStory<ListPlaygroundProps>(
    makeLinkCurrentPageTemplate(),
    defaultArgs,
)({ trailingContent: 'none' }, {
    argTypes: { trailingContent: { table: { disable: true } } },
});

/**
 * Button rows: `pie-list-item` with `interactionType="button"`. The item renders an invisible,
 * row-sized button (keeping the PIE focus ring) named by its text — you slot nothing. Clicking the
 * row, or pressing Enter/Space while it is focused, fires a `click`; listen for it on the
 * `pie-list-item` (or on the `pie-list`, since it bubbles).
 */
export const ButtonList = createStory<ListPlaygroundProps>(
    makeButtonListTemplate(),
    defaultArgs,
)();
