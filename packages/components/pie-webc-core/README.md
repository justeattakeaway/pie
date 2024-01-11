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
6. [Testing](#testing)

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

This package provides `lit` as a dependency which means the package that depends on `@justeattakeaway/pie-webc-core` will automatically install `lit` into the `node_modules` folder of its consuming application.

Other dependencies may be added in future to make it easier for people to install and use our components.

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development).

To run the unit tests, simply run `yarn test --filter=pie-webc-core` from the root of the monorepo.

## Testing

- Currently we have two methods of testing our core utilities:
  - Unit tests using Vitest
  - Browser tests using Playwright

### Unit tests
We write unit tests for small pieces of functionality that can be tested in isolation. These could be things such as class decorators or utility functions. However, sometimes testing in an isolated node environment is not enough. This is where Browser tests come in.

### Browser tests
We write browser tests for functionality that requires a browser environment to test. This could be things such as component class mixins. For these, we run our tests using Playwright. This allows us to run our tests in a real browser environment and test things such as DOM manipulation and events. A useful pattern for this kind of testing is to write a mock component that uses the mixin you want to test. This allows you to test the mixin in isolation without having to worry about the implementation of the component itself.

### Naming and running tests
Currently, for writing unit tests we simply name the file `**/*.spec.ts`. To write browser tests, we name the file `**/*.browser.spec.ts`. This allows us to run all unit tests using `yarn test --filter=pie-webc-core` and all browser tests using `yarn test:browsers --filter=pie-webc-core`.
