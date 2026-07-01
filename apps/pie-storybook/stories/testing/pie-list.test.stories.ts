import { html, type TemplateResult } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/list';
import '@justeattakeaway/pie-webc/components/list-item';
import '@justeattakeaway/pie-webc/components/tag';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder';

import { type ListProps } from '@justeattakeaway/pie-webc/components/list';

import { createStory } from '../../utilities';

type ListStoryMeta = Meta<ListProps>;

const defaultArgs: ListProps = {};

const listStoryMeta: ListStoryMeta = {
    title: 'List',
    component: 'pie-list',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default listStoryMeta;

// Shared building blocks -----------------------------------------------------

const leadingIcon = html`<icon-placeholder slot="leading"></icon-placeholder>`;
const trailingIcon = html`<icon-placeholder slot="trailing"></icon-placeholder>`;
const trailingTag = html`<pie-tag slot="trailing">Label</pie-tag>`;

/**
 * Wraps a `pie-list` block in a fixed-width container so that every story
 * renders at a consistent, readable width.
 */
const withLayout = (content: TemplateResult) => html`
    <style>
        pie-list {
            min-width: 400px;
            max-width: 500px;
        }
    </style>
    ${content}
`;

// Stories --------------------------------------------------------------------

/**
 * The minimal item: primary text only, with no secondary text, meta text or
 * slotted content.
 */
const PrimaryTextOnlyTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item primaryText="Primary text"></pie-list-item>
        <pie-list-item primaryText="Primary text"></pie-list-item>
        <pie-list-item primaryText="Primary text"></pie-list-item>
        <pie-list-item primaryText="Primary text"></pie-list-item>
    </pie-list>
`);

export const PrimaryTextOnly = createStory<ListProps>(PrimaryTextOnlyTemplate, defaultArgs)();

/**
 * Text-only items: primary and secondary text with no leading/trailing content.
 */
const TextOnlyTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
    </pie-list>
`);

export const TextOnly = createStory<ListProps>(TextOnlyTemplate, defaultArgs)();

/**
 * `is-bold` sets the primary text to a bold font-weight.
 */
const BoldTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item is-bold primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
        <pie-list-item is-bold primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
        <pie-list-item is-bold primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
        <pie-list-item is-bold primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
    </pie-list>
`);

export const Bold = createStory<ListProps>(BoldTemplate, defaultArgs)();

/**
 * A leading icon slotted into each item.
 */
const LeadingIconTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text">
            ${leadingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text">
            ${leadingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text">
            ${leadingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text">
            ${leadingIcon}
        </pie-list-item>
    </pie-list>
`);

export const LeadingIcon = createStory<ListProps>(LeadingIconTemplate, defaultArgs)();

/**
 * A trailing icon slotted into each item.
 */
const TrailingIconTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text">
            ${trailingIcon}
        </pie-list-item>
    </pie-list>
`);

export const TrailingIcon = createStory<ListProps>(TrailingIconTemplate, defaultArgs)();

/**
 * Both a leading and a trailing icon on each item.
 */
const LeadingAndTrailingTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text">
            ${leadingIcon}
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text">
            ${leadingIcon}
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text">
            ${leadingIcon}
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text">
            ${leadingIcon}
            ${trailingIcon}
        </pie-list-item>
    </pie-list>
`);

export const LeadingAndTrailing = createStory<ListProps>(LeadingAndTrailingTemplate, defaultArgs)();

/**
 * `metaText` renders a trailing text string (mutually exclusive with the
 * trailing slot).
 */
const MetaTextTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text" metaText="Meta text"></pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text" metaText="Meta text"></pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text" metaText="Meta text"></pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text" metaText="Meta text"></pie-list-item>
    </pie-list>
`);

export const MetaText = createStory<ListProps>(MetaTextTemplate, defaultArgs)();

/**
 * `is-compact` reduces the vertical space of each item.
 */
const CompactTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item is-compact primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item is-compact primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item is-compact primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item is-compact primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
    </pie-list>
`);

