<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-webc">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc.svg">
  </a>
</p>


# Table of Contents

1. [Introduction](#pie-webc)
2. [Installation](#installation)
3. [Contributing](#contributing)


## pie-webc

`pie-webc` is a wrapper package which contains **all** PIE web components.

This means that after installing this package as a dependency, you can use as many PIE web components as you like, without bloating your application with unused code, or slowing it down with unnecessary component registrations in the browser.


## Installation

To install `pie-webc` in your application, run the following on your command line:

```bash
npm i @justeattakeaway/pie-webc

yarn add @justeattakeaway/pie-webc
```


## Importing components

Simply import each component individually using its specific entrypoint.

```js
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/modal.js';
```

Or for React applications:

```js
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieModal } from '@justeattakeaway/pie-webc/react/modal.js';
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


## For maintainers

There is a command that can be run (from the root of the monorepo) which adds all PIE components to this package:

```npx add-components```

This does the following:
1. Loops through the (root) `packages/components` folder to find all of the PIE components, ignoring non-component folders, helper packages, and this package itself.
2. Adds a `.js` and `.d.ts` file for each component to both the `components` and `react` directories (inside `pie-webc`).
3. Adds entries for each component to the `exports` field in `pie-webc/package.json`.
4. Adds entries for each component to the `dependencies` field in `pie-webc/package.json`, using the current (latest) version.

**Generally, there should be no need to run this script.** The only time it should be run is when a new component is created using the [component generator](../../tools/generator-pie-component/README.md). The generator runs this script automatically after creating a new component.

`changeset` should also make sure that the versions of components are up-to-date.


## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development).
