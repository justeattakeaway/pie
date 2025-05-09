import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

import { type Variant as ButtonVariant } from '@justeattakeaway/pie-button/src/defs.ts';

export const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export const sizes = ['small', 'medium', 'large'] as const;
export const positions = ['top', 'center'] as const;

type AriaProps = {
    close?: string;
    back?: string;
    loading?: string;
};

type ActionProps = {
    /**
     * The text to display inside the button.
     */
    text: string;

    /**
     * The button variant.
     */
    variant?: ButtonVariant;

    /**
     * The aria label for the button.
     */
    ariaLabel?: string;
};

export type ModalProps = {
    /**
     * The ARIA labels used for the modal close and back buttons, as well as for the loading state.
     */
    aria?: AriaProps;

    /**
     * When true, the modal will have a back button. This currently behaves the same as the close button.
     */
    hasBackButton?: boolean;

    /**
     * When true, the modal will have a back button. This currently behaves the same as the close button.
     */
    hasStackedActions?: boolean;

    /**
     * The text to display in the modal's heading.
     */
    heading: string;

    /**
     * The HTML heading tag to use for the modal's heading. Can be h1-h6.
     */
    headingLevel?: typeof headingLevels[number];

    /**
     * When true, the modal will be open.
     */
    isOpen?: boolean;

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
    isDismissible?: boolean;

    /**
     * When false, the modal footer will scroll with the content inside the modal body.
     */
    isFooterPinned?: boolean;

    /**
     * This controls whether a *medium-sized* modal will cover the full width of the page when below the mid breakpoint.
     */
    isFullWidthBelowMid?: boolean;

    /**
     * When true, displays a loading spinner in the modal.
     */
    isLoading?: boolean;

    /**
     * The leading action configuration for the modal.
     */
    leadingAction?: ActionProps;

    /**
     * The supporting action configuration for the modal.
     */
    supportingAction?: ActionProps;

    /*
     * The position of the modal; this controls where it will appear on the page.
     */
    position?: typeof positions[number];

    /**
     * The selector for the element that you would like focus to be returned to when the modal is closed, e.g., #skipToMain
     */
    returnFocusAfterCloseSelector?: string;

    /**
     * The size of the modal; this controls how wide it will appear on the page.
     */
    size?: typeof sizes[number];
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

/**
 * Event name for when the modal leading action is clicked.
 *
 * @constant
 */
export const ON_MODAL_LEADING_ACTION_CLICK = 'pie-modal-leading-action-click';

/**
 * Event name for when the modal supporting action is clicked.
 *
 * @constant
 */
export const ON_MODAL_SUPPORTING_ACTION_CLICK = 'pie-modal-supporting-action-click';

export type ModalActionType = 'leading' | 'supporting';

export type DefaultProps = ComponentDefaultProps<ModalProps, keyof Omit<ModalProps, 'aria' | 'heading' | 'leadingAction' | 'supportingAction' | 'returnFocusAfterCloseSelector'>>;

export const defaultProps: DefaultProps = {
    hasBackButton: false,
    hasStackedActions: false,
    headingLevel: 'h2',
    isOpen: false,
    isDismissible: false,
    isFooterPinned: true,
    isFullWidthBelowMid: false,
    isLoading: false,
    position: 'center',
    size: 'medium',
};
