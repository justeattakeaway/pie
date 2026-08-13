import { html, type TemplateResult } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/list';
import '@justeattakeaway/pie-webc/components/list-item';
import '@justeattakeaway/pie-webc/components/thumbnail';
import '@justeattakeaway/pie-webc/components/tag';
import '@justeattakeaway/pie-webc/components/switch';
import '@justeattakeaway/pie-webc/components/radio-group';
import '@justeattakeaway/pie-webc/components/radio';
import '@justeattakeaway/pie-webc/components/checkbox-group';
import '@justeattakeaway/pie-webc/components/checkbox';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder';
import '@justeattakeaway/pie-icons-webc/dist/IconUser';
import '@justeattakeaway/pie-icons-webc/dist/IconLock';
import '@justeattakeaway/pie-icons-webc/dist/IconNotification';
import '@justeattakeaway/pie-icons-webc/dist/IconLogOut';

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
        <pie-list-item hasDivider primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
        <pie-list-item hasDivider primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
        <pie-list-item hasDivider primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
    </pie-list>
`);

export const TextOnly = createStory<ListProps>(TextOnlyTemplate, defaultArgs)();

// Test-only: exercises interactionType role mapping, CSS classes, and ARIA behaviour across all types.
// Each selectable item carries metaText so aria-hidden can be verified. Disabled variants are
// provided for each selectable type to cover the is-disabled CSS hook regardless of interactionType.
const SelectionTypesTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item hasDivider data-test-id="item-none" primaryText="None" metaText="Meta"></pie-list-item>
        <pie-list-item hasDivider data-test-id="item-radio" .interactionType=${'radio'} primaryText="Radio" metaText="Meta"></pie-list-item>
        <pie-list-item hasDivider data-test-id="item-checkbox" .interactionType=${'checkbox'} primaryText="Checkbox" metaText="Meta"></pie-list-item>
        <pie-list-item hasDivider data-test-id="item-switch" .interactionType=${'switch'} primaryText="Switch" metaText="Meta"></pie-list-item>
        <pie-list-item hasDivider data-test-id="item-radio-disabled" .interactionType=${'radio'} primaryText="Radio disabled" disabled></pie-list-item>
        <pie-list-item hasDivider data-test-id="item-checkbox-disabled" .interactionType=${'checkbox'} primaryText="Checkbox disabled" disabled></pie-list-item>
        <pie-list-item data-test-id="item-switch-disabled" .interactionType=${'switch'} primaryText="Switch disabled" disabled></pie-list-item>
    </pie-list>
`);
export const SelectionTypes = createStory<ListProps>(SelectionTypesTemplate, defaultArgs)();

const EXPECTED_CHANGE_EVENT_MESSAGE = 'Change event dispatched';

const EXPECTED_BUTTON_ACTIVATED_MESSAGE = 'Button activated';

// Test-only: a switch selection list (switches have no group, so they sit directly in a `pie-list`).
// Switches are in the leading slot here so the trailing slot is free for `metaText`, letting us
// assert the combined secondary + meta description on the switch itself. Item 3's switch is disabled.
// The four items mirror the checkbox fixture's text combinations (both, secondary only, neither,
// meta only). Used to test naming, row-click toggling, disabled rows and the hover/active reflection.
const SwitchSelectionTemplate = () => {
    function onChange () {
        console.info(EXPECTED_CHANGE_EVENT_MESSAGE);
    }

    return withLayout(html`
        <pie-list aria-label="Notification settings" @change=${onChange}>
            <pie-list-item hasDivider .interactionType=${'switch'} data-test-id="item-1" primaryText="Email" secondaryText="Order updates and receipts" metaText="Weekly">
                <pie-switch slot="leading" data-test-id="switch-1"></pie-switch>
            </pie-list-item>
            <pie-list-item hasDivider .interactionType=${'switch'} data-test-id="item-2" primaryText="Push notifications" secondaryText="Offers and reminders">
                <pie-switch slot="leading" data-test-id="switch-2"></pie-switch>
            </pie-list-item>
            <pie-list-item hasDivider .interactionType=${'switch'} data-test-id="item-3" primaryText="SMS" disabled>
                <pie-switch slot="leading" data-test-id="switch-3" disabled></pie-switch>
            </pie-list-item>
            <pie-list-item .interactionType=${'switch'} data-test-id="item-4" primaryText="Post" metaText="Rarely">
                <pie-switch slot="leading" data-test-id="switch-4"></pie-switch>
            </pie-list-item>
        </pie-list>
    `);
};
export const SwitchSelection = createStory<ListProps>(SwitchSelectionTemplate, defaultArgs)();