export const Compact = createStory<ListProps>(CompactTemplate, defaultArgs)();

/**
 * A trailing `pie-tag` slotted into each item.
 */
const TagsTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text">
            ${trailingTag}
        </pie-list-item>
        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text">
            ${trailingTag}
        </pie-list-item>
        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text">
            ${trailingTag}
        </pie-list-item>
        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text">
            ${trailingTag}
        </pie-list-item>
    </pie-list>
`);

export const Tags = createStory<ListProps>(TagsTemplate, defaultArgs)();

/**
 * Trailing tags within compact items.
 */
const TagsCompactTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item is-compact primaryText="Primary text">
            ${trailingTag}
        </pie-list-item>
        <pie-list-item is-compact primaryText="Primary text">
            ${trailingTag}
        </pie-list-item>
        <pie-list-item is-compact primaryText="Primary text">
            ${trailingTag}
        </pie-list-item>
        <pie-list-item is-compact primaryText="Primary text">
            ${trailingTag}
        </pie-list-item>
    </pie-list>
`);

export const TagsCompact = createStory<ListProps>(TagsCompactTemplate, defaultArgs)();

/**
 * `--list-item-alignment-override: center` vertically centres the item content.
 */
const AlignmentOverrideTemplate = () => withLayout(html`
    <pie-list style="--list-item-alignment-override: center;">
        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item
            primaryText="Primary text"
            secondaryText="Secondary text">
            ${trailingIcon}
        </pie-list-item>
    </pie-list>
`);

export const AlignmentOverride = createStory<ListProps>(AlignmentOverrideTemplate, defaultArgs)();

/**
 * `--list-item-inline-padding-override` set to a larger spacing token.
 */
const CustomPaddingTemplate = () => withLayout(html`
    <pie-list style="--list-item-inline-padding-override: var(--dt-spacing-f);">
        <pie-list-item primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
    </pie-list>
`);

export const CustomPadding = createStory<ListProps>(CustomPaddingTemplate, defaultArgs)();

/**
 * `--list-item-inline-padding-override: 0` removes the inline padding entirely.
 */
const RemovedPaddingTemplate = () => withLayout(html`
    <pie-list style="--list-item-inline-padding-override: 0;">
        <pie-list-item primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
    </pie-list>
`);

export const RemovedPadding = createStory<ListProps>(RemovedPaddingTemplate, defaultArgs)();

// Edge cases -----------------------------------------------------------------

/**
 * Very long primary, secondary and meta text to verify wrapping behaviour.
 */
const LongTextTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long Secondary text that goes on far too long"
            metaText="Some very long awful meta text Some very long awful meta text">
            ${leadingIcon}
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long Secondary text that goes on far too long"
            metaText="Some very long awful meta text Some very long awful meta text">
            ${leadingIcon}
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long Secondary text that goes on far too long"
            metaText="Some very long awful meta text Some very long awful meta text">
            ${leadingIcon}
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long Secondary text that goes on far too long"
            metaText="Some very long awful meta text Some very long awful meta text">
            ${leadingIcon}
        </pie-list-item>
    </pie-list>
`);

export const LongText = createStory<ListProps>(LongTextTemplate, defaultArgs)();

/**
 * Long text combined with the centre alignment override, a leading icon and a
 * trailing tag.
 */
const LongTextCentreAlignedTemplate = () => withLayout(html`
    <pie-list style="--list-item-alignment-override: center;">
        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long Secondary text that goes on far too long Secondary text that goes on far too long">
            ${leadingIcon}
            ${trailingTag}
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long Secondary text that goes on far too long Secondary text that goes on far too long">
            ${leadingIcon}
            ${trailingTag}
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long Secondary text that goes on far too long Secondary text that goes on far too long">
            ${leadingIcon}
            ${trailingTag}
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long Secondary text that goes on far too long Secondary text that goes on far too long">
            ${leadingIcon}
            ${trailingTag}
        </pie-list-item>
    </pie-list>
`);

export const LongTextCentreAligned = createStory<ListProps>(LongTextCentreAlignedTemplate, defaultArgs)();
