/**
 * The accessibility information a form field provides to a nested control.
 */
export interface FieldA11y {
    label: string;
    description: string;
}

/** Event name for the (hand-rolled) field context protocol. */
export const FIELD_CONTEXT_EVENT = 'pie-mock-field-context-request';

export type FieldContextCallback = (value: FieldA11y, unsubscribe: () => void) => void;

/**
 * A minimal implementation of the context-request protocol — the same shape
 * `@lit/context` uses (a composed, bubbling event carrying a callback). It is
 * hand-rolled here so the PoC adds no dependency; a real implementation would
 * use `@lit/context`.
 */
export class FieldContextRequestEvent extends Event {
    public readonly callback: FieldContextCallback;

    public constructor (callback: FieldContextCallback) {
        super(FIELD_CONTEXT_EVENT, { bubbles: true, composed: true });
        this.callback = callback;
    }
}