// Test-only: a link list. Each row is a navigation link via `interactionType="link"` plus an empty `<a slot="link">`
// stretched over the row. The four items cover the text combinations (both, secondary only, meta
// only, neither) so we can assert the anchor's derived aria-label/aria-description, that the visible
// text is aria-hidden, and that clicking anywhere on the row activates the link.
const LinkListTemplate = () => withLayout(html`
    <pie-list aria-label="Manage your restaurant">
        <pie-list-item hasDivider .interactionType=${'link'} data-test-id="item-1" primaryText="Orders" secondaryText="View and manage live orders" metaText="12 active">
            <a slot="link" href="#orders" data-test-id="link-1"></a>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'link'} data-test-id="item-2" primaryText="Menu" secondaryText="Edit items and prices">
            <a slot="link" href="#menu" data-test-id="link-2"></a>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'link'} data-test-id="item-3" primaryText="Payouts" metaText="Weekly">
            <a slot="link" href="#payouts" data-test-id="link-3"></a>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'link'} data-test-id="item-4" primaryText="Restaurant settings">
            <a slot="link" href="#settings" data-test-id="link-4"></a>
        </pie-list-item>
        <pie-list-item .interactionType=${'link'} data-test-id="item-5" primaryText="Help" secondaryText="Support articles">
            <a slot="link" href="#help" data-test-id="link-5" aria-label="Visit the help centre" aria-description="Guides and FAQs"></a>
        </pie-list-item>
    </pie-list>
`);
export const LinkList = createStory<ListProps>(LinkListTemplate, defaultArgs)();

// Test-only: a button list. Each row is an action via `interactionType="button"`; the item renders
// its own invisible, row-sized native `<button>` (no slotting). The four items cover the text
// combinations (both, secondary only, meta only, neither) so we can assert the button's derived
// aria-label/aria-description, that the visible text is aria-hidden, and that clicking the row (or
// pressing Enter/Space) activates it. A list-level click listener logs on activation (the item fires
// a native `click` that bubbles), used by the activation tests.
const ButtonListTemplate = () => {
    function onClick (event: Event) {
        if ((event.target as HTMLElement).closest('pie-list-item')) {
            console.info(EXPECTED_BUTTON_ACTIVATED_MESSAGE);
        }
    }

    return withLayout(html`
        <pie-list aria-label="Account actions" @click=${onClick}>
            <pie-list-item hasDivider .interactionType=${'button'} data-test-id="item-1" primaryText="Edit profile" secondaryText="Update your name and photo" metaText="New"></pie-list-item>
            <pie-list-item hasDivider .interactionType=${'button'} data-test-id="item-2" primaryText="Change password" secondaryText="Keep your account secure"></pie-list-item>
            <pie-list-item hasDivider .interactionType=${'button'} data-test-id="item-3" primaryText="Sign out" metaText="This device"></pie-list-item>
            <pie-list-item .interactionType=${'button'} data-test-id="item-4" primaryText="Delete account"></pie-list-item>
        </pie-list>
    `);
};
export const ButtonList = createStory<ListProps>(ButtonListTemplate, defaultArgs)();

// Test-only: a disabled button list. Exercises the disabled styling: text uses `content-disabled`
// and slotted icons are dimmed with opacity. Icons are present in the leading slot so both the text
// colour and the icon dimming are captured in the VRT snapshot.
const ButtonListDisabledTemplate = () => withLayout(html`
    <pie-list aria-label="Account actions">
        <pie-list-item hasDivider .interactionType=${'button'} disabled data-test-id="item-1" primaryText="Edit profile" secondaryText="Update your name and photo" metaText="New">
            <icon-user slot="leading"></icon-user>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'button'} disabled data-test-id="item-2" primaryText="Change password" secondaryText="Keep your account secure">
            <icon-lock slot="leading"></icon-lock>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'button'} disabled data-test-id="item-3" primaryText="Notification preferences" secondaryText="Choose what we email you about">
            <icon-notification slot="leading"></icon-notification>
        </pie-list-item>
        <pie-list-item .interactionType=${'button'} disabled data-test-id="item-4" primaryText="Sign out" secondaryText="End your session on this device">
            <icon-log-out slot="leading"></icon-log-out>
        </pie-list-item>
    </pie-list>
`);
export const ButtonListDisabled = createStory<ListProps>(ButtonListDisabledTemplate, defaultArgs)();

