## How to use Next.js App

### `yarn dev`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `yarn build`

Builds the app for production to the `build` folder.

## Testing Web Components in Next.js@13

[Next.js](https://nextjs.org/) is a React framework that enables users to create full-stack Web applications by extending the latest React features. One of the features is Server Side Rendering (SSR) in which the framework will render components and pages in the server at a request time and then serve it to the client.

Lit components can be used in Next.js@13 projects without any extra configurations, but they will only be shallowly rendered on the server, which means only the Lit component's tag and attributes set via JSX will be rendered, and the component's shadow DOM will not. Thus, the Lit team provides a plugin [@lit-labs/nextjs](https://github.com/lit/lit/tree/main/packages/labs/nextjs) that we need to add to enable deep server rendering of Lit components.

#### Usage

```js
// next.config.js
const withLitSSR = require('@lit-labs/nextjs')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your own config here
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withLitSSR(nextConfig);
```

#### Using Web Components in React

React 18 and previous versions don't handle web components and custom elements out of the box correctly in all cases due to how React treats custom props and events (More details can be found [here](https://lit.dev/docs/frameworks/react/)). Our solution for this is to wrap the web component to include the [`@lit/react`](https://lit.dev/docs/frameworks/react/) package, generating a `react` file inside the component's `dist` folder.

Therefore, in order to import the web component into your React application, please use:

import { PieButton } from '@justeattakeaway/pie-button/dist/react';
