import { html, nothing, type TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/actions';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/tooltip';
import {
    type PieTooltip,
    type TooltipProps as TooltipBaseProps,
    defaultProps,
    headingLevels,
    positions,
    sizes,
    types,
    variants,
} from '@justeattakeaway/pie-webc/components/tooltip';

import '@justeattakeaway/pie-webc/components/avatar';
import '@justeattakeaway/pie-webc/components/button';
import '@justeattakeaway/pie-webc/components/card';
import '@justeattakeaway/pie-webc/components/chip';
import '@justeattakeaway/pie-webc/components/divider';
import '@justeattakeaway/pie-webc/components/icon-button';
import '@justeattakeaway/pie-webc/components/list';
import '@justeattakeaway/pie-webc/components/list-item';
import '@justeattakeaway/pie-webc/components/select';
import '@justeattakeaway/pie-webc/components/tag';
import '@justeattakeaway/pie-webc/components/text-input';
import '@justeattakeaway/pie-webc/components/thumbnail';
import '@justeattakeaway/pie-icons-webc/dist/IconBasket.js';
import '@justeattakeaway/pie-icons-webc/dist/IconCalendar.js';
import '@justeattakeaway/pie-icons-webc/dist/IconChartIncrease.js';
import '@justeattakeaway/pie-icons-webc/dist/IconInfoCircle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconNotification.js';
import '@justeattakeaway/pie-icons-webc/dist/IconSearch.js';
import '@justeattakeaway/pie-icons-webc/dist/IconSettings.js';
import '@justeattakeaway/pie-icons-webc/dist/IconStar.js';

import { createStory, type TemplateFunction } from '../utilities';

type TooltipProps = TooltipBaseProps & {
    content: string;
    hasAction: boolean;
};

type TooltipStoryMeta = Meta<TooltipProps>;

const defaultArgs: TooltipProps = {
    ...defaultProps,
    isOpen: true,
    content: 'Orders placed before 6pm arrive today.',
    hasAction: false,
    aria: {
        close: 'Close',
        // Only used in dialog mode, where the panel has to be named and there is no heading to
        // name it. Set here so that turning `hasAction` on gives a named dialog.
        label: 'Delivery information',
    },
};

const tooltipStoryMeta: TooltipStoryMeta = {
    title: 'Components/Tooltip',
    component: 'pie-tooltip',
    argTypes: {
        trigger: {
            description: 'The `id` of the element the panel is anchored to. The trigger lives elsewhere in the DOM and is never slotted into the tooltip.',
            control: 'text',
        },
        isOpen: {
            description: 'When true, the panel is visible. The component never writes to this property: the consumer owns it and updates it in response to the close event.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isOpen,
            },
        },
        position: {
            description: 'The side of the trigger the panel sits on, and its alignment along the cross axis.',
            control: 'select',
            options: positions,
            defaultValue: {
                summary: defaultProps.position,
            },
        },
        size: {
            description: 'How the panel sizes itself. `default` is a fixed 280px and wraps, `fit-to-content` is as wide as its content, and `fill-container` matches the inline size of the trigger\'s parent element. Not applied when `type` is `icon`.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: defaultProps.size,
            },
        },
        variant: {
            description: 'The colour treatment of the panel. `default` is the dark panel, `inverse` the light one.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        type: {
            description: 'The presentation of the panel. `icon` is the compact treatment intended for icon triggers: it has no arrow and is always as wide as its content, so `size` and `--tooltip-width` have no effect on it.',
            control: 'select',
            options: types,
            defaultValue: {
                summary: defaultProps.type,
            },
        },
        isDismissible: {
            description: 'When true, a close button is rendered inside the panel.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isDismissible,
            },
        },
        heading: {
            description: 'The text to display in the panel\'s heading. In dialog mode this also provides the panel\'s accessible name.',
            control: 'text',
        },
        headingLevel: {
            description: 'The HTML heading tag to use for the panel\'s heading. Can be h2-h6.',
            control: 'select',
            options: headingLevels,
            defaultValue: {
                summary: defaultProps.headingLevel,
            },
        },
        aria: {
            description: 'The ARIA labels used for various parts of the tooltip. `close` names the close button, and `label` names the panel in dialog mode when no heading is provided.',
            control: 'object',
        },
        // Neither of these is a component property: they are story controls standing in for the
        // two slots, grouped under their own heading so they are not read as part of the
        // component's API.
        content: {
            description: 'Fills the `content` slot. The descriptive content of the panel. Must not contain focusable elements.',
            control: 'text',
            table: {
                category: 'Slots',
            },
        },
        // `type` is declared alongside `control` because a storybook-only arg has no custom
        // elements manifest entry to take its type from, so without it the string `"false"`
        // would arrive as a truthy value.
        hasAction: {
            description: 'Fills the `action` slot with a `pie-button`. Filling it switches the panel from a tooltip to a non-modal dialog.',
            control: 'boolean',
            type: 'boolean',
            table: {
                category: 'Slots',
            },
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

export default tooltipStoryMeta;

const closeAction = action('pie-tooltip-close');

/**
 * The consumer's side of the controlled contract: the component never writes to `isOpen`, so the
 * handler passes the value back. Doing it here rather than inside the component is what lets a
 * consumer refuse the change, for example when an API call behind the panel has failed.
 */
const handleClose = (event: Event) => {
    closeAction(event);
    (event.currentTarget as HTMLElement & { isOpen: boolean }).isOpen = false;
};

/**
 * The action slot is filled by the consumer, so closing the panel from it is the consumer's job
 * too. The button is slotted into the light DOM, so the panel is its nearest `pie-tooltip`
 * ancestor.
 */
const handleActionClick = (event: Event) => {
    const panel = (event.currentTarget as HTMLElement).closest<PieTooltip>('pie-tooltip');

    if (panel) {
        panel.isOpen = false;
    }
};

// -----------------------------------------------------------------------------
// Default
// -----------------------------------------------------------------------------

const DefaultTemplate: TemplateFunction<TooltipProps> = ({
    aria,
    content,
    hasAction,
    heading,
    headingLevel,
    isDismissible,
    isOpen,
    position,
    size,
    type,
    variant,
}) => {
    const actionSlot = hasAction
        ? html`<pie-button slot="action" size="xsmall" @click="${handleActionClick}">Got it</pie-button>`
        : nothing;

    return html`
    <div style="padding: var(--dt-spacing-j); display: flex; justify-content: center;">
        <pie-icon-button
            id="default-tooltip-trigger"
            variant="outline"
            .aria="${{ label: 'Delivery information' }}">
            <icon-info-circle></icon-info-circle>
        </pie-icon-button>

        <pie-tooltip
            trigger="default-tooltip-trigger"
            ?isOpen="${isOpen}"
            ?isDismissible="${isDismissible}"
            position="${ifDefined(position)}"
            size="${ifDefined(size)}"
            type="${ifDefined(type)}"
            variant="${ifDefined(variant)}"
            heading="${ifDefined(heading)}"
            headingLevel="${ifDefined(headingLevel)}"
            .aria="${aria}"
            @pie-tooltip-close="${handleClose}">
            <span slot="content">${content}</span>
            ${actionSlot}
        </pie-tooltip>
    </div>`;
};

export const Default = createStory<TooltipProps>(DefaultTemplate, defaultArgs)();

// -----------------------------------------------------------------------------
// Onboarding tour
// -----------------------------------------------------------------------------

type TourStep = {
    anchor: string;
    position: TooltipProps['position'];
    heading: string;
    content: string;
};

/**
 * Each step names the `id` of the element it points at. The panels are rendered next to their
 * anchors rather than collected in one block, because reading and tab order follow DOM order.
 */
const tourSteps: TourStep[] = [
    {
        anchor: 'tour-anchor-search',
        position: 'bottom-start',
        heading: 'Search anything',
        content: 'Look up an order, a customer or a restaurant without leaving the page.',
    },
    {
        anchor: 'tour-anchor-nav',
        position: 'right-start',
        heading: 'Find your way around',
        content: 'Every section of the dashboard is one click away from here.',
    },
    {
        anchor: 'tour-anchor-filters',
        position: 'bottom-start',
        heading: 'Narrow it down',
        content: 'Filter by date range and status to find the orders you care about.',
    },
    {
        anchor: 'tour-anchor-reports',
        position: 'top-start',
        heading: 'Track performance',
        content: 'Yesterday\'s numbers are ready for you every morning.',
    },
];

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const findPanel = (root: HTMLElement, anchor: string) => root.querySelector<PieTooltip>(`[data-tour-step="${anchor}"]`);

/**
 * Opens one step and closes the rest. An index past the last step ends the tour.
 *
 * Everything here is the consumer's side of the contract. The component never writes to `isOpen`,
 * so showing a step is only ever a matter of this story setting the value.
 */
const showTourStep = (root: HTMLElement, index: number) => {
    tourSteps.forEach((step, stepIndex) => {
        const panel = findPanel(root, step.anchor);

        if (panel) {
            panel.isOpen = stepIndex === index;
        }
    });

    const current = tourSteps[index];

    if (!current) {
        root.querySelector<HTMLElement>('[data-tour-heading]')?.focus();

        return;
    }

    // The panel is a fixed overlay pinned to its trigger, so bringing the trigger into view is
    // the consumer's job. A panel whose trigger is below the fold opens off screen, and the tour
    // looks like it has stalled.
    const anchorEl = root.querySelector<HTMLElement>(`#${current.anchor}`);
    if (anchorEl) {
        const { top, bottom } = anchorEl.getBoundingClientRect();
        const alreadyInView = top >= 0 && bottom <= window.innerHeight;

        if (!alreadyInView) {
            anchorEl.scrollIntoView({
                block: 'center',
                behavior: prefersReducedMotion() ? 'auto' : 'smooth',
            });
        }
    }

    const panel = findPanel(root, current.anchor);

    // Waiting for `updateComplete` matters: until the update has been committed the panel is
    // still `display: none`, and a hidden element cannot take focus. The animation frame then
    // lets the browser lay the panel out before focus moves into it.
    panel?.updateComplete.then(() => {
        requestAnimationFrame(() => {
            panel.querySelector<HTMLElement>('[slot="action"]')?.focus({ preventScroll: true });
        });
    });
};

// `currentTarget` is always the element the handler is bound to, so there is no shadow boundary
// retargeting to reason about.
const tourRootOf = (event: Event) => (event.currentTarget as HTMLElement).closest<HTMLElement>('[data-tour-root]');

const handleTourStart = (event: Event) => {
    const root = tourRootOf(event);

    if (root) {
        showTourStep(root, 0);
    }
};

const handleTourAdvance = (event: Event) => {
    const button = event.currentTarget as HTMLElement;
    const root = tourRootOf(event);

    if (root) {
        showTourStep(root, Number(button.dataset.tourNext));
    }
};

const handleTourClose = (event: Event) => {
    closeAction(event);

    const root = tourRootOf(event);

    if (root) {
        showTourStep(root, tourSteps.length);
    }
};

const renderTourStep = (index: number): TemplateResult => {
    const step = tourSteps[index];
    const isLastStep = index === tourSteps.length - 1;

    return html`
        <pie-tooltip
            data-tour-step="${step.anchor}"
            trigger="${step.anchor}"
            position="${step.position}"
            heading="${step.heading}"
            headingLevel="h3"
            ?isDismissible="${true}"
            .aria="${{ close: 'End the tour' }}"
            @pie-tooltip-close="${handleTourClose}">
            <span slot="content">${step.content}</span>
            <pie-button
                slot="action"
                type="button"
                size="small-productive"
                data-tour-next="${index + 1}"
                @click="${handleTourAdvance}">
                ${isLastStep ? 'Finish' : 'Next'}
            </pie-button>
        </pie-tooltip>`;
};

const dashboardOrders: Array<{
    reference: string;
    customer: string;
    items: string;
    total: string;
    status: string;
    statusVariant: 'success' | 'information' | 'warning' | 'error';
}> = [
    {
        reference: '#4821', customer: 'Amelia Cross', items: '2 items', total: '£24.90', status: 'Delivered', statusVariant: 'success',
    },
    {
        reference: '#4822', customer: 'Tomasz Nowak', items: '4 items', total: '£38.15', status: 'On the way', statusVariant: 'information',
    },
    {
        reference: '#4823', customer: 'Priya Raman', items: '1 item', total: '£11.40', status: 'Preparing', statusVariant: 'warning',
    },
    {
        reference: '#4824', customer: 'Luca Bianchi', items: '3 items', total: '£29.75', status: 'Delivered', statusVariant: 'success',
    },
    {
        reference: '#4825', customer: 'Noor Haddad', items: '5 items', total: '£52.00', status: 'Cancelled', statusVariant: 'error',
    },
    {
        reference: '#4826', customer: 'Ben Carter', items: '2 items', total: '£18.60', status: 'Delivered', statusVariant: 'success',
    },
];

const dateRangeOptions = [
    { tag: 'option' as const, text: 'Today', value: 'today' },
    { tag: 'option' as const, text: 'Yesterday', value: 'yesterday' },
    { tag: 'option' as const, text: 'Last 7 days', value: 'week' },
    { tag: 'option' as const, text: 'Last 30 days', value: 'month' },
];

const renderDashboardOrders = (): TemplateResult => html`
    ${dashboardOrders.map((order) => html`
        <pie-card
            tag="button"
            variant="outline"
            padding="c"
            .aria="${{ label: `Order ${order.reference} for ${order.customer}` }}">
            <div class="dash-order">
                <pie-thumbnail size="48" alt=""></pie-thumbnail>

                <div class="dash-order-detail">
                    <strong>${order.reference}</strong>
                    <span>${order.customer}</span>
                    <span class="dash-order-meta">${order.items} &middot; ${order.total}</span>
                </div>

                <pie-tag variant="${order.statusVariant}" size="small">${order.status}</pie-tag>
            </div>
        </pie-card>`)}`;

const legendRows: Array<[string, string]> = [
    ['Places each panel over its trigger and keeps it there while the page scrolls', 'Owns `isOpen` for all four steps, and keeps only one open'],
    ['Exposes each panel as a named `dialog`, and removes it from the accessibility tree when closed', 'Supplies each `heading` and `position`'],
    ['Emits a close event when the close button is used', 'Decides what a close event means: end the tour'],
    ['Does nothing on hover, focus or click, because no triggers are configured', 'Starts the tour, and advances it from the action buttons'],
    ['Leaves focus and scrolling alone', 'Scrolls the next trigger into view, then moves focus to its action'],
];

const renderLegend = (): TemplateResult => html`
    <table class="tour-legend">
        <caption>Who does what</caption>
        <thead>
            <tr>
                <th scope="col">The component does</th>
                <th scope="col">This story does</th>
            </tr>
        </thead>
        <tbody>
            ${legendRows.map(([component, story]) => html`
                <tr>
                    <td>${component}</td>
                    <td>${story}</td>
                </tr>`)}
        </tbody>
    </table>`;

/**
 * A mock dashboard, tall enough to scroll, with the four tour triggers spread through it. The
 * tour is driven entirely by this story: `triggers` is deliberately left unset, so nothing here
 * opens on hover, focus or click.
 */
const OnboardingTourTemplate: TemplateFunction<TooltipProps> = () => html`
    <div class="tour" data-tour-root>
        <div class="tour-bar">
            <h2 data-tour-heading tabindex="-1">Example dashboard</h2>
            <pie-button type="button" size="small-productive" @click="${handleTourStart}">
                Start the tour
            </pie-button>
        </div>

        <div class="dash">
            <header class="dash-header">
                <strong class="dash-brand">Orders</strong>

                <pie-text-input
                    id="tour-anchor-search"
                    class="dash-search"
                    name="search"
                    value=""
                    size="small"
                    placeholder="Search orders, customers or restaurants">
                    <icon-search slot="leadingIcon"></icon-search>
                </pie-text-input>
                ${renderTourStep(0)}

                <pie-icon-button variant="ghost-secondary" size="small" .aria="${{ label: 'Notifications' }}">
                    <icon-notification></icon-notification>
                </pie-icon-button>

                <pie-icon-button variant="ghost-secondary" size="small" .aria="${{ label: 'Settings' }}">
                    <icon-settings></icon-settings>
                </pie-icon-button>

                <pie-avatar label="Sam Okafor"></pie-avatar>
            </header>

            <div class="dash-body">
                <nav id="tour-anchor-nav" class="dash-nav" aria-label="Dashboard sections">
                    <pie-list>
                        <pie-list-item primaryText="Orders" isBold hasDivider>
                            <icon-basket slot="leading"></icon-basket>
                        </pie-list-item>
                        <pie-list-item primaryText="Menu" hasDivider>
                            <icon-star slot="leading"></icon-star>
                        </pie-list-item>
                        <pie-list-item primaryText="Reports" hasDivider>
                            <icon-chart-increase slot="leading"></icon-chart-increase>
                        </pie-list-item>
                        <pie-list-item primaryText="Settings">
                            <icon-settings slot="leading"></icon-settings>
                        </pie-list-item>
                    </pie-list>
                </nav>
                ${renderTourStep(1)}

                <div class="dash-main">
                    <div id="tour-anchor-filters" class="dash-filters">
                        <pie-select
                            name="range"
                            size="small"
                            value="today"
                            .options="${dateRangeOptions}">
                            <icon-calendar slot="leadingIcon"></icon-calendar>
                        </pie-select>

                        <pie-chip type="button" ?isSelected="${true}">Delivered</pie-chip>
                        <pie-chip type="button">On the way</pie-chip>
                        <pie-chip type="button">Cancelled</pie-chip>
                    </div>
                    ${renderTourStep(2)}

                    <h3 class="dash-section-heading">Today's orders</h3>

                    <div class="dash-orders">
                        ${renderDashboardOrders()}
                    </div>

                    <pie-divider></pie-divider>

                    <div class="dash-reports">
                        <h3 class="dash-section-heading">Reports</h3>
                        <p>Yesterday's orders, revenue and average order value.</p>

                        <pie-button id="tour-anchor-reports" type="button" variant="secondary" size="small-productive">
                            <icon-chart-increase slot="icon"></icon-chart-increase>
                            View yesterday's reports
                        </pie-button>
                        ${renderTourStep(3)}
                    </div>
                </div>
            </div>
        </div>

        ${renderLegend()}
    </div>
    <style>
        .tour {
            display: flex;
            flex-direction: column;
            gap: var(--dt-spacing-e);
            padding: var(--dt-spacing-d);
        }

        .tour-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--dt-spacing-d);
            padding: var(--dt-spacing-c) var(--dt-spacing-d);
            border: var(--dt-color-border-strong) dashed 1px;
            border-radius: var(--dt-radius-rounded-b);
        }

        .tour-bar h2 {
            margin: 0;
        }

        .tour [data-tour-heading]:focus-visible {
            outline: var(--dt-color-border-strong) dashed 2px;
            outline-offset: var(--dt-spacing-a);
        }

        .dash {
            border: var(--dt-color-border-default) solid 1px;
            border-radius: var(--dt-radius-rounded-c);
            background-color: var(--dt-color-container-default);
            overflow: hidden;
        }

        .dash-header {
            display: flex;
            align-items: center;
            gap: var(--dt-spacing-c);
            padding: var(--dt-spacing-c) var(--dt-spacing-d);
            border-block-end: var(--dt-color-border-default) solid 1px;
            background-color: var(--dt-color-container-subtle);
        }

        .dash-brand {
            margin-inline-end: var(--dt-spacing-b);
        }

        .dash-search {
            flex: 1;
            max-inline-size: 360px;
        }

        .dash-header pie-avatar {
            margin-inline-start: auto;
        }

        .dash-body {
            display: grid;
            grid-template-columns: 220px 1fr;
            gap: var(--dt-spacing-e);
            padding: var(--dt-spacing-d);
        }

        .dash-nav {
            align-self: start;
            padding: var(--dt-spacing-b);
            border: var(--dt-color-border-default) solid 1px;
            border-radius: var(--dt-radius-rounded-b);
        }

        .dash-main {
            display: flex;
            flex-direction: column;
            gap: var(--dt-spacing-d);
            min-inline-size: 0;
        }

        .dash-filters {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: var(--dt-spacing-b);
        }

        .dash-filters pie-select {
            max-inline-size: 180px;
        }

        .dash-section-heading {
            margin: 0;
        }

        .dash-orders {
            display: flex;
            flex-direction: column;
            gap: var(--dt-spacing-c);
        }

        .dash-order {
            display: flex;
            align-items: center;
            gap: var(--dt-spacing-c);
            text-align: start;
        }

        .dash-order-detail {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-inline-size: 0;
        }

        .dash-order-meta {
            color: var(--dt-color-content-subdued);
        }

        .dash-reports {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: var(--dt-spacing-c);
            padding-block-end: var(--dt-spacing-e);
        }

        .dash-reports p {
            margin: 0;
        }

        .tour-legend {
            border-collapse: collapse;
            max-inline-size: 720px;
        }

        .tour-legend caption {
            text-align: start;
            padding-block-end: var(--dt-spacing-b);
            font-weight: 700;
        }

        .tour-legend th,
        .tour-legend td {
            text-align: start;
            border: var(--dt-color-border-strong) solid 1px;
            padding: var(--dt-spacing-b);
        }
    </style>`;

export const OnboardingTour = createStory<TooltipProps>(OnboardingTourTemplate, defaultArgs)({}, {
    controls: {
        disable: true,
    },
});
