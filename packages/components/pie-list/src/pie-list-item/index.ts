import { html, nothing, unsafeCSS } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { consume, ContextProvider } from '@lit/context';
import {
    safeCustomElement,
    requiredProperty,
    validPropertyValues,
    parentDisabledContext,
    ariaContext,
    type ContextualAria,
} from '@justeattakeaway/pie-webc-core';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { type ListItemProps, defaultProps, selectionTypes } from './defs';
import styles from './list-item.scss?inline';

const componentSelector = 'pie-list-item';

/**
 * @tagname pie-list-item
 * @slot leading - Content shown at the start of the item (for example an icon, avatar, or a slotted radio/checkbox).
 * @slot trailing - Content shown at the end of the item. Mutually exclusive with `metaText`.
 */
@safeCustomElement('pie-list-item')
export class PieListItem extends PieElement implements ListItemProps {
    @property({ type: String })
    @requiredProperty(componentSelector)
        primaryText!: ListItemProps['primaryText'];

    @property({ type: String })
        secondaryText: ListItemProps['secondaryText'];

    @property({ type: String })
        metaText: ListItemProps['metaText'];

    @property({ type: Boolean, attribute: 'is-compact', reflect: true })
        isCompact = defaultProps.isCompact;

    @property({ type: Boolean, attribute: 'is-bold', reflect: true })
        isBold = defaultProps.isBold;

    @property({ type: Boolean, attribute: 'has-media', reflect: true })
        hasMedia = defaultProps.hasMedia;

    @property({ type: String, attribute: 'selection-type', reflect: true })
    @validPropertyValues(componentSelector, selectionTypes, defaultProps.selectionType)
        selectionType = defaultProps.selectionType;

    // Whether a disabling ancestor (e.g. `pie-radio-group`) has provided its disabled state.
    // Defaults to false when there is no provider (a standalone item or a static list).
    @consume({ context: parentDisabledContext, subscribe: true })
    @state()
    private _parentDisabled = false;

    // Provides this item's accessible name/description down to its slotted control via the shared
    // aria context, which the control consumes and applies to the element carrying its semantics
    // (the internal input for pie-checkbox / pie-switch). See `ariaContext` in pie-webc-core.
    private _ariaProvider = new ContextProvider(this, { context: ariaContext });

    private _abortController!: AbortController;

    private _hasExplicitRole = false;

    private get _isSelectable (): boolean {
        return this.selectionType !== 'none';
    }

    // radio/checkbox are owned by a selection group, which is why the item becomes `presentation`
    // (so the group owns the controls directly) and the radio is named on its host. A switch has
    // no group, so the item stays a `listitem`.
    private get _ownedByGroup (): boolean {
        return this.selectionType === 'radio' || this.selectionType === 'checkbox';
    }

    // True when this row should be treated as disabled: either its own control is disabled, or
    // the containing group is disabled. The control's state is read live (rather than cached in
    // reactive state) so it is always evaluated in the same render as `_isSelectable`, leaving no
    // window where a disabled row is momentarily interactive during hydration.
    private get _isDisabled (): boolean {
        return (this._control?.hasAttribute('disabled') ?? false) || this._parentDisabled;
    }

    private _controlObserver?: MutationObserver;

    // The interactive control (radio/checkbox/switch) slotted into this item, if any.
    private get _control (): HTMLElement | null {
        return this.querySelector('pie-radio, pie-checkbox, pie-switch');
    }

    connectedCallback () {
        super.connectedCallback();

        // Respect a role the consumer set explicitly; otherwise we manage it from `selectionType`.
        this._hasExplicitRole = this.hasAttribute('role');

        this._abortController = new AbortController();
        this.addEventListener('click', this._handleHostClick, { signal: this._abortController.signal });
    }

    disconnectedCallback () {
        super.disconnectedCallback();
        this._abortController.abort();
        this._controlObserver?.disconnect();
    }

    protected updated () {
        this._applyRole();
        this._ariaProvider.setValue(this._providedAria);
    }

    /**
     * Sets the item's role from `selectionType`: `presentation` for radio/checkbox (so the group
     * owns those controls directly), otherwise `listitem` (static items and switches). A role set
     * explicitly by the consumer is left untouched.
     */
    private _applyRole (): void {
        if (this._hasExplicitRole) return;
        this.setAttribute('role', this._ownedByGroup ? 'presentation' : 'listitem');
    }

    /**
     * The accessible name and description this item provides to its slotted control, stitched from
     * its text. Only provided in a selectable list. Each control consumes this via `ariaContext`
     * and decides how to apply it: `pie-radio` names its host (which carries `role="radio"`),
     * while `pie-checkbox` / `pie-switch` name their internal input (their host is role-less, so
     * `aria-label` there would be invalid). Context reaches across the shadow boundary that
     * `aria-labelledby` cannot.
     */
    private get _providedAria (): ContextualAria | undefined {
        if (!this._isSelectable) return undefined;

        const description = [this.secondaryText, this.metaText].filter(Boolean).join('. ');

        return { label: this.primaryText, description: description || undefined };
    }

    private _handleControlSlotChange (): void {
        this._observeControl();
        // Re-render so the row's `is-disabled` reflects the newly slotted control.
        this.requestUpdate();
    }

    /**
     * Observes the slotted control's `disabled` attribute so the row's interactive (hover and
     * active) styles react to it being toggled at runtime, not just when the slot changes.
     */
    private _observeControl (): void {
        this._controlObserver?.disconnect();

        const control = this._control;
        if (!control) return;

        this._controlObserver = new MutationObserver(() => this.requestUpdate());
        this._controlObserver.observe(control, { attributes: true, attributeFilter: ['disabled'] });
    }

    /**
     * Forwards a click anywhere on the row to the slotted control, so the whole item is a hit
     * target. Skips clicks that already landed on the control, to avoid a double toggle.
     */
    private _handleHostClick = (event: MouseEvent): void => {
        if (!this._isSelectable || this._isDisabled) return;

        const control = this._control;
        if (!control || event.composedPath().includes(control)) return;

        control.click();
        control.focus();
    };

    _renderSecondaryText () {
        const { secondaryText } = this;
        if (secondaryText) {
            return html`<span class="c-listItem-secondaryText">${secondaryText}</span>`;
        }

        return nothing;
    }

    // metaText is another form of trailing content. The component can only ever display either slotted trailing content or the metaText string
    _renderTrailingContent () {
        const { metaText } = this;
        if (metaText) {
            return html`<span class="c-listItem-metaText c-listItem-trailing" aria-hidden=${this._isSelectable ? 'true' : nothing}>${metaText}</span>`;
        }

        return html`<div class="c-listItem-trailing"><slot name="trailing" @slotchange=${this._handleControlSlotChange}></slot></div>`;
    }

    render () {
        const { primaryText } = this;

        // We should never render a list item that doesn't have primary text.
        if (!primaryText) return nothing;

        const containerClasses = {
            'c-listItem-container': true,
            'is-compact': this.isCompact,
            'is-bold': this.isBold,
            'has-media': this.hasMedia,
            'is-selectable': this._isSelectable,
            'is-disabled': this._isDisabled,
        };

        return html`
        <div class=${classMap(containerClasses)}>
            <div class="c-listItem-leading">
                <slot name="leading" @slotchange=${this._handleControlSlotChange}></slot>
            </div>

            <div class="c-listItem-text" aria-hidden=${this._isSelectable ? 'true' : nothing}>
                <span class="c-listItem-primaryText">${primaryText}</span>
                ${this._renderSecondaryText()}
            </div>

            ${this._renderTrailingContent()}
        </div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieListItem;
    }
}
