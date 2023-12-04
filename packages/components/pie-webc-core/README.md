<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-webc-core">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc-core.svg">
  </a>
</p>

# pie-webc-core

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Importing the package](#importing-the-package)
4. [Dependencies](#dependencies)
5. [Contributing](#contributing)

## Introduction

A core library for PIE web components which contains classes, mixins, utilities and anything other functionality that can be shared across web components.


## Installation

To add `pie-webc-core` to your component, run the following on your command line:

```bash
$ yarn add @justeattakeaway/pie-webc-core
```

## Importing the package

```js
import { RequiredProperty, RtlMixin } from '@justeattakeaway/pie-webc-core';

export class MyComponent extends RtlMixin(LitElement) implements MyComponentProps {
  // ...

  @property({ type: String })
  @requiredProperty('my-component')
  public value!: string;

  // ...
}
```

## Dependencies

This package provides `lit` as a dependency which means that package that depends on `@justeattakeaway/pie-webc-core` will automatically install `lit` into the `node_modules` folder of its consuming application.

Other dependencies may be added in future to make it easier for people to install and use our components.

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development).

To run the unit tests, simply run `yarn test --filter=pie-webc-core` from the root of the monorepo.
