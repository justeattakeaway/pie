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

## Testing Web Components in React <=18

Besides integrating the SSR plugin above, React 18 and previous versions don't handle web components and custom elements out of the box correctly in all cases due to how React treats custom props and events (More details can be found [here](https://lit.dev/docs/frameworks/react/)).

While the React team has fixed some of the issues with this [experimental release](https://github.com/justeattakeaway/pie/compare/0.0.0-experimental-56a3c18e5-20230314?expand=1), we can't rely on it as many of our apps are using older instances of React and several [issues](https://custom-elements-everywhere.com/libraries/react/results/results.html) haven't been addressed yet.

Fortunately, the Lit framework provides a package [@lit-labs/react](https://lit.dev/docs/frameworks/react/) that provides utilities to take care of the issues, thus, we need to wrap our web components with `createComponent` function.

#### Using `createComponent` in React

```
import React, { useState } from 'react';
import { createComponent } from '@lit-labs/react';
import { PieButton, BUTTON_VARIANT } from '@justeattakeaway/pie-button';

const Button = createComponent({
  tagName: 'pie-button',
  elementClass: PieButton,
  react: React,
  events: { onCustomEvent: 'CustomEvent' },
});

function App () {
  const handleCustomEvent = () => console.log('onCustomEvent was triggered');
  const handleClick = () => console.log('click event was triggered');

  return (
    <Button variant={BUTTON_VARIANT.PRIMARY} onClick={handleClick} onCustomEvent={handleCustomEvent}>
      Sample button
    </Button>
  );
}
```
