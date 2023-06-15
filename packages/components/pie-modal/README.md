<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-modal">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-modal.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-modal)
2. [Local Development](#local-development)
3. [Importing the component](#importing-the-component)
4. [Props](#props)

# pie-modal

This modal is a Web Component built using Lit.

## Local development

Install dependencies at the root
```
yarn
```

Navigate to this folder, compile with TypeScript and build with Vite
```
cd packages/components/pie-modal
yarn build
```

Compile and watch for changes (auto-compiles `dist` on save)
```
yarn watch
```

### Importing the component

```javascript
// default
import { PieModal } from '@justeattakeaway/pie-button';

// react
import { PieModal } from '@justeattakeaway/pie-button/dist/react';
```

## Props

| Property | Type      | Default | Description                                     |
|----------|-----------|---------|-------------------------------------------------|
| isOpen   | `Boolean` | `false` | Controls if the modal element is open or closed |
| heading*   | `String` | - | Sets the heading of the modal |
| headingLevel   | `String` | `h2` | Allows you to set the heading tag (from `h1` to `h6`) |


## Testing

### Visual tests

Run at the root of the monorepo:
```
yarn test:visual --filter=pie-modal
```

Note: To run these locally, you will need to ensure that any environment variables required are set up on your machine to mirror those on CI (such as Percy tokens). How you achieve this will differ between operating systems.

### Setup via bash:

```
export PERCY_TOKEN_PIE_MODAL=abcde
```

### Setup via package.json:

Under scripts `test:visual` replace the environment variable with the below:

```
PERCY_TOKEN_PIE_MODAL=abcde
