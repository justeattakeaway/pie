# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### `yarn dev`

Runs the app in the development mode.

#### Using Web Components in React

React 18 and previous versions don't handle web components and custom elements out of the box correctly in all cases due to how React treats custom props and events (More details can be found [here](https://lit.dev/docs/frameworks/react/)). Our solution for this is to wrap the web component to include the `[@lit/react](https://lit.dev/docs/frameworks/react/)` package, generating a `react` file inside the component's `dist` folder.

### Example

import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
