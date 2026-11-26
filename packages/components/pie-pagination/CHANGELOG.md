# @justeattakeaway/pie-pagination

## 0.2.0

### Minor Changes

- [Added] - Automatic ellipsis for large page ranges: pages outside the current page's window are collapsed behind a non-interactive `…` separator, with the first and last page always visible. Ellipsis items are skipped by keyboard focus and hidden from screen readers (`aria-hidden="true"`). ([#3281](https://github.com/justeattakeaway/pie/pull/3281)) by [@nindyahapsari](https://github.com/nindyahapsari)

  [Fixed] - `currentPage` and `totalPages` are now coerced and clamped: non-finite or non-numeric values render an empty, fully-disabled pagination instead of allowing navigation to an indefinite number of pages, and an out-of-range `currentPage` is clamped to the valid range.
  [Fixed] - Ellipsis separator now uses the disabled content colour when the pagination is disabled.
  [Changed] - Page number controls grow to fit multi-digit page numbers instead of clipping.

## 0.1.3

### Patch Changes

- Updated dependencies [[`7dff68c`](https://github.com/justeattakeaway/pie/commit/7dff68ca731b7ad07387aa2da23ac51a8d030fb7)]:
  - @justeattakeaway/pie-webc-core@22.1.0
  - @justeattakeaway/pie-button@1.16.1
  - @justeattakeaway/pie-icon-button@2.8.4
  - @justeattakeaway/pie-icons-webc@1.31.1

## 0.1.2

### Patch Changes

- Updated dependencies [[`5a5d2e5`](https://github.com/justeattakeaway/pie/commit/5a5d2e50b6d04dc7b02e71b89187fc2b48b5150c), [`18d05e6`](https://github.com/justeattakeaway/pie/commit/18d05e6f87f8cde6ef8522266b5d1f98c38961f2)]:
  - @justeattakeaway/pie-button@1.16.0
  - @justeattakeaway/pie-icons-webc@1.31.0
  - @justeattakeaway/pie-icon-button@2.8.3

## 0.1.1

### Patch Changes

- Updated dependencies [[`2d33784`](https://github.com/justeattakeaway/pie/commit/2d33784c0fcd25b3cb1f6b6e381201e848376213)]:
  - @justeattakeaway/pie-icons-webc@1.30.0
  - @justeattakeaway/pie-icon-button@2.8.2

## 0.1.0

### Minor Changes

- [Added] - `pie-pagination-prev` and `pie-pagination-next` events, dispatched when the previous/next controls are clicked. Both events contain `{ currentPage }` and fire in addition to the existing `pie-pagination-page-change` event. On the React wrapper they are exposed as `onPiePaginationPrev` and `onPiePaginationNext`. ([#3238](https://github.com/justeattakeaway/pie/pull/3238)) by [@nindyahapsari](https://github.com/nindyahapsari)

- [Added] - Created pie-pagination component with page numbers and previous/next controls. ([#3238](https://github.com/justeattakeaway/pie/pull/3238)) by [@nindyahapsari](https://github.com/nindyahapsari)