// Test-only: slotted icons given explicit colours, shown enabled and disabled. Disabled items must
// dim their icons with opacity and keep the author's colour, rather than overriding it with a
// disabled colour token. The two lists are identical apart from `disabled`, so the VRT snapshot
// compares each coloured icon against its own enabled counterpart.
const ColouredIconsDisabledTemplate = () => withLayout(html`
    <style>
        pie-list + pie-list {
            margin-block-start: var(--dt-spacing-d);
        }
    </style>
    <pie-list aria-label="Coloured icons (enabled)">
        <pie-list-item hasDivider .interactionType=${'button'} data-test-id="item-enabled-1" primaryText="Error colour icons" secondaryText="Enabled">
            <icon-user slot="leading" style="color: var(--dt-color-content-error);"></icon-user>
            <icon-placeholder slot="trailing" style="color: var(--dt-color-content-error);"></icon-placeholder>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'button'} data-test-id="item-enabled-2" primaryText="Positive colour icons" secondaryText="Enabled">
            <icon-lock slot="leading" style="color: var(--dt-color-content-positive);"></icon-lock>
            <icon-placeholder slot="trailing" style="color: var(--dt-color-content-positive);"></icon-placeholder>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'button'} data-test-id="item-enabled-3" primaryText="Link colour icons" secondaryText="Enabled">
            <icon-notification slot="leading" style="color: var(--dt-color-content-link);"></icon-notification>
            <icon-placeholder slot="trailing" style="color: var(--dt-color-content-link);"></icon-placeholder>
        </pie-list-item>
        <pie-list-item .interactionType=${'button'} data-test-id="item-enabled-4" primaryText="Brand colour icons" secondaryText="Enabled">
            <icon-log-out slot="leading" style="color: var(--dt-color-content-brand);"></icon-log-out>
            <icon-placeholder slot="trailing" style="color: var(--dt-color-content-brand);"></icon-placeholder>
        </pie-list-item>
    </pie-list>
    <pie-list aria-label="Coloured icons (disabled)">
        <pie-list-item hasDivider .interactionType=${'button'} disabled data-test-id="item-disabled-1" primaryText="Error colour icons" secondaryText="Disabled">
            <icon-user slot="leading" style="color: var(--dt-color-content-error);"></icon-user>
            <icon-placeholder slot="trailing" style="color: var(--dt-color-content-error);"></icon-placeholder>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'button'} disabled data-test-id="item-disabled-2" primaryText="Positive colour icons" secondaryText="Disabled">
            <icon-lock slot="leading" style="color: var(--dt-color-content-positive);"></icon-lock>
            <icon-placeholder slot="trailing" style="color: var(--dt-color-content-positive);"></icon-placeholder>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'button'} disabled data-test-id="item-disabled-3" primaryText="Link colour icons" secondaryText="Disabled">
            <icon-notification slot="leading" style="color: var(--dt-color-content-link);"></icon-notification>
            <icon-placeholder slot="trailing" style="color: var(--dt-color-content-link);"></icon-placeholder>
        </pie-list-item>
        <pie-list-item .interactionType=${'button'} disabled data-test-id="item-disabled-4" primaryText="Brand colour icons" secondaryText="Disabled">
            <icon-log-out slot="leading" style="color: var(--dt-color-content-brand);"></icon-log-out>
            <icon-placeholder slot="trailing" style="color: var(--dt-color-content-brand);"></icon-placeholder>
        </pie-list-item>
    </pie-list>
`);
export const ColouredIconsDisabled = createStory<ListProps>(ColouredIconsDisabledTemplate, defaultArgs)();

/**
 * `isBold` sets the primary text to a bold font-weight.
 */
const BoldTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item hasDivider isBold primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
        <pie-list-item hasDivider isBold primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
        <pie-list-item hasDivider isBold primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
        <pie-list-item isBold primaryText="Primary text" secondaryText="Secondary text"></pie-list-item>
    </pie-list>
`);

export const Bold = createStory<ListProps>(BoldTemplate, defaultArgs)();

/**
 * Both a leading and a trailing icon on each item.
 */
const LeadingAndTrailingTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item hasDivider primaryText="Primary text" secondaryText="Secondary text">
            ${leadingIcon}
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item hasDivider primaryText="Primary text" secondaryText="Secondary text">
            ${leadingIcon}
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item hasDivider primaryText="Primary text" secondaryText="Secondary text">
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
        <pie-list-item hasDivider primaryText="Primary text">
            ${leadingIcon}
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item hasDivider primaryText="Primary text">
            ${leadingIcon}
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item hasDivider primaryText="Primary text">
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
        <pie-list-item hasDivider primaryText="Primary text" secondaryText="Secondary text" metaText="Meta text"></pie-list-item>
        <pie-list-item hasDivider primaryText="Primary text" secondaryText="Secondary text" metaText="Meta text"></pie-list-item>
        <pie-list-item hasDivider primaryText="Primary text" secondaryText="Secondary text" metaText="Meta text"></pie-list-item>
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
        <pie-list-item hasDivider primaryText="Primary text" metaText="Meta text"></pie-list-item>
        <pie-list-item hasDivider primaryText="Primary text" metaText="Meta text"></pie-list-item>
        <pie-list-item hasDivider primaryText="Primary text" metaText="Meta text"></pie-list-item>
        <pie-list-item primaryText="Primary text" metaText="Meta text"></pie-list-item>
    </pie-list>
`);

export const MetaTextOnlyPrimaryText = createStory<ListProps>(MetaTextOnlyPrimaryTextTemplate, defaultArgs)();

/**
 * `hasMedia` reduces the block padding to suit a larger slotted pie-thumbnail.
 * The reduced padding only applies when there is no secondary text. The last
 * two items show padding reverting to normal.
 */
const MediaTemplate = () => withLayout(html`
    <h2>Primary text only</h2>
    <pie-list>
        <pie-list-item hasDivider hasMedia primaryText="Primary text">
            ${leadingThumbnail}
        </pie-list-item>
        <pie-list-item hasDivider hasMedia primaryText="Primary text">
            ${leadingThumbnail}
        </pie-list-item>
        <pie-list-item hasMedia primaryText="Primary text">
            ${leadingThumbnail}
        </pie-list-item>
    </pie-list>

    <h2>With secondary text</h2>
    <pie-list>
        <pie-list-item hasDivider hasMedia primaryText="Primary text" secondaryText="Secondary text">
            ${leadingThumbnail}
        </pie-list-item>
        <pie-list-item hasDivider hasMedia primaryText="Primary text" secondaryText="Secondary text">
            ${leadingThumbnail}
        </pie-list-item>
        <pie-list-item hasMedia primaryText="Primary text" secondaryText="Secondary text">
            ${leadingThumbnail}
        </pie-list-item>
    </pie-list>
`);

export const Media = createStory<ListProps>(MediaTemplate, defaultArgs)();

/**
 * `isCompact` reduces the vertical space of each item.
 */
const CompactTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item hasDivider isCompact primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item hasDivider isCompact primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item hasDivider isCompact primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item isCompact primaryText="Primary text">
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
            hasDivider
            primaryText="Primary text"
            secondaryText="Secondary text">
            ${trailingTag}
        </pie-list-item>
        <pie-list-item
            hasDivider
            primaryText="Primary text"
            secondaryText="Secondary text">
            ${trailingTag}
        </pie-list-item>
        <pie-list-item
            hasDivider
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
 * `--list-item-alignment: center` vertically centres the item content. It is set on the
 * `pie-list-item` (here via a class), not on `pie-list` — the item defines the default on its host.
 */
