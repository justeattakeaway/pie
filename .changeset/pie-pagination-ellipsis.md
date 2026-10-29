---
'@justeattakeaway/pie-pagination': minor
---

[Added] - Automatic ellipsis for large page ranges: pages outside the current page's window are collapsed behind a non-interactive `…` separator, with the first and last page always visible. Ellipsis items are skipped by keyboard focus and hidden from screen readers (`aria-hidden="true"`).
