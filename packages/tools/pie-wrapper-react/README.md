# pie-wrapper-react

## Usage

This package is for generating a React wrapper during the build process of a Lit component. Previously, React developers would need to install the component, then manually wrap it within a `createComponent` function before it could be used. This is because React 18 and previous versions don't handle web components and custom elements out of the box correctly, due to how React treats custom props and events.

With this package, the below code (example of `pie-button`) is automatically generated into a `react.ts` file within the component's `src` directory. The wrapper then gets saved to the component's `dist` folder during the build.

```js
import * as React from 'react';
import { createComponent } from '@lit/react';
import { PieButton as PieButtonLit } from './index';
import { ButtonProps } from './defs';

const PieButtonReact = createComponent({
        displayName: 'PieButton',
        elementClass: PieButtonLit,
        react: React,
        tagName: 'pie-button',
        events: {}
    });

// Provides missing contextual types for a React button component
type ReactBaseType = Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onClick'>

// Workaround for `createComponent` setting all props set as optional with the additional contextual types declared above
export const PieButton = PieButtonReact as React.ForwardRefExoticComponent<React.PropsWithoutRef<ButtonProps> & React.RefAttributes<PieButtonLit> & ReactBaseType>;
```

This package references a `custom-elements.json` file, which is generated via a `yarn cem analyze` command from the npm package `@custom-elements-manifest/analyzer`. This package searches through the repo for any custom elements and condenses its information, such as events and attributes, into a large JSON object - making it easier to use for wrappers. Therefore, any changes made to a web component will automatically be reflected in the `custom-elements.json` file during the build process.

If you notice changes in this file, please commit this as part of your PR. These are necessary for the react-wrapper to be generated with the most up-to-date version of the component so should be committed along with your other file changes.

To use the React wrapper in an application, import `Pie{Component}` from the package of the component, with the additional import of `dist/react`. For example:

```js
import { PieButton } from '@justeattakeaway/pie-button/dist/react'
```

When constructing your web component, please reference the `componentSelector` variable and component class to define your custom element to have consistent identifiers across the component. For example:

`customElements.define(componentSelector, PieIconButton);`

Alternatively, you can define your custom element with a string and component class directly. For example

`customElements.define('pie-icon-button', PieIconButton);`

The first parameter must be a reference to **componentSelector** or a **string** - this will be used to construct the tag name in the react component.

Note: In order for the `custom-elements-manifest/analyzer` to recognise events inside your component, please declare the event inside the `this.dispatchEvent` function. For example:

```js
this.dispatchEvent(new CustomEvent('CustomEvent', { detail: 'WC event dispatched' }))
```

## Credits

This package was heavily inspired by [`spectrum-web-components`](https://github.com/adobe/spectrum-web-components).
