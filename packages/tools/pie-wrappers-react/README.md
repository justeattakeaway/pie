# pie-wrappers-react

## Usage

This package is for generating a react wrapper during the build process of a lit component. Previously, react developers would need to manually wrap web components within a `createComponent` function before using the component. This is because React 18 and previous versions don't handle web components and custom elements out of the box correctly, due to how React treats custom props and events.

With this package, the below code is automatically generated into the component's `src/index.ts` file. The wrapper then gets saved to the component's `dist` folder before being removed again from the `src/index.ts` file.


## Credits

This package was heavily inspired by the excellent [`spectrum-web-components`](https://github.com/adobe/spectrum-web-components) package.