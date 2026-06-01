# Next.js 14

This guide will show you how to set up the PIE Web Components in a Next.js 14 applications.

> This guide assumes you have first followed the [Getting started](https://webc.pie.design/?path=/docs/introduction-getting-started--docs), [Typography](https://webc.pie.design/?path=/docs/introduction-typography--docs) and [CSS setup](https://webc.pie.design/?path=/docs/introduction-css-setup--docs) guides.
> Please make sure to follow them before continuing with this guide.

## Table of Contents

- [Dependencies](#dependencies)
- [Next.js config](#nextjs-config)
- [Usage](#usage)
- [Configuring the test-id attribute](#configuring-the-test-id-attribute)


## Dependencies
The first step is to install some React and Next.js specific dependencies:

**Using Yarn:**

```bash
yarn add @lit-labs/nextjs @lit/react
```

**Using NPM:**

```bash
npm install @lit-labs/nextjs @lit/react
```

## Next.js config

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

## Usage

> If you are using the app router structure, please ensure you add `use client` to the top of the files that directly import the PIE components. This does **not** prevent SSR, it just means that PIE components cannot be used directly in React server-components. These client components can then be imported into RSCs.

For React-based applications, there is a `/react/` entry point in both `@justeattakeaway/pie-webc` and `@justeattakeaway/pie-icons-webc` as shown in the example code below:

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

You should now be able to use any components you need in your Next.js application!

## Configuring the test-id attribute

PIE components expose their internal test hooks using the `data-test-id` attribute by default. If your test tooling targets a different attribute (for example, Playwright's `testConfig.testIdAttribute`), you can tell PIE to use the same attribute name so a single `getByTestId` strategy works for both your own markup and PIE internals.

Because the app is server-side rendered, set this on the **client only**, as early as possible — at the module scope of your custom `_app`, so it runs before any PIE component hydrates:

```jsx
// pages/_app.tsx — module scope (runs before hydration)
import { setPieTestIdAttribute } from '@justeattakeaway/pie-webc-core';

if (typeof window !== 'undefined') {
    setPieTestIdAttribute('data-qa');
}
```

- Defaults to `data-test-id`. Pass any valid attribute name (e.g. `data-qa`). Invalid names are ignored with a warning.
- The `typeof window` guard keeps it off the server; placing it at module scope (not in `useEffect`/`componentDidMount`) ensures it runs **before** PIE components hydrate, so the first client render already uses the configured attribute.
- During SSR the server-rendered HTML still contains `data-test-id`; the configured name is applied on the client after hydration (which is what Playwright e2e tests observe).
- `setPieTestIdAttribute` is provided by `@justeattakeaway/pie-webc-core`, which is installed automatically as a dependency of the PIE components.
