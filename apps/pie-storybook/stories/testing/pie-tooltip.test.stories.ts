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
