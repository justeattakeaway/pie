# Next.js Integration

1. Install `@lit-labs/nextjs` and `@lit/react`.
2. Wrap `next.config.js` with the Lit SSR plugin:

```js
const withLitSSR = require('@lit-labs/nextjs')();
module.exports = withLitSSR(nextConfig);
```

3. Add `"use client"` to any file that imports PIE components directly (does not prevent SSR — only means PIE components can't be used in React Server Components directly).
4. Import components from the `/react/` sub-path:

```jsx
"use client"
import { PieButton } from "@justeattakeaway/pie-webc/react/button.js";
import { IconCamera } from "@justeattakeaway/pie-icons-webc/dist/react/IconCamera";
```
