---
"@justeattakeaway/pie-modal": minor
---

[Changed] - Defer importing the `dialog-polyfill` package to when the component is running in the browser. The package is not universal code, meaning it contains browser references and this code is run by simply importing the package. This breaks SSR in applications such as NextJS. Using a dynamic import (whilst not ideal) solves this issue by preventing the client-only code run running on the server.
