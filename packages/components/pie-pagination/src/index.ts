import {
    html, unsafeCSS,
} from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    dispatchCustomEvent,
    RtlMixin,
    safeCustomElement,
} from '@justeattakeaway/pie-webc-core';

import '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronLeft.js';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronRight.js';

import styles from './pagination.scss?inline';
import {
    type PaginationProps,
    defaultProps,
    ON_PAGE_CHANGE_EVENT,
    ON_PREV_EVENT,
    ON_NEXT_EVENT,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-pagination';

/**
 * @tagname pie-pagination
 * @event {CustomEvent} pie-pagination-page-change - when the user interacts with a pagination control.
 * @event {CustomEvent} pie-pagination-prev - when the user clicks the "previous" control.
 * @event {CustomEvent} pie-pagination-next - when the user clicks the "next" control.
 */
@safeCustomElement('pie-pagination')
export class PiePagination extends RtlMixin(PieElement) implements PaginationProps {
    @property({ type: Object })
    public aria: PaginationProps['aria'];

    @property({ type: Number })
    public currentPage = defaultProps.currentPage;

    @property({ type: Number })
    public totalPages = defaultProps.totalPages;

    @property({ type: Boolean })
    public disabled = defaultProps.disabled;

    /**
     * Emits the page change event with the page the user wants to navigate to.
     * The component never updates `currentPage` itself.
     *
     * @private
     */
    private _emitPageChange (currentPage: number) {
        dispatchCustomEvent(this, ON_PAGE_CHANGE_EVENT, { currentPage });
    }

    /**
     * Handles a click on the "previous" control.
     *
     * @private
     */
    private _handlePreviousClick () {
        if (this.disabled || this.currentPage <= 1) return;

        const requestedPage = this.currentPage - 1;

        dispatchCustomEvent(this, ON_PREV_EVENT, { currentPage: requestedPage });
        this._emitPageChange(requestedPage);
    }

    /**
     * Handles a click on the "next" control.
     *
     * @private
     */
    private _handleNextClick () {
        if (this.disabled || this.currentPage >= this.totalPages) return;

        const requestedPage = this.currentPage + 1;

        dispatchCustomEvent(this, ON_NEXT_EVENT, { currentPage: requestedPage });
        this._emitPageChange(requestedPage);
    }

    /**
     * Handles a click on a page number control.
     *
     * @private
     */
    private _handlePageClick (page: number) {
        if (this.disabled || page === this.currentPage) return;
        this._emitPageChange(page);
    }

    /**
     * Computes the visible page items, collapsing pages outside the current
     * page's window behind an ellipsis marker. The current page never sits
     * directly against an ellipsis. See the README for the rendered sequences.
     *
     * @private
     */
    private _getVisiblePages (currentPage: number, totalPages: number): Array<number | 'ellipsis'> {
        if (totalPages <= 7) {
            return Array.from({ length: Math.max(totalPages, 0) }, (_, index) => index + 1);
        }

        const edgeWindowSize = 5;

        if (currentPage <= edgeWindowSize - 1) {
            return [
                ...Array.from({ length: edgeWindowSize }, (_, index) => index + 1),
                'ellipsis',
                totalPages,
            ];
        }

        if (currentPage >= totalPages - (edgeWindowSize - 2)) {
            return [
                1,
                'ellipsis',
                ...Array.from({ length: edgeWindowSize }, (_, index) => totalPages - edgeWindowSize + 1 + index),
            ];
        }

        return [
            1,
            'ellipsis',
            currentPage - 1,
            currentPage,
            currentPage + 1,
            'ellipsis',
            totalPages,
        ];
    }

    /**
     * Renders the chevron icon for the previous/next controls, mirroring it for RTL.
     *
     * @private
     */
    private _renderChevronIcon (direction: 'previous' | 'next') {
        const pointsLeft = direction === 'previous' ? !this.isRTL : this.isRTL;

        return pointsLeft
            ? html`<icon-chevron-left></icon-chevron-left>`
            : html`<icon-chevron-right></icon-chevron-right>`;
    }

    render () {
        const {
            aria, currentPage, disabled, totalPages,
        } = this;

        const visiblePages = this._getVisiblePages(currentPage, totalPages);
        const isPreviousDisabled = disabled || currentPage <= 1;
        const isNextDisabled = disabled || currentPage >= totalPages;

        return html`
            <nav
                class="c-pagination"
                aria-label="${aria?.label ?? 'Pagination'}"
                data-test-id="pie-pagination">
                <ol class="c-pagination-list" data-test-id="pie-pagination-list">
                    <li class="c-pagination-item">
                        <pie-icon-button
                            data-test-id="pie-pagination-previous"
                            size="xsmall"
                            variant="ghost-secondary"
                            ?disabled="${isPreviousDisabled}"
                            .aria="${{ label: 'Previous page' }}"
                            @click="${this._handlePreviousClick}">
                            ${this._renderChevronIcon('previous')}
                        </pie-icon-button>
                    </li>

                    ${visiblePages.map((pageItem) => {
            if (pageItem === 'ellipsis') {
                return html`
                            <li class="c-pagination-item" aria-hidden="true">
                                <span
                                    class="c-pagination-ellipsis"
                                    data-test-id="pie-pagination-ellipsis">
                                    …
                                </span>
                            </li>`;
            }

            const page = pageItem;
            const isCurrent = page === currentPage;
            const classes = {
                'c-pagination-control': true,
                'c-pagination-control--current': isCurrent,
            };

            return html`
                            <li class="c-pagination-item">
                                <button
                                    type="button"
                                    class="${classMap(classes)}"
                                    data-test-id="pie-pagination-page"
                                    ?disabled="${disabled}"
                                    aria-current="${ifDefined(isCurrent ? 'page' : undefined)}"
                                    aria-label="Page ${page}"
                                    @click="${() => this._handlePageClick(page)}">
                                    ${page}
                                </button>
                            </li>`;
        })}

                    <li class="c-pagination-item">
                        <pie-icon-button
                            data-test-id="pie-pagination-next"
                            size="xsmall"
                            variant="ghost-secondary"
                            ?disabled="${isNextDisabled}"
                            .aria="${{ label: 'Next page' }}"
                            @click="${this._handleNextClick}">
                            ${this._renderChevronIcon('next')}
                        </pie-icon-button>
                    </li>
                </ol>
            </nav>`;
    }

    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PiePagination;
    }
}
