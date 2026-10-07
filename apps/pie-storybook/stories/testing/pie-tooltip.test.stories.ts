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

// Storybook-specific control props added to the component's own.
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
    // `type` is declared so the string `"false"` from the test URL is not read as truthy.
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

// Edge-anchored stories place a trigger against each edge to exercise collision detection.
const pagePadding = 'var(--dt-spacing-j)';
const pageInlinePadding = 'var(--dt-spacing-j)';

const renderContent = (content: string, hasAction: boolean): TemplateResult => html`
    <span slot="content" data-test-id="pie-tooltip-slotted-content">${content}</span>
    ${hasAction
    ? html`<pie-button slot="action" size="xsmall" data-test-id="pie-tooltip-slotted-action">Next</pie-button>`
    : nothing}`;

// The `icon` type anchors to a `pie-icon-button` rather than the text button the rest use.
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

// The workhorse story: attaches no listeners, proving the component never writes to its own `isOpen`.
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

// Grids

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

// Uniform square anchors; direction comes from the `writingDirection` global.
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
            align-content: center;
            box-sizing: border-box;
            min-block-size: 100vh;
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

// Several dialog panels at once, each needing its own unique heading id.
const multipleDialogSteps = [
    { id: 'multi-dialog-one', heading: 'First step', content: 'The content of the first step.' },
    { id: 'multi-dialog-two', heading: 'Second step', content: 'The content of the second step.' },
    { id: 'multi-dialog-three', heading: 'Third step', content: 'The content of the third step.' },
];

const MultipleDialogsTemplate: TemplateFunction<TooltipProps> = () => html`
    <div style="display: flex; gap: var(--dt-spacing-e); padding: ${pagePadding};">
        ${multipleDialogSteps.map(({ id, heading, content }) => html`
            <div>
                <pie-button id="${id}" data-test-id="${id}">${heading}</pie-button>
                <pie-tooltip
                    trigger="${id}"
                    heading="${heading}"
                    ?isDismissible="${true}"
                    ?isOpen="${true}"
                    .aria="${{ close: 'Close' }}">
                    <span slot="content">${content}</span>
                    <pie-button slot="action" size="xsmall">Next</pie-button>
                </pie-tooltip>
            </div>`)}
    </div>`;

