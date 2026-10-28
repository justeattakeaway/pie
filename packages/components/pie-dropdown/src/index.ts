import {
    html,
    nothing,
    unsafeCSS,
    type PropertyValues,
    type TemplateResult,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    FormControlMixin,
    RtlMixin,
    DelegatesFocusMixin,
    RovingTabindexController,
    dispatchCustomEvent,
    safeCustomElement,
    validPropertyValues,
} from '@justeattakeaway/pie-webc-core';
import {
    property,
    query,
    state,
} from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { live } from 'lit/directives/live.js';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronDown.js';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronUp.js';
import '@justeattakeaway/pie-icons-webc/dist/IconCloseCircle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconCheck.js';
import '@justeattakeaway/pie-assistive-text';
import '@justeattakeaway/pie-form-label';
import '@justeattakeaway/pie-spinner';
import '@justeattakeaway/pie-list/dist/pie-list-item/index.js';
import '@justeattakeaway/pie-checkbox';
import '@justeattakeaway/pie-checkbox-group';
import '@justeattakeaway/pie-chip';

import styles from './dropdown.scss?inline';
import {
    defaultProps,
    sizes,
    statusTypes,
    type DropdownOption,
    type DropdownProps,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-dropdown';

/** Vertical gap between the field and the popover. */
const POPOVER_OFFSET = 8;

/** Message shown in the live region and popover while options load. */
const defaultLoadingText = 'Loading results...';

/** Message shown in the popover when a search matches no options. */
const defaultNoResultsText = 'No results';

/**
 * Returns a unique id fragment for a component instance, so several dropdowns
 * on one page never wire their internal ARIA relationships together.
 */
let instanceCount = 0;
const nextInstanceId = (): string => `pie-dropdown-${++instanceCount}`;

/**
 * Whether `target` lives anywhere inside `container`'s composed tree,
 * crossing any shadow-root boundaries between them.
 */
const deepContains = (container: Node, target: Node | null): boolean => {
    let current: Node | null = target;

    while (current) {
        if (current === container) return true;

        const parent = current.parentNode;

        if (parent) {
            current = parent;
        } else {
            // At a shadow root: keep climbing from its host.
            const root = current.getRootNode();
            current = root instanceof ShadowRoot ? root.host : null;
        }
    }

    return false;
};

/**
 * @tagname pie-dropdown
 * @event {CustomEvent} change - when the selection is changed by the user.
 * @event {CustomEvent} pie-dropdown-open - when the popover is opened. `detail: { source: 'keyboard' | 'pointer' }`
 * @event {CustomEvent} pie-dropdown-close - when the popover is closed. `detail: { source: 'keyboard' | 'pointer' | 'outside' | 'selection' }`
 * @event {CustomEvent} pie-dropdown-search - when the user types in a searchable dropdown, for asynchronously loading options. `detail: { searchText: string }`
 */
@safeCustomElement('pie-dropdown')
export class PieDropdown extends FormControlMixin(RtlMixin(DelegatesFocusMixin(PieElement))) implements DropdownProps {
    @property({ type: Array })
    public options: DropdownProps['options'] = [];

    @property({ type: Boolean })
    public isMultiselect = defaultProps.isMultiselect;

    @property({ type: Boolean })
    public isSearchable = defaultProps.isSearchable;

    @property({ type: Boolean })
    public isLoading = defaultProps.isLoading;

    @property({ type: String })
    public placeholder: DropdownProps['placeholder'];

    @property({ type: String })
    public label: DropdownProps['label'];

    @property({ type: String, reflect: true })
    public name: DropdownProps['name'];

    @property({ type: String })
    public assistiveText: DropdownProps['assistiveText'];

    @property({ type: String })
    @validPropertyValues(componentSelector, statusTypes, defaultProps.status)
    public status = defaultProps.status;

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: Boolean })
    public disabled = defaultProps.disabled;

    @property({ type: Boolean })
    public required = defaultProps.required;

    @property({ type: String })
    public loadingText: DropdownProps['loadingText'];

    @property({ type: String })
    public noResultsText: DropdownProps['noResultsText'];

    @property({ type: Object })
    public aria: DropdownProps['aria'];

    /**
     * The options rendered in the popover while it is open. Captured when the
     * popover opens, so mid-session selections never re-sort the live list —
     * in multi-select, selected options are sorted to the top on reopen.
     */
    @state()
    private _openOptions: DropdownOption[] = [];

    /** Whether the popover is currently open. */
    @state()
    private _isOpen = false;

    /** The user's search text (searchable variants only). `null` while the field shows its selection. */
    @state()
    private _searchText: string | null = null;

    /**
     * Suppresses the open-on-focus behaviour for the next focus event on the
     * field. Set when the field is refocused as a side effect of a popover
     * closing, so that focus never re-triggers the open. Checked by both the
     * trigger (non-searchable) and search input focus handlers.
     */
    private _suppressFocusOpen = false;

    /**
     * Suppresses the open-on-focus behaviour for the next focus event on the
     * non-searchable field. Set on field pointerdown: the focus a click is
     * about to give the field must not open the popover, because the click
     * that follows toggles it instead. Not checked by the search input focus
     * handler — pointer focus is how a searchable field is clicked open.
     */
    private _suppressPointerFocusOpen = false;

    /** Unique id fragment for this instance, used for internal ARIA wiring. */
    private readonly _instanceId = nextInstanceId();

    private _value: DropdownProps['value'] = '';

    /** The value the component resets to when its owning form is reset. */
    private _defaultValue: DropdownProps['value'] = '';

    /** Aborts the document-level listeners while the popover is open. */
    private _openListeners: AbortController | null = null;

    /** The field element (button, or input in searchable variants). */
    @query('.c-dropdown-trigger')
    private _field!: HTMLButtonElement | HTMLInputElement;

    /** The field's visual box, which the popover is sized and positioned against. */
    @query('.c-dropdown-field')
    private _fieldBox!: HTMLElement;

    /** The popover element. */
    @query('.c-dropdown-popover')
    private _popover!: HTMLElement;

    /** The single-select option rows, in render order. */
    private get _optionEls (): HTMLElement[] {
        if (!this.renderRoot) return [];
        // Selected by the interactiontype attribute, which this component's
        // own template sets synchronously when a row is created. The role
        // attribute would be unreliable here: each row sets it in its own
        // lifecycle, which runs after this component's post-render sync has
        // already looked for rows. The value also scopes the query to
        // single-select rows, so multi-select checkbox rows are never
        // included.
        return Array.from(this.renderRoot.querySelectorAll<HTMLElement>('pie-list-item[interactiontype="option"]'));
    }

    /**
     * Roving-tabindex navigation for the single-select listbox: arrow keys
     * move focus between option rows without selecting, Home/End jump to the
     * ends, and typing jumps to the first matching option. Disabled options
     * are excluded from the item list so keyboard focus skips them.
     *
     * The options are never part of the page tab sequence: the field is the
     * single tab stop and the list is navigated with arrow keys (the combobox
     * pattern), so Tab moves past the popover entirely.
     */
    private readonly _roving = new RovingTabindexController(this, {
        getItems: () => this._optionEls
            .filter((el) => el.getAttribute('aria-disabled') !== 'true'),
        orientation: 'vertical',
        wrap: false,
        isTabbable: () => false,
        isRtl: () => this.isRTL,
        getItemText: (item) => item.getAttribute('aria-label') ?? item.textContent ?? '',
    });

    /** The element focus should return to when the popover closes. */
    public get focusTarget (): HTMLElement {
        return this._field;
    }

    @property()
    public get value (): DropdownProps['value'] {
        return this._value;
    }

    public set value (newValue: DropdownProps['value']) {
        const values = this._asValueArray(newValue);
        const safeValue = this.isMultiselect ? values : values[0] ?? '';

        this._value = safeValue;
        this._internals.setFormValue(...this._formValue(safeValue));
        this._updateValidity();
        this.requestUpdate();
    }

    protected firstUpdated (): void {
        this._defaultValue = this._value;
        this._internals.setFormValue(...this._formValue(this._value));
        this._updateValidity();
    }

    /**
     * (Read-only) returns a ValidityState with the validity states that this element is in.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
     */
    public get validity (): ValidityState {
        return this._internals.validity;
    }

    public checkValidity (): boolean {
        return this._internals.checkValidity();
    }

    /**
     * Called after the disabled state of the element changes,
     * either because the disabled attribute of this element was added or removed;
     * or because the disabled state changed on a <fieldset> that's an ancestor of this element.
     * @param disabled - The latest disabled state of the dropdown.
     */
    public formDisabledCallback (disabled: boolean): void {
        this.disabled = disabled;
    }

    /**
     * Called when the form that owns this component is reset.
     * Restores the value the component had when it was connected to the form.
     */
    public formResetCallback (): void {
        this.value = this._defaultValue;
        this._searchText = null;
    }

    protected updated (changedProperties: PropertyValues<this>): void {
        if (changedProperties.has('disabled') && this.disabled && this._isOpen) {
            this._closePopover('outside');
        }

        if (this._isOpen) {
            this._positionPopover();
        }
    }

    public disconnectedCallback (): void {
        super.disconnectedCallback();
        this._teardownOpenListeners();
    }

    /* ------------------------------------------------------------------ *
     * Selection state
     * ------------------------------------------------------------------ */

    /** Normalises a value into an array of option values. */
    private _asValueArray (value: DropdownProps['value']): string[] {
        if (Array.isArray(value)) return value;

        return value ? [value] : [];
    }

    private get _selectedValues (): string[] {
        if (Array.isArray(this._value)) return this._value;
        return this._value ? [this._value] : [];
    }

    private get _selectedOptions (): DropdownOption[] {
        const selected = new Set(this._selectedValues);
        return (this.options ?? []).filter((option) => selected.has(option.value));
    }

    /** The options to render while the popover is open, filtered by any search text. */
    private get _visibleOptions (): DropdownOption[] {
        if (!this.isSearchable || !this._searchText) return this._openOptions;

        const needle = this._searchText.toLowerCase();
        // v1 filters on the primary text with a starts-to-match rule; a richer
        // matching rule (any-part, secondary text) is a future feature.
        return this._openOptions.filter((option) => option.primaryText.toLowerCase().startsWith(needle));
    }

    private _isSelected (option: DropdownOption): boolean {
        return this._selectedValues.includes(option.value);
    }

    private _selectSingle (option: DropdownOption): void {
        const changed = !this._isSelected(option);
        if (changed) {
            this.value = option.value;
        }

        this._closePopover('selection');
        this._refocusField();

        if (changed) this._dispatchChange();
    }

    private _toggleMulti (option: DropdownOption, checked: boolean): void {
        const current = this._selectedValues;
        const next = checked
            ? [...current, option.value]
            : current.filter((value) => value !== option.value);

        this.value = next;
        this._dispatchChange();
    }

    private _clearSelection (): void {
        this.value = this.isMultiselect ? [] : '';
        this._dispatchChange();
        this._refocusField();
    }

    /**
     * Returns focus to the field as a popover closes (or after a control in
     * the field acted). The focus this moves must never re-trigger the
     * open-on-focus behaviour, so it is suppressed for the next focus event.
     */
    private _refocusField (): void {
        this._suppressFocusOpen = true;
        this._field?.focus();
    }

    private _dispatchChange (): void {
        // A native-named event so consumers can treat the component like any
        // other form control. Bubbles and is composed so it crosses the
        // shadow boundary.
        this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    }

    /* ------------------------------------------------------------------ *
     * Form association
     * ------------------------------------------------------------------ */

    private _formValue (value: DropdownProps['value']): [FormData | string | null] {
        const values = this._asValueArray(value);

        if (this.isMultiselect) {
            if (!this.name || values.length === 0) return [null];

            const formData = new FormData();
            values.forEach((entry) => formData.append(this.name as string, entry));
            return [formData];
        }

        return [value ? String(value) : null];
    }

    private _updateValidity (): void {
        const valueMissing = this.required && this._selectedValues.length === 0;

        if (valueMissing) {
            this._internals.setValidity({ valueMissing: true }, this.assistiveText || 'Please select an option', this._field);
        } else {
            this._internals.setValidity({ valueMissing: false });
        }
    }

    /* ------------------------------------------------------------------ *
     * Popover open/close
     * ------------------------------------------------------------------ */

    /**
     * @param source - What triggered the open, dispatched with the open event.
     * @param focusList - Whether focus moves into the option list once the
     * popover has rendered. Searchable variants leave focus in the search
     * input (the combobox pattern), so the caret is never stolen.
     */
    private _openPopover (source: 'keyboard' | 'pointer', focusList = true): void {
        if (this._isOpen || this.disabled) return;

        // Capture the option order now: in multi-select, selected options are
        // sorted to the top (alphanumerically) whenever the popover is opened.
        this._openOptions = this.isMultiselect
            ? this._sortedSelectedFirst(this.options ?? [])
            : [...(this.options ?? [])];
        this._isOpen = true;

        dispatchCustomEvent(this, 'pie-dropdown-open', { source });

        this._setupOpenListeners();

        // Focus the first option (single select: the selected one, matching a
        // native <select>; multi-select: the first checkbox). Wait for the
        // popover to render first.
        if (focusList) {
            this.updateComplete.then(() => this._focusInitialOption());
        }
    }

    private _closePopover (source: 'keyboard' | 'pointer' | 'outside' | 'selection'): void {
        if (!this._isOpen) return;

        this._isOpen = false;
        this._teardownOpenListeners();

        // Abandoned search text is discarded, restoring the field's display of
        // the current selection (the popover's filtering is never committed).
        if (this._searchText !== null && source !== 'selection') {
            this._searchText = null;
        }

        dispatchCustomEvent(this, 'pie-dropdown-close', { source });
    }

    private _sortedSelectedFirst (options: DropdownOption[]): DropdownOption[] {
        return [...options].sort((a, b) => {
            const aSelected = this._isSelected(a) ? 0 : 1;
            const bSelected = this._isSelected(b) ? 0 : 1;
            if (aSelected !== bSelected) return aSelected - bSelected;
            return a.primaryText.localeCompare(b.primaryText);
        });
    }

    private _focusInitialOption (): void {
        if (!this._isOpen) return;

        if (this.isMultiselect) {
            const firstCheckbox = this.renderRoot.querySelector<HTMLElement>('pie-checkbox');
            firstCheckbox?.focus();
            return;
        }

        const optionEls = this._optionEls;
        const selectedEl = optionEls.find((el) => el.getAttribute('aria-selected') === 'true');
        const target = selectedEl ?? optionEls[0];
        if (target) this._roving.setActiveItem(target, { focus: true });
    }

    private _togglePopover (source: 'keyboard' | 'pointer'): void {
        if (this._isOpen) {
            this._closePopover(source);
        } else {
            this._openPopover(source);
        }
    }

    /* ------------------------------------------------------------------ *
     * Event listeners
     * ------------------------------------------------------------------ */

    private _setupOpenListeners (): void {
        this._teardownOpenListeners();

        this._openListeners = new AbortController();
        const { signal } = this._openListeners;

        // Outside click closes the popover without moving focus.
        document.addEventListener('click', this._onOutsideInteraction, { signal, capture: true });

        // Escape closes the popover and returns focus to the field.
        this.addEventListener('keydown', this._onKeydown, { signal });

        // Keep the popover anchored to the field.
        window.addEventListener('resize', this._onViewportChange, { signal });
        window.addEventListener('scroll', this._onViewportChange, { signal, capture: true });
    }

    private _teardownOpenListeners (): void {
        this._openListeners?.abort();
        this._openListeners = null;
    }

    private _onOutsideInteraction = (event: Event): void => {
        if (!event.composedPath().includes(this)) {
            this._closePopover('outside');
        }
    };

    private _onViewportChange = (): void => {
        this._positionPopover();
    };

    private _onKeydown = (event: KeyboardEvent): void => {
        if (!this._isOpen) return;

        if (event.key === 'Escape') {
            event.preventDefault();
            this._closePopover('keyboard');
            this._refocusField();
            return;
        }

        if (this.isMultiselect) return;

        // Single select: Enter/Space on a focused option row selects it and
        // closes the popover. (The roving controller owns the arrow keys.)
        const optionEls = this._optionEls;
        const target = event.composedPath().find((node): node is HTMLElement => node instanceof HTMLElement && optionEls.includes(node));

        if (!target) return;

        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            const option = this._visibleOptions.find((o) => this._optionId(o) === target.id);
            if (option && !option.disabled) this._selectSingle(option);
        }
    };

    /**
     * Close the popover when focus leaves the component entirely (e.g. Tab
     * out). Focus moving within the component — field to option, option to
     * checkbox, into a control's own shadow DOM — keeps it open.
     */
    private _onFocusout = (event: FocusEvent): void => {
        if (deepContains(this, event.relatedTarget as Node | null)) return;

        // Focus left the component entirely (e.g. Tab out): any pending
        // open-on-focus suppression is stale now, so clear it. This must not
        // run for focus moving within the component — the focusout that
        // precedes a refocused field would clear the suppression the field's
        // focus event is about to consume, reopening the popover.
        this._suppressFocusOpen = false;
        this._suppressPointerFocusOpen = false;

        if (this._isOpen) {
            this._closePopover('outside');
        }
    };

    /**
     * Toggles the popover for clicks anywhere on the field (matching the
     * designs, where the whole surface opens the popover), bound on the
     * capture phase so it still runs for clicks on the count chip, whose
     * dismissible variant stops click propagation before it can bubble.
     */
    private _onFieldClick = (event: Event): void => {
        if (this.disabled || this.isSearchable) return;

        // The clear button and the count chip's close button handle their own
        // clicks; every other part of the field toggles the popover. The check
        // walks the composed path rather than using `closest()`, which cannot
        // cross shadow boundaries (a click on an icon's SVG, for example).
        const path = event.composedPath();
        const isOwnControl = path.some((node): node is Element => node instanceof Element &&
                (node.classList.contains('c-dropdown-clear') || node.classList.contains('c-chip-closeBtn')));

        if (isOwnControl) return;

        this._togglePopover('pointer');
    };

    // Lit's `@event` syntax has no capture modifier, so the capture-phase
    // binding is expressed as a listener object.
    private readonly _fieldClickListener = {
        handleEvent: (event: Event): void => this._onFieldClick(event),
        capture: true,
    };

    /**
     * In searchable variants the field is a textbox that opens on focus, so
     * the chevron is the surface that closes the popover again.
     */
    private _onChevronClick = (): void => {
        if (this.disabled) return;
        this._togglePopover('pointer');
    };

    private _onTriggerKeyDown = (event: KeyboardEvent): void => {
        if (this.isSearchable || this._isOpen) return;

        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            this._openPopover('keyboard');
        }
    };

    private _onSearchInput = (event: InputEvent): void => {
        const input = event.target as HTMLInputElement;

        if (!this._isOpen) {
            this._openPopover('keyboard', false);
        }

        this._searchText = input.value;
        dispatchCustomEvent(this, 'pie-dropdown-search', { searchText: input.value });
    };

    private _onSearchKeyDown = (event: KeyboardEvent): void => {
        if (!this._isOpen) return;

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            this._focusInitialOption();
        }
    };

    /**
     * The search field opens the popover when it is focused (keyboard or
     * pointer — pointer focus is how a searchable field is clicked open),
     * and focus stays in the input so the caret is never stolen and typing
     * filters immediately (the combobox pattern; ArrowDown moves focus into
     * the option list on demand). The focus that returns to the field when
     * the popover closes is suppressed so it never reopens.
     */
    private _onSearchFocus = (): void => {
        if (this._suppressFocusOpen) {
            this._suppressFocusOpen = false;
            return;
        }

        if (!this._isOpen && !this.disabled) {
            this._openPopover('keyboard', false);
        }
    };

    /**
     * Pointer input over the field: the focus it is about to give the
     * non-searchable field must not open the popover — the click that
     * follows toggles it instead. (Without this, a click would open the
     * popover on focus and then close it again on the click, breaking
     * click-to-toggle.) Searchable variants are unaffected: their focus
     * handler ignores this flag, since a click is how their field opens.
     */
    private _onFieldPointerDown = (): void => {
        this._suppressPointerFocusOpen = true;
    };

    /**
     * The field opens the popover when it receives keyboard focus (matching
     * the searchable variants, which open when their textbox is focused).
     * Focus then moves into the popover, exactly as an ArrowDown open does.
     * Focus that is a side effect of pointer input or a closing popover is
     * suppressed and ignored.
     */
    private _onTriggerFocus = (): void => {
        if (this._suppressFocusOpen) {
            this._suppressFocusOpen = false;
            return;
        }

        if (this._suppressPointerFocusOpen) {
            this._suppressPointerFocusOpen = false;
            return;
        }

        if (!this._isOpen && !this.disabled && !this.isSearchable) {
            this._openPopover('keyboard');
        }
    };

    /**
     * The count chip's close button opens the popover when it receives
     * keyboard focus — it is the first tab stop in the field in multi-select
     * variants with a selection — and focus stays on the chip. Unlike the
     * search input, pointer focus is suppressed here: a mouse click on the
     * close button clears the selections and must not also open the popover.
     */
    private _onChipFocusIn = (): void => {
        if (this._suppressFocusOpen) {
            this._suppressFocusOpen = false;
            return;
        }

        if (this._suppressPointerFocusOpen) {
            this._suppressPointerFocusOpen = false;
            return;
        }

        if (!this._isOpen && !this.disabled) {
            this._openPopover('keyboard', false);
        }
    };

    private _onCheckboxChange = (event: Event): void => {
        const checkbox = event.composedPath().find((node): node is HTMLElement => node instanceof HTMLElement && node.tagName === 'PIE-CHECKBOX') as (HTMLElement & { value: string; checked: boolean }) | undefined;

        if (!checkbox) return;

        const option = this._openOptions.find((o) => o.value === checkbox.value);
        if (option) this._toggleMulti(option, checkbox.checked);
    };

    private _onChipClose = (): void => {
        this._clearSelection();
    };

    /**
     * The clear button removes the current selection. It is only shown in
     * single-select variants without search (multi select never shows one —
     * the count chip's close icon clears everything).
     */
    private _onClearClick = (): void => {
        this._clearSelection();
    };

    /* ------------------------------------------------------------------ *
     * Positioning (JS-based: the support target includes Safari 16, which
     * lacks the native Popover API and CSS anchor positioning)
     * ------------------------------------------------------------------ */

    private _positionPopover (): void {
        if (!this._popover || !this._fieldBox) return;

        // Measured against the field's visual box (which includes the leading
        // icon area and the border) so the popover matches the field's full
        // width in every variant, rather than the trigger element inside it.
        const fieldRect = this._fieldBox.getBoundingClientRect();

        this._popover.style.width = `${fieldRect.width}px`;

        // The popover always renders below the field — it never flips above
        // it, even when there is not enough room left in the viewport (the
        // popover may be clipped by the viewport edge in that case, which the
        // designs accept).
        this._popover.style.left = `${fieldRect.left}px`;
        this._popover.style.top = `${fieldRect.bottom + POPOVER_OFFSET}px`;
    }

    /* ------------------------------------------------------------------ *
     * Helpers
     * ------------------------------------------------------------------ */

    private _optionId (option: DropdownOption): string {
        return `${this._instanceId}-option-${option.value}`;
    }

    private get _labelId (): string {
        return `${this._instanceId}-label`;
    }

    private get _popoverId (): string {
        return `${this._instanceId}-popover`;
    }

    private get _assistiveTextId (): string {
        return `${this._instanceId}-assistive-text`;
    }

    /** The text the field shows for the current selection. */
    private get _selectionText (): string {
        if (this.isMultiselect) return '';

        return this._selectedOptions[0]?.primaryText ?? '';
    }

    private get _hasSelection (): boolean {
        return this._selectedValues.length > 0;
    }

    /**
     * Whether the field's clear affordance is shown:
     * - single select without search: while a selection exists (it removes
     *   the selection);
     * - searchable variants and multi select: never — the user clears typed
     *   search text by backspacing, and multi select clears everything via
     *   the count chip's close icon.
     */
    private get _isClearable (): boolean {
        if (this.isMultiselect) return false;

        if (this.isSearchable) return false;

        return this._hasSelection;
    }

    /**
     * The message announced by the live region: loading, a "no results"
     * notice, or the number of options available after filtering.
     */
    private get _statusMessage (): string {
        if (!this._isOpen) return '';

        if (this.isLoading) return this.loadingText || defaultLoadingText;

        if (this.isSearchable && this._searchText) {
            const count = this._visibleOptions.length;
            if (count === 0) return this.noResultsText || defaultNoResultsText;
            return `${count} option${count === 1 ? '' : 's'} available`;
        }

        return '';
    }

    /* ------------------------------------------------------------------ *
     * Rendering
     * ------------------------------------------------------------------ */

    private _renderLabel (): TemplateResult | typeof nothing {
        if (!this.label) return nothing;

        return html`
            <pie-form-label
                id="${this._labelId}"
                for="${this._instanceId}"
                ?optional=${!this.required}>
                ${this.label}
            </pie-form-label>
        `;
    }

    private _renderAssistiveText (): TemplateResult {
        return html`
            <pie-assistive-text
                id="${this._assistiveTextId}"
                variant="${ifDefined(this.status)}"
                message="${this.assistiveText || ''}"
                ?isVisuallyHidden="${!this.assistiveText}"
                data-test-id="pie-dropdown-assistive-text">
            </pie-assistive-text>
        `;
    }

    private _renderFieldText (): TemplateResult | typeof nothing {
        if (this.isMultiselect) {
            // With a selection the count chip renders as a sibling of the
            // trigger (see `_renderTriggerFieldContent`) so its close button
            // is keyboard-reachable and never nests inside another button.
            return this._hasSelection
                ? nothing
                : html`<span class="c-dropdown-fieldPlaceholder">${this.placeholder || ''}</span>`;
        }

        if (this._selectionText) {
            return html`<span class="c-dropdown-fieldValue" data-test-id="pie-dropdown-value">${this._selectionText}</span>`;
        }

        return html`<span class="c-dropdown-fieldPlaceholder" data-test-id="pie-dropdown-placeholder">${this.placeholder || ''}</span>`;
    }

    private _renderCountChip (): TemplateResult {
        const count = this._selectedValues.length;

        return html`
            <pie-chip
                variant="default"
                ?isSelected=${true}
                ?isDismissible=${true}
                .aria=${{
            close: this.aria?.clearAllSelections || `Clear all ${count} selection${count === 1 ? '' : 's'}`,
        }}
                @focusin=${this._onChipFocusIn}
                @close=${this._onChipClose}>
                ${count} selected
            </pie-chip>
        `;
    }

    private _renderClearButton (): TemplateResult | typeof nothing {
        if (!this._isClearable) return nothing;

        return html`
            <button
                type="button"
                class="c-dropdown-clear"
                aria-label="${this.aria?.clearSelection || 'Clear selection'}"
                ?disabled=${this.disabled}
                @click=${this._onClearClick}
                data-test-id="pie-dropdown-clear">
                <icon-close-circle size="m"></icon-close-circle>
            </button>
        `;
    }

    private _renderChevron (): TemplateResult {
        // In searchable variants the chevron is the surface that closes the
        // popover (the textbox opens it on focus), so it is clickable there;
        // in non-searchable variants the whole field toggles and the chevron
        // is decorative only.
        const interactive = this.isSearchable && !this.disabled;

        return html`
            <span
                class="c-dropdown-chevron"
                aria-hidden="true"
                ?data-interactive-chevron=${interactive}
                @click=${interactive ? this._onChevronClick : nothing}>
                ${this._isOpen
            ? html`<icon-chevron-up size="m"></icon-chevron-up>`
            : html`<icon-chevron-down size="m"></icon-chevron-down>`}
            </span>
        `;
    }

    /**
     * The field. In non-searchable variants it is a disclosure button with
     * the clear button and chevron as siblings (so no interactive element
     * nests inside another). In searchable variants the field is a textbox
     * whose focus opens and filters the popover.
     */
    private _renderField (): TemplateResult {
        const classes: ClassInfo = {
            'c-dropdown-field': true,
            'is-searchable': this.isSearchable,
            [`c-dropdown--${this.size}`]: true,
            [`c-dropdown--${this.status}`]: true,
            'is-open': this._isOpen,
            'is-disabled': this.disabled,
            'is-clearable': this._isClearable,
        };

        return html`
            <div
                class="${classMap(classes)}"
                @focusout=${this._onFocusout}
                @pointerdown=${this._onFieldPointerDown}
                @click=${this._fieldClickListener}
                data-test-id="pie-dropdown-field">
                <span class="c-dropdown-leadingIcon"><slot name="leadingIcon"></slot></span>
                ${this.isSearchable ? this._renderSearchFieldContent() : this._renderTriggerFieldContent()}
            </div>
        `;
    }

    private _renderTriggerFieldContent (): TemplateResult {
        // The accessible name of the field: the visible label when present,
        // otherwise the consumer-provided aria label, otherwise the placeholder.
        const ariaLabelledby = this.label ? this._labelId : undefined;
        const ariaLabel = !this.label
            ? this.aria?.label || this.placeholder || undefined
            : undefined;

        return html`
            ${
                // The count chip sits directly in the field, before the
                // trigger, so its close button is a first-class tab stop
                // (first Tab focuses it) instead of a button nested inside
                // the trigger button. When it is shown, the trigger is removed
                // from the tab sequence (tabindex="-1"): the chip is the
                // field's entry point, so Tab moves from the chip straight to
                // the option list.
                this.isMultiselect && this._hasSelection ? this._renderCountChip() : nothing
            }
            <button
                type="button"
                id="${this._instanceId}"
                class="c-dropdown-trigger"
                tabindex=${this.isMultiselect && this._hasSelection ? '-1' : nothing}
                ?disabled=${this.disabled}
                aria-expanded="${this._isOpen ? 'true' : 'false'}"
                aria-haspopup=${this.isMultiselect ? nothing : 'listbox'}
                aria-controls="${this._popoverId}"
                aria-labelledby="${ifDefined(ariaLabelledby)}"
                aria-label="${ifDefined(ariaLabel)}"
                aria-describedby="${ifDefined(this.assistiveText ? this._assistiveTextId : undefined)}"
                aria-invalid="${this.status === 'error' ? 'true' : 'false'}"
                @keydown=${this._onTriggerKeyDown}
                @focus=${this._onTriggerFocus}
                data-test-id="pie-dropdown-trigger">
                <span class="c-dropdown-fieldText">${this._renderFieldText()}</span>
            </button>
            ${this._renderClearButton()}
            ${this._renderChevron()}
        `;
    }

    private _renderSearchFieldContent (): TemplateResult {
        // While searching, the input shows the search text; otherwise it shows
        // the current selection (multi-select shows its chip alongside).
        let displayValue = '';

        if (this._searchText !== null) {
            displayValue = this._searchText;
        } else if (!this.isMultiselect && this._hasSelection) {
            displayValue = this._selectionText;
        }

        return html`
            ${this.isMultiselect && this._hasSelection ? this._renderCountChip() : nothing}
            <input
                type="text"
                id="${this._instanceId}"
                class="c-dropdown-trigger c-dropdown-input"
                ?disabled=${this.disabled}
                .value=${live(displayValue)}
                placeholder="${ifDefined(this._searchText !== null ? this.placeholder : this._selectionText || this.placeholder)}"
                role="combobox"
                aria-expanded="${this._isOpen ? 'true' : 'false'}"
                aria-controls="${this._popoverId}"
                aria-autocomplete="list"
                aria-labelledby="${ifDefined(this.label ? this._labelId : undefined)}"
                aria-label="${ifDefined(!this.label ? this.aria?.label || this.placeholder : undefined)}"
                aria-describedby="${ifDefined(this.assistiveText ? this._assistiveTextId : undefined)}"
                aria-invalid="${this.status === 'error' ? 'true' : 'false'}"
                @input=${this._onSearchInput}
                @keydown=${this._onSearchKeyDown}
                @focus=${this._onSearchFocus}
                data-test-id="pie-dropdown-input" />
            ${this._renderClearButton()}
            ${this._renderChevron()}
        `;
    }

    private _renderOptionRow (option: DropdownOption): TemplateResult {
        const selected = this._isSelected(option);

        return html`
            <pie-list-item
                id="${this._optionId(option)}"
                interactionType="option"
                class="c-dropdown-option"
                .primaryText=${option.primaryText}
                .secondaryText=${option.secondaryText || undefined}
                ?isBold=${selected}
                ?disabled=${option.disabled}
                aria-selected="${selected ? 'true' : 'false'}"
                aria-disabled="${option.disabled ? 'true' : 'false'}"
                aria-label="${option.primaryText}"
                aria-description=${ifDefined(option.secondaryText)}
                @click=${() => !option.disabled && this._selectSingle(option)}
                data-test-id="pie-dropdown-option">
                ${selected
            ? html`<icon-check slot="trailing" size="m" aria-hidden="true"></icon-check>`
            : nothing}
                <slot name="icon-${option.value}" slot="leading"></slot>
            </pie-list-item>
        `;
    }

    private _renderCheckboxRow (option: DropdownOption): TemplateResult {
        const checked = this._isSelected(option);

        return html`
            <pie-list-item
                interactionType="checkbox"
                class="c-dropdown-option"
                .primaryText=${option.primaryText}
                .secondaryText=${option.secondaryText || undefined}
                ?isBold=${checked}
                ?disabled=${option.disabled}
                aria-disabled="${option.disabled ? 'true' : 'false'}"
                data-test-id="pie-dropdown-option">
                <pie-checkbox
                    slot="leading"
                    .value=${option.value}
                    .checked=${checked}
                    ?disabled=${option.disabled || this.disabled}>
                </pie-checkbox>
            </pie-list-item>
        `;
    }

    private _renderPopoverContent (): TemplateResult {
        if (this.isLoading) {
            return html`
                <div class="c-dropdown-popoverMessage" data-test-id="pie-dropdown-loading">
                    <pie-spinner></pie-spinner>
                    <span>${this.loadingText || defaultLoadingText}</span>
                </div>
            `;
        }

        const visibleOptions = this._visibleOptions;

        if (visibleOptions.length === 0) {
            return html`
                <div class="c-dropdown-popoverMessage" data-test-id="pie-dropdown-noResults">
                    <span>${this.noResultsText || defaultNoResultsText}</span>
                </div>
            `;
        }

        const rows = visibleOptions.map((option) => (this.isMultiselect ? this._renderCheckboxRow(option) : this._renderOptionRow(option)));

        if (this.isMultiselect) {
            // The existing selectable-list pattern: a checkbox group whose
            // rows are pie-list-items. A visually hidden label names the group.
            return html`
                <pie-checkbox-group
                    class="c-dropdown-checkboxGroup"
                    @change=${this._onCheckboxChange}>
                    <span slot="label" class="c-dropdown-visuallyHidden">${this.label || this.aria?.label || this.placeholder || ''}</span>
                    ${rows}
                </pie-checkbox-group>
            `;
        }

        return html`${rows}`;
    }

    private _renderPopover (): TemplateResult | typeof nothing {
        if (!this._isOpen) return nothing;

        // In single-select variants the popover itself is the listbox (the
        // field's `aria-controls` points here); in multi-select variants it
        // holds the checkbox group, which carries its own semantics.
        // tabindex="-1" keeps the scrollable popover out of the page tab
        // sequence: Chromium includes scrollable containers in tab
        // navigation, which would otherwise give the popover its own tab stop.
        // The options are navigated with arrow keys, never Tab.
        return html`
            <div
                id="${this._popoverId}"
                class="c-dropdown-popover"
                role=${this.isMultiselect ? nothing : 'listbox'}
                tabindex="-1"
                aria-labelledby="${ifDefined(!this.isMultiselect && this.label ? this._labelId : undefined)}"
                aria-label="${ifDefined(!this.isMultiselect && !this.label ? this.aria?.label || this.placeholder || undefined : undefined)}"
                @focusout=${this._onFocusout}
                data-test-id="pie-dropdown-popover">
                ${this._renderPopoverContent()}
            </div>
        `;
    }

    private _renderStatusRegion (): TemplateResult {
        return html`
            <div
                class="c-dropdown-visuallyHidden"
                aria-live="polite"
                data-test-id="pie-dropdown-status">
                ${this._statusMessage}
            </div>
        `;
    }

    render (): TemplateResult {
        return html`
            <div class="c-dropdown">
                ${this._renderLabel()}
                ${this._renderField()}
                ${this._renderPopover()}
                ${this._renderAssistiveText()}
                ${this._renderStatusRegion()}
            </div>
        `;
    }

    // Renders a `CSSResult` generated by SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDropdown;
    }
}
