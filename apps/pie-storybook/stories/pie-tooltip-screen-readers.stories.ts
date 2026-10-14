import { html, type TemplateResult } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/tooltip';
import { type PieTooltip } from '@justeattakeaway/pie-webc/components/tooltip';
import '@justeattakeaway/pie-webc/components/button';
import '@justeattakeaway/pie-webc/components/icon-button';
import '@justeattakeaway/pie-icons-webc/dist/IconInfoCircle.js';

// A PIE component trigger with a settable `aria` object.
type TriggerElement = HTMLElement & { aria?: Record<string, unknown> };

// Live wiring examples for the Screen readers section. Excluded from the browser-testing build.
const handleOpen = (event: Event) => {
    (event.currentTarget as PieTooltip).isOpen = true;
};

// Tooltip mode never takes focus, so closing has nothing to give it back to.
const handleClose = (event: Event) => {
    (event.currentTarget as PieTooltip).isOpen = false;
};

// `expanded` tracks the consumer's `isOpen` value in dialog mode.
const setExpanded = (panel: PieTooltip, expanded: boolean) => {
    const trigger = panel.trigger ? document.getElementById(panel.trigger) as TriggerElement | null : null;

    if (trigger) {
        trigger.aria = { ...(trigger.aria ?? {}), expanded };
    }
};

// Focus goes back to the trigger only when it was still inside the panel.
const closeDialogPanel = (panel: PieTooltip) => {
    const focusWasInside = (document.activeElement as HTMLElement | null)?.closest('pie-tooltip') !== null;
    const trigger = panel.trigger ? document.getElementById(panel.trigger) : null;

    panel.isOpen = false;
    setExpanded(panel, false);

    if (focusWasInside && trigger) {
        trigger.focus({ preventScroll: true });
    }
};

const handleDialogClose = (event: Event) => {
    closeDialogPanel(event.currentTarget as PieTooltip);
};

// The action button's currentTarget is the button, so the panel is found from it.
const handleActionClose = (event: Event) => {
    const panel = (event.currentTarget as HTMLElement).closest<PieTooltip>('pie-tooltip');

    if (panel) {
        closeDialogPanel(panel);
    }
};

const content = 'Orders placed before 6pm arrive today.';

// Shared dialog handlers; `currentTarget` is the tooltip on its own events.
function openDialog (event: Event) {
    const panel = event.currentTarget as PieTooltip;

    panel.isOpen = true;
    setExpanded(panel, true);

    // eslint-disable-next-line no-void -- the promise is deliberately floating
    void panel.focusPanel();
}

// The open click lands on the button, so the panel is found from the story root instead.
const openSystemDialog = (event: Event) => {
    const root = (event.currentTarget as HTMLElement).closest<HTMLElement>('[data-sr-story]');
    const panel = root?.querySelector<PieTooltip>('pie-tooltip');

    if (!panel) {
        return;
    }

    panel.isOpen = true;

    // eslint-disable-next-line no-void -- the promise is deliberately floating
    void panel.focusPanel();
};

// Wraps each example in a short explainer plus a centred demo.
const storyWrap = (title: string, text: string, template: TemplateResult) => html`
    <div
        data-sr-story
        style="padding: var(--dt-spacing-j); display: flex; flex-direction: column; gap: var(--dt-spacing-e); align-items: flex-start;">
        <div class="u-typographySpacing" style="max-inline-size: 640px;">
            <h2 class="u-font-heading-s" style="margin: 0;">${title}</h2>
            <p class="u-font-body-s" style="margin: 0;">${text}</p>
        </div>
        <div style="display: flex; justify-content: center; inline-size: 100%;">${template}</div>
    </div>`;

const meta: Meta = {
    title: 'Components/Tooltip/Screen readers',
    // Examples only; the wirings are fixed, so there are no controls to drive.
    component: 'pie-tooltip',
    parameters: {
        controls: {
            disable: true,
        },
    },
};

export default meta;

export const TooltipOnAPlainHtmlTrigger = {
    render: () => storyWrap(
        'Tooltip on a plain HTML trigger',
        'A plain button in the same tree as the tooltip: its aria-describedby points at the tooltip\'s id, so the description resolves and is announced when the button is focused.',
        html`
            <button
                id="sr-tooltip-trigger"
                type="button"
                aria-describedby="sr-tooltip-panel">
                Delivery times
            </button>

            <pie-tooltip
                id="sr-tooltip-panel"
                trigger="sr-tooltip-trigger"
                .triggers="${['hover', 'focus']}"
                @pie-tooltip-open="${handleOpen}"
                @pie-tooltip-close="${handleClose}">
                <span slot="content">${content}</span>
            </pie-tooltip>`,
    ),
};

