import {
    html, isServer, nothing, unsafeCSS,
} from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { consume, ContextProvider } from '@lit/context';
import {
    safeCustomElement,
    validPropertyValues,
    parentDisabledContext,
    ariaContext,
    selectionTypeContext,
    type ContextualAria,
    type ProvidedSelectionType,
} from '@justeattakeaway/pie-webc-core';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    type ListItemProps, type SelectionType, defaultProps, selectionTypes,
} from './defs';
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
        primaryText!: ListItemProps['primaryText'];

    @property({ type: String })
        secondaryText: ListItemProps['secondaryText'];

    @property({ type: String })
        metaText: ListItemProps['metaText'];

    @property({ type: Boolean })
        isCompact = defaultProps.isCompact;

    @property({ type: Boolean })
        isBold = defaultProps.isBold;

    @property({ type: Boolean })
        hasMedia = defaultProps.hasMedia;

    @property({ type: String, attribute: 'selection-type' })
    @validPropertyValues(componentSelector, selectionTypes, defaultProps.selectionType)
        selectionType = defaultProps.selectionType;

    // Whether a disabling ancestor (e.g. `pie-radio-group`) has provided its disabled state.
    // Defaults to false when there is no provider (a standalone item or a static list).
    @consume({ context: parentDisabledContext, subscribe: true })
    @state()
    private _parentDisabled = false;

    // The selection type provided by a container (e.g. `pie-radio-group variant="list"`). When a
    // container provides it, it wins over this item's own `selectionType` prop, so authors don't
    // repeat `selection-type` on every row. `undefined` for a standalone item, which then falls back
    // to its own prop. See `selectionTypeContext` in pie-webc-core.
    @consume({ context: selectionTypeContext, subscribe: true })
    @state()
    private _providedSelectionType?: ProvidedSelectionType;

    // The slotted control's disabled state, mirrored into reactive state (synced on connect and
    // whenever the control's `disabled` changes). Kept as `@state` rather than read live in render
    // so it survives SSR hydration: the server and the first client render both see `false` (a
    // framework sets the control's `disabled` only after hydration), so Lit's class bindings start
    // in sync and the later `true` applies cleanly. Reading it live produced a hydration mismatch
    // that left the row's disabled styling stuck (the class binding thought it was applied when the
    // hydrated DOM never received it).
    @state()
    private _controlDisabled = false;

    // Provides this item's accessible name/description down to its slotted control via the shared
    // aria context, which the control consumes and applies to the element carrying its semantics
    // (the internal input for pie-checkbox / pie-switch). See `ariaContext` in pie-webc-core.
    //
    // Guarded with `isServer`: `@lit/context`'s ContextProvider attaches `context-request`
    // listeners to the host in its constructor (via `host.addEventListener`). During SSR/prerender
    // the element is constructed without a DOM host, so that call throws
    // ("host.addEventListener is not a function") and breaks the build. The provider is client-only
    // anyway (context is delivered after `connectedCallback`, which SSR never runs), so it is safe
    // to skip on the server.
    private _ariaProvider = isServer ? undefined : new ContextProvider(this, { context: ariaContext });

    private _abortController!: AbortController;

    private _hasExplicitRole = false;

    // The item's single effective selection type, from one of two sources (not two parallel
    // systems - context is just the container-level way to set the same property for many rows):
    //   1. context - a `pie-radio-group` / `pie-checkbox-group` (`variant="list"`) provides the
    //      type to all its items, so the container is the single source of truth and authors don't
    //      repeat `selection-type` per row. This is the common case and wins when present.
    //   2. the `selectionType` prop - the fallback for when no container provides it: chiefly a
    //      standalone item hosting a `pie-switch` (a switch has no group), or an explicit override.
    private get _effectiveSelectionType (): SelectionType {
        return this._providedSelectionType ?? this.selectionType;
    }

    private get _isSelectable (): boolean {
        return this._effectiveSelectionType !== 'none';
    }

    // radio/checkbox are owned by a selection group, which is why the item becomes `presentation`
    // (so the group owns the controls directly) and the radio is named on its host. A switch has
    // no group, so the item stays a `listitem`.
    private get _ownedByGroup (): boolean {
        return this._effectiveSelectionType === 'radio' || this._effectiveSelectionType === 'checkbox';
    }

    // True when this row should be treated as disabled: either its own control is disabled, or the
    // containing group is disabled. We read the control's `disabled` property rather than its
    // attribute: frameworks (React/Vue) set `disabled` as a property, and `pie-radio` reflects it to
    // the attribute only in a later update, so the attribute can be absent when this is first read
    // on hydration. The property is the source of truth and is read live each render.
    private get _isDisabled (): boolean {
        return this._controlDisabled || this._parentDisabled;
    }

    // Mirrors the slotted control's live `disabled` into reactive state. Passed to the observer and
    // called on connect for the initial value (the observer only sees later mutations).
    private _syncControlDisabled = (): void => {
        const control = this._control as (HTMLElement & { disabled?: boolean }) | null;
        this._controlDisabled = control?.disabled ?? false;
    };

    private _controlObserver?: MutationObserver;

    // The interactive control (radio/checkbox/switch) slotted into this item, if any.
    // This is read from `render()` (via `_isDisabled`), which runs during SSR, but the server DOM
    // shim has no `querySelector` and would throw. Guard by capability rather than `isServer`: the
    // SSR engines vary (Next's `@lit-labs/ssr-react` reports `isServer === true`, but Nuxt's
    // `nuxt-ssr-lit` reports `false`), and their shims expose different method subsets, so `isServer`
    // is unreliable here. Light-DOM children cannot be inspected on the server anyway, so we report
    // "no control"; the real value resolves on the client (matching the context-driven attributes).
    private get _control (): HTMLElement | null {
        if (typeof this.querySelector !== 'function') return null;
        return this.querySelector('pie-radio, pie-checkbox, pie-switch');
    }

    connectedCallback () {
        super.connectedCallback();

        // Respect a role the consumer set explicitly; otherwise we manage it from `selectionType`.
        this._hasExplicitRole = this.hasAttribute('role');

        this._abortController = new AbortController();
        this.addEventListener('click', this._handleHostClick, { signal: this._abortController.signal });
        this._observeControlSubtree();
        this._syncControlDisabled();
    }

    disconnectedCallback () {
        super.disconnectedCallback();
        this._abortController.abort();
        this._controlObserver?.disconnect();
    }

    protected updated () {
        this._applyRole();
        this._ariaProvider?.setValue(this._providedAria);
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

    /**
     * Keeps the row's disabled styling in sync with its slotted control by observing the light-DOM
     * subtree: `childList` catches the control being slotted in (frameworks add it after connect),
     * and the `disabled` attribute filter catches it toggling (pie-radio reflects its `disabled`
     * property to the attribute). Done here rather than via `slotchange` or `firstUpdated`, neither
     * of which fires reliably across SSR hydration and frameworks.
     *
     * Guarded by capability: `connectedCallback` runs on the server in some renderers (Nuxt's
     * nuxt-ssr-lit) where `MutationObserver` is absent, and observation is client-only anyway. The
     * callback runs as a microtask (outside Lit's update), so it does not trigger the
     * "scheduled an update after update completed" warning.
     */
    private _observeControlSubtree (): void {
        if (typeof MutationObserver !== 'function') return;

        this._controlObserver = new MutationObserver(this._syncControlDisabled);
        this._controlObserver.observe(this, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['disabled'],
        });
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

        return html`<div class="c-listItem-trailing"><slot name="trailing"></slot></div>`;
    }

    render () {
        const { primaryText } = this;

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
                <slot name="leading"></slot>
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