const AlignmentOverrideTemplate = () => withLayout(html`
    <style>.centre-aligned { --list-item-alignment: center; }</style>
    <pie-list>
        <pie-list-item
            hasDivider
            class="centre-aligned"
            primaryText="Primary text"
            secondaryText="Secondary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item
            hasDivider
            class="centre-aligned"
            primaryText="Primary text"
            secondaryText="Secondary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item
            hasDivider
            class="centre-aligned"
            primaryText="Primary text"
            secondaryText="Secondary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item
            class="centre-aligned"
            primaryText="Primary text"
            secondaryText="Secondary text">
            ${trailingIcon}
        </pie-list-item>
    </pie-list>
`);

export const AlignmentOverride = createStory<ListProps>(AlignmentOverrideTemplate, defaultArgs)();

/**
 * `--list-item-inline-padding: 0` removes the inline padding entirely. It must be set on the
 * `pie-list-item` (here via a class), not on `pie-list` — the item defines the default on its host.
 */
const RemovedPaddingTemplate = () => withLayout(html`
    <style>.no-inline-padding { --list-item-inline-padding: 0; }</style>
    <pie-list>
        <pie-list-item hasDivider class="no-inline-padding" primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item hasDivider class="no-inline-padding" primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item hasDivider class="no-inline-padding" primaryText="Primary text">
            ${trailingIcon}
        </pie-list-item>
        <pie-list-item class="no-inline-padding" primaryText="Primary text">
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
        <pie-list-item hasDivider primaryText="Primary text"></pie-list-item>
        <pie-list-item hasDivider primaryText="Primary text"></pie-list-item>
        <pie-list-item hasDivider primaryText="Primary text"></pie-list-item>
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
            hasDivider
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long Secondary text that goes on far too long"
            metaText="Some very long awful meta text Some very long awful meta text">
            ${leadingIcon}
        </pie-list-item>

        <pie-list-item
            hasDivider
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long Secondary text that goes on far too long"
            metaText="Some very long awful meta text Some very long awful meta text">
            ${leadingIcon}
        </pie-list-item>

        <pie-list-item
            hasDivider
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
            hasDivider
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            metaText="Some very long awful meta text Some very long awful meta text">
            ${leadingIcon}
        </pie-list-item>

        <pie-list-item
            hasDivider
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            metaText="Some very long awful meta text Some very long awful meta text">
            ${leadingIcon}
        </pie-list-item>

        <pie-list-item
            hasDivider
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
    <style>.centre-aligned { --list-item-alignment: center; }</style>
    <pie-list>
        <pie-list-item
            hasDivider
            class="centre-aligned"
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long Secondary text that goes on far too long Secondary text that goes on far too long">
            ${leadingIcon}
            ${trailingTag}
        </pie-list-item>

        <pie-list-item
            hasDivider
            class="centre-aligned"
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long Secondary text that goes on far too long Secondary text that goes on far too long">
            ${leadingIcon}
            ${trailingTag}
        </pie-list-item>

        <pie-list-item
            hasDivider
            class="centre-aligned"
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long Secondary text that goes on far too long Secondary text that goes on far too long">
            ${leadingIcon}
            ${trailingTag}
        </pie-list-item>

        <pie-list-item
            class="centre-aligned"
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            secondaryText="Secondary text that goes on far too long Secondary text that goes on far too long Secondary text that goes on far too long">
            ${leadingIcon}
            ${trailingTag}
        </pie-list-item>
    </pie-list>
`);

export const LongTextCentreAligned = createStory<ListProps>(LongTextCentreAlignedTemplate, defaultArgs)();

/**
 * Compact items whose primary text wraps onto more than one line. The leading icon, trailing icon
 * and meta text should all stay aligned with the first line of the primary text rather than being
 * centred across every line.
 */
const LongTextCompactTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item
            hasDivider
            isCompact
            primaryText="Primary text that goes on far too long Primary text that goes on far too long">
            ${leadingIcon}
            ${trailingIcon}
        </pie-list-item>

        <pie-list-item
            hasDivider
            isCompact
            primaryText="Primary text that goes on far too long Primary text that goes on far too long"
            metaText="Meta text">
            ${leadingIcon}
        </pie-list-item>

        <pie-list-item
            hasDivider
            isCompact
            primaryText="Primary text that goes on far too long Primary text that goes on far too long">
            ${leadingIcon}
            ${trailingTag}
        </pie-list-item>

        <pie-list-item
            isCompact
            primaryText="Primary text that goes on far too long Primary text that goes on far too long">
            ${trailingIcon}
        </pie-list-item>
    </pie-list>