export const TooltipOnAPieComponentTrigger = {
    render: () => storyWrap(
        'Tooltip on a PIE component trigger',
        'An IDREF cannot cross the trigger\'s shadow boundary, so the panel\'s text travels as a string in the trigger\'s aria.description.',
        html`
            <pie-icon-button
                id="sr-tooltip-pie-trigger"
                variant="outline"
                .aria="${{ label: 'Delivery times', description: content }}">
                <icon-info-circle></icon-info-circle>
            </pie-icon-button>

            <pie-tooltip
                id="sr-tooltip-pie-panel"
                trigger="sr-tooltip-pie-trigger"
                type="icon"
                .triggers="${['hover', 'focus']}"
                @pie-tooltip-open="${handleOpen}"
                @pie-tooltip-close="${handleClose}">
                <span slot="content">${content}</span>
            </pie-tooltip>`,
    ),
};

export const TooltipWithHeading = {
    render: () => storyWrap(
        'Tooltip with a heading',
        'The same describedby wiring: the description is read from the tooltip element, so the heading and body text are both announced.',
        html`
            <button
                id="sr-tooltip-heading-trigger"
                type="button"
                aria-describedby="sr-tooltip-heading-panel">
                Delivery times
            </button>

            <pie-tooltip
                id="sr-tooltip-heading-panel"
                trigger="sr-tooltip-heading-trigger"
                heading="Delivery times"
                headingLevel="h3"
                .triggers="${['hover', 'focus']}"
                @pie-tooltip-open="${handleOpen}"
                @pie-tooltip-close="${handleClose}">
                <span slot="content">${content}</span>
            </pie-tooltip>`,
    ),
};

export const DismissibleDialog = {
    render: () => storyWrap(
        'Dismissible dialog',
        'A close button makes the panel a dialog: the trigger gets haspopup and expanded, and focusPanel() moves focus in on open so the content is announced.',
        html`
            <pie-icon-button
                id="sr-tooltip-dismiss-trigger"
                variant="outline"
                .aria="${{ label: 'Delivery times', haspopup: 'dialog', expanded: false }}">
                <icon-info-circle></icon-info-circle>
            </pie-icon-button>

            <pie-tooltip
                id="sr-tooltip-dismiss-panel"
                trigger="sr-tooltip-dismiss-trigger"
                isDismissible
                heading="Delivery times"
                .triggers="${['click']}"
                @pie-tooltip-open="${openDialog}"
                @pie-tooltip-close="${handleDialogClose}">
                <span slot="content">${content}</span>
            </pie-tooltip>`,
    ),
};

export const DialogWithAHeading = {
    render: () => storyWrap(
        'Dialog with a heading',
        'The action slot makes the panel a dialog: haspopup announces it, expanded tracks isOpen, and focus moves in on open.',
        html`
            <pie-icon-button
                id="sr-dialog-heading-trigger"
                variant="outline"
                .aria="${{ label: 'Delivery times', haspopup: 'dialog', expanded: false }}">
                <icon-info-circle></icon-info-circle>
            </pie-icon-button>

            <pie-tooltip
                id="sr-dialog-heading-panel"
                trigger="sr-dialog-heading-trigger"
                heading="Delivery times"
                .aria="${{ close: 'Close' }}"
                .triggers="${['click']}"
                @pie-tooltip-open="${openDialog}"
                @pie-tooltip-close="${handleDialogClose}">
                <span slot="content">${content}</span>
                <pie-button slot="action" size="xsmall" @click="${handleActionClose}">Got it</pie-button>
            </pie-tooltip>`,
    ),
};

export const DialogWithoutAHeading = {
    render: () => storyWrap(
        'Dialog without a heading',
        'With no heading, aria.label names the panel; the body text is still announced by the focus move.',
        html`
            <pie-button
                id="sr-dialog-body-trigger"
                type="button"
                .aria="${{ haspopup: 'dialog', expanded: false }}">
                Delivery times
            </pie-button>

            <pie-tooltip
                id="sr-dialog-body-panel"
                trigger="sr-dialog-body-trigger"
                .aria="${{ label: 'Delivery times', close: 'Close' }}"
                .triggers="${['click']}"
                @pie-tooltip-open="${openDialog}"
                @pie-tooltip-close="${handleDialogClose}">
                <span slot="content">${content}</span>
                <pie-button slot="action" size="xsmall" @click="${handleActionClose}">Got it</pie-button>
            </pie-tooltip>`,
    ),
};

export const SystemOpenedDialogWithActions = {
    render: () => storyWrap(
        'System-opened dialog with actions',
        'No triggers are configured: the application opens the panel itself and moves focus in with focusPanel().',
        html`
            <pie-button
                id="sr-dialog-system-trigger"
                type="button"
                variant="secondary"
                @click="${openSystemDialog}">
                Show what's new
            </pie-button>

            <pie-tooltip
                id="sr-dialog-system-panel"
                trigger="sr-dialog-system-trigger"
                heading="What's new"
                isDismissible
                .aria="${{ close: 'Close' }}"
                @pie-tooltip-close="${handleDialogClose}">
                <span slot="content">${content}</span>
                <pie-button slot="action" size="xsmall" @click="${handleActionClose}">Got it</pie-button>
            </pie-tooltip>`,
    ),
};
