import { RTLComponentProps } from '@justeattakeaway/pie-webc-core';
import { Variant } from '@justeattakeaway/pie-button/src/defs.ts';

export const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export const sizes = ['small', 'medium', 'large'] as const;
export const positions = ['top', 'center'] as const;

export type AriaProps = {
    close?: string;
    back?: string;
    loading?: string;
};

export type ActionProps = {
        /**
         * The text to display inside the button.
         */
        text: string;

        /**
         * The button variant.
         */
        variant?: Variant;

        /**
         * The ARIA label for the button.
         */
        ariaLabel?: string;
};

export type ModalProps = RTLComponentProps & {
    /**
     * The ARIA labels used for the modal close and back buttons, as well as loading state.
     */
    aria?: AriaProps;

    /**
     * When true, the modal will have a back button. This currently behaves the same as the close button.
     */
    hasBackButton: boolean;

    /**
     * When true, the modal will have a back button. This currently behaves the same as the close button.
     */
    hasStackedActions: boolean;

    /**
     * The text to display in the modal's heading.
     */
    heading: string;

    /**
     * The HTML heading tag to use for the modal's heading. Can be h1-h6.
     */
    headingLevel: typeof headingLevels[number];

    /**
     * When true, the modal will be open.
     */
    isOpen: boolean;

    /**
     * When set to `true`:
     *  1. The close button within the modal will be visible.
     *  2. The user can dismiss the modal via the ESCAPE key, clicking the backdrop
     *     or via a close button.
     *
     * When set to `false`:
     *  1. The close button within the modal will be hidden.
     *  2. The user can NOT dismiss the modal via the ESCAPE key or clicking the backdrop.
     *
     */
    isDismissible: boolean;

    /**
     * When false, the modal footer will scroll with the content inside the modal body.
     */
    isFooterPinned: boolean;

    /**
     * This controls whether a *medium-sized* modal will cover the full width of the page when below the mid breakpoint.
     */
    isFullWidthBelowMid: boolean;

    /**
     * When true, displays a loading spinner in the modal.
     */
    isLoading: boolean;

    /**
     * The leading action configuration for the modal.
     */
    leadingAction: ActionProps;

    /*
     * The position of the modal; this controls where it will appear on the page.
     */
    position: typeof positions[number];

    /**
     * The selector for the element that you would like focus to be returned to when the modal is closed, e.g., #skipToMain
     */
    returnFocusAfterCloseSelector?: string;

    /**
     * The size of the modal; this controls how wide it will appear on the page.
     */
    size: typeof sizes[number];

    /**
     * The supporting action configuration for the modal.
     */
    supportingAction: ActionProps;
};

/**
 * Event name for when the modal is closed.
 *
 * @constant
 */
export const ON_MODAL_CLOSE_EVENT = 'pie-modal-close';

/**
 * Event name for when the modal is opened.
 *
 * @constant
 */
export const ON_MODAL_OPEN_EVENT = 'pie-modal-open';

/**
 * Event name for when the modal back button is clicked.
 *
 * @constant
 */
export const ON_MODAL_BACK_EVENT = 'pie-modal-back';
