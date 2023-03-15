## How to use React App

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `yarn build`

Builds the app for production to the `build` folder.\


## Testing Web Components in React 18

React 18 and previous versions don't handle web components and custom elements out of the box correctly in all cases due to how React treats custom props and events (More details can be found [here](https://lit.dev/docs/frameworks/react/)). While the React team fixed some of the issues with this [experimental release](https://github.com/justeattakeaway/pie/compare/0.0.0-experimental-56a3c18e5-20230314?expand=1), we shouldn't rely on it as many of our apps are using older instances of React and a few [issues](https://custom-elements-everywhere.com/libraries/react/results/results.html) haven't been addressed yet.

Fortunately, the Lit framework provides a package [@lit-labs/react](https://lit.dev/docs/frameworks/react/) that provides utilities to take care of the issues mentioned above, thus, we need to wrap our web components with `createComponent` function.

#### Using `createComponent` in React

```
import React, { useState } from 'react';
import { createComponent } from '@lit-labs/react';

const Button = createComponent({
  tagName: 'pie-button',
  elementClass: PieButton,
  react: React,
  events: { onCustomEvent: 'CustomEvent' },
});

function App () {
  const onCustomEvent = () => console.log('onCustomEvent was triggered');

  return (
    <Button
      onCustomEvent={onCustomEvent}
    />
  );
}
```