`);

export const LongTextCompact = createStory<ListProps>(LongTextCompactTemplate, defaultArgs)();

/**
 * Compact items whose meta text wraps while the primary text stays on one line. The meta text is then
 * the taller content, so the row grows and the primary text sits level with the meta text's first line
 * rather than centred against it.
 */
const LongMetaTextCompactTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item
            hasDivider
            isCompact
            primaryText="Primary text"
            metaText="Some very long awful meta text">
            ${leadingIcon}
        </pie-list-item>

        <pie-list-item
            hasDivider
            isCompact
            primaryText="Primary text"
            metaText="Some very long awful meta text"></pie-list-item>

        <pie-list-item
            hasDivider
            isCompact
            primaryText="Primary text"
            metaText="Some very long awful meta text">
            ${leadingIcon}
        </pie-list-item>

        <pie-list-item
            isCompact
            primaryText="Primary text"
            metaText="Some very long awful meta text"></pie-list-item>
    </pie-list>
`);

export const LongMetaTextCompact = createStory<ListProps>(LongMetaTextCompactTemplate, defaultArgs)();

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
 * Test-only: compact items with primary text only.
 * Verifies the compact row height (48px min-height).
 */
const ItemHeightCompactTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item hasDivider isCompact primaryText="Primary text" data-test-id="item-1"></pie-list-item>
        <pie-list-item hasDivider isCompact primaryText="Primary text" data-test-id="item-2"></pie-list-item>
        <pie-list-item hasDivider isCompact primaryText="Primary text" data-test-id="item-3"></pie-list-item>
        <pie-list-item isCompact primaryText="Primary text" data-test-id="item-4"></pie-list-item>
    </pie-list>
`);

export const ItemHeightCompact = createStory<ListProps>(ItemHeightCompactTemplate, defaultArgs)();

/**
 * Test-only: default (non-compact) items with primary and secondary text.
 * Verifies the two-line row height (76px min-height).
 */
const ItemHeightPrimaryAndSecondaryTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item hasDivider primaryText="Primary text" secondaryText="Secondary text" data-test-id="item-1"></pie-list-item>
        <pie-list-item hasDivider primaryText="Primary text" secondaryText="Secondary text" data-test-id="item-2"></pie-list-item>
        <pie-list-item hasDivider primaryText="Primary text" secondaryText="Secondary text" data-test-id="item-3"></pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text" data-test-id="item-4"></pie-list-item>
    </pie-list>
`);

export const ItemHeightPrimaryAndSecondary = createStory<ListProps>(ItemHeightPrimaryAndSecondaryTemplate, defaultArgs)();

/**
 * Test-only: default (non-compact) items with primary text only.
 * Verifies the single-line row height (56px min-height).
 */
const ItemHeightPrimaryOnlyTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item hasDivider primaryText="Primary text" data-test-id="item-1"></pie-list-item>
        <pie-list-item hasDivider primaryText="Primary text" data-test-id="item-2"></pie-list-item>
        <pie-list-item hasDivider primaryText="Primary text" data-test-id="item-3"></pie-list-item>
        <pie-list-item primaryText="Primary text" data-test-id="item-4"></pie-list-item>
    </pie-list>
`);

export const ItemHeightPrimaryOnly = createStory<ListProps>(ItemHeightPrimaryOnlyTemplate, defaultArgs)();

/**
 * Test-only: compact items with primary text only, without a divider.
 * Verifies the compact row height (48px min-height) is the same when hasDivider is false.
 */
const ItemHeightCompactNoDividerTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item isCompact primaryText="Primary text" data-test-id="item-1"></pie-list-item>
        <pie-list-item isCompact primaryText="Primary text" data-test-id="item-2"></pie-list-item>
        <pie-list-item isCompact primaryText="Primary text" data-test-id="item-3"></pie-list-item>
        <pie-list-item isCompact primaryText="Primary text" data-test-id="item-4"></pie-list-item>
    </pie-list>
`);

export const ItemHeightCompactNoDivider = createStory<ListProps>(ItemHeightCompactNoDividerTemplate, defaultArgs)();

