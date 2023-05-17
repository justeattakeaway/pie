# pie-wrapper-react

## Usage

This package is for generating a React wrapper during the build process of a Lit component. Previously, React developers would need to install the component, then manually wrap it within a `createComponent` function before it could be used. This is because React 18 and previous versions don't handle web components and custom elements out of the box correctly, due to how React treats custom props and events.

With this package, the below code (example of `pie-button`) is automatically generated into the component's `src/index.ts` file. The wrapper then gets saved to the component's `dist` folder during the build, before being removed again from the `src/index.ts` file.

```
import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import type { EventName } from '@lit-labs/react';

export const PButton = createComponent({
        displayName: 'PieButton',
        elementClass: PieButton,
        react: React,
        tagName: 'pie-button',
        events: {}
    });
```

This package references a `custom-elements.json` file, which is generated via a `yarn cem analyze` command from the npm package `@custom-elements-manifest/analyzer`. This package searches through the repo for any custom elements and condenses it's information, such as events and attributes, into a large json object - making it easier to use for wrappers.

To use the react wrapper in an application, import `Pie{Component}React` from the package of the component. For example:

```
import { PieButtonReact } from '@justeattakeaway/pie-button'
```

Note: In order for the `custom-elements-manifest/analyzer` to recognise events inside your component, please declare the event inside the `this.dispatchEvent` function. For example:

```
this.dispatchEvent(new CustomEvent('CustomEvent', { detail: 'WC event dispatched' }))
```

## Credits

This package was heavily inspired by [`spectrum-web-components`](https://github.com/adobe/spectrum-web-components).