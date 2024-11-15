---
eleventyNavigation:
    key: NextJS 14 Integration
    parent: engineers-web-components
    order: 3
---

## Installation
Please install the following JET dependencies (examples use `yarn` but feel free to use `npm` if preferred):

```bash
yarn add @justeattakeaway/pie-css @justeattakeaway/pie-webc @justeattakeaway/pie-icons-webc
```

And the following third party dependencies:
```bash
yarn add @lit-labs/nextjs @lit/react
```
---

## Setup

### CSS and Design Token variables
You should import [@justeattakeaway/pie-css](https://www.npmjs.com/package/@justeattakeaway/pie-css) into your root component file (or wherever you prefer) so that the variables it provides are globally available (some of these variables are used by the component styles):

```js
// Example - /src/app/layout.tsx
import '@justeattakeaway/pie-css';
```

For more information on `pie-css` please take a look at the package [readme](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-css)

### Typography
We have a [dedicated page](/foundations/typography/code/) which explains how to set up typography. In short, you need to install the JET fonts and set up the appropriate `font-face` CSS code.

### NextJS config

We need to update our `next.config.js` file to enable server-side rendering (SSR).

Example minimal config file:

```js
// Example - ./next.config.js
const withLitSSR = require('@lit-labs/nextjs')();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = withLitSSR(nextConfig);
```

---

## Usage

{% notification {
  type: "information",
  message: "If you are using the app router structure, please ensure you add `\"use client\"` to the top of the files that directly import the PIE components. This does NOT prevent SSR, it just means that PIE components cannot be used directly in React server-components. These client components can then be imported into RSCs."
} %}

It is recommended to import all components from [@justeattakeaway/pie-webc](https://www.npmjs.com/package/@justeattakeaway/pie-webc). For React-based applications, there is a `/react/` entry point as shown in the example code below:

```jsx
"use client"

import { PieButton } from "@justeattakeaway/pie-webc/react/button.js";
import { PieLink } from "@justeattakeaway/pie-webc/react/link.js";
import { IconCamera } from "@justeattakeaway/pie-icons-webc/dist/react/IconCamera";

export default function SomeComponent() {
    return (
        <div>
            <PieButton size="small-productive" iconPlacement="leading">
                <IconCamera slot="icon"></IconCamera>
                Camera Button
            </PieButton>
        </div>
    );
}
```

{% notification {
  type: "information",
  message: "Check individual component `code` pages on this website to see how to use them specifically in your application. Such as [PIE Button](/components/button/code/)."
} %}

You should now be able to use any components you need in your NextJS application!

Please reach out to us if you have any troubles or spot any errors in our guide.
