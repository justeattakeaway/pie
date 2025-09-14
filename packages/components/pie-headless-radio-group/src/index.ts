/* eslint-disable max-classes-per-file */

import {
    html, LitElement, type PropertyValues,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    safeCustomElement,
} from '@justeattakeaway/pie-webc-core';
import { property, queryAssignedElements } from 'lit/decorators.js';

// Valid values available to consumers
export * from './defs';

let radioGroupCounter = 0;

/**
 * A headless radio button component. It provides the logic and accessibility
 * for a radio button, but allows for any presentational markup via slots.
 *
 * @tagname pie-headless-radio-button
 * @slot - The content of the radio button, e.g., a label or an image.
 * @event {Event} - change - Dispatched when the radio button is selected.
 */
@safeCustomElement('pie-headless-radio-button')
export class PieHeadlessRadioButton extends PieElement {
    @property({ type: String }) value = '';
    @property({ type: Boolean, reflect: true }) checked = false;
    @property({ type: Boolean, reflect: true }) disabled = false;

    connectedCallback () {
        super.connectedCallback();
        this.setAttribute('role', 'radio');
    }

    protected updated (changedProperties: PropertyValues<this> | Map<PropertyKey, unknown>): void {
        if (changedProperties.has('checked')) {
            this.ariaChecked = this.checked ? 'true' : 'false';
            this.tabIndex = this.checked ? 0 : -1;
        }
        if (changedProperties.has('disabled')) {
            this.ariaDisabled = this.disabled ? 'true' : 'false';
        }
    }

    render () {
        return html`<slot></slot>`;
    }
}

/**
 * A headless radio group component that manages a collection of radio-button elements.
 * It handles keyboard navigation, roving tabindex, and form association.
 *
 * @tagname pie-headless-radio-group
 * @slot - Default slot for one or more `radio-button` elements.
 */
@safeCustomElement('pie-headless-radio-group')
export class PieHeadlessRadioGroup extends LitElement {
    static formAssociated = true;

    private _internals: ElementInternals;

    constructor () {
        super();
        this._internals = this.attachInternals();
    }

    @property({ type: String }) value = '';
    @property({ type: String }) label = '';
    @queryAssignedElements({ selector: 'pie-headless-radio-button', flatten: true })
    private _radioButtons!: PieHeadlessRadioButton[];

    private _groupId = `radio-group-${radioGroupCounter++}`;

    connectedCallback () {
        super.connectedCallback();
        this.setAttribute('role', 'radiogroup');
        this.addEventListener('click', this._handleClick);
        this.addEventListener('keydown', this._handleKeyDown);
    }

    disconnectedCallback (): void {
        super.disconnectedCallback();
        this.removeEventListener('click', this._handleClick);
        this.removeEventListener('keydown', this._handleKeyDown);
    }

    private _handleSlotChange () {
        this._radioButtons.forEach((rb) => {
            rb.id = rb.id || `${this._groupId}-item-${rb.value}`;
            rb.checked = rb.value === this.value;
        });
        this._updateCheckedRadio();
    }

    protected updated (changedProperties: PropertyValues<this>) {
        if (changedProperties.has('value')) {
            this._updateCheckedRadio();
            this._internals.setFormValue(this.value);
        }
        if (changedProperties.has('label')) {
            if (this.label) {
                this.setAttribute('aria-label', this.label);
            } else {
                this.removeAttribute('aria-label');
            }
        }
    }

    private _handleClick (event: Event) {
        const target = event.target as HTMLElement;
        const radioButton = target.closest('pie-headless-radio-button') as PieHeadlessRadioButton | null;
        if (radioButton && !radioButton.disabled) {
            this.value = radioButton.value;
            this.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }

    private _getDirection (): 'ltr' | 'rtl' {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let element: HTMLElement | null = this;
        while (element) {
            const dir = element.getAttribute('dir');
            if (dir === 'rtl' || dir === 'ltr') {
                return dir;
            }
            element = element.parentElement || (element.getRootNode() as ShadowRoot)?.host as HTMLElement | null;
        }
        return 'ltr';
    }

    private _handleKeyDown (event: KeyboardEvent) {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
            const isRtl = this._getDirection() === 'rtl';
            let direction = 0; // 0 = no move, 1 = next, -1 = prev

            // Per ARIA specs for a radio group, Up/Down arrows navigate sequentially,
            // and Left/Right arrows do the same but are inverted for RTL.
            if (event.key === 'ArrowDown' || (!isRtl && event.key === 'ArrowRight') || (isRtl && event.key === 'ArrowLeft')) {
                direction = 1; // "Next" radio
            } else if (event.key === 'ArrowUp' || (!isRtl && event.key === 'ArrowLeft') || (isRtl && event.key === 'ArrowRight')) {
                direction = -1; // "Previous" radio
            }

            if (direction === 0) return;

            event.preventDefault();

            const enabledRadios = this._radioButtons.filter((rb) => !rb.disabled);
            if (enabledRadios.length === 0) return;

            const currentIndex = enabledRadios.findIndex((rb) => rb.checked);

            let nextIndex;
            if (currentIndex === -1) {
                nextIndex = direction === 1 ? 0 : enabledRadios.length - 1;
            } else {
                const numRadios = enabledRadios.length;
                nextIndex = (currentIndex + direction + numRadios) % numRadios;
            }

            this.value = enabledRadios[nextIndex].value;
            enabledRadios[nextIndex].focus();
            this.dispatchEvent(new Event('change', { bubbles: true }));
        } else if (event.key === ' ') {
            const target = event.target as HTMLElement;
            if (target.matches('pie-headless-radio-button')) {
                const radioButton = target as PieHeadlessRadioButton;
                event.preventDefault();
                if (!radioButton.disabled && !radioButton.checked) {
                    this.value = radioButton.value;
                    this.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }
        }
    }

    private _updateCheckedRadio () {
        let checkedRadio: PieHeadlessRadioButton | undefined;
        this._radioButtons.forEach((rb) => {
            rb.checked = rb.value === this.value;
            if (rb.checked) {
                checkedRadio = rb;
            }
        });

        if (!checkedRadio && this._radioButtons.length > 0) {
            const firstEnabled = this._radioButtons.find((rb) => !rb.disabled);
            if (firstEnabled) firstEnabled.tabIndex = 0;
        }
    }

    render () {
        return html`<slot @slotchange="${this._handleSlotChange}"></slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'pie-headless-radio-group': PieHeadlessRadioGroup;
        'pie-headless-radio-button': PieHeadlessRadioButton;
    }
}

