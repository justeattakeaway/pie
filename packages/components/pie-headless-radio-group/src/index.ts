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
        // The tabindex is now exclusively managed by the parent group component
        // to ensure roving tabindex works correctly under all conditions.
        this.tabIndex = -1;
    }

    protected updated (changedProperties: PropertyValues<this>): void {
        if (changedProperties.has('checked')) {
            this.ariaChecked = this.checked ? 'true' : 'false';
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
    private _initialValue = '';
    private _initialStates = new Map<PieHeadlessRadioButton, { disabled: boolean }>();
    private _initialDisabled = false;
    private _mutationObserver: MutationObserver | null = null;

    constructor () {
        super();
        this._internals = this.attachInternals();
    }

    @property({ type: String }) value = '';
    @property({ type: String }) label = '';
    @property({ type: Boolean, reflect: true }) disabled = false;

    @queryAssignedElements({ selector: 'pie-headless-radio-button', flatten: true })
    private _radioButtons!: PieHeadlessRadioButton[];

    private _groupId = `radio-group-${crypto.randomUUID()}`;

    // This is a lifecycle method for form-associated custom elements.
    // It is called when the parent form is reset.
    formResetCallback () {
        this.value = this._initialValue;
        this.disabled = this._initialDisabled;

        // Restore the initial disabled state of each radio button
        this._radioButtons.forEach((rb) => {
            const initialState = this._initialStates.get(rb);
            if (initialState) {
                rb.disabled = initialState.disabled;
            }
        });
    }

    protected firstUpdated (): void {
        // Store the initial values so the form can be reset correctly.
        this._initialValue = this.value;
        this._initialDisabled = this.disabled;
    }

    connectedCallback () {
        super.connectedCallback();
        this.setAttribute('role', 'radiogroup');
        this.addEventListener('click', this._handleClick, true); // Use capture phase
        this.addEventListener('keydown', this._handleKeyDown);

        // Set up the mutation observer to watch for changes to the disabled attribute of child radio buttons
        this._mutationObserver = new MutationObserver(() => {
            this._updateRadioStates();
        });

        this._mutationObserver.observe(this, {
            attributes: true,
            subtree: true,
            attributeFilter: ['disabled'],
        });
    }

    disconnectedCallback (): void {
        super.disconnectedCallback();
        this.removeEventListener('click', this._handleClick, true);
        this.removeEventListener('keydown', this._handleKeyDown);

        // Clean up the observer
        if (this._mutationObserver) {
            this._mutationObserver.disconnect();
            this._mutationObserver = null;
        }
    }

    private _handleSlotChange () {
        this._radioButtons.forEach((rb) => {
            if (!this._initialStates.has(rb)) {
                this._initialStates.set(rb, { disabled: rb.disabled });
            }
            rb.id = rb.id || `${this._groupId}-item-${rb.value}`;
        });
        this._updateRadioStates();
    }

    protected updated (changedProperties: PropertyValues<this>) {
        if (changedProperties.has('value')) {
            this._internals.setFormValue(this.value);
        }
        if (changedProperties.has('label')) {
            if (this.label) {
                this.setAttribute('aria-label', this.label);
            } else {
                this.removeAttribute('aria-label');
            }
        }
        if (changedProperties.has('disabled')) {
            this.setAttribute('aria-disabled', String(this.disabled));
        }

        this._updateRadioStates();
    }

    private _handleClick (event: Event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return;
        }
        const target = event.target as HTMLElement;
        const radioButton = target.closest('pie-headless-radio-button') as PieHeadlessRadioButton | null;
        if (radioButton && !radioButton.disabled) {
            this.value = radioButton.value;
            this.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }

    private _getDirection (): 'ltr' | 'rtl' {
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
        if (this.disabled) {
            return;
        }

        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
            const isRtl = this._getDirection() === 'rtl';
            let direction = 0;

            if (event.key === 'ArrowDown' || (!isRtl && event.key === 'ArrowRight') || (isRtl && event.key === 'ArrowLeft')) {
                direction = 1;
            } else if (event.key === 'ArrowUp' || (!isRtl && event.key === 'ArrowLeft') || (isRtl && event.key === 'ArrowRight')) {
                direction = -1;
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

    private _updateRadioStates () {
        // 1. Update the checked state of all buttons based on the group's value.
        // Also ensure the group's disabled state is respected by the children.
        this._radioButtons.forEach((rb) => {
            rb.checked = rb.value === this.value;
            if (this.disabled) {
                rb.disabled = true;
            }
        });

        // 2. Determine which radio should be focusable (roving tabindex).
        // This is either the currently checked radio (if enabled) or the first enabled radio.
        const focusableRadio =
            this._radioButtons.find((rb) => rb.checked && !rb.disabled) ||
            this._radioButtons.find((rb) => !rb.disabled);

        // 3. Apply the roving tabindex state to all radio buttons.
        this._radioButtons.forEach((rb) => {
            // The focusableRadio is the only one with tabIndex=0, all others are -1.
            rb.tabIndex = (rb === focusableRadio) ? 0 : -1;
        });
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

