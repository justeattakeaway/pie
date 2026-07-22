import { type LitElement } from 'lit';
import type { GenericConstructor } from '../types/GenericConstructor';
import { isSafari } from '../../functions/isSafari';

/**
 * Joins and normalises the text content of a set of `<label>` elements into a single string.
 */
const getLabelText = (labels: NodeList): string | undefined => {
    const labelText = Array.from(labels)
        .map((label) => label.textContent?.replace(/\s+/g, ' ').trim() ?? '')
        .filter(Boolean)
        .join(' ')
        .trim();

    return labelText || undefined;
};

/**
 * An interface representing the structure of a class that has been extended
 * with the AssociatedLabelMixin.
 * @interface
 */
export interface AssociatedLabelInterface {
    /** The text content of the element's associated `<label>`(s) */
    readonly associatedLabelText?: string;
}

/**
 * A mixin that mirrors the text content of a form-associated custom element's associated
 * `<label>`(s) onto an `associatedLabelText` property.
 *
 * Safari doesn't compute the accessible name of a form-associated
 * custom element from its associated `<label>` the way others do, so we need to use
 * `associatedLabelText` as a fallback `aria-label`.
 * https://bugs.webkit.org/show_bug.cgi?id=259124
 *
 *
 * The class this mixin is applied to must already provide `_internals: ElementInternals`
 * (for example via `FormControlMixin`).
 *
 * @param superClass - The LitElement class (with `_internals`) to extend.
 * @returns A new class extending both the provided LitElement and AssociatedLabelInterface.
 *
 * @example
 * ```typescript
 * import { html } from 'lit';
 * import { FormControlMixin, AssociatedLabelMixin } from '@justeattakeaway/pie-webc-core';
 *
 * class MyFormElement extends AssociatedLabelMixin(FormControlMixin(LitElement)) {
 *   render () {
 *     return html`<input aria-label="${this.associatedLabelText}">`;
 *   }
 * }
 * ```
 */
export const AssociatedLabelMixin =
    <T extends GenericConstructor<LitElement & { _internals: ElementInternals }>>(superClass: T) => {
        /**
         * Class representing a LitElement with associated label handling.
         * @extends {LitElement}
         * @implements {AssociatedLabelInterface}
         */
        class AssociatedLabelElement extends superClass implements AssociatedLabelInterface {
            private _associatedLabelText?: string;

            get associatedLabelText () {
                return this._associatedLabelText;
            }

            private _labelMutationObserver?: MutationObserver;

            connectedCallback () {
                super.connectedCallback();
                this.observeAssociatedLabels();
            }

            disconnectedCallback () {
                super.disconnectedCallback();
                this._labelMutationObserver?.disconnect();
            }

            private updateAssociatedLabelText () : void {
                this._associatedLabelText = getLabelText(this._internals.labels);
                this.requestUpdate();
            }

            private observeAssociatedLabels () : void {
                const { labels } = this._internals;

                if (!isSafari() || !labels.length) {
                    return;
                }

                this.updateAssociatedLabelText();

                this._labelMutationObserver = new MutationObserver(() => this.updateAssociatedLabelText());

                labels.forEach((label) => {
                    this._labelMutationObserver?.observe(label, { childList: true, characterData: true, subtree: true });
                });
            }
        }

        return AssociatedLabelElement as GenericConstructor<AssociatedLabelInterface> & T;
    };