/**
 * Test-only: default (non-compact) items with primary and secondary text, without a divider.
 * Verifies the two-line row height (76px min-height) is the same when hasDivider is false.
 */
const ItemHeightPrimaryAndSecondaryNoDividerTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text" data-test-id="item-1"></pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text" data-test-id="item-2"></pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text" data-test-id="item-3"></pie-list-item>
        <pie-list-item primaryText="Primary text" secondaryText="Secondary text" data-test-id="item-4"></pie-list-item>
    </pie-list>
`);

export const ItemHeightPrimaryAndSecondaryNoDivider = createStory<ListProps>(ItemHeightPrimaryAndSecondaryNoDividerTemplate, defaultArgs)();

/**
 * Test-only: default (non-compact) items with primary text only, without a divider.
 * Verifies the single-line row height (56px min-height) is the same when hasDivider is false.
 */
const ItemHeightPrimaryOnlyNoDividerTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item primaryText="Primary text" data-test-id="item-1"></pie-list-item>
        <pie-list-item primaryText="Primary text" data-test-id="item-2"></pie-list-item>
        <pie-list-item primaryText="Primary text" data-test-id="item-3"></pie-list-item>
        <pie-list-item primaryText="Primary text" data-test-id="item-4"></pie-list-item>
    </pie-list>
`);

export const ItemHeightPrimaryOnlyNoDivider = createStory<ListProps>(ItemHeightPrimaryOnlyNoDividerTemplate, defaultArgs)();

/**
 * Test-only: verifies pie-tag disabled behaviour alongside pie-list-item.
 *
 * Section 1 — individual disabled rows: `isDimmed` must be set explicitly on the tag; a disabled
 * list-item does not propagate its state to slotted tags automatically.
 *
 * Section 2 — group-disabled rows: when the containing `pie-radio-group` is disabled, the group's
 * context propagates to every slotted `pie-tag` automatically (no explicit `isDimmed` needed).
 */
