## How to use Next.js App

### `yarn dev`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `yarn build`

Builds the app for production to the `build` folder.


## Testing Web Components in React 18

React 18 and previous versions don't handle web components and custom elements out of the box correctly in all cases due to how React treats custom props and events (More details can be found [here](https://lit.dev/docs/frameworks/react/)). While the React team fixed some of the issues with this [experimental release](https://github.com/justeattakeaway/pie/compare/0.0.0-experimental-56a3c18e5-20230314?expand=1), we shouldn't rely on it as many of our apps are using older instances of React and a few [issues](https://custom-elements-everywhere.com/libraries/react/results/results.html) haven't been addressed yet.

Fortunately, the Lit framework provides a package [@lit-labs/react](https://lit.dev/docs/frameworks/react/) that provides utilities to take care of the issues mentioned above, thus, we need to wrap our web components with `createComponent` function.

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

All Next versions before Next 13 do not transpile modules natively. Therefore, we need to install a separate package: `next-transpile-modules` for transpiling modules.

Once this is installed, head to your `next.config.js` and transpile modules needed for adding the button component:

```
const transpileModules = [
    '@justeattakeaway/pie-button',
    '@lit-labs/react',
    'lit'
];

const withTM = require('next-transpile-modules')(transpileModules);

module.exports = withTM;
```

In order to use Lit components in the next 10 application, they need to be dynamically imported or mounted with UseEffect hooks. Without this, you are likely to receive the `window is not defined` error.

```
  const PButton = dynamic(() => import('../components/PieButton'), { ssr: false });
```

Dynamically importing components into a React application means that, unless required immediately for a page to load and bundle, the import is held off until needed.