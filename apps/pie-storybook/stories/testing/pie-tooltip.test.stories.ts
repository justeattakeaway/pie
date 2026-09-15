import { html, nothing, type TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/tooltip';
import {
    type TooltipProps as TooltipBaseProps,
    defaultProps,
    positions,
    sizes,
    types,
    variants,
} from '@justeattakeaway/pie-webc/components/tooltip';

import '@justeattakeaway/pie-webc/components/button';
import '@justeattakeaway/pie-webc/components/icon-button';
import '@justeattakeaway/pie-webc/components/modal';
import '@justeattakeaway/pie-icons-webc/dist/IconInfoCircle.js';

import { createStory, type TemplateFunction } from '../../utilities';

// Extending the props type definition to include storybook specific properties for controls
type TooltipProps = TooltipBaseProps & {
    content: string;
    hasAction: boolean;
    tooltipOffset: string;
    tooltipWidth: string;
    triggerInlineSize: string;
    containerInlineSize: string;
    isFooterPinned: boolean;
};

type TooltipStoryMeta = Meta<TooltipProps>;

/**
 * The component never opens or closes itself, so the trigger stories have to honour the requests
 * for the interactions to be observable at all. This is the whole of the consumer's side of the
 * contract: take the event, set the value.
 */
const handleOpen = (event: Event) => {
    (event.currentTarget as HTMLElement & { isOpen: boolean }).isOpen = true;
};

const handleClose = (event: Event) => {
    (event.currentTarget as HTMLElement & { isOpen: boolean }).isOpen = false;
};

const shortContent = 'Arrives today.';
const longContent = 'Orders placed before 6pm arrive today. Orders placed after 6pm arrive the next working day, including at weekends.';

const defaultArgs: TooltipProps = {
    ...defaultProps,
    isOpen: true,
    content: shortContent,
    hasAction: false,
    tooltipOffset: '',
    tooltipWidth: '',
    triggerInlineSize: '120px',
    containerInlineSize: '400px',
    isFooterPinned: false,
    heading: '',
    aria: {
        close: 'Close',
        label: '',
    },
};

const tooltipStoryMeta: TooltipStoryMeta = {
    title: 'Tooltip',
    component: 'pie-tooltip',
    // `type` is declared alongside `control` on every boolean so that Storybook coerces the
    // string form used in test URLs. Without it, `hasAction=false` arrives as the truthy
    // string "false", because storybook-only args have no custom elements manifest entry.
    argTypes: {
        isOpen: { control: 'boolean', type: 'boolean' },
        position: { control: 'select', options: positions },
        size: { control: 'select', options: sizes },
        variant: { control: 'select', options: variants },
        type: { control: 'select', options: types },
        isDismissible: { control: 'boolean', type: 'boolean' },
        heading: { control: 'text' },
        aria: { control: 'object' },
        content: { control: 'text' },
        hasAction: { control: 'boolean', type: 'boolean' },
        tooltipOffset: { control: 'text' },
        tooltipWidth: { control: 'text' },
        triggerInlineSize: { control: 'text' },
        containerInlineSize: { control: 'text' },
        isFooterPinned: { control: 'boolean', type: 'boolean' },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default tooltipStoryMeta;

/**
 * The tooltip is a fixed overlay projected over its trigger, so every test story keeps its
 * triggers well clear of the viewport edges. Placement is deliberately static in this ticket:
 * nothing flips or shifts to stay in view.
 */
const pagePadding = 'var(--dt-spacing-j)';
const pageInlinePadding = 'var(--dt-spacing-j)';

const renderContent = (content: string, hasAction: boolean): TemplateResult => html`
    <span slot="content" data-test-id="pie-tooltip-slotted-content">${content}</span>
    ${hasAction
    ? html`<pie-button slot="action" size="xsmall" data-test-id="pie-tooltip-slotted-action">Next</pie-button>`
    : nothing}`;

/**
 * The `icon` type is the compact treatment intended for icon triggers, so its stories anchor to a
 * `pie-icon-button` rather than the text button the rest use. The outline variant follows the
 * story background, which is dark wherever the panel is `inverse`.
 */
const renderTrigger = ({
    type,
    variant,
}: Pick<TooltipProps, 'type' | 'variant'>): TemplateResult => (type === 'icon'
    ? html`
        <pie-icon-button
            id="tooltip-trigger"
            data-test-id="tooltip-trigger"
            variant="${variant === 'inverse' ? 'inverse-outline' : 'outline'}"
            .aria="${{ label: 'Delivery times' }}">
            <icon-info-circle></icon-info-circle>
        </pie-icon-button>`
    : html`
        <pie-button
            id="tooltip-trigger"
            data-test-id="tooltip-trigger">
            Delivery times
        </pie-button>`);

/**
 * The workhorse story. It attaches no event listeners at all, so it also proves that the
 * component never writes to its own `isOpen`: dismissing an unwired panel changes nothing.
 */
const DefaultTemplate: TemplateFunction<TooltipProps> = ({
    aria,
    containerInlineSize,
    content,
    hasAction,
    heading,
    headingLevel,
    isDismissible,
    isOpen,
    position,
    size,
    tooltipOffset,
    tooltipWidth,
    type,
    variant,
}) => {
    const cssVariables = styleMap({
        '--tooltip-offset': tooltipOffset || null,
        '--tooltip-width': tooltipWidth
            ? `min(${tooltipWidth}, calc(100vw - (2 * ${pageInlinePadding})))`
            : null,
    });

    return html`
    <div style="padding: ${pagePadding};">
        <div
            data-test-id="tooltip-trigger-container"
            style="inline-size: min(${containerInlineSize}, 100%);">
            ${renderTrigger({ type, variant })}

            <pie-tooltip
                trigger="tooltip-trigger"
                ?isOpen="${isOpen}"
                ?isDismissible="${isDismissible}"
                position="${ifDefined(position)}"
                size="${ifDefined(size)}"
                type="${ifDefined(type)}"
                variant="${ifDefined(variant)}"
                heading="${heading || nothing}"
                headingLevel="${ifDefined(headingLevel)}"
                .aria="${aria}"
                style="${cssVariables}">
                ${renderContent(content, hasAction)}
            </pie-tooltip>
        </div>
    </div>`;
};

export const Default = createStory<TooltipProps>(DefaultTemplate, defaultArgs)();

const scrollContent = 'Tooltips describe an element or provide an action without interrupting the user. This scrolling fixture keeps the trigger and tooltip at the top of the document while the content below creates a page that extends beyond the viewport.';

const ScrolledTemplate = (): TemplateResult => html`
    <div style="padding-inline: ${pageInlinePadding};">
        <pie-button
            id="tooltip-scroll-trigger"
            data-test-id="tooltip-trigger">
            Delivery times
        </pie-button>

        <pie-tooltip
            trigger="tooltip-scroll-trigger"
            position="bottom"
            ?isOpen="${true}">
            <span slot="content">Arrives today.</span>
        </pie-tooltip>

        <p>${Array.from({ length: 50 }, () => scrollContent).join(' ')}</p>
    </div>`;

export const Scrolled = createStory<TooltipProps>(ScrolledTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

export const WithHeading = createStory<TooltipProps>(DefaultTemplate, {
    ...defaultArgs,
    heading: 'Delivery times',
    content: longContent,
})();

export const WithAction = createStory<TooltipProps>(DefaultTemplate, {
    ...defaultArgs,
    heading: 'Delivery times',
    hasAction: true,
})();

export const WithActionAndNoHeading = createStory<TooltipProps>(DefaultTemplate, {
    ...defaultArgs,
    hasAction: true,
    aria: {
        close: 'Close',
        label: 'Delivery times',
    },
})();

export const Dismissible = createStory<TooltipProps>(DefaultTemplate, {
    ...defaultArgs,
    isDismissible: true,
    heading: 'Delivery times',
})();

export const DismissibleWithAction = createStory<TooltipProps>(DefaultTemplate, {
    ...defaultArgs,
    isDismissible: true,
    hasAction: true,
    heading: 'Delivery times',
})();

export const DismissibleNoHeading = createStory<TooltipProps>(DefaultTemplate, {
    ...defaultArgs,
    isDismissible: true,
})();

export const FitToContent = createStory<TooltipProps>(DefaultTemplate, {
    ...defaultArgs,
    size: 'fit-to-content',
    content: shortContent,
})();

const FillContainerTemplate: TemplateFunction<TooltipProps> = ({
    aria,
    containerInlineSize,
    content,
    hasAction,
    heading,
    headingLevel,
    isDismissible,
    isOpen,
    position,
    tooltipOffset,
    tooltipWidth,
    type,
    variant,
}) => {
    const cssVariables = styleMap({
        '--tooltip-offset': tooltipOffset || null,
        '--tooltip-width': tooltipWidth
            ? `min(${tooltipWidth}, calc(100vw - (2 * ${pageInlinePadding})))`
            : null,
    });

    return html`
    <div style="padding: ${pagePadding};">
        <div
            data-test-id="tooltip-trigger-container"
            style="inline-size: min(${containerInlineSize}, 100%); border: var(--dt-color-border-strong) dashed 1px; padding: var(--dt-spacing-a);">
            <pie-button
                id="tooltip-trigger"
                data-test-id="tooltip-trigger"
                ?isFullWidth="${true}">
                Delivery times
            </pie-button>

            <pie-tooltip
                trigger="tooltip-trigger"
                ?isOpen="${isOpen}"
                ?isDismissible="${isDismissible}"
                position="${ifDefined(position)}"
                size="fill-container"
                type="${ifDefined(type)}"
                variant="${ifDefined(variant)}"
                heading="${heading || nothing}"
                headingLevel="${ifDefined(headingLevel)}"
                .aria="${aria}"
                style="${cssVariables}">
                ${renderContent(content, hasAction)}
            </pie-tooltip>
        </div>
    </div>`;
};

export const FillContainer = createStory<TooltipProps>(FillContainerTemplate, {
    ...defaultArgs,
    size: 'fill-container',
    content: longContent,
})();

// -----------------------------------------------------------------------------
// Grids
// -----------------------------------------------------------------------------

type AnchorProps = Partial<TooltipProps> & {
    id: string;
    label: string;
};

const renderAnchoredTooltip = ({
    id,
    label,
    content = shortContent,
    hasAction = false,
    heading = '',
    isDismissible = false,
    position = 'top',
    size = 'default',
    tooltipOffset = '',
    type = 'default',
    variant = 'default',
}: AnchorProps): TemplateResult => html`
    <div>
        <pie-button id="${id}" data-test-id="${id}">${label}</pie-button>

        <pie-tooltip
            data-test-id="${id}-tooltip"
            trigger="${id}"
            position="${position}"
            size="${size}"
            type="${type}"
            variant="${variant}"
            heading="${heading || nothing}"
            ?isDismissible="${isDismissible}"
            ?isOpen="${true}"
            .aria="${{ close: 'Close', label: heading ? '' : label }}"
            style="${styleMap({ '--tooltip-offset': tooltipOffset || null })}">
            ${renderContent(content, hasAction)}
        </pie-tooltip>
    </div>`;

const placementGridAreas = `
    '.           top-start     top      top-end      .'
    'left-start  .             .        .            right-start'
    'left        .             .        .            right'
    'left-end    .             .        .            right-end'
    '.           bottom-start  bottom   bottom-end   .'
`;

/**
 * Uniform square anchors, so the only thing that varies between the twelve panels is the
 * placement itself.
 *
 * Direction is left to the `writingDirection` global, so switching the toolbar mirrors both the
 * named grid areas and the panels placed against them. The RTL rendering should be a mirror
 * image of the LTR one.
 */
const PlacementGridTemplate: TemplateFunction<TooltipProps> = ({ type, variant }) => html`
    <div class="tooltip-placement-grid" style="grid-template-areas: ${placementGridAreas};">
        ${positions.map((position) => html`
            <button
                id="placement-${position}"
                data-test-id="placement-${position}"
                class="tooltip-placement-anchor"
                style="grid-area: ${position};"
                type="button"
                aria-label="${position}"></button>

            <pie-tooltip
                data-test-id="placement-${position}-tooltip"
                trigger="placement-${position}"
                position="${position}"
                size="fit-to-content"
                type="${ifDefined(type)}"
                variant="${ifDefined(variant)}"
                ?isOpen="${true}">
                <span slot="content">${position}</span>
            </pie-tooltip>`)}
    </div>
    <style>
        .tooltip-placement-grid {
            display: grid;
            row-gap: var(--dt-spacing-e);
            column-gap: var(--dt-spacing-j);
            justify-content: center;
            padding: var(--dt-spacing-h) var(--dt-spacing-j);
        }

        .tooltip-placement-anchor {
            inline-size: 56px;
            block-size: 56px;
            border: var(--dt-color-border-strong) solid 1px;
            border-radius: var(--dt-radius-rounded-b);
            background-color: var(--dt-color-container-default);
            cursor: pointer;
        }
    </style>`;

export const PlacementGrid = createStory<TooltipProps>(PlacementGridTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

export const Inverse = createStory<TooltipProps>(DefaultTemplate, {
    ...defaultArgs,
    variant: 'inverse',
})({}, { bgColor: 'dark (container-dark)' });

export const IconDefault = createStory<TooltipProps>(DefaultTemplate, {
    ...defaultArgs,
    type: 'icon',
})();

export const IconInverse = createStory<TooltipProps>(DefaultTemplate, {
    ...defaultArgs,
    type: 'icon',
    variant: 'inverse',
})({}, { bgColor: 'dark (container-dark)' });

export const IconPlacementGrid = createStory<TooltipProps>(PlacementGridTemplate, {
    ...defaultArgs,
    type: 'icon',
})({}, {
    controls: { disable: true },
});

const EnlargedOffsetTemplate: TemplateFunction<TooltipProps> = () => {
    const anchor = renderAnchoredTooltip({
        id: 'offset-top',
        label: 'top',
        content: 'top',
        position: 'top',
        tooltipOffset: '32px',
    });

    return html`<div style="padding: ${pagePadding};">${anchor}</div>`;
};

export const EnlargedOffset = createStory<TooltipProps>(EnlargedOffsetTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

export const OverriddenWidth = createStory<TooltipProps>(DefaultTemplate, {
    ...defaultArgs,
    tooltipWidth: '400px',
})();

// -----------------------------------------------------------------------------
// Trigger interactions
// -----------------------------------------------------------------------------

/**
 * Hover and focus triggers. Used for testing open/close via mouseenter/leave and focusin/out,
 * and for the hover bridge gap test (with default and enlarged offset).
 */
const HoverFocusTemplate: TemplateFunction<TooltipProps> = ({
    aria,
    content,
    hasAction,
    heading,
    isDismissible,
    position,
    size,
    tooltipOffset,
    type,
    variant,
}) => {
    const cssVariables = styleMap({ '--tooltip-offset': tooltipOffset || null });

    return html`
    <div style="padding: ${pagePadding};">
        <div
            data-test-id="tooltip-trigger-container"
            style="inline-size: min(400px, 100%);">
            ${renderTrigger({ type, variant })}

            <pie-tooltip
                trigger="tooltip-trigger"
                ?isOpen="${false}"
                ?isDismissible="${isDismissible}"
                position="${ifDefined(position)}"
                size="${ifDefined(size)}"
                type="${ifDefined(type)}"
                variant="${ifDefined(variant)}"
                heading="${heading || nothing}"
                .aria="${aria}"
                .triggers="${['hover', 'focus']}"
                style="${cssVariables}"
                @pie-tooltip-open="${handleOpen}"
                @pie-tooltip-close="${handleClose}">
                ${renderContent(content, hasAction)}
            </pie-tooltip>
        </div>
    </div>`;
};

export const HoverFocus = createStory<TooltipProps>(HoverFocusTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

export const HoverFocusEnlargedOffset = createStory<TooltipProps>(HoverFocusTemplate, {
    ...defaultArgs,
    tooltipOffset: '32px',
})({}, {
    controls: { disable: true },
});

/**
 * Click trigger. Used for testing toggle, light-dismiss, and Escape. The panel starts closed
 * so the tests can click to open it.
 */
const ClickTemplate: TemplateFunction<TooltipProps> = ({
    aria,
    content,
    hasAction,
    heading,
    isDismissible,
    position,
    size,
    type,
    variant,
}) => html`
    <div style="padding: ${pagePadding};">
        <div
            data-test-id="tooltip-trigger-container"
            style="inline-size: min(400px, 100%);">
            ${renderTrigger({ type, variant })}

            <pie-tooltip
                trigger="tooltip-trigger"
                ?isOpen="${false}"
                ?isDismissible="${isDismissible}"
                position="${ifDefined(position)}"
                size="${ifDefined(size)}"
                type="${ifDefined(type)}"
                variant="${ifDefined(variant)}"
                heading="${heading || nothing}"
                .aria="${aria}"
                .triggers="${['click']}"
                @pie-tooltip-open="${handleOpen}"
                @pie-tooltip-close="${handleClose}">
                ${renderContent(content, hasAction)}
            </pie-tooltip>
        </div>
    </div>`;

export const ClickToggle = createStory<TooltipProps>(ClickTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

export const ClickDismissible = createStory<TooltipProps>(ClickTemplate, {
    ...defaultArgs,
    isDismissible: true,
    heading: 'Delivery times',
})({}, {
    controls: { disable: true },
});

/**
 * Focus trigger with action slot. Used to verify focus staying inside the panel when
 * moving from the trigger into the action button does not close the panel.
 */
const FocusWithActionTemplate: TemplateFunction<TooltipProps> = ({
    aria,
    content,
    position,
    size,
    type,
    variant,
}) => html`
    <div style="padding: ${pagePadding};">
        <div
            data-test-id="tooltip-trigger-container"
            style="inline-size: min(400px, 100%);">
            ${renderTrigger({ type, variant })}

            <pie-tooltip
                trigger="tooltip-trigger"
                ?isOpen="${false}"
                position="${ifDefined(position)}"
                size="${ifDefined(size)}"
                type="${ifDefined(type)}"
                variant="${ifDefined(variant)}"
                .aria="${aria}"
                .triggers="${['focus']}"
                @pie-tooltip-open="${handleOpen}"
                @pie-tooltip-close="${handleClose}">
                <span slot="content" data-test-id="pie-tooltip-slotted-content">${content}</span>
                <pie-button slot="action" size="xsmall" data-test-id="pie-tooltip-slotted-action">Next</pie-button>
            </pie-tooltip>
        </div>
    </div>`;

export const FocusWithAction = createStory<TooltipProps>(FocusWithActionTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

/**
 * No triggers configured. The panel is always open and demonstrates the component is inert:
 * nothing can self-close it.
 */
export const Inert = createStory<TooltipProps>(DefaultTemplate, {
    ...defaultArgs,
    isOpen: true,
})({}, {
    controls: { disable: true },
});

/**
 * A panel slotted into `pie-modal`. The modal's scroll container clips absolutely positioned
 * descendants and the `<dialog>` is a containing block for fixed ones, so this is the composition
 * that exercises the whole overlay-mode resolution: the panel has to leave both to be readable.
 *
 * The trigger is the last thing in the modal's content, with the panel below it, so a clipped
 * panel is unmistakable. The panel opens on click rather than on load because a closed dialog is
 * `display: none` and nothing inside it has a box to measure.
 */
const InModalTemplate: TemplateFunction<TooltipProps> = ({
    content,
    heading,
    isFooterPinned,
}) => html`
    <pie-modal
        heading="Delivery options"
        ?isOpen="${true}"
        ?isDismissible="${true}"
        ?isFooterPinned="${isFooterPinned}"
        .leadingAction="${isFooterPinned ? { text: 'Confirm' } : undefined}">
        <p>Choose when you want your order to arrive. Delivery windows are confirmed once the
        restaurant accepts your order.</p>
        <p>Orders are prepared in the order they are received, so a later window may still arrive
        early if the kitchen is quiet.</p>
        <pie-button id="tooltip-trigger" data-test-id="tooltip-trigger">Delivery times</pie-button>
        <pie-tooltip
            trigger="tooltip-trigger"
            position="bottom"
            heading="${heading || nothing}"
            ?isOpen="${false}"
            .triggers="${['click']}"
            @pie-tooltip-open="${handleOpen}"
            @pie-tooltip-close="${handleClose}">
            ${renderContent(content, false)}
        </pie-tooltip>
    </pie-modal>`;

/**
 * Footer not pinned: the clipping `.c-modal-scrollContainer` wrapper sits *above* the panel's
 * absolute containing block, so `absolute` is clipped by it.
 */
export const InModal = createStory<TooltipProps>(InModalTemplate, {
    ...defaultArgs,
    isOpen: false,
    heading: 'Delivery times',
    content: longContent,
})({}, {
    controls: { disable: true },
});

/**
 * Footer pinned: the content article is *both* the absolute containing block and the clipper,
 * which exercises the ordering of the containing-block and overflow checks in the ancestor walk.
 */
export const InModalWithPinnedFooter = createStory<TooltipProps>(InModalTemplate, {
    ...defaultArgs,
    isOpen: false,
    heading: 'Delivery times',
    content: longContent,
    isFooterPinned: true,
})({}, {
    controls: { disable: true },
});

/**
 * Light-DOM control case, all in one element: the scroll container is *both* the panel's absolute
 * containing block and the clipper, so it clips an `absolute` panel. Nothing above it establishes
 * a containing block for `fixed`, so promoting escapes the clip outright and the panel must
 * promote. Guards the heuristic against under-promotion.
 */
const InClippingScrollContainerTemplate: TemplateFunction<TooltipProps> = ({ content }) => html`
    <div style="padding: ${pagePadding} ${pageInlinePadding};">
        <div
            data-test-id="clipping-container"
            style="position: relative; overflow: auto; block-size: 120px; border: 1px solid var(--dt-color-border-strong);">
            <div style="padding-block-start: 60px;">
                <pie-button id="tooltip-trigger" data-test-id="tooltip-trigger">Delivery times</pie-button>
                <pie-tooltip
                    trigger="tooltip-trigger"
                    position="bottom"
                    ?isOpen="${true}">
                    ${renderContent(content, false)}
                </pie-tooltip>
            </div>
        </div>
    </div>`;

export const InClippingScrollContainer = createStory<TooltipProps>(InClippingScrollContainerTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

/**
 * The opposite control case: the clipper is *inside* the panel's absolute containing block, which
 * is the one arrangement an `absolute` box escapes on its own. There is nothing to gain, so the
 * panel must stay `absolute`. Guards against over-promotion, which would buy a re-projection on
 * every scroll for no benefit.
 */
const ClipperInsideContainingBlockTemplate: TemplateFunction<TooltipProps> = ({ content }) => html`
    <div style="position: relative; padding: ${pagePadding} ${pageInlinePadding};">
        <div data-test-id="clipping-container" style="overflow: hidden; block-size: 120px; border: 1px solid var(--dt-color-border-strong);">
            <div style="padding-block-start: 60px;">
                <pie-button id="tooltip-trigger" data-test-id="tooltip-trigger">Delivery times</pie-button>
                <pie-tooltip
                    trigger="tooltip-trigger"
                    position="bottom"
                    ?isOpen="${true}">
                    ${renderContent(content, false)}
                </pie-tooltip>
            </div>
        </div>
    </div>`;

export const ClipperInsideContainingBlock = createStory<TooltipProps>(ClipperInsideContainingBlockTemplate, defaultArgs)({}, {
    controls: { disable: true },
});
