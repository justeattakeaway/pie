# pie-wrappers-react

## Usage

This package is for generating React wrappers during the build process of a Lit component. Previously, React developers would need to install the component, then manually wrap it within a `createComponent` function before it could be used. This is because React 18 and previous versions don't handle web components and custom elements out of the box correctly, due to how React treats custom props and events.

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
        events: {
            onCustomEvent: 'onCustomEvent' as EventName<CustomEvent>, 
        }
    });
```

This package references a `custom-elements.json` file from the root of the repo. This file is generated via a `yarn cem analyze` command from the package `@custom-elements-manifest/analyzer` which searches through the repo for any custom elements and condenses it's information, such as events and attributes, into a large json object - making it easier to use for wrappers.

To use the react wrapper in an application, import the `P{Component}`. For example, you would use `PButton` instead of `PieButton` for the button component.

## Credits

This package was heavily inspired by [`spectrum-web-components`](https://github.com/adobe/spectrum-web-components).