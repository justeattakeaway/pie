---
"@justeattakeaway/pie-pagination": minor
---

[Added] - `pie-pagination-prev` and `pie-pagination-next` events, dispatched when the previous/next controls are clicked. Both events contain `{ currentPage }` and fire in addition to the existing `pie-pagination-page-change` event. On the React wrapper they are exposed as `onPiePaginationPrev` and `onPiePaginationNext`.
