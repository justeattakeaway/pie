<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-<%= fileName %>">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-<%= fileName %>.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-<%= fileName %>)
2. [Local Development](#local-development)
3. [Importing the component](#importing-the-component)
4. [Props](#props)
5. [Testing](#testing)

# pie-<%= fileName %>

`pie-<%= fileName %>` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Local development

Install the dependencies. Note that this, and the following commands below, should be run from the **root of the monorepo**:

```bash
yarn
```

To build the `pie-<%= fileName %>` package, run the following command:

```bash
yarn build --filter=pie-<%= fileName %>
```

If you'd like to develop using the component storybook, then you should build the component in `watch` mode, and run storybook in a separate terminal tab:

```bash
yarn watch --filter=pie-<%= fileName %>

# in a separate terminal tab, run
yarn dev --filter=pie-storybook
```

### Importing the component

```js
// default
import { Pie<%= componentName %> } from '@justeattakeaway/pie-<%= fileName %>';

// react
import { Pie<%= componentName %> } from '@justeattakeaway/pie-<%= fileName %>/dist/react';
```

## Props

| Property | Type | Default | Description |
|---|---|---|---|
| - | - | - | - |

In your markup or JSX, you can then use these to set the properties for the `pie-<%= fileName %>` component:

```html
<!-- Native HTML -->
<pie-<%= fileName %>></pie-<%= fileName %>>

<!-- JSX -->
<Pie<%= componentName %>></Pie<%= componentName %>>
```

## Testing

### Browser tests

To run the browser tests, run the following command from the root of the monorepo:

```bash
yarn test:browsers --filter=pie-<%= fileName %>
```

### Visual tests

To run the visual regression tests, run the following command from the root of the monorepo:

```bash
yarn test:visual --filter=pie-<%= fileName %>
```

Note: To run these locally, you will need to ensure that any environment variables required are set up on your machine to mirror those on CI (such as Percy tokens). How you achieve this will differ between operating systems.

#### Setup via bash

```bash
export PERCY_TOKEN_PIE_<%= percyComponentName %>=abcde
```

#### Setup via package.json

Under scripts `test:visual` replace the environment variable with the below:

```bash
PERCY_TOKEN_PIE_<%= percyComponentName %>=abcde
```