import { html, type TemplateResult } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/list';
import '@justeattakeaway/pie-webc/components/list-item';
import '@justeattakeaway/pie-webc/components/thumbnail';
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
const leadingThumbnail = html`<pie-thumbnail slot="leading" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>`;

/**
 * Wraps a `pie-list` block in a fixed-width container so that every story
 * renders at a consistent, readable width.
 */
const withLayout = (content: TemplateResult) => html`
    <style>
        pie-list {
            min-width: 300px;
            max-width: 500px;
            border: 1px dashed purple;
        }
    </style>
    ${content}
`;

// Stories --------------------------------------------------------------------

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
 * Leading and trailing icons with only primary text (no secondary text), to
 * verify centre alignment on a single-line item.
 */
const LeadingAndTrailingOnlyPrimaryTextTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item primaryText="Primary text">
            ${leadingIcon}
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text">
            ${leadingIcon}
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text">
            ${leadingIcon}
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item primaryText="Primary text">
            ${leadingIcon}
            ${trailingIcon}
        </pie-list-item>
    </pie-list>
`);

export const LeadingAndTrailingOnlyPrimaryText = createStory<ListProps>(LeadingAndTrailingOnlyPrimaryTextTemplate, defaultArgs)();

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
 * `metaText` with only primary text (no secondary text). The meta text's
 * line-height is adjusted to match the primary text so both sit on the same
 * baseline.
 */
const MetaTextOnlyPrimaryTextTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item primaryText="Primary text" metaText="Meta text"></pie-list-item>
        <pie-list-item primaryText="Primary text" metaText="Meta text"></pie-list-item>
        <pie-list-item primaryText="Primary text" metaText="Meta text"></pie-list-item>
        <pie-list-item primaryText="Primary text" metaText="Meta text"></pie-list-item>
    </pie-list>
`);

export const MetaTextOnlyPrimaryText = createStory<ListProps>(MetaTextOnlyPrimaryTextTemplate, defaultArgs)();

/**
 * `has-media` reduces the block padding to suit a larger slotted pie-thumbnail.
 * The reduced padding only applies when there is no secondary text. The last
 * two items show padding reverting to normal.
 */
const MediaTemplate = () => withLayout(html`
    <h2>Primary text only</h2>
    <pie-list>
        <pie-list-item has-media primaryText="Primary text">
            ${leadingThumbnail}
        </pie-list-item>
        <pie-list-item has-media primaryText="Primary text">
            ${leadingThumbnail}
        </pie-list-item>
        <pie-list-item has-media primaryText="Primary text">
            ${leadingThumbnail}
        </pie-list-item>
    </pie-list>

    <h2>With secondary text</h2>
    <pie-list>
        <pie-list-item has-media primaryText="Primary text" secondaryText="Secondary text">
            ${leadingThumbnail}
        </pie-list-item>
        <pie-list-item has-media primaryText="Primary text" secondaryText="Secondary text">
            ${leadingThumbnail}
        </pie-list-item>
        <pie-list-item has-media primaryText="Primary text" secondaryText="Secondary text">
            ${leadingThumbnail}
        </pie-list-item>
    </pie-list>
`);

export const Media = createStory<ListProps>(MediaTemplate, defaultArgs)();

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

/**
 * Verifies the divider border pie-list applies between items. Deliberately
 * omits `withLayout`'s decorative purple border so the real divider (and its
 * absence on the last item) is visible without visual noise.
 */
const BordersTemplate = () => html`
    <style>
        pie-list {
            min-width: 300px;
            max-width: 500px;
        }
    </style>
    <pie-list>
        <pie-list-item primaryText="Primary text"></pie-list-item>
        <pie-list-item primaryText="Primary text"></pie-list-item>
        <pie-list-item primaryText="Primary text"></pie-list-item>
        <pie-list-item primaryText="Primary text"></pie-list-item>
    </pie-list>
`;

export const Borders = createStory<ListProps>(BordersTemplate, defaultArgs)();

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
 * Very long primary and meta text (no secondary text) with a leading icon, to
 * verify wrapping and baseline alignment behaviour.
 */
const LongTextMetaTextOnlyPrimaryTextTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            metaText="Some very long awful meta text Some very long awful meta text">
            ${leadingIcon}
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            metaText="Some very long awful meta text Some very long awful meta text">
            ${leadingIcon}
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            metaText="Some very long awful meta text Some very long awful meta text">
            ${leadingIcon}
        </pie-list-item>

        <pie-list-item
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            metaText="Some very long awful meta text Some very long awful meta text">
            ${leadingIcon}
        </pie-list-item>
    </pie-list>
`);

export const LongTextMetaTextOnlyPrimaryText = createStory<ListProps>(LongTextMetaTextOnlyPrimaryTextTemplate, defaultArgs)();

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

// Test-only stories -----------------------------------------------------------
// The stories below exist purely to drive browser tests. They are not intended
// as usage showcases.

/**
 * Test-only: an item with no `primaryText`. The item should render nothing.
 */
const NoPrimaryTextTemplate = () => withLayout(html`
    <pie-list aria-label="No primary text">
        <pie-list-item></pie-list-item>
    </pie-list>
`);

export const NoPrimaryText = createStory<ListProps>(NoPrimaryTextTemplate, defaultArgs)();

/**
 * Test-only: `metaText` and the `trailing` slot set on the same item. `metaText`
 * takes precedence and the trailing slot is not rendered.
 */
const MetaTextWithTrailingTemplate = () => withLayout(html`
    <pie-list aria-label="Meta text with trailing">
        <pie-list-item primaryText="Primary text" metaText="Meta text">
            ${trailingTag}
        </pie-list-item>
    </pie-list>
`);

export const MetaTextWithTrailing = createStory<ListProps>(MetaTextWithTrailingTemplate, defaultArgs)();

/**
 * Test-only: a thumbnail slotted without `has-media`. The thumbnail should be
 * hidden (media requires an explicit `has-media` opt-in).
 */
const MediaWithoutHasMediaTemplate = () => withLayout(html`
    <pie-list aria-label="Media without has-media">
        <pie-list-item primaryText="Primary text">
            ${leadingThumbnail}
        </pie-list-item>
    </pie-list>
`);

export const MediaWithoutHasMedia = createStory<ListProps>(MediaWithoutHasMediaTemplate, defaultArgs)();

/**
 * Test-only: a thumbnail slotted into a compact item (with `has-media`). The
 * thumbnail should be hidden because media is not permitted in compact items.
 */
const MediaCompactTemplate = () => withLayout(html`
    <pie-list aria-label="Media in a compact item">
        <pie-list-item is-compact has-media primaryText="Primary text">
            ${leadingThumbnail}
        </pie-list-item>
    </pie-list>
`);

export const MediaCompact = createStory<ListProps>(MediaCompactTemplate, defaultArgs)();