export const MultipleDialogs = createStory<TooltipProps>(MultipleDialogsTemplate, defaultArgs)({}, {
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

// Trigger interactions

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

const FocusClickTemplate: TemplateFunction<TooltipProps> = ({
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
                .triggers="${['hover', 'focus', 'click']}"
                @pie-tooltip-open="${handleOpen}"
                @pie-tooltip-close="${handleClose}">
                ${renderContent(content, hasAction)}
            </pie-tooltip>
        </div>
    </div>`;

export const FocusClick = createStory<TooltipProps>(FocusClickTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

// Focus trigger with action slot: moving into the action button must not close the panel.
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

// No triggers configured; the panel is always open and cannot self-close.
export const Inert = createStory<TooltipProps>(DefaultTemplate, {
    ...defaultArgs,
    isOpen: true,
})({}, {
    controls: { disable: true },
});

// A panel slotted into `pie-modal`, exercising the full overlay-mode resolution.
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

// Footer not pinned: the clipping scroll container sits above the panel's absolute containing block.
export const InModal = createStory<TooltipProps>(InModalTemplate, {
    ...defaultArgs,
    isOpen: false,
    heading: 'Delivery times',
    content: longContent,
})({}, {
    controls: { disable: true },
});

// Footer pinned: the content article is both the absolute containing block and the clipper.
export const InModalWithPinnedFooter = createStory<TooltipProps>(InModalTemplate, {
    ...defaultArgs,
    isOpen: false,
    heading: 'Delivery times',
    content: longContent,
    isFooterPinned: true,
})({}, {
    controls: { disable: true },
});

// Percy-only variants: `isOpen` is set in the template so the panel renders open for the snapshot.
const InModalOpenTemplate: TemplateFunction<TooltipProps> = ({
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
            ?isOpen="${true}">
            ${renderContent(content, false)}
        </pie-tooltip>
    </pie-modal>`;

export const InModalOpen = createStory<TooltipProps>(InModalOpenTemplate, {
    ...defaultArgs,
    isOpen: true,
    heading: 'Delivery times',
    content: longContent,
})({}, {
    controls: { disable: true },
});

export const InModalWithPinnedFooterOpen = createStory<TooltipProps>(InModalOpenTemplate, {
    ...defaultArgs,
    isOpen: true,
    heading: 'Delivery times',
    content: longContent,
    isFooterPinned: true,
})({}, {
    controls: { disable: true },
});

// The scroll container is both the absolute containing block and the clipper, so the panel promotes.
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

const EdgeTemplate = (edge: 'top' | 'right' | 'bottom' | 'left', position: TooltipProps['position']) => {
    const edges: Record<string, string> = {
        top: 'top: 0; left: 50%;',
        right: 'right: 0; top: 50%;',
        bottom: 'bottom: 0; left: 50%;',
        left: 'left: 0; top: 50%;',
    };

    return html`
    <div
        data-test-id="tooltip-trigger-container"
        style="position: fixed; ${edges[edge]}">
        <pie-button id="tooltip-trigger" data-test-id="tooltip-trigger">Delivery times</pie-button>
    </div>

    <pie-tooltip
        trigger="tooltip-trigger"
        position="${position}"
        size="fit-to-content"
        ?isOpen="${true}">
        <span slot="content" data-test-id="pie-tooltip-slotted-content">Arrives today.</span>
    </pie-tooltip>`;
};

export const CollisionTopEdge = createStory<TooltipProps>(() => EdgeTemplate('top', 'top'), defaultArgs)({}, {
    controls: { disable: true },
});

export const CollisionBottomEdge = createStory<TooltipProps>(() => EdgeTemplate('bottom', 'bottom'), defaultArgs)({}, {
    controls: { disable: true },
});

export const CollisionLeftEdge = createStory<TooltipProps>(() => EdgeTemplate('left', 'left'), defaultArgs)({}, {
    controls: { disable: true },
});

export const CollisionRightEdge = createStory<TooltipProps>(() => EdgeTemplate('right', 'right'), defaultArgs)({}, {
    controls: { disable: true },
});

const CollisionCornerTemplate: TemplateFunction<TooltipProps> = () => html`
    <div
        data-test-id="tooltip-trigger-container"
        style="position: fixed; inset-block-start: 0; inset-inline-start: 0;">
        <pie-button id="tooltip-trigger" data-test-id="tooltip-trigger">Delivery times</pie-button>
    </div>

    <pie-tooltip
        trigger="tooltip-trigger"
        position="top-end"
        ?isOpen="${true}">
        <span slot="content" data-test-id="pie-tooltip-slotted-content">Arrives today.</span>
    </pie-tooltip>`;

export const CollisionCorner = createStory<TooltipProps>(CollisionCornerTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

const CollisionInClippingContainerTemplate: TemplateFunction<TooltipProps> = ({ content }) => html`
    <div style="padding: ${pagePadding} var(--dt-spacing-c);">
        <div
            data-test-id="clipping-container"
            style="position: relative; overflow: hidden; transform: translateZ(0); inline-size: min(480px, 100%); block-size: 160px; border: 1px solid var(--dt-color-border-strong);">
            <div style="padding-block-start: 90px; padding-block-end: 8px; display: flex; flex-direction: column; align-items: center;">
                <pie-button id="tooltip-trigger" data-test-id="tooltip-trigger">Delivery times</pie-button>
                <pie-tooltip
                    trigger="tooltip-trigger"
                    position="bottom"
                    size="fit-to-content"
                    ?isOpen="${true}">
                    ${renderContent(content, false)}
                </pie-tooltip>
            </div>
        </div>
    </div>`;

export const CollisionInClippingContainer = createStory<TooltipProps>(
    CollisionInClippingContainerTemplate,
    defaultArgs,
)({}, {
    controls: { disable: true },
});

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
