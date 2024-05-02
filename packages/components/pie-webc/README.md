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

`pie-webc` is a bundle that contains all PIE web components built using the Lit library.

This package can be easily integrated into various frontend frameworks and customized through a set of properties.

## Installation

To install `pie-webc` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-webc

# yarn
$ yarn add @justeattakeaway/pie-webc
```

## Importing components

Simply import each one individually using its specific entrypoint.

```js
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/modal.js';
```

And for React applications:

```jsx
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieModal } from '@justeattakeaway/pie-webc/react/modal.js';
```


For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).

## How it works
There is a command that can be run to add all pie components to this package. The command is:

```npx add-components```

When run, a script will find each pie component and create `js` and `d.ts` files them in both `components` and `react` directories. The script will also update the `exports` field in the `package.json` file to include the new components and add the latest version of each component to the `dependencies` field.

Generally, there should be no need to run this script. The only time it should be run is when we generated a new component using the component generator. The generator will take care of running this script automatically, so it should be a rare occurrence that it needs to be run manually.