const DisabledTagBehaviourTemplate = () => withLayout(html`
    <pie-list>
        <pie-list-item hasDivider .interactionType=${'button'} disabled primaryText="Disabled — tag explicitly dimmed" data-test-id="item-disabled-explicit">
            <pie-tag slot="trailing" isDimmed data-test-id="tag-disabled-explicit">Label</pie-tag>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'button'} disabled primaryText="Disabled — tag not dimmed" data-test-id="item-disabled-no-dimmed">
            <pie-tag slot="trailing" data-test-id="tag-disabled-no-dimmed">Label</pie-tag>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'button'} primaryText="Enabled — tag explicitly dimmed" data-test-id="item-enabled-explicit">
            <pie-tag slot="trailing" isDimmed data-test-id="tag-enabled-explicit">Label</pie-tag>
        </pie-list-item>
        <pie-list-item .interactionType=${'button'} primaryText="Enabled — tag not dimmed" data-test-id="item-enabled-no-dimmed">
            <pie-tag slot="trailing" data-test-id="tag-enabled-no-dimmed">Label</pie-tag>
        </pie-list-item>
    </pie-list>

    <pie-radio-group name="group-disabled" disabled>
        <pie-list-item hasDivider .interactionType=${'radio'} primaryText="Disabled via group" data-test-id="item-group-disabled-1">
            <pie-radio slot="leading" value="a"></pie-radio>
            <pie-tag slot="trailing" data-test-id="tag-group-disabled-1">Label</pie-tag>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'radio'} primaryText="Disabled via group" data-test-id="item-group-disabled-2">
            <pie-radio slot="leading" value="b"></pie-radio>
            <pie-tag slot="trailing" data-test-id="tag-group-disabled-2">Label</pie-tag>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'radio'} primaryText="Disabled via group" data-test-id="item-group-disabled-3">
            <pie-radio slot="leading" value="c"></pie-radio>
            <pie-tag slot="trailing" data-test-id="tag-group-disabled-3">Label</pie-tag>
        </pie-list-item>
        <pie-list-item .interactionType=${'radio'} primaryText="Disabled via group" data-test-id="item-group-disabled-4">
            <pie-radio slot="leading" value="d"></pie-radio>
            <pie-tag slot="trailing" data-test-id="tag-group-disabled-4">Label</pie-tag>
        </pie-list-item>
    </pie-radio-group>

    <pie-radio-group name="group-enabled">
        <pie-list-item hasDivider .interactionType=${'radio'} primaryText="Enabled via group" data-test-id="item-group-enabled-1">
            <pie-radio slot="leading" value="e"></pie-radio>
            <pie-tag slot="trailing" data-test-id="tag-group-enabled-1">Label</pie-tag>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'radio'} primaryText="Enabled via group" data-test-id="item-group-enabled-2">
            <pie-radio slot="leading" value="f"></pie-radio>
            <pie-tag slot="trailing" data-test-id="tag-group-enabled-2">Label</pie-tag>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'radio'} primaryText="Enabled via group" data-test-id="item-group-enabled-3">
            <pie-radio slot="leading" value="g"></pie-radio>
            <pie-tag slot="trailing" data-test-id="tag-group-enabled-3">Label</pie-tag>
        </pie-list-item>
        <pie-list-item .interactionType=${'radio'} primaryText="Enabled via group" data-test-id="item-group-enabled-4">
            <pie-radio slot="leading" value="h"></pie-radio>
            <pie-tag slot="trailing" data-test-id="tag-group-enabled-4">Label</pie-tag>
        </pie-list-item>
    </pie-radio-group>

    <pie-checkbox-group name="checkbox-group-disabled" disabled>
        <pie-list-item hasDivider .interactionType=${'checkbox'} primaryText="Disabled via group" data-test-id="item-checkbox-group-disabled-1">
            <pie-checkbox slot="leading" value="a"></pie-checkbox>
            <pie-tag slot="trailing" data-test-id="tag-checkbox-group-disabled-1">Label</pie-tag>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'checkbox'} primaryText="Disabled via group" data-test-id="item-checkbox-group-disabled-2">
            <pie-checkbox slot="leading" value="b"></pie-checkbox>
            <pie-tag slot="trailing" data-test-id="tag-checkbox-group-disabled-2">Label</pie-tag>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'checkbox'} primaryText="Disabled via group" data-test-id="item-checkbox-group-disabled-3">
            <pie-checkbox slot="leading" value="c"></pie-checkbox>
            <pie-tag slot="trailing" data-test-id="tag-checkbox-group-disabled-3">Label</pie-tag>
        </pie-list-item>
        <pie-list-item .interactionType=${'checkbox'} primaryText="Disabled via group" data-test-id="item-checkbox-group-disabled-4">
            <pie-checkbox slot="leading" value="d"></pie-checkbox>
            <pie-tag slot="trailing" data-test-id="tag-checkbox-group-disabled-4">Label</pie-tag>
        </pie-list-item>
    </pie-checkbox-group>

    <pie-checkbox-group name="checkbox-group-enabled">
        <pie-list-item hasDivider .interactionType=${'checkbox'} primaryText="Enabled via group" data-test-id="item-checkbox-group-enabled-1">
            <pie-checkbox slot="leading" value="e"></pie-checkbox>
            <pie-tag slot="trailing" data-test-id="tag-checkbox-group-enabled-1">Label</pie-tag>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'checkbox'} primaryText="Enabled via group" data-test-id="item-checkbox-group-enabled-2">
            <pie-checkbox slot="leading" value="f"></pie-checkbox>
            <pie-tag slot="trailing" data-test-id="tag-checkbox-group-enabled-2">Label</pie-tag>
        </pie-list-item>
        <pie-list-item hasDivider .interactionType=${'checkbox'} primaryText="Enabled via group" data-test-id="item-checkbox-group-enabled-3">
            <pie-checkbox slot="leading" value="g"></pie-checkbox>
            <pie-tag slot="trailing" data-test-id="tag-checkbox-group-enabled-3">Label</pie-tag>
        </pie-list-item>
        <pie-list-item .interactionType=${'checkbox'} primaryText="Enabled via group" data-test-id="item-checkbox-group-enabled-4">
            <pie-checkbox slot="leading" value="h"></pie-checkbox>
            <pie-tag slot="trailing" data-test-id="tag-checkbox-group-enabled-4">Label</pie-tag>
        </pie-list-item>
    </pie-checkbox-group>
`);

export const DisabledTagBehaviour = createStory<ListProps>(DisabledTagBehaviourTemplate, defaultArgs)();
