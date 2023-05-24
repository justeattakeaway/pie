## How to use React App

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `yarn build`

Builds the app for production to the `build` folder.\


#### Using Web Components in React

React 18 and previous versions don't handle web components and custom elements out of the box correctly in all cases due to how React treats custom props and events (More details can be found [here](https://lit.dev/docs/frameworks/react/)). We have created the fix for this by generating a `react` file inside the component's `dist` folder. Therefore, in order to import the web component into your React application, please use:

import { PieButton } from '@justeattakeaway/pie-button/dist/react';
