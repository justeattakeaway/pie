import {
    html, isServer, nothing, unsafeCSS,
} from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { consume, ContextProvider } from '@lit/context';
import {
    safeCustomElement,
    validPropertyValues,
    parentDisabledContext,
    ariaContext,
    type ContextualAria,
} from '@justeattakeaway/pie-webc-core';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { type ListItemProps, defaultProps, interactionTypes } from './defs';
import styles from './list-item.scss?inline';

const componentSelector = 'pie-list-item';

/**
 * @tagname pie-list-item
 * @slot leading - Content shown at the start of the item (for example an icon, avatar, or a slotted radio/checkbox).
 * @slot trailing - Content shown at the end of the item. Mutually exclusive with `metaText`.
 * @slot link - Rendered only when `interactionType="link"`. Slot one empty anchor (e.g. `<a slot="link" href="/x">`) stretched over the whole row as the link target. Must contain no text.
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

    @property({ type: String })
    @validPropertyValues(componentSelector, interactionTypes, defaultProps.interactionType)
        interactionType = defaultProps.interactionType;

    @property({ type: Boolean })
        disabled = defaultProps.disabled;

    // Whether a disabling ancestor (e.g. `pie-radio-group`) has provided its disabled state.
    // Defaults to false when there is no provider (a standalone item or a static list).
    @consume({ context: parentDisabledContext, subscribe: true })
    @state()
    private _parentDisabled = false;

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

    // The last role value we wrote ourselves, so `_applyRole` can tell apart our own managed role
    // from one the consumer set (and therefore should not overwrite).
    private _managedRole: string | null = null;

    // Captured once (in `_applyLinkAria`): whether the consumer already named/described the slotted
    // link anchor themselves. If so, their value always wins and we never touch it.
    private _linkAriaCaptured = false;

    private _consumerNamedLink = false;

    private _consumerDescribedLink = false;

    // A selection row hosts a slotted control (radio/checkbox/switch) and makes the whole row a
    // toggle target. `link`/`button` are interactive too, but they are single navigation/action
    // targets rather than selection controls, so they are deliberately excluded here.
    private get _isSelectable (): boolean {
        return this.interactionType === 'radio' ||
            this.interactionType === 'checkbox' ||
            this.interactionType === 'switch';
    }

    private get _isLinkRow (): boolean {
        return this.interactionType === 'link';
    }

    private get _isButtonRow (): boolean {
        return this.interactionType === 'button';
    }

    // A link and a button row share the same visual mechanic: an empty element stretched over the
    // whole row as the interactive target, named by the item from its own text. They differ in who
    // owns that element - a link is a consumer-slotted anchor, a button is one the item renders.
    private get _isOverlayRow (): boolean {
        return this._isLinkRow || this._isButtonRow;
    }

    // True when the item lends its text as an interactive element's accessible name/description:
    // selectable rows (radio/checkbox/switch) and overlay rows (link anchor / action button).
    private get _providesAria (): boolean {
        return this._isSelectable || this._isOverlayRow;
    }

    // radio/checkbox are owned by a selection group, which is why the item becomes `presentation`
    // (so the group owns the controls directly) and the radio is named on its host. A switch has
    // no group, so the item stays a `listitem`.
    private get _ownedByGroup (): boolean {
        return this.interactionType === 'radio' || this.interactionType === 'checkbox';
    }

    // True when the row should be treated as disabled: either its own `disabled` prop is set, or the
    // containing group is disabled (provided via context). Declarative and reactive, so the styling
    // and row-click guard react without observing the slotted control.
    private get _isDisabled (): boolean {
        return this.disabled || this._parentDisabled;
    }

    // The interactive control (radio/checkbox/switch) slotted into this item, if any. Used only by
    // the client-side row-click handler.
    private get _control (): HTMLElement | null {
        return this.querySelector('pie-radio, pie-checkbox, pie-switch');
    }

    connectedCallback () {
        super.connectedCallback();

        this._abortController = new AbortController();
        this.addEventListener('click', this._handleHostClick, { signal: this._abortController.signal });
    }

    disconnectedCallback () {
        super.disconnectedCallback();
        this._abortController.abort();
    }

    protected updated () {
        this._applyRole();
        this._ariaProvider?.setValue(this._providedAria);
        this._applyLinkAria();
    }

    /**
     * Sets the item's role from `interactionType`: `presentation` for radio/checkbox (so the group
     * owns those controls directly), otherwise `listitem` (static items, switches, links and
     * buttons). A role set explicitly by the consumer is left untouched, even if it is added or
     * removed dynamically after the element connects.
     */
    private _applyRole (): void {
        const currentRole = this.getAttribute('role');
        // Only manage the role if it is absent or was last set by us — not a consumer-supplied value.
        if (currentRole !== null && currentRole !== this._managedRole) return;

        const nextRole = this._ownedByGroup ? 'presentation' : 'listitem';
        this._managedRole = nextRole;
        this.setAttribute('role', nextRole);
    }

    /**
     * The accessible name and description this item provides to its interactive element, stitched
     * from its text. Selection controls consume it via `ariaContext` (each applying it to the
     * element that carries its role); the action button of a `button` row takes it directly as
     * `aria-label`/`aria-description` in the template; a link anchor takes it via `_applyLinkAria`.
     */
    private get _providedAria (): ContextualAria | undefined {
        if (!this._providesAria) return undefined;

        const description = [this.secondaryText, this.metaText].filter(Boolean).join('. ');

        return { label: this.primaryText, description: description || undefined };
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

    /**
     * On a link row, names the slotted (empty) anchor from the item's own text: the parent owns the
     * child's aria. The anchor is plain light-DOM, so it cannot reference the shadow-DOM text via
     * `aria-labelledby`; and it is not a PIE control that consumes `ariaContext`, so we set the
     * attributes imperatively. The visible text is `aria-hidden` in the template, so nothing is
     * announced twice. (A `button` row names its own rendered element in the template instead.)
     *
     * A consumer-provided name/description always wins: we capture (once) whether the anchor already
     * carries `aria-label`/`aria-labelledby` or `aria-description`/`aria-describedby` and, if so,
     * leave that attribute untouched. Otherwise we keep our generated value in sync with the text.
     */
    private _applyLinkAria (): void {
        if (!this._isLinkRow) {
            // When transitioning away from `link`, remove any attributes we previously set so they
            // are not left orphaned on the anchor. Reset capture state so a future transition back
            // to `link` re-reads the consumer's attrs from the (possibly different) anchor.
            if (this._linkAriaCaptured) {
                const anchor = this.querySelector('a[slot="link"]');
                if (anchor) {
                    if (!this._consumerNamedLink) anchor.removeAttribute('aria-label');
                    if (!this._consumerDescribedLink) anchor.removeAttribute('aria-description');
                }
                this._linkAriaCaptured = false;
                this._consumerNamedLink = false;
                this._consumerDescribedLink = false;
            }
            return;
        }

        const anchor = this.querySelector('a[slot="link"]');
        if (!anchor) return;

        if (!this._linkAriaCaptured) {
            this._consumerNamedLink = anchor.hasAttribute('aria-label') || anchor.hasAttribute('aria-labelledby');
            this._consumerDescribedLink = anchor.hasAttribute('aria-description') || anchor.hasAttribute('aria-describedby');
            this._linkAriaCaptured = true;
        }

        const aria = this._providedAria;

        if (!this._consumerNamedLink) {
            if (aria?.label) {
                anchor.setAttribute('aria-label', aria.label);
            } else {
                anchor.removeAttribute('aria-label');
            }
        }

        if (!this._consumerDescribedLink) {
            if (aria?.description) {
                anchor.setAttribute('aria-description', aria.description);
            } else {
                anchor.removeAttribute('aria-description');
            }
        }
    }

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
            return html`<span class="c-listItem-metaText c-listItem-trailing" aria-hidden=${this._providesAria ? 'true' : nothing}>${metaText}</span>`;
        }

        return html`<div class="c-listItem-trailing"><slot name="trailing"></slot></div>`;
    }

    /**
     * The interactive target for a `button` row: an empty, native `<button>` stretched invisibly
     * over the whole row (see the SCSS). The item renders and owns it - rather than the consumer
     * slotting one - so it can name it from its own text and keep its attributes private (it is just
     * an action box, not a configurable control). Being a real button, activation is native: pointer
     * clicks and keyboard (Enter/Space) both fire a `click` that bubbles out, so consumers listen for
     * `click` on the `pie-list-item`. It is `type="button"`, so it never submits a form.
     */
    _renderActionButton () {
        const aria = this._providedAria;

        return html`<button
            class="c-listItem-action"
            type="button"
            ?disabled=${this._isDisabled}
            aria-label=${ifDefined(aria?.label)}
            aria-description=${ifDefined(aria?.description)}></button>`;
    }

    render () {
        const { primaryText } = this;

        const containerClasses = {
            'c-listItem-container': true,
            'is-compact': this.isCompact,
            'is-bold': this.isBold,
            'has-media': this.hasMedia,
            'is-selectable': this._isSelectable,
            'is-link': this._isLinkRow,
            'is-button': this._isButtonRow,
            'is-disabled': this._isDisabled,
        };

        return html`
        <div class=${classMap(containerClasses)}>
            ${this._isLinkRow ? html`<slot name="link"></slot>` : nothing}
            ${this._isButtonRow ? this._renderActionButton() : nothing}
            <div class="c-listItem-leading">
                <slot name="leading"></slot>
            </div>

            <div class="c-listItem-text" aria-hidden=${this._providesAria ? 'true' : nothing}>
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
