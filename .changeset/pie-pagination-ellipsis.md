---
'@justeattakeaway/pie-pagination': minor
---

[Added] - Automatic ellipsis for large page ranges: pages outside the current page's window are collapsed behind a non-interactive `…` separator, with the first and last page always visible. Ellipsis items are skipped by keyboard focus and hidden from screen readers (`aria-hidden="true"`).
[Fixed] - `currentPage` and `totalPages` are now coerced and clamped: non-finite or non-numeric values render an empty, fully-disabled pagination instead of allowing navigation to an indefinite number of pages, and an out-of-range `currentPage` is clamped to the valid range.
[Fixed] - Ellipsis separator now uses the disabled content colour when the pagination is disabled.
[Changed] - Page number controls grow to fit multi-digit page numbers instead of clipping.
