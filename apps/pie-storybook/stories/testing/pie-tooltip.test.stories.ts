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

import { createStory, type TemplateFunction } from '../../utilities';

// Extending the props type definition to include storybook specific properties for controls
type TooltipProps = TooltipBaseProps & {
    content: string;
    hasAction: boolean;
    tooltipOffset: string;
    tooltipWidth: string;
    triggerInlineSize: string;
    containerInlineSize: string;
};

type TooltipStoryMeta = Meta<TooltipProps>;

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
const pagePadding = '200px 320px';

const renderContent = (content: string, hasAction: boolean): TemplateResult => html`
    <span slot="content" data-test-id="pie-tooltip-slotted-content">${content}</span>
    ${hasAction
    ? html`<pie-button slot="action" size="small-productive" data-test-id="pie-tooltip-slotted-action">Next</pie-button>`
    : nothing}`;

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
    triggerInlineSize,
    type,
    variant,
}) => {
    const cssVariables = styleMap({
        '--tooltip-offset': tooltipOffset || null,
        '--tooltip-width': tooltipWidth || null,
    });

    return html`
    <div style="padding: ${pagePadding};">
        <div
            data-test-id="tooltip-trigger-container"
            style="inline-size: ${containerInlineSize};">
            <button
                id="tooltip-trigger"
                data-test-id="tooltip-trigger"
                type="button"
                style="inline-size: ${triggerInlineSize}; padding-block: 8px;">
                Delivery times
            </button>

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

export const FitToContent = createStory<TooltipProps>(DefaultTemplate, {
    ...defaultArgs,
    size: 'fit-to-content',
    content: longContent,
})();

export const FillContainer = createStory<TooltipProps>(DefaultTemplate, {
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
        <button id="${id}" data-test-id="${id}" type="button" style="padding-block: 8px;">${label}</button>

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
 * placement itself. The gaps are wide because this story opens all twelve at once.
 */
const PlacementGridTemplate: TemplateFunction<TooltipProps> = ({ variant }) => html`
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
                variant="${ifDefined(variant)}"
                ?isOpen="${true}">
                <span slot="content">${position}</span>
            </pie-tooltip>`)}
    </div>
    <style>
        .tooltip-placement-grid {
            display: grid;
            gap: 40px 104px;
            justify-content: center;
            padding: 120px 180px;
        }

        .tooltip-placement-anchor {
            inline-size: 56px;
            block-size: 56px;
            border: var(--dt-color-border-strong) solid 1px;
            border-radius: var(--dt-radius-rounded-b);
            background-color: transparent;
            cursor: pointer;
        }
    </style>`;

export const PlacementGrid = createStory<TooltipProps>(PlacementGridTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

const PresentationGridTemplate: TemplateFunction<TooltipProps> = () => {
    const anchors = variants.flatMap((variant) => types.map((type) => renderAnchoredTooltip({
        id: `presentation-${variant}-${type}`,
        label: `${variant} / ${type}`,
        content: longContent,
        heading: 'Delivery times',
        isDismissible: true,
        position: 'bottom',
        type,
        variant,
    })));

    return html`
        <div style="display: flex; flex-wrap: wrap; gap: 160px 80px; padding: 80px 220px;">
            ${anchors}
        </div>`;
};

export const PresentationGrid = createStory<TooltipProps>(PresentationGridTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

const sizeContainerInlineSize = 420;

/**
 * Each trigger sits directly inside a container of a known inline size, because `fill-container`
 * is defined as the inline size of the trigger's parent element. The container uses an outline
 * rather than a border so its box is exactly `sizeContainerInlineSize` wide.
 */
const SizeGridTemplate: TemplateFunction<TooltipProps> = () => {
    const contentLengths = [
        { label: 'short', content: shortContent },
        { label: 'long', content: longContent },
    ];

    const rows = sizes.flatMap((size) => contentLengths.map(({ label, content }) => ({ size, label, content })));

    return html`
        <div style="display: flex; flex-direction: column; gap: 200px; padding: 80px 120px 280px;">
            ${rows.map(({ size, label, content }) => html`
                <div>
                    <p style="margin: 0 0 12px;">${size} / ${label}</p>

                    <div
                        data-test-id="size-container-${size}-${label}"
                        style="inline-size: ${sizeContainerInlineSize}px; outline: 1px dashed #767676; outline-offset: 4px;">
                        <button
                            id="size-${size}-${label}"
                            data-test-id="size-${size}-${label}"
                            type="button"
                            style="padding-block: 8px;">
                            Delivery times
                        </button>

                        <pie-tooltip
                            data-test-id="size-${size}-${label}-tooltip"
                            trigger="size-${size}-${label}"
                            position="bottom-start"
                            size="${size}"
                            ?isOpen="${true}">
                            <span slot="content">${content}</span>
                        </pie-tooltip>
                    </div>
                </div>`)}
        </div>`;
};

export const SizeGrid = createStory<TooltipProps>(SizeGridTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

const mainAxisSides = ['top', 'bottom', 'left', 'right'] as const;

const EnlargedOffsetTemplate: TemplateFunction<TooltipProps> = () => {
    const anchors = mainAxisSides.map((position) => renderAnchoredTooltip({
        id: `offset-${position}`,
        label: position,
        content: position,
        position,
        tooltipOffset: '32px',
    }));

    return html`
        <div style="display: flex; flex-wrap: wrap; gap: 160px 120px; padding: 120px 220px;">
            ${anchors}
        </div>`;
};

export const EnlargedOffset = createStory<TooltipProps>(EnlargedOffsetTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

/**
 * Placement is resolved with logical properties, so `-start` and `-end` follow the inline
 * direction and `left` and `right` mirror. Nothing here needs JavaScript awareness of direction.
 */
const RtlPlacementTemplate: TemplateFunction<TooltipProps> = () => {
    const anchors = (['top-start', 'top-end', 'left', 'right'] as const).map((position) => renderAnchoredTooltip({
        id: `rtl-${position}`,
        label: position,
        content: position,
        position,
    }));

    return html`
        <div dir="rtl" style="display: flex; flex-direction: column; gap: 140px; padding: 140px 260px;">
            ${anchors}
        </div>`;
};

export const RtlPlacement = createStory<TooltipProps>(RtlPlacementTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

/**
 * A page tall enough to scroll. The panel is a fixed overlay, so staying attached to the trigger
 * through a scroll is something the component has to do rather than get for free.
 */
const ScrollablePageTemplate: TemplateFunction<TooltipProps> = () => html`
    <div style="min-block-size: 250vh; padding: 200px 320px;">
        <button
            id="tooltip-trigger"
            data-test-id="tooltip-trigger"
            type="button"
            style="inline-size: 120px; padding-block: 8px;">
            Delivery times
        </button>

        <pie-tooltip trigger="tooltip-trigger" position="bottom" ?isOpen="${true}">
            <span slot="content">${shortContent}</span>
        </pie-tooltip>
    </div>`;

export const ScrollablePage = createStory<TooltipProps>(ScrollablePageTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

/**
 * A trigger wider than its panel, and a panel wider than its trigger. Both use a centre
 * alignment, which must overflow the smaller of the two evenly on both sides.
 */
const AnchorWidthsTemplate: TemplateFunction<TooltipProps> = () => html`
    <div style="display: flex; flex-direction: column; gap: 200px; padding: 120px 260px;">
        <div>
            <button
                id="wide-anchor"
                data-test-id="wide-anchor"
                type="button"
                style="inline-size: 360px; padding-block: 8px;">
                Wider than its panel
            </button>

            <pie-tooltip data-test-id="wide-anchor-tooltip" trigger="wide-anchor" position="bottom" ?isOpen="${true}">
                <span slot="content">Narrow</span>
            </pie-tooltip>
        </div>

        <div>
            <button
                id="narrow-anchor"
                data-test-id="narrow-anchor"
                type="button"
                style="inline-size: 40px; padding-block: 8px;">
                W
            </button>

            <pie-tooltip data-test-id="narrow-anchor-tooltip" trigger="narrow-anchor" position="bottom" ?isOpen="${true}">
                <span slot="content">${longContent}</span>
            </pie-tooltip>
        </div>
    </div>`;

export const AnchorWidths = createStory<TooltipProps>(AnchorWidthsTemplate, defaultArgs)({}, {
    controls: { disable: true },
});
