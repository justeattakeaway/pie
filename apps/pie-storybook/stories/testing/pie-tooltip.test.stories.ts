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
    aria: {
        close: 'Close',
        label: 'Delivery times',
    },
})();

type StructuralSizingVariant = {
    id: string;
    heading: string;
    isDismissible: boolean;
    hasAction: boolean;
    panelBlockSize: number;
    contentSlot: TemplateResult;
};

const multilineBodyContent = html`<span slot="content">Body first line<br>Body second line</span>`;

const structuralSizingVariants: StructuralSizingVariant[] = [
    {
        id: 'title-body',
        heading: 'Title',
        isDismissible: false,
        hasAction: false,
        panelBlockSize: 56,
        contentSlot: html`<span slot="content">Body</span>`,
    },
    {
        id: 'title-body-close',
        heading: 'Title',
        isDismissible: true,
        hasAction: false,
        panelBlockSize: 56,
        contentSlot: html`<span slot="content">Body</span>`,
    },
    {
        id: 'title-body-close-action',
        heading: 'Title',
        isDismissible: true,
        hasAction: true,
        panelBlockSize: 96,
        contentSlot: html`<span slot="content">Body</span>`,
    },
    {
        id: 'body-close',
        heading: '',
        isDismissible: true,
        hasAction: false,
        panelBlockSize: 36,
        contentSlot: html`<span slot="content">Body</span>`,
    },
    {
        id: 'body-close-action',
        heading: '',
        isDismissible: true,
        hasAction: true,
        panelBlockSize: 76,
        contentSlot: html`<span slot="content">Body</span>`,
    },
    {
        id: 'body-multiline',
        heading: '',
        isDismissible: false,
        hasAction: false,
        panelBlockSize: 56,
        contentSlot: multilineBodyContent,
    },
    {
        id: 'body-multiline-close',
        heading: '',
        isDismissible: true,
        hasAction: false,
        panelBlockSize: 56,
        contentSlot: multilineBodyContent,
    },
];

const renderSizingVariant = ({
    id,
    heading,
    isDismissible,
    hasAction,
    panelBlockSize,
    contentSlot,
}: StructuralSizingVariant): TemplateResult => {
    const actionSlot = hasAction
        ? html`<pie-button slot="action" size="xsmall">Action</pie-button>`
        : nothing;

    return html`
        <div style="block-size: ${panelBlockSize}px; display: grid; place-items: center start;">
            <button
                id="audit-${id}"
                data-test-id="audit-${id}"
                type="button"
                style="inline-size: 24px; block-size: 24px; border: var(--dt-color-border-strong) solid 1px; border-radius: var(--dt-radius-rounded-b); background-color: var(--dt-color-container-default); cursor: pointer;"
                aria-label="${id} trigger"></button>

            <pie-tooltip
                trigger="audit-${id}"
                position="right-centre"
                heading="${heading || nothing}"
                ?isDismissible="${isDismissible}"
                ?isOpen="${true}"
                .aria="${{ close: 'Close', label: heading ? '' : 'Body' }}">
                ${contentSlot}
                ${actionSlot}
            </pie-tooltip>
        </div>`;
};

const StructuralSizingTemplate: TemplateFunction<TooltipProps> = () => html`
    <div style="display: flex; flex-direction: column; gap: var(--dt-spacing-e); padding: var(--dt-spacing-j);">
        ${structuralSizingVariants.map(renderSizingVariant)}
    </div>`;

export const StructuralSizing = createStory<TooltipProps>(StructuralSizingTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

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
    position = 'top-centre',
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
    '.             top-start     top-centre    top-end      .'
    'left-start    .             .             .            right-start'
    'left-centre   .             .             .            right-centre'
    'left-end      .             .             .            right-end'
    '.             bottom-start  bottom-centre bottom-end   .'
`;

// Uniform square anchors; direction comes from the `writingDirection` global.
// Plain HTML anchors, so each trigger points `aria-describedby` at its tooltip's `id`.
const PlacementGridTemplate: TemplateFunction<TooltipProps> = ({ type, variant }) => html`
    <div class="tooltip-placement-grid" style="grid-template-areas: ${placementGridAreas};">
        ${positions.map((position) => html`
            <button
                id="placement-${position}"
                data-test-id="placement-${position}"
                class="tooltip-placement-anchor"
                style="grid-area: ${position};"
                type="button"
                aria-label="${position}"
                aria-describedby="placement-${position}-tooltip"></button>

            <pie-tooltip
                id="placement-${position}-tooltip"
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
        label: 'top-centre',
        content: 'top-centre',
        position: 'top-centre',
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

// A host page whose ancestor sets `text-wrap: nowrap` (typical of header action bars) must not
// leak into the panel: the slotted content still wraps and the panel holds its default size.
const NowrapAncestorTemplate: TemplateFunction<TooltipProps> = (props) => html`
    <div style="text-wrap: nowrap; white-space: nowrap;">
        ${DefaultTemplate(props)}
    </div>`;

export const NowrapAncestor = createStory<TooltipProps>(NowrapAncestorTemplate, {
    ...defaultArgs,
    content: longContent,
})({}, { controls: { disable: true } });

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
            position="bottom-centre"
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
            position="bottom-centre"
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
                    position="bottom-centre"
                    ?isOpen="${true}">
                    ${renderContent(content, false)}
                </pie-tooltip>
            </div>
        </div>
    </div>`;

export const InClippingScrollContainer = createStory<TooltipProps>(InClippingScrollContainerTemplate, defaultArgs)({}, {
    controls: { disable: true },
});

// The opposite control case: the clipper is *inside* the panel's absolute containing block, which
// is the one arrangement an `absolute` box escapes on its own. There is nothing to gain, so the
// panel must stay `absolute`. Guards against over-promotion, which would buy a re-projection on
// every scroll for no benefit.
const ClipperInsideContainingBlockTemplate: TemplateFunction<TooltipProps> = ({ content }) => html`
    <div style="position: relative; padding: ${pagePadding} ${pageInlinePadding};">
        <div data-test-id="clipping-container" style="overflow: hidden; block-size: 120px; border: 1px solid var(--dt-color-border-strong);">
            <div style="padding-block-start: 60px;">
                <pie-button id="tooltip-trigger" data-test-id="tooltip-trigger">Delivery times</pie-button>
                <pie-tooltip
                    trigger="tooltip-trigger"
                    position="bottom-centre"
                    ?isOpen="${true}">
                    ${renderContent(content, false)}
                </pie-tooltip>
            </div>
        </div>
    </div>`;

export const ClipperInsideContainingBlock = createStory<TooltipProps>(ClipperInsideContainingBlockTemplate, defaultArgs)({}, {
    controls: { disable: true },
});
